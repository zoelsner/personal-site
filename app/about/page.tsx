import { ContactCard } from "@/components/contact-card"
import type { CSSProperties } from "react"
import type { Metadata } from "next"
import Link from "next/link"

import shell from "@/components/site-page.module.css"
import styles from "./page.module.css"

const description =
  "Zach Oelsner — analytics consulting, shared Chief of Staff responsibilities at Protiviti, and independent tools for everyday problems. Often involving food."

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
            <Link href="/projects">projects</Link>
            <Link className={shell.on} href="/about">
              about
            </Link>
            <ContactCard className={shell.pill} />
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
            <span>NYC</span>
          </div>
          <h1 className={shell.title}>
            about<span className={shell.dot}>.</span>
          </h1>
          <p className={shell.subtitle}>
            I’m Zach. I build tools for the small, repetitive problems I keep
            running into — often somewhere between my grocery cart and dinner.
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
            At Protiviti, my work spans analytics, strategy, and operations: digging into messy systems, checking what the data
            actually says, and working with a team to get a fix through. I bring
            that same curiosity to my own projects, where I choose the problem
            and build the tool. The client work below is about bank remediation;
            the projects on this site are independent builds, often starting
            with something bothering me. Like half a produce box going in the
            trash.
          </p>

          <div className={styles.block}>
            <h2 className={shell.sectionH}>
              <span className={shell.dotmark} aria-hidden="true" />
              the day job (“client work”)
            </h2>
            <p>
              By day I consult for a top-5 card issuer on remediation — finding
              issues in the functions you’d assume a bank had nailed down: APR,
              rewards, settlements, minimum payments. We scope the issue,
              validate the affected population so no one gets missed, and deploy
              the fix so it doesn’t happen again. Then we make the harmed
              customers whole — money back, credit-bureau reporting corrected.
            </p>
            <p className={styles.impact}>
              So far that work has turned up issues across millions of accounts,
              including cost leakage in legacy payment logic I found by reading
              the SQL directly.
            </p>
            <p>
              It takes a lot of analysis, which I enjoy. It takes just as much
              translation — making complex analytical ideas accessible to people
              with real domain expertise but less analytics background, and
              building consensus to push a fix through a bank.
            </p>
          </div>

          <div className={styles.block}>
            <h2 className={shell.sectionH}>
              <span className={shell.dotmark} aria-hidden="true" />
              helping the practice work better
            </h2>
            <p>
              I share the Chief of Staff role for Protiviti’s approximately
              70-person analytics practice with a colleague. Alongside client
              work, I help with the day-to-day work of moving practice
              priorities forward.
            </p>
            <p>
              I proposed and lead our monthly leadership forum, bringing
              practice leaders together and inviting leaders from other groups
              to develop partnerships. It’s a chance to connect people working
              on related problems and figure out where we can work together.
            </p>
            <p>
              I also help advance AI learning and adoption. I run our office’s
              training program — 500+ people trained, increasingly on AI — and
              taught our firm’s AI crash course during its national upskilling
              push. My favorite moment is when the epiphany lands: someone who’d
              never touched AI suddenly sees what it can do for their everyday
              work.
            </p>
          </div>

          <div className={styles.block}>
            <h2 className={shell.sectionH}>
              <span className={shell.dotmark} aria-hidden="true" />
              after hours, usually in the kitchen
            </h2>
            <p>
              My <Link href="/projects">independent projects</Link> are where I
              take a problem from “this is annoying” to something I can use.
              Sometimes that means applying AI to a grocery cart; sometimes it’s
              a simpler tool. I choose the problem, make the product decisions,
              and keep refining the result. They’re personal builds, separate
              from my work at Protiviti.
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
