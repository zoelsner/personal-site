import type { Metadata } from "next"
export const metadata: Metadata = { title: "Qook privacy — draft" }
export default function PrivacyPage() {
  return <>
    <h1>Your privacy in Qook.</h1>
    <aside>Draft for review. Location, retention periods, and provider settings are still being verified. This page is not the final privacy policy.</aside>
    <p>Qook is operated by Zach Oelsner as an individual.</p>
    <p>Qook uses the information you provide to suggest meals and help you plan what to cook. Questions about your information? Email <a href="mailto:zachoelsner@gmail.com?subject=Qook%20privacy">zachoelsner@gmail.com</a>.</p>
    <h2>Information used by the app</h2>
    <p>Qook uses an account identifier, the sign-in information you provide, cooking preferences, and your requests for meal ideas. Guest use also creates an account identifier. Saved recipes, meal plans, and grocery information are stored by the app; some state is stored on your device.</p>
    <h2>Generating meals and illustrations</h2>
    <p>Qook uses Supabase for accounts, database records, and meal-image storage. Relevant cooking preferences and request content are sent through OpenRouter to AI providers to generate meal ideas and artwork. The implementation currently uses OpenAI and Anthropic text models and a Google image model.</p>
    <h2>Sharing a shopping list</h2>
    <p>If you use the shopping-list share feature, the items on your list are sent to Instacart to create a shopping link. Qook does not place orders or handle payment.</p>
    <h2>The shared recipe library</h2>
    <p>Generated recipes and illustrations may be stored in Qook’s shared library and reused for other cooks. Account details and the original request context are stored separately. We are reviewing how to prevent personal information from appearing in reusable generated content before expanding this library.</p>
    <h2>Deletion and retention</h2>
    <p>You can delete your account from Qook’s More tab or contact the email above. The account-deletion service removes your account and associated account-owned records. Shared-library recipes and images remain. Backup, diagnostic-log, and AI-provider retention details must be confirmed before this policy is finalized.</p>
    <h2>This website and TestFlight</h2>
    <p>These help pages are hosted on Zach’s website, which includes Vercel Analytics and Speed Insights. Apple separately processes TestFlight testing and feedback information. The final policy will distinguish those services from Qook’s own data use.</p>
  </>
}
