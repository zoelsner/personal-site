import type { Metadata } from "next"
import Image from "next/image"
import { ProjectPage } from "@/components/project-page"

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
    name: "Seared Sea Bass · Pomelo & Kale",
    image:
      "https://xwio06u3kk8ffotz.public.blob.vercel-storage.com/sea-bass.jpg",
    time: "15 min",
    detail: "serves 2",
  },
  {
    name: "Crispy Pork Chops · Apple Slaw",
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
          borderBottom: "1px solid rgba(0,0,0,0.08)",
          padding: "10px 14px",
        }}
      >
        <span style={{ fontWeight: 700, fontSize: 13, color: "#2D5A3D" }}>
          Farm to People
        </span>
        <span style={{ fontSize: 11, opacity: 0.6 }}>
          Delivery: Sun, Apr 13
        </span>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr" }}>
        <div
          style={{
            padding: 14,
            borderRight: "1px solid rgba(0,0,0,0.08)",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 10,
            }}
          >
            <h4 style={{ fontSize: 12, fontWeight: 700, margin: 0 }}>
              Meal Ideas
            </h4>
            <div style={{ display: "flex", gap: 4 }}>
              <span
                style={{
                  padding: "3px 8px",
                  borderRadius: 4,
                  fontSize: 9,
                  fontWeight: 700,
                  color: "#fff",
                  background: "#2D5A3D",
                }}
              >
                New ideas
              </span>
              <span
                style={{
                  padding: "3px 8px",
                  borderRadius: 4,
                  fontSize: 9,
                  fontWeight: 700,
                  color: "#fff",
                  background: "#C8963E",
                }}
              >
                Refresh
              </span>
            </div>
          </div>
          {meals.map((meal) => (
            <div
              key={meal.name}
              style={{
                display: "flex",
                gap: 10,
                alignItems: "center",
                padding: 6,
                border: "1px solid rgba(0,0,0,0.08)",
                borderRadius: 8,
                marginBottom: 6,
                background: "#fff",
              }}
            >
              <Image
                src={meal.image}
                alt={meal.name}
                width={40}
                height={40}
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 6,
                  objectFit: "cover",
                  flexShrink: 0,
                }}
              />
              <div>
                <div
                  style={{ fontSize: 11, fontWeight: 600, lineHeight: 1.2 }}
                >
                  {meal.name}
                </div>
                <div
                  style={{
                    fontSize: 9,
                    opacity: 0.6,
                    marginTop: 2,
                    display: "flex",
                    gap: 8,
                  }}
                >
                  <span>{meal.time}</span>
                  <span>{meal.detail}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div style={{ padding: 14, background: "#fafaf6" }}>
          <h4
            style={{
              fontSize: 12,
              fontWeight: 700,
              margin: "0 0 10px",
            }}
          >
            Chat
          </h4>
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            <div
              style={{
                padding: "6px 10px",
                borderRadius: 10,
                fontSize: 10,
                maxWidth: "85%",
                lineHeight: 1.4,
                background: "#f1ede4",
                alignSelf: "flex-start",
                color: "#1a2a18",
              }}
            >
              What should I make with the sea bass?
            </div>
            <div
              style={{
                padding: "6px 10px",
                borderRadius: 10,
                fontSize: 10,
                maxWidth: "85%",
                lineHeight: 1.4,
                background: "#2D5A3D",
                color: "#fff",
                alignSelf: "flex-end",
              }}
            >
              Pan-sear with lemon butter. 15 min.
            </div>
            <div
              style={{
                padding: "6px 10px",
                borderRadius: 10,
                fontSize: 10,
                maxWidth: "85%",
                lineHeight: 1.4,
                background: "#f1ede4",
                alignSelf: "flex-start",
                color: "#1a2a18",
              }}
            >
              What about the pork chops?
            </div>
            <div
              style={{
                padding: "6px 10px",
                borderRadius: 10,
                fontSize: 10,
                maxWidth: "85%",
                lineHeight: 1.4,
                background: "#2D5A3D",
                color: "#fff",
                alignSelf: "flex-end",
              }}
            >
              Cast iron, then a slaw with apples and fennel.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function FTPPage() {
  return (
    <ProjectPage
      name="Farm to People"
      accent="#2D5A3D"
      accentOn="#fdebcc"
      kicker={["shipped", "since 2025", "in production"]}
      tagline="three meals from your actual box."
      blurb={
        <>
          People pay for a Farm to People box and still let half of it go
          soft. The box shows up Wednesday; by Sunday you&apos;re staring at
          kohlrabi. This reads your <b>actual cart</b> and gives you three
          meals to make with what&apos;s in there — plus a chat that knows
          everything in your box.
        </>
      }
      think={[
        {
          title: "Catalyst",
          body: "People order the box because they want to cook more than they actually do. The gap isn't ingredients — it's the five minutes between opening the fridge and knowing what to make.",
        },
        {
          title: "Decision",
          body: "Built it cart-first. Most meal apps tell you what to buy; this one starts from what you already bought. Skipped the personalization onboarding — preferences set up once go stale.",
        },
        {
          title: "Status",
          body: "Live in production with a handful of real users. Sent FtP a proposal to turn it into a two-month paid engagement. Open question: standalone app, licensed feature, or partnership.",
        },
      ]}
      preview={<FTPPreview />}
      stack={[
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
          label: "view live app →",
          href: "https://farmtopeople-demo.up.railway.app/",
          external: true,
          accent: true,
        },
      ]}
      halfCircles={[
        {
          tone: "cream",
          style: {
            width: 56,
            height: 28,
            left: 120,
            top: 170,
            transform: "rotate(-15deg)",
          },
        },
        {
          tone: "olive",
          style: {
            width: 46,
            height: 23,
            right: 160,
            top: 200,
            transform: "rotate(-20deg)",
          },
        },
        {
          tone: "gold",
          flip: true,
          style: {
            width: 60,
            height: 30,
            right: 240,
            top: 340,
            transform: "rotate(180deg)",
          },
        },
      ]}
    />
  )
}
