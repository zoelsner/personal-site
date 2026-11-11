import type { Metadata } from "next"
import Link from "next/link"
import styles from "./qook.module.css"

export const metadata: Metadata = {
  title: "Qook help",
  robots: { index: false, follow: false },
}

export default function QookHelpLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className={styles.page}>
      <div className={styles.inner}>
        <header className={styles.header}>
          <Link href="/projects/qook" className={styles.brand}>Qook</Link>
          <span>tonight’s dinner, sorted.</span>
        </header>
        <article className={styles.article}>{children}</article>
        <nav className={styles.footer} aria-label="Qook help">
          <Link href="/qook/support">support</Link>
          <Link href="/qook/privacy">privacy</Link>
          <Link href="/qook/terms">terms</Link>
          <Link href="/projects/qook">about Qook</Link>
        </nav>
      </div>
    </main>
  )
}
