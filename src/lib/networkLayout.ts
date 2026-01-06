import { Node, Edge } from '@xyflow/react';

interface NetworkLayout {
    initialNodes: Node[];
    initialEdges: Edge[];
}

export const generateNetworkLayout = (): NetworkLayout => {
    const nodes: Node[] = [];
    const edges: Edge[] = [];

    // 1. Root Reservoir
    const reservoirId = 'res-1';
    nodes.push({
        id: reservoirId,
        position: { x: 100, y: 100 },
        data: { label: 'Main Reservoir' },
        type: 'reservoir',
    });

    // 2. Main Pump
    const pumpId = 'pump-1';
    nodes.push({
        id: pumpId,
        position: { x: 300, y: 100 },
        data: { label: 'Main Pump' },
        type: 'pump',
    });

    edges.push({
        id: `e-${reservoirId}-${pumpId}`,
        source: reservoirId,
        target: pumpId,
    });

    // 3. Distribution Grid (3x3 grid for simplicity, total > 10 nodes)
    const rows = 3;
    const cols = 3;
    const startX = 500;
    const startY = 100;
    const spacingX = 200;
    const spacingY = 150;

    let previousNodeId = pumpId;

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            const isTank = (r + c) % 3 === 0; // some mix of tanks and junctions
            const nodeId = `grid-${r}-${c}`;

            nodes.push({
                id: nodeId,
                position: { x: startX + c * spacingX, y: startY + r * spacingY },
                data: { label: isTank ? `Tank ${r}-${c}` : `Junction ${r}-${c}`, level: isTank ? 50 : undefined },
                type: isTank ? 'tank' : 'junction',
            });

            // Connect to the previous node in the sequence (simple linear for now to ensure connectivity)
            // Or connect to the "left" node if c > 0, and "top" node if r > 0 to make a grid mesh?
            // Requirement: Hierarchy. Pump -> Grid.
            // Let's connect the first column to the pump, effectively.

            if (c === 0 && r === 0) {
                edges.push({
                    id: `e-${pumpId}-${nodeId}`,
                    source: pumpId,
                    target: nodeId
                });
            } else if (c > 0) {
                // Connect to left neighbor
                const leftNodeId = `grid-${r}-${c - 1}`;
                edges.push({
                    id: `e-${leftNodeId}-${nodeId}`,
                    source: leftNodeId,
                    target: nodeId
                });
            } else if (r > 0) {
                // If first column but not first row, connect to node above
                const topNodeId = `grid-${r - 1}-${c}`;
                edges.push({
                    id: `e-${topNodeId}-${nodeId}`,
                    source: topNodeId,
                    target: nodeId
                });
            }
        }
    }

    return { initialNodes: nodes, initialEdges: edges };
};
