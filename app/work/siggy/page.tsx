import type { Metadata } from "next"
import { ProjectLayout } from "@/components/project-layout"

export const metadata: Metadata = {
  openGraph: {
    title: "Siggy · Zach Oelsner",
    description:
      "A polished email signature builder. Pick a template, paste into Gmail. $49 lifetime.",
  },
  twitter: {
    title: "Siggy · Zach Oelsner",
    description:
      "A polished email signature builder. Pick a template, paste into Gmail. $49 lifetime.",
  },
}

function SiggyPreview() {
  return (
    <div className="overflow-hidden rounded-xl bg-white shadow-lg">
      {/* App header */}
      <div className="flex items-center justify-between border-b px-5 py-3">
        <div className="flex items-center gap-2">
          <div className="flex h-6 w-6 items-center justify-center rounded-md bg-[#6C5CE7] text-xs font-bold text-white">
            S
          </div>
          <span className="text-sm font-medium">Siggy</span>
        </div>
        <button className="rounded-md bg-[#6C5CE7] px-3 py-1 text-xs font-medium text-white">
          Copy Signature
        </button>
      </div>

      <div className="flex">
        {/* Left panel — form */}
        <div className="w-44 flex-shrink-0 border-r p-4">
          <div className="space-y-3">
            <div>
              <label className="text-[10px] uppercase tracking-wider text-muted-foreground">
                Details
              </label>
              <div className="mt-1 space-y-2">
                <div>
                  <span className="text-[10px] text-muted-foreground">
                    Name
                  </span>
                  <div className="rounded border px-2 py-1 text-xs">
                    Zach Oelsner
                  </div>
                </div>
                <div>
                  <span className="text-[10px] text-muted-foreground">
                    Title
                  </span>
                  <div className="rounded border px-2 py-1 text-xs">
                    Builder &amp; Developer
                  </div>
                </div>
                <div>
                  <span className="text-[10px] text-muted-foreground">
                    Email
                  </span>
                  <div className="rounded border px-2 py-1 text-xs">
                    zach@oelsner.com
                  </div>
                </div>
              </div>
            </div>
            <div>
              <label className="text-[10px] uppercase tracking-wider text-muted-foreground">
                Style
              </label>
              <div className="mt-1 flex gap-1.5">
                <div className="h-5 w-5 rounded-full border-2 border-[#6C5CE7] bg-[#6C5CE7]" />
                <div className="h-5 w-5 rounded-full border-2 border-[#E17055] bg-[#E17055]" />
                <div className="h-5 w-5 rounded-full border-2 border-[#1E2328] bg-[#1E2328]" />
                <div className="h-5 w-5 rounded-full border-2 border-[#A29BFE] bg-[#A29BFE]" />
              </div>
            </div>
          </div>
        </div>

        {/* Right panel — signature preview */}
        <div className="flex flex-1 items-center justify-center bg-[#F8F7FC] p-6">
          <div className="w-full max-w-xs">
            <div className="text-2xl font-black tracking-tight">
              ZACH
            </div>
            <div className="text-2xl font-black tracking-tight text-[#6C5CE7]">
              OELSNER
            </div>
            <div
              className="my-2 h-0.5 w-full"
              style={{ backgroundColor: "#6C5CE7" }}
            />
            <div className="flex items-start justify-between text-[10px]">
              <div>
                <div className="font-semibold uppercase tracking-wider">
                  Builder &amp; Developer
                </div>
                <div className="text-muted-foreground">New York, NY</div>
              </div>
              <div className="text-right text-muted-foreground">
                <div>zach@oelsner.com</div>
                <div>+1 (555) 000-0000</div>
              </div>
            </div>
            <div className="mt-2 flex gap-3 text-[10px] font-semibold uppercase tracking-wider text-[#6C5CE7]">
              <span>LinkedIn</span>
              <span>X</span>
              <span>GitHub</span>
            </div>
            <div className="mt-2 text-[8px] text-muted-foreground">
              Made with Siggy
            </div>
          </div>
        </div>
      </div>

      {/* Template tabs */}
      <div className="flex gap-2 border-t px-5 py-3">
        <span className="rounded-md border px-3 py-1 text-xs text-muted-foreground">
          Edge
        </span>
        <span className="rounded-md bg-[#6C5CE7] px-3 py-1 text-xs font-medium text-white">
          Bold
        </span>
        <span className="rounded-md border px-3 py-1 text-xs text-muted-foreground">
          Card
        </span>
        <span className="rounded-md border px-3 py-1 text-xs text-muted-foreground">
          Clean
        </span>
      </div>
    </div>
  )
}

export default function SiggyPage() {
  return (
    <ProjectLayout
      name="Siggy"
      year="2026"
      description="A polished email signature builder. Pick a template, customize your details, and paste it into Gmail. No design skills needed. $49 lifetime."
      bgColor="#EFE8DA"
      accentColor="#6C5CE7"
      howItWorks={[
        {
          iconColor: "#6C5CE7",
          title: "Pick a template",
          description:
            "Choose from 4 professionally designed layouts: Edge, Bold, Card, or Clean. Each renders beautifully in every email client.",
        },
        {
          iconColor: "#A29BFE",
          title: "Make it yours",
          description:
            "Add your name, title, headshot, and links. Choose fonts and colors. Your name renders as a crisp image so it looks perfect everywhere.",
        },
        {
          iconColor: "#E17055",
          title: "Paste into Gmail",
          description:
            "One click to copy. Paste it into Gmail settings. Done. No extensions, no fiddling with HTML. Works in every email client.",
        },
      ]}
      preview={<SiggyPreview />}
      builtWith={[
        "Next.js",
        "React",
        "Vercel",
        "Satori",
        "Lemon Squeezy",
        "Vercel Blob",
      ]}
      ctas={[
        {
          label: "Try Siggy",
          href: "https://siggy-orpin.vercel.app",
          variant: "primary",
        },
      ]}
    />
  )
}
