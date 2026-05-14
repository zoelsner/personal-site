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
  test("renders the Dugout homepage cleanly on desktop", async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 720 })
    await page.goto("/")

    const stage = page.locator("main").first()
    const heading = page.getByRole("heading", { name: "zach oelsner." })
    const kicker = page.getByText("food-pilled · since 2020 · LES")
    const chips = page.locator('[aria-label="Featured links"]')

    await expect(stage).toHaveCSS("background-color", "rgb(191, 220, 198)")
    await expect(page.getByRole("link", { name: "Zach" })).toBeVisible()
    await expect(page.getByRole("link", { name: "work" })).toHaveAttribute(
      "href",
      "/work"
    )
    await expect(page.getByRole("link", { name: "about" })).toHaveAttribute(
      "href",
      "/about"
    )
    await expect(page.getByRole("link", { name: "say hi" })).toHaveAttribute(
      "href",
      "mailto:zachoelsner@gmail.com"
    )
    await expect(kicker).toBeVisible()
    await expect(kicker).toHaveCSS("color", "rgb(26, 42, 24)")
    await expect(heading).toBeVisible()
    await expect(chips).toBeVisible()
    await expectSeparated(heading, chips)
    await expectNoHorizontalOverflow(page)
  })

  test("keeps the home composition usable on mobile", async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 })
    await page.goto("/")

    const heading = page.getByRole("heading", { name: "zach oelsner." })
    const chips = page.locator('[aria-label="Featured links"]')

    await expect(heading).toBeVisible()
    await expect(
      page.getByRole("link", { name: "Farm to People" })
    ).toBeVisible()
    await expect(page.getByRole("link", { name: "Sandlot" })).toBeVisible()
    await expect(page.getByRole("link", { name: "Siggy" })).toBeVisible()
    await expect(page.getByRole("link", { name: "Design notes" })).toBeVisible()
    await expectSeparated(heading, chips, 160)
    await expectNoHorizontalOverflow(page)
  })

  test("homepage links resolve to real destinations", async ({
    page,
    context,
  }) => {
    await page.goto("/")

    await expect(
      page.getByRole("link", { name: "Farm to People" })
    ).toHaveAttribute("href", "/work/ftp")
    await expect(page.getByRole("link", { name: "Siggy" })).toHaveAttribute(
      "href",
      "/work/siggy"
    )
    await expect(
      page.getByRole("link", { name: "Design notes" })
    ).toHaveAttribute("href", "/notes")
    await expect(page.getByRole("link", { name: "Sandlot" })).toHaveAttribute(
      "href",
      "https://github.com/zoelsner/baseball"
    )

    const internalRoutes = [
      "/work",
      "/about",
      "/work/ftp",
      "/work/siggy",
      "/notes",
    ]

    for (const route of internalRoutes) {
      const response = await context.request.get(route)
      expect(response.status(), route).toBeLessThan(400)
    }
  })
})
