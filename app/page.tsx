import type { CSSProperties } from "react"
import Link from "next/link"

import shell from "@/components/site-page.module.css"
import styles from "./work.module.css"

const skills = [
  {
    half: "#5a7a3a",
    name: "Finding issues in messy systems",
    desc: "My day job is remediation analytics: when a financial product has been doing math wrong, I find who was affected, size the harm, and make sure the fix sticks.",
  },
  {
    half: "#d44e2a",
    name: "Translating analytics for humans",
    desc: "The analysis only matters if the people with domain expertise can act on it. A lot of my job is turning SQL into sentences.",
  },
  {
    half: "#c8963e",
    name: "Shipping small tools fast",
    desc: "Six side projects in two years, four live. I like the whole loop: scope it, build it, ship it, then actually run it.",
  },
  {
    half: "#3b5a6a",
    name: "Teaching AI to beginners",
    desc: "I run my office's training program — 500+ people trained, increasingly on AI. My favorite moment is watching the epiphany land.",
  },
]

const projects = [
  {
    href: "/projects/ftp",
    name: "Farm to People",
    desc: "produce box → three dinners, automatically",
    status: "in production",
  },
  {
    href: "/projects/sandlot",
    name: "Sandlot",
    desc: "daily fantasy-baseball audit, reasoning shown",
    status: "runs daily",
  },
  {
    href: "/projects/siggy",
    name: "Siggy",
    desc: "email signature builder, $19 lifetime",
    status: "shipped",
  },
  {
    href: "/projects/telestrations",
    name: "Pass the Doodle",
    desc: "drawing-telephone over a video call",
    status: "shipped",
  },
  {
    href: "/projects/dockme",
    name: "DockMe",
    desc: "citi bike dock confidence, going native",
    status: "in progress",
  },
  {
    href: "/projects/qook",
    name: "Qook",
    desc: "watercolor meal cards by energy level",
    status: "in progress",
  },
]

export default function Page() {
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
            <Link href="/projects">projects</Link>
            <Link href="/about">about</Link>
            <a className={shell.pill} href="mailto:zachoelsner@gmail.com">
              say hi
            </a>
          </nav>
        </header>

        <section className={shell.hero}>
          <div className={shell.kicker}>
            <span>data by day</span>
            <span className={shell.sep}>·</span>
            <span>tools by night</span>
          </div>
          <h1 className={shell.title}>
            zach oelsner<span className={shell.dot}>.</span>
          </h1>
          <p className={shell.subtitle}>
            I find problems in messy real-world systems and fix them — card
            portfolios by day, dinner by night. Same instinct, different
            stakes.
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
              width: 46,
              height: 23,
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

        <div className={styles.wrap}>
          <section className={styles.prose}>
            <h2 className={shell.sectionH}>
              <span className={shell.dotmark} aria-hidden="true" />
              what i do all day
            </h2>
            <p>
              I&rsquo;m an analytics consultant to a major card issuer. The
              short version: when the numbers behind a credit card —
              interest, rewards, minimum payments — drift from what they
              should be, I help find it, prove it, fix it, and make the
              affected customers whole. It&rsquo;s detective work where the
              clues are in the data.
            </p>
            <p>
              I&rsquo;m also chief of staff to a 70-person advanced analytics
              group, which mostly means making sure smart people aren&rsquo;t
              blocked.
            </p>
          </section>

          <section className={styles.block}>
            <h2 className={shell.sectionH}>
              <span className={shell.dotmark} aria-hidden="true" />
              what i&rsquo;m good at
            </h2>
            <div className={styles.skills}>
              {skills.map((s) => (
                <div key={s.name} className={styles.skill}>
                  <h3 className={styles.skillName}>
                    <span
                      className={styles.skillHalf}
                      style={{ "--half": s.half } as CSSProperties}
                      aria-hidden="true"
                    />
                    {s.name}
                  </h3>
                  <p className={styles.skillDesc}>{s.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section className={styles.block}>
            <h2 className={shell.sectionH}>
              <span className={shell.dotmark} aria-hidden="true" />
              the after-hours evidence
            </h2>
            {projects.map((p) => (
              <Link key={p.name} className={styles.projLine} href={p.href}>
                <span className={styles.projName}>{p.name}</span>
                <span className={styles.projDesc}>{p.desc}</span>
                <span className={styles.projStatus}>{p.status}</span>
              </Link>
            ))}
          </section>

          <div className={styles.cta}>
            <p className={styles.ctaText}>
              If any of this overlaps with a problem you have — a system
              doing the wrong math, a team that needs to actually use AI, or
              a small tool that should exist — I&rsquo;m easy to reach.
            </p>
            <a className={styles.ctaBtn} href="mailto:zachoelsner@gmail.com">
              say hi →
            </a>
          </div>
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
