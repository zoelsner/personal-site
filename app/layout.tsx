import { Geist_Mono, DM_Sans, DM_Serif_Display } from "next/font/google"
import type { Metadata } from "next"

import "./globals.css"
import { cn } from "@/lib/utils"

const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-sans" })

const dmSerif = DM_Serif_Display({
  weight: "400",
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
        dmSerif.variable,
        geistMono.variable,
      )}
    >
      <body>{children}</body>
    </html>
  )
}
