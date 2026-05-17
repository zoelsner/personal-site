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

const projects = [
  {
    slug: "ftp",
    name: "Farm to People",
    swatchClass: styles.swFtp,
    dotColor: "#2D5A3D",
    info: ["Shipped", "2025", "In production"],
    headline: "three meals from your actual box.",
    description:
      "Reads your Farm to People cart and gives you three meals to make with what's in there, plus a chat that knows everything in your box. Live in production with real users.",
    tags: [
      "Python",
      "FastAPI",
      "Claude AI",
      "Supabase",
      "Railway",
      "PWA",
    ],
  },
  {
    slug: "qook",
    name: "Qook",
    swatchClass: styles.swQook,
    dotColor: "#B85A3B",
    info: ["In progress", "2026", "iOS first"],
    headline: "meal cards matched to your energy level.",
    description:
      "Generates meal cards based on how much cooking you have in you today and pre-fills the ingredients in Instacart. Watercolor illustrations make the food look like something you actually want to make.",
    tags: ["Next.js", "Claude AI", "Instacart API", "Watercolor"],
  },
  {
    slug: "siggy",
    name: "Siggy",
    swatchClass: styles.swSiggy,
    dotColor: "#6C5CE7",
    info: ["Shipped", "2026", "$49 lifetime"],
    headline: "a polished signature, pasted into Gmail.",
    description:
      "Email signature builder for people who don't want to fight HTML. Pick a template, fill in your details, paste into Gmail — done. Renders crisp in every client because the name is rendered as an image.",
    tags: ["Next.js", "React", "Vercel", "Satori", "Lemon Squeezy"],
  },
]

export default function WorkPage() {
  const stageStyle = {
    "--accent": "#3B4A5A",
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
          className={`${shell.half} ${shell.slate}`}
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
          className={`${shell.half} ${shell.ink} ${shell.flip}`}
          style={{
            width: 40,
            height: 20,
            right: 160,
            top: 340,
            transform: "rotate(180deg)",
          }}
        />

        <section className={shell.hero}>
          <div className={shell.kicker}>
            <span>selected work</span>
            <span className={shell.sep}>·</span>
            <span>03 projects</span>
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
          className={styles.workList}
          aria-labelledby="work-list-heading"
        >
          <h2 id="work-list-heading" className={styles.srOnly}>
            Selected projects
          </h2>
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/work/${project.slug}`}
              className={styles.workCard}
              aria-labelledby={`work-${project.slug}-name`}
            >
              <div className={`${styles.swatch} ${project.swatchClass}`}>
                <div
                  id={`work-${project.slug}-name`}
                  className={styles.pname}
                >
                  {project.name}
                  <span style={{ color: project.dotColor }}>.</span>
                </div>
              </div>
              <div className={styles.body3}>
                <div className={styles.pillInfo}>
                  {project.info.map((bit, i) => (
                    <span key={bit}>
                      {i > 0 && <span className={styles.sep}>·</span>}
                      <i>{bit}</i>
                    </span>
                  ))}
                </div>
                <h3 className={styles.cardH}>{project.headline}</h3>
                <p className={styles.desc}>{project.description}</p>
                <div className={styles.chips}>
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
              <div className={styles.arrow} aria-hidden="true">
                →
              </div>
            </Link>
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
