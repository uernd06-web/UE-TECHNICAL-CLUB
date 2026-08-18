import Image from "next/image";
import React from "react";
import { ArrowUpRight, Sparkles } from "lucide-react";
import Link from "next/link";

const Card = ({ data }) => {
  return (
    <div className="group relative bg-white rounded-3xl border border-gray-200/80 shadow-sm hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 overflow-hidden flex flex-col justify-between cursor-pointer">
      
      {/* 1. Top Accent Highlight Line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-600 via-red-500 to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20" />

      <div>
        {/* 2. Image Container with Aspect Ratio & Hover Zoom */}
        <div className="relative w-full aspect-[4/3] bg-slate-950 overflow-hidden">
          <Image
            src={data?.image}
            alt={data?.title || "Card Image"}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out opacity-90 group-hover:opacity-100"
          />

          {/* Floating Category Badge */}
          <div className="absolute top-3.5 left-3.5 z-10">
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-slate-950/70 backdrop-blur-md border border-white/10 text-[10px] font-extrabold uppercase tracking-widest text-white shadow-lg">
              <Sparkles className="w-3 h-3 text-red-500" />
              <span>Featured Tier</span>
            </span>
          </div>

          {/* Dark Overlay Gradient on Hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-40 group-hover:opacity-60 transition-opacity duration-300" />
        </div>

        {/* 3. Title Content Area */}
        <div className="p-5 sm:p-6">
          <h3 className="text-lg sm:text-xl font-bold text-gray-900 tracking-tight leading-snug group-hover:text-red-600 transition-colors duration-200">
            {data?.title}
          </h3>
        </div>
      </div>

      {/* 4. Bottom Footer Action Bar */}
      <div className="px-5 sm:px-6 pb-5 pt-2 border-t border-gray-100/80 flex items-center justify-between">
        <span className="text-xs font-bold text-gray-400 group-hover:text-gray-600 transition-colors">
          Explore Details
        </span>
        
        <Link href={`/pages/programs/memberships/${data.id}`}>
        <div className="w-8 h-8 rounded-full bg-red-50 text-red-600 flex items-center justify-center group-hover:bg-red-600 group-hover:text-white transition-all duration-300 shadow-sm">
          <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
        </div>
        </Link>
      </div>

    </div>
  );
};

export default Card;