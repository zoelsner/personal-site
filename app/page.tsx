import { Lilita_One } from "next/font/google"

import HomeBoard from "./home-board"

const dugoutDisplay = Lilita_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-dugout-display",
})

export default function Page() {
  return (
    <HomeBoard fontClassName={dugoutDisplay.variable} />
  )
}
