import { createOG, ogSize } from "@/lib/og-template"

export const alt = "Farm to People by Zach Oelsner"
export const size = ogSize
export const contentType = "image/png"

export default async function Image() {
  return createOG({
    kicker: "shipped · 2025 · in production",
    title: "Farm to People",
    tagline: "three meals from your actual box.",
    accent: "#2D5A3D",
    accentOn: "#fdebcc",
    url: "zachoelsner.com/projects/ftp",
    halves: [
      { tone: "cream", width: 100, height: 50, top: 80, left: 110, rotate: -14 },
      { tone: "olive", width: 80, height: 40, top: 100, left: 270, rotate: 20 },
      { tone: "gold", width: 90, height: 45, top: 80, left: 430, rotate: -10 },
      { tone: "accent", width: 70, height: 35, top: 120, right: 240, rotate: 16 },
      { tone: "ink", width: 60, height: 30, top: 100, right: 380, rotate: 40 },
    ],
  })
}
