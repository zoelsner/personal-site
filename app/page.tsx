import Link from "next/link"

import styles from "./terminal.module.css"

const projects = [
  {
    href: "/projects/ftp",
    dir: "farm-to-people/",
    status: "shipped",
    desc: "three dinners from my actual produce box",
  },
  {
    href: "/projects/sandlot",
    dir: "sandlot/",
    status: "shipped",
    desc: "helps me not suck at fantasy baseball",
  },
  {
    href: "/projects/dockme",
    dir: "dockme/",
    status: "wip",
    desc: "will there be a citi bike dock when you get there?",
  },
  {
    href: "/projects/qook",
    dir: "qook/",
    status: "wip",
    desc: "meal cards matched to your energy level",
  },
  {
    href: "/projects/siggy",
    dir: "siggy/",
    status: "shipped",
    desc: "email signatures that don't look like arial 11pt",
  },
  {
    href: "/projects/telestrations",
    dir: "pass-the-doodle/",
    status: "shipped",
    desc: "the drawing-telephone game, over a video call",
  },
]

const socials = [
  { label: "github", href: "https://github.com/zoelsner" },
  { label: "linkedin", href: "https://www.linkedin.com/in/zacharyoelsner/" },
  { label: "tiktok", href: "https://tiktok.com/@builtwithzach" },
  { label: "x", href: "https://x.com/zachoelsner" },
]

function Prompt() {
  return (
    <>
      <span className={styles.prompt}>zach@les</span>
      <span className={styles.muted}> ~ $ </span>
    </>
  )
}

export default function Page() {
  return (
    <main className={styles.stage}>
      <div className={styles.window}>
        <div className={styles.chrome}>
          <span className={styles.dot} style={{ background: "#d44e2a" }} />
          <span className={styles.dot} style={{ background: "#c8963e" }} />
          <span className={styles.dot} style={{ background: "#7fb069" }} />
          <span className={styles.chromeTitle}>zachoelsner.com</span>
          <nav className={styles.chromeNav} aria-label="Primary">
            <Link href="/projects">projects</Link>
            <Link href="/about">about</Link>
            <a href="mailto:zachoelsner@gmail.com">say hi</a>
          </nav>
        </div>

        <div className={styles.term}>
          <div>
            <Prompt />
            <span className={styles.cmd}>whoami</span>
          </div>
          <p className={styles.out}>
            zach oelsner. i build small tools for everyday problems. mostly
            food. by day i dig through card-issuer data for a living; by night
            i automate whatever annoyed me that week.
          </p>

          <div>
            <Prompt />
            <span className={styles.cmd}>ls projects/</span>
          </div>
          <div className={styles.rows}>
            {projects.map((p) => (
              <Link key={p.dir} className={styles.row} href={p.href}>
                <span className={styles.dir}>{p.dir}</span>
                <span
                  className={`${styles.status} ${
                    p.status === "shipped" ? styles.shipped : styles.wip
                  }`}
                >
                  [{p.status}]
                </span>
                <span className={styles.desc}>{p.desc}</span>
              </Link>
            ))}
          </div>

          <div>
            <Prompt />
            <span className={styles.cmd}>cat contact.txt</span>
          </div>
          <div className={styles.links}>
            {socials.map((s, i) => (
              <span key={s.label}>
                {i > 0 && <span className={styles.muted}>&nbsp;·&nbsp;</span>}
                <a href={s.href} target="_blank" rel="noopener noreferrer">
                  {s.label}
                </a>
              </span>
            ))}
            <span className={styles.muted}>&nbsp;·&nbsp;</span>
            <a href="mailto:zachoelsner@gmail.com">zachoelsner@gmail.com</a>
          </div>

          <div>
            <Prompt />
            <span className={styles.cursor} aria-hidden="true" />
          </div>
        </div>
      </div>
    </main>
  )
}
