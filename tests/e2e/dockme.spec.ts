import { expect, test } from "@playwright/test"

const dashboardURL = "https://nyc-subway-map.vercel.app/citibike-analysis"

for (const width of [320, 390, 1280]) {
  test(`DockMe explains the evidence and opens the dashboard at ${width}px`, async ({
    page,
    context,
  }) => {
    await page.setViewportSize({ width, height: 844 })
    await page.goto("/projects/dockme")
    await expect(
      page.getByRole("heading", { name: "the last block matters." })
    ).toBeVisible()
    const action = page.getByRole("link", { name: "explore dock history" })
    await expect(action).toHaveAttribute("href", dashboardURL)
    await expect(action).toHaveAttribute("rel", "noopener noreferrer")
    await expect(
      page.getByText("Historical example", { exact: true })
    ).toBeVisible()
    await expect(page.locator("figcaption")).toContainText(
      "September 12–October 3, 2026"
    )
    await expect(page.locator("figcaption")).toContainText(
      "Historical frequency, not a prediction for your arrival"
    )
    await expect(
      page.getByRole("region", { name: "Destination station" })
    ).toContainText("58.9%")
    await expect(
      page.getByRole("region", { name: "Destination station" })
    ).toContainText("96.7%")
    await expect(
      page.getByRole("region", { name: "Destination station" })
    ).toContainText("Returns paused: 3 / 90 checks")
    await expect(
      page.getByRole("article", { name: "Allen St & Rivington St" })
    ).toContainText("37 / 53")
    await expect(
      page.getByRole("article", { name: "Allen St & Rivington St" })
    ).toContainText("219 m straight-line")
    await expect(page.getByText(/All three were unable/)).toContainText(
      "13 of 90"
    )
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth - innerWidth
      )
    ).toBeLessThanOrEqual(1)

    await context.route(dashboardURL, (route) =>
      route.fulfill({
        contentType: "text/html",
        body: "<title>Dashboard destination</title>",
      })
    )
    const popupPromise = page.waitForEvent("popup")
    await action.click()
    const popup = await popupPromise
    await expect(popup).toHaveURL(dashboardURL)
    await expect(page).toHaveURL(/\/projects\/dockme$/)
    await popup.close()
  })
}

test("time windows update matched alternatives and expose the coverage behind a strong-looking result", async ({
  page,
}) => {
  await page.goto("/projects/dockme")
  await page.getByLabel("Day of week").selectOption("5")
  await expect(
    page.getByRole("heading", { name: "Saturday · 6–9 pm" })
  ).toBeVisible()
  await expect(
    page.getByRole("article", { name: "Allen St & Rivington St" })
  ).toContainText("43 / 43")
  await expect(
    page.getByRole("article", { name: "Allen St & Rivington St" })
  ).toContainText("7 / 43")
  await expect(
    page.getByRole("region", { name: "Destination station" })
  ).toContainText("48.3%")
  await expect(page.getByText("89 matched checks across 3 dates")).toBeVisible()
  await page.getByLabel("Show on the time map").selectOption("nearFull")
  await expect(
    page.getByRole("button", {
      name: "Saturday, 6–9 pm, 88.8% 0–2 open docks, 89 checks",
    })
  ).toHaveAttribute("aria-pressed", "true")
  await page.getByText("Coverage, dates & definitions", { exact: true }).click()
  await expect(page.locator("figcaption")).toContainText(
    "Sep 26 (29 checks; 13 with zero docks"
  )
  await expect(page.locator("figcaption")).toContainText(
    "not independent trips"
  )
  await expect(page.locator("figcaption")).toContainText(
    "walking routes and extra walking time have not been verified"
  )
  await page.getByRole("button", { name: /^Saturday, 6–9 am,/ }).click()
  await expect(
    page.getByRole("heading", { name: "Saturday · 6–9 am" })
  ).toBeVisible()
  await expect(
    page.getByRole("button", { name: /^Saturday, 6–9 am,/ })
  ).toHaveAttribute("aria-pressed", "true")
})

test("all 56 windows have valid categories, matched denominators and visible coverage", async ({
  page,
}) => {
  await page.goto("/projects/dockme")
  for (let day = 0; day < 7; day++) {
    await page.getByLabel("Day of week").selectOption(String(day))
    const windows = page
      .getByRole("group", { name: /time windows, New York time/ })
      .getByRole("button")
    for (let hour = 0; hour < 8; hour++) {
      await windows.nth(hour).click()
      await expect(windows.nth(hour)).toHaveAttribute("aria-pressed", "true")
      await expect(page.getByText(/matched checks across/)).toContainText(
        /8[9]|90/
      )
      await expect(page.locator("figure")).not.toContainText("NaN")
      await expect(page.locator("figure")).not.toContainText("undefined")
    }
  }
})

test("DockMe retains visible keyboard controls and respects reduced motion", async ({
  page,
}) => {
  await page.emulateMedia({ reducedMotion: "reduce" })
  await page.goto("/projects/dockme")
  const action = page.getByRole("link", { name: "explore dock history" })
  await action.focus()
  await expect(action).toBeFocused()
  await expect(action).toHaveCSS("outline-style", "solid")
  await expect(action).toHaveCSS("transition-duration", "0s")
  await action.hover()
  await expect(action).toHaveCSS("transform", "none")
  const morning = page.getByRole("button", { name: /^Friday, 6–9 am,/ })
  await morning.focus()
  await expect(morning).toHaveCSS("outline-style", "solid")
  await page.keyboard.press("Enter")
  await expect(
    page.getByRole("heading", { name: "Friday · 6–9 am" })
  ).toBeVisible()
})
