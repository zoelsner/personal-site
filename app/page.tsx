import Link from "next/link"

import styles from "./swiss.module.css"

const projects = [
  {
    href: "/projects/ftp",
    name: "Farm to People",
    desc: "Three dinners from my actual produce box. Reads the real cart so nothing gets wasted.",
    status: "in production",
    live: true,
    year: "2025",
  },
  {
    href: "/projects/sandlot",
    name: "Sandlot",
    desc: "Helps me not suck at fantasy baseball. Daily audit, reasoning shown, sources cited.",
    status: "runs daily",
    live: true,
    year: "2026",
  },
  {
    href: "/projects/dockme",
    name: "DockMe",
    desc: "Will there be a Citi Bike dock when you get there? Going native on iOS.",
    status: "in progress",
    live: false,
    year: "2026",
  },
  {
    href: "/projects/qook",
    name: "Qook",
    desc: "Meal cards matched to your energy level. One-tap Instacart checkout.",
    status: "in progress",
    live: false,
    year: "2026",
  },
  {
    href: "/projects/siggy",
    name: "Siggy",
    desc: "Email signatures that don't look like Arial 11pt. $19, own it forever.",
    status: "shipped",
    live: true,
    year: "2026",
  },
  {
    href: "/projects/telestrations",
    name: "Pass the Doodle",
    desc: "The drawing-telephone party game, playable over a video call. No install.",
    status: "shipped",
    live: true,
    year: "2026",
  },
]

const socials = [
  { label: "github", href: "https://github.com/zoelsner" },
  { label: "linkedin", href: "https://www.linkedin.com/in/zacharyoelsner/" },
  { label: "tiktok", href: "https://tiktok.com/@builtwithzach" },
  { label: "x", href: "https://x.com/zachoelsner" },
]

export default function Page() {
  return (
    <main className={styles.stage}>
      <div className={styles.frame}>
        <header className={styles.top}>
          <div className={styles.topLeft}>
            <span className={styles.dotSq} aria-hidden="true" />
            <span>Zach Oelsner</span>
          </div>
          <nav className={styles.nav} aria-label="Primary">
            <Link href="/projects">Projects</Link>
            <Link href="/about">About</Link>
            <a href="mailto:zachoelsner@gmail.com">Say hi</a>
          </nav>
        </header>

        <section className={styles.hero}>
          <h1 className={styles.name}>
            Zach
            <br />
            Oelsner<span className={styles.nameAccent}>.</span>
          </h1>
          <div className={styles.heroMeta}>
            <p className={styles.statement}>
              Small tools for everyday problems. Mostly food. Built because
              something annoyed me twice, kept because they actually work.
            </p>
            <div className={styles.coords}>
              40.7150° N, 73.9843° W
              <br />
              Lower East Side, NYC
              <br />
              2025 — present
            </div>
          </div>
        </section>

        <section aria-label="Project index">
          <div className={styles.tableHead} aria-hidden="true">
            <span>No.</span>
            <span>Project</span>
            <span>What it does</span>
            <span>Status</span>
            <span style={{ textAlign: "right" }}>Year</span>
          </div>
          {projects.map((p, i) => (
            <Link key={p.name} className={styles.row} href={p.href}>
              <span className={styles.rowNum}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className={styles.rowName}>{p.name}</span>
              <span className={styles.rowDesc}>{p.desc}</span>
              <span
                className={`${styles.rowStatus} ${p.live ? styles.live : ""}`}
              >
                {p.status}
              </span>
              <span className={styles.rowYear}>{p.year}</span>
            </Link>
          ))}
        </section>

        <footer className={styles.footer}>
          <span>© Zach Oelsner</span>
          <div className={styles.socials}>
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {s.label}
              </a>
            ))}
          </div>
        </footer>
      </div>
    </main>
  )
}
