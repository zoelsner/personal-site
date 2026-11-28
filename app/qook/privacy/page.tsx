import type { Metadata } from "next"
export const metadata: Metadata = { title: "Qook privacy", description: "What Qook collects, where it goes, and how to delete it." }
export default function PrivacyPage() {
  return <>
    <h1>Your privacy in Qook.</h1>
    <p>Last updated 13 November 2026.</p>
    <p>Qook is operated by Zach Oelsner as an individual.</p>
    <p>Qook uses the information you provide to suggest meals and help you plan what to cook. The app has no advertising and no analytics or tracking tools. Questions about your information? Email <a href="mailto:zachoelsner@gmail.com?subject=Qook%20privacy">zachoelsner@gmail.com</a>.</p>
    <h2>Information used by the app</h2>
    <p>Qook uses an account identifier, the sign-in information you provide (Sign in with Apple, or an email address and password), your cooking preferences, and your requests for meal ideas, including anything you type to describe what you want. Earlier test builds allowed guest use, which also created an account identifier. Saved recipes, meal plans, and grocery information are stored by the app; some of it is stored only on your device.</p>
    <h2>Where it is stored</h2>
    <p>Qook uses Supabase for accounts, database records, and meal-image storage. The Qook database is hosted in the United States.</p>
    <h2>App updates</h2>
    <p>Qook uses Expo to deliver app updates. When the app opens, it asks Expo’s servers whether an update is available. That request includes your IP address, the app version, and a random identifier for your installation. It does not include your account or anything you type.</p>
    <h2>Generating meals and illustrations</h2>
    <p>Relevant cooking preferences and the content of your request are sent through OpenRouter to AI model providers, such as OpenAI and Google, to generate meal ideas and artwork. Your email address and password are not sent to them. Those providers handle requests under their own policies, so please don’t type personal or sensitive details into a meal request.</p>
    <h2>The shared recipe library</h2>
    <p>Generated recipes and illustrations may be stored in Qook’s shared library and reused for other cooks. Account details and the original request context are stored separately from that library. Because a recipe is written from a request, avoid putting personal information in one.</p>
    <h2>Deletion and retention</h2>
    <p>You can delete your account from Qook’s More tab, or email the address above. Deleting your account removes it along with the records tied to it, such as your preferences, saved recipes, and generation history. Shared-library recipes and images remain. Supabase, OpenRouter, and the AI model providers may keep logs or backups for a limited time under their own policies.</p>
    <h2>This website and TestFlight</h2>
    <p>These help pages are hosted on Zach’s website, which uses Vercel Analytics and Speed Insights; that is separate from the app. Apple separately processes TestFlight testing and feedback information.</p>
    <h2>Changes</h2>
    <p>If how Qook handles information changes, this page will be updated and the date above will change.</p>
  </>
}
