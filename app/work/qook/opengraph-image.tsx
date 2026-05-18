import { createOG, ogSize } from "@/lib/og-template"

export const alt = "Qook by Zach Oelsner"
export const size = ogSize
export const contentType = "image/png"

export default async function Image() {
  return createOG({
    kicker: "in progress · 2026 · iOS first",
    title: "Qook",
    tagline: "meal cards matched to your energy level.",
    accent: "#B85A3B",
    accentOn: "#fdebcc",
    url: "zachoelsner.com/work/qook",
    halves: [
      { tone: "orange", width: 100, height: 50, top: 100, left: 110, rotate: -10 },
      { tone: "gold", width: 80, height: 40, top: 200, left: 240, rotate: 22 },
      { tone: "cream", width: 90, height: 45, top: 90, left: 360, rotate: -14 },
      { tone: "accent", width: 70, height: 35, top: 130, right: 240, rotate: 18 },
      { tone: "ink", width: 60, height: 30, top: 220, right: 380, rotate: 38 },
    ],
  })
}
