import { test, expect } from "@playwright/test";

test.describe("input-text", () => {
  const targetUrl = "/input/text";

  test.describe("input-text-labeled", () => {
    test('if page load, show "값1: ', async ({ page }) => {
      await page.goto(targetUrl);

      await expect(page.getByText("값1: ", { exact: true })).toBeVisible();
    });

    test('if input === "NextJs", show "값1: Nextjs', async ({ page }) => {
      const text = "Nextjs";

      await page.goto(targetUrl);
      await page.getByLabel("라벨").fill(text);
      await expect(
        page.getByText(`값1: ${text}`, { exact: true })
      ).toBeVisible();
    });
  });

  test.describe("div-content-editable", () => {
    test('if page laod, show "값3: ', async ({ page }) => {
      await page.goto(targetUrl);
      await expect(page.getByText("값3: ", { exact: true })).toBeVisible();
    });

    test('if input==="TODO, show "값3: TODO"', async ({ page }) => {
      const text = "TODO";

      await page.goto(targetUrl);
      await page.getByLabel("main").fill(text);
      await expect(page.getByText(`값3: ${text}`)).toBeVisible();
    });
  });
});
