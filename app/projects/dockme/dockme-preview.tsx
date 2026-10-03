"use client"

import { useState } from "react"
import history from "./dockme-history.json"
import styles from "./dockme.module.css"

const days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
]
const hours = [
  "12–3 am",
  "3–6 am",
  "6–9 am",
  "9 am–12 pm",
  "12–3 pm",
  "3–6 pm",
  "6–9 pm",
  "9 pm–12 am",
]
type Window = (typeof history.windows)[number]
type Counts = Window["stations"][number]
const percent = (count: number, total: number) =>
  total ? ((count / total) * 100).toFixed(1) : "—"
const stationName = (id: string) =>
  history.stations.find((station) => station.id === id)!.name
const primaryCounts = (window: Window) =>
  window.stations.find((station) => station.id === history.primaryId)!
const dateLabel = (date: string) =>
  new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${date}T12:00:00Z`))

function DockDistribution({ counts, n }: { counts: Counts; n: number }) {
  return (
    <>
      <div className={styles.distribution} aria-hidden="true">
        <span
          className={styles.zero}
          style={{ width: `${(counts.zero / (n || 1)) * 100}%` }}
        />
        <span
          className={styles.tight}
          style={{ width: `${(counts.oneTwo / (n || 1)) * 100}%` }}
        />
        <span
          className={styles.room}
          style={{ width: `${(counts.threePlus / (n || 1)) * 100}%` }}
        />
      </div>
      <div className={styles.distributionLabels}>
        <span>
          <i className={styles.zero} />0 docks <b>{percent(counts.zero, n)}%</b>
        </span>
        <span>
          <i className={styles.tight} />
          1–2 <b>{percent(counts.oneTwo, n)}%</b>
        </span>
        <span>
          <i className={styles.room} />
          3+ <b>{percent(counts.threePlus, n)}%</b>
        </span>
      </div>
    </>
  )
}

export function DockMePreview() {
  const initial = history.windows.find(
    (window) => window.key === history.defaultWindow
  )!
  const [selectedKey, setSelectedKey] = useState(initial.key)
  const [metric, setMetric] = useState<"zero" | "nearFull">("zero")
  const selected = history.windows.find((window) => window.key === selectedKey)!
  const primary = primaryCounts(selected)
  const alternatives = selected.stations
    .filter((station) => station.id !== history.primaryId)
    .toSorted(
      (a, b) =>
        b.matchedOnePlus - a.matchedOnePlus ||
        b.matchedThreePlus - a.matchedThreePlus
    )
  const best = alternatives[0]
  const metricLabel = metric === "zero" ? "no open docks" : "0–2 open docks"
  const windowLabel = `${days[selected.dayIndex]} · ${hours[selected.startHour / 3]}`

  return (
    <figure className={styles.example} aria-labelledby="dock-example-title">
      <div className={styles.exampleHeader}>
        <span className={styles.wordmark}>
          <span aria-hidden="true">D</span> DockMe / field notes
        </span>
        <span className={styles.sampleLabel}>Historical example</span>
      </div>
      <div className={styles.exampleBody}>
        <p className={styles.eyebrow}>Allen &amp; Stanton · Lower East Side</p>
        <h4 id="dock-example-title" className={styles.exampleTitle}>
          Plan the last block.
        </h4>
        <p className={styles.exampleIntro}>
          <b>Friday, 6–9 pm stood out.</b> The destination had no open docks in{" "}
          {primaryCounts(initial).zero} of {initial.n} checks — the highest
          share of the 56 three-hour windows in this sample.
        </p>
        <div className={styles.explorerGrid}>
          <div>
            <div className={styles.controls}>
              <label>
                Day of week
                <select
                  value={selected.dayIndex}
                  onChange={(event) =>
                    setSelectedKey(
                      `${event.target.value}-${selected.startHour}`
                    )
                  }
                >
                  {days.map((day, index) => (
                    <option value={index} key={day}>
                      {day}
                    </option>
                  ))}
                </select>
              </label>
              <label>
                Show on the time map
                <select
                  value={metric}
                  onChange={(event) =>
                    setMetric(event.target.value as typeof metric)
                  }
                >
                  <option value="zero">No open docks</option>
                  <option value="nearFull">Almost full: 0–2 docks</option>
                </select>
              </label>
            </div>
            <div
              className={styles.timeMap}
              role="group"
              aria-label={`${days[selected.dayIndex]} time windows, New York time`}
            >
              {history.windows
                .filter((window) => window.dayIndex === selected.dayIndex)
                .map((window) => {
                  const counts = primaryCounts(window)
                  const count =
                    counts.zero + (metric === "nearFull" ? counts.oneTwo : 0)
                  const value = (count / window.n) * 100
                  return (
                    <button
                      key={window.key}
                      type="button"
                      aria-pressed={selected.key === window.key}
                      aria-label={`${days[window.dayIndex]}, ${hours[window.startHour / 3]}, ${percent(count, window.n)}% ${metricLabel}, ${window.n} checks`}
                      className={styles.timeCell}
                      data-level={
                        window.limited
                          ? "sparse"
                          : value >= 40
                            ? "high"
                            : value >= 15
                              ? "medium"
                              : "low"
                      }
                      onClick={() => setSelectedKey(window.key)}
                    >
                      <span>{hours[window.startHour / 3]}</span>
                      <b>
                        {window.n ? `${percent(count, window.n)}%` : "No data"}
                      </b>
                    </button>
                  )
                })}
            </div>
            <p className={styles.mapNote}>
              Select a time · New York (EDT) · darker = more {metricLabel}
            </p>

            <div
              aria-live="polite"
              aria-atomic="true"
              className={styles.selectionSummary}
            >
              <h5>{windowLabel}</h5>
              <p>
                {selected.n} matched checks across {selected.dates.length} dates
              </p>
            </div>
            {selected.limited && (
              <p className={styles.caution}>
                Limited coverage. Fewer than 60 checks or three dates; do not
                rank alternatives from this window.
              </p>
            )}
            <section
              className={styles.primaryStation}
              aria-label="Destination station"
            >
              <p className={styles.stationLabel}>
                Destination · Allen St &amp; Stanton St
              </p>
              <div className={styles.metrics}>
                <div>
                  <strong>
                    {percent(primary.zero, selected.n)}
                    <span>%</span>
                  </strong>
                  <b>No open docks</b>
                  <small>
                    {primary.zero} / {selected.n} checks
                  </small>
                </div>
                <div>
                  <strong>
                    {percent(primary.zero + primary.oneTwo, selected.n)}
                    <span>%</span>
                  </strong>
                  <b>Almost full · 0–2 docks</b>
                  <small>Includes the zero-dock checks</small>
                </div>
              </div>
              <DockDistribution counts={primary} n={selected.n} />
              <p className={styles.returnStatus}>
                Returns paused:{" "}
                <b>
                  {primary.returnsDisabled} / {selected.n} checks
                </b>
                . Separate status; may overlap the dock counts above.
              </p>
            </section>
          </div>
          <section
            className={styles.alternatives}
            aria-labelledby="dock-alternatives-title"
          >
            <h5 id="dock-alternatives-title">Where else could I dock?</h5>
            <p className={styles.matchExplanation}>
              {selected.primaryUnavailable > 0 ? (
                <>
                  At the <b>same {selected.primaryUnavailable} moments</b> the
                  destination had no docks or paused returns:
                </>
              ) : (
                <>
                  No destination checks had zero docks or paused returns in this
                  window. There are no blocked moments to compare.
                </>
              )}
            </p>
            {alternatives.map((counts) => {
              const station = history.stations.find(
                (station) => station.id === counts.id
              )!
              return (
                <article
                  className={styles.backupCard}
                  key={counts.id}
                  aria-label={station.name}
                >
                  <h6>{station.name}</h6>
                  <p className={styles.distance}>
                    {station.straightLineMeters} m straight-line from
                    destination
                  </p>
                  {selected.primaryUnavailable > 0 && (
                    <div className={styles.matchedMetrics}>
                      <div>
                        <strong>
                          {counts.matchedOnePlus}
                          <span> / {selected.primaryUnavailable}</span>
                        </strong>
                        <span>1+ dock &amp; accepting returns</span>
                      </div>
                      <div>
                        <strong>
                          {counts.matchedThreePlus}
                          <span> / {selected.primaryUnavailable}</span>
                        </strong>
                        <span>3+ docks &amp; accepting returns</span>
                      </div>
                    </div>
                  )}
                  <p className={styles.windowContext}>
                    Across all {selected.n} checks in this window:
                  </p>
                  <DockDistribution counts={counts} n={selected.n} />
                  <p className={styles.returnStatus}>
                    Returns paused: {counts.returnsDisabled} / {selected.n}{" "}
                    checks
                  </p>
                </article>
              )
            })}
            {!selected.limited && selected.primaryUnavailable > 0 && (
              <p className={styles.takeaway}>
                {best.matchedOnePlus > 0 ? (
                  <>
                    Check <b>{stationName(best.id)}</b> live first. It offered a
                    return in {best.matchedOnePlus} of the{" "}
                    {selected.primaryUnavailable} blocked-destination checks;
                    only {best.matchedThreePlus} had three or more docks.
                  </>
                ) : (
                  <>
                    Neither alternative offered a return during the
                    destination’s blocked checks. Widen the search and check
                    live availability.
                  </>
                )}
                {selected.allUnavailable > 0 && (
                  <>
                    {" "}
                    All three were unable to take a return in{" "}
                    <b>
                      {selected.allUnavailable} of {selected.n} total checks
                    </b>
                    . Keep a wider backup in mind.
                  </>
                )}
              </p>
            )}
          </section>
        </div>
      </div>
      <figcaption className={styles.caption}>
        <p>
          <b>September 12–October 3, 2026 · America/New_York (EDT)</b>
        </p>
        <p>
          5,035 aligned checks per station. Historical frequency, not a
          prediction for your arrival. Check current availability before riding.
        </p>
        <details>
          <summary>Coverage, dates &amp; definitions</summary>
          <p>
            First capture: Sep 12, 5:46 am. Last: Oct 3, 5:37 am. Both boundary
            days are partial. Report generated Oct 3, 2026.
          </p>
          <p>
            Selected window:{" "}
            {selected.dates
              .map(
                (date) =>
                  `${dateLabel(date.date)} (${date.n} checks; ${date.zero} with zero docks at the destination)`
              )
              .join("; ")}
            .
          </p>
          <p>
            Each weekday/hour has only about three weeks of evidence. Three-hour
            windows contain 89–90 checks; successive checks can describe the
            same full-station episode and are not independent trips. The largest
            capture gap was about eight minutes. Unrecorded changes between
            checks are unknown.
          </p>
          <p>
            Sampling was configured for five minutes; observed spacing was about
            six. Coverage is limited to these three stations and this season.
            Weather, events and rebalancing are not controlled for.
          </p>
          <p>
            0, 1–2 and 3+ are exclusive physical dock-count categories. “Almost
            full” includes 0–2. Paused returns is a separate status that can
            overlap any category. A backup offers a return only when it has at
            least one dock and accepts returns; three or more indicates
            additional room, not a guarantee.
          </p>
          <p>
            The older dashboard combines 0–2 docks OR paused returns in one
            warning. This view separates them and compares stations at identical
            capture times. Distances use station coordinates; walking routes and
            extra walking time have not been verified.
          </p>
          <p>
            Light cells are lower historical frequency, not a safety rating.
            Windows below 60 matched checks or three dates are marked as limited
            coverage; this is a display guard, not statistical confidence.
          </p>
          <a href={history.endpoint} target="_blank" rel="noopener noreferrer">
            Public history source ↗
          </a>
        </details>
      </figcaption>
    </figure>
  )
}
