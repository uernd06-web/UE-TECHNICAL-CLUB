'use client';

import React, { useMemo } from 'react';
import ReactFlow, {
  Background,
  Controls,
  Handle,
  Position,
  useNodesState,
  useEdgesState,
  ReactFlowProvider,
} from 'reactflow';
import dagre from '@dagrejs/dagre';
import 'reactflow/dist/style.css';

// ১. কাস্টম নোড (প্যাডিং ও সাইজ ফিক্স করা হয়েছে যেন নাম কেটে না যায়)
const MemberNode = ({ data }) => (
  <div className="flex flex-col items-center justify-center w-40 p-1">
    <Handle type="target" position={Position.Top} className="!bg-red-500 !w-2.5 !h-2.5" />
    
    <div className="w-16 h-16 rounded-full border-2 border-dashed border-red-500 p-0.5 bg-white overflow-hidden shadow-lg flex-shrink-0">
      <img
        src={data.image}
        alt={data.name}
        className="w-full h-full object-cover rounded-full"
        onError={(e) => { e.target.src = 'https://via.placeholder.com/150'; }}
      />
    </div>
    
    <div className="bg-red-900 text-white text-center rounded-lg px-2 py-1.5 mt-1.5 text-xs font-semibold w-full shadow-md border border-red-700 min-h-[44px] flex flex-col justify-center">
      <p className="font-bold truncate leading-tight" title={data.name}>{data.name}</p>
      <p className="text-[10px] text-red-200 truncate mt-0.5" title={data.role}>{data.role}</p>
    </div>
    
    <Handle type="source" position={Position.Bottom} className="!bg-red-500 !w-2.5 !h-2.5" />
  </div>
);

const SectionNode = ({ data }) => (
  <div className="flex items-center justify-center py-1">
    <Handle type="target" position={Position.Top} className="!bg-red-500 !w-2.5 !h-2.5" />
    <div className="bg-white text-red-900 font-extrabold text-xs px-4 py-2 rounded-full border-2 border-red-500 shadow-md whitespace-nowrap">
      {data.label}
    </div>
    <Handle type="source" position={Position.Bottom} className="!bg-red-500 !w-2.5 !h-2.5" />
  </div>
);

const nodeTypes = {
  member: MemberNode,
  section: SectionNode,
};

// ২. অটোমেটিক ট্রি লেআউট গ্যালারি স্পেসিং (Dagre Layout)
const getLayoutedElements = (initialNodes, initialEdges) => {
  const dagreGraph = new dagre.graphlib.Graph();
  dagreGraph.setDefaultEdgeLabel(() => ({}));

  // nodesep: পাশাপাশি দূরত্ব, ranksep: উপর-নিচের লেভেলের দূরত্ব
  dagreGraph.setGraph({ rankdir: 'TB', nodesep: 50, ranksep: 90 });

  initialNodes.forEach((node) => {
    const width = node.type === 'section' ? 160 : 160;
    const height = node.type === 'section' ? 60 : 130;
    dagreGraph.setNode(node.id, { width, height });
  });

  initialEdges.forEach((edge) => {
    dagreGraph.setEdge(edge.source, edge.target);
  });

  dagre.layout(dagreGraph);

  const layoutedNodes = initialNodes.map((node) => {
    const nodeWithPosition = dagreGraph.node(node.id);
    return {
      ...node,
      targetPosition: Position.Top,
      sourcePosition: Position.Bottom,
      position: {
        x: nodeWithPosition.x - (node.type === 'section' ? 80 : 80),
        y: nodeWithPosition.y - (node.type === 'section' ? 30 : 65),
      },
    };
  });

  const layoutedEdges = initialEdges.map((e) => ({
    ...e,
    type: 'smoothstep',
    style: { stroke: '#f87171', strokeWidth: 2.5 },
  }));

  return { nodes: layoutedNodes, edges: layoutedEdges };
};

function FlowContent({ chartData }) {
  const { nodes: layoutedNodes, edges: layoutedEdges } = useMemo(() => {
    return getLayoutedElements(chartData.nodes, chartData.edges);
  }, [chartData]);

  const [nodes, , onNodesChange] = useNodesState(layoutedNodes);
  const [edges, , onEdgesChange] = useEdgesState(layoutedEdges);

  return (
    <div className="w-full bg-[#1a0505] rounded-2xl border border-red-950 overflow-hidden shadow-2xl my-6 flex flex-col">
      {/* টাইটেল এখন ক্যানভাসের বাইরে উপরে থাকবে */}
      <div className="w-full bg-red-950/60 border-b border-red-900/50 py-3 text-center">
        <span className="bg-white text-red-900 font-black text-sm md:text-base px-6 py-1.5 rounded-full shadow-md border border-red-300 inline-block">
          {chartData.title}
        </span>
      </div>

      {/* ReactFlow ক্যানভাস Container */}
      <div className="w-full h-[600px] relative">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          nodeTypes={nodeTypes}
          fitView
          fitViewOptions={{ padding: 0.25 }}
          minZoom={0.2}
          maxZoom={1.2}
          panOnDrag={true}
          zoomOnScroll={false}
          zoomOnPinch={true}
          nodesDraggable={true}
        >
          <Background color="#450a0a" gap={20} />
          <Controls className="!bg-white !border-red-500 !text-red-900" />
        </ReactFlow>
      </div>
    </div>
  );
}

export default function SingleOrganogram({ chartData }) {
  return (
    <ReactFlowProvider>
      <FlowContent chartData={chartData} />
    </ReactFlowProvider>
  );
}