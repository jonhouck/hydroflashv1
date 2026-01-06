import React, { memo } from 'react';
import { Handle, Position } from '@xyflow/react';

const TankNode = ({ data }: { data: any }) => {
    const level = data.level !== undefined ? data.level : 50; // Default 50%

    return (
        <div className="px-2 py-2 shadow-md rounded-md bg-white border-2 border-gray-400 w-20 h-32 flex flex-col justify-end relative overflow-hidden">
            <div
                className="absolute bottom-0 left-0 w-full bg-blue-200 transition-all duration-500"
                style={{ height: `${level}%` }}
            ></div>
            <div className="z-10 text-center w-full font-bold text-xs mb-1">{data.label}</div>
            <div className="z-10 text-center w-full text-[10px] text-gray-600">{level}%</div>

            <Handle
                type="target"
                position={Position.Top}
                className="w-3 h-3 bg-gray-500"
            />
            <Handle
                type="source"
                position={Position.Bottom}
                className="w-3 h-3 bg-gray-500"
            />
        </div>
    );
};

export default memo(TankNode);
