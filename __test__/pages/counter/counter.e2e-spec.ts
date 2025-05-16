import { test, expect } from "@playwright/test";

test.describe("카운터", () => {
  test("if click +1 button, 1", async ({ page }) => {
    await page.goto("/counter");
    await page.getByRole("button", { name: "+1" }).click();
    await expect(page.getByText("카운터: 1")).toBeVisible();
  });

  test("if click -1 button, 1", async ({ page }) => {
    await page.goto("/counter");
    await page.getByRole("button", { name: "-1" }).click();
    await expect(page.getByText("카운터: -1")).toBeVisible();
  });

  test("if click +1 +1 reset button, 1", async ({ page }) => {
    await page.goto("/counter");
    await page.getByRole("button", { name: "+1" }).click();
    await expect(page.getByText("카운터: 1")).toBeVisible();

    await page.getByRole("button", { name: "+1" }).click();
    await expect(page.getByText("카운터: 2")).toBeVisible();

    await page.getByRole("button", { name: "reset" }).click();
    await expect(page.getByText("카운터: 0")).toBeVisible();
  });
});
