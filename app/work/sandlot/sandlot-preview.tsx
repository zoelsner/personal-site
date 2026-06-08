"use client"

import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react"
import Image from "next/image"
import { createPortal } from "react-dom"

import styles from "./sandlot-preview.module.css"

type SandlotShot = {
  label: string
  src: string
  modalSrc: string
  alt: string
  detail: string
}

const dashboardShot: SandlotShot = {
  label: "Today",
  src: "/sandlot/dashboard.jpg",
  modalSrc: "/sandlot/dashboard-mobile.jpg",
  alt: "Sandlot Today screen showing lineup health and injury risk",
  detail: "lineup health and injury queue",
}

const sandlotShots: SandlotShot[] = [
  {
    label: "Adds",
    src: "/sandlot/attention.jpg",
    modalSrc: "/sandlot/attention-detail.jpg",
    alt: "Sandlot best adds screen with waiver swap recommendations",
    detail: "waiver swaps ranked from the latest snapshot",
  },
  {
    label: "Player",
    src: "/sandlot/player-detail.jpg",
    modalSrc: "/sandlot/player-detail-mobile.jpg",
    alt: "Sandlot player detail screen with Skipper take and stats",
    detail: "player context, status, stats, and Skipper take",
  },
  {
    label: "Skipper",
    src: "/sandlot/skipper.jpg",
    modalSrc: "/sandlot/skipper-mobile.jpg",
    alt: "Sandlot Skipper chat screen with weekly matchup assessment",
    detail: "chat-based weekly matchup assessment",
  },
  {
    label: "Reasoning",
    src: "/sandlot/model-reasoning.jpg",
    modalSrc: "/sandlot/model-reasoning-mobile.jpg",
    alt: "Sandlot Skipper model reasoning screen with deep matchup analysis",
    detail: "model reasoning for deep matchup analysis",
  },
]

export function SandlotPreview() {
  const [activeShot, setActiveShot] = useState<SandlotShot | null>(null)
  const returnFocusRef = useRef<HTMLButtonElement | null>(null)
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  const previousOverflowRef = useRef("")

  const closeLightbox = useCallback(() => {
    setActiveShot(null)
  }, [])

  useEffect(() => {
    if (!activeShot) {
      return
    }

    previousOverflowRef.current = document.body.style.overflow
    document.body.style.overflow = "hidden"
    closeButtonRef.current?.focus()

    const handleKeyDown = (event: globalThis.KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault()
        closeLightbox()
      }
    }

    document.addEventListener("keydown", handleKeyDown)

    return () => {
      document.body.style.overflow = previousOverflowRef.current
      document.removeEventListener("keydown", handleKeyDown)
    }
  }, [activeShot, closeLightbox])

  useLayoutEffect(() => {
    if (activeShot || !returnFocusRef.current) {
      return
    }

    returnFocusRef.current.focus()
    returnFocusRef.current = null
  }, [activeShot])

  const openShot = (shot: SandlotShot, trigger: HTMLButtonElement) => {
    returnFocusRef.current = trigger
    setActiveShot(shot)
  }

  const lightbox = activeShot ? (
    <div
      className={styles.backdrop}
      onClick={(event) => {
        if (event.target === event.currentTarget) {
          closeLightbox()
        }
      }}
    >
      <div
        className={styles.dialog}
        role="dialog"
        aria-modal="true"
        aria-label={`${activeShot.label} Sandlot screenshot`}
      >
        <button
          ref={closeButtonRef}
          className={styles.close}
          type="button"
          aria-label="Close screenshot"
          onClick={closeLightbox}
        >
          ✕
        </button>
        <div className={styles.expandedFrame}>
          <Image
            src={activeShot.modalSrc}
            alt={activeShot.alt}
            width={390}
            height={844}
            className={styles.expandedImage}
            sizes="(max-width: 560px) 88vw, 390px"
            priority
          />
        </div>
        <div className={styles.expandedCaption}>
          <span>{activeShot.label}</span>
          <span>{activeShot.detail}</span>
        </div>
      </div>
    </div>
  ) : null

  return (
    <>
      <div className={styles.preview}>
        <div className={styles.topline}>
          <span>live app screenshots</span>
          <span>mobile PWA</span>
        </div>

        <button
          className={styles.heroShot}
          type="button"
          aria-label="Open Today screenshot"
          onClick={(event) => openShot(dashboardShot, event.currentTarget)}
        >
          <Image
            src={dashboardShot.src}
            alt={dashboardShot.alt}
            width={1440}
            height={1000}
            className={styles.heroImage}
            sizes="(max-width: 880px) 90vw, 520px"
          />
          <span className={styles.heroZoomCue}>expand</span>
        </button>

        <div className={styles.heroLabel}>
          <span>Today</span>
          <span>lineup health + injury queue</span>
        </div>

        <div className={styles.thumbGrid}>
          {sandlotShots.map((shot) => (
            <figure key={shot.label} className={styles.thumb}>
              <button
                className={styles.thumbButton}
                type="button"
                aria-label={`Open ${shot.label} screenshot`}
                onClick={(event) => openShot(shot, event.currentTarget)}
              >
                <Image
                  src={shot.src}
                  alt={shot.alt}
                  width={1440}
                  height={1000}
                  className={styles.thumbImage}
                  sizes="(max-width: 880px) 30vw, 160px"
                />
                <span className={styles.zoomCue}>expand</span>
              </button>
              <figcaption>{shot.label}</figcaption>
            </figure>
          ))}
        </div>
      </div>
      {activeShot && typeof document !== "undefined"
        ? createPortal(lightbox, document.body)
        : null}
    </>
  )
}
