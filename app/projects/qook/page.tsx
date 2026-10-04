import type { Metadata } from "next"
import Image from "next/image"
import styles from "./qook.module.css"
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

const screens = [
  {
    file: "energy",
    title: "Choose your energy",
    body: "A quick dinner or a kitchen project? Start with what you have in you.",
    alt: "Qook energy picker with 15, 30, 45 and 60-plus minute choices; 30-minute after-work selected.",
  },
  {
    file: "cards",
    title: "A hand of five",
    body: "Swipe through five ideas, one at a time. Keep what looks good; toss the rest.",
    alt: "First of five Qook dinner cards: a watercolor Steak and Eggs Rice Bowl with Toss, Keep and Cook this tonight actions.",
  },
  {
    file: "recipe",
    title: "Open the recipe",
    body: "Check the ingredients and method, and adjust how many you’re cooking for.",
    alt: "Steak and Eggs Rice Bowl recipe with watercolor artwork, estimated time, two servings and ingredient-list controls.",
  },
  {
    file: "plan",
    title: "Give it a night",
    body: "Make it tonight’s dinner or place your keeps on the nights you’ll cook.",
    alt: "Qook weekly plan with Steak and Eggs Rice Bowl selected for tonight and time choices for upcoming days.",
  },
  {
    file: "shop",
    title: "Gather the ingredients",
    body: "The plan becomes a shopping list you can check off, copy or share.",
    alt: "Qook shopping list with ten ingredients for one recipe, grouped into produce, protein, dairy and pantry.",
  },
]

function QookWalkthrough() {
  return (
    <section
      id="qook-walkthrough"
      aria-label="Qook iPhone walkthrough"
      className={styles.walkthrough}
    >
      <p className={styles.demoNote}>
        Native iPhone simulator captures · synthetic demo meals.
        <br />
        Current development build; the TestFlight beta may differ.
        <br />
        Tap a screen to enlarge.
      </p>
      <ol className={styles.screens}>
        {screens.map((screen, index) => (
          <li key={screen.file}>
            <a
              className={styles.captureLink}
              href={`/projects/qook/native/${screen.file}.jpg`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open full screenshot: ${screen.title} (new tab)`}
            >
              <Image
                className={styles.capture}
                src={`/projects/qook/native/${screen.file}.jpg`}
                width={368}
                height={800}
                sizes="(max-width: 600px) 260px, (max-width: 1000px) 30vw, 200px"
                alt={screen.alt}
              />
            </a>
            <h4 className={styles.screenTitle}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              {screen.title}
            </h4>
            <p className={styles.screenBody}>{screen.body}</p>
          </li>
        ))}
      </ol>
    </section>
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
          Generates meal cards matched to{" "}
          <b>how much cooking you have in you today</b>, with recipes, a meal
          plan, and a shopping list. Built around watercolor illustrations
          because the food should look like something you actually want to make.
        </>
      }
      heroActions={
        <div className={styles.heroActions}>
          <a
            className={styles.betaLink}
            href="https://testflight.apple.com/join/SBG1c5cD"
            target="_blank"
            rel="noopener noreferrer"
          >
            Try Qook on TestFlight →
          </a>
          <a className={styles.flowLink} href="#qook-walkthrough">
            See how dinner comes together ↓
          </a>
          <p className={styles.betaNote}>
            iOS beta · Open on your iPhone with Apple’s TestFlight app.
          </p>
        </div>
      }
      think={[
        {
          title: "A small decision to start with",
          body: "Dinner starts with how much cooking I have in me, not a search box. Energy comes first; preferences and whatever’s in the fridge can narrow the ideas from there.",
        },
        {
          title: "Five ideas, then dinner",
          body: "I chose a hand of five instead of an endless feed. There’s a stopping point: keep a few, give them a night, and move on. Watercolor makes the choosing part feel like looking at a menu.",
        },
        {
          title: "Test the whole trip to the grocery list",
          body: "In testing, I changed a recipe to three servings, but Tonight and the shopping list still used two. The fix keeps portions with the chosen day. I now check that the recipe, plan and groceries agree after details finish loading and after reopening the app.",
        },
      ]}
      preview={<QookWalkthrough />}
      previewLayout="full-width"
      previewFirst
      peekHeading="from energy to dinner"
      stack={["Expo", "React Native", "Supabase", "OpenRouter", "Watercolor"]}
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
