"use client"

import { useEffect, useId, useRef, useState } from "react"

import styles from "./contact-card.module.css"

const EMAIL = "zachoelsner@gmail.com"

export function ContactCard({ className }: { className?: string }) {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const emailRef = useRef<HTMLInputElement>(null)
  const triggerRef = useRef<HTMLButtonElement>(null)
  const titleId = useId()
  const descriptionId = useId()
  const [open, setOpen] = useState(false)
  const [copyStatus, setCopyStatus] = useState("")

  useEffect(() => {
    if (!open) return
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [open])

  const close = () => dialogRef.current?.close()

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL)
      setCopyStatus("email copied.")
    } catch {
      emailRef.current?.focus()
      emailRef.current?.select()
      setCopyStatus("select and copy the address above.")
    }
  }

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        className={`${styles.trigger} ${className ?? ""}`}
        aria-haspopup="dialog"
        onClick={() => {
          setCopyStatus("")
          dialogRef.current?.showModal()
          setOpen(true)
        }}
      >
        say hi
      </button>
      <dialog
        ref={dialogRef}
        className={styles.dialog}
        aria-labelledby={titleId}
        aria-describedby={descriptionId}
        onKeyDown={(event) => {
          if (event.key !== "Tab") return
          const controls = event.currentTarget.querySelectorAll<HTMLElement>("button, a[href], input")
          const first = controls[0]
          const last = controls[controls.length - 1]
          if (event.shiftKey && document.activeElement === first) {
            event.preventDefault()
            last?.focus()
          } else if (!event.shiftKey && document.activeElement === last) {
            event.preventDefault()
            first?.focus()
          }
        }}
        onClose={() => {
          setOpen(false)
          triggerRef.current?.focus()
        }}
        onClick={(event) => {
          if (event.target !== event.currentTarget) return
          const rect = event.currentTarget.getBoundingClientRect()
          if (event.clientX < rect.left || event.clientX > rect.right ||
              event.clientY < rect.top || event.clientY > rect.bottom) close()
        }}
      >
        <button type="button" className={styles.close} aria-label="Close contact card" onClick={close} autoFocus>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="square" aria-hidden="true" focusable="false">
            <path d="m6 6 12 12M18 6 6 18" />
          </svg>
        </button>
        <h2 id={titleId} className={styles.title}>say hi<span>.</span></h2>
        <p id={descriptionId} className={styles.description}>
          Have something in mind? Let’s talk.
        </p>
        <div className={styles.actions}>
          <a className={styles.action} href={`mailto:${EMAIL}`}>email me ↗</a>
          <a className={`${styles.action} ${styles.secondary}`} href="https://www.linkedin.com/in/zacharyoelsner/" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
        </div>
        <div className={styles.emailRow}>
          <input ref={emailRef} aria-label="Email address" value={EMAIL} readOnly onFocus={(event) => event.currentTarget.select()} />
          <button type="button" onClick={copyEmail}>{copyStatus === "email copied." ? "copied ✓" : "copy"}</button>
        </div>
        <p className={styles.status} role="status">{copyStatus}</p>
      </dialog>
    </>
  )
}
