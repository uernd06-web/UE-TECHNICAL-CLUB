import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function ReferralMembership() {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 font-sans">
      {/* Main Relative Container */}
      <div className="relative w-full h-[450px] sm:h-[500px] rounded-[2rem] overflow-hidden shadow-xl border border-gray-200">
        
        {/* 1. Background Image */}
        <Image
          src="/room03.jpg" // আপনার প্রজেক্টের ইমেজের সঠিক পাথ দিন
          alt="Referral Power Lab Facility"
          fill
          priority
          className="object-cover object-center"
        />

        {/* Optional Overlay to balance lightness if needed */}
        <div className="absolute inset-0 bg-black/10" />

        {/* 2. Dark Overlay Box (Left Aligned) */}
        <div className="absolute inset-y-4 left-4 sm:left-8 my-auto w-[90%] sm:w-[500px] md:w-[540px] h-fit  backdrop-blur border border-white/10 rounded-2xl p-6 sm:p-10 text-white shadow-2xl flex flex-col justify-center">
          
          {/* Top Tagline */}
          <div className="mb-4">
            <span className="inline-block bg-gray-500 text-white text-[11px] sm:text-xs font-black uppercase tracking-wider px-3 py-1 rounded-sm">
              MEMBERSHIP CARD — REFERRAL POWER
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight mb-4">
            Train Your Friends & <br />
            Family FREE
          </h2>

          {/* Subtitle */}
          <p className="text-xs sm:text-sm text-gray-300 font-normal leading-relaxed mb-8 max-w-md">
            Members can offer selected paid short courses free each month according to their membership tier.
          </p>

          {/* Action Button */}
          <Link href={'/pages/programs/admission'}>
            <button className="inline-flex items-center gap-2 bg-white hover:bg-red-600  hover:text-white text-red-600 border border-red-600 font-extrabold text-xs sm:text-sm px-6 py-3 rounded-xl transition-all duration-200 shadow-md hover:shadow-lg cursor-pointer">
              <span>Click to Apply</span>
              <ArrowRight className="w-4 h-4 stroke-[2.5]" />
            </button>
          </Link>

        </div>

      </div>
    </section>
  );
}