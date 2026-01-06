'use client';

import React from 'react';
import { ReactFlow, Controls, Background, useNodesState, useEdgesState, Node as FlowNode } from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import ReservoirNode from './nodes/ReservoirNode';
import PumpNode from './nodes/PumpNode';
import TankNode from './nodes/TankNode';
import JunctionNode from './nodes/JunctionNode';

import { generateNetworkLayout } from '@/lib/networkLayout';
import { useInterval } from '@/hooks/useInterval';

const nodeTypes = {
    reservoir: ReservoirNode,
    pump: PumpNode,
    tank: TankNode,
    junction: JunctionNode,
};

const { initialNodes, initialEdges } = generateNetworkLayout();

export default function MapContainer() {
    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
    const [edges, , onEdgesChange] = useEdgesState(initialEdges);

    // function to handle node clicks
    const onNodeClick = (_event: React.MouseEvent, node: FlowNode) => {
        if (node.type === 'pump') {
            setNodes((nds) =>
                nds.map((nd) => {
                    if (nd.id === node.id) {
                        return {
                            ...nd,
                            data: {
                                ...nd.data,
                                isOn: !nd.data.isOn,
                            },
                        };
                    }
                    return nd;
                })
            );
        }
    };

    useInterval(async () => {
        try {
            const response = await fetch('/api/telemetry');
            const data = await response.json();

            setNodes((nds) =>
                nds.map((node) => {
                    const sensorData = data[node.id];
                    if (sensorData) {
                        return {
                            ...node,
                            data: {
                                ...node.data,
                                ...sensorData,
                            },
                        };
                    }
                    return node;
                })
            );
        } catch (error) {
            console.error('Failed to fetch telemetry:', error);
        }
    }, 2000);

    return (
        <div style={{ height: '100%', width: '100%' }} className="react-flow-wrapper">
            <ReactFlow
                nodes={nodes}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                onNodeClick={onNodeClick}
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
