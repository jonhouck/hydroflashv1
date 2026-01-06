import { describe, it, expect } from 'vitest';
import { NodeSchema, LinkSchema, WaterNetworkSchema } from '../../src/lib/schemas';

describe('Water Network Schemas', () => {
    describe('NodeSchema', () => {
        it('validates a correct node', () => {
            const validNode = {
                id: 'n1',
                type: 'Junction',
                elevation: 100,
                demand: 10,
            };
            const result = NodeSchema.safeParse(validNode);
            expect(result.success).toBe(true);
        });

        it('rejects invalid node type', () => {
            const invalidNode = {
                id: 'n2',
                type: 'InvalidType',
                elevation: 100,
            };
            const result = NodeSchema.safeParse(invalidNode);
            expect(result.success).toBe(false);
        });

        it('requires elevation', () => {
            const invalidNode = {
                id: 'n3',
                type: 'Tank',
            };
            const result = NodeSchema.safeParse(invalidNode);
            expect(result.success).toBe(false);
        });
    });

    describe('LinkSchema', () => {
        it('validates a correct link', () => {
            const validLink = {
                id: 'l1',
                source: 'n1',
                target: 'n2',
                length: 1000,
                diameter: 12,
                roughness: 100,
                status: 'Open',
            };
            const result = LinkSchema.safeParse(validLink);
            expect(result.success).toBe(true);
        });

        it('rejects negative length', () => {
            const invalidLink = {
                id: 'l2',
                source: 'n1',
                target: 'n2',
                length: -100,
                diameter: 12,
                roughness: 100,
                status: 'Open',
            };
            const result = LinkSchema.safeParse(invalidLink);
            expect(result.success).toBe(false);
        });
    });

    describe('WaterNetworkSchema', () => {
        it('validates a correct network', () => {
            const validNetwork = {
                nodes: [
                    { id: 'n1', type: 'Source', elevation: 200 },
                    { id: 'n2', type: 'Junction', elevation: 100, demand: 50 },
                ],
                links: [
                    { id: 'l1', source: 'n1', target: 'n2', length: 500, diameter: 24, roughness: 120, status: 'Open' }
                ]
            };
            const result = WaterNetworkSchema.safeParse(validNetwork);
            expect(result.success).toBe(true);
        });
    });
});
