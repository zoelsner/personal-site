import type { CSSProperties } from "react"
import type { Metadata } from "next"
import Link from "next/link"

import shell from "@/components/site-page.module.css"
import styles from "./page.module.css"

const description =
  "Zach Oelsner — I build tools to make everyday life easier. By day I consult to a top-5 US card issuer on credit-card remediation."

export const metadata: Metadata = {
  title: "About",
  description,
  openGraph: {
    title: "About · Zach Oelsner",
    description,
  },
  twitter: {
    title: "About · Zach Oelsner",
    description,
  },
}

export default function AboutPage() {
  const stageStyle = {
    "--accent": "#2D5A3D",
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
            <Link href="/work">work</Link>
            <Link className={shell.on} href="/about">
              about
            </Link>
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

        <section className={shell.hero}>
          <div className={shell.kicker}>
            <span>food-pilled</span>
            <span className={shell.sep}>·</span>
            <span>LES</span>
          </div>
          <h1 className={shell.title}>
            about<span className={shell.dot}>.</span>
          </h1>
          <p className={shell.subtitle}>
            I’m Zach. I find joy in building tools that help me through
            everyday life.
          </p>
        </section>

        <div className={shell.halves} aria-hidden="true">
          <div
            className={`${shell.half} ${shell.olive}`}
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
              width: 48,
              height: 24,
              right: 200,
              top: 200,
              transform: "rotate(20deg)",
            }}
          />
          <div
            className={`${shell.half} ${shell.gold} ${shell.flip}`}
            style={{
              width: 58,
              height: 29,
              right: 140,
              top: 340,
              transform: "rotate(180deg)",
            }}
          />
        </div>

        <section className={styles.prose}>
          <p>
            It usually starts from a small, repetitive task or problem I keep
            running into. I see if I can put together a solution that’s easy
            to use every day, and then I share it with people I know running
            into the same thing.
          </p>
          <p>
            I’ve come to love design. It’s something that can consume me, and
            I look forward to learning and discovering more about my design
            tastes.
          </p>

          <div className={styles.block}>
            <h2 className={shell.sectionH}>
              <span className={shell.dotmark} aria-hidden="true" />
              the day job (“client work”)
            </h2>
            <p>
              During the day, I consult to a top-5 card issuer. Remediation
              means finding issues across the common functions you’d think a
              bank would have nailed down, like APR and rewards, and the list
              goes on. We scope the issue, develop or validate that the data
              behind the population is accurate so we’re not missing anyone,
              and we deploy the code fix so it doesn’t happen again. We also
              help the customers who were harmed before the fix. We make them
              whole by sending them money and correcting anything that hit
              their credit bureau reporting.
            </p>
            <p>
              This takes a lot of analysis, which is something I enjoy. It
              also takes a lot of stakeholder management: creating consensus,
              and making complex processes and analytical ideas accessible to
              people who may be less experienced with analytics but carry real
              domain expertise. Bringing all those people together,
              facilitating a productive discussion, and helping push the fix
              along.
            </p>
            <p>
              Right now we’re building custom Gems in Gemini for a client. I
              spend a lot of my time in Google Workspace, Gemini, and
              Snowflake.
            </p>
            <p className={styles.impact}>
              So far, my efforts have found issues across millions of accounts
              and hundreds of thousands of dollars in money owed to customers
              that wouldn’t have been found otherwise.
            </p>
          </div>

          <div className={styles.block}>
            <h2 className={shell.sectionH}>
              <span className={shell.dotmark} aria-hidden="true" />
              building community wherever I work
            </h2>
            <p>
              I equally enjoy being involved in the firm and building our
              community. I’m chief of staff to our 70-person advanced
              analytics group, and I run our AI training group in the New York
              office.
            </p>
            <p>
              I enjoy hosting panels that help people understand what’s
              happening across different parts of the firm and encourage
              collaboration. Recently I instructed our firm’s AI crash course,
              upskilling people on what AI can actually do within their
              everyday workflows. It’s deeply satisfying to watch an epiphany
              form within someone who hasn’t been exposed to the powers of AI.
              It can be quite fun.
            </p>
          </div>
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
          </div>
          <div className={shell.copy}>© Zach Oelsner · LES, NYC</div>
        </section>
      </div>
    </main>
  )
}
