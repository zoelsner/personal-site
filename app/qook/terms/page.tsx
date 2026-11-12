import type { Metadata } from "next"
export const metadata: Metadata = { title: "Qook terms", description: "The terms for using Qook while it is in beta." }
export default function TermsPage() {
  return <>
    <h1>A few things about Qook.</h1>
    <p>Last updated 12 November 2026.</p>
    <p>Qook is operated by Zach Oelsner as an individual. By using Qook you agree to these terms.</p>
    <h2>Meal ideas, with your judgment</h2>
    <p>Qook offers AI-generated meal ideas, recipes, and illustrations. Recipes can contain mistakes, and illustrations may differ from the finished dish. Check ingredients, quantities, preparation instructions, and your dietary requirements before cooking. Qook is not a substitute for medical or allergy advice.</p>
    <h2>Using the beta</h2>
    <p>Qook is still being tested and is provided as is. Features and availability can change, and generation may fail. Don’t rely on the app as your only copy of information you need.</p>
    <h2>Generation limits</h2>
    <p>New image attempts are limited to 50 per account in a rolling 24 hours. Failed attempts count; viewing existing artwork does not. Don’t bypass usage limits or interfere with the service.</p>
    <h2>Questions or problems</h2>
    <p>Email <a href="mailto:zachoelsner@gmail.com?subject=Qook%20support">zachoelsner@gmail.com</a> for support.</p>
  </>
}
