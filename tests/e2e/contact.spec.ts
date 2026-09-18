import { expect, test } from "@playwright/test"

for (const width of [320, 390, 1280]) {
  test(`contact card works at ${width}px`, async ({ page, context }) => {
    await context.grantPermissions(["clipboard-read", "clipboard-write"])
    await page.setViewportSize({ width, height: 844 })
    await page.goto("/")
    const trigger = page.getByRole("button", { name: "say hi" })
    await trigger.click()
    const dialog = page.getByRole("dialog", { name: "say hi." })
    await expect(dialog).toBeVisible()
    const box = await dialog.boundingBox()
    expect(box!.x).toBeGreaterThanOrEqual(0)
    expect(box!.x + box!.width).toBeLessThanOrEqual(width)
    await expect(dialog.getByRole("link", { name: "email me" })).toHaveAttribute("href", "mailto:zachoelsner@gmail.com")
    await expect(dialog.getByRole("link", { name: "LinkedIn" })).toHaveAttribute("href", "https://www.linkedin.com/in/zacharyoelsner/")
    await expect(dialog.getByRole("button", { name: "Close contact card" })).toBeFocused()
    await page.keyboard.press("Shift+Tab")
    await expect(dialog.getByRole("button", { name: "copy", exact: true })).toBeFocused()
    await page.keyboard.press("Tab")
    await expect(dialog.getByRole("button", { name: "Close contact card" })).toBeFocused()
    await dialog.getByRole("button", { name: "copy", exact: true }).click()
    await expect(dialog.getByRole("status")).toHaveText("email copied.")
    expect(await page.evaluate(() => navigator.clipboard.readText())).toBe("zachoelsner@gmail.com")
    await page.keyboard.press("Escape")
    await expect(dialog).not.toBeVisible()
    await expect(trigger).toBeFocused()
    await trigger.click()
    await expect(dialog.getByRole("status")).toBeEmpty()
    await page.mouse.click(2, 2)
    await expect(dialog).not.toBeVisible()
  })
}

test("copy failure selects the address and gives useful feedback", async ({ page }) => {
  await page.goto("/")
  await page.evaluate(() => {
    Object.defineProperty(navigator.clipboard, "writeText", { value: () => Promise.reject(new Error("Blocked")) })
  })
  await page.getByRole("button", { name: "say hi" }).click()
  await page.getByRole("button", { name: "copy", exact: true }).click()
  await expect(page.getByRole("status")).toHaveText("select and copy the address above.")
  await expect(page.getByRole("textbox", { name: "Email address" })).toBeFocused()
})

test("contact card opens on shared page shells with reduced motion", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" })
  for (const route of ["/about", "/projects", "/projects/ftp"]) {
    await page.goto(route)
    await page.getByRole("button", { name: "say hi" }).click()
    const dialog = page.getByRole("dialog")
    await expect(dialog).toBeVisible()
    expect(await dialog.evaluate(el => el.getAnimations({ subtree: true }).some(animation => animation instanceof CSSAnimation))).toBe(false)
    await dialog.getByRole("button", { name: "Close contact card" }).click()
    await expect(dialog).not.toBeVisible()
    await expect(page.locator("body")).not.toHaveCSS("overflow", "hidden")
  }
})
