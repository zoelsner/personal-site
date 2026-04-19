"use client"

import { useState } from "react"
import Link from "next/link"
import { Nav } from "@/components/nav"

type Project = {
  slug: string
  meta: string
  name: string
  shortDesc: string
  previewDesc: string
  color: string
  diameter: number
  href: string
  external?: boolean
}

const projects: Project[] = [
  {
    slug: "ftp",
    meta: "Shipped · 2025",
    name: "Farm to People",
    shortDesc: "Turns a weekly box into personal meals.",
    previewDesc: "3 meals · 18 items · cooking assistant",
    color: "#3B5A6A",
    diameter: 210,
    href: "/work/ftp",
  },
  {
    slug: "siggy",
    meta: "Shipped · 2026",
    name: "Siggy",
    shortDesc: "A small tool for a specific problem.",
    previewDesc: "4 templates · pasted into Gmail in seconds",
    color: "#7A5A7F",
    diameter: 120,
    href: "/work/siggy",
  },
  {
    slug: "qook",
    meta: "In Progress",
    name: "Qook",
    shortDesc: "What to cook with what you have.",
    previewDesc: "Scan your kitchen. Get a recipe.",
    color: "#B85A3B",
    diameter: 220,
    href: "/work/qook",
  },
  {
    slug: "this-site",
    meta: "Always Beta",
    name: "This site",
    shortDesc: "You are here.",
    previewDesc: "Built with Next.js, Fraunces, and spare Sundays.",
    color: "#5C7A4A",
    diameter: 100,
    href: "/about",
  },
]

const maxDiameter = Math.max(...projects.map((p) => p.diameter))

export default function Page() {
  const [hovered, setHovered] = useState<number | null>(null)

  return (
    <div
      className="relative flex min-h-svh flex-col"
      style={{ backgroundColor: "#EFE8DA", color: "#1E1A16" }}
    >
      {/* Top nav */}
      <div className="flex items-center justify-between px-12 pt-10">
        <div className="font-mono text-base tracking-wide">ZO</div>
        <Nav />
      </div>

      {/* Hero */}
      <div className="px-12 pt-14">
        <div
          className="font-mono text-sm uppercase tracking-[0.14em]"
          style={{ color: "#8A8275" }}
        >
          New York
        </div>
        <h1 className="mt-6 font-serif text-8xl font-normal tracking-tight sm:text-[140px] sm:leading-[1.05]">
          Zach Oelsner
        </h1>
        <p
          className="mt-8 max-w-2xl font-serif text-3xl leading-[1.3] sm:text-4xl"
          style={{ color: "#3C362E" }}
        >
          I build software for the daily frictions I can&apos;t stop thinking
          about. Mostly food. Sometimes tools. Based out of the Lower East Side.
        </p>
      </div>

      {/* Shelf */}
      <div className="mt-auto px-12 pb-28">
        <div className="relative">
          <div
            className="flex items-end justify-between"
            style={{ height: maxDiameter / 2 + 20 }}
          >
            {projects.map((project, i) => (
              <div
                key={project.slug}
                className="relative flex flex-1 items-end justify-center"
                style={{ height: "100%" }}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
              >
                {/* Hover preview card */}
                {hovered === i && (
                  <HoverPreview project={project} index={i} />
                )}
                <Link
                  href={project.href}
                  aria-label={`Open ${project.name}`}
                  className="block"
                  style={{
                    width: project.diameter,
                    height: project.diameter / 2,
                    backgroundColor: project.color,
                    borderRadius: `${project.diameter}px ${project.diameter}px 0 0`,
                    transform: hovered === i ? "translateY(-10px)" : "translateY(0)",
                    boxShadow:
                      hovered === i
                        ? `0 16px 32px ${project.color}40`
                        : "0 0 0 rgba(0,0,0,0)",
                    transition: "transform 260ms cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 260ms ease-out",
                    opacity: 0,
                    animation: "fade-up 0.5s ease-out forwards",
                    animationDelay: `${0.15 + i * 0.08}s`,
                  }}
                />
              </div>
            ))}
          </div>

          {/* Shelf line */}
          <div
            className="h-px w-full"
            style={{ backgroundColor: "#C9C2B4" }}
          />

          {/* Labels row */}
          <div className="mt-5 flex justify-between">
            {projects.map((project) => (
              <div
                key={project.slug}
                className="flex flex-1 flex-col px-4"
                style={{ minWidth: 0 }}
              >
                <div
                  className="font-mono text-xs uppercase tracking-[0.14em]"
                  style={{ color: "#8A8275" }}
                >
                  {project.meta}
                </div>
                <div className="mt-3 font-serif text-[36px] leading-[40px] tracking-tight">
                  {project.name}
                </div>
                <div
                  className="mt-2 font-serif text-lg leading-snug"
                  style={{ color: "#3C362E" }}
                >
                  {project.shortDesc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div
        className="flex items-center justify-between px-12 pb-10 font-mono text-sm"
        style={{ color: "#8A8275" }}
      >
        <div className="flex items-center gap-5">
          <a
            href="https://github.com/zoelsner"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground"
          >
            github
          </a>
          <span>·</span>
          <a
            href="https://linkedin.com/in/zoelsner"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground"
          >
            linkedin
          </a>
          <span>·</span>
          <a
            href="https://tiktok.com/@builtwithzach"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground"
          >
            tiktok
          </a>
        </div>
        <div>hover a half-circle to preview</div>
      </div>
    </div>
  )
}

function HoverPreview({
  project,
  index,
}: {
  project: Project
  index: number
}) {
  const alignRight = index >= projects.length - 1
  return (
    <div
      className="absolute z-10"
      style={{
        bottom: `calc(100% + 20px)`,
        [alignRight ? "right" : "left"]: alignRight ? "0" : "auto",
        ...(alignRight ? {} : { left: "50%", transform: "translateX(-50%)" }),
        width: 320,
        opacity: 0,
        animation: "fade-up 0.22s ease-out forwards",
      }}
    >
      <div
        className="flex gap-3 rounded-[10px] p-3"
        style={{
          backgroundColor: "#FFFBF3",
          border: "1px solid #E0D8C6",
          boxShadow:
            "0 14px 36px rgba(30, 26, 22, 0.12), 0 2px 6px rgba(30, 26, 22, 0.06)",
        }}
      >
        <div
          className="flex h-[88px] w-[88px] flex-shrink-0 flex-col overflow-hidden rounded-md p-2"
          style={{ backgroundColor: project.color }}
        >
          <div
            className="font-mono text-[8px] font-semibold uppercase tracking-wider"
            style={{ color: "#EFE8DA" }}
          >
            {project.name.slice(0, 3)}
          </div>
          <div className="mt-2 flex flex-col gap-1">
            {[0, 1, 2].map((n) => (
              <div key={n} className="flex items-center gap-1">
                <div
                  className="h-2.5 w-2.5 flex-shrink-0 rounded-[2px]"
                  style={{ backgroundColor: "rgba(239, 232, 218, 0.45)" }}
                />
                <div
                  className="h-[3px] rounded"
                  style={{
                    width: 36 + n * 6,
                    backgroundColor: "rgba(239, 232, 218, 0.55)",
                  }}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="flex min-w-0 flex-1 flex-col justify-between py-0.5">
          <div className="flex flex-col">
            <div
              className="font-mono text-[10px] font-medium uppercase tracking-[0.12em]"
              style={{ color: "#8A8275" }}
            >
              {project.meta}
            </div>
            <div className="mt-1 font-serif text-xl leading-[22px] tracking-tight">
              {project.name}
            </div>
            <div
              className="mt-1 font-serif text-[13px] leading-[18px]"
              style={{ color: "#3C362E" }}
            >
              {project.previewDesc}
            </div>
          </div>
          <div
            className="mt-1.5 flex items-center gap-1.5 font-mono text-[10px] font-medium uppercase tracking-[0.12em]"
            style={{ color: project.color }}
          >
            <span>Open</span>
            <span>→</span>
          </div>
        </div>
      </div>
    </div>
  )
}
