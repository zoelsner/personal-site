"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"

import styles from "./page.module.css"

const V3 = {
  navy: "#1a2540",
  cream: "#fdebcc",
  tomato: "#d44e2a",
  gold: "#C8963E",
  slate: "#3B5A6A",
  plum: "#7A5A7F",
  olive: "#5a7a3a",
  muted: "#a8b0c4",
}

type Half = { cx: number; cy: number; w: number; rot: number; bg: string }
type SceneKey = "home" | "ftp" | "sandlot" | "dockme" | "siggy" | "tele"

const vH = (cx: number, cy: number, w: number, rot: number, bg: string): Half => ({
  cx,
  cy,
  w,
  rot,
  bg,
})

const V3_SIGGY: Half[] = [110, 96, 84, 74, 64, 56, 48, 42, 36, 30].map((w, i) =>
  vH(
    300 + i * 76,
    268 + Math.sin(i * 0.95) * 42,
    w,
    i % 2 === 0 ? -18 : 162,
    i === 9 ? V3.tomato : i % 2 === 0 ? V3.slate : V3.cream,
  ),
)

const V3_DOCK: Half[] = [150, 130, 110, 100, 90, 70, 60, 56, 50, 48].map((w, i) =>
  vH(
    282 + i * 80,
    318 - w / 4,
    w,
    0,
    [
      V3.cream,
      V3.tomato,
      V3.gold,
      V3.tomato,
      V3.cream,
      V3.slate,
      V3.gold,
      V3.tomato,
      V3.olive,
      V3.plum,
    ][i],
  ),
)

const v3Tele = (theta: number): Half[] => [
  ...[0, 1, 2, 3, 4, 5, 6, 7].map((i) => {
    const a = (i / 8) * Math.PI * 2 - Math.PI / 2 + theta
    return vH(
      640 + Math.cos(a) * 175,
      262 + Math.sin(a) * 122,
      62,
      (a * 180) / Math.PI + 90,
      [V3.tomato, V3.gold, V3.plum, V3.slate, V3.olive, V3.cream, V3.tomato, V3.gold][i],
    )
  }),
  vH(640, 240, 90, 0, V3.cream),
  vH(640, 285, 90, 180, V3.cream),
]

type Scene = { kicker: string; acc: string; halves: Half[] }

const V3_SCENES: Record<SceneKey, Scene> = {
  home: {
    kicker: "food-pilled · NYC",
    acc: V3.tomato,
    halves: [
      vH(165, 163, 90, -15, V3.cream),
      vH(360, 230, 120, 25, V3.tomato),
      vH(110, 355, 60, 45, V3.gold),
      vH(990, 185, 100, -10, V3.tomato),
      vH(1125, 297, 150, 8, V3.cream),
      vH(875, 352, 50, -30, V3.gold),
      vH(635, 167, 110, 180, V3.cream),
      vH(844, 272, 48, 120, V3.tomato),
      vH(515, 357, 70, -60, V3.gold),
      vH(772, 214, 56, 70, V3.tomato),
    ],
  },
  ftp: {
    kicker: "three meals from your actual box",
    acc: V3.olive,
    halves: [
      vH(430, 215, 50, 0, V3.cream),
      vH(520, 170, 44, 30, V3.olive),
      vH(760, 175, 40, -20, V3.gold),
      vH(850, 312, 130, 180, V3.olive),
      vH(640, 320, 150, 180, V3.cream),
      vH(980, 210, 40, 45, V3.olive),
      vH(430, 312, 130, 180, V3.olive),
      vH(640, 212, 54, 0, V3.cream),
      vH(850, 215, 50, 0, V3.cream),
      vH(300, 210, 40, -40, V3.olive),
    ],
  },
  sandlot: {
    kicker: "helps me not suck at fantasy baseball",
    acc: V3.tomato,
    halves: [
      // the baseball — two halves make the ball, two arcs make the stitches
      vH(300, 213, 170, 0, V3.cream),
      vH(300, 258, 170, 180, V3.cream),
      vH(262, 225, 54, -58, V3.tomato),
      vH(338, 248, 54, 122, V3.tomato),
      // the diamond
      vH(870, 360, 56, 45, V3.cream),
      vH(1000, 280, 56, 45, V3.cream),
      vH(870, 200, 56, 45, V3.cream),
      vH(740, 280, 56, 45, V3.cream),
      vH(870, 285, 40, 0, V3.tomato), // mound
      vH(1080, 130, 150, 0, V3.gold), // outfield sun
    ],
  },
  dockme: {
    kicker: "citi bike, docked every time",
    acc: V3.slate,
    halves: V3_DOCK,
  },
  siggy: {
    kicker: "a polished signature, pasted into gmail",
    acc: V3.plum,
    halves: V3_SIGGY,
  },
  tele: {
    kicker: "draw, guess, pass — real-time rooms",
    acc: V3.gold,
    halves: v3Tele(0),
  },
}

const V3_CHIPS: { key: SceneKey; label: string; href: string }[] = [
  { key: "ftp", label: "Farm to People", href: "/work/ftp" },
  { key: "sandlot", label: "Sandlot", href: "/work/sandlot" },
  { key: "dockme", label: "DockMe", href: "/work/dockme" },
  { key: "siggy", label: "Siggy", href: "/work/siggy" },
  { key: "tele", label: "Telestrations", href: "/work/telestrations" },
]

const SOCIALS = [
  { label: "github", href: "https://github.com/zoelsner" },
  { label: "linkedin", href: "https://www.linkedin.com/in/zacharyoelsner/" },
  { label: "tiktok", href: "https://tiktok.com/@builtwithzach" },
]

function Letter({ ch, i }: { ch: string; i: number }) {
  return (
    <span
      className={styles.letter}
      style={{ animationDelay: `${0.12 + i * 0.045}s` }}
      onMouseEnter={(e) => {
        if (!e.currentTarget.classList.contains(styles.jelly)) {
          e.currentTarget.classList.add(styles.jelly)
        }
      }}
      onAnimationEnd={(e) => {
        if (e.animationName === "v3-pop") e.currentTarget.style.animation = "none"
        if (e.animationName === "v3-jelly") e.currentTarget.classList.remove(styles.jelly)
      }}
    >
      {ch === " " ? " " : ch}
    </span>
  )
}

export default function HomeBoard({ fontClassName }: { fontClassName: string }) {
  const [scene, setScene] = useState<SceneKey>("home")
  const [theta, setTheta] = useState(0)
  const [view, setView] = useState<{ mobile: boolean; scale: number } | null>(null)

  const stageRef = useRef<HTMLDivElement>(null)
  const dotRef = useRef<HTMLSpanElement>(null)
  const ballRef = useRef<HTMLDivElement>(null)
  const halfRefs = useRef<(HTMLDivElement | null)[]>([])
  const busyRef = useRef(false)

  // Desktop: fit the fixed 1280×820 canvas to the viewport (matches the
  // prototype's scaler). Phones get a fluid stacked layout instead — a
  // scaled-down canvas leaves an unusable sliver on portrait screens.
  useEffect(() => {
    const fit = () => {
      const mobile = window.innerWidth < 680
      setView({
        mobile,
        scale: mobile
          ? 1
          : Math.min(window.innerWidth / 1280, window.innerHeight / 820),
      })
    }
    fit()
    window.addEventListener("resize", fit)
    return () => window.removeEventListener("resize", fit)
  }, [])

  // Telestrations ring slowly rotates while its scene is active.
  useEffect(() => {
    if (scene !== "tele") {
      setTheta(0)
      return
    }
    const id = setInterval(() => setTheta((t) => t + 0.035), 50)
    return () => clearInterval(id)
  }, [scene])

  const mobile = view?.mobile ?? false

  const s = V3_SCENES[scene]
  // No hover on touch — mobile keeps the home composition and chips navigate.
  const halves = mobile
    ? V3_SCENES.home.halves
    : scene === "tele"
      ? v3Tele(theta)
      : s.halves

  const delayFor = (i: number) =>
    scene === "siggy" ? i * 85 : scene === "tele" ? 0 : i * 26

  const launch = () => {
    if (busyRef.current) return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    const stage = stageRef.current
    const dot = dotRef.current
    const ball = ballRef.current
    if (!stage || !dot || !ball) return
    busyRef.current = true

    const sr = stage.getBoundingClientRect()
    const dr = dot.getBoundingClientRect()
    // Physics runs in stage coordinates: the 1280×820 design space on desktop
    // (the stage is visually scaled), real pixels on mobile.
    const k = mobile ? 1 : 1280 / sr.width
    const W = mobile ? sr.width : 1280
    const H = mobile ? sr.height : 820
    const home = {
      x: (dr.left - sr.left + dr.width / 2) * k,
      y: (dr.top - sr.top + dr.height / 2) * k,
    }

    // Snapshot obstacle positions from the DOM so collisions work in both
    // coordinate systems.
    const obstacles = halfRefs.current.map((el) => {
      if (!el) return null
      const r = el.getBoundingClientRect()
      return {
        cx: (r.left - sr.left + r.width / 2) * k,
        cy: (r.top - sr.top + r.height / 2) * k,
        w: r.width * k,
      }
    })

    dot.style.opacity = "0"
    ball.style.display = "block"

    const R = 16
    let x = home.x
    let y = home.y
    let ang = 0
    let vx = (-350 - Math.random() * 450) * (W / 1280)
    let vy = -1050 - Math.random() * 250
    let va = (Math.random() - 0.5) * 700
    const t0 = performance.now()
    let last = t0
    let returning = false
    let retFrom = { x: 0, y: 0 }
    let retStart = 0
    let retAng = 0

    const wobble = (i: number) => {
      const el = halfRefs.current[i]
      if (!el || el.classList.contains(styles.wobble)) return
      el.classList.add(styles.wobble)
      el.addEventListener(
        "animationend",
        () => el.classList.remove(styles.wobble),
        { once: true },
      )
    }

    const tick = (now: number) => {
      const dt = Math.min(32, now - last) / 1000
      last = now

      if (!returning && now - t0 > 4200) {
        returning = true
        retFrom = { x, y }
        retStart = now
        retAng = ang
      }

      if (returning) {
        const p = Math.min(1, (now - retStart) / 450)
        const e = 1 - Math.pow(1 - p, 3)
        x = retFrom.x + (home.x - retFrom.x) * e
        y = retFrom.y + (home.y - retFrom.y) * e
        ang = retAng + (Math.round(retAng / 90) * 90 - retAng) * e
        if (p >= 1) {
          ball.style.display = "none"
          dot.style.opacity = "1"
          dot.classList.add(styles.jelly)
          dot.addEventListener(
            "animationend",
            () => dot.classList.remove(styles.jelly),
            { once: true },
          )
          busyRef.current = false
          return
        }
      } else {
        vy += 2400 * dt
        x += vx * dt
        y += vy * dt
        ang += va * dt
        if (x - R < 6) {
          x = 6 + R
          vx = -vx * 0.78
          va = -va * 0.8
        }
        if (x + R > W - 6) {
          x = W - 6 - R
          vx = -vx * 0.78
          va = -va * 0.8
        }
        if (y - R < 6) {
          y = 6 + R
          vy = -vy * 0.78
        }
        if (y + R > H - 6) {
          y = H - 6 - R
          vy = -vy * 0.78
          vx *= 0.97
          va = vx * 2.4
        }
        for (let i = 0; i < obstacles.length; i++) {
          const o = obstacles[i]
          if (o && Math.hypot(x - o.cx, y - o.cy) < R + o.w * 0.32) wobble(i)
        }
      }

      ball.style.transform = `translate(${x - R}px, ${y - R}px) rotate(${ang}deg)`
      requestAnimationFrame(tick)
    }

    requestAnimationFrame(tick)
  }

  return (
    <main
      className={`${styles.scalerOuter} ${mobile ? styles.isMobile : ""} ${fontClassName}`}
    >
      <div
        className={styles.scaler}
        style={{
          transform: view && !mobile ? `scale(${view.scale})` : undefined,
          visibility: view ? "visible" : "hidden",
        }}
      >
        <div className={styles.stage} ref={stageRef}>
          <header className={styles.top}>
            <Link className={styles.brand} href="/">
              Zach
            </Link>
            <nav className={styles.nav} aria-label="Primary">
              <Link href="/work">work</Link>
              <Link href="/about">about</Link>
              <a className={styles.sayhi} href="mailto:zachoelsner@gmail.com">
                say hi
              </a>
            </nav>
          </header>

          <div className={styles.field} aria-hidden="true">
            {halves.map((h, i) => (
              <div
                key={i}
                ref={(el) => {
                  halfRefs.current[i] = el
                }}
                className={styles.wrap}
                style={
                  mobile
                    ? {
                        // Map the 1280×820 home-scene coords into the fluid
                        // scatter zone (cy spans ~150–370 in the design space).
                        left: `${((h.cx / 1280) * 100).toFixed(2)}%`,
                        top: `${(((h.cy - 150) / 220) * 100).toFixed(2)}%`,
                        transform: "translate(-50%, -50%)",
                      }
                    : {
                        left: h.cx - h.w / 2,
                        top: h.cy - h.w / 4,
                        transitionDelay: `${delayFor(i)}ms`,
                      }
                }
              >
                <div
                  className={styles.half}
                  style={{
                    width: mobile ? h.w * 0.55 : h.w,
                    height: (mobile ? h.w * 0.55 : h.w) / 2,
                    background: h.bg,
                    boxShadow:
                      h.bg === V3.cream
                        ? `4px 4px 0 0 ${V3.tomato}`
                        : `4px 4px 0 0 ${V3.cream}`,
                    transform: `rotate(${h.rot}deg)`,
                    transitionDelay: mobile ? undefined : `${delayFor(i)}ms`,
                  }}
                />
              </div>
            ))}
          </div>

          <div className={styles.center}>
            <div className={styles.kickwrap}>
              <div key={scene} className={styles.kicker} style={{ color: s.acc }}>
                {s.kicker}
              </div>
            </div>
            <h1 className={styles.name}>
              {/* Words are atomic so the name wraps zach / oelsner. on mobile;
                  desktop is nowrap so it renders one line as before. Stagger
                  indices skip 4 (the space) to keep the entrance timing. */}
              <span className={styles.word}>
                {"zach".split("").map((ch, i) => (
                  <Letter key={i} ch={ch} i={i} />
                ))}
              </span>{" "}
              <span className={styles.word}>
                {"oelsner".split("").map((ch, i) => (
                  <Letter key={i} ch={ch} i={i + 5} />
                ))}
                <span
                  ref={dotRef}
                  className={styles.dot}
                  title="click me"
                  role="button"
                  aria-label="Launch"
                  tabIndex={0}
                  onClick={launch}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault()
                      launch()
                    }
                  }}
                  style={{ background: s.acc }}
                />
              </span>
            </h1>
          </div>

          <div ref={ballRef} className={styles.ball} style={{ display: "none" }} />

          <footer className={styles.footer}>
            <div className={styles.chips} onMouseLeave={() => setScene("home")}>
              {V3_CHIPS.map((c) => (
                <Link
                  key={c.key}
                  href={c.href}
                  className={`${styles.chip} ${scene === c.key ? styles.on : ""}`}
                  onMouseEnter={() => !mobile && setScene(c.key)}
                  onFocus={() => !mobile && setScene(c.key)}
                >
                  {c.label}
                </Link>
              ))}
            </div>
            <div className={styles.socials}>
              {SOCIALS.map((social, index) => (
                <span key={social.label}>
                  {index > 0 && <span aria-hidden="true"> · </span>}
                  <a href={social.href} target="_blank" rel="noopener noreferrer">
                    {social.label}
                  </a>
                </span>
              ))}
            </div>
          </footer>
        </div>
      </div>
    </main>
  )
}
