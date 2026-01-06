import { test, expect } from '@playwright/test';

test('has title and main heading', async ({ page }) => {
    await page.goto('/');

    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Create Next App/); // Defaults from layout, might upgrade later

    // Expects page to have the React Flow wrapper
    await expect(page.locator('.react-flow-wrapper')).toBeVisible();
});
