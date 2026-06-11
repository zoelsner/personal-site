import type { Metadata } from "next"
import { ProjectPage } from "@/components/project-page"

const LIVE_ANALYSIS_URL =
  "https://nyc-subway-map.vercel.app/citibike-analysis"

export const metadata: Metadata = {
  title: "DockMe",
  description:
    "A Citi Bike dock-risk project for checking return-dock confidence before you ride.",
  openGraph: {
    title: "DockMe · Zach Oelsner",
    description:
      "A Citi Bike dock-risk project for checking return-dock confidence before you ride.",
  },
  twitter: {
    title: "DockMe · Zach Oelsner",
    description:
      "A Citi Bike dock-risk project for checking return-dock confidence before you ride.",
  },
}

function DockMePreview() {
  const ink = "#111922"
  const accent = "#146C7C"
  const amber = "#d99a3a"
  const rail = "#dfe4df"

  return (
    <div
      style={{
        fontFamily: "var(--font-outfit), sans-serif",
        background: "#fdfbf5",
        borderRadius: 10,
        overflow: "hidden",
        border: "1px solid rgba(0,0,0,0.10)",
        color: ink,
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "10px 14px",
          borderBottom: "1px solid rgba(0,0,0,0.08)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <span
            style={{
              display: "grid",
              width: 24,
              height: 24,
              placeItems: "center",
              borderRadius: 7,
              background: accent,
              color: "#fdebcc",
              fontSize: 13,
              fontWeight: 900,
            }}
          >
            D
          </span>
          <span style={{ fontSize: 13, fontWeight: 800 }}>DockMe</span>
        </div>
        <span
          style={{
            borderRadius: 999,
            background: "#edf4f3",
            color: accent,
            padding: "4px 8px",
            fontSize: 10,
            fontWeight: 800,
            letterSpacing: 0.7,
            textTransform: "uppercase",
          }}
        >
          1,277 samples
        </span>
      </div>

      <div style={{ padding: 14 }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            gap: 10,
            marginBottom: 12,
          }}
        >
          <div>
            <div
              style={{
                fontSize: 10,
                fontWeight: 900,
                letterSpacing: 1.1,
                textTransform: "uppercase",
                color: "rgba(17,25,34,0.55)",
              }}
            >
              address check
            </div>
            <div
              style={{
                marginTop: 3,
                fontSize: 18,
                fontWeight: 900,
                lineHeight: 1.05,
              }}
            >
              Check the backup
            </div>
            <div style={{ marginTop: 4, fontSize: 11, opacity: 0.58 }}>
              Allen St &amp; Stanton St
            </div>
          </div>
          <div
            style={{
              minWidth: 86,
              borderRadius: 10,
              background: ink,
              color: "#fff",
              padding: "8px 10px",
              textAlign: "right",
            }}
          >
            <div style={{ fontSize: 21, fontWeight: 900, lineHeight: 1 }}>
              38.8%
            </div>
            <div
              style={{
                marginTop: 2,
                fontSize: 9,
                fontWeight: 800,
                letterSpacing: 0.9,
                textTransform: "uppercase",
              }}
            >
              2-dock risk
            </div>
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 8,
            marginBottom: 12,
          }}
        >
          {[
            {
              label: "nearest dock",
              name: "Allen St & Stanton",
              stat: "8.3 avg room",
              color: amber,
            },
            {
              label: "best backup",
              name: "E 1 St & 1 Ave",
              stat: "5.6% risk",
              color: accent,
            },
          ].map((dock) => (
            <div
              key={dock.label}
              style={{
                border: "1px solid rgba(0,0,0,0.10)",
                borderRadius: 9,
                padding: 9,
                background: "#fff",
                boxShadow: `inset 0 3px 0 0 ${dock.color}`,
              }}
            >
              <div
                style={{
                  color: "rgba(17,25,34,0.50)",
                  fontSize: 9,
                  fontWeight: 900,
                  letterSpacing: 0.8,
                  textTransform: "uppercase",
                }}
              >
                {dock.label}
              </div>
              <div
                style={{
                  marginTop: 4,
                  fontSize: 12,
                  fontWeight: 850,
                  lineHeight: 1.1,
                }}
              >
                {dock.name}
              </div>
              <div
                style={{
                  marginTop: 4,
                  color: dock.color,
                  fontSize: 10,
                  fontWeight: 900,
                }}
              >
                {dock.stat}
              </div>
            </div>
          ))}
        </div>

        <div
          style={{
            border: "1px solid rgba(0,0,0,0.10)",
            borderRadius: 10,
            background: "#fff",
            padding: 10,
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 8,
            }}
          >
            <span style={{ fontSize: 11, fontWeight: 900 }}>
              Weekday pattern
            </span>
            <span style={{ fontSize: 10, opacity: 0.55 }}>room by hour</span>
          </div>
          <div style={{ display: "grid", gap: 5 }}>
            {[
              { day: "Sun", risk: "45.1%", cells: [2, 4, 1, 1, 3, 6, 4] },
              { day: "Tue", risk: "16.5%", cells: [4, 5, 5, 6, 8, 7, 5] },
              { day: "Sat", risk: "55.1%", cells: [1, 2, 2, 1, 4, 3, 2] },
            ].map((row) => (
              <div
                key={row.day}
                style={{
                  display: "grid",
                  gridTemplateColumns: "28px 1fr 44px",
                  gap: 7,
                  alignItems: "center",
                }}
              >
                <span style={{ fontSize: 10, fontWeight: 900 }}>
                  {row.day}
                </span>
                <span
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(7, 1fr)",
                    gap: 3,
                  }}
                >
                  {row.cells.map((cell, i) => (
                    <span
                      key={`${row.day}-${i}`}
                      style={{
                        height: 18,
                        borderRadius: 4,
                        background:
                          cell <= 2 ? "#e8b75b" : cell <= 4 ? rail : accent,
                        opacity: cell >= 5 ? 0.82 : 1,
                      }}
                    />
                  ))}
                </span>
                <span
                  style={{
                    color: row.day === "Tue" ? accent : "#a86a1b",
                    fontSize: 10,
                    fontWeight: 900,
                    textAlign: "right",
                  }}
                >
                  {row.risk}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function DockMePage() {
  return (
    <ProjectPage
      name="DockMe"
      accent="#146C7C"
      accentOn="#fdebcc"
      kicker={["in progress", "2026", "live analysis"]}
      tagline="know if there will be a dock when you get there."
      blurb={
        <>
          Citi Bike routing only matters if you can return the bike at the end.
          DockMe is the app I&apos;m building that checks the destination dock,
          sees the risk, and keeps a backup nearby. The current web analysis
          uses captured station snapshots to turn return-room history into
          something I can actually make a ride decision with.
        </>
      }
      think={[
        {
          title: "Catalyst",
          body: "The annoying Citi Bike failure mode is not always finding a bike. It is arriving at the destination and circling because every dock is full.",
        },
        {
          title: "Decision",
          body: "Start with dropoff confidence, not a full transit app. The useful surface is the nearest dock, the backup dock, and how often that spot gets thin by day and hour.",
        },
        {
          title: "Status",
          body: "The web analysis is live with captured station snapshots. Next is the app: a quick destination-dock check before you ride.",
        },
      ]}
      preview={<DockMePreview />}
      stack={[
        "Next.js",
        "React",
        "GBFS",
        "Citi Bike data",
        "Vercel",
        "TypeScript",
        "Expo",
      ]}
      ctas={[
        {
          label: "view live analysis →",
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
