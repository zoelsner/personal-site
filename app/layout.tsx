import {
  Geist_Mono,
  DM_Sans,
  DM_Serif_Display,
  Instrument_Serif,
} from "next/font/google"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"

import "./globals.css"
import { cn } from "@/lib/utils"

const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-sans" })

const instrumentSerif = Instrument_Serif({
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-serif",
})

const dmSerifDisplay = DM_Serif_Display({
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-display",
})

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://zachoelsner.com"),
  title: {
    default: "Zach Oelsner",
    template: "%s · Zach Oelsner",
  },
  description:
    "I build software for the daily frictions I can't stop thinking about. Mostly food. Sometimes tools. Based out of the Lower East Side.",
  openGraph: {
    title: "Zach Oelsner",
    description:
      "I build software for the daily frictions I can't stop thinking about. Mostly food. Sometimes tools. Based out of the Lower East Side.",
    url: "https://zachoelsner.com",
    siteName: "Zach Oelsner",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zach Oelsner",
    description:
      "I build software for the daily frictions I can't stop thinking about. Mostly food. Sometimes tools. Based out of the Lower East Side.",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={cn(
        "antialiased",
        dmSans.variable,
        instrumentSerif.variable,
        dmSerifDisplay.variable,
        geistMono.variable,
      )}
    >
      <body>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
