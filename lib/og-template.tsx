import { ImageResponse } from "next/og"

export const ogSize = { width: 1200, height: 630 }

// shared chill product-OG palette
const INK = "#1a2a18"
const PAPER = "#f5efe2"
const CREAM = "#fdebcc"
const MUTED = "#3a4a30"
const SLATE = "#3b5a6a"
const ORANGE = "#d44e2a"
const GOLD = "#c8963e"
const OLIVE = "#5a7a3a"
const PLUM = "#7a5a7f"
const YELLOW = "#e6b341"

export type HalfTone =
  | "cream"
  | "orange"
  | "gold"
  | "yellow"
  | "slate"
  | "plum"
  | "olive"
  | "ink"
  | "accent"

const TONE_BG: Record<HalfTone, string | "accent"> = {
  cream: CREAM,
  orange: ORANGE,
  gold: GOLD,
  yellow: YELLOW,
  slate: SLATE,
  plum: PLUM,
  olive: OLIVE,
  ink: INK,
  accent: "accent",
}

export type OGHalf = {
  tone: HalfTone
  width: number
  height: number
  top: number
  left?: number
  right?: number
  rotate?: number
  flip?: boolean
}

interface OGProps {
  /** small uppercase line above the title (e.g. "shipped · 2025 · in production") */
  kicker?: string
  /** big display title (e.g. "Farm to People") */
  title: string
  /** Outfit-semibold tagline below the title */
  tagline?: string
  /** page accent color (top strip, dot in title, default for "accent" half-circles) */
  accent: string
  /** color text sits on when on top of `accent` (for the page-URL chip). Defaults to cream. */
  accentOn?: string
  /** sub-URL for the chip in the top-right (e.g. "zachoelsner.com/work/ftp") */
  url?: string
  halves?: OGHalf[]
}

const PAYTONE_URL =
  "https://cdn.jsdelivr.net/npm/@fontsource/paytone-one@5.2.8/files/paytone-one-latin-400-normal.woff"
const OUTFIT_700_URL =
  "https://cdn.jsdelivr.net/npm/@fontsource/outfit@5.2.8/files/outfit-latin-700-normal.woff"
const OUTFIT_600_URL =
  "https://cdn.jsdelivr.net/npm/@fontsource/outfit@5.2.8/files/outfit-latin-600-normal.woff"

async function loadFont(url: string): Promise<ArrayBuffer | null> {
  try {
    const res = await fetch(url)
    return res.ok ? await res.arrayBuffer() : null
  } catch {
    return null
  }
}

export async function createOG({
  kicker,
  title,
  tagline,
  accent,
  accentOn = CREAM,
  url,
  halves = [],
}: OGProps) {
  const [paytone, outfit700, outfit600] = await Promise.all([
    loadFont(PAYTONE_URL),
    loadFont(OUTFIT_700_URL),
    loadFont(OUTFIT_600_URL),
  ])

  const fonts: {
    name: string
    data: ArrayBuffer
    style: "normal"
    weight: 400 | 600 | 700
  }[] = []
  if (paytone)
    fonts.push({
      name: "Paytone One",
      data: paytone,
      style: "normal",
      weight: 400,
    })
  if (outfit700)
    fonts.push({
      name: "Outfit",
      data: outfit700,
      style: "normal",
      weight: 700,
    })
  if (outfit600)
    fonts.push({
      name: "Outfit",
      data: outfit600,
      style: "normal",
      weight: 600,
    })

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: PAPER,
          color: INK,
          display: "flex",
          flexDirection: "column",
          padding: "72px 90px",
          position: "relative",
          fontFamily: "Outfit, sans-serif",
        }}
      >
        {/* top accent strip */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 8,
            background: accent,
            display: "flex",
          }}
        />

        {/* URL chip top-right */}
        {url && (
          <div
            style={{
              position: "absolute",
              top: 36,
              right: 36,
              padding: "8px 16px",
              borderRadius: 999,
              background: accent,
              color: accentOn,
              fontSize: 16,
              fontWeight: 700,
              letterSpacing: 2,
              textTransform: "uppercase",
              fontFamily: "Outfit, sans-serif",
              display: "flex",
            }}
          >
            {url}
          </div>
        )}

        {/* Decorative half-circles */}
        {halves.map((h, i) => {
          const bgKey = TONE_BG[h.tone]
          const bg = bgKey === "accent" ? accent : bgKey
          const horiz =
            typeof h.left === "number"
              ? { left: h.left }
              : { right: h.right ?? 0 }
          const isInk = h.tone === "ink"
          const shadowColor = isInk ? CREAM : INK
          const shadowOffsetY = h.flip ? -5 : 5
          return (
            <div
              key={i}
              style={{
                position: "absolute",
                top: h.top,
                ...horiz,
                width: h.width,
                height: h.height,
                background: bg,
                border: `3px solid ${INK}`,
                borderTopLeftRadius: 9999,
                borderTopRightRadius: 9999,
                borderBottomLeftRadius: 0,
                borderBottomRightRadius: 0,
                transform: `rotate(${h.rotate ?? 0}deg)`,
                boxShadow: `5px ${shadowOffsetY}px 0 0 ${shadowColor}`,
                display: "flex",
              }}
            />
          )
        })}

        {/* Hero block, anchored to the lower-middle */}
        <div
          style={{
            marginTop: "auto",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: 18,
          }}
        >
          {kicker && (
            <div
              style={{
                fontSize: 20,
                fontWeight: 700,
                letterSpacing: 3,
                textTransform: "uppercase",
                color: MUTED,
                opacity: 0.75,
                display: "flex",
              }}
            >
              {kicker}
            </div>
          )}
          <div
            style={{
              fontFamily: "Paytone One, Impact, sans-serif",
              fontSize: 156,
              lineHeight: 0.88,
              letterSpacing: -5,
              color: INK,
              display: "flex",
              alignItems: "baseline",
            }}
          >
            <div style={{ color: INK, display: "flex" }}>{title}</div>
            <div style={{ color: accent, display: "flex" }}>.</div>
          </div>
          {tagline && (
            <div
              style={{
                fontSize: 30,
                fontWeight: 600,
                color: INK,
                opacity: 0.9,
                letterSpacing: -0.4,
                maxWidth: 920,
                display: "flex",
              }}
            >
              {tagline}
            </div>
          )}
        </div>
      </div>
    ),
    { ...ogSize, fonts }
  )
}
