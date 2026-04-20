import { ImageResponse } from "next/og"

export const ogSize = { width: 1200, height: 630 }

export type ProjectSlug = "ftp" | "siggy" | "qook" | "this-site"

interface OGProps {
  eyebrow: string
  title: string
  subtitle: string
  activeProject?: ProjectSlug
}

// Matches the homepage shelf colors and relative proportions
const SHELF_PROJECTS: {
  slug: ProjectSlug
  color: string
  baseWidth: number
}[] = [
  { slug: "ftp", color: "#3B5A6A", baseWidth: 140 },
  { slug: "siggy", color: "#7A5A7F", baseWidth: 80 },
  { slug: "qook", color: "#B85A3B", baseWidth: 160 },
  { slug: "this-site", color: "#5C7A4A", baseWidth: 68 },
]

async function loadDisplayFont(): Promise<ArrayBuffer | null> {
  try {
    const res = await fetch(
      "https://cdn.jsdelivr.net/npm/@fontsource/dm-serif-display@5.2.8/files/dm-serif-display-latin-400-normal.woff",
    )
    return res.ok ? await res.arrayBuffer() : null
  } catch {
    return null
  }
}

export async function createOG({
  eyebrow,
  title,
  subtitle,
  activeProject,
}: OGProps) {
  const fontData = await loadDisplayFont()

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          background: "#EFE8DA",
          padding: "72px 96px",
          color: "#1A1712",
          fontFamily: "DM Serif Display, serif",
        }}
      >
        {/* Top: eyebrow */}
        <div
          style={{
            fontSize: 22,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: "#5C554A",
            fontFamily: "monospace",
            display: "flex",
          }}
        >
          {eyebrow}
        </div>

        {/* Middle: title + subtitle (grows to fill) */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flex: 1,
            justifyContent: "center",
            maxWidth: 940,
          }}
        >
          <div
            style={{
              fontSize: 128,
              lineHeight: 1.02,
              letterSpacing: -3,
              display: "flex",
            }}
          >
            {title}
          </div>
          <div
            style={{
              fontSize: 30,
              lineHeight: 1.3,
              marginTop: 24,
              color: "#3C362E",
              display: "flex",
              fontFamily: "serif",
            }}
          >
            {subtitle}
          </div>
        </div>

        {/* Bottom: shelf of half-circles */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: 24,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "space-between",
              height: 140,
              paddingLeft: 20,
              paddingRight: 20,
            }}
          >
            {SHELF_PROJECTS.map((p) => {
              const isActive = p.slug === activeProject
              const width = isActive ? Math.round(p.baseWidth * 1.45) : p.baseWidth
              const height = width / 2
              return (
                <div
                  key={p.slug}
                  style={{
                    width,
                    height,
                    background: p.color,
                    borderRadius: `${width}px ${width}px 0 0`,
                    transform: isActive ? "translateY(-14px)" : "translateY(0)",
                    boxShadow: isActive
                      ? `0 16px 30px ${p.color}55`
                      : "none",
                    display: "flex",
                  }}
                />
              )
            })}
          </div>
          <div
            style={{
              height: 1,
              background: "#C9C2B4",
            }}
          />
        </div>
      </div>
    ),
    {
      ...ogSize,
      fonts: fontData
        ? [
            {
              name: "DM Serif Display",
              data: fontData,
              style: "normal",
              weight: 400,
            },
          ]
        : undefined,
    },
  )
}
