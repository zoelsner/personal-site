import { Nav } from "@/components/nav"

const arches = [
  // Top-left cluster
  { color: "#4A6B7A", w: 120, x: 4, y: 5, rotate: 0 },
  { color: "#C07A5A", w: 80, x: 22, y: 3, rotate: 0 },
  // Center-top band
  { color: "#4A6B7A", w: 140, x: 38, y: 6, rotate: 180 },
  { color: "#C07A5A", w: 110, x: 54, y: 3, rotate: 0 },
  { color: "#7A5A6A", w: 64, x: 68, y: 1, rotate: 0 },
  // Middle scatter
  { color: "#7A8A4A", w: 70, x: 30, y: 32, rotate: 0 },
  { color: "#A0A090", w: 44, x: 48, y: 34, rotate: 0 },
  { color: "#C07A5A", w: 100, x: 56, y: 30, rotate: 0 },
  // Bottom-right cluster
  { color: "#7A8A4A", w: 60, x: 64, y: 60, rotate: 0 },
  { color: "#4A6B7A", w: 90, x: 74, y: 58, rotate: 0 },
  { color: "#C07A5A", w: 110, x: 84, y: 54, rotate: 0 },
  { color: "#7A5A6A", w: 56, x: 92, y: 64, rotate: 0 },
  // Edge accents
  { color: "#C07A5A", w: 80, x: 90, y: 42, rotate: 180 },
  { color: "#7A5A6A", w: 48, x: 96, y: 50, rotate: 0 },
]

export default function Page() {
  return (
    <div className="relative min-h-svh overflow-hidden bg-background">
      {/* Nav */}
      <div className="absolute top-10 right-12 z-10">
        <Nav />
      </div>

      {/* Arches */}
      {arches.map((arch, i) => (
        <div
          key={i}
          className="absolute"
          style={{
            left: `${arch.x}%`,
            top: `${arch.y}%`,
            width: arch.w,
            height: arch.w / 2,
            backgroundColor: arch.color,
            borderRadius:
              arch.rotate === 180
                ? `0 0 ${arch.w}px ${arch.w}px`
                : `${arch.w}px ${arch.w}px 0 0`,
          }}
        />
      ))}

      {/* Name + tagline anchored bottom-left */}
      <div className="absolute bottom-16 left-12">
        <h1 className="font-serif text-6xl font-normal tracking-tight">
          Zach Oelsner
        </h1>
        <p className="mt-3 max-w-sm text-base leading-relaxed text-muted-foreground">
          Developer &amp; Builder with a thing for food,
          <br />
          tools, and shipping software from New York
        </p>
        <div className="mt-5 flex gap-5 text-sm text-muted-foreground">
          <a
            href="https://github.com/zachoelsner"
            target="_blank"
            rel="noopener noreferrer"
            className="underline-offset-4 hover:text-foreground hover:underline"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/zachoelsner"
            target="_blank"
            rel="noopener noreferrer"
            className="underline-offset-4 hover:text-foreground hover:underline"
          >
            LinkedIn
          </a>
          <a
            href="https://tiktok.com/@builtwithzach"
            target="_blank"
            rel="noopener noreferrer"
            className="underline-offset-4 hover:text-foreground hover:underline"
          >
            TikTok
          </a>
        </div>
      </div>
    </div>
  )
}
