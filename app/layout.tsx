import { Geist_Mono, DM_Sans, Instrument_Serif } from "next/font/google"
import type { Metadata } from "next"

import "./globals.css"
import { cn } from "@/lib/utils"

const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-sans" })

const instrumentSerif = Instrument_Serif({
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-serif",
})

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  title: "Zach Oelsner",
  description:
    "Developer & Builder with a thing for food, tools, and shipping software from New York",
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
        geistMono.variable,
      )}
    >
      <body>{children}</body>
    </html>
  )
}
