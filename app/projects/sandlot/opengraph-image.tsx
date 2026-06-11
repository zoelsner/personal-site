import { createOG, ogSize } from "@/lib/og-template"

export const alt = "Sandlot by Zach Oelsner"
export const size = ogSize
export const contentType = "image/png"

export default async function Image() {
  return createOG({
    kicker: "shipped · 2026 · runs daily at 7am",
    title: "Sandlot",
    tagline: "helps me not suck at fantasy baseball.",
    accent: "#d44e2a",
    accentOn: "#fdebcc",
    url: "zachoelsner.com/projects/sandlot",
    halves: [
      { tone: "orange", width: 100, height: 50, top: 100, left: 110, rotate: -10 },
      { tone: "slate", width: 80, height: 40, top: 210, left: 240, rotate: 22 },
      { tone: "cream", width: 90, height: 45, top: 100, left: 350, rotate: -14 },
      { tone: "gold", width: 70, height: 35, top: 130, right: 240, rotate: 18, flip: true },
      { tone: "ink", width: 60, height: 30, top: 230, right: 380, rotate: 38 },
    ],
  })
}
