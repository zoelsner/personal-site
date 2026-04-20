import { createOG, ogSize } from "@/lib/og-template"

export const alt = "Work by Zach Oelsner"
export const size = ogSize
export const contentType = "image/png"

export default async function Image() {
  return createOG({
    eyebrow: "Work",
    title: "Things I've built",
    subtitle: "Mostly about food. A few one-off tools.",
  })
}
