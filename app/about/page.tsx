import { Nav } from "@/components/nav"

export default function AboutPage() {
  return (
    <div className="min-h-svh bg-background">
      <div className="px-12 pt-10">
        <Nav showHome />
      </div>
      <div className="mx-auto max-w-6xl px-12 pt-12 pb-24">
        <h1 className="font-serif text-5xl font-normal tracking-tight">
          About
        </h1>
        <p className="mt-6 text-lg text-muted-foreground">Coming soon.</p>
      </div>
    </div>
  )
}
