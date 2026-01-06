import { test, expect } from '@playwright/test';

test.describe('Telemetry API', () => {
    test('should return mock telemetry data with status 200', async ({ request }) => {
        const response = await request.get('/api/telemetry');
        expect(response.ok()).toBeTruthy();
        expect(response.status()).toBe(200);

        const data = await response.json();

        // Validation of structure
        expect(data).toHaveProperty('res-001');
        expect(data['res-001']).toHaveProperty('pressure');
        expect(data['res-001']).toHaveProperty('flow');

        expect(data).toHaveProperty('pump-001');
        expect(data['pump-001']).toHaveProperty('status');
    });
});
