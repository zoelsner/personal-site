import type { CSSProperties } from "react"
import Link from "next/link"

import shell from "@/components/site-page.module.css"
import styles from "./story.module.css"

const projects = [
  { href: "/projects/ftp", name: "Farm to People", year: "'25" },
  { href: "/projects/sandlot", name: "Sandlot", year: "'26" },
  { href: "/projects/dockme", name: "DockMe", year: "wip" },
  { href: "/projects/qook", name: "Qook", year: "wip" },
  { href: "/projects/siggy", name: "Siggy", year: "'26" },
  { href: "/projects/telestrations", name: "Pass the Doodle", year: "'26" },
]

export default function Page() {
  const stageStyle = {
    "--accent": "#d44e2a",
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
            <span>food-pilled</span>
            <span className={shell.sep}>·</span>
            <span>NYC</span>
          </div>
          <h1 className={shell.title}>
            hi, i&rsquo;m zach<span className={shell.dot}>.</span>
          </h1>
          <p className={shell.subtitle}>
            I build small tools for everyday problems. Mostly food. This page
            is the running list.
          </p>
        </section>

        <div className={shell.halves} aria-hidden="true">
          <div
            className={`${shell.half} ${shell.cream}`}
            style={{
              width: 54,
              height: 27,
              left: 120,
              top: 170,
              transform: "rotate(-12deg)",
            }}
          />
          <div
            className={`${shell.half} ${shell.orange}`}
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

        <section className={styles.prose}>
          <div>
            <h2 className={shell.sectionH}>
              <span className={shell.dotmark} aria-hidden="true" />
              the loop
            </h2>
            <p>
              Every project here started the same way, and I&rsquo;ve stopped
              fighting it:
            </p>
            <div className={styles.loop} aria-label="The loop">
              <span className={styles.loopStep}>
                something annoys me twice
              </span>
              <span className={styles.loopArrow} aria-hidden="true">
                →
              </span>
              <span className={styles.loopStep}>i build a thing</span>
              <span className={styles.loopArrow} aria-hidden="true">
                →
              </span>
              <span className={styles.loopStep}>real people use it</span>
              <span className={styles.loopArrow} aria-hidden="true">
                →
              </span>
              <span className={styles.loopStep}>
                i stick around to see if it worked
              </span>
            </div>
          </div>

          <div className={styles.block}>
            <h2 className={shell.sectionH}>
              <span className={shell.dotmark} aria-hidden="true" />
              what&rsquo;s cooking right now
            </h2>
            <ul className={styles.nowList}>
              <li>
                Eating through a{" "}
                <Link href="/projects/ftp">Farm to People</Link> box every
                week — the app reads my actual cart and plans three dinners,
                so the produce stops dying in the crisper.
              </li>
              <li>
                Letting <Link href="/projects/sandlot">Sandlot</Link> run its
                morning fantasy-baseball audit so I don&rsquo;t have to live
                inside Fantrax. I still make every move myself.
              </li>
              <li>
                Building <Link href="/projects/dockme">DockMe</Link>, a Citi
                Bike app for people who are tired of circling full docks.
                Going native on iOS.
              </li>
              <li>
                Sketching <Link href="/projects/qook">Qook</Link> — watercolor
                meal cards matched to how much cooking you actually have in
                you tonight.
              </li>
            </ul>
          </div>

          <div className={styles.block}>
            <h2 className={shell.sectionH}>
              <span className={shell.dotmark} aria-hidden="true" />
              the shelf
            </h2>
            <div className={styles.projRow}>
              {projects.map((p) => (
                <Link key={p.name} className={styles.projChip} href={p.href}>
                  {p.name} <small>{p.year}</small>
                </Link>
              ))}
              <Link className={styles.projChip} href="/projects">
                all projects →
              </Link>
            </div>
          </div>

          <div className={styles.block}>
            <p className={styles.aside}>
              By day I&rsquo;m a data consultant — I find the places where a
              big bank&rsquo;s card math goes wrong and help fix them. By
              night, all of the above. The two jobs are more similar than
              either would admit.
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
