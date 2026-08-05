import Link from "next/link"

import styles from "./receipt.module.css"

const items = [
  {
    href: "/projects/ftp",
    name: "Farm to People",
    right: "SHIPPED",
    desc: "three dinners from my actual produce box",
  },
  {
    href: "/projects/sandlot",
    name: "Sandlot",
    right: "SHIPPED",
    desc: "helps me not suck at fantasy baseball",
  },
  {
    href: "/projects/siggy",
    name: "Siggy",
    right: "$19",
    desc: "email signatures that don't look like arial 11pt",
  },
  {
    href: "/projects/telestrations",
    name: "Pass the Doodle",
    right: "FREE",
    desc: "drawing-telephone over a video call, serves 15",
  },
  {
    href: "/projects/dockme",
    name: "DockMe",
    right: "SOON",
    desc: "will there be a citi bike dock when you arrive?",
  },
  {
    href: "/projects/qook",
    name: "Qook",
    right: "SOON",
    desc: "meal cards matched to your energy level",
  },
]

export default function Page() {
  return (
    <main className={styles.stage}>
      <nav className={styles.nav} aria-label="Primary">
        <Link href="/projects">projects</Link>
        <Link href="/about">about</Link>
        <a href="mailto:zachoelsner@gmail.com">say hi</a>
      </nav>

      <div className={styles.receiptWrap}>
        <div className={styles.stain} aria-hidden="true" />
        <div className={styles.receipt}>
          <header className={styles.center}>
            <h1 className={styles.shopName}>ZACH OELSNER</h1>
            <div className={styles.shopSub}>
              small tools · mostly food
              <br />
              lower east side, nyc
            </div>
          </header>

          <hr className={styles.rule} />
          <div className={styles.metaRow}>
            <span>ORDER #001</span>
            <span>2025–2026</span>
          </div>
          <div className={styles.metaRow}>
            <span>SERVER: ZACH</span>
            <span>TABLE: KITCHEN</span>
          </div>
          <hr className={styles.rule} />

          <section aria-label="Projects">
            {items.map((item) => (
              <Link key={item.name} className={styles.item} href={item.href}>
                <span className={styles.itemRow}>
                  <span>1&times;&nbsp;&nbsp;{item.name}</span>
                  <span>{item.right}</span>
                </span>
                <span className={styles.itemDesc}>{item.desc}</span>
              </Link>
            ))}
          </section>

          <hr className={styles.rule} />
          <div className={styles.totRow}>
            <span>SUBTOTAL</span>
            <span>6 PROJECTS</span>
          </div>
          <div className={`${styles.totRow} ${styles.small}`}>
            <span>WASTED PRODUCE</span>
            <span>-50%</span>
          </div>
          <div className={`${styles.totRow} ${styles.small}`}>
            <span>SUBSCRIPTIONS SOLD</span>
            <span>$0.00</span>
          </div>
          <hr className={styles.rule} />
          <div className={`${styles.totRow} ${styles.totStrong}`}>
            <span>TOTAL</span>
            <span>STILL SHIPPING</span>
          </div>
          <div className={`${styles.totRow} ${styles.small}`}>
            <span>PAID WITH</span>
            <span>NIGHTS + WEEKENDS</span>
          </div>
          <div className={`${styles.totRow} ${styles.small}`}>
            <span>CHANGE DUE</span>
            <span>SLEEP</span>
          </div>
          <hr className={styles.rule} />

          <div className={styles.links}>
            <a
              href="https://github.com/zoelsner"
              target="_blank"
              rel="noopener noreferrer"
            >
              github
            </a>{" "}
            ·{" "}
            <a
              href="https://www.linkedin.com/in/zacharyoelsner/"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin
            </a>{" "}
            ·{" "}
            <a
              href="https://tiktok.com/@builtwithzach"
              target="_blank"
              rel="noopener noreferrer"
            >
              tiktok
            </a>{" "}
            ·{" "}
            <a href="mailto:zachoelsner@gmail.com">email</a>
          </div>

          <div className={styles.thanks}>
            thank you for scrolling
            <br />
            please come again
          </div>

          <div className={styles.barcode} aria-hidden="true" />
          <div className={styles.barcodeNum}>Z A C H O E L S N E R</div>
        </div>
      </div>
    </main>
  )
}
