import { createHash } from "node:crypto"
import { readFileSync, writeFileSync } from "node:fs"
import { pathToFileURL } from "node:url"

export const TIME_ZONE = "America/New_York"
const localTime = new Intl.DateTimeFormat("en-CA", {
  timeZone: TIME_ZONE,
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
  weekday: "short",
  hour: "2-digit",
  hourCycle: "h23",
})
const weekdays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
const unavailable = (o) => o.docksAvailable === 0 || !o.isReturning
const room = (o, minimum) => o.docksAvailable >= minimum && o.isReturning

function calendar(timestamp) {
  const parts = Object.fromEntries(
    localTime
      .formatToParts(new Date(timestamp))
      .map(({ type, value }) => [type, value])
  )
  return {
    day: weekdays.indexOf(parts.weekday),
    startHour: Math.floor(Number(parts.hour) / 3) * 3,
    date: `${parts.year}-${parts.month}-${parts.day}`,
  }
}

export function straightLineMeters(a, b) {
  const rad = Math.PI / 180
  const dLat = (b.lat - a.lat) * rad,
    dLon = (b.lon - a.lon) * rad
  const h =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(a.lat * rad) * Math.cos(b.lat * rad) * Math.sin(dLon / 2) ** 2
  return Math.round(6371000 * 2 * Math.atan2(Math.sqrt(h), Math.sqrt(1 - h)))
}

function summarizeRows(rows, ids, primaryId) {
  const blocked = rows.filter((row) =>
    unavailable(row.observations.get(primaryId))
  )
  const dates = new Map()
  for (const row of rows) {
    const current = dates.get(row.date) || { date: row.date, n: 0, zero: 0 }
    current.n++
    current.zero += Number(row.observations.get(primaryId).docksAvailable === 0)
    dates.set(row.date, current)
  }
  return {
    n: rows.length,
    dates: [...dates.values()].sort((a, b) => a.date.localeCompare(b.date)),
    // A display guard, not a statistical confidence threshold.
    limited: rows.length < 60 || dates.size < 3,
    primaryUnavailable: blocked.length,
    allUnavailable: blocked.filter((row) =>
      ids.every((id) => unavailable(row.observations.get(id)))
    ).length,
    anyBackupRoom: blocked.filter((row) =>
      ids.some((id) => id !== primaryId && room(row.observations.get(id), 3))
    ).length,
    stations: ids.map((id) => {
      const observations = rows.map((row) => row.observations.get(id))
      return {
        id,
        zero: observations.filter((o) => o.docksAvailable === 0).length,
        oneTwo: observations.filter(
          (o) => o.docksAvailable >= 1 && o.docksAvailable <= 2
        ).length,
        threePlus: observations.filter((o) => o.docksAvailable >= 3).length,
        returnsDisabled: observations.filter((o) => !o.isReturning).length,
        unavailable: observations.filter(unavailable).length,
        baselineWarning: observations.filter(
          (o) => o.docksAvailable <= 2 || !o.isReturning
        ).length,
        matchedOnePlus: blocked.filter((row) =>
          room(row.observations.get(id), 1)
        ).length,
        matchedThreePlus: blocked.filter((row) =>
          room(row.observations.get(id), 3)
        ).length,
      }
    }),
  }
}

export function summarizeHistory(input) {
  const ids = input.stations.map((station) => station.stationId)
  if (new Set(ids).size !== ids.length || !ids.includes(input.centerStationId))
    throw new Error("Invalid station identities")
  const captures = new Map()
  for (const observation of input.observations) {
    if (!ids.includes(observation.stationId)) continue
    if (
      !Number.isFinite(Date.parse(observation.capturedAt)) ||
      !Number.isFinite(Date.parse(observation.sourceUpdatedAt)) ||
      !Number.isInteger(observation.docksAvailable) ||
      observation.docksAvailable < 0 ||
      typeof observation.isReturning !== "boolean"
    ) {
      throw new Error(
        "Invalid observation: timestamps, dock count and return status are required"
      )
    }
    const timestamp = new Date(observation.capturedAt).toISOString()
    const capture = captures.get(timestamp) || new Map()
    if (capture.has(observation.stationId))
      throw new Error("Duplicate station at a capture time")
    capture.set(observation.stationId, observation)
    captures.set(timestamp, capture)
  }
  // Every denominator comes from exactly the same capture times for all stations.
  const rows = [...captures.entries()]
    .filter(([, observations]) => ids.every((id) => observations.has(id)))
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([timestamp, observations]) => ({
      timestamp,
      observations,
      ...calendar(timestamp),
    }))
  if (!rows.length) throw new Error("No matched observations")
  const primary = input.stations.find(
    (station) => station.stationId === input.centerStationId
  )
  const windows = weekdays.flatMap((day, dayIndex) =>
    Array.from({ length: 8 }, (_, index) => {
      const startHour = index * 3
      return {
        key: `${dayIndex}-${startHour}`,
        day,
        dayIndex,
        startHour,
        ...summarizeRows(
          rows.filter(
            (row) => row.day === dayIndex && row.startHour === startHour
          ),
          ids,
          input.centerStationId
        ),
      }
    })
  )
  const gaps = rows
    .slice(1)
    .map(
      (row, index) =>
        (Date.parse(row.timestamp) - Date.parse(rows[index].timestamp)) / 60000
    )
    .sort((a, b) => a - b)
  const ages = rows.flatMap((row) =>
    ids.map(
      (id) =>
        (Date.parse(row.timestamp) -
          Date.parse(row.observations.get(id).sourceUpdatedAt)) /
        60000
    )
  )
  const eligible = windows.filter((window) => !window.limited)
  const worst = eligible.toSorted(
    (a, b) =>
      b.stations.find((s) => s.id === input.centerStationId).zero / b.n -
      a.stations.find((s) => s.id === input.centerStationId).zero / a.n
  )[0]
  return {
    endpoint: "https://nyc-subway-map.vercel.app/api/citibike-analysis/data",
    reportGeneratedAt: input.generatedAt,
    timeZone: TIME_ZONE,
    primaryId: input.centerStationId,
    firstCapture: rows[0].timestamp,
    lastCapture: rows.at(-1).timestamp,
    matchedCaptureCount: rows.length,
    excludedUnmatchedCaptureCount: captures.size - rows.length,
    configuredSampleMinutes: input.source.sampleMinutes,
    medianCaptureGapMinutes: gaps.length
      ? gaps[Math.floor(gaps.length / 2)]
      : null,
    maximumCaptureGapMinutes: gaps.length ? gaps.at(-1) : null,
    maximumSourceAgeMinutes: Math.max(...ages),
    minimumWindowCount: Math.min(...windows.map((window) => window.n)),
    maximumWindowCount: Math.max(...windows.map((window) => window.n)),
    stations: input.stations.map((station) => ({
      id: station.stationId,
      name: station.name,
      straightLineMeters: straightLineMeters(primary, station),
    })),
    defaultWindow: worst?.key || windows.find((window) => window.n > 0).key,
    overall: summarizeRows(rows, ids, input.centerStationId),
    windows,
  }
}

if (
  process.argv[1] &&
  import.meta.url === pathToFileURL(process.argv[1]).href
) {
  const [, , inputPath, outputPath] = process.argv
  if (!inputPath || !outputPath)
    throw new Error(
      "Usage: node scripts/build-dockme-history.mjs input.json output.json"
    )
  const raw = readFileSync(inputPath)
  const output = {
    sourceSha256: createHash("sha256").update(raw).digest("hex"),
    ...summarizeHistory(JSON.parse(raw)),
  }
  writeFileSync(outputPath, JSON.stringify(output, null, 2) + "\n")
  console.log(
    `Wrote ${output.windows.length} windows from ${output.matchedCaptureCount} matched captures; default ${output.defaultWindow}`
  )
}
