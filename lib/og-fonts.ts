import { readFile } from "node:fs/promises"
import path from "node:path"

// OG fonts are vendored in assets/og-fonts (from @fontsource packages) so
// image generation never depends on a CDN being reachable at build time.
const FONT_DIR = path.join(process.cwd(), "assets", "og-fonts")

export async function loadOGFont(file: string): Promise<ArrayBuffer | null> {
  try {
    const buf = await readFile(path.join(FONT_DIR, file))
    return buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength)
  } catch {
    return null
  }
}
