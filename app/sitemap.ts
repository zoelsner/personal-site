import type { MetadataRoute } from "next"

const BASE = "https://zachoelsner.com"

const paths = [
  "/",
  "/projects",
  "/about",
  "/projects/ftp",
  "/projects/sandlot",
  "/projects/dockme",
  "/projects/qook",
  "/projects/siggy",
  "/projects/telestrations",
]

export default function sitemap(): MetadataRoute.Sitemap {
  return paths.map((path) => ({
    url: `${BASE}${path === "/" ? "" : path}`,
  }))
}
