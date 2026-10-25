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
    <figure className={styles.film} aria-labelledby="qook-film-title">
      <video
        ref={videoRef}
        className={styles.filmVideo}
        src="/projects/qook/film/dinner-dealt.mp4"
        poster="/projects/qook/film/dinner-dealt-poster.jpg"
        width={720}
        height={900}
        muted
        loop
        playsInline
        controls
        preload="metadata"
        aria-describedby="qook-film-caption"
      />
      <figcaption className={styles.filmCopy}>
        <span className={styles.filmKicker}>10-second cut</span>
        <h4 id="qook-film-title" className={styles.filmTitle}>
          Dinner, dealt.
        </h4>
        <p id="qook-film-caption" className={styles.filmBody}>
          What’s for dinner, a pick of your energy, a hand of dinners, and one
          planned for Monday, made from Qook’s own watercolor meal art and app
          screens.
        </p>
        <p className={styles.filmNote}>
          Sound effects only; unmute with the player controls. Screens are from
          an earlier development build and may differ from the beta.
        </p>
      </figcaption>
    </figure>
  )
}
