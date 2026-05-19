import type { CSSProperties } from "react"
import Link from "next/link"
import { Lilita_One, Outfit } from "next/font/google"

import styles from "./page.module.css"

const dugoutDisplay = Lilita_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-dugout-display",
})

const dugoutSans = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-dugout-sans",
})

type HalfTone = "cream" | "orange" | "gold" | "slate" | "plum" | "olive" | "ink"

type HalfCircle = {
  tone: HalfTone
  style: CSSProperties
  flip?: boolean
  compactHide?: boolean
  mobileHide?: boolean
}

const halfCircles: HalfCircle[] = [
  {
    tone: "cream",
    style: {
      width: 90,
      height: 45,
      left: 120,
      top: 140,
      transform: "rotate(-15deg)",
    },
  },
  {
    tone: "orange",
    style: {
      width: 120,
      height: 60,
      left: 300,
      top: 200,
      transform: "rotate(25deg)",
    },
  },
  {
    tone: "ink",
    style: {
      width: 60,
      height: 30,
      left: 80,
      top: 340,
      transform: "rotate(45deg)",
    },
    mobileHide: true,
  },
  {
    tone: "orange",
    style: {
      width: 100,
      height: 50,
      right: 240,
      top: 160,
      transform: "rotate(-10deg)",
    },
  },
  {
    tone: "cream",
    style: {
      width: 150,
      height: 75,
      right: 80,
      top: 260,
      transform: "rotate(8deg)",
    },
    mobileHide: true,
  },
  {
    tone: "slate",
    style: {
      width: 50,
      height: 25,
      right: 380,
      top: 340,
      transform: "rotate(-30deg)",
    },
    mobileHide: true,
  },
  {
    tone: "gold",
    style: {
      width: 110,
      height: 55,
      left: 580,
      top: 140,
      transform: "rotate(180deg)",
    },
    flip: true,
  },
  {
    tone: "orange",
    style: {
      width: 48,
      height: 24,
      left: 820,
      top: 260,
      transform: "rotate(120deg)",
    },
    mobileHide: true,
  },
  {
    tone: "olive",
    style: {
      width: 70,
      height: 35,
      left: 480,
      top: 340,
      transform: "rotate(-60deg)",
    },
    compactHide: true,
  },
  {
    tone: "plum",
    style: {
      width: 56,
      height: 28,
      right: 480,
      top: 200,
      transform: "rotate(70deg)",
    },
    mobileHide: true,
  },
]

type Chip = { label: string; href: string; external?: boolean }

const chips: Chip[] = [
  { label: "Farm to People", href: "/work/ftp" },
  { label: "Sandlot", href: "/work/sandlot" },
  { label: "Siggy", href: "/work/siggy" },
  { label: "Telestrations", href: "/work/telestrations" },
]

const socials = [
  { label: "github", href: "https://github.com/zoelsner" },
  { label: "linkedin", href: "https://www.linkedin.com/in/zacharyoelsner/" },
  { label: "tiktok", href: "https://tiktok.com/@builtwithzach" },
]

export default function Page() {
  return (
    <main
      className={`${styles.stage} ${dugoutDisplay.variable} ${dugoutSans.variable}`}
    >
      <header className={styles.top}>
        <Link className={styles.brand} href="/">
          Zach
        </Link>
        <nav className={styles.nav} aria-label="Primary">
          <Link href="/work">work</Link>
          <Link href="/about">about</Link>
          <a
            className={`${styles.pill} ${styles.pillNav}`}
            href="mailto:zachoelsner@gmail.com"
          >
            say hi
          </a>
        </nav>
      </header>

      <div className={styles.confetti} aria-hidden="true">
        {halfCircles.map((half, index) => (
          <div
            key={`${half.tone}-${index}`}
            className={[
              styles.half,
              styles[half.tone],
              half.flip ? styles.flip : "",
              half.compactHide ? styles.compactHide : "",
              half.mobileHide ? styles.mobileHide : "",
            ]
              .filter(Boolean)
              .join(" ")}
            style={half.style}
          />
        ))}
      </div>

      <section className={styles.centerName} aria-label="Zach Oelsner">
        <p className={styles.kicker}>food-pilled · since 2020 · LES</p>
        <h1 className={styles.name}>
          zach oelsner<span className={styles.dot}>.</span>
        </h1>
      </section>

      <footer className={styles.footer}>
        <div className={styles.chips} aria-label="Featured links">
          {chips.map((chip) =>
            chip.external ? (
              <a
                key={chip.label}
                className={styles.chip}
                href={chip.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {chip.label}
              </a>
            ) : (
              <Link key={chip.label} className={styles.chip} href={chip.href}>
                {chip.label}
              </Link>
            )
          )}
        </div>
        <div className={styles.socials}>
          {socials.map((social, index) => (
            <span key={social.label}>
              {index > 0 && <span aria-hidden="true"> · </span>}
              <a href={social.href} target="_blank" rel="noopener noreferrer">
                {social.label}
              </a>
            </span>
          ))}
        </div>
      </footer>
    </main>
  )
}
