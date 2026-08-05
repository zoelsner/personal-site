import type { CSSProperties } from "react"
import Link from "next/link"

import shell from "@/components/site-page.module.css"
import styles from "./log.module.css"

type Entry = {
  half: string
  text: React.ReactNode
  note?: string
}

const lately: Entry[] = [
  {
    half: "#c8963e",
    text: (
      <>
        <Link href="/projects/telestrations">Pass the Doodle</Link> grew up
        and moved to its own domain — passthedoodle.com.
      </>
    ),
    note: "share a link, no install, rooms hold 15.",
  },
  {
    half: "#3b5a6a",
    text: (
      <>
        <Link href="/projects/dockme">DockMe</Link> pivoted. The web analysis
        proved the idea; the real product is a native iOS app. Building it
        now.
      </>
    ),
    note: "dock confidence at your ETA, backup dock already picked.",
  },
  {
    half: "#b85a3b",
    text: (
      <>
        <Link href="/projects/qook">Qook</Link> joined the queue — watercolor
        meal cards matched to your energy level.
      </>
    ),
    note: "in the kitchen. no promises on timing.",
  },
]

const in26: Entry[] = [
  {
    half: "#d44e2a",
    text: (
      <>
        <Link href="/projects/sandlot">Sandlot</Link> started running its
        audit every morning, with a Sunday brief that cites its sources.
      </>
    ),
    note: "fantasy baseball, minus living inside Fantrax.",
  },
  {
    half: "#7a5a7f",
    text: (
      <>
        <Link href="/projects/siggy">Siggy</Link> shipped — $19 lifetime, four
        templates, and the first time strangers paid for something I made.
      </>
    ),
  },
  {
    half: "#c8963e",
    text: (
      <>
        <Link href="/projects/telestrations">Pass the Doodle</Link> went from
        idea to playable over roughly a weekend, because the Sunday call
        needed a game.
      </>
    ),
  },
]

const in25: Entry[] = [
  {
    half: "#5a7a3a",
    text: (
      <>
        <Link href="/projects/ftp">Farm to People</Link> went live: a scraper
        reads my produce box, Claude plans three dinners. It&rsquo;s been in
        production every week since.
      </>
    ),
    note: "the one that started the whole habit.",
  },
  {
    half: "#fdebcc",
    text: <>This site went up, mostly so the projects had somewhere to live.</>,
  },
]

function Timeline({ entries }: { entries: Entry[] }) {
  return (
    <ol className={styles.timeline}>
      {entries.map((e, i) => (
        <li
          key={i}
          className={styles.entry}
          style={{ "--half": e.half } as CSSProperties}
        >
          <p className={styles.entryText}>{e.text}</p>
          {e.note && <p className={styles.entryNote}>{e.note}</p>}
        </li>
      ))}
    </ol>
  )
}

export default function Page() {
  const stageStyle = {
    "--accent": "#C8963E",
    "--accent-on": "#1a2a18",
  } as CSSProperties

  return (
    <main className={shell.stage} style={stageStyle}>
      <div className={shell.inner}>
        <header className={shell.top}>
          <Link className={shell.brand} href="/">
            Zach
          </Link>
          <nav className={shell.nav} aria-label="Primary">
            <Link href="/projects">projects</Link>
            <Link href="/about">about</Link>
            <a className={shell.pill} href="mailto:zachoelsner@gmail.com">
              say hi
            </a>
          </nav>
        </header>

        <section className={shell.hero}>
          <div className={shell.kicker}>
            <span>proof of life</span>
            <span className={shell.sep}>·</span>
            <span>updated whenever</span>
          </div>
          <h1 className={shell.title}>
            the log<span className={shell.dot}>.</span>
          </h1>
          <p className={shell.subtitle}>
            I&rsquo;m Zach — I build small tools for everyday problems, mostly
            food. This is what&rsquo;s moved lately. The{" "}
            <Link href="/projects" style={{ color: "inherit" }}>
              projects page
            </Link>{" "}
            is the catalog; this is the pulse.
          </p>
        </section>

        <div className={shell.halves} aria-hidden="true">
          <div
            className={`${shell.half} ${shell.gold}`}
            style={{
              width: 54,
              height: 27,
              left: 120,
              top: 170,
              transform: "rotate(-12deg)",
            }}
          />
          <div
            className={`${shell.half} ${shell.cream}`}
            style={{
              width: 46,
              height: 23,
              right: 200,
              top: 200,
              transform: "rotate(20deg)",
            }}
          />
          <div
            className={`${shell.half} ${shell.orange} ${shell.flip}`}
            style={{
              width: 58,
              height: 29,
              right: 140,
              top: 340,
              transform: "rotate(180deg)",
            }}
          />
        </div>

        <div className={styles.wrap}>
          <section className={styles.era}>
            <div className={styles.eraLabel}>lately</div>
            <Timeline entries={lately} />
          </section>

          <section className={styles.era}>
            <div className={styles.eraLabel}>earlier in &rsquo;26</div>
            <Timeline entries={in26} />
          </section>

          <section className={styles.era}>
            <div className={styles.eraLabel}>back in &rsquo;25</div>
            <Timeline entries={in25} />
            <p className={styles.finePrint}>
              dates are approximate — i was building, not journaling.
            </p>
          </section>
        </div>

        <section className={shell.pfooter}>
          <div className={shell.socials}>
            <a
              href="https://github.com/zoelsner"
              target="_blank"
              rel="noopener noreferrer"
            >
              github
            </a>
            <span style={{ opacity: 0.3 }}>·</span>
            <a
              href="https://www.linkedin.com/in/zacharyoelsner/"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin
            </a>
            <span style={{ opacity: 0.3 }}>·</span>
            <a
              href="https://tiktok.com/@builtwithzach"
              target="_blank"
              rel="noopener noreferrer"
            >
              tiktok
            </a>
            <span style={{ opacity: 0.3 }}>·</span>
            <a
              href="https://x.com/zachoelsner"
              target="_blank"
              rel="noopener noreferrer"
            >
              x
            </a>
          </div>
          <div className={shell.copy}>© Zach Oelsner · LES, NYC</div>
        </section>
      </div>
    </main>
  )
}
