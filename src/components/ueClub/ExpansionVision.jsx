import React from "react";
import { MapPin, Globe2, Infinity } from "lucide-react";

export default function ExpansionVision() {
  const stats = [
    {
      value: "64",
      label: "Branches across",
      subLabel: "Bangladesh",
      icon: MapPin,
    },
    {
      value: "4",
      label: "International",
      subLabel: "branches",
      icon: Globe2,
    },
    {
      value: "∞",
      label: "Lifetime branch",
      subLabel: "access",
      icon: Infinity,
    },
  ];

  return (
    <section className="w-full bg-slate-50/50 py-12 px-4 sm:px-6 lg:px-8 font-sans">
      {/* Outer Card Container */}
      <div className="relative max-w-6xl mx-auto bg-white rounded-[2.5rem] p-8 sm:p-12 border border-red-500/20 shadow-xl shadow-red-500/5 overflow-hidden">
        
        {/* Subtle Background Glow Accent */}
        <div className="absolute top-0 right-0 -mt-16 -mr-16 w-80 h-80 bg-red-600/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 -mb-16 -ml-16 w-80 h-80 bg-red-600/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Text Block */}
          <div className="lg:col-span-6 space-y-4">
            <div className="inline-flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
              <span className="text-[11px] font-black uppercase tracking-widest text-red-600">
                UE CLUB — EXPANSION VISION
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-950 tracking-tight leading-[1.1]">
              One membership. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-red-500 to-amber-600">
                Lifetime access to all branches.
              </span>
            </h2>

            <p className="text-sm sm:text-base text-gray-500 font-medium leading-relaxed max-w-md pt-2">
              A connected professional engineering community designed for local reach and international development.
            </p>
          </div>

          {/* Right Stats Grid */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div
                  key={idx}
                  className="group relative bg-slate-50/80 hover:bg-white rounded-2xl p-6 border border-gray-100 hover:border-red-500/30 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col items-center justify-center text-center cursor-pointer overflow-hidden"
                >
                  {/* Top Red Accent Highlight */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-transparent group-hover:bg-red-600 transition-colors duration-300" />

                  {/* Icon Badge */}
                  <div className="w-9 h-9 rounded-xl bg-red-50 text-red-600 flex items-center justify-center mb-4 group-hover:bg-red-600 group-hover:text-white transition-colors duration-300 shadow-sm">
                    <Icon className="w-4 h-4 stroke-[2.5]" />
                  </div>

                  {/* Stat Number */}
                  <div className="text-4xl sm:text-5xl font-black text-red-600 tracking-tight mb-2 group-hover:scale-110 transition-transform duration-300">
                    {stat.value}
                  </div>

                  {/* Stat Description */}
                  <div className="text-xs sm:text-sm font-bold text-gray-700 leading-tight">
                    {stat.label}
                    <span className="block text-gray-500 font-medium">
                      {stat.subLabel}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}