import { DM_Sans, DM_Serif_Display, Outfit, Paytone_One } from "next/font/google"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"

import "./globals.css"

const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-sans" })

const dmSerifDisplay = DM_Serif_Display({
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-display",
})

// Variable font: one file covers every weight used on the site.
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" })

const paytoneOne = Paytone_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-paytone",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://zachoelsner.com"),
  title: {
    default: "Zach Oelsner · Independent builder, strategy & analytics",
    template: "%s · Zach Oelsner",
  },
  description:
    "Strategy, operations & analytics at Protiviti. Independent tools for messy everyday problems, often involving food. Based in NYC.",
  openGraph: {
    title: "Zach Oelsner · Independent builder, strategy & analytics",
    description:
      "Strategy, operations & analytics at Protiviti. Independent tools for messy everyday problems, often involving food. Based in NYC.",
    url: "https://zachoelsner.com",
    siteName: "Zach Oelsner",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zach Oelsner · Independent builder, strategy & analytics",
    description:
      "Strategy, operations & analytics at Protiviti. Independent tools for messy everyday problems, often involving food. Based in NYC.",
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
      className={[
        "antialiased",
        dmSans.variable,
        dmSerifDisplay.variable,
        outfit.variable,
        paytoneOne.variable,
      ].join(" ")}
    >
      <body>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
