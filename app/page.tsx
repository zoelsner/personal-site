import Link from "next/link"

import styles from "./menu.module.css"

type Item = {
  href: string
  name: string
  price: string
  desc: string
  badge?: string
}

const specials: Item[] = [
  {
    href: "/projects/ftp",
    name: "Farm to People",
    price: "on the house",
    desc: "your weekly produce box, read by a scraper and served back as three dinners. nothing wilts in the back of the fridge.",
    badge: "chef's pick",
  },
  {
    href: "/projects/sandlot",
    name: "Sandlot",
    price: "runs daily",
    desc: "a fantasy-baseball audit with the reasoning plated on the side. helps the chef not suck.",
  },
  {
    href: "/projects/siggy",
    name: "Siggy",
    price: "$19",
    desc: "a polished email signature, pasted into gmail. served with four templates, no subscription.",
  },
  {
    href: "/projects/telestrations",
    name: "Pass the Doodle",
    price: "free",
    desc: "the drawing-telephone party game, family style, over a video call. serves up to 15.",
  },
]

const kitchen: Item[] = [
  {
    href: "/projects/dockme",
    name: "DockMe",
    price: "coming soon",
    desc: "dock confidence for your citi bike trip, backup dock picked before you leave. going native on iOS.",
  },
  {
    href: "/projects/qook",
    name: "Qook",
    price: "coming soon",
    desc: "meal cards matched to tonight's energy level, illustrated in watercolor.",
  },
]

function MenuItem({ item }: { item: Item }) {
  return (
    <Link className={styles.item} href={item.href}>
      <span className={styles.itemRow}>
        <span className={styles.itemName}>{item.name}</span>
        {item.badge && <span className={styles.badge}>{item.badge}</span>}
        <span className={styles.leaders} aria-hidden="true" />
        <span className={styles.price}>{item.price}</span>
      </span>
      <p className={styles.itemDesc}>{item.desc}</p>
    </Link>
  )
}

export default function Page() {
  return (
    <main className={styles.stage}>
      <div className={styles.card}>
        <nav className={styles.nav} aria-label="Primary">
          <Link href="/projects">projects</Link>
          <Link href="/about">about</Link>
          <a href="mailto:zachoelsner@gmail.com">say hi</a>
        </nav>

        <header className={styles.head}>
          <h1 className={styles.wordmark}>
            Zach<em>&rsquo;s</em>
          </h1>
          <div className={styles.subhead}>Small Tools &amp; Provisions</div>
          <div className={styles.est}>
            est. Lower East Side, NYC — everything made from scratch, mostly
            food
          </div>
        </header>

        <div className={styles.squiggle} aria-hidden="true">
          <span>·</span>
          <span>·</span>
          <span>✦</span>
          <span>·</span>
          <span>·</span>
        </div>

        <section aria-label="Shipped projects">
          <h2 className={styles.sectionTitle}>Today&rsquo;s Specials</h2>
          <p className={styles.sectionNote}>shipped &amp; in production</p>
          {specials.map((item) => (
            <MenuItem key={item.name} item={item} />
          ))}
        </section>

        <div className={styles.squiggle} aria-hidden="true">
          <span>·</span>
          <span>·</span>
          <span>✦</span>
          <span>·</span>
          <span>·</span>
        </div>

        <section aria-label="Work in progress">
          <h2 className={styles.sectionTitle}>Still in the Kitchen</h2>
          <p className={styles.sectionNote}>
            no promises on timing — it&rsquo;s done when it&rsquo;s done
          </p>
          {kitchen.map((item) => (
            <MenuItem key={item.name} item={item} />
          ))}
        </section>

        <footer className={styles.footer}>
          <p className={styles.footerLine}>
            say hi:{" "}
            <a href="mailto:zachoelsner@gmail.com">zachoelsner@gmail.com</a>
          </p>
          <p className={styles.footerLine}>
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
            <a
              href="https://x.com/zachoelsner"
              target="_blank"
              rel="noopener noreferrer"
            >
              x
            </a>
          </p>
          <p className={styles.fine}>
            tips not accepted · github stars gladly · menu subject to change
            whenever something new annoys me
          </p>
        </footer>
      </div>
    </main>
  )
}
