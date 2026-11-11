import type { Metadata } from "next"
export const metadata: Metadata = { title: "Qook support", description: "Get help with Qook, report a problem, or ask about your account." }

export default function SupportPage() {
  return <>
    <h1>A little help in the kitchen.</h1>
    <p>Something not working in Qook? Have a dinner idea, a question, or a recipe that went sideways? Email <a href="mailto:zachoelsner@gmail.com?subject=Qook%20support">zachoelsner@gmail.com</a>.</p>
    <h2>Reporting a problem</h2>
    <p>Tell me what you were trying to do, what happened, and your Qook build number and iOS version. A screenshot helps. Please leave out passwords and anything personal you don’t need to share.</p>
    <p>If you’re using TestFlight, you can also open Qook’s page in TestFlight and choose Send Beta Feedback.</p>
    <h2>If a meal illustration doesn’t load</h2>
    <p>The recipe can still be available without its artwork. Qook limits new image attempts to 50 per account in a rolling 24 hours; failed attempts count. Viewing an already generated image doesn’t use that allowance.</p>
    <h2>Your account</h2>
    <p>You can delete your account in Qook’s More tab. If that doesn’t work, email the address above for help. Account deletion is permanent.</p>
    <h2>Shopping</h2>
    <p>Qook gathers ingredients into a shopping list you can check off, copy, or share. Any grocery purchase happens outside Qook; it doesn’t place an order for you.</p>
  </>
}
