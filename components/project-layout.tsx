import Link from "next/link"
import { Nav } from "@/components/nav"

interface HowItWorksStep {
  iconColor: string
  title: string
  description: string
}

interface CTA {
  label: string
  href: string
  variant: "primary" | "outline"
}

interface ProjectLayoutProps {
  name: string
  year: string
  description: string
  bgColor: string
  accentColor: string
  howItWorks: HowItWorksStep[]
  preview: React.ReactNode
  builtWith: string[]
  ctas: CTA[]
}

export function ProjectLayout({
  name,
  year,
  description,
  bgColor,
  accentColor,
  howItWorks,
  preview,
  builtWith,
  ctas,
}: ProjectLayoutProps) {
  return (
    <div className="min-h-svh" style={{ backgroundColor: bgColor }}>
      {/* Header */}
      <div className="flex items-center justify-between px-12 pt-8">
        <div className="flex items-center gap-2 text-sm">
          <Link
            href="/work"
            className="flex items-center gap-1 text-muted-foreground hover:text-foreground"
          >
            &larr; Back
          </Link>
          <span className="text-muted-foreground">/</span>
          <Link
            href="/work"
            className="text-muted-foreground hover:text-foreground"
          >
            Work
          </Link>
          <span className="text-muted-foreground">/</span>
          <span className="font-medium">{name}</span>
        </div>
        <Nav />
      </div>

      {/* Title section */}
      <div className="mx-auto max-w-6xl px-12 pt-12">
        <div className="flex items-center gap-3">
          <span
            className="rounded-full px-3 py-1 text-xs font-medium text-white"
            style={{ backgroundColor: accentColor }}
          >
            Shipped
          </span>
          <span className="text-sm text-muted-foreground">{year}</span>
        </div>

        <h1 className="mt-4 font-serif text-5xl font-normal tracking-tight">
          {name}
        </h1>
        <p className="mt-4 max-w-xl text-lg leading-relaxed text-muted-foreground">
          {description}
        </p>
      </div>

      {/* How it works + Preview */}
      <div className="mx-auto max-w-6xl px-12 pt-16">
        <div className="flex gap-10">
          {/* How it works */}
          <div className="flex-shrink-0" style={{ flexBasis: "340px" }}>
            <h2 className="font-serif text-3xl font-normal">
              How it works
            </h2>
            <div className="mt-8 flex flex-col gap-8">
              {howItWorks.map((step, i) => (
                <div key={i} className="flex gap-4">
                  <div
                    className="mt-1 flex-shrink-0"
                    style={{
                      width: 36,
                      height: 18,
                      backgroundColor: step.iconColor,
                      borderRadius: "36px 36px 0 0",
                    }}
                  />
                  <div>
                    <h3 className="font-semibold">{step.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Preview — top aligned with first step, not the heading */}
          <div className="min-w-0 flex-1 pt-12">{preview}</div>
        </div>
      </div>

      {/* Built with */}
      <div className="mx-auto max-w-6xl px-12 pt-16 pb-8">
        <h2 className="font-serif text-3xl font-normal">Built with</h2>
        <div className="mt-4 flex flex-wrap gap-2">
          {builtWith.map((tech) => (
            <span
              key={tech}
              className="rounded-full border px-4 py-1.5 text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* CTAs */}
      <div className="mx-auto max-w-6xl px-12 pb-20">
        <div className="flex gap-4">
          {ctas.map((cta) => (
            <a
              key={cta.label}
              href={cta.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full px-6 py-3 text-sm font-medium transition-opacity hover:opacity-90"
              style={
                cta.variant === "primary"
                  ? {
                      backgroundColor: accentColor,
                      color: "#FFFFFF",
                    }
                  : {
                      border: `1.5px solid ${accentColor}`,
                      color: accentColor,
                    }
              }
            >
              {cta.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
