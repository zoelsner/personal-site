import { ImageResponse } from "next/og"

export const alt = "Zach Oelsner"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default async function Image() {
  // Load Instrument Serif from @fontsource CDN (TTF — Satori-compatible)
  let fontData: ArrayBuffer | null = null
  try {
    fontData = await fetch(
      "https://cdn.jsdelivr.net/npm/@fontsource/instrument-serif@5.0.18/files/instrument-serif-latin-400-normal.ttf",
    ).then((res) => (res.ok ? res.arrayBuffer() : null))
  } catch {
    fontData = null
  }

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#EFE8DA",
          padding: "72px 96px",
          color: "#1A1712",
          fontFamily: "Instrument Serif, serif",
        }}
      >
        {/* Top: eyebrow */}
        <div
          style={{
            fontSize: 22,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: "#8A8275",
            fontFamily: "monospace",
          }}
        >
          zachoelsner.com
        </div>

        {/* Middle: name + bio */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 164,
              lineHeight: 1.02,
              letterSpacing: -3,
            }}
          >
            Zach Oelsner
          </div>
          <div
            style={{
              fontSize: 34,
              lineHeight: 1.3,
              marginTop: 28,
              color: "#3C362E",
              maxWidth: 900,
              display: "flex",
            }}
          >
            I build software for the daily frictions I can&apos;t stop thinking
            about. Mostly food.
          </div>
        </div>

        {/* Bottom: shelf accent (four half-circles) */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            gap: 28,
          }}
        >
          <div
            style={{
              width: 110,
              height: 55,
              background: "#3B5A6A",
              borderRadius: "110px 110px 0 0",
            }}
          />
          <div
            style={{
              width: 64,
              height: 32,
              background: "#7A5A7F",
              borderRadius: "64px 64px 0 0",
            }}
          />
          <div
            style={{
              width: 130,
              height: 65,
              background: "#B85A3B",
              borderRadius: "130px 130px 0 0",
            }}
          />
          <div
            style={{
              width: 54,
              height: 27,
              background: "#5C7A4A",
              borderRadius: "54px 54px 0 0",
            }}
          />
        </div>
      </div>
    ),
    {
      ...size,
      fonts: fontData
        ? [
            {
              name: "Instrument Serif",
              data: fontData,
              style: "normal",
              weight: 400,
            },
          ]
        : undefined,
    },
  )
}
