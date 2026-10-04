import Image from "next/image"
import styles from "./dockme-app-demo.module.css"

const mediaPath = "/projects/dockme/native"
const demoCaption =
  "DockMe native app demo · synthetic dock/trip data · manual arrival."

const screenshots = [
  {
    file: "ride.png",
    title: "A backup during the ride",
    description:
      "The ride screen keeps the selected dock, a swap control, and manual arrival together.",
    alt: "DockMe demo ride to DUMBO, showing a selected dock, a backup dock with a Swap button, and manual arrival because location is unavailable.",
  },
  {
    file: "summary.png",
    title: "A separate finish capture",
    description:
      "The verified summary after finishing. The recording ends at the arrival and finish controls.",
    alt: "DockMe demo trip summary showing Trip finished and explaining that a mid-ride dock swap leaves no prediction to score.",
  },
]

export function DockMeAppDemo() {
  return (
    <section
      id="native-app-demo"
      className={styles.section}
      aria-labelledby="native-app-title"
    >
      <header className={styles.header}>
        <div>
          <p className={styles.eyebrow}>iOS app · in development</p>
          <h3 id="native-app-title">Inside the app.</h3>
          <p className={styles.intro}>
            Choose a dock, keep a backup within reach, and confirm arrival.
            Here’s the native flow in a short demo.
          </p>
          <p className={styles.developmentNote}>
            UI prototype under testing; live routing and physical riding
            validation pending.
          </p>
        </div>
        <span className={styles.demoLabel}>Synthetic demo data</span>
      </header>

      <div className={styles.mediaGrid}>
        <figure className={styles.recording}>
          <div className={styles.phone}>
            <video
              controls
              playsInline
              preload="metadata"
              poster={`${mediaPath}/dock-comparison.png`}
              width={444}
              height={960}
              aria-label="Play the DockMe native app demo"
              aria-describedby="native-demo-caption"
            >
              <source src={`${mediaPath}/demo.mp4`} type="video/mp4" />
              Your browser cannot play this video. Open the MP4 using the link
              below.
            </video>
          </div>
          <figcaption id="native-demo-caption">
            <b>29-second silent recording · press play to watch</b>
            <span>{demoCaption}</span>
            <a
              href={`${mediaPath}/demo.mp4`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Open the recording ↗
            </a>
            <details className={styles.description}>
              <summary>What the recording shows</summary>
              <p>
                Select DUMBO, compare three dock choices, choose an alternative,
                start the demo ride, swap to the backup, and confirm arrival
                manually. The recording ends at the finish controls. The
                completed summary is shown in a separate screenshot.
              </p>
            </details>
          </figcaption>
        </figure>

        <div
          className={styles.screenshots}
          aria-label="Actual native app screenshots"
        >
          {screenshots.map((screenshot) => (
            <figure className={styles.screenshot} key={screenshot.file}>
              <a
                className={styles.imageLink}
                href={`${mediaPath}/${screenshot.file}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open full-size screenshot: ${screenshot.title}`}
              >
                <Image
                  src={`${mediaPath}/${screenshot.file}`}
                  alt={screenshot.alt}
                  width={1170}
                  height={2532}
                  sizes="(max-width: 560px) 220px, (max-width: 880px) 35vw, 230px"
                />
              </a>
              <figcaption>
                <h4>{screenshot.title}</h4>
                <p>{screenshot.description}</p>
                <span>
                  Actual app capture · synthetic data · tap to enlarge
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
