"use client"

import Image from "next/image"
import { useRef, useState, type KeyboardEvent, type ReactNode } from "react"

import project from "@/components/project-page.module.css"
import styles from "./qook-field-notes.module.css"

type Tab = { id: string; label: string; content: ReactNode }

function StoryTabs({ headingId, tabs }: { headingId: string; tabs: Tab[] }) {
  const [active, setActive] = useState(0)
  const buttons = useRef<(HTMLButtonElement | null)[]>([])

  function navigate(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    let next: number
    switch (event.key) {
      case "ArrowLeft":
        next = (index + tabs.length - 1) % tabs.length
        break
      case "ArrowRight":
        next = (index + 1) % tabs.length
        break
      case "Home":
        next = 0
        break
      case "End":
        next = tabs.length - 1
        break
      default:
        return
    }
    event.preventDefault()
    setActive(next)
    buttons.current[next]?.focus()
  }

  return (
    <>
      <div className={styles.tabs} role="tablist" aria-labelledby={headingId}>
        {tabs.map(({ id, label }, index) => (
          <button
            className={styles.tab}
            key={id}
            type="button"
            role="tab"
            id={`qook-notes-tab-${id}`}
            aria-controls={`qook-notes-${id}`}
            aria-selected={active === index}
            tabIndex={active === index ? 0 : -1}
            ref={(node) => {
              buttons.current[index] = node
            }}
            onClick={() => setActive(index)}
            onKeyDown={(event) => navigate(event, index)}
          >
            {label}
          </button>
        ))}
      </div>
      {tabs.map(({ id, content }, index) => (
        <div
          className={styles.panel}
          key={id}
          role="tabpanel"
          id={`qook-notes-${id}`}
          aria-labelledby={`qook-notes-tab-${id}`}
          tabIndex={0}
          hidden={active !== index}
        >
          {content}
        </div>
      ))}
    </>
  )
}

const tunaIngredients = "Canned tuna, rice, cucumber, and chili-lime mayo."
const steps = [
  "Season tomato sauce with smoked paprika",
  "Microwave sauce until bubbling",
  "Crack eggs over the sauce",
  "Microwave until whites set",
  "Serve with feta and flatbread",
]

function ArtBefore() {
  return (
    <>
      <div className={styles.pair}>
        <div className={styles.card}>
          <div className={styles.cardTop}>
            <p className={styles.label}>Illustrative weeknight card</p>
            <svg
              aria-hidden="true"
              className={styles.sketch}
              viewBox="0 0 70 48"
            >
              <ellipse cx="33" cy="17" rx="24" ry="8" />
              <path d="M9 17v14c0 11 48 11 48 0V17M13 25c8 6 31 7 40 1M13 29c8 6 31 7 40 1" />
              <ellipse cx="33" cy="17" rx="7" ry="2.5" />
            </svg>
          </div>
          <p className={styles.dish}>Tuna Rice Bowl</p>
          <p>{tunaIngredients}</p>
        </div>
        <div className={styles.card}>
          <div className={styles.cardTop}>
            <p className={styles.label}>The painted dish</p>
            <svg
              aria-hidden="true"
              className={styles.sketch}
              viewBox="0 0 70 48"
            >
              <path d="M6 27c2-7 20-18 35-18 9 0 19 9 22 15 2 6-13 9-24 10-17 1-33 0-33-7zM6 27l1 7c3 8 49 8 56-3l.5-6M21 23l9-7m1 10 12-10m-4 12 12-10M20 34l2 3m8-3 2 4m8-4 2 3m7-5 2 3" />
            </svg>
          </div>
          <p className={styles.dish}>A seared tuna steak</p>
          <p>
            Given only the title, the image model upgraded canned tuna to a
            restaurant steak.
          </p>
        </div>
      </div>
      <p className={styles.note}>
        I reconstructed the card and sketches here. Commit <code>0ef20de</code>{" "}
        (Jul 13) records the canned tuna turning into a seared steak.
      </p>
    </>
  )
}

function ArtAfter() {
  return (
    <>
      <div className={styles.pair}>
        <div className={styles.card}>
          <p className={styles.label}>Example dish contract</p>
          <dl className={styles.contract}>
            <dt className={styles.term}>Ingredients</dt>
            <dd>{tunaIngredients}</dd>
            <dt className={styles.term}>Finished form</dt>
            <dd>Flaked tuna tossed in mayo, sliced cucumber.</dd>
            <dt className={styles.term}>Looks like</dt>
            <dd>Small pale flakes flecked with chili over warm rice.</dd>
            <dt className={styles.term}>Plating</dt>
            <dd>
              A loose mound of flaked tuna in a bowl. No whole steaks or
              fillets.
            </dd>
          </dl>
        </div>
        <div className={styles.card}>
          <div className={styles.cardTop}>
            <p className={styles.label}>What the contract asks for</p>
            <svg
              aria-hidden="true"
              className={styles.sketch}
              viewBox="0 0 70 48"
            >
              <path d="M8 22c0 13 11 20 27 20s27-7 27-20" />
              <ellipse cx="35" cy="22" rx="27" ry="8" />
              <path d="M22 21c2-4 7-5 11-3 3-3 9-3 12 0 3-1 6 1 7 3M25 23l4-1m6 1 5-2m4 2 4-1M28 19l3 1m6-1 3 1" />
            </svg>
          </div>
          <p className={styles.dish}>Flaked tuna rice bowl</p>
          <p>
            The image model is told the finished form instead of guessing it.
          </p>
          <figure className={styles.reference}>
            <Image
              src="/projects/qook/canon-v2.png"
              width={60}
              height={60}
              alt="Qook watercolor style reference"
            />
            <figcaption>
              Style reference only (a pork belly bowl), not the tuna output.
            </figcaption>
          </figure>
        </div>
      </div>
      <p className={styles.note}>
        My July patch put ingredient names in the image prompt. The dish
        contract goes further. The proposal call decides the finished form once,
        and both the recipe writer and the painter read that same saved record.
      </p>
    </>
  )
}

function RecipeCard() {
  return (
    <div className={`${styles.card} ${styles.pair}`}>
      <div>
        <p className={styles.label}>The card</p>
        <p className={styles.dish}>Microwave Shakshuka Eggs</p>
        <p className={styles.meta}>Serves 2 · 12 min · Brain is fried</p>
      </div>
      <ol className={styles.steps}>
        {steps.map((step) => (
          <li key={step}>{step}</li>
        ))}
      </ol>
    </div>
  )
}

function RecipeFailure() {
  return (
    <div className={styles.card}>
      <p className={styles.label}>Recorded model response</p>
      <p className={styles.dish}>Microwave Shakshuka Eggs</p>
      <p>
        Serves 2 · <mark className={styles.failure}>15 min</mark> (card promised
        12).
      </p>
      <p>
        It parsed cleanly and kept all five ingredients. It just cooked them on
        the stove.
      </p>
      <p className={styles.promised}>
        The card promised “{steps[1]}” and “{steps[3]}”.
      </p>
      <blockquote className={styles.quote}>
        “Pour the tomato sauce into a{" "}
        <mark className={styles.failure}>covered skillet</mark> and stir in the
        smoked paprika. Set{" "}
        <mark className={styles.failure}>over medium heat</mark>…”
        <br />
        “Cover the skillet and cook over{" "}
        <mark className={styles.failure}>medium-low heat</mark>…”
      </blockquote>
    </div>
  )
}

function RecipeFix() {
  return (
    <div className={styles.card}>
      <div className={styles.pair}>
        <div>
          <p className={styles.label}>Check against the card</p>
          <p>
            Once the response parses, the check flags the extra three minutes,
            the missing microwave step, the added stovetop, and too many
            sections and steps for the tier.
          </p>
        </div>
        <div>
          <p className={styles.label}>One correction</p>
          <p>
            The model gets the original card and those errors. I used a
            handwritten test fixture for the corrected reply.
          </p>
          <p className={styles.correction}>15 → 12 min · skillet → microwave</p>
        </div>
      </div>
      <p className={styles.rule}>
        If the second answer still conflicts with the card, Qook returns an
        error.
      </p>
    </div>
  )
}

export function QookFieldNotes() {
  return (
    <section className={styles.notes} aria-labelledby="qook-notes-heading">
      <h3 className={project.sectionH} id="qook-notes-heading">
        <span className={project.dotmark} aria-hidden="true" />
        field notes
      </h3>
      <p className={styles.status}>
        Both fixes are tested offline in the repo; not yet in the beta build.
      </p>

      <article className={styles.story} aria-labelledby="qook-notes-art">
        <div>
          <h4 className={styles.title} id="qook-notes-art">
            Canned tuna, painted as a steak
          </h4>
          <p className={styles.intro}>
            A can of tuna and a cut of fresh tuna can both end up in a rice
            bowl. I split deciding what it looks like from painting it.
          </p>
        </div>
        <div className={styles.demo}>
          <StoryTabs
            headingId="qook-notes-art"
            tabs={[
              {
                id: "before",
                label: "Before: title only",
                content: <ArtBefore />,
              },
              {
                id: "after",
                label: "After: dish contract",
                content: <ArtAfter />,
              },
            ]}
          />
          <p className={styles.boundary}>
            In local checks, recipe text that contradicts the contract fails,
            such as “serve the tuna as a whole steak” or a step that crumbles
            turkey meatballs. Nobody checks the painted pixels yet.
          </p>
        </div>
      </article>

      <article className={styles.story} aria-labelledby="qook-notes-recipe">
        <div>
          <h4 className={styles.title} id="qook-notes-recipe">
            The microwave shakshuka that asked for a skillet
          </h4>
          <p className={styles.intro}>
            The recipe writer got the eggs and tomato sauce right. I added a
            deterministic check against the card so Qook could catch a change in
            how dinner gets cooked.
          </p>
        </div>
        <div className={styles.demo}>
          <StoryTabs
            headingId="qook-notes-recipe"
            tabs={[
              { id: "card", label: "1. The card", content: <RecipeCard /> },
              {
                id: "failure",
                label: "2. Recorded failure",
                content: <RecipeFailure />,
              },
              { id: "fix", label: "3. The fix", content: <RecipeFix /> },
            ]}
          />
          <p className={styles.boundary}>
            This catches a microwave promise written on the card. If “microwave
            only” lives just in saved kitchen tools, an oven recipe can still
            get through.
          </p>
        </div>
      </article>
    </section>
  )
}
