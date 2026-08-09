    import React from "react";
import Image from "next/image";
import { ArrowRight, PhoneCall, ShieldCheck, Sparkles, ChevronRight } from "lucide-react";
import Link from "next/link";

export default function MembershipsHero() {
  const membershipTiers = ["Industrial", "Bronze", "Silver", "Gold", "Elite", "VIP"];

  return (
    <section className="relative w-full min-h-[580px] lg:min-h-[640px] flex items-center justify-start overflow-hidden rounded-3xl my-6 bg-slate-950 font-sans">
      
      {/* 1. Background Image with Gradients & Grid Pattern */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/traning room.jpg" // Replace with your lab background image path
          alt="Engineering Lab Facilities"
          fill
          priority
          className="object-cover object-center  scale-105 transition-transform duration-1000 hover:scale-100"
        />
        {/* Dark Vignette Overlay for Crisp Legibility */}
        <div className="absolute inset-0 to-transparent" />
        <div className="absolute inset-0  via-transparent to-slate-950/40" />
      </div>

      {/* 2. Floating Glassmorphism Main Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 py-12 w-full">
        <div className="max-w-2xl backdrop-blur border border-white/10 rounded-3xl p-8 sm:p-10 shadow-2xl relative overflow-hidden">
          
          {/* Glowing Red Corner Accent */}
          <div className="absolute top-0 right-0 -mt-10 -mr-10 w-48 h-48 bg-red-600/20 rounded-full blur-3xl pointer-events-none" />

          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-xs font-semibold text-gray-400 mb-6">
           <Link href={'/'}> <span className="hover:text-white transition cursor-pointer">Home</span></Link>
            <ChevronRight className="w-3.5 h-3.5 text-gray-600" />
            <span className="text-red-500 font-bold">Memberships</span>
          </nav>

          {/* Live Status Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-extrabold tracking-wider uppercase mb-6 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            <span>2026 Admissions Open</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight mb-4">
            Memberships.
          </h1>

          {/* Subtitle / Description with Highlighted Tiers */}
          <p className="text-sm sm:text-base text-gray-300 font-medium leading-relaxed mb-6">
            Compare{" "}
            <span className="inline-flex flex-wrap gap-1.5 my-1">
              {membershipTiers.map((tier, idx) => (
                <span
                  key={idx}
                  className="bg-white/10 text-white font-bold px-2 py-0.5 rounded-md text-xs border border-white/10 hover:border-red-500/50 hover:text-red-400 transition"
                >
                  {tier}
                </span>
              ))}
            </span>{" "}
            membership pathways and unlock professional engineering benefits.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
            <button className="inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-extrabold text-xs sm:text-sm px-7 py-4 rounded-2xl shadow-lg shadow-red-600/30 hover:shadow-red-600/50 hover:-translate-y-0.5 transition-all cursor-pointer">
              <span>Apply for Membership</span>
              <ArrowRight className="w-4 h-4 stroke-[2.5]" />
            </button>

            <button className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-100 text-gray-950 font-extrabold text-xs sm:text-sm px-7 py-4 rounded-2xl shadow-md transition-all cursor-pointer">
              <PhoneCall className="w-4 h-4 text-red-600" />
              <span>Contact Training Team</span>
            </button>
          </div>

          {/* Trust Badge Bar */}
          <div className="mt-8 pt-6 border-t border-white/10 flex items-center gap-6 text-gray-400 text-xs font-semibold">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>ISO Certified</span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>Lifetime Lab Access</span>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
}