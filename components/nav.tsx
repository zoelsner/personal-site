import Link from "next/link"

export function Nav() {
  return (
    <nav className="flex items-center gap-8 text-sm tracking-wide">
      <Link href="/work" className="hover:underline underline-offset-4">
        Work
      </Link>
      <Link href="/about" className="hover:underline underline-offset-4">
        About
      </Link>
      <Link href="/contact" className="hover:underline underline-offset-4">
        Contact
      </Link>
    </nav>
  )
}
