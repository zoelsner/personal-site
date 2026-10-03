import styles from "./dockme.module.css"

// Public /api/citibike-analysis/lookup result, verified October 3, 2026.
// Its generatedAt is June 8, 2026; these are a dated example, never live data.
const stations = [
  {
    name: "Allen St & Stanton St",
    label: "Nearest station",
    risk: 38.8,
    docks: 8.3,
    distance: "At the destination",
    backup: false,
  },
  {
    name: "E 1 St & 1 Ave",
    label: "Nearby backup",
    risk: 5.6,
    docks: 37.5,
    distance: "150 m from the destination",
    backup: true,
  },
]

export function DockMePreview() {
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
          Same destination.
          <br />
          Different margin.
        </h4>
        <p className={styles.exampleIntro}>
          The nearest station wasn’t always the one with room.
        </p>
        <div className={styles.stationCards}>
          {stations.map((station) => (
            <div
              key={station.name}
              className={`${styles.stationCard} ${station.backup ? styles.backup : ""}`}
            >
              <span className={styles.stationLabel}>{station.label}</span>
              <h5>{station.name}</h5>
              <p className={styles.distance}>{station.distance}</p>
              <div className={styles.stat}>
                <strong>
                  {station.risk}
                  <span>%</span>
                </strong>
                <span>2-dock risk</span>
              </div>
              <div className={styles.riskTrack} aria-hidden="true">
                <span style={{ width: `${station.risk}%` }} />
              </div>
              <p className={styles.average}>
                <b>{station.docks}</b> average open docks
              </p>
            </div>
          ))}
        </div>
        <p className={styles.takeaway}>
          <span aria-hidden="true">↳</span> A backup only 150 m away had more
          return room in this sample.
        </p>
      </div>
      <figcaption className={styles.caption}>
        <p>
          <b>1,277 snapshots per station</b> · report generated June 8, 2026.
        </p>
        <p>
          “2-dock risk” is the share of observations with two or fewer open
          docks, or returns unavailable. This example does not describe
          availability now.
        </p>
      </figcaption>
    </figure>
  )
}
