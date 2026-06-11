import { createOG, ogSize } from "@/lib/og-template"

export const alt = "Projects by Zach Oelsner"
export const size = ogSize
export const contentType = "image/png"

export default async function Image() {
  return createOG({
    kicker: "selected projects · 05 projects · updated june 2026",
    title: "projects",
    tagline: "things I've built end-to-end.",
    accent: "#1B2A4D",
    accentOn: "#fdebcc",
    url: "zachoelsner.com/projects",
    halves: [
      { tone: "cream", width: 100, height: 50, top: 100, left: 110, rotate: -14 },
      { tone: "slate", width: 80, height: 40, top: 200, left: 240, rotate: 22 },
      { tone: "olive", width: 70, height: 35, top: 90, left: 350, rotate: -10 },
      { tone: "orange", width: 90, height: 45, top: 130, right: 220, rotate: 16 },
      { tone: "ink", width: 60, height: 30, top: 230, right: 360, rotate: 40 },
    ],
  })
}
