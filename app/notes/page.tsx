import type { CSSProperties } from "react"
import type { Metadata } from "next"
import Link from "next/link"

import shell from "@/components/site-page.module.css"
import styles from "./page.module.css"

export const metadata: Metadata = {
  title: "Design Notes",
  description: "Design notes and build references from Zach Oelsner.",
  openGraph: {
    title: "Design Notes · Zach Oelsner",
    description: "Design notes and build references from Zach Oelsner.",
  },
  twitter: {
    title: "Design Notes · Zach Oelsner",
    description: "Design notes and build references from Zach Oelsner.",
  },
}

const notes = [
  {
    when: "May 11, 2026",
    title: "Why Sandlot only ever recommends, never executes",
    excerpt:
      "I built the auto-execute version first. It worked. I turned it off after a week because the value isn't in the moves — it's in trusting the moves enough to make them. That trust only exists when I press the button.",
    tags: ["Sandlot", "Design", "AI"],
  },
  {
    when: "Apr 28, 2026",
    title: "Cart-first vs. preference-first meal apps",
    excerpt:
      "Most meal apps ask you what you like, then suggest recipes. Farm to People starts from what's already in your box this week. That switch — from intent to inventory — changed every other product decision downstream.",
    tags: ["Farm to People", "Product"],
  },
  {
    when: "Mar 14, 2026",
    title: "Render your name as an image (a Gmail signature story)",
    excerpt:
      "Why Siggy uses Satori to bake the name into a PNG instead of fighting Outlook's CSS subset. Short answer: web typography in email is unwinnable. Long answer: it depends what part of “unwinnable” you mean.",
    tags: ["Siggy", "Email", "Typography"],
  },
  {
    when: "Feb 02, 2026",
    title: "“Recommend-only” is a feature, not a limitation",
    excerpt:
      "A lot of AI products race to take action on your behalf. The good ones I keep using don't — they collapse a decision down to a moment and hand it back. Sandlot, FtP, Siggy all do this.",
    tags: ["AI", "Design"],
  },
  {
    when: "Jan 09, 2026",
    title: "A weekend rule for side projects",
    excerpt:
      "If I can't get to a useful demo in one weekend, the idea is wrong-shaped. The constraint forces you to find the smallest version of the thing — which is almost always the version that actually works.",
    tags: ["Process"],
  },
]

export default function NotesPage() {
  const stageStyle = {
    "--accent": "#7a5a7f",
    "--accent-on": "#ffffff",
  } as CSSProperties

  return (
    <main className={shell.stage} style={stageStyle}>
      <div className={shell.inner}>
        <header className={shell.top}>
          <Link className={shell.brand} href="/">
            Zach
          </Link>
          <nav className={shell.nav} aria-label="Primary">
            <Link href="/work">work</Link>
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
          className={`${shell.half} ${shell.plum}`}
          style={{
            width: 50,
            height: 25,
            left: 130,
            top: 170,
            transform: "rotate(-15deg)",
          }}
        />
        <div
          aria-hidden="true"
          className={`${shell.half} ${shell.cream}`}
          style={{
            width: 54,
            height: 27,
            right: 200,
            top: 200,
            transform: "rotate(20deg)",
          }}
        />
        <div
          aria-hidden="true"
          className={`${shell.half} ${shell.ink}`}
          style={{
            width: 38,
            height: 19,
            right: 160,
            top: 340,
            transform: "rotate(-30deg)",
          }}
        />

        <section className={shell.hero}>
          <div className={shell.kicker}>
            <span>writing</span>
            <span className={shell.sep}>·</span>
            <span>scrappy</span>
            <span className={shell.sep}>·</span>
            <span>usually short</span>
          </div>
          <h1 className={shell.title}>
            notes<span className={shell.dot}>.</span>
          </h1>
          <p className={shell.subtitle}>
            Half-baked design and product writing. Mostly things I figured
            out while building, not advice.
          </p>
        </section>

        <section
          className={styles.list}
          aria-labelledby="notes-feed-heading"
        >
          <h2 id="notes-feed-heading" className={styles.srOnly}>
            All notes
          </h2>
          {notes.map((note) => (
            <article key={note.title} className={styles.note}>
              <div className={styles.when}>{note.when}</div>
              <div>
                <h3 className={styles.title}>{note.title}</h3>
                <p className={styles.ex}>{note.excerpt}</p>
                <div className={styles.tags}>
                  {note.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                <span className={styles.read} aria-hidden="true">
                  coming soon
                </span>
              </div>
            </article>
          ))}
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
