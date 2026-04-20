import { createOG, ogSize } from "@/lib/og-template"

export const alt = "Siggy by Zach Oelsner"
export const size = ogSize
export const contentType = "image/png"

export default async function Image() {
  return createOG({
    eyebrow: "Shipped · 2026",
    title: "Siggy",
    subtitle:
      "A polished email signature builder. Pick a template, paste into Gmail. $49 lifetime.",
    activeProject: "siggy",
  })
}
