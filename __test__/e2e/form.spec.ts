import { test, expect } from "@playwright/test";

test.describe("sign-in", () => {
  test.describe("validation", () => {
    test("If select plan type and fill name, submit enabled", async ({
      page,
    }) => {
      const startUrl = "https://vercel.com/signup";

      await page.goto(startUrl);
      await expect(
        page.getByRole("button", { name: "Continue" })
      ).toBeDisabled();

      await page.getByText("I'm working on personal projects").click();

      await page.getByLabel("Your Name").fill("a");

      await expect(
        page.getByRole("button", { name: "Continue" })
      ).toBeEnabled();
    });
  });
});
