import { Caveat } from "next/font/google"
import type { CSSProperties } from "react"
import Link from "next/link"

import styles from "./notebook.module.css"

const hand = Caveat({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-hand",
})

type Card = {
  href: string
  name: string
  desc: string
  note: string
  noteClass?: "noteBlue" | "noteGreen"
  paper: string
  tape: string
  tilt: string
  tapeTilt: string
}

const cards: Card[] = [
  {
    href: "/projects/ftp",
    name: "Farm to People",
    desc: "Reads my produce box, hands back three dinners. No more wilted kale guilt.",
    note: "the one that started it all",
    paper: "#fdf6e3",
    tape: "rgba(90, 122, 58, 0.45)",
    tilt: "-2deg",
    tapeTilt: "-4deg",
  },
  {
    href: "/projects/sandlot",
    name: "Sandlot",
    desc: "Daily fantasy-baseball audit with the reasoning shown. I still click every button myself.",
    note: "runs every morning, rain or shine",
    noteClass: "noteBlue",
    paper: "#fff",
    tape: "rgba(212, 78, 42, 0.4)",
    tilt: "1.5deg",
    tapeTilt: "3deg",
  },
  {
    href: "/projects/dockme",
    name: "DockMe",
    desc: "Will there be a Citi Bike dock when you get there? Going native on iOS.",
    note: "wip — be nice",
    paper: "#eef3f5",
    tape: "rgba(200, 150, 62, 0.5)",
    tilt: "-1deg",
    tapeTilt: "-2deg",
  },
  {
    href: "/projects/qook",
    name: "Qook",
    desc: "Meal cards matched to your energy level. Watercolor illustrations, Instacart checkout.",
    note: "still in the kitchen",
    noteClass: "noteGreen",
    paper: "#fdf6e3",
    tape: "rgba(122, 90, 127, 0.4)",
    tilt: "2deg",
    tapeTilt: "4deg",
  },
  {
    href: "/projects/siggy",
    name: "Siggy",
    desc: "Email signatures that don't look like Arial 11pt. $19, no subscription.",
    note: "it made real money!!",
    paper: "#fff",
    tape: "rgba(90, 122, 58, 0.45)",
    tilt: "-1.6deg",
    tapeTilt: "2deg",
  },
  {
    href: "/projects/telestrations",
    name: "Pass the Doodle",
    desc: "The drawing-telephone game, over a video call. Share a link, no install.",
    note: "sunday group-chat tested",
    noteClass: "noteBlue",
    paper: "#eef3f5",
    tape: "rgba(212, 78, 42, 0.4)",
    tilt: "1deg",
    tapeTilt: "-3deg",
  },
]

export default function Page() {
  return (
    <main className={`${styles.stage} ${hand.variable}`}>
      <div className={styles.inner}>
        <header className={styles.top}>
          <Link className={styles.brand} href="/">
            zach&rsquo;s notebook
          </Link>
          <nav className={styles.nav} aria-label="Primary">
            <Link href="/projects">projects</Link>
            <Link href="/about">about</Link>
            <a href="mailto:zachoelsner@gmail.com">say hi</a>
          </nav>
        </header>

        <section className={styles.hero}>
          <h1 className={styles.title}>
            things i built because they annoyed me
            <svg
              className={styles.titleUnderline}
              viewBox="0 0 420 14"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M4 9 C 60 2, 120 12, 180 7 S 300 3, 416 8"
                stroke="currentColor"
                strokeWidth="3.5"
                strokeLinecap="round"
              />
            </svg>
          </h1>
          <p className={styles.subtitle}>
            small tools for everyday problems. mostly food. LES, NYC.
          </p>
        </section>

        <section className={styles.board} aria-label="Projects">
          {cards.map((c) => (
            <Link
              key={c.name}
              href={c.href}
              className={styles.card}
              style={
                {
                  "--paper": c.paper,
                  "--tape": c.tape,
                  "--tilt": c.tilt,
                  "--tape-tilt": c.tapeTilt,
                } as CSSProperties
              }
            >
              <span className={styles.tape} aria-hidden="true" />
              <h2 className={styles.cardName}>{c.name}</h2>
              <p className={styles.cardDesc}>{c.desc}</p>
              <span
                className={`${styles.note} ${c.noteClass ? styles[c.noteClass] : ""}`}
              >
                {c.note}
              </span>
            </Link>
          ))}
        </section>

        <footer className={styles.footer}>
          find me:{" "}
          <a
            href="https://github.com/zoelsner"
            target="_blank"
            rel="noopener noreferrer"
          >
            github
          </a>
          <span className={styles.sep}>·</span>
          <a
            href="https://www.linkedin.com/in/zacharyoelsner/"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin
          </a>
          <span className={styles.sep}>·</span>
          <a
            href="https://tiktok.com/@builtwithzach"
            target="_blank"
            rel="noopener noreferrer"
          >
            tiktok
          </a>
          <span className={styles.sep}>·</span>
          <a href="mailto:zachoelsner@gmail.com">email</a>
        </footer>
      </div>
    </main>
  )
}
