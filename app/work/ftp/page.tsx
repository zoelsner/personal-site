import type { Metadata } from "next"
import Image from "next/image"
import { ProjectPage } from "@/components/project-page"
import { VideoLightbox } from "@/components/video-lightbox"

const VIDEO_SRC =
  "https://xwio06u3kk8ffotz.public.blob.vercel-storage.com/v15044gf0000d6ib0sfog65v2rtgvua0.mp4"
const TIKTOK_URL =
  "https://www.tiktok.com/@builtwithzach/video/7612403206081072414"

export const metadata: Metadata = {
  title: "Farm to People",
  description:
    "Reads my Farm to People cart and gives me three meals to make with what's already in there. Built it because I kept wasting half the box.",
  openGraph: {
    title: "Farm to People · Zach Oelsner",
    description:
      "Reads my Farm to People cart and gives me three meals to make with what's already in there. Built it because I kept wasting half the box.",
  },
  twitter: {
    title: "Farm to People · Zach Oelsner",
    description:
      "Reads my Farm to People cart and gives me three meals to make with what's already in there. Built it because I kept wasting half the box.",
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
                <div style={{ fontSize: 11, fontWeight: 600, lineHeight: 1.2 }}>
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
          I kept paying for the Farm to People box because the produce was great
          and I was learning new ingredients. But I was wasting half of it.
          Asking AI for ideas worked some days; getting my cart into the prompt
          was the bottleneck. I built a scraper. The rest is what you see.
        </>
      }
      think={[
        {
          title: "Catalyst",
          body: "Knowing what to make. Not wasting half the box.",
        },
        {
          title: "Decision",
          body: "What I wanted to know: the best way to optimize my cart before I ordered. What to swap, what I could already cook with. Adding a protein and watching the recommendations evolve is the fun part.",
        },
      ]}
      preview={
        <VideoLightbox videoSrc={VIDEO_SRC} tiktokUrl={TIKTOK_URL}>
          <FTPPreview />
        </VideoLightbox>
      }
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
