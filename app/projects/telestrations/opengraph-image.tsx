import { createOG, ogSize } from "@/lib/og-template"

export const alt = "Telestrations by Zach Oelsner"
export const size = ogSize
export const contentType = "image/png"

export default async function Image() {
  return createOG({
    kicker: "shipped · 2026 · free · play with friends",
    title: "Telestrations",
    tagline: "the cardboard party game, now playable over a video call.",
    accent: "#E6B341",
    accentOn: "#1a2a18",
    url: "zachoelsner.com/projects/telestrations",
    halves: [
      { tone: "cream", width: 100, height: 50, top: 100, left: 110, rotate: -14 },
      { tone: "yellow", width: 80, height: 40, top: 200, left: 240, rotate: 22 },
      { tone: "slate", width: 90, height: 45, top: 90, left: 360, rotate: 180, flip: true },
      { tone: "plum", width: 70, height: 35, top: 130, right: 230, rotate: 16 },
      { tone: "ink", width: 60, height: 30, top: 230, right: 360, rotate: 40 },
    ],
  })
}
