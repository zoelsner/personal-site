import { createOG, ogSize } from "@/lib/og-template"

export const alt = "Farm to People by Zach Oelsner"
export const size = ogSize
export const contentType = "image/png"

export default async function Image() {
  return createOG({
    eyebrow: "Shipped · 2025",
    title: "Farm to People",
    subtitle:
      "Turns your weekly Farm to People box into personalized meals and a cooking assistant.",
    activeProject: "ftp",
  })
}
