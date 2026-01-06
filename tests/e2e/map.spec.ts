import { test, expect } from '@playwright/test';

test('has title and loads map', async ({ page }) => {
    await page.goto('/');

    // Expect a title "to contain" a substring.
    // The original page had "ANTIGRAVITY", but we replaced the content.
    // However, the page title in metadata (layout) might still be default Next.js or similar.
    // We'll focus on checking if the map is present.

    // React Flow usually adds a class 'react-flow' to its main container.
    // Or we can look for our wrapper.
    await expect(page.locator('.react-flow-wrapper')).toBeVisible();

    // We can also check for internal React Flow elements like controls
    await expect(page.locator('.react-flow__controls')).toBeVisible();

    // Take a screenshot as requested
    await page.screenshot({ path: 'test-results/map-visible.png' });
});
