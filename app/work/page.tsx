import type { Metadata } from "next"
import Link from "next/link"
import { Nav } from "@/components/nav"

export const metadata: Metadata = {
  openGraph: {
    title: "Work · Zach Oelsner",
    description: "Things I've built. Mostly about food. A few one-off tools.",
  },
  twitter: {
    title: "Work · Zach Oelsner",
    description: "Things I've built. Mostly about food. A few one-off tools.",
  },
}

const projects = [
  {
    slug: "ftp",
    name: "Farm to People",
    status: "Shipped",
    year: "Since 2025",
    description:
      "Turns your weekly Farm to People box into personalized meals and a cooking assistant that knows exactly what\u2019s in your kitchen.",
    tags: ["Python", "FastAPI", "Claude AI", "Playwright", "PWA"],
    accentColor: "#2D5A3D",
  },
  {
    slug: "qook",
    name: "Qook",
    status: "In Progress",
    year: "2026",
    description:
      "Generates a set of meal cards matched to your energy level and pulls ingredients through Instacart so checkout is one tap. Illustrated in watercolor.",
    tags: ["Next.js", "Claude AI", "Instacart API", "Watercolor"],
    accentColor: "#B85A3B",
  },
  {
    slug: "siggy",
    name: "Siggy",
    status: "Shipped",
    year: "2026",
    description:
      "A polished email signature builder. Pick a template, customize your details, and paste it into Gmail. No design skills needed. $49 lifetime.",
    tags: ["Next.js", "React", "Vercel", "Satori", "Lemon Squeezy"],
    accentColor: "#6C5CE7",
  },
]

export default function WorkPage() {
  return (
    <div className="min-h-svh bg-background">
      {/* Nav */}
      <div className="px-12 pt-10">
        <Nav showHome />
      </div>

      {/* Content */}
      <div className="mx-auto max-w-6xl px-12 pt-12 pb-24">
        <h1 className="font-serif text-5xl font-normal tracking-tight">
          Work
        </h1>
        <p className="mt-3 text-base text-muted-foreground">
          Things I&apos;ve built and shipped.
        </p>

        <div className="mt-12 flex flex-col gap-8">
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/work/${project.slug}`}
              className="group block rounded-2xl bg-card p-8 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span>{project.status}</span>
                <span>{project.year}</span>
              </div>

              <h2
                className="mt-3 inline font-serif text-3xl font-normal tracking-tight"
                style={{
                  textDecoration: "underline",
                  textDecorationColor: project.accentColor,
                  textDecorationThickness: "3px",
                  textUnderlineOffset: "6px",
                }}
              >
                {project.name}
              </h2>

              <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">
                {project.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border px-3 py-1 text-xs text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
