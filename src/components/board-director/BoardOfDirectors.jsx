// components/OrgChart/BoardOfDirectors.jsx
import { boardMembers, CANVAS_WIDTH, CANVAS_HEIGHT } from "@/data/board-members";
import MemberNode from "./MemberNode";
import Connectors from "./Connectors";

export default function BoardOfDirectors() {
  return (
    <section className="bg-[#2a1216] py-16 px-4">
      <div className="overflow-x-auto">
        <div
          className="relative mx-auto"
          style={{ width: CANVAS_WIDTH, minWidth: CANVAS_WIDTH }}
        >
          {/* Title */}
          <div className="flex justify-center mb-14">
            <div className="bg-white rounded-md px-8 py-3 shadow-xl">
              <h2 className="text-red-600 font-extrabold text-3xl tracking-tight">
                Board of Directors
              </h2>
            </div>
          </div>

          {/* Tree canvas */}
          <div className="relative" style={{ height: CANVAS_HEIGHT }}>
            <Connectors />
            {boardMembers.map((member) => (
              <MemberNode key={member.id} member={member} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}