// import React from "react";

// import { membershipCard } from "@/data/membershipCard";
// import MembershipCard from "./MemberShipCard";
// import { FaUser } from "react-icons/fa";





// const MembershipSection = () => {
//   const leftCards = membershipCard.filter((m)=>["industrial", "silver", "elite"].includes(m.id));

//   const rightCards = membershipCard.filter((m)=> ["bronze", "gold", "vip"].includes(m.id))

//   return (
//     <div className="min-h-screen bg-[#FDFBF7] py-12 px-4 max-w-[1350px] mx-auto flex items-center justify-center">
//       <div className="grid grid-cols-1 lg:grid-cols-11 gap-6 items-center w-full relative">
        
//         {/* Left Column (3 Cards) */}
//         <div className="lg:col-span-4 space-y-8 relative">
//           {leftCards.map((card) => (
//             <MembershipCard key={card.id} membership={card} alignRight={true} />
//           ))}
//         </div>

//         {/* Center Column (Red Banner with Connectors) */}
//         <div className="lg:col-span-3 flex items-center justify-center relative py-6">
          
//           {/* Main Red Box */}
//           <div className="bg-[#B81D24] text-white rounded-[2.5rem] p-8 text-center flex flex-col items-center justify-center shadow-xl border-4 border-[#96141A] w-full max-w-[300px] min-h-[320px] relative z-20">
//             <div className="mb-4 text-4xl bg-white/10 p-4 rounded-full border border-white/20 shadow-inner">
//               <FaUser />
//             </div>
//             <h2 className="text-2xl font-extrabold uppercase tracking-tight leading-snug">
//               One Club,<br />
//               One Membership,<br />
//               Lifetime<br />
//               Relationship
//             </h2>
//           </div>

//         </div>

//         {/* Right Column (3 Cards) */}
//         <div className="lg:col-span-4 space-y-8 relative">
//           {rightCards.map((card) => (
//             <MembershipCard key={card.id} membership={card} alignRight={false} />
//           ))}
//         </div>

//       </div>
//     </div>
//   );
// };

// export default MembershipSection;



import { membershipCard } from "@/data/membershipCard";
import { FaUsers } from "react-icons/fa";
import MembershipCard from "./MemberShipCard";

export default function MembershipSection() {
  const getCard = (id) => membershipCard.find((m) => m.id === id);

  return (
    <div className="min-h-screen bg-[#FDFBF7] py-16 px-4 flex items-center justify-center overflow-hidden">
      <div className="max-w-[1300px] w-full relative">

        <div className="text-center mb-8">
  <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
    Explore Our Membership Plans
  </h1>
  <p className="mt-2 text-sm sm:text-base text-gray-600 font-medium flex items-center justify-center gap-2">
    <span>Click on any membership card below to view full details</span>
    <span className="inline-block animate-bounce text-red-600 font-bold rotate-90"> </span>
  </p>
</div>
        
        {/* DESKTOP VIEW WITH PERFECT CONNECTING LINES */}
        <div className="hidden lg:grid grid-cols-11 gap-6 items-center relative min-h-[720px]">

          {/* BACKGROUND SVG LINES - PERFECTLY ALIGNED TO CENTER BANNER AND CIRCLES */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            {/* 1. TOP-LEFT: Banner Top-Left -> Industrial Dot */}
            <path
              d="M 45 31 L 45 16 Q 45 14 43 14 L 36.3 14"
              fill="none"
              stroke="#B81D24"
              strokeWidth="0.4"
              strokeLinecap="round"
            />

            {/* 2. TOP-RIGHT: Banner Top-Right -> Bronze Dot */}
            <path
              d="M 55 31 L 55 16 Q 55 14 57 14 L 63.7 14"
              fill="none"
              stroke="#B81D24"
              strokeWidth="0.4"
              strokeLinecap="round"
            />

            {/* 3. MIDDLE-LEFT: Banner Left -> Silver Dot */}
            <path
              d="M 41.5 50 L 36.3 50"
              fill="none"
              stroke="#B81D24"
              strokeWidth="0.4"
              strokeLinecap="round"
            />

            {/* 4. MIDDLE-RIGHT: Banner Right -> Gold Dot */}
            <path
              d="M 58.5 50 L 63.7 50"
              fill="none"
              stroke="#B81D24"
              strokeWidth="0.4"
              strokeLinecap="round"
            />

            {/* 5. BOTTOM-LEFT: Banner Bottom-Left -> Elite Dot */}
            <path
              d="M 45 69 L 45 84 Q 45 86 43 86 L 36.3 86"
              fill="none"
              stroke="#B81D24"
              strokeWidth="0.4"
              strokeLinecap="round"
            />

            {/* 6. BOTTOM-RIGHT: Banner Bottom-Right -> VIP Dot */}
            <path
              d="M 55 69 L 55 84 Q 55 86 57 86 L 63.7 86"
              fill="none"
              stroke="#B81D24"
              strokeWidth="0.4"
              strokeLinecap="round"
            />
          </svg>

          {/* LEFT COLUMN CARDS */}
          <div className="col-span-4 space-y-10 z-10">
            {/* Industrial Membership */}
            <div className="relative flex items-center">
              <MembershipCard membership={getCard("industrial")} />
              {/* Green Dot */}
              <div className=" border-2 border-white shadow-md absolute -right-2.5 top-1/2 -translate-y-1/2 z-20" />
            </div>

            {/* Silver Membership */}
            <div className="relative flex items-center">
              <MembershipCard membership={getCard("silver")} />
              {/* Silver Dot */}
              <div className=" border-2 border-white shadow-md absolute -right-2.5 top-1/2 -translate-y-1/2 z-20" />
            </div>

            {/* Elite Membership */}
            <div className="relative flex items-center">
              <MembershipCard membership={getCard("elite")} />
              {/* Golden-Yellow Dot */}
              <div className=" border-2 border-white shadow-md absolute -right-2.5 top-1/2 -translate-y-1/2 z-20" />
            </div>
          </div>

          {/* CENTER BANNER */}
          <div className="col-span-3 flex justify-center items-center z-10 h-full">
            <div className="bg-[#B81D24] text-white rounded-[2.2rem] p-6 text-center flex flex-col items-center justify-center shadow-2xl border-4 border-[#96141A] w-full max-w-[270px] h-[310px] relative">
              <div className="mb-3 text-4xl bg-white/10 p-3.5 rounded-full border border-white/20">
                <FaUsers />
              </div>
              <h2 className="text-xl font-extrabold uppercase leading-snug tracking-wide">
                One Club,<br />
                One Membership,<br />
                Lifetime<br />
                Relationship
              </h2>
            </div>
          </div>

          {/* RIGHT COLUMN CARDS */}
          <div className="col-span-4 space-y-10 z-10">
            {/* Bronze Membership */}
            <div className="relative flex items-center">
              {/* Bronze Dot */}
              <div className=" border-2 border-white shadow-md absolute -left-2.5 top-1/2 -translate-y-1/2 z-20" />
              <MembershipCard membership={getCard("bronze")} />
            </div>

            {/* Gold Membership */}
            <div className="relative flex items-center">
              {/* Gold Dot */}
              <div className=" border-2 border-white shadow-md absolute -left-2.5 top-1/2 -translate-y-1/2 z-20" />
              <MembershipCard membership={getCard("gold")} />
            </div>

            {/* VIP Membership */}
            <div className="relative flex items-center">
              {/* Dark VIP Dot */}
              <div className=" border-2 border-white shadow-md absolute -left-2.5 top-1/2 -translate-y-1/2 z-20" />
              <MembershipCard membership={getCard("vip")} />
            </div>
          </div>

        </div>

        {/* MOBILE RESPONSIVE VIEW */}
        <div className="lg:hidden flex flex-col gap-6">
          <div className="bg-[#B81D24] text-white rounded-2xl p-6 text-center flex flex-col items-center justify-center shadow-lg">
            <FaUsers className="text-3xl mb-2" />
            <h2 className="text-lg font-bold uppercase">
              One Club, One Membership, Lifetime Relationship
            </h2>
          </div>
          {membershipCard.map((card) => (
            <MembershipCard key={card.id} membership={card} />
          ))}
        </div>

      </div>
    </div>
  );
}