import { expect, test, type Locator, type Page } from "@playwright/test"

async function expectNoHorizontalOverflow(page: Page) {
  const overflow = await page.evaluate(
    () => document.documentElement.scrollWidth - window.innerWidth
  )

  expect(overflow).toBeLessThanOrEqual(1)
}

async function expectSeparated(above: Locator, below: Locator, gap = 4) {
  const aboveBox = await above.boundingBox()
  const belowBox = await below.boundingBox()

  expect(aboveBox).not.toBeNull()
  expect(belowBox).not.toBeNull()
  expect(belowBox!.y).toBeGreaterThanOrEqual(
    aboveBox!.y + aboveBox!.height + gap
  )
}

test.describe("homepage", () => {
  test("renders the navy homepage cleanly on desktop", async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 720 })
    await page.goto("/")

    const stage = page.locator("main").first()
    const heading = page.locator("h1")
    const kicker = page.getByText("food-pilled")
    const chips = page.locator('[aria-label="Featured links"]')

    await expect(stage).toHaveCSS("background-color", "rgb(26, 37, 64)")
    await expect(page.getByRole("link", { name: "Zach" })).toBeVisible()
    await expect(page.getByRole("link", { name: "projects" })).toHaveAttribute(
      "href",
      "/projects"
    )
    await expect(page.getByRole("link", { name: "about" })).toHaveAttribute(
      "href",
      "/about"
    )
    await expect(page.getByRole("button", { name: "say hi" })).toHaveAttribute(
      "aria-haspopup",
      "dialog"
    )
    await expect(kicker).toBeVisible()
    await expect(heading).toBeVisible()
    await expect(chips).toBeVisible()
    await expectSeparated(heading, chips)
    await expectNoHorizontalOverflow(page)
  })

  test("keeps the home composition usable on mobile", async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 })
    await page.goto("/")

    const heading = page.locator("h1")
    const chips = page.locator('[aria-label="Featured links"]')

    await expect(heading).toBeVisible()
    await expect(
      page.getByRole("link", { name: "Farm to People" })
    ).toBeVisible()
    await expect(page.getByRole("link", { name: "Sandlot" })).toBeVisible()
    await expect(page.getByRole("link", { name: "DockMe" })).toBeVisible()
    await expect(page.getByRole("link", { name: "Siggy" })).toBeVisible()
    await expect(
      page.getByRole("link", { name: "Pass the Doodle" })
    ).toBeVisible()
    await expectSeparated(heading, chips)
    await expectNoHorizontalOverflow(page)
  })

  test("homepage links resolve to real destinations", async ({
    page,
    context,
  }) => {
    await page.goto("/")

    await expect(
      page.getByRole("link", { name: "Farm to People" })
    ).toHaveAttribute("href", "/projects/ftp")
    await expect(page.getByRole("link", { name: "Sandlot" })).toHaveAttribute(
      "href",
      "/projects/sandlot"
    )
    await expect(page.getByRole("link", { name: "DockMe" })).toHaveAttribute(
      "href",
      "/projects/dockme"
    )
    await expect(page.getByRole("link", { name: "Siggy" })).toHaveAttribute(
      "href",
      "/projects/siggy"
    )
    await expect(
      page.getByRole("link", { name: "Pass the Doodle" })
    ).toHaveAttribute("href", "/projects/telestrations")

    const internalRoutes = [
      "/projects",
      "/about",
      "/projects/ftp",
      "/projects/sandlot",
      "/projects/dockme",
      "/projects/siggy",
      "/projects/telestrations",
    ]

    for (const route of internalRoutes) {
      const response = await context.request.get(route)
      expect(response.status(), route).toBeLessThan(400)
    }
  })
})

for (const width of [320, 390, 844, 1280]) {
  test(`intro stays readable through the name animation at ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: 844 })
    await page.goto("/")
    const intro = page.getByText("strategy, operations & analytics by day.", { exact: false })
    const heading = page.locator("h1")
    const chips = page.locator('[aria-label="Featured links"]')
    await expect(intro).toBeVisible()
    for (const time of [0, 150, 350, 600, 950]) {
      await page.evaluate((time) => {
        for (const animation of document.getAnimations()) {
          animation.pause()
          animation.currentTime = time
        }
      }, time)
      await expect(intro).toHaveCSS("opacity", "1")
      await expectSeparated(heading, intro)
      await expectSeparated(intro, chips)
    }
    await expectNoHorizontalOverflow(page)
  })
}

test("reduced motion disables name, dot, and project-scene movement", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" })
  await page.goto("/")
  await page.getByRole("link", { name: "Pass the Doodle", exact: true }).focus()
  const shapes = page.locator('[aria-hidden="true"] > div').first()
  const before = await shapes.getAttribute("style")
  await page.waitForTimeout(150)
  expect(await shapes.getAttribute("style")).toBe(before)
  expect(await page.evaluate(() => document.getAnimations().length)).toBe(0)
  await page.getByRole("button", { name: "Launch", exact: true }).click()
  await expect(page.getByRole("button", { name: "Launch", exact: true })).toHaveCSS("opacity", "1")
})

test("home sharing metadata includes a working preview image", async ({ page, request }) => {
  await page.goto("/")
  await expect(page).toHaveTitle(/Zach Oelsner.*Independent builder/)
  await expect(page.locator('meta[name="description"]')).toHaveAttribute("content", /Strategy, operations & analytics at Protiviti/)
  await expect(page.locator('meta[property="og:title"]')).toHaveAttribute("content", /Zach Oelsner/)
  const image = await page.locator('meta[property="og:image"]').getAttribute("content")
  expect(image).toBeTruthy()
  const response = await request.get(new URL(image!).pathname)
  expect(response.ok()).toBeTruthy()
  expect(response.headers()["content-type"]).toContain("image/png")
})

for (const width of [390, 1280]) {
  test(`content and navigation work at ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: 844 })
    for (const route of ["/about", "/projects", "/projects/ftp", "/projects/sandlot", "/projects/dockme", "/projects/qook", "/projects/siggy", "/projects/telestrations"]) {
      await page.goto(route)
      await expect(page.locator("h1")).toBeVisible()
      await expectNoHorizontalOverflow(page)
      await expect(page.getByRole("navigation", { name: "Primary" }).getByRole("link", { name: "about" })).toHaveAttribute("href", "/about")
    }
    await page.getByRole("navigation", { name: "Primary" }).getByRole("link", { name: "about" }).click()
    await expect(page).toHaveURL(/\/about$/)
    await expect(page.getByText("I share the Chief of Staff role", { exact: false })).toBeVisible()
    await page.getByRole("link", { name: "independent projects" }).click()
    await expect(page).toHaveURL(/\/projects$/)
  })
}
