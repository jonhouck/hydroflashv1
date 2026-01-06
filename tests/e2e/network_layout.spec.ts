import { test, expect } from '@playwright/test';

test.describe('Network Layout', () => {
    test('should render a network with at least 10 nodes', async ({ page }) => {
        await page.goto('/');

        // Wait for the React Flow container to be visible
        await expect(page.locator('.react-flow-wrapper')).toBeVisible();

        // Check for nodes
        const nodes = page.locator('.react-flow__node');
        await expect(nodes).toHaveCount(0); // Initially 0 before js loads? No, playwright waits. 
        // Actually, react flow nodes rendered in DOM.
        // Let's waitFor at least one node.
        await page.waitForSelector('.react-flow__node');

        // Now count
        const count = await nodes.count();
        expect(count).toBeGreaterThanOrEqual(10);
    });

    test('should render reservoir and pump nodes', async ({ page }) => {
        await page.goto('/');
        await expect(page.locator('.react-flow__node-reservoir')).toBeVisible();
        await expect(page.locator('.react-flow__node-pump')).toBeVisible();
    });
});
