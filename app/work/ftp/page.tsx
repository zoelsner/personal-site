import type { Metadata } from "next"
import Image from "next/image"
import { ProjectLayout } from "@/components/project-layout"

export const metadata: Metadata = {
  title: "Farm to People",
  description:
    "People pay for a Farm to People box and still let half of it go soft. This reads your actual cart and gives you three meals to make with what's in there.",
  openGraph: {
    title: "Farm to People · Zach Oelsner",
    description:
      "People pay for a Farm to People box and still let half of it go soft. This reads your actual cart and gives you three meals to make with what's in there.",
  },
  twitter: {
    title: "Farm to People · Zach Oelsner",
    description:
      "People pay for a Farm to People box and still let half of it go soft. This reads your actual cart and gives you three meals to make with what's in there.",
  },
}

const meals = [
  {
    name: "Seared Sea Bass with Pomelo & Kale",
    image:
      "https://xwio06u3kk8ffotz.public.blob.vercel-storage.com/sea-bass.jpg",
    time: "15 min",
    detail: "Serves 2",
    extra: "32g protein",
  },
  {
    name: "Crispy Pork Chops with Apple Slaw",
    image:
      "https://xwio06u3kk8ffotz.public.blob.vercel-storage.com/pork-chops.jpg",
    time: "18 min",
    detail: "2 swaps",
  },
  {
    name: "Ramp & Mushroom Pasta",
    image:
      "https://xwio06u3kk8ffotz.public.blob.vercel-storage.com/mushroom-pasta.jpg",
    time: "30 min",
    detail: "3 swaps",
  },
]

function FTPPreview() {
  return (
    <div className="relative overflow-hidden rounded-xl bg-white shadow-lg">
      {/* Bottom-left accent — mirrors top-right coral */}
      <div
        className="absolute bottom-0 left-0 z-10 w-8 rounded-tr-xl"
        style={{ backgroundColor: "#2D5A3D", opacity: 0.12, height: 48 }}
      />
      {/* App header */}
      <div className="relative flex items-center justify-between border-b px-5 py-3">
        <span className="text-sm font-semibold text-[#2D5A3D]">
          Farm to People
        </span>
        <span className="text-xs text-muted-foreground">
          Delivery: Sun, Apr 13
        </span>
        {/* Coral accent */}
        <div
          className="absolute top-0 right-0 h-full w-8 rounded-bl-xl"
          style={{ backgroundColor: "#C75B3B", opacity: 0.15 }}
        />
      </div>

      <div className="flex">
        {/* Left — Meals + Add-ons */}
        <div className="flex-1 border-r p-4">
          {/* Meal Ideas header */}
          <div className="mb-3 flex items-center justify-between">
            <h3 className="text-sm font-semibold">Meal Ideas</h3>
            <div className="flex gap-1.5">
              <span className="rounded bg-[#2D5A3D] px-2 py-0.5 text-[10px] font-medium text-white">
                New Ideas
              </span>
              <span className="rounded bg-[#C8963E] px-2 py-0.5 text-[10px] font-medium text-white">
                Refresh
              </span>
            </div>
          </div>

          {/* Meal cards */}
          <div className="flex flex-col gap-2">
            {meals.map((meal) => (
              <div
                key={meal.name}
                className="flex items-center gap-3 rounded-lg border border-[#E8E5DF] p-2"
              >
                <Image
                  src={meal.image}
                  alt={meal.name}
                  width={48}
                  height={48}
                  className="rounded-md object-cover"
                  style={{ width: 48, height: 48 }}
                />
                <div className="min-w-0">
                  <div className="text-xs font-medium leading-snug">
                    {meal.name}
                  </div>
                  <div className="flex gap-2 text-[10px] text-muted-foreground">
                    <span>{meal.time}</span>
                    <span>{meal.detail}</span>
                    {meal.extra && <span>{meal.extra}</span>}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Add-ons */}
          <div className="mt-4">
            <h4 className="mb-2 text-xs font-semibold text-muted-foreground">
              Add Ons
            </h4>
            <div className="flex items-center gap-3 rounded-lg border border-[#E8E5DF] p-2">
              <Image
                src="https://xwio06u3kk8ffotz.public.blob.vercel-storage.com/chicken-breast.jpg"
                alt="Chicken Breast"
                width={40}
                height={40}
                className="rounded-md object-cover"
                style={{ width: 40, height: 40 }}
              />
              <div className="min-w-0 flex-1">
                <div className="text-xs font-medium">
                  Chicken Breast &middot; $9.99
                </div>
                <div className="text-[10px] text-muted-foreground">
                  Great with the kale in your box. Quick stir-fry.
                </div>
              </div>
              <span className="flex-shrink-0 rounded bg-[#2D5A3D] px-2 py-0.5 text-[9px] font-medium text-white">
                View on FTP
              </span>
            </div>
          </div>
        </div>

        {/* Right — Chat + Smart Swaps */}
        <div className="flex w-[300px] flex-shrink-0 flex-col">
          {/* Chat */}
          <div className="flex-1 p-4">
            <h3 className="mb-3 text-sm font-semibold">Chat</h3>
            <div className="flex flex-col gap-2">
              {/* User message */}
              <div className="self-start rounded-lg bg-[#F0EDE8] px-3 py-2 text-[11px]">
                What should I make with the sea bass? Something quick.
              </div>
              {/* AI response */}
              <div className="self-end rounded-lg bg-[#2D5A3D] px-3 py-2 text-[11px] text-white">
                Pan-sear with lemon butter. 15 min. The pomelo from your
                box adds bright citrus. Finish with kale.
              </div>
              {/* User */}
              <div className="self-start rounded-lg bg-[#F0EDE8] px-3 py-2 text-[11px]">
                Yes please! What about the pork chops?
              </div>
              {/* AI */}
              <div className="self-end rounded-lg bg-[#2D5A3D] px-3 py-2 text-[11px] text-white">
                Crisp them in a cast iron, then make a quick slaw with the
                apples and fennel. 18 minutes total.
              </div>
            </div>
          </div>

          {/* Smart Swaps */}
          <div className="border-t p-4">
            <h4 className="mb-2 text-xs font-semibold">Smart Swaps</h4>
            <div className="flex items-start gap-2">
              <span className="flex-shrink-0 rounded bg-[#2D5A3D] px-2 py-0.5 text-[9px] font-medium text-white">
                Make This Swap
              </span>
              <div className="min-w-0">
                <div className="text-[11px] font-medium">
                  Ruby Frost Apples &rarr; Cara Cara Oranges
                </div>
                <div className="text-[10px] text-muted-foreground">
                  Bright citrus that balances the rich pork chops.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function FTPPage() {
  return (
    <ProjectLayout
      name="Farm to People"
      year="Since 2025"
      description="People pay for a Farm to People box and still let half of it go soft. The box shows up Wednesday. By Sunday you're staring at kohlrabi wondering what to do with it. This reads your actual cart and gives you three meals to make with what's in there."
      bgColor="#EFE8DA"
      accentColor="#3B5A6A"
      sectionTitle="The thinking"
      howItWorks={[
        {
          iconColor: "#3B5A6A",
          title: "Catalyst",
          description:
            "People order the box because they want to cook more than they actually do. Wednesday it shows up. By the weekend they've made one of the proteins and the produce is looking sad. The gap isn't ingredients. It's the five minutes between opening the fridge and knowing what to make.",
        },
        {
          iconColor: "#C8963E",
          title: "Decision",
          description:
            "Built it cart-first. Most meal apps tell you what to buy. This one starts from what you already bought and works from there. Also skipped the usual personalization onboarding. Preferences you set up once go stale fast. Better to learn what you like from what you actually cook.",
        },
        {
          iconColor: "#C75B3B",
          title: "Status",
          description:
            "Live in production with a handful of real users. Sent Farm to People a proposal to turn it into a two-month paid engagement (waiting to hear back). The build part is mostly done. The open question is whether this ends up a standalone app, a feature they license, or a partnership.",
        },
      ]}
      preview={<FTPPreview />}
      builtWith={[
        "Python",
        "FastAPI",
        "Playwright",
        "Claude AI",
        "Supabase",
        "Railway",
        "PWA",
      ]}
      ctas={[
        {
          label: "View Live App",
          href: "https://farmtopeople-demo.up.railway.app/",
          variant: "primary",
        },
      ]}
    />
  )
}
