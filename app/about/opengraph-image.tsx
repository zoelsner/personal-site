import { createOG, ogSize } from "@/lib/og-template"

export const alt = "About Zach Oelsner"
export const size = ogSize
export const contentType = "image/png"

export default async function Image() {
  return createOG({
    kicker: "based in LES · food-pilled since 2020",
    title: "about",
    tagline:
      "I build small, useful things, usually around food, sports, or whatever I was annoyed by that week.",
    accent: "#2D5A3D",
    accentOn: "#fdebcc",
    url: "zachoelsner.com/about",
    halves: [
      { tone: "olive", width: 100, height: 50, top: 100, left: 110, rotate: -12 },
      { tone: "cream", width: 80, height: 40, top: 200, left: 250, rotate: 22 },
      { tone: "gold", width: 70, height: 35, top: 90, left: 360, rotate: -10, flip: true },
      { tone: "accent", width: 90, height: 45, top: 130, right: 230, rotate: 16 },
      { tone: "ink", width: 60, height: 30, top: 230, right: 370, rotate: 40 },
    ],
  })
}
