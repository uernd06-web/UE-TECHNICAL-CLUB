// components/OrgChart/MemberNode.jsx

import { nodePositions } from "@/data/boardMembers";


export default function MemberNode({ member }) {
  const pos = nodePositions[member.id];

  return (
    <div
      className="absolute flex flex-col items-center w-[190px] -translate-x-1/2"
      style={{ left: pos.x, top: pos.y }}
    >
      {/* Photo with dashed rotating ring + solid inner ring */}
      <div className="relative w-28 h-28">
        <div className="absolute inset-0 rounded-full border-2 border-dashed border-white/80 animate-[spin_10s_linear_infinite]" />
        <div className="absolute inset-[6px] rounded-full border-2 border-red-600 overflow-hidden bg-neutral-300">
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Name / title badge */}
      <div className="-mt-2 bg-red-700 text-white text-center px-3 py-1.5 rounded-[3px] shadow-lg min-w-[170px]">
        <p className="font-extrabold text-[13px] leading-tight tracking-tight">
          {member.name}
        </p>
        <p className="text-[11px] leading-tight opacity-95">{member.title}</p>
      </div>
    </div>
  );
}