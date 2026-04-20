import { createOG, ogSize } from "@/lib/og-template"

export const alt = "About Zach Oelsner"
export const size = ogSize
export const contentType = "image/png"

export default async function Image() {
  return createOG({
    eyebrow: "About",
    title: "Zach Oelsner",
    subtitle:
      "Software about food and daily frictions. Based in the Lower East Side.",
    activeProject: "this-site",
  })
}
