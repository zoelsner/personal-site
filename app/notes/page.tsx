import type { Metadata } from "next"
import { Nav } from "@/components/nav"

export const metadata: Metadata = {
  title: "Design Notes",
  description: "Design notes and build references from Zach Oelsner.",
  openGraph: {
    title: "Design Notes · Zach Oelsner",
    description: "Design notes and build references from Zach Oelsner.",
  },
  twitter: {
    title: "Design Notes · Zach Oelsner",
    description: "Design notes and build references from Zach Oelsner.",
  },
}

export default function NotesPage() {
  return (
    <div
      className="relative flex min-h-svh flex-col"
      style={{ backgroundColor: "#EFE8DA", color: "#1A1712" }}
    >
      <div className="px-12 pt-10">
        <Nav showHome />
      </div>

      <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col px-12 pt-20 pb-24">
        <div
          className="font-mono text-sm tracking-[0.14em] uppercase"
          style={{ color: "#5C554A" }}
        >
          Notes
        </div>

        <h1 className="mt-6 max-w-3xl font-serif text-5xl leading-[1.05] font-normal tracking-tight sm:text-7xl">
          Design notes
        </h1>

        <p
          className="mt-8 max-w-2xl font-serif text-2xl leading-snug sm:text-3xl"
          style={{ color: "#2A261F" }}
        >
          A small shelf for process notes, design references, and build
          writeups.
        </p>

        <div
          className="mt-16 h-px w-full"
          style={{ backgroundColor: "#C9C2B4" }}
        />

        <div className="mt-8 grid gap-10 sm:grid-cols-3">
          {["Visual systems", "Launch notes", "Build logs"].map((label) => (
            <div key={label}>
              <div
                className="font-mono text-xs tracking-[0.14em] uppercase"
                style={{ color: "#5C554A" }}
              >
                Coming soon
              </div>
              <div className="mt-3 font-serif text-3xl leading-tight">
                {label}
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}
