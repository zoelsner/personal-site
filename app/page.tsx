import type { CSSProperties } from "react"
import Link from "next/link"

import shell from "@/components/site-page.module.css"
import styles from "./proof.module.css"

const stats = [
  { num: "06", label: "tools built" },
  { num: "04", label: "shipped & live" },
  { num: "01", label: "strangers paid for" },
  { num: "00", label: "subscriptions sold" },
]

const receipts = [
  {
    href: "/projects/ftp",
    name: "Farm to People",
    tag: "in production · 2025",
    proof:
      "Reads my real cart every week and plans three dinners. Dinner gets figured out whether I'm motivated or not, and the produce stops dying in the crisper.",
  },
  {
    href: "/projects/sandlot",
    name: "Sandlot",
    tag: "runs every morning",
    proof:
      "Audits my fantasy-baseball league daily and writes a Sunday brief with sources cited. I still click every button in Fantrax myself — it recommends, I decide.",
  },
  {
    href: "/projects/siggy",
    name: "Siggy",
    tag: "$19 lifetime",
    proof:
      "An email signature builder. Real strangers have paid real money for it, which is a different feeling than any side project before it.",
  },
  {
    href: "/projects/telestrations",
    name: "Pass the Doodle",
    tag: "live at passthedoodle.com",
    proof:
      "The drawing-telephone game over a video call. Rooms hold 15; stress-tested by my Sunday group chat, the harshest QA team I know.",
  },
]

const shop = [
  {
    href: "/projects/dockme",
    name: "DockMe",
    tag: "in progress",
    proof:
      "Citi Bike trip planner going native on iOS — dock confidence at your ETA, backup dock already picked.",
  },
  {
    href: "/projects/qook",
    name: "Qook",
    tag: "in the kitchen",
    proof:
      "Meal cards matched to your energy level, illustrated in watercolor, checkout through Instacart.",
  },
]

export default function Page() {
  const stageStyle = {
    "--accent": "#3B5A6A",
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
            <span>small tools</span>
            <span className={shell.sep}>·</span>
            <span>real usage</span>
          </div>
          <h1 className={shell.title}>
            zach oelsner<span className={shell.dot}>.</span>
          </h1>
          <p className={shell.subtitle}>
            Plenty of people start side projects. The trick I care about is
            keeping them alive. Everything below is live, running, or honestly
            labeled as not-there-yet.
          </p>
        </section>

        <div className={shell.halves} aria-hidden="true">
          <div
            className={`${shell.half} ${shell.slate}`}
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
          <div className={styles.stats}>
            {stats.map((s) => (
              <div key={s.label} className={styles.stat}>
                <div className={styles.statNum}>{s.num}</div>
                <div className={styles.statLabel}>{s.label}</div>
              </div>
            ))}
          </div>

          <section>
            <h2 className={shell.sectionH}>
              <span className={shell.dotmark} aria-hidden="true" />
              the receipts
            </h2>
            {receipts.map((r) => (
              <Link key={r.name} className={styles.receipt} href={r.href}>
                <span className={styles.receiptRow}>
                  <span className={styles.receiptName}>{r.name}</span>
                  <span className={styles.receiptTag}>{r.tag}</span>
                </span>
                <p className={styles.receiptProof}>{r.proof}</p>
              </Link>
            ))}
          </section>

          <section className={styles.block}>
            <h2 className={shell.sectionH}>
              <span className={shell.dotmark} aria-hidden="true" />
              still in the shop
            </h2>
            {shop.map((r) => (
              <Link key={r.name} className={styles.receipt} href={r.href}>
                <span className={styles.receiptRow}>
                  <span className={styles.receiptName}>{r.name}</span>
                  <span className={styles.receiptTag}>{r.tag}</span>
                </span>
                <p className={styles.receiptProof}>{r.proof}</p>
              </Link>
            ))}
          </section>

          <div className={styles.dayjob}>
            <b>The day job, briefly:</b> analytics consulting for a major card
            issuer — finding the places where card math goes wrong, fixing
            them, and making the affected customers whole. I&rsquo;ve also
            trained 500+ colleagues, lately on AI. Same instinct as the side
            projects: find the leak, prove it, fix it, check it stayed fixed.
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
