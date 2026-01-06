'use client';

import React from 'react';
import { ReactFlow, Controls, Background, useNodesState, useEdgesState } from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import ReservoirNode from './nodes/ReservoirNode';
import PumpNode from './nodes/PumpNode';
import TankNode from './nodes/TankNode';
import JunctionNode from './nodes/JunctionNode';

const nodeTypes = {
    reservoir: ReservoirNode,
    pump: PumpNode,
    tank: TankNode,
    junction: JunctionNode,
};

const initialNodes = [
    { id: '1', position: { x: 100, y: 100 }, data: { label: 'Source Lake' }, type: 'reservoir' },
    { id: '2', position: { x: 300, y: 200 }, data: { label: 'Main Pump' }, type: 'pump' },
    { id: '3', position: { x: 500, y: 100 }, data: { label: 'Storage Tank A', level: 75 }, type: 'tank' },
    { id: '4', position: { x: 500, y: 300 }, data: { label: 'Storage Tank B', level: 30 }, type: 'tank' },
    { id: '5', position: { x: 300, y: 100 }, data: { label: 'Junction 1' }, type: 'junction' },
];

const initialEdges = [
    { id: 'e1-5', source: '1', target: '5' },
    { id: 'e5-2', source: '5', target: '2' },
    { id: 'e2-3', source: '2', target: '3' },
    { id: 'e2-4', source: '2', target: '4' },
];

export default function MapContainer() {
    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

    return (
        <div style={{ height: '100%', width: '100%' }} className="react-flow-wrapper">
            <ReactFlow
                nodes={nodes}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                nodeTypes={nodeTypes}
                fitView
                panOnScroll
                zoomOnScroll
            >
                <Background />
                <Controls />
            </ReactFlow>
        </div>
    );
}
