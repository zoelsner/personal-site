import type { Metadata } from "next"
import { ProjectPage } from "@/components/project-page"
import { SandlotPreview } from "./sandlot-preview"

export const metadata: Metadata = {
  title: "Sandlot",
  description:
    "A fantasy baseball attention queue for injuries, lineup risks, waiver swaps, matchup context, and Skipper reasoning.",
  openGraph: {
    title: "Sandlot · Zach Oelsner",
    description:
      "A fantasy baseball attention queue for injuries, lineup risks, waiver swaps, matchup context, and Skipper reasoning.",
  },
  twitter: {
    title: "Sandlot · Zach Oelsner",
    description:
      "A fantasy baseball attention queue for injuries, lineup risks, waiver swaps, matchup context, and Skipper reasoning.",
  },
}

export default function SandlotPage() {
  return (
    <ProjectPage
      name="Sandlot"
      accent="#d44e2a"
      accentOn="#fdebcc"
      kicker={["shipped", "2026", "in production"]}
      tagline="helps me not suck at fantasy baseball."
      blurb={
        <>
          I want to play fantasy baseball without turning Fantrax into a second
          job. Sandlot turns my league data into a small attention queue:
          injuries, lineup risks, waiver swaps, matchup context, and player
          details worth reviewing. The app does the deterministic read of the
          league data, Skipper explains the reasoning, and I still execute
          every move manually in Fantrax.
        </>
      }
      think={[
        {
          title: "Catalyst",
          body: "Fantasy baseball rewards consistency, not effort. I was checking Fantrax twice a day and still missing rotations and waiver moves. The decisions are recurring and rule-shaped. Perfect to hand off.",
        },
        {
          title: "Decision",
          body: "Recommend and explain, never execute. Sandlot should surface the smallest queue worth reviewing, then make each recommendation inspectable enough that I can decide before touching Fantrax.",
        },
        {
          title: "Status",
          body: "The Railway app reads the latest league state into queue views, then Skipper adds reasoning around player details, waiver swaps, and matchup context. Fantrax remains the system of record.",
        },
      ]}
      preview={<SandlotPreview />}
      stack={[
        "Python",
        "FastAPI",
        "Selenium",
        "Postgres",
        "Claude CLI",
        "pybaseball",
        "OpenRouter",
        "Railway",
        "launchd",
      ]}
      ctas={[
        {
          label: "view on github →",
          href: "https://github.com/zoelsner/baseball",
          external: true,
          accent: true,
        },
      ]}
      halfCircles={[
        {
          tone: "orange",
          style: {
            width: 54,
            height: 27,
            left: 130,
            top: 170,
            transform: "rotate(-10deg)",
          },
        },
        {
          tone: "slate",
          style: {
            width: 46,
            height: 23,
            right: 200,
            top: 200,
            transform: "rotate(15deg)",
          },
        },
        {
          tone: "cream",
          style: {
            width: 60,
            height: 30,
            right: 140,
            top: 340,
            transform: "rotate(-12deg)",
          },
        },
      ]}
    />
  )
}
