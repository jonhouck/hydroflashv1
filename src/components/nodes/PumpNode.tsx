import React, { memo } from 'react';
import { Handle, Position } from '@xyflow/react';

interface PumpNodeProps {
    data: {
        label: string;
        isOn?: boolean;
    };
}

const PumpNode = ({ data }: PumpNodeProps) => {
    const statusColor = data.isOn ? 'border-green-500' : 'border-gray-400';
    const arrowColor = data.isOn ? 'border-l-green-600' : 'border-l-gray-500';

    return (
        <div className={`px-4 py-2 shadow-md rounded-full bg-white border-2 ${statusColor} w-24 h-24 flex items-center justify-center relative transition-colors duration-300`}>
            <div className="flex flex-col items-center">
                <div className={`w-0 h-0 border-t-[10px] border-t-transparent border-l-[15px] ${arrowColor} border-b-[10px] border-b-transparent ml-1 transition-colors duration-300`}></div>
                <div className="font-bold text-xs mt-1">{data.label}</div>
            </div>
            <Handle
                type="target"
                position={Position.Left}
                className="w-3 h-3 bg-gray-500"
            />
            <Handle
                type="source"
                position={Position.Right}
                className="w-3 h-3 bg-gray-500"
            />
        </div>
    );
};

export default memo(PumpNode);
