import { createOG, ogSize } from "@/lib/og-template"

export const alt = "Siggy by Zach Oelsner"
export const size = ogSize
export const contentType = "image/png"

export default async function Image() {
  return createOG({
    kicker: "shipped · 2026 · $19 lifetime",
    title: "Siggy",
    tagline: "a polished signature, pasted into Gmail.",
    accent: "#6C5CE7",
    accentOn: "#ffffff",
    url: "zachoelsner.com/work/siggy",
    halves: [
      { tone: "plum", width: 100, height: 50, top: 100, left: 110, rotate: -12 },
      { tone: "cream", width: 80, height: 40, top: 200, left: 240, rotate: 22 },
      { tone: "accent", width: 70, height: 35, top: 90, left: 350, rotate: 16 },
      { tone: "slate", width: 90, height: 45, top: 130, right: 220, rotate: 180, flip: true },
      { tone: "ink", width: 60, height: 30, top: 230, right: 360, rotate: 40 },
    ],
  })
}
