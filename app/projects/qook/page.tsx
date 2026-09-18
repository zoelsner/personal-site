import type { Metadata } from "next"
import { ProjectPage } from "@/components/project-page"

export const metadata: Metadata = {
  title: "Qook",
  description:
    "Meal cards matched to your energy level. Recipes, a meal plan, and a shopping list. Illustrated in watercolor.",
  openGraph: {
    title: "Qook · Zach Oelsner",
    description:
      "Meal cards matched to your energy level. Recipes, a meal plan, and a shopping list. Illustrated in watercolor.",
  },
  twitter: {
    title: "Qook · Zach Oelsner",
    description:
      "Meal cards matched to your energy level. Recipes, a meal plan, and a shopping list. Illustrated in watercolor.",
  },
}

const meals = [
  { name: "Butternut Soup", time: "25 min", color: "#C07A5A" },
  { name: "Miso Cod", time: "20 min", color: "#5A7A8C" },
  { name: "Grain Bowl", time: "15 min", color: "#8A9A5A" },
]

function QookPreview() {
  return (
    <div
      style={{
        fontFamily: "var(--font-outfit), sans-serif",
        background: "#fff",
        borderRadius: 10,
        overflow: "hidden",
        border: "1px solid rgba(0,0,0,0.10)",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "10px 14px",
          borderBottom: "1px solid rgba(0,0,0,0.08)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            fontSize: 13,
            fontWeight: 600,
          }}
        >
          <div
            style={{
              width: 22,
              height: 22,
              borderRadius: 6,
              background: "#B85A3B",
            }}
          />
          <span>Qook</span>
        </div>
        <div style={{ display: "flex", gap: 6, fontSize: 10, fontWeight: 600 }}>
          <span
            style={{
              padding: "3px 8px",
              borderRadius: 999,
              border: "1px solid rgba(0,0,0,0.10)",
              opacity: 0.6,
            }}
          >
            Low
          </span>
          <span
            style={{
              padding: "3px 8px",
              borderRadius: 999,
              background: "#B85A3B",
              color: "#fff",
            }}
          >
            Medium
          </span>
          <span
            style={{
              padding: "3px 8px",
              borderRadius: 999,
              border: "1px solid rgba(0,0,0,0.10)",
              opacity: 0.6,
            }}
          >
            High
          </span>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "14px 14px 6px",
        }}
      >
        <span style={{ fontSize: 12, fontWeight: 700 }}>Today&apos;s cards</span>
        <span style={{ fontSize: 10, opacity: 0.6 }}>
          A few meal ideas
        </span>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 10,
          padding: "0 14px 12px",
        }}
      >
        {meals.map((meal) => (
          <div
            key={meal.name}
            style={{
              overflow: "hidden",
              borderRadius: 8,
              border: "1px solid rgba(0,0,0,0.08)",
              background: "#FAFAF5",
            }}
          >
            <div
              style={{
                position: "relative",
                height: 72,
                background: `radial-gradient(ellipse at 40% 55%, ${meal.color}99, ${meal.color}33 55%, transparent 85%), radial-gradient(circle at 72% 28%, ${meal.color}66, transparent 45%), radial-gradient(circle at 20% 75%, ${meal.color}44, transparent 35%)`,
              }}
            />
            <div style={{ padding: 8 }}>
              <div style={{ fontSize: 11, fontWeight: 600, lineHeight: 1.2 }}>
                {meal.name}
              </div>
              <div style={{ fontSize: 10, opacity: 0.6, marginTop: 2 }}>
                {meal.time}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "10px 14px",
          background: "#FAFAF5",
          borderTop: "1px solid rgba(0,0,0,0.08)",
        }}
      >
        <span style={{ fontSize: 11, opacity: 0.6 }}>
          14 ingredients · shopping list
        </span>
        <span
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 6,
            padding: "5px 12px",
            borderRadius: 999,
            background: "#003D29",
            color: "#fff",
            fontSize: 11,
            fontWeight: 600,
          }}
        >
          View shopping list →
        </span>
      </div>
    </div>
  )
}

export default function QookPage() {
  return (
    <ProjectPage
      name="Qook"
      accent="#B85A3B"
      accentOn="#fdebcc"
      kicker={["iOS beta", "2026", "TestFlight"]}
      tagline="meal cards matched to your energy level."
      blurb={
        <>
          Generates meal cards matched to <b>how much cooking you have in
          you today</b>, with recipes, a meal plan, and a shopping list.
          Built around watercolor illustrations because the food should look
          like something you actually want to make.
        </>
      }
      think={[
        {
          title: "Start with the problem",
          body: "Tell it how much cooking you have in you today, from barely lifting a finger to a weekend project. Cooking preferences help shape the suggestions.",
        },
        {
          title: "The decision: a hand of five",
          body: "AI generates meal cards matched to the tier, illustrated in watercolor so you actually want to look at them. A hand of five ideas gives you somewhere to start.",
        },
        {
          title: "Make a plan",
          body: "Keep a meal, pick a day, and gather its ingredients in a shopping list you can check off, copy, or share. Dinner gets a little less scattered.",
        },
        {
          title: "Try the beta",
          body: "The iOS beta is available on TestFlight. Open the link on your iPhone, install Apple’s TestFlight app, and try Qook. Still a work in progress — feedback is welcome.",
        },
      ]}
      preview={<QookPreview />}
      stack={[
        "Expo",
        "React Native",
        "Supabase",
        "OpenRouter",
        "Watercolor",
      ]}
      ctas={[
        {
          label: "Try Qook on TestFlight →",
          href: "https://testflight.apple.com/join/SBG1c5cD",
          external: true,
          accent: true,
        },
      ]}
      halfCircles={[
        {
          tone: "orange",
          style: {
            width: 54,
            height: 27,
            left: 130,
            top: 170,
            transform: "rotate(-10deg)",
          },
        },
        {
          tone: "gold",
          style: {
            width: 46,
            height: 23,
            right: 200,
            top: 200,
            transform: "rotate(15deg)",
          },
        },
        {
          tone: "cream",
          style: {
            width: 60,
            height: 30,
            right: 140,
            top: 340,
            transform: "rotate(-12deg)",
          },
        },
      ]}
    />
  )
}
