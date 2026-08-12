'use client';

import React from 'react';
import { Handle, Position } from '@xyflow/react';

const SectionNode = ({ data }) => {
  return (
    <div className="relative px-3 py-1 bg-black/70 border border-white/90 rounded text-white font-extrabold text-xs tracking-wider uppercase shadow-md flex items-center justify-center whitespace-nowrap">
      <Handle type="target" position={Position.Left} className="!bg-transparent !border-none !w-0 !h-0" />
      <span>{data.label}</span>
      <Handle type="source" position={Position.Right} className="!bg-transparent !border-none !w-0 !h-0" />
      <Handle type="source" position={Position.Bottom} className="!bg-transparent !border-none !w-0 !h-0" />
    </div>
  );
};

export default SectionNode;