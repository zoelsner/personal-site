import { test } from "node:test"
import assert from "node:assert/strict"
import {
  summarizeHistory,
  straightLineMeters,
} from "./build-dockme-history.mjs"

const stations = [
  {
    stationId: "primary",
    name: "Destination",
    lat: 40.722055,
    lon: -73.989111,
  },
  {
    stationId: "backup",
    name: "Alternative",
    lat: 40.72019576,
    lon: -73.98997825,
  },
]
function observation(
  stationId,
  capturedAt,
  docksAvailable,
  isReturning = true
) {
  return {
    stationId,
    capturedAt,
    sourceUpdatedAt: capturedAt,
    docksAvailable,
    isReturning,
  }
}
function input(observations) {
  return {
    stations,
    centerStationId: "primary",
    generatedAt: "2026-10-03T00:00:00Z",
    source: { sampleMinutes: 5 },
    observations,
  }
}

test("matches exact captures, separates dock states from paused returns, and conditions backups on primary unavailability", () => {
  const result = summarizeHistory(
    input([
      observation("primary", "2026-10-02T22:00:00Z", 0),
      observation("backup", "2026-10-02T22:00:00Z", 2),
      observation("primary", "2026-10-02T22:06:00Z", 2),
      observation("backup", "2026-10-02T22:06:00Z", 5),
      observation("primary", "2026-10-02T22:12:00Z", 5, false),
      observation("backup", "2026-10-02T22:12:00Z", 4, false),
      observation("primary", "2026-10-02T22:18:00Z", 0), // excluded from both denominators
    ])
  )
  const window = result.windows.find((w) => w.key === "4-18")
  assert.equal(result.excludedUnmatchedCaptureCount, 1)
  assert.equal(window.n, 3)
  assert.equal(window.primaryUnavailable, 2)
  assert.equal(window.allUnavailable, 1)
  assert.equal(window.anyBackupRoom, 0)
  assert.deepEqual(window.stations[0], {
    id: "primary",
    zero: 1,
    oneTwo: 1,
    threePlus: 1,
    returnsDisabled: 1,
    unavailable: 2,
    baselineWarning: 3,
    matchedOnePlus: 0,
    matchedThreePlus: 0,
  })
  assert.equal(window.stations[1].matchedOnePlus, 1)
  assert.equal(window.stations[1].matchedThreePlus, 0)
  assert.equal(window.limited, true)
  assert.equal(result.windows.find((w) => w.key === "0-0").limited, true)
})

test("uses New York calendar days and handles both occurrences of the fall-back hour", () => {
  const timestamps = [
    "2026-10-03T01:00:00Z",
    "2026-11-01T05:30:00Z",
    "2026-11-01T06:30:00Z",
  ]
  const result = summarizeHistory(
    input(
      timestamps.flatMap((t) =>
        stations.map((s) => observation(s.stationId, t, 3))
      )
    )
  )
  assert.equal(result.windows.find((w) => w.key === "4-21").n, 1)
  assert.equal(result.windows.find((w) => w.key === "6-0").n, 2)
})

test("rejects duplicate observations and invalid statuses instead of silently inflating counts", () => {
  const o = observation("primary", "2026-10-02T22:00:00Z", 0)
  assert.throws(() => summarizeHistory(input([o, o])), /Duplicate/)
  assert.throws(
    () => summarizeHistory(input([{ ...o, isReturning: "false" }])),
    /Invalid observation/
  )
})

test("distance is geographic, not a routed walk", () => {
  assert.equal(straightLineMeters(stations[0], stations[0]), 0)
  assert.equal(straightLineMeters(stations[0], stations[1]), 219)
})
