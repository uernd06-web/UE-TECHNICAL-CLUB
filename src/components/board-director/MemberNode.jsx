// // components/OrgChart/MemberNode.jsx

// import { nodePositions } from "@/data/boardMembers";


// export default function MemberNode({ member }) {
//   const pos = nodePositions[member.id];

//   return (
//     <div
//       className="absolute flex flex-col items-center w-[190px] -translate-x-1/2"
//       style={{ left: pos.x, top: pos.y }}
//     >
//       {/* Photo with dashed rotating ring + solid inner ring */}
//       <div className="relative w-28 h-28">
//         <div className="absolute inset-0 rounded-full border-2 border-dashed border-white/80 animate-[spin_10s_linear_infinite]" />
//         <div className="absolute inset-[6px] rounded-full border-2 border-red-600 overflow-hidden bg-neutral-300">
//           <img
//             src={member.image}
//             alt={member.name}
//             className="w-full h-full object-cover"
//           />
//         </div>
//       </div>

//       {/* Name / title badge */}
//       <div className="-mt-2 bg-red-700 text-white text-center px-3 py-1.5 rounded-[3px] shadow-lg min-w-[170px]">
//         <p className="font-extrabold text-[13px] leading-tight tracking-tight">
//           {member.name}
//         </p>
//         <p className="text-[11px] leading-tight opacity-95">{member.title}</p>
//       </div>
//     </div>
//   );
// }

// components/OrgChart/MemberNode.jsx

const SIZE_CLASSES = {
  lg: {
    photo: "w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28",
    badge: "min-w-[130px] sm:min-w-[150px] md:min-w-[170px] px-2.5 sm:px-3 py-1 sm:py-1.5",
    name: "text-[10px] sm:text-[12px] md:text-[13px]",
    title: "text-[9px] sm:text-[10px] md:text-[11px]",
  },
  md: {
    photo: "w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28",
    badge: "min-w-[110px] sm:min-w-[140px] md:min-w-[170px] px-2 sm:px-3 py-1 sm:py-1.5",
    name: "text-[9px] sm:text-[11px] md:text-[13px]",
    title: "text-[8px] sm:text-[9px] md:text-[11px]",
  },
};

export default function MemberNode({ member, size = "md" }) {
  const s = SIZE_CLASSES[size];

  return (
    <div className="flex flex-col items-center">
      {/* Photo with dashed rotating ring + solid inner ring */}
      <div className={`relative ${s.photo}`}>
        <div className="absolute inset-0 rounded-full border-2 border-dashed border-white/80 animate-[spin_10s_linear_infinite]" />
        <div className="absolute inset-[6%] rounded-full border-2 border-red-600 overflow-hidden bg-neutral-300">
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Name / title badge */}
      <div className={`-mt-2 bg-red-700 text-white text-center rounded-[3px] shadow-lg ${s.badge}`}>
        <p className={`font-extrabold leading-tight tracking-tight ${s.name}`}>
          {member.name}
        </p>
        <p className={`leading-tight opacity-95 ${s.title}`}>{member.title}</p>
      </div>
    </div>
  );
}