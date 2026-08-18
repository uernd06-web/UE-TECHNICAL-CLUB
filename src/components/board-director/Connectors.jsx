// components/OrgChart/Connectors.jsx
// import { nodePositions, BRANCH_Y } from "@/data/board-members";

import { BRANCH_Y, nodePositions } from "@/data/boardMembers";


export default function Connectors() {
  const chairman = nodePositions.chairman;
  const cpo = nodePositions.cpo;
  const crdo = nodePositions.crdo;
  const chairmanBottomY = chairman.y + 150; // approx bottom of chairman node (photo + badge)

  return (
    <>
      {/* vertical stem from chairman down to the branch line */}
      <div
        className="absolute bg-white/70"
        style={{
          left: chairman.x - 1,
          top: chairmanBottomY,
          width: 2,
          height: BRANCH_Y - chairmanBottomY,
        }}
      />

      {/* downward arrow head */}
      <div
        className="absolute w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-white/70"
        style={{ left: chairman.x - 6, top: BRANCH_Y - 8 }}
      />

      {/* horizontal branch line connecting the two children */}
      <div
        className="absolute bg-white/70"
        style={{
          left: cpo.x,
          top: BRANCH_Y,
          width: crdo.x - cpo.x,
          height: 2,
        }}
      />

      {/* vertical stems down to each child */}
      <div
        className="absolute bg-white/70"
        style={{ left: cpo.x - 1, top: BRANCH_Y, width: 2, height: cpo.y - BRANCH_Y }}
      />
      <div
        className="absolute bg-white/70"
        style={{ left: crdo.x - 1, top: BRANCH_Y, width: 2, height: crdo.y - BRANCH_Y }}
      />
    </>
  );
}