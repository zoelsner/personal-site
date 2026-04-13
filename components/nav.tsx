import Link from "next/link"

export function Nav({ showHome = false }: { showHome?: boolean }) {
  return (
    <nav
      className={`flex items-center text-sm tracking-wide ${showHome ? "w-full justify-between" : "gap-8"}`}
    >
      {showHome && (
        <Link
          href="/"
          className="font-serif text-lg font-normal tracking-tight"
        >
          Zach Oelsner
        </Link>
      )}
      <div className="flex items-center gap-8">
        <Link href="/work" className="hover:underline underline-offset-4">
          Work
        </Link>
        <Link href="/about" className="hover:underline underline-offset-4">
          About
        </Link>
      </div>
    </nav>
  )
}
