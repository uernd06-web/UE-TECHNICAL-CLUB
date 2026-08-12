'use client';

import React from 'react';
import { Handle, Position } from '@xyflow/react';

const MemberNode = ({ data }) => {
  return (
    <div className="flex flex-col items-center justify-center relative w-[170px]">
      {/* Top Handle - Invisible */}
      <Handle 
        type="target" 
        position={Position.Top} 
        className="!bg-transparent !border-none !w-1 !h-1 min-w-0 min-h-0" 
      />

      {/* Circle Image Frame with Dashed Border */}
      <div className="w-16 h-16 rounded-full border-2 border-dashed border-white/90 p-0.5 bg-black/40 shadow-xl flex items-center justify-center overflow-hidden">
        <img
          src={data.image || '/placeholder.png'}
          alt={data.name}
          className="w-full h-full object-cover rounded-full"
        />
      </div>

      {/* Red Designation Label */}
      <div className="mt-1.5 bg-gradient-to-r from-red-800 via-red-600 to-red-800 border border-red-400/40 rounded px-2 py-1 text-center text-white shadow-lg w-full">
        <h4 className="text-[11px] font-extrabold truncate leading-tight uppercase tracking-wide">
          {data.name}
        </h4>
        <p className="text-[9px] text-red-100 font-medium truncate mt-0.5">
          {data.role}
        </p>
      </div>

      {/* Bottom Handle - Invisible */}
      <Handle 
        type="source" 
        position={Position.Bottom} 
        className="!bg-transparent !border-none !w-1 !h-1 min-w-0 min-h-0" 
      />
    </div>
  );
};

export default MemberNode;