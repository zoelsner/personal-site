import type { CSSProperties } from "react"
import type { Metadata } from "next"
import Link from "next/link"

import shell from "@/components/site-page.module.css"
import styles from "./page.module.css"

export const metadata: Metadata = {
  title: "About",
  description:
    "Software about food and daily frictions. Based in the Lower East Side.",
  openGraph: {
    title: "About · Zach Oelsner",
    description:
      "Software about food and daily frictions. Based in the Lower East Side.",
  },
  twitter: {
    title: "About · Zach Oelsner",
    description:
      "Software about food and daily frictions. Based in the Lower East Side.",
  },
}

const bits = [
  { what: <>Reading: <em>How to Cook a Wolf</em></>, when: "May" },
  { what: "Cooking from the Farm to People box", when: "Weekly" },
  { what: "Yankees season + my fantasy team", when: "Daily" },
  { what: "Long walks across the bridges", when: "Always" },
  { what: "Espresso, badly pulled", when: "Mornings" },
]

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

        <div
          aria-hidden="true"
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
          aria-hidden="true"
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
          aria-hidden="true"
          className={`${shell.half} ${shell.gold} ${shell.flip}`}
          style={{
            width: 58,
            height: 29,
            right: 140,
            top: 340,
            transform: "rotate(180deg)",
          }}
        />

        <section className={shell.hero}>
          <div className={shell.kicker}>
            <span>based in LES</span>
            <span className={shell.sep}>·</span>
            <span>food-pilled since 2020</span>
          </div>
          <h1 className={shell.title}>
            about<span className={shell.dot}>.</span>
          </h1>
          <p className={shell.subtitle}>
            I build small, useful things — usually around food, sports, or
            whatever I was annoyed by that week.
          </p>
        </section>

        <section className={styles.body}>
          <div className={styles.prose}>
            <p className={styles.lede}>
              I&apos;m Zach. I live on the Lower East Side, cook more than I
              should, and spend most weekends turning a problem I&apos;ve
              been complaining about into a small app I actually use.
            </p>
            <p>
              My work mostly lives at the intersection of{" "}
              <b>cooking, sports, and software that doesn&apos;t try to be a
              platform.</b>{" "}
              Farm to People reads my real cart and tells me three meals to
              make. Sandlot watches my fantasy league and tells me what to
              do before I open Fantrax. Siggy stops me (and a few hundred
              other people) from fighting HTML to get a decent email
              signature.
            </p>
            <p>
              I think most &ldquo;AI products&rdquo; get the shape wrong:
              too much surface area, too few sharp edges. The interesting
              work right now is small tools with strong opinions and a
              tight loop — something that takes thirty seconds and saves
              you an hour. That&apos;s what I try to build.
            </p>
            <p>
              Before this I was at <b>Bubble</b>, and before that a few
              other places that taught me how to ship. If you&apos;ve got a
              half-baked idea that smells like a weekend project, I&apos;d
              love to hear about it.
            </p>
          </div>

          <aside className={styles.aside}>
            <div className={styles.quick}>
              <dl>
                <dt>Based</dt>
                <dd>Lower East Side, NYC</dd>
                <dt>Doing</dt>
                <dd>Building small useful things</dd>
                <dt>Past</dt>
                <dd>Bubble, others</dd>
                <dt>Email</dt>
                <dd>
                  <a href="mailto:zachoelsner@gmail.com">
                    zachoelsner@gmail.com
                  </a>
                </dd>
                <dt>Elsewhere</dt>
                <dd>
                  <a
                    href="https://github.com/zoelsner"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    github
                  </a>
                  {" · "}
                  <a
                    href="https://linkedin.com/in/zoelsner"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    linkedin
                  </a>
                  {" · "}
                  <a
                    href="https://tiktok.com/@builtwithzach"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    tiktok
                  </a>
                </dd>
              </dl>
            </div>

            <div>
              <h4 className={shell.sectionH}>
                <span className={shell.dotmark} aria-hidden="true" />
                currently into
              </h4>
              <div className={styles.bits}>
                {bits.map((bit, i) => (
                  <div key={i} className={styles.bit}>
                    <span className={styles.what}>{bit.what}</span>
                    <span className={styles.when}>{bit.when}</span>
                  </div>
                ))}
              </div>
            </div>
          </aside>
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
