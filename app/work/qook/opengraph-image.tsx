import { createOG, ogSize } from "@/lib/og-template"

export const alt = "Qook by Zach Oelsner"
export const size = ogSize
export const contentType = "image/png"

export default async function Image() {
  return createOG({
    eyebrow: "In Progress · 2026",
    title: "Qook",
    subtitle:
      "Meal cards matched to your energy level. One-tap Instacart checkout. Watercolor meals.",
    activeProject: "qook",
  })
}
