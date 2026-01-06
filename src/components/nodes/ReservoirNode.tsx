import React, { memo } from 'react';
import { Handle, Position } from '@xyflow/react';

const ReservoirNode = ({ data }: { data: any }) => {
    return (
        <div className="px-4 py-2 shadow-md rounded-md bg-white border-2 border-blue-500">
            <div className="flex flex-col items-center">
                <div className="w-0 h-0 border-l-[20px] border-l-transparent border-t-[30px] border-t-blue-500 border-r-[20px] border-r-transparent mb-2"></div>
                <div className="font-bold text-xs">{data.label}</div>
            </div>
            <Handle
                type="source"
                position={Position.Bottom}
                className="w-3 h-3 bg-gray-500"
            />
        </div>
    );
};

export default memo(ReservoirNode);
