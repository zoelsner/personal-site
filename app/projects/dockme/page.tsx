import type { Metadata } from "next"
import { ProjectPage } from "@/components/project-page"
import { DockMePreview } from "./dockme-preview"
import styles from "./dockme.module.css"

const LIVE_ANALYSIS_URL = "https://nyc-subway-map.vercel.app/citibike-analysis"

export const metadata: Metadata = {
  title: "DockMe",
  description:
    "Exploring the last block of a Citi Bike trip: compare historical dock availability, find a nearby backup, and follow DockMe’s development.",
  openGraph: {
    title: "DockMe · Zach Oelsner",
    description:
      "Exploring the last block of a Citi Bike trip: compare historical dock availability, find a nearby backup, and follow DockMe’s development.",
  },
  twitter: {
    title: "DockMe · Zach Oelsner",
    description:
      "Exploring the last block of a Citi Bike trip: compare historical dock availability, find a nearby backup, and follow DockMe’s development.",
  },
}

export default function DockMePage() {
  return (
    <ProjectPage
      name="DockMe"
      accent="#146C7C"
      accentOn="#fdebcc"
      kicker={["independent project", "web experiment", "iOS in development"]}
      tagline="the last block matters."
      blurb={
        <>
          A Citi Bike trip isn&apos;t over until you can dock. I started with a
          simple question:{" "}
          <b>
            when the nearest station fills up, where else could you return the
            bike?
          </b>{" "}
          The web experiment compares captured dock history. It&apos;s the
          starting point for DockMe, an iOS app in development.
        </>
      }
      heroActions={
        <div className={styles.heroActions}>
          <a
            className={styles.primaryLink}
            href={LIVE_ANALYSIS_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            explore dock history <span aria-hidden="true">↗</span>
          </a>
          <span className={styles.linkNote}>
            Historical patterns · opens the web experiment
          </span>
        </div>
      }
      thinkHeading="from a frustrating ride to an experiment"
      peekHeading="what the history can show"
      think={[
        {
          title: "The problem is at the other end",
          body: "Finding a bike is only half the trip. Arriving at a full station means another detour when you thought you were done.",
        },
        {
          title: "Compare the nearest dock with a backup",
          body: "Enter a destination in the web experiment, compare three nearby stations, then select a station to inspect its day-by-day patterns. A short extra walk can be worth investigating when the closest station often runs out of room.",
        },
        {
          title: "History is evidence, not a promise",
          body: "These are captured observations, not live availability or an arrival-time forecast. Weather, events, and rebalancing can change the pattern. The native app is a separate work in progress; the web link opens the research that came first.",
        },
      ]}
      preview={<DockMePreview />}
      stack={[
        "Next.js · web",
        "GBFS station history",
        "TypeScript",
        "Expo / React Native · iOS",
      ]}
      ctas={[
        {
          label: "open the web experiment ↗",
          href: LIVE_ANALYSIS_URL,
          external: true,
          accent: true,
        },
      ]}
      halfCircles={[
        {
          tone: "slate",
          style: {
            width: 56,
            height: 28,
            left: 130,
            top: 170,
            transform: "rotate(-14deg)",
          },
        },
        {
          tone: "navy",
          style: {
            width: 46,
            height: 23,
            right: 190,
            top: 205,
            transform: "rotate(18deg)",
          },
        },
        {
          tone: "cream",
          flip: true,
          style: {
            width: 60,
            height: 30,
            right: 150,
            top: 340,
            transform: "rotate(178deg)",
          },
        },
      ]}
    />
  )
}
