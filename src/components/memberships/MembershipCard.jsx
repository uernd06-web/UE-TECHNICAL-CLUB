import React from "react";
import Card from "./Card";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import ScrollAnimation from "../ScrollAnimation";

const MembershipCard = () => {
  const memberData = [
    {
      title: "Bronze Memberships",
      image: "/card/Bronze-01.png",
    },
    {
      title: "Elite Memberships",
      image: "/card/Elite-01.png",
    },
    {
      title: "Gold Memberships",
      image: "/card/Gold-01.png",
    },
    {
      title: "Industrial Memberships",
      image: "/card/Industrial_Membership-card.jpg",
    },
    {
      title: "VIP Memberships",
      image: "/card/VIP-01.png",
    },
    {
      title: "Silver Memberships",
      image: "/card/Silver-01.png",
    },
  ];

  return (
    <section className="w-full bg-slate-50/50 py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="w-full max-w-7xl mx-auto space-y-8">
        
        {/* Header Section */}
       <ScrollAnimation delay={0}>
         <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-gray-200/80 pb-6">
          <div className="space-y-1.5">
            <span className="text-[11px] font-black uppercase tracking-widest text-red-700 block">
              MEMBERSHIP TIERS
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-950 tracking-tight">
              Choose your engineering pathway
            </h2>
            <p className="text-xs sm:text-sm text-gray-500 font-medium pt-0.5">
              Select a membership card to begin your application.
            </p>
          </div>

          <div className="shrink-0 pt-2 sm:pt-0">
            <a
              href="#"
              className="inline-flex items-center justify-center gap-1.5 bg-white hover:bg-red-50 text-red-700 border border-red-600 font-bold text-xs sm:text-sm px-5 py-2.5 rounded-xl transition-all cursor-pointer shadow-sm hover:shadow-md"
            >
              <span>Official UE Club Page</span>
              <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
            </a>
          </div>
        </div>
       </ScrollAnimation>

        {/* Card Grid Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {memberData.map((member, index) => (
            <ScrollAnimation key={index} delay={index * 0.15}>
            <Card data={member} />
          </ScrollAnimation>
          ))}
        </div>

      </div>
      <div className="flex mt-6 flex-col sm:flex-row sm:items-end justify-between gap-4  pb-6 bg-base-100 p-4 rounded-xl border border-red-600">
          <div className="space-y-1.5">
          
            <h2 className="text-xl sm:text-2xl md:text-2xl font-black text-gray-950 tracking-tight">
             Need help choosing a membership?
            </h2>
            <p className="text-xs sm:text-sm text-gray-500 font-medium pt-0.5">
              Contact the training team for guidance.
            </p>
          </div>

          <div className="shrink-0 pt-2 sm:pt-0">
            <Link
              href={'/pages/contact'}
              className="inline-flex items-center justify-center gap-1.5 bg-white hover:bg-red-50 text-red-700 border border-red-600 font-bold text-xs sm:text-sm px-5 py-2.5 rounded-xl transition-all cursor-pointer shadow-sm hover:shadow-md"
            >
              <span>Talk the training team</span>
              <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
            </Link>
          </div>
        </div>
    </section>
  );
};

export default MembershipCard;