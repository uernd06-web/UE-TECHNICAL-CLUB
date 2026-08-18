// "use client";

// import { useEffect, useRef, useState } from "react";
// // import {
// //   boardMembers,
// //   CANVAS_WIDTH,
// //   CANVAS_HEIGHT,
// // } from "@/data/board-members";
// import MemberNode from "./MemberNode";
// import Connectors from "./Connectors";
// import { boardMembers, CANVAS_HEIGHT, CANVAS_WIDTH } from "@/data/boardMembers";

// // Below this scale, text gets too small to read comfortably —
// // stop shrinking further and let the wrapper scroll horizontally instead.
// const MIN_SCALE = 0.5;

// export default function BoardOfDirectorChart() {
//   const wrapperRef = useRef(null);
//   const [scale, setScale] = useState(1);

//   useEffect(() => {
//     const el = wrapperRef.current;
//     if (!el) return;

//     const updateScale = () => {
//       const containerWidth = el.offsetWidth;
//       const nextScale = Math.min(containerWidth / CANVAS_WIDTH, 1);
//       setScale(Math.max(nextScale, MIN_SCALE));
//     };

//     updateScale();

//     const observer = new ResizeObserver(updateScale);
//     observer.observe(el);
//     return () => observer.disconnect();
//   }, []);

//   return (
//     <section className="bg-[#2a1216] py-10 pt-28 sm:pt-32 sm:py-16 px-4">
//       <div className="max-w-[900px] mx-auto">
//         {/* Title */}
//         <div className="flex justify-center mb-8 sm:mb-14">
//           <div className="bg-white rounded-md px-5 sm:px-8 py-2 sm:py-3 shadow-xl">
//             <h2 className="text-red-600 font-extrabold text-lg sm:text-2xl md:text-3xl tracking-tight">
//               Board of Directors
//             </h2>
//           </div>
//         </div>

//         {/*
//           wrapperRef's width is what we measure to compute `scale`.
//           Its height is set explicitly to the scaled canvas height so
//           the section doesn't collapse/overlap the next block.
//           overflow-x-auto only kicks in once scale is clamped at
//           MIN_SCALE on very narrow screens (i.e. content wider than
//           the container) — vertical content never gets clipped since
//           height is set to match exactly.
//         */}
//         <div
//           ref={wrapperRef}
//           className="relative w-full overflow-x-auto"
//           style={{ height: CANVAS_HEIGHT * scale }}
//         >
//           <div
//             className="absolute top-0 left-0"
//             style={{
//               width: CANVAS_WIDTH,
//               height: CANVAS_HEIGHT,
//               transform: `scale(${scale})`,
//               transformOrigin: "top left",
//             }}
//           >
//             <Connectors />
//             {boardMembers.map((member) => (
//               <MemberNode key={member.id} member={member} />
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// components/OrgChart/BoardOfDirectors.jsx
import { boardMembers } from "@/data/boardMembers";
import MemberNode from "./MemberNode";

export default function BoardOfDirectorChart() {
  const { chairman, cpo, crdo } = boardMembers;

  return (
    <section className="bg-[#2a1216] py-10 pt-28 sm:pt-32 sm:py-16 px-4">
      {/* Title */}
      <div className="flex justify-center mb-8 sm:mb-14">
        <div className="bg-white rounded-md px-5 sm:px-8 py-2 sm:py-3 shadow-xl">
          <h2 className="text-red-600 font-extrabold text-lg sm:text-2xl md:text-3xl tracking-tight">
            Board of Directors
          </h2>
        </div>
      </div>

      {/* Tree — pure flexbox, reflows naturally at every screen size */}
      <div className="flex flex-col items-center max-w-2xl mx-auto">
        <MemberNode member={chairman} size="lg" />

        {/* stem + arrow down from chairman */}
        <div className="flex flex-col items-center">
          <div className="w-px h-4 sm:h-6 bg-white/70" />
          <div className="w-0 h-0 border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-t-[7px] border-t-white/70 -mt-px" />
        </div>

        {/* horizontal branch + the two children */}
        <div className="w-[85%] sm:w-[70%] flex relative">
          {/* horizontal line spans exactly between the two stems below */}
          <div className="absolute top-0 left-1/4 right-1/4 h-px bg-white/70" />

          <div className="flex flex-col items-center w-1/2">
            <div className="w-px h-4 sm:h-6 bg-white/70" />
            <MemberNode member={cpo} size="md" />
          </div>
          <div className="flex flex-col items-center w-1/2">
            <div className="w-px h-4 sm:h-6 bg-white/70" />
            <MemberNode member={crdo} size="md" />
          </div>
        </div>
      </div>
    </section>
  );
}