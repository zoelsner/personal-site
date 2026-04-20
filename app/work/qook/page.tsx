import type { Metadata } from "next"
import { ProjectLayout } from "@/components/project-layout"

export const metadata: Metadata = {
  openGraph: {
    title: "Qook · Zach Oelsner",
    description:
      "Meal cards matched to your energy level. One-tap Instacart checkout. Illustrated in watercolor.",
  },
  twitter: {
    title: "Qook · Zach Oelsner",
    description:
      "Meal cards matched to your energy level. One-tap Instacart checkout. Illustrated in watercolor.",
  },
}

const meals = [
  { name: "Butternut Soup", time: "25 min", color: "#C07A5A" },
  { name: "Miso Cod", time: "20 min", color: "#5A7A8C" },
  { name: "Grain Bowl", time: "15 min", color: "#8A9A5A" },
]

function QookPreview() {
  return (
    <div className="overflow-hidden rounded-xl bg-white shadow-lg">
      {/* App header */}
      <div className="flex items-center justify-between border-b px-5 py-3">
        <div className="flex items-center gap-2">
          <div className="h-6 w-6 rounded-md" style={{ backgroundColor: "#B85A3B" }} />
          <span className="text-sm font-semibold">Qook</span>
        </div>
        <div className="flex gap-1.5 text-[10px] font-medium">
          <span className="rounded-full border px-2 py-0.5 text-muted-foreground">
            Low
          </span>
          <span
            className="rounded-full px-2 py-0.5 text-white"
            style={{ backgroundColor: "#B85A3B" }}
          >
            Medium
          </span>
          <span className="rounded-full border px-2 py-0.5 text-muted-foreground">
            High
          </span>
        </div>
      </div>

      {/* Section label */}
      <div className="flex items-center justify-between px-5 pb-2 pt-4">
        <span className="text-xs font-semibold">Today&apos;s cards</span>
        <span className="text-[10px] text-muted-foreground">
          Medium energy · 3 picks
        </span>
      </div>

      {/* Meal cards grid */}
      <div className="grid grid-cols-3 gap-3 px-5 pb-4">
        {meals.map((meal) => (
          <div
            key={meal.name}
            className="overflow-hidden rounded-lg border border-[#E8E5DF] bg-[#FAFAF5]"
          >
            {/* Watercolor swatch */}
            <div
              className="relative h-24"
              style={{
                background: `radial-gradient(ellipse at 40% 55%, ${meal.color}99, ${meal.color}33 55%, transparent 85%)`,
              }}
            >
              <div
                className="absolute inset-0"
                style={{
                  background: `radial-gradient(circle at 72% 28%, ${meal.color}66, transparent 45%)`,
                }}
              />
              <div
                className="absolute inset-0"
                style={{
                  background: `radial-gradient(circle at 20% 75%, ${meal.color}44, transparent 35%)`,
                }}
              />
            </div>
            {/* Info */}
            <div className="p-2.5">
              <div className="text-[11px] font-semibold leading-tight">
                {meal.name}
              </div>
              <div className="mt-0.5 text-[10px] text-muted-foreground">
                {meal.time}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Instacart checkout bar */}
      <div className="flex items-center justify-between border-t bg-[#FAFAF5] px-5 py-3">
        <div className="text-[11px] text-muted-foreground">
          14 ingredients · pre-filled cart
        </div>
        <div
          className="flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[11px] font-medium text-white"
          style={{ backgroundColor: "#003D29" }}
        >
          <span>Checkout with Instacart</span>
          <span>→</span>
        </div>
      </div>
    </div>
  )
}

export default function QookPage() {
  return (
    <ProjectLayout
      name="Qook"
      year="2026"
      status="In Progress"
      description="Generates a set of meal cards matched to your energy level and pulls the ingredients straight through Instacart. Built around watercolor illustrations because the food should look like something you actually want to make."
      bgColor="#EFE8DA"
      accentColor="#B85A3B"
      howItWorks={[
        {
          iconColor: "#B85A3B",
          title: "Pick your energy",
          description:
            "Tell it how much cooking you have in you today. Low, medium, or high. That's the whole filter.",
        },
        {
          iconColor: "#C8963E",
          title: "Get your cards",
          description:
            "AI generates meal cards matched to the tier, illustrated in watercolor so you actually want to look at them.",
        },
        {
          iconColor: "#003D29",
          title: "Checkout in one tap",
          description:
            "All ingredients pre-populated in an Instacart cart. One tap and they're on the way.",
        },
      ]}
      preview={<QookPreview />}
      builtWith={[
        "Next.js",
        "React",
        "Claude AI",
        "Instacart API",
        "Vercel",
        "Watercolor",
      ]}
      ctas={[
        {
          label: "Get notified when it launches",
          href: "mailto:zachoelsner@gmail.com?subject=Qook%20waitlist",
          variant: "primary",
        },
      ]}
    />
  )
}
