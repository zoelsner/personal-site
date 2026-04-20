import type { Metadata } from "next"
import Link from "next/link"
import { Nav } from "@/components/nav"

export const metadata: Metadata = {
  title: "Not found",
  description: "The page you're looking for isn't here.",
}

export default function NotFound() {
  return (
    <div
      className="relative flex min-h-svh flex-col"
      style={{ backgroundColor: "#EFE8DA", color: "#1A1712" }}
    >
      {/* Top nav */}
      <div className="flex items-center justify-between px-6 pt-8 sm:px-12 sm:pt-10">
        <Link
          href="/"
          className="font-mono text-sm tracking-wide hover:opacity-70 sm:text-base"
        >
          ZO
        </Link>
        <Nav />
      </div>

      {/* Hero */}
      <div className="mx-auto flex w-full max-w-2xl flex-1 flex-col justify-center px-6 py-16 sm:px-12 sm:py-24">
        <div
          className="font-mono text-xs uppercase tracking-[0.14em] sm:text-sm"
          style={{ color: "#8A8275" }}
        >
          404
        </div>
        <h1 className="mt-4 font-serif text-5xl leading-[1.1] tracking-tight sm:mt-6 sm:text-6xl md:text-7xl">
          Nothing on this shelf.
        </h1>
        <p
          className="mt-6 max-w-xl font-serif text-xl leading-snug italic sm:mt-8 sm:text-2xl"
          style={{ color: "#3C362E" }}
        >
          The page you&apos;re looking for isn&apos;t here.
        </p>

        {/* Small olive half-circle on a hairline, as a signature visual */}
        <div className="mt-14 max-w-xs sm:mt-16">
          <div className="flex h-10 items-end">
            <div
              style={{
                width: 72,
                height: 36,
                backgroundColor: "#5C7A4A",
                borderRadius: "72px 72px 0 0",
              }}
            />
          </div>
          <div
            className="h-px w-full"
            style={{ backgroundColor: "#C9C2B4" }}
          />
        </div>

        <div className="mt-10 sm:mt-12">
          <Link
            href="/"
            className="inline-flex items-center gap-2 font-mono text-sm uppercase tracking-[0.14em] hover:opacity-70"
            style={{ color: "#1A1712" }}
          >
            <span>Back home</span>
            <span>→</span>
          </Link>
        </div>
      </div>

      {/* Footer */}
      <div
        className="flex items-center justify-between px-6 pb-8 pt-6 font-mono text-xs sm:px-12 sm:pb-10 sm:text-sm"
        style={{ color: "#8A8275" }}
      >
        <div className="flex items-center gap-4 sm:gap-5">
          <a
            href="https://github.com/zoelsner"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground"
          >
            github
          </a>
          <span>·</span>
          <a
            href="https://linkedin.com/in/zoelsner"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground"
          >
            linkedin
          </a>
          <span>·</span>
          <a
            href="https://tiktok.com/@builtwithzach"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground"
          >
            tiktok
          </a>
        </div>
        <div>© 2026</div>
      </div>
    </div>
  )
}
