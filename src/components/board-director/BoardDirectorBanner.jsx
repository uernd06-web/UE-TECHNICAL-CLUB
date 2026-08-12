"use client";

import React from "react";
import Image from "next/image";
import { FiCalendar } from "react-icons/fi";

const BoardDirectorsBanner = () => {
  const roles = [
    { code: "03", label: "BOARD DIRECTORS", highlight: true },
    { code: "CPO", label: "PROGRAMS", highlight: false },
    { code: "CTO", label: "TECHNOLOGY", highlight: false },
    { code: "COO", label: "OPERATIONS", highlight: false },
  ];

  return (
    <div className="relative bg-slate-950 py-16 px-6 sm:px-10 lg:px-12 border-b border-gray-800 overflow-hidden text-white">
      
      {/* 1. BACKGROUND IMAGE WITH OVERLAY */}
      <div className="absolute inset-0 z-0 opacity-50 mix-blend-luminosity pointer-events-none">
        <Image
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" // আপনি আপনার পছন্দের যেকোনো কর্পোরেট/বিল্ডিং ইমেজ ইউআরএল দিতে পারেন
          alt="Corporate Background"
          fill
          priority
          className="object-cover object-center"
        />
      </div>

      {/* 2. GRADIENT OVERLAYS FOR SMOOTH TEXT READABILITY */}
     <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-950/40 to-transparent z-0 pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none z-0" />

      {/* MAIN CONTENT CONTAINER */}
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row lg:items-center justify-between gap-12">
        
        {/* Left Column: Heading & Description */}
        <div className="flex-1 space-y-5">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-red-950/80 border border-red-800/50 text-red-400 text-xs font-bold px-3.5 py-1.5 rounded-full tracking-wider uppercase backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
            <span>Governance & Direction</span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1]">
            Board of <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">Directors</span>
          </h1>

          {/* Subtitle */}
          <p className="text-sm sm:text-base text-gray-300 font-medium leading-relaxed max-w-2xl">
            Meet the unified three-member Board of Directors: <strong className="text-white">CPO</strong>, <strong className="text-white">CTO</strong> and <strong className="text-white">COO</strong>, responsible for program strategy, technology direction and operational excellence.
          </p>

          {/* Updated Date Stamp */}
          <div className="flex items-center gap-2 text-[11px] font-bold text-gray-400 tracking-widest uppercase pt-2">
            <FiCalendar className="text-xs text-red-500" />
            <span>Updated 10 August 2026</span>
          </div>
        </div>

        {/* Right Column: Glassmorphic Grid Metric Box */}
        <div className="bg-white/10 backdrop-blur-xl p-4 sm:p-5 rounded-[2.5rem] border border-white/15 shadow-2xl shrink-0 lg:max-w-md w-full">
          <div className="grid grid-cols-2 gap-3">
            {roles.map((item, idx) => (
              <div
                key={idx}
                className={`p-5 rounded-2xl border transition-all duration-300 flex flex-col justify-between h-28 ${
                  item.highlight
                    ? "bg-red-600/20 border-red-500/40 text-red-400 hover:bg-red-600/30"
                    : "bg-black/30 border-white/10 text-white hover:bg-white/10 hover:border-white/20"
                }`}
              >
                <div className="text-3xl font-black tracking-tight">
                  {item.code}
                </div>
                <div className="text-[10px] font-bold tracking-widest text-gray-400 uppercase">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default BoardDirectorsBanner;