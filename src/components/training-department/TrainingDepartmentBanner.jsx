"use client";

import React from "react";
import Image from "next/image";

const TrainingDepartmentBanner = () => {
  const metrics = [
    { code: "04", label: "DEPARTMENT LEADS", highlight: true },
    { code: "12+", label: "ENGINEERING MENTORS", highlight: false },
    { code: "08+", label: "TECHNICAL DISCIPLINES", highlight: false },
    { code: "One", label: "UNIFIED DEPARTMENT", highlight: false },
  ];

  return (
    <div className="relative bg-slate-900 py-16 px-6 sm:px-10 lg:px-12 border-b border-gray-800 overflow-hidden text-white">
      
      {/* 1. Fully Visible Background Image */}
      <div className="absolute inset-0 z-0 opacity-90 pointer-events-none">
        <Image
          src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop"
          alt="Training Department Background"
          fill
          priority
          unoptimized
          className="object-cover object-center"
        />
      </div>

      {/* 2. Perfectly Balanced Semi-Transparent Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/50 via-slate-900/50 to-slate-950/30 z-0 pointer-events-none" />

      {/* Main Container */}
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row lg:items-center justify-between gap-12">
        
        {/* Left Column: Title & Subtitle */}
        <div className="flex-1 space-y-5">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-red-950/80 border border-red-800/60 text-red-400 text-xs font-bold px-3.5 py-1.5 rounded-full tracking-wider uppercase backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
            <span>Training Operations</span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1]">
            Training <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">Department</span>
          </h1>

          {/* Description */}
          <p className="text-sm sm:text-base text-gray-200 font-medium leading-relaxed max-w-2xl drop-shadow-sm">
            Explore department management, curriculum coordination, laboratory operations, learner success and the engineering mentor network.
          </p>
        </div>

        {/* Right Column: Balanced Glassmorphic Cards */}
        <div className="bg-slate-900/60 backdrop-blur-xl p-4 sm:p-5 rounded-[2.5rem] border border-white/15 shadow-2xl shrink-0 lg:max-w-md w-full">
          <div className="grid grid-cols-2 gap-3">
            {metrics.map((item, idx) => (
              <div
                key={idx}
                className={`p-5 rounded-2xl border transition-all duration-300 flex flex-col justify-between h-28 ${
                  item.highlight
                    ? "bg-red-600/20 border-red-500/50 text-red-400 hover:bg-red-600/30"
                    : "bg-slate-950/40 border-white/10 text-white hover:bg-slate-950/60"
                }`}
              >
                <div className="text-3xl sm:text-4xl font-black tracking-tight">
                  {item.code}
                </div>
                <div className="text-[10px] font-bold tracking-widest text-gray-300 uppercase">
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

export default TrainingDepartmentBanner;