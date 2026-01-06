import { test, expect } from '@playwright/test';

test.describe('Pump Logic', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/');
    });

    test('should toggle pump state on click', async ({ page }) => {
        // Wait for the pump to be visible. Initial state should be OFF (grey border).
        const pumpNode = page.locator('.react-flow__node-pump').first();
        await expect(pumpNode).toBeVisible();

        // Check initial state (assuming OFF has border-gray-400)
        await expect(pumpNode.locator('.border-gray-400')).toBeVisible();

        // Click the pump
        await pumpNode.click();

        // Check new state (assuming ON has border-green-500)
        await expect(pumpNode.locator('.border-green-500')).toBeVisible();

        // Click again to toggle off
        await pumpNode.click();

        // Check state is back to OFF
        await expect(pumpNode.locator('.border-gray-400')).toBeVisible();
    });
});
