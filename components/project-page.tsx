import type { CSSProperties, ReactNode } from "react"
import Link from "next/link"

import styles from "./project-page.module.css"

type HalfTone =
  | "cream"
  | "orange"
  | "gold"
  | "yellow"
  | "slate"
  | "plum"
  | "olive"
  | "ink"

export type ProjectHalfCircle = {
  tone: HalfTone
  style: CSSProperties
  flip?: boolean
}

export type ProjectThink = {
  title: string
  body: ReactNode
}

export type ProjectCTA = {
  label: string
  href: string
  external?: boolean
  accent?: boolean
}

export type ProjectPageProps = {
  name: string
  accent: string
  accentOn?: string
  kicker: string[]
  tagline: ReactNode
  blurb: ReactNode
  think: ProjectThink[]
  preview: ReactNode
  stack: string[]
  ctas: ProjectCTA[]
  halfCircles: ProjectHalfCircle[]
  thinkHeading?: string
  peekHeading?: string
  backHref?: string
  backLabel?: string
}

export function ProjectPage({
  name,
  accent,
  accentOn = "#fdebcc",
  kicker,
  tagline,
  blurb,
  think,
  preview,
  stack,
  ctas,
  halfCircles,
  thinkHeading = "the thinking",
  peekHeading = "a peek inside",
  backHref = "/work",
  backLabel = "back to work",
}: ProjectPageProps) {
  const stageStyle = {
    "--accent": accent,
    "--accent-on": accentOn,
  } as CSSProperties

  return (
    <main className={styles.stage} style={stageStyle}>
      <div className={styles.inner}>
        <header className={styles.top}>
          <Link className={styles.brand} href="/">
            Zach
          </Link>
          <nav className={styles.nav} aria-label="Primary">
            <Link href="/work">work</Link>
            <Link href="/about">about</Link>
            <a
              className={`${styles.pill} ${styles.pillNav} ${styles.accent}`}
              href="mailto:zachoelsner@gmail.com"
            >
              say hi
            </a>
          </nav>
        </header>

        <div className={styles.backRow}>
          <Link className={styles.back} href={backHref}>
            ← {backLabel}
          </Link>
        </div>

        <section className={styles.hero}>
          <div className={styles.kicker}>
            {kicker.map((part, i) => (
              <span key={i}>
                {i > 0 && <span className={styles.sep}>·</span>}
                {part}
              </span>
            ))}
          </div>
          <h1 className={styles.title}>
            {name}
            <span className={styles.dot}>.</span>
          </h1>
          <h2 className={styles.tagline}>{tagline}</h2>
          <p className={styles.blurb}>{blurb}</p>
        </section>

        <div className={styles.halves} aria-hidden="true">
          {halfCircles.map((half, index) => (
            <div
              key={`${half.tone}-${index}`}
              className={[
                styles.half,
                styles[half.tone],
                half.flip ? styles.flip : "",
              ]
                .filter(Boolean)
                .join(" ")}
              style={half.style}
            />
          ))}
        </div>

        <section className={styles.body}>
          <div>
            <h3 className={styles.sectionH}>
              <span className={styles.dotmark} aria-hidden="true" />
              {thinkHeading}
            </h3>
            {think.map((item, i) => (
              <div key={item.title} className={styles.thinkItem}>
                <div className={styles.num}>{String(i + 1).padStart(2, "0")}</div>
                <div>
                  <div className={styles.itemH}>{item.title}</div>
                  <p className={styles.itemP}>{item.body}</p>
                </div>
              </div>
            ))}
          </div>

          <div>
            <h3 className={styles.sectionH}>
              <span className={styles.dotmark} aria-hidden="true" />
              {peekHeading}
            </h3>
            <div className={styles.peekCard}>{preview}</div>
          </div>
        </section>

        <section className={styles.footer}>
          <div>
            <h4 className={styles.stackH}>stack</h4>
            <div className={styles.chips}>
              {stack.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>
          </div>
          <div className={styles.ctas}>
            <Link className={styles.ghostLink} href="/work">
              all work
            </Link>
            {ctas.map((cta) =>
              cta.external ? (
                <a
                  key={cta.label}
                  className={`${styles.pill} ${cta.accent ? styles.accent : ""}`}
                  href={cta.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {cta.label}
                </a>
              ) : (
                <Link
                  key={cta.label}
                  className={`${styles.pill} ${cta.accent ? styles.accent : ""}`}
                  href={cta.href}
                >
                  {cta.label}
                </Link>
              )
            )}
          </div>
        </section>
      </div>
    </main>
  )
}
