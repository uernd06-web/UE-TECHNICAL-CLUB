import Image from "next/image";
import Link from "next/link";
import React from "react";

const NgxBanner = () => {
  return (
    <section className="relative w-full min-h-[85vh] flex items-center justify-center overflow-hidden bg-slate-950 pt-20">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/ngx.jpeg"
          alt="Engineering Training Lab"
          fill
          priority
          /* object-contain দিলে পুরো ছবি স্ক্রিনে ফিট হবে, অথবা contain/cover ব্যালেন্স করা হয়েছে */
          className="object-cover object-top md:object-center opacity-90"
        />
        {/* Soft Dark Overlay for Contrast (Yellow removed) */}
        <div className="absolute inset-0 z-1 bg-gradient-to-t from-slate-950 via-slate-950/40 to-black/30" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl w-full mx-auto flex flex-col justify-end pt-32 pb-12 px-6 md:px-10 lg:px-16 text-white">
        
        {/* Top Brand Badge */}
        <div className="mb-4 flex items-center gap-2 bg-red-900/40 border border-red-500/30 w-max px-3.5 py-1 rounded-full backdrop-blur-sm">
          <span className="h-2 w-2 rounded-full bg-red-600 animate-pulse"></span>
          <span className="text-[11px] md:text-xs font-semibold tracking-wider uppercase text-red-200">
            Next-Gen Platform
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-6xl lg:text-8xl font-black leading-tight tracking-tight mb-4 max-w-4xl drop-shadow-lg">
          <span className="text-white">NGX</span>
        </h1>

        {/* Paragraph (Yellow text removed, matching theme) */}
        <p className="text-sm md:text-base lg:text-lg text-gray-200 leading-relaxed mb-8 max-w-2xl font-normal drop-shadow">
          Explore <span className="text-white font-bold underline decoration-red-600 underline-offset-4">UETraining's</span> next-generation digital learning, project challenges, professional community, and industry connections.
        </p>

        {/* Buttons (Matching Primary Red and Dark/Glass Theme) */}
        <div className="flex flex-wrap items-center gap-4">
          <Link href="/pages/programs/admission">
            <button className="bg-[#9B1C1C] hover:bg-red-800 text-white font-bold text-sm px-8 py-3.5 rounded-xl transition duration-300 flex items-center gap-2.5 shadow-lg shadow-red-950/50 cursor-pointer border border-red-500/20">
              Join The Network <span className="text-lg">→</span>
            </button>
          </Link>

          <Link href="/pages/programs/admission">
            <button className="bg-white/10 hover:bg-white hover:text-black text-white font-bold text-sm px-8 py-3.5 rounded-xl border border-white/30 transition duration-300 backdrop-blur-sm cursor-pointer shadow-md">
              Click to join UE-club
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NgxBanner;