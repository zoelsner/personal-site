import { createOG, ogSize } from "@/lib/og-template"

export const alt = "DockMe by Zach Oelsner"
export const size = ogSize
export const contentType = "image/png"

export default async function Image() {
  return createOG({
    kicker: "in progress · 2026 · live analysis",
    title: "DockMe",
    tagline: "know if there will be a dock when you get there.",
    accent: "#146C7C",
    accentOn: "#fdebcc",
    url: "zachoelsner.com/work/dockme",
    halves: [
      { tone: "slate", width: 100, height: 50, top: 90, left: 100, rotate: -14 },
      { tone: "olive", width: 80, height: 40, top: 190, left: 240, rotate: 22 },
      { tone: "gold", width: 90, height: 45, top: 105, left: 390, rotate: -10, flip: true },
      { tone: "accent", width: 70, height: 35, top: 130, right: 240, rotate: 16 },
      { tone: "ink", width: 60, height: 30, top: 230, right: 370, rotate: 38 },
    ],
  })
}
