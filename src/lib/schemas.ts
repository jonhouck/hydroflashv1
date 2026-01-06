import { z } from 'zod';

export const NodeSchema = z.object({
    id: z.string().min(1),
    type: z.enum(['Source', 'Tank', 'Junction']),
    elevation: z.number(),
    demand: z.number().optional(),
    head: z.number().optional(),
});

export const LinkSchema = z.object({
    id: z.string().min(1),
    source: z.string().min(1),
    target: z.string().min(1),
    length: z.number().positive(),
    diameter: z.number().positive(),
    roughness: z.number().positive(),
    flow: z.number().optional(),
    status: z.enum(['Open', 'Closed']),
});

export const WaterNetworkSchema = z.object({
    nodes: z.array(NodeSchema),
    links: z.array(LinkSchema),
});
