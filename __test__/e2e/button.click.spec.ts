import { test, expect } from "@playwright/test";

test.describe("button click", () => {
  test("open preferences menu", async ({ page }) => {
    const startUrl = "http://localhost:3000/";

    await page.goto(startUrl);

    await test.step("If click nextjs icon, show dropdown menu", async () => {
      await page
        .getByRole("button", { name: "Open Next.js Dev Tools" })
        .click();

      await expect(page.getByText("Preferences")).toBeVisible();
    });

    await test.step("If click preferences icon, show preferences menu", async () => {
      await page.getByText("Preferences").click();

      await expect(
        page.getByRole("heading", { name: "Preferences" })
      ).toBeVisible();
    });
  });
});
