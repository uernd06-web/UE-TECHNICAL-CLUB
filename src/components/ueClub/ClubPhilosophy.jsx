import React from "react";
import { X, Check } from "lucide-react";

export default function ClubPhilosophy() {
  const traditionalPoints = [
    "Sells courses",
    "Temporary engagement",
    "Limited resources",
    "Transactional relationship",
    "Local certification",
    "Single branch",
    "Local exposure",
    "Local experience",
  ];

  const clubPoints = [
    "Builds lifelong engineers",
    "Continuous, lifelong access",
    "Comprehensive ecosystem",
    "Community and mentorship",
    "ISO and government recognition",
    "Multi-branch global access",
    "International connectivity",
    "Local and international projects",
  ];

  return (
    <section className="w-full bg-slate-100/60 p-4 sm:p-8 md:p-12 flex justify-center items-center font-sans">
      {/* Outer Container */}
      <div className="w-full max-w-5xl bg-white rounded-[2rem] p-6 sm:p-10 md:p-12 border border-gray-100 shadow-sm">
        
        {/* Header */}
        <div className="mb-8 md:mb-10">
          <span className="text-[11px] font-black uppercase tracking-widest text-red-600 block mb-2">
            THE CLUB PHILOSOPHY
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-950 tracking-tight mb-4">
            Members, not students.
          </h2>
          <p className="text-xs sm:text-sm text-gray-500 font-medium leading-relaxed max-w-2xl">
            Individuals join as members, creating a sense of belonging, continuous access, mentorship and professional community.
          </p>
        </div>

        {/* Comparison Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Traditional Institute Card */}
          <div className="bg-slate-50/50 rounded-2xl p-6 sm:p-8 border border-gray-200/80 flex flex-col justify-start">
            <div className="w-9 h-9 rounded-xl bg-slate-100 border border-slate-200/80 flex items-center justify-center text-slate-400 mb-6">
              <X className="w-4 h-4 stroke-[3]" />
            </div>

            <h3 className="text-lg font-bold text-gray-950 mb-6">
              Traditional Training Institute
            </h3>

            <ul className="space-y-3.5">
              {traditionalPoints.map((item, index) => (
                <li key={index} className="flex items-center gap-3 text-xs sm:text-sm text-gray-500 font-medium">
                  <span className="text-gray-300 font-bold">—</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* UE Engineering Club Card */}
          <div className="relative bg-slate-50/30 rounded-2xl p-6 sm:p-8 border border-red-500/80 shadow-sm flex flex-col justify-start overflow-hidden">
            {/* Red Accent Top Border */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-red-600" />

            <div className="w-9 h-9 rounded-xl bg-red-600 flex items-center justify-center text-white mb-6 shadow-sm shadow-red-600/30">
              <Check className="w-4 h-4 stroke-[3]" />
            </div>

            <h3 className="text-lg font-bold text-gray-950 mb-6">
              UE Engineering Club
            </h3>

            <ul className="space-y-3.5">
              {clubPoints.map((item, index) => (
                <li key={index} className="flex items-center gap-3 text-xs sm:text-sm text-gray-800 font-semibold">
                  <Check className="w-3.5 h-3.5 text-red-600 shrink-0 stroke-[3]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
}