"use client"

import {
  type KeyboardEvent,
  type ReactNode,
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  useSyncExternalStore,
} from "react"
import { createPortal } from "react-dom"

import styles from "./video-lightbox.module.css"

type VideoLightboxProps = {
  children: ReactNode
  videoSrc: string
  tiktokUrl: string
}

const FOCUSABLE_SELECTOR = [
  "a[href]",
  "button:not([disabled])",
  "video[controls]",
  "input:not([disabled])",
  "select:not([disabled])",
  "textarea:not([disabled])",
  '[tabindex]:not([tabindex="-1"])',
].join(",")

const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)"

function subscribeToReducedMotion(onStoreChange: () => void) {
  if (typeof window === "undefined") {
    return () => undefined
  }

  const mediaQuery = window.matchMedia(REDUCED_MOTION_QUERY)

  mediaQuery.addEventListener("change", onStoreChange)
  return () => mediaQuery.removeEventListener("change", onStoreChange)
}

function getReducedMotionSnapshot() {
  return (
    typeof window !== "undefined" &&
    window.matchMedia(REDUCED_MOTION_QUERY).matches
  )
}

export function VideoLightbox({
  children,
  videoSrc,
  tiktokUrl,
}: VideoLightboxProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [videoError, setVideoError] = useState(false)
  const prefersReducedMotion = useSyncExternalStore(
    subscribeToReducedMotion,
    getReducedMotionSnapshot,
    () => false
  )
  const triggerRef = useRef<HTMLDivElement>(null)
  const dialogRef = useRef<HTMLDivElement>(null)
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const previousOverflowRef = useRef("")
  const shouldReturnFocusRef = useRef(false)

  const resetVideo = useCallback(() => {
    const video = videoRef.current

    if (!video) {
      return
    }

    video.pause()
    video.currentTime = 0
    video.muted = false
  }, [])

  const closeLightbox = useCallback(() => {
    shouldReturnFocusRef.current = true
    resetVideo()
    setIsOpen(false)
  }, [resetVideo])

  const openLightbox = useCallback(() => {
    setVideoError(false)
    setIsOpen(true)
  }, [])

  useEffect(() => {
    if (!isOpen) {
      return
    }

    previousOverflowRef.current = document.body.style.overflow
    document.body.style.overflow = "hidden"
    closeButtonRef.current?.focus()

    return () => {
      document.body.style.overflow = previousOverflowRef.current
    }
  }, [isOpen])

  useLayoutEffect(() => {
    if (isOpen || !shouldReturnFocusRef.current) {
      return
    }

    shouldReturnFocusRef.current = false
    triggerRef.current?.focus()
  }, [isOpen])

  useEffect(() => {
    if (!isOpen || prefersReducedMotion || videoError) {
      return
    }

    const video = videoRef.current

    if (!video) {
      return
    }

    video.muted = false

    const playWithSound = async () => {
      try {
        await video.play()
      } catch {
        video.muted = true

        try {
          await video.play()
        } catch {
          // Native controls stay visible when autoplay is blocked entirely.
        }
      }
    }

    void playWithSound()
  }, [isOpen, prefersReducedMotion, videoError])

  useEffect(() => {
    if (!isOpen) {
      return
    }

    const handleKeyDown = (event: globalThis.KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault()
        closeLightbox()
        return
      }

      if (event.key !== "Tab") {
        return
      }

      const dialog = dialogRef.current

      if (!dialog) {
        return
      }

      const focusableElements = Array.from(
        dialog.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR)
      ).filter((element) => !element.hasAttribute("disabled"))

      if (focusableElements.length === 0) {
        event.preventDefault()
        return
      }

      const firstElement = focusableElements[0]
      const lastElement = focusableElements[focusableElements.length - 1]
      const activeElement = document.activeElement

      if (event.shiftKey) {
        if (activeElement === firstElement || !dialog.contains(activeElement)) {
          event.preventDefault()
          lastElement.focus()
        }

        return
      }

      if (activeElement === lastElement || !dialog.contains(activeElement)) {
        event.preventDefault()
        firstElement.focus()
      }
    }

    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [closeLightbox, isOpen])

  const handleTriggerKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault()
      openLightbox()
    }
  }

  const hasTiktokUrl = /^https?:\/\//.test(tiktokUrl)

  const lightbox = (
    <div
      className={styles.backdrop}
      onClick={(event) => {
        if (event.target === event.currentTarget) {
          closeLightbox()
        }
      }}
    >
      <div
        ref={dialogRef}
        className={styles.dialog}
        role="dialog"
        aria-modal="true"
        aria-label="Farm to People demo video"
      >
        <button
          ref={closeButtonRef}
          className={styles.close}
          type="button"
          aria-label="Close demo video"
          onClick={closeLightbox}
        >
          ✕
        </button>
        <div className={styles.videoShell}>
          <video
            ref={videoRef}
            className={styles.video}
            src={videoSrc}
            controls
            playsInline
            preload="metadata"
            onError={() => setVideoError(true)}
            onLoadedData={() => setVideoError(false)}
          />
          {videoError ? (
            <div className={styles.videoFallback} role="status">
              <span className={styles.fallbackPlay} aria-hidden="true">
                <span className={styles.fallbackPlayIcon} />
              </span>
              <span className={styles.fallbackTitle}>
                demo video is still uploading
              </span>
              <span className={styles.fallbackCopy}>
                The player is wired up. Add the MP4 at {videoSrc} and this will
                play here.
              </span>
            </div>
          ) : null}
        </div>
        {hasTiktokUrl ? (
          <a
            className={styles.tiktokLink}
            href={tiktokUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            watch on TikTok →
          </a>
        ) : (
          <span className={styles.tiktokPending}>TikTok link coming soon</span>
        )}
      </div>
    </div>
  )

  return (
    <>
      <div
        ref={triggerRef}
        className={styles.trigger}
        role="button"
        tabIndex={0}
        aria-label="Watch the Farm to People demo"
        onClick={openLightbox}
        onKeyDown={handleTriggerKeyDown}
      >
        <div className={styles.poster}>{children}</div>
        <div className={styles.idleCue} aria-hidden="true">
          <span className={styles.idlePlay}>
            <span className={styles.idlePlayIcon} />
          </span>
          <span>watch demo · 24s</span>
        </div>
        <div className={styles.affordance} aria-hidden="true">
          <span className={styles.playButton}>
            <span className={styles.playIcon} />
          </span>
          <span className={styles.watchLabel}>watch the 24s demo</span>
        </div>
      </div>
      {isOpen && typeof document !== "undefined"
        ? createPortal(lightbox, document.body)
        : null}
    </>
  )
}
