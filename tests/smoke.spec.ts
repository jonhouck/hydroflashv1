import { test, expect } from '@playwright/test';

test('has title and main heading', async ({ page }) => {
    await page.goto('/');

    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Create Next App/); // Defaults from layout, might upgrade later

    // Expects page to have a heading with the name of Installation.
    await expect(page.getByRole('heading', { name: 'ANTIGRAVITY' })).toBeVisible();
});
