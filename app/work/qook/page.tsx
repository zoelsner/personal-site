import { Nav } from "@/components/nav"
import Link from "next/link"

export default function QookPage() {
  return (
    <div className="min-h-svh bg-background">
      <div className="flex items-center justify-between px-12 pt-10">
        <div className="flex items-center gap-6 text-sm">
          <Link
            href="/"
            className="font-mono text-base tracking-wide hover:opacity-70"
          >
            ZO
          </Link>
          <div className="flex items-center gap-2">
            <Link
              href="/work"
              className="text-muted-foreground hover:text-foreground"
            >
              Work
            </Link>
            <span className="text-muted-foreground">/</span>
            <span className="font-medium">Qook</span>
          </div>
        </div>
        <Nav />
      </div>
      <div className="mx-auto max-w-6xl px-12 pt-12 pb-24">
        <div className="flex items-center gap-3">
          <span
            className="rounded-full px-3 py-1 text-xs font-medium text-white"
            style={{ backgroundColor: "#B85A3B" }}
          >
            In Progress
          </span>
        </div>
        <h1 className="mt-4 font-serif text-5xl font-normal tracking-tight">
          Qook
        </h1>
        <p className="mt-4 max-w-xl text-lg leading-relaxed text-muted-foreground">
          What to cook with what you have. Scan your kitchen, get a recipe.
        </p>
        <p className="mt-8 text-sm text-muted-foreground">
          Details coming soon.
        </p>
      </div>
    </div>
  )
}
