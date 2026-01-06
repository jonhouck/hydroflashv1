import { describe, it, expect } from 'vitest';
import { generateNetworkLayout } from '../../src/lib/networkLayout';

describe('generateNetworkLayout', () => {
    it('should generate at least 10 nodes', () => {
        const { initialNodes } = generateNetworkLayout();
        expect(initialNodes.length).toBeGreaterThanOrEqual(10);
    });

    it('should generate edges connecting components', () => {
        const { initialEdges } = generateNetworkLayout();
        expect(initialEdges.length).toBeGreaterThan(0);
    });

    it('should have a reservoir and a pump', () => {
        const { initialNodes } = generateNetworkLayout();
        const reservoir = initialNodes.find((n) => n.type === 'reservoir');
        const pump = initialNodes.find((n) => n.type === 'pump');
        expect(reservoir).toBeDefined();
        expect(pump).toBeDefined();
    });

    it('should connect reservoir to pump', () => {
        const { initialEdges, initialNodes } = generateNetworkLayout();
        const reservoir = initialNodes.find(n => n.type === 'reservoir');
        const pump = initialNodes.find(n => n.type === 'pump');

        const connection = initialEdges.find(e => e.source === reservoir?.id && e.target === pump?.id);
        expect(connection).toBeDefined();
    });
});
