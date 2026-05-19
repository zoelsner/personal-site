import type { CSSProperties } from "react"
import type { Metadata } from "next"
import Link from "next/link"

import shell from "@/components/site-page.module.css"
import styles from "./page.module.css"

export const metadata: Metadata = {
  title: "Work",
  description: "Things I've built. Mostly about food. A few one-off tools.",
  openGraph: {
    title: "Work · Zach Oelsner",
    description: "Things I've built. Mostly about food. A few one-off tools.",
  },
  twitter: {
    title: "Work · Zach Oelsner",
    description: "Things I've built. Mostly about food. A few one-off tools.",
  },
}

type Project = {
  href: string
  external?: boolean
  name: string
  year: string
  tag: string
  status: string
  c: string
  cTint: string
}

const projects: Project[] = [
  {
    href: "/work/ftp",
    name: "Farm to People",
    year: "2025",
    tag: "Three meals from your actual box — reads your real cart and suggests what to cook this week.",
    status: "Shipped · in production",
    c: "#4d7a5a",
    cTint: "#e8efe6",
  },
  {
    href: "/work/sandlot",
    name: "Sandlot",
    year: "2026",
    tag: "Helps me not suck at fantasy baseball. Daily audit, Sunday brief, sources cited.",
    status: "Shipped · runs daily",
    c: "#b25a3c",
    cTint: "#f3e6dd",
  },
  {
    href: "/work/siggy",
    name: "Siggy",
    year: "2026",
    tag: "A polished signature pasted into Gmail. No extensions, no HTML fiddling.",
    status: "Shipped · $19 lifetime",
    c: "#6c649a",
    cTint: "#ebe9f2",
  },
  {
    href: "/work/telestrations",
    name: "Telestrations",
    year: "2026",
    tag: "Draw, guess, pass — a web take on the party game. Real-time rooms.",
    status: "Shipped · play with friends",
    c: "#a8843a",
    cTint: "#f1ead7",
  },
]

export default function WorkPage() {
  const stageStyle = {
    "--accent": "#1B2A4D",
    "--accent-on": "#fdebcc",
  } as CSSProperties

  return (
    <main className={shell.stage} style={stageStyle}>
      <div className={shell.inner}>
        <header className={shell.top}>
          <Link className={shell.brand} href="/">
            Zach
          </Link>
          <nav className={shell.nav} aria-label="Primary">
            <Link className={shell.on} href="/work">
              work
            </Link>
            <Link href="/about">about</Link>
            <a className={shell.pill} href="mailto:zachoelsner@gmail.com">
              say hi
            </a>
          </nav>
        </header>

        <div className={shell.backRow}>
          <Link className={shell.back} href="/">
            ← home
          </Link>
        </div>

        <div
          aria-hidden="true"
          className={`${shell.half} ${shell.cream}`}
          style={{
            width: 52,
            height: 26,
            left: 130,
            top: 170,
            transform: "rotate(-15deg)",
          }}
        />
        <div
          aria-hidden="true"
          className={`${shell.half} ${shell.olive}`}
          style={{
            width: 46,
            height: 23,
            right: 200,
            top: 200,
            transform: "rotate(20deg)",
          }}
        />
        <div
          aria-hidden="true"
          className={`${shell.half} ${shell.gold} ${shell.flip}`}
          style={{
            width: 42,
            height: 21,
            right: 160,
            top: 340,
            transform: "rotate(180deg)",
          }}
        />

        <section className={shell.hero}>
          <div className={shell.kicker}>
            <span>selected work</span>
            <span className={shell.sep}>·</span>
            <span>04 shipped</span>
            <span className={shell.sep}>·</span>
            <span>updated may 2026</span>
          </div>
          <h1 className={shell.title}>
            work<span className={shell.dot}>.</span>
          </h1>
          <p className={shell.subtitle}>
            Things I&apos;ve built end-to-end — usually because I was
            annoyed enough by a problem to wire something up over a weekend,
            then keep going.
          </p>
        </section>

        <section
          className={styles.list}
          aria-labelledby="work-list-heading"
        >
          <h2 id="work-list-heading" className={styles.srOnly}>
            Selected projects
          </h2>
          {projects.map((project) => {
            const cardStyle = {
              "--c": project.c,
              "--c-tint": project.cTint,
            } as CSSProperties
            const inner = (
              <>
                <span className={styles.tape} aria-hidden="true" />
                <div className={styles.left}>
                  <div className={styles.row1}>
                    <h3 className={styles.cardH}>
                      {project.name}
                      <span className={styles.dot}>.</span>
                    </h3>
                    <span className={styles.yr}>· {project.year}</span>
                  </div>
                  <p className={styles.tag}>{project.tag}</p>
                </div>
                <div className={styles.right}>
                  <span className={styles.status}>{project.status}</span>
                  <span className={styles.arr} aria-hidden="true">
                    →
                  </span>
                </div>
              </>
            )
            return project.external ? (
              <a
                key={project.name}
                className={styles.card}
                href={project.href}
                style={cardStyle}
                target="_blank"
                rel="noopener noreferrer"
              >
                {inner}
              </a>
            ) : (
              <Link
                key={project.name}
                className={styles.card}
                href={project.href}
                style={cardStyle}
              >
                {inner}
              </Link>
            )
          })}
        </section>

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
              href="https://linkedin.com/in/zoelsner"
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
          </div>
          <div className={shell.copy}>© Zach Oelsner · LES, NYC</div>
        </section>
      </div>
    </main>
  )
}
