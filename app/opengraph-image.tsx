import { ImageResponse } from "next/og"

export const alt = "Zach Oelsner"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

async function loadFont(url: string): Promise<ArrayBuffer | null> {
  try {
    const res = await fetch(url)
    return res.ok ? await res.arrayBuffer() : null
  } catch {
    return null
  }
}

const LILITA =
  "https://cdn.jsdelivr.net/npm/@fontsource/lilita-one@5.2.8/files/lilita-one-latin-400-normal.woff"
const OUTFIT_SEMI =
  "https://cdn.jsdelivr.net/npm/@fontsource/outfit@5.2.8/files/outfit-latin-700-normal.woff"

// Same palette as the navy home page
const NAVY = "#1a2540"
const CREAM = "#fdebcc"
const TOMATO = "#d44e2a"
const GOLD = "#c8963e"
const MUTED = "#a8b0c4"

type Half = {
  tone: string
  width: number
  height: number
  top: number
  left?: number
  right?: number
  rotate: number
}

const halves: Half[] = [
  { tone: CREAM, width: 110, height: 55, top: 110, left: 120, rotate: -14 },
  { tone: TOMATO, width: 150, height: 75, top: 140, left: 320, rotate: 22 },
  { tone: CREAM, width: 130, height: 65, top: 100, left: 580, rotate: 180 },
  { tone: TOMATO, width: 70, height: 35, top: 80, left: 800, rotate: 72 },
  { tone: GOLD, width: 60, height: 30, top: 230, left: 870, rotate: -30 },
  { tone: TOMATO, width: 120, height: 60, top: 90, right: 110, rotate: -12 },
  { tone: CREAM, width: 90, height: 45, top: 250, right: 70, rotate: 45 },
  { tone: GOLD, width: 80, height: 40, top: 230, left: 480, rotate: -55 },
]

export default async function Image() {
  const [lilita, outfit] = await Promise.all([
    loadFont(LILITA),
    loadFont(OUTFIT_SEMI),
  ])

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: NAVY,
          color: CREAM,
          display: "flex",
          flexDirection: "column",
          padding: "56px 80px",
          position: "relative",
          fontFamily: "Outfit, sans-serif",
        }}
      >
        {/* URL eyebrow top-left */}
        <div
          style={{
            position: "absolute",
            top: 48,
            left: 80,
            fontSize: 20,
            fontWeight: 700,
            letterSpacing: 3,
            textTransform: "uppercase",
            color: MUTED,
            display: "flex",
          }}
        >
          zachoelsner.com
        </div>

        {/* Chunky half-circles, scattered top half */}
        {halves.map((h, i) => {
          const shadowColor = h.tone === CREAM ? TOMATO : CREAM
          const horiz =
            typeof h.left === "number"
              ? { left: h.left }
              : { right: h.right ?? 0 }
          return (
            <div
              key={i}
              style={{
                position: "absolute",
                top: h.top,
                ...horiz,
                width: h.width,
                height: h.height,
                background: h.tone,
                border: `3px solid ${CREAM}`,
                borderTopLeftRadius: 9999,
                borderTopRightRadius: 9999,
                borderBottomLeftRadius: 0,
                borderBottomRightRadius: 0,
                transform: `rotate(${h.rotate}deg)`,
                boxShadow: `4px 4px 0 0 ${shadowColor}`,
                display: "flex",
              }}
            />
          )
        })}

        {/* Bottom anchor: kicker + big name */}
        <div
          style={{
            marginTop: "auto",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: 14,
          }}
        >
          <div
            style={{
              fontSize: 22,
              fontWeight: 700,
              letterSpacing: 3,
              textTransform: "uppercase",
              color: TOMATO,
              display: "flex",
            }}
          >
            food-pilled · NYC
          </div>
          <div
            style={{
              fontSize: 184,
              lineHeight: 0.86,
              letterSpacing: -6,
              fontFamily: "Lilita One, Impact, sans-serif",
              display: "flex",
              alignItems: "flex-end",
            }}
          >
            <div style={{ color: CREAM, display: "flex" }}>zach oelsner</div>
            <div
              style={{
                width: 34,
                height: 34,
                marginLeft: 14,
                marginBottom: 10,
                borderRadius: 5,
                background: TOMATO,
                display: "flex",
              }}
            />
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        ...(lilita
          ? [
              {
                name: "Lilita One",
                data: lilita,
                style: "normal" as const,
                weight: 400 as const,
              },
            ]
          : []),
        ...(outfit
          ? [
              {
                name: "Outfit",
                data: outfit,
                style: "normal" as const,
                weight: 700 as const,
              },
            ]
          : []),
      ],
    }
  )
}
