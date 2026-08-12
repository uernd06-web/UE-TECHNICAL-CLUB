import React from "react";
import Image from "next/image";
import Link from "next/link";

const AdmissionBanner = () => {
 
  const bgImage = "/AUTOMATION.png"; 

  return (
    <section className="relative w-full min-h-[380px] sm:min-h-[420px] bg-slate-950 text-white overflow-hidden flex items-center py-12 px-4 sm:px-8 lg:px-16 font-sans">
      
      {/* 1. Background Image Layer (Optional) */}
      {bgImage && (
        <div className="absolute inset-0 z-0">
          <Image
            src={bgImage}
            alt="Admission Banner Background"
            fill
            priority
            className="object-cover opacity-25 mix-blend-overlay"
          />
        </div>
      )}

      {/* 2. Dark Red Radial Gradient (Matching Image Style) */}
      <div 
        className="absolute inset-0 z-1 pointer-events-none opacity-90"
        style={{
          background: "radial-gradient(circle at 85% 50%, rgba(185, 28, 28, 0.65) 0%, rgba(120, 15, 15, 0.4) 35%, rgba(10, 10, 15, 0.95) 80%)"
        }}
      />

      {/* 3. Engineering Grid Overlay (Matching Image Style) */}
      <div 
        className="absolute inset-0 z-2 pointer-events-none opacity-15"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.2) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.2) 1px, transparent 1px)
          `,
          backgroundSize: "32px 32px"
        }}
      />

      {/* 4. Content Container */}
      <div className="relative z-10 max-w-4xl w-full space-y-5">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-semibold text-gray-300 tracking-wide">
          <Link href="/" className="hover:text-red-600 transition-colors">Home</Link>
          <span className="text-gray-500">/</span>
          <span className="text-white">Admission</span>
        </div>

        {/* Pill Badge with Dot */}
        <div className="inline-flex items-center gap-2 bg-red-950/60 border border-red-700/60 px-3.5 py-1 rounded-full text-red-500 font-extrabold text-[11px] tracking-widest uppercase">
          <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
          <span>UETRAINING</span>
        </div>

        {/* Main Title */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-none">
          Admission
        </h1>

        {/* Subtitle / Description */}
        <p className="text-sm sm:text-base text-gray-300 font-medium max-w-xl leading-relaxed">
          Review the UETraining admission process, select your engineering pathway and submit an enrollment inquiry.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-4 pt-2">
          <Link
            href={'/pages/programs/admission'}
            className="bg-red-700 hover:bg-red-800 text-white font-bold text-sm px-6 py-3 rounded-xl shadow-md transition-all duration-200 hover:scale-[1.02] cursor-pointer"
          >
            Apply Now
          </Link>

          <Link
            href={'/pages/programs/memberships'}
            className="bg-white hover:bg-gray-100 text-gray-950 font-bold text-sm px-6 py-3 rounded-xl shadow-md transition-all duration-200 hover:scale-[1.02] cursor-pointer"
          >
            View Memberships
          </Link>
        </div>

      </div>
    </section>
  );
};

export default AdmissionBanner;