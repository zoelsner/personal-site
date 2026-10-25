"use client"

import { useEffect, useRef, useSyncExternalStore } from "react"

import styles from "./qook.module.css"

const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)"

function subscribe(onChange: () => void) {
  if (typeof window === "undefined") return () => undefined
  const mq = window.matchMedia(REDUCED_MOTION_QUERY)
  mq.addEventListener("change", onChange)
  return () => mq.removeEventListener("change", onChange)
}

function getSnapshot() {
  return (
    typeof window !== "undefined" &&
    window.matchMedia(REDUCED_MOTION_QUERY).matches
  )
}

/** The 10-second "Dinner, dealt." cut, embedded under the hero actions. */
export function QookFilm() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const reducedMotion = useSyncExternalStore(subscribe, getSnapshot, () => true)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return
    if (reducedMotion) {
      video.pause()
      return
    }
    video.muted = true
    void video.play().catch(() => {
      // Autoplay blocked: the poster and native controls stay available.
    })
  }, [reducedMotion])

  return (
    <video
      ref={videoRef}
      className={styles.film}
      src="/projects/qook/film/dinner-dealt.mp4"
      poster="/projects/qook/film/dinner-dealt-poster.jpg"
      width={720}
      height={900}
      muted
      loop
      playsInline
      controls
      preload="metadata"
      aria-label="Ten-second Qook film: what's for dinner, pick your energy, a hand of dinners, and one planned for Monday."
    />
  )
}
