import type { CSSProperties } from "react"
import type { Metadata } from "next"
import Link from "next/link"

import shell from "@/components/site-page.module.css"

export const metadata: Metadata = {
  title: "Not found",
  description: "The page you're looking for isn't here.",
}

export default function NotFound() {
  const stageStyle = {
    "--accent": "#b25a3c",
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

        <section className={shell.hero}>
          <div className={shell.kicker}>
            <span>404</span>
            <span className={shell.sep}>·</span>
            <span>dead link</span>
          </div>
          <h1 className={shell.title}>
            nothing here<span className={shell.dot}>.</span>
          </h1>
          <p className={shell.subtitle}>
            This page went nowhere. The{" "}
            <Link
              href="/work"
              style={{ color: "inherit", textDecorationThickness: 2 }}
            >
              work
            </Link>{" "}
            page is where everything lives.
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
