import type { Metadata } from "next"
import { Nav } from "@/components/nav"

export const metadata: Metadata = {
  title: "About",
  description:
    "Software about food and daily frictions. Based in the Lower East Side.",
  openGraph: {
    title: "About · Zach Oelsner",
    description:
      "Software about food and daily frictions. Based in the Lower East Side.",
  },
  twitter: {
    title: "About · Zach Oelsner",
    description:
      "Software about food and daily frictions. Based in the Lower East Side.",
  },
}

type Section = {
  label: string
  color: string
  body: React.ReactNode
}

const sections: Section[] = [
  {
    label: "Building",
    color: "#3B5A6A",
    body: "A meal-planning app for friends, organized around energy levels.",
  },
  {
    label: "Reading",
    color: "#7A5A7F",
    body: (
      <>
        <em>Do the Opposite, Sort Of</em> by Paul Gottsagen, and{" "}
        <em>The Phoenix Project</em>.
      </>
    ),
  },
  {
    label: "Eating",
    color: "#B85A3B",
    body: "Working out of After Eden in LES. Recently made it to Claud after loving Penny (get the Dover sole and the mille-feuille).",
  },
  {
    label: "Moving",
    color: "#5C7A4A",
    body: "Try to make it to pilates twice a week.",
  },
]

export default function AboutPage() {
  return (
    <div
      className="relative flex min-h-svh flex-col"
      style={{ backgroundColor: "#EFE8DA", color: "#1A1712" }}
    >
      {/* Top nav */}
      <div className="flex items-center justify-between px-12 pt-10">
        <a
          href="/"
          className="font-mono text-base tracking-wide hover:opacity-70"
        >
          ZO
        </a>
        <Nav />
      </div>

      {/* Hero */}
      <div className="px-12 pt-20">
        <div
          className="font-mono text-sm uppercase tracking-[0.14em]"
          style={{ color: "#5C554A" }}
        >
          About
        </div>

        <div className="mt-8 max-w-[700px]">
          <p className="font-serif text-3xl leading-[1.25] sm:text-[38px] sm:leading-[1.2]">
            Most of what I build is about <em>food</em>. I think about food and
            restaurants a lot, and it keeps turning into software. The rest are
            one-off tools. Mostly a way to learn something new, explore my
            design preferences, and improve my process.
          </p>
          <p
            className="mt-8 font-serif text-2xl italic sm:text-[28px]"
            style={{ color: "#2A261F" }}
          >
            Based in the Lower East Side.
          </p>
        </div>

        {/* Currently section */}
        <div className="mt-24">
          <div
            className="font-mono text-sm uppercase tracking-[0.14em]"
            style={{ color: "#5C554A" }}
          >
            Currently
          </div>

          <div className="mt-10 grid grid-cols-1 gap-12 sm:grid-cols-2 sm:gap-10 lg:grid-cols-4 lg:gap-10">
            {sections.map((section) => (
              <div key={section.label} className="flex flex-col">
                {/* Half-circle grounded on hairline */}
                <div className="flex h-10 items-end">
                  <div
                    style={{
                      width: 72,
                      height: 36,
                      backgroundColor: section.color,
                      borderRadius: "72px 72px 0 0",
                    }}
                  />
                </div>
                <div
                  className="h-px w-full"
                  style={{ backgroundColor: "#C9C2B4" }}
                />
                <div
                  className="mt-5 font-mono text-xs uppercase tracking-[0.14em]"
                  style={{ color: "#5C554A" }}
                >
                  {section.label}
                </div>
                <p
                  className="mt-3 font-serif text-xl leading-snug sm:text-2xl"
                  style={{ color: "#2A261F" }}
                >
                  {section.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div
        className="mt-auto flex items-center justify-between px-12 pb-10 pt-20 font-mono text-sm"
        style={{ color: "#5C554A" }}
      >
        <div className="flex items-center gap-5">
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
        <a
          href="mailto:zachoelsner@gmail.com"
          className="hover:text-foreground"
        >
          zachoelsner@gmail.com
        </a>
      </div>
    </div>
  )
}
