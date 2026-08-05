import Link from "next/link"

import styles from "./editorial.module.css"

const projects = [
  {
    href: "/projects/ftp",
    name: "Farm to People",
    year: "2025",
    desc: "Turns my weekly produce box into three dinners, so I stop wasting half of it.",
    status: "in production",
    live: true,
  },
  {
    href: "/projects/sandlot",
    name: "Sandlot",
    year: "2026",
    desc: "Helps me not suck at fantasy baseball. Daily audit, Sunday brief, sources cited.",
    status: "runs daily",
    live: true,
  },
  {
    href: "/projects/dockme",
    name: "DockMe",
    year: "2026",
    desc: "Will there be a Citi Bike dock when you get there? Going native on iOS.",
    status: "in progress",
    live: false,
  },
  {
    href: "/projects/qook",
    name: "Qook",
    year: "2026",
    desc: "Meal cards matched to your energy level, illustrated in watercolor.",
    status: "in the kitchen",
    live: false,
  },
  {
    href: "/projects/siggy",
    name: "Siggy",
    year: "2026",
    desc: "Email signatures that don't look like Arial 11pt. $19, own it forever.",
    status: "shipped",
    live: true,
  },
  {
    href: "/projects/telestrations",
    name: "Pass the Doodle",
    year: "2026",
    desc: "The drawing-telephone party game, now playable over a video call.",
    status: "shipped",
    live: true,
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
      <div className={styles.inner}>
        <header className={styles.top}>
          <Link className={styles.brand} href="/">
            Zach Oelsner
          </Link>
          <nav className={styles.nav} aria-label="Primary">
            <Link href="/projects">projects</Link>
            <Link href="/about">about</Link>
            <a href="mailto:zachoelsner@gmail.com">say hi</a>
          </nav>
        </header>

        <section className={styles.hero}>
          <div className={styles.kicker}>
            Lower East Side, NYC &nbsp;·&nbsp; est. in a group chat
          </div>
          <h1 className={styles.headline}>
            I build small tools for everyday problems.{" "}
            <span className={styles.accentWord}>Mostly food.</span>
          </h1>
          <p className={styles.sub}>
            The loop is always the same: something annoys me twice, I build a
            thing, then I stick around to see if it actually worked. By day I
            dig through card-issuer data; the rest of this site is the
            after-hours output.
          </p>
        </section>

        <section aria-label="Project index">
          <div className={styles.indexHead}>
            <span className={styles.indexTitle}>The Index</span>
            <span className={styles.indexCount}>
              {String(projects.length).padStart(2, "0")} projects · 2025–26
            </span>
          </div>
          {projects.map((p, i) => (
            <Link key={p.name} className={styles.entry} href={p.href}>
              <span className={styles.entryRow}>
                <span className={styles.num}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className={styles.entryName}>{p.name}</span>
                <span className={styles.leaders} aria-hidden="true" />
                <span className={styles.year}>{p.year}</span>
              </span>
              <span className={styles.entryDesc}>
                <span>{p.desc}</span>
                <span
                  className={`${styles.status} ${p.live ? styles.statusLive : ""}`}
                >
                  {p.status}
                </span>
              </span>
            </Link>
          ))}
        </section>

        <footer className={styles.footer}>
          <span>© Zach Oelsner · LES, NYC</span>
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
