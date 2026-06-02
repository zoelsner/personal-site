import type { Metadata } from "next"
import { ProjectPage } from "@/components/project-page"

export const metadata: Metadata = {
  title: "Siggy",
  description:
    "A polished email signature builder. Pick a template, paste into Gmail. $19 lifetime.",
  openGraph: {
    title: "Siggy · Zach Oelsner",
    description:
      "A polished email signature builder. Pick a template, paste into Gmail. $19 lifetime.",
  },
  twitter: {
    title: "Siggy · Zach Oelsner",
    description:
      "A polished email signature builder. Pick a template, paste into Gmail. $19 lifetime.",
  },
}

function SiggyPreview() {
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
            gap: 8,
            alignItems: "center",
            fontSize: 13,
            fontWeight: 600,
          }}
        >
          <div
            style={{
              width: 22,
              height: 22,
              borderRadius: 6,
              background: "#6C5CE7",
              color: "#fff",
              fontSize: 11,
              fontWeight: 700,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            S
          </div>
          <span>Siggy</span>
        </div>
        <div
          style={{
            padding: "5px 12px",
            background: "#6C5CE7",
            color: "#fff",
            borderRadius: 6,
            fontSize: 11,
            fontWeight: 600,
          }}
        >
          Copy Signature
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "130px 1fr" }}>
        <div
          style={{
            padding: 12,
            borderRight: "1px solid rgba(0,0,0,0.08)",
            fontSize: 10,
          }}
        >
          <label
            style={{
              fontSize: 9,
              opacity: 0.6,
              letterSpacing: 1,
              textTransform: "uppercase",
              fontWeight: 600,
            }}
          >
            Details
          </label>
          {[
            { label: "Name", value: "Zach Oelsner" },
            { label: "Title", value: "Builder & Developer" },
            { label: "Email", value: "zach@oelsner.com" },
          ].map((field) => (
            <div key={field.label} style={{ marginTop: 4 }}>
              <div style={{ fontSize: 9, opacity: 0.6 }}>{field.label}</div>
              <div
                style={{
                  marginTop: 4,
                  border: "1px solid rgba(0,0,0,0.10)",
                  padding: "4px 6px",
                  borderRadius: 4,
                  fontSize: 10,
                  marginBottom: 6,
                }}
              >
                {field.value}
              </div>
            </div>
          ))}
          <label
            style={{
              marginTop: 8,
              display: "block",
              fontSize: 9,
              opacity: 0.6,
              letterSpacing: 1,
              textTransform: "uppercase",
              fontWeight: 600,
            }}
          >
            Style
          </label>
          <div style={{ display: "flex", gap: 5, marginTop: 6 }}>
            {["#6C5CE7", "#E17055", "#1E2328", "#A29BFE"].map((color) => (
              <div
                key={color}
                style={{
                  width: 18,
                  height: 18,
                  borderRadius: "50%",
                  background: color,
                }}
              />
            ))}
          </div>
        </div>

        <div
          style={{
            background: "#F8F7FC",
            padding: 24,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div style={{ width: "100%", maxWidth: 240 }}>
            <div
              style={{
                fontFamily: "var(--font-paytone), sans-serif",
                fontSize: 22,
                letterSpacing: -1,
                lineHeight: 1,
              }}
            >
              ZACH
            </div>
            <div
              style={{
                fontFamily: "var(--font-paytone), sans-serif",
                fontSize: 22,
                letterSpacing: -1,
                lineHeight: 1,
                color: "#6C5CE7",
              }}
            >
              OELSNER
            </div>
            <div
              style={{
                height: 2,
                background: "#6C5CE7",
                margin: "6px 0",
              }}
            />
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                fontSize: 9,
              }}
            >
              <div
                style={{
                  fontWeight: 600,
                  letterSpacing: 1,
                  textTransform: "uppercase",
                }}
              >
                Builder &amp; Developer
                <br />
                <span
                  style={{
                    opacity: 0.6,
                    fontWeight: 500,
                    letterSpacing: 0,
                    textTransform: "none",
                  }}
                >
                  New York, NY
                </span>
              </div>
              <div style={{ textAlign: "right", opacity: 0.6 }}>
                zach@oelsner.com
                <br />
                +1 (555) 000-0000
              </div>
            </div>
            <div
              style={{
                marginTop: 6,
                display: "flex",
                gap: 8,
                fontSize: 9,
                fontWeight: 700,
                letterSpacing: 1,
                color: "#6C5CE7",
                textTransform: "uppercase",
              }}
            >
              <span>LinkedIn</span>
              <span>X</span>
              <span>GitHub</span>
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          gap: 8,
          padding: "10px 14px",
          borderTop: "1px solid rgba(0,0,0,0.08)",
        }}
      >
        {[
          { label: "Edge", on: false },
          { label: "Bold", on: true },
          { label: "Card", on: false },
          { label: "Clean", on: false },
        ].map((tab) => (
          <span
            key={tab.label}
            style={{
              padding: "5px 10px",
              borderRadius: 6,
              fontSize: 10,
              ...(tab.on
                ? {
                    background: "#6C5CE7",
                    color: "#fff",
                    fontWeight: 600,
                  }
                : {
                    border: "1px solid rgba(0,0,0,0.10)",
                    opacity: 0.6,
                  }),
            }}
          >
            {tab.label}
          </span>
        ))}
      </div>
    </div>
  )
}

export default function SiggyPage() {
  return (
    <ProjectPage
      name="Siggy"
      accent="#6C5CE7"
      accentOn="#ffffff"
      kicker={["shipped", "2026", "$19 lifetime"]}
      tagline="a polished signature, pasted into Gmail."
      blurb={
        <>
          An email signature builder for people who don&apos;t want to fight
          HTML. <b>Pick a template, fill in your details, paste into Gmail</b>.
          Done. Renders crisp in every client because the name is rendered as
          an image. $19 lifetime, no subscriptions.
        </>
      }
      think={[
        {
          title: "Pick a template",
          body: "Four professionally designed layouts: Edge, Bold, Card, Clean. Each renders beautifully in every email client without fighting Outlook's HTML quirks.",
        },
        {
          title: "Make it yours",
          body: "Name, title, headshot, links. Choose fonts and colors. The name renders as a crisp Satori-generated image so it looks perfect even when Gmail strips half your CSS.",
        },
        {
          title: "Paste into Gmail",
          body: 'One click to copy. Paste into Gmail settings. No extensions, no fiddling. The whole transaction is "pay $19, customize, paste, gone."',
        },
      ]}
      preview={<SiggyPreview />}
      stack={[
        "Next.js",
        "React",
        "Vercel",
        "Satori",
        "Lemon Squeezy",
        "Vercel Blob",
      ]}
      ctas={[
        {
          label: "try siggy →",
          href: "https://siggy-orpin.vercel.app",
          external: true,
          accent: true,
        },
      ]}
      halfCircles={[
        {
          tone: "plum",
          style: {
            width: 52,
            height: 26,
            left: 130,
            top: 170,
            transform: "rotate(-12deg)",
          },
        },
        {
          tone: "cream",
          style: {
            width: 56,
            height: 28,
            right: 200,
            top: 200,
            transform: "rotate(20deg)",
          },
        },
        {
          tone: "slate",
          flip: true,
          style: {
            width: 60,
            height: 30,
            right: 140,
            top: 340,
            transform: "rotate(180deg)",
          },
        },
      ]}
    />
  )
}
