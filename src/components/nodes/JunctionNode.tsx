import React, { memo } from 'react';
import { Handle, Position } from '@xyflow/react'; const JunctionNode = () => {
    return (
        <div className="w-6 h-6 rounded-full bg-gray-800 border-2 border-white shadow-sm flex items-center justify-center relative">
            {/* 
         For a junction, we'll allow connections from all sides. 
         In React Flow, handles can overlap or be visually hidden but functional.
         For simplicity, we place one handle in center or 4 handles.
         Let's try 4 handles to allow easy routing.
       */}
            <Handle type="target" position={Position.Top} id="t" className="w-2 h-2 !bg-transparent opacity-0" />
            <Handle type="target" position={Position.Right} id="r" className="w-2 h-2 !bg-transparent opacity-0" />
            <Handle type="target" position={Position.Bottom} id="b" className="w-2 h-2 !bg-transparent opacity-0" />
            <Handle type="target" position={Position.Left} id="l" className="w-2 h-2 !bg-transparent opacity-0" />

            <Handle type="source" position={Position.Top} id="s-t" className="w-2 h-2 !bg-transparent opacity-0" />
            <Handle type="source" position={Position.Right} id="s-r" className="w-2 h-2 !bg-transparent opacity-0" />
            <Handle type="source" position={Position.Bottom} id="s-b" className="w-2 h-2 !bg-transparent opacity-0" />
            <Handle type="source" position={Position.Left} id="s-l" className="w-2 h-2 !bg-transparent opacity-0" />
        </div>
    );
};

export default memo(JunctionNode);
