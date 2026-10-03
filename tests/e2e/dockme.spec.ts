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
      "report generated June 8, 2026"
    )
    await expect(page.locator("figcaption")).toContainText(
      "does not describe availability now"
    )
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth - innerWidth
      )
    ).toBeLessThanOrEqual(1)

    // Verify the actual popup destination without requesting production data.
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

test("DockMe retains a visible keyboard focus target with reduced motion", async ({
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
})
