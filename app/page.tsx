import { Lilita_One, Outfit } from "next/font/google"

import HomeBoard from "./home-board"

const dugoutDisplay = Lilita_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-dugout-display",
})

const dugoutSans = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-dugout-sans",
})

export default function Page() {
  return (
    <HomeBoard fontClassName={`${dugoutDisplay.variable} ${dugoutSans.variable}`} />
  )
}
