'use client';

import React, { useMemo } from 'react';
import { ReactFlow } from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import MemberNode from './MemberNode';
import SectionNode from './SectionNode';

const OrgChart = () => {
  const nodeTypes = useMemo(
    () => ({
      member: MemberNode,
      section: SectionNode,
    }),
    []
  );

  const initialNodes = [
    {
      id: '1',
      type: 'member',
      position: { x: 350, y: 40 },
      data: { name: 'Engr. Sheikh Rafat Bin Ali', role: 'Chairman', image: '/ceo.png' },
    },
    {
      id: '2',
      type: 'member',
      position: { x: 150, y: 190 },
      data: { name: 'Engr. Fahim Shahrier Khan', role: 'CPO', image: '/Engr Fahim Shahrier khan (2).png' },
    },
    {
      id: '3',
      type: 'member',
      position: { x: 550, y: 190 },
      data: { name: 'Engr. Sayed Bin Osman', role: 'Chief R&D Officer', image: '/Engr. Sayed Bin Osman.jpg' },
    },
    {
      id: 'sec-1',
      type: 'section',
      position: { x: 20, y: 320 },
      data: { label: 'Advisor Panel' },
    },
  ];

  const initialEdges = [
    { 
      id: 'e1-2', 
      source: '1', 
      target: '2', 
      type: 'step', 
      style: { stroke: '#ffffff', strokeWidth: 2 } 
    },
    { 
      id: 'e1-3', 
      source: '1', 
      target: '3', 
      type: 'step', 
      style: { stroke: '#ffffff', strokeWidth: 2 } 
    },
    { 
      id: 'e2-sec1', 
      source: '2', 
      target: 'sec-1', 
      type: 'step', 
      style: { stroke: '#ffffff', strokeWidth: 2 } 
    },
  ];

  return (
    <div className="w-full h-[700px] bg-[#310C0C] p-4 rounded-2xl relative overflow-hidden shadow-2xl">
      {/* Header Banner Tag */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 z-10 bg-white text-red-900 font-black text-lg md:text-xl px-6 py-1 rounded-md uppercase tracking-wider shadow-xl border border-slate-200">
        Board of Directors
      </div>

      <div className="w-full h-full pointer-events-none">
        <ReactFlow
          nodes={initialNodes}
          edges={initialEdges}
          nodeTypes={nodeTypes}
          fitView
          zoomOnScroll={false}
          zoomOnPinch={false}
          zoomOnDoubleClick={false}
          panOnDrag={false}
          panOnScroll={false}
          nodesDraggable={false}
          nodesConnectable={false}
          elementsSelectable={false}
          preventScrolling={false}
          proOptions={{ hideAttribution: true }}
        >
          {/* <Background /> তুলে দেওয়া হয়েছে যাতে ব্যাকগ্রাউন্ড একদম ক্লিন ডার্ক রেড থাকে */}
        </ReactFlow>
      </div>
    </div>
  );
};

export default OrgChart;