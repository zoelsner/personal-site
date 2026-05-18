import type { Metadata } from "next"
import { ProjectPage } from "@/components/project-page"

export const metadata: Metadata = {
  title: "Telestrations",
  description:
    "The cardboard party game, now playable over a video call. Real-time, share-a-link rooms, no install.",
  openGraph: {
    title: "Telestrations · Zach Oelsner",
    description:
      "The cardboard party game, now playable over a video call. Real-time, share-a-link rooms, no install.",
  },
  twitter: {
    title: "Telestrations · Zach Oelsner",
    description:
      "The cardboard party game, now playable over a video call. Real-time, share-a-link rooms, no install.",
  },
}

function TelestrationsPreview() {
  const accent = "#E6B341"
  const ink = "#1a2a18"

  return (
    <div
      style={{
        fontFamily: "var(--font-outfit), sans-serif",
        background: "#fff",
        borderRadius: 10,
        overflow: "hidden",
        border: "1px solid rgba(0,0,0,0.10)",
      }}
    >
      {/* head */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "10px 14px",
          borderBottom: "1px solid rgba(0,0,0,0.08)",
        }}
      >
        <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
          <span
            style={{
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: 1.2,
              textTransform: "uppercase",
              color: ink,
            }}
          >
            Room
          </span>
          <span
            style={{
              fontWeight: 700,
              fontSize: 11,
              letterSpacing: 1.2,
              padding: "3px 8px",
              borderRadius: 5,
              background: "rgba(230,179,65,0.22)",
              color: "#7a5a18",
            }}
          >
            PLUM-OWL-42
          </span>
        </div>
        <span style={{ fontSize: 11, opacity: 0.55, fontWeight: 500 }}>
          Round 3 of 6
        </span>
      </div>

      <div
        style={{
          padding: 14,
          display: "flex",
          flexDirection: "column",
          gap: 10,
        }}
      >
        {/* chain dots */}
        <div style={{ display: "flex", gap: 4, alignItems: "center" }}>
          <span
            style={{
              width: 7,
              height: 7,
              borderRadius: "50%",
              background: ink,
            }}
          />
          <span
            style={{
              width: 7,
              height: 7,
              borderRadius: "50%",
              background: ink,
            }}
          />
          <span
            style={{
              width: 7,
              height: 7,
              borderRadius: "50%",
              background: accent,
              boxShadow: "0 0 0 3px rgba(230,179,65,0.22)",
            }}
          />
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              style={{
                width: 7,
                height: 7,
                borderRadius: "50%",
                background: "rgba(0,0,0,0.12)",
              }}
            />
          ))}
          <span
            style={{
              marginLeft: 8,
              fontSize: 10,
              opacity: 0.5,
              letterSpacing: 0.6,
            }}
          >
            your turn — describe what you see
          </span>
        </div>

        {/* from */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            fontSize: 11,
            opacity: 0.65,
          }}
        >
          <span>from</span>
          <span style={{ fontWeight: 700, opacity: 1, color: ink }}>Maya</span>
          <span>·</span>
          <span>drew this for the prompt</span>
        </div>

        {/* hidden prompt */}
        <div
          style={{
            background: "#faf5e7",
            border: "1px dashed rgba(0,0,0,0.18)",
            borderRadius: 8,
            padding: "10px 12px",
            fontSize: 13,
            fontWeight: 500,
            color: "#3a342a",
            lineHeight: 1.4,
          }}
        >
          <span
            style={{
              fontSize: 9,
              fontWeight: 700,
              letterSpacing: 1.3,
              textTransform: "uppercase",
              opacity: 0.55,
              display: "block",
              marginBottom: 3,
            }}
          >
            original prompt (hidden from you)
          </span>
          a turtle on a unicycle
        </div>

        {/* canvas + doodle */}
        <div
          style={{
            position: "relative",
            background: "#fbfaf6",
            border: "1px solid rgba(0,0,0,0.08)",
            borderRadius: 8,
            height: 170,
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 8,
              left: 8,
              right: 8,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              fontSize: 10,
              opacity: 0.55,
              pointerEvents: "none",
            }}
          >
            <div style={{ display: "flex", gap: 6 }}>
              <span
                style={{
                  width: 14,
                  height: 14,
                  borderRadius: 3,
                  background: ink,
                  display: "inline-block",
                }}
              />
              <span
                style={{
                  width: 14,
                  height: 14,
                  borderRadius: 3,
                  background: "rgba(0,0,0,0.08)",
                  display: "inline-block",
                }}
              />
              <span
                style={{
                  width: 14,
                  height: 14,
                  borderRadius: 3,
                  background: "rgba(0,0,0,0.08)",
                  display: "inline-block",
                }}
              />
            </div>
            <span>undo · done</span>
          </div>
          <div
            style={{
              position: "absolute",
              inset: "18px 0 0",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg
              width="220"
              height="130"
              viewBox="0 0 220 130"
              fill="none"
              stroke={ink}
              strokeWidth={2.2}
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <ellipse cx="110" cy="58" rx="44" ry="22" />
              <path d="M82 56 Q92 38 110 38 Q128 38 138 56" />
              <path d="M96 50 L106 42 M112 40 L122 50 M128 50 L122 60" />
              <path d="M152 58 Q170 56 174 48 Q178 38 168 36 Q162 36 162 42" />
              <circle cx="170" cy="42" r="1.4" fill={ink} />
              <path d="M82 62 Q76 76 80 80" />
              <path d="M138 62 Q146 74 142 80" />
              <circle cx="110" cy="98" r="20" />
              <line x1="110" y1="78" x2="110" y2="118" />
              <line x1="90" y1="98" x2="130" y2="98" />
              <line x1="110" y1="98" x2="110" y2="80" />
              <line x1="110" y1="80" x2="110" y2="74" />
              <path
                d="M40 100 Q50 96 60 100 Q70 104 80 100"
                strokeWidth={1.4}
                opacity={0.5}
              />
            </svg>
          </div>
        </div>

        {/* input row */}
        <div style={{ display: "flex", gap: 8, alignItems: "stretch" }}>
          <div
            style={{
              flex: 1,
              border: "1px solid rgba(0,0,0,0.10)",
              borderRadius: 7,
              padding: "8px 10px",
              fontSize: 11.5,
              color: "#3a342a",
              display: "flex",
              alignItems: "center",
            }}
          >
            <span>a tiny knight riding a clock</span>
            <span
              style={{
                width: 1.5,
                height: 13,
                background: ink,
                marginLeft: 1,
                animation: "telestrations-caret 1s steps(2) infinite",
              }}
            />
          </div>
          <div
            style={{
              padding: "8px 14px",
              borderRadius: 7,
              background: accent,
              color: ink,
              fontWeight: 700,
              fontSize: 11,
              letterSpacing: 1,
              textTransform: "uppercase",
              display: "flex",
              alignItems: "center",
            }}
          >
            send →
          </div>
        </div>
      </div>
    </div>
  )
}

export default function TelestrationsPage() {
  return (
    <ProjectPage
      name="Telestrations"
      accent="#E6B341"
      accentOn="#1a2a18"
      kicker={["shipped", "2026", "free", "play with friends"]}
      tagline="the cardboard party game, now playable over a video call."
      blurb={
        <>
          A web version of the chain-of-doodles party game — one person
          writes a prompt, the next draws it, the next describes the
          drawing, and so on, until the end of the chain is hilariously far
          from where it started.{" "}
          <b>Real-time over the web, no install, share-a-link rooms.</b>{" "}
          Built for friend groups on a video call and family game nights
          when not everyone is in the same room.
        </>
      }
      think={[
        {
          title: "Catalyst",
          body: "The cardboard game is genuinely fun but you need 6 people in one room. I wanted to play it remotely with the same group chat I already video-call into every Sunday — so I wired up a web version over a weekend.",
        },
        {
          title: "Decision",
          body: "Keep the loop fast: no accounts, no lobbies, just a join-link. Keep the drawing tool dumb-simple — one pen, undo, done. The fun is in the chain drift, not in the tools.",
        },
        {
          title: "Status",
          body: "Shipped and live. No monetization, no auth — just a link you send to a group chat. Running on Vercel with a Socket.io room server and Postgres for finished-chain replays.",
        },
      ]}
      preview={<TelestrationsPreview />}
      stack={[
        "Next.js",
        "React",
        "Socket.io",
        "Postgres",
        "Vercel",
        "Tailwind",
      ]}
      ctas={[
        {
          label: "play a round →",
          href: "https://telestrations-gamma.vercel.app",
          external: true,
          accent: true,
        },
      ]}
      halfCircles={[
        {
          tone: "cream",
          style: {
            width: 54,
            height: 27,
            left: 130,
            top: 170,
            transform: "rotate(-14deg)",
          },
        },
        {
          tone: "yellow",
          style: {
            width: 48,
            height: 24,
            right: 200,
            top: 200,
            transform: "rotate(18deg)",
          },
        },
        {
          tone: "slate",
          flip: true,
          style: {
            width: 60,
            height: 30,
            right: 140,
            top: 340,
            transform: "rotate(180deg)",
          },
        },
      ]}
    />
  )
}
