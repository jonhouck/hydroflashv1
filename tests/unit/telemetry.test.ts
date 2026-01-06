import { describe, it, expect } from 'vitest';
import { generateTelemetry } from '../../src/lib/telemetry';

describe('generateTelemetry', () => {
    it('should return a number', () => {
        const result = generateTelemetry(100, 5);
        expect(typeof result).toBe('number');
    });

    it('should return a value within the specified variance', () => {
        const base = 100;
        const variance = 5;
        const result = generateTelemetry(base, variance);

        expect(result).toBeGreaterThanOrEqual(base - variance);
        expect(result).toBeLessThanOrEqual(base + variance);
    });

    it('should maintain 2 decimal places precision', () => {
        const result = generateTelemetry(50, 1.1234);
        const decimalPart = result.toString().split('.')[1];
        if (decimalPart) {
            expect(decimalPart.length).toBeLessThanOrEqual(2);
        }
    });
});
