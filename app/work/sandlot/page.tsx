import type { Metadata } from "next"
import { ProjectPage } from "@/components/project-page"

export const metadata: Metadata = {
  title: "Sandlot",
  description:
    "A daily audit + Sunday brief for my fantasy baseball league. Watches Fantrax so I don't have to.",
  openGraph: {
    title: "Sandlot · Zach Oelsner",
    description:
      "A daily audit + Sunday brief for my fantasy baseball league. Watches Fantrax so I don't have to.",
  },
  twitter: {
    title: "Sandlot · Zach Oelsner",
    description:
      "A daily audit + Sunday brief for my fantasy baseball league. Watches Fantrax so I don't have to.",
  },
}

const recs = [
  {
    move: "Start Cedric Mullins (OF)",
    conf: "HIGH" as const,
    why: ".328/.401 over 14 G; cleared concussion protocol Tuesday; faces 3 LHP this week.",
    src: "fangraphs · mlb.com · rotowire",
  },
  {
    move: "Drop Spencer Strider (SP)",
    conf: "MEDIUM" as const,
    why: "Internal brace re-eval pushed to June. League FA pool has 2 SPs with better ROS.",
    src: "athletic · fangraphs",
  },
  {
    move: "Claim Bo Naylor (C)",
    conf: "LOW" as const,
    why: "Power signal last 10 G but BABIP regression likely. Hold for one more week.",
    src: "baseballsavant · cleveland.com",
  },
]

const confBg: Record<"HIGH" | "MEDIUM" | "LOW", string> = {
  HIGH: "#2D5A3D",
  MEDIUM: "#C8963E",
  LOW: "#7a5b3a",
}

function SandlotPreview() {
  return (
    <div
      style={{
        fontFamily: "var(--font-outfit), sans-serif",
        background: "#1a1610",
        color: "#fef6e4",
        borderRadius: 10,
        overflow: "hidden",
      }}
    >
      <div
        style={{
          padding: "11px 14px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <span style={{ fontWeight: 700, fontSize: 14 }}>
          Sunday Intel · May 11
        </span>
        <span style={{ fontSize: 10, opacity: 0.6 }}>
          last 30 days · 12 sources
        </span>
      </div>

      <div style={{ padding: 14 }}>
        <div
          style={{
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: 1,
            textTransform: "uppercase",
            color: "#d44e2a",
            marginBottom: 8,
          }}
        >
          TL;DR · 3 moves
        </div>

        {recs.map((rec) => (
          <div
            key={rec.move}
            style={{
              padding: 10,
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: 8,
              marginBottom: 8,
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: 4,
              }}
            >
              <span style={{ fontWeight: 600, fontSize: 13 }}>{rec.move}</span>
              <span
                style={{
                  fontSize: 9,
                  padding: "2px 6px",
                  borderRadius: 4,
                  fontWeight: 600,
                  color: "#fff",
                  background: confBg[rec.conf],
                }}
              >
                {rec.conf}
              </span>
            </div>
            <div style={{ fontSize: 10, opacity: 0.8, lineHeight: 1.45 }}>
              {rec.why}
            </div>
            <div style={{ fontSize: 9, opacity: 0.5, marginTop: 4 }}>
              {rec.src}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function SandlotPage() {
  return (
    <ProjectPage
      name="Sandlot"
      accent="#d44e2a"
      accentOn="#fdebcc"
      kicker={["shipped", "2026", "runs daily at 7am"]}
      tagline="helps me not suck at fantasy baseball."
      blurb={
        <>
          I want to play fantasy without staring at Fantrax for an hour a
          day. Sandlot watches my league — a <b>daily audit</b> in my inbox
          at 7am, plus a <b>deeper Sunday brief</b> with grounded web
          research (sources cited, last 30 days only). It tells me what to
          do; I execute manually.
        </>
      }
      think={[
        {
          title: "Catalyst",
          body: "Fantasy baseball rewards consistency, not effort. I was checking Fantrax twice a day and still missing rotations and waiver moves. The decisions are recurring and rule-shaped — perfect to hand off.",
        },
        {
          title: "Decision",
          body: "Recommend-only — never auto-execute. The Sunday brief had to be grounded: every claim references an article from the last 30 days, or it gets flagged as unverified. No training-data hallucinations.",
        },
        {
          title: "Status",
          body: "Running daily on launchd, scrapes Fantrax with Selenium, hydrates with Fangraphs + Statcast via pybaseball. Sandlot web app is on Railway with Postgres snapshots and a cached Skipper AI for follow-ups.",
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
