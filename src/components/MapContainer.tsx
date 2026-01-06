'use client';

import React from 'react';
import { ReactFlow, Background, Controls, type Node, type Edge } from '@xyflow/react';
import '@xyflow/react/dist/style.css';

export default function MapContainer() {
    const nodes: Node[] = [];
    const edges: Edge[] = [];

    return (
        <div style={{ height: '100%', width: '100%' }} className="react-flow-wrapper">
            <ReactFlow
                nodes={nodes}
                edges={edges}
                panOnScroll
                zoomOnScroll
            >
                <Background />
                <Controls />
            </ReactFlow>
        </div>
    );
}
