"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

// Image dataset matching your layout
const galleryData = [
  {
    id: 1,
    tag: "SOFTWARE AND DESIGN",
    title: "Combine engineering knowledge with digital tools.",
    description:
      "Learners work with engineering software, design methods and technical documentation used in modern industrial projects.",
    src: "/t1.jpg", // Replace with your image paths
    alt: "Software and design lab",
    thumbnailTitle: "Hands-on technical learning",
  },
  {
    id: 2,
    tag: "PROJECT WORK",
    title: "Collaborative project work in modern environments.",
    description:
      "Students interact and build hands-on solutions together with guidance from industry experts.",
    src: "/t12.jpg",
    alt: "Collaborative project work",
    thumbnailTitle: "Collaborative project work",
  },
  {
    id: 3,
    tag: "TESTING & REVIEW",
    title: "Equipment review and practical testing protocols.",
    description:
      "Gain direct experience testing industrial electrical panels, PLCs, and automation components.",
    src: "/room1.jpeg",
    alt: "Equipment testing",
    thumbnailTitle: "Equipment review and testing",
  },
  {
    id: 4,
    tag: "INDUSTRY EXPOSURE",
    title: "Industry-focused exposure for future engineers.",
    description:
      "Bridging the gap between theoretical academic studies and actual factory floor workflows.",
    src: "/room3.jpeg",
    alt: "Industry exposure",
    thumbnailTitle: "Industry-focused exposure",
  },
  {
    id: 5,
    tag: "LEARNING SPACE",
    title: "Professional learning space for maximum output.",
    description:
      "Designed specifically to encourage focus, team discussion, and engineering innovation.",
    src: "/room2.jpeg",
    alt: "Learning space",
    thumbnailTitle: "Professional learning space",
  },
];

const statistics = [
  {
    value: "6+",
    label: "Specialized learning pathways",
  },
  {
    value: "4+",
    label: "Core certified program areas",
  },
  {
    value: "8+",
    label: "Engineering service domains",
  },
  {
    value: "360°",
    label: "Training-to-industry ecosystem",
  },
];

export default function LearningGallery() {
  const [activeIdx, setActiveIdx] = useState(0);

  const activeItem = galleryData[activeIdx];

  // Navigation handlers for next/previous buttons
  const handleNext = () => {
    setActiveIdx((prev) => (prev + 1) % galleryData.length);
  };

  const handlePrev = () => {
    setActiveIdx((prev) => (prev - 1 + galleryData.length) % galleryData.length);
  };

  return (
    <section className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8 space-y-4">
      
      {/* ================= SECTION HEADER ================= */}
      <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 border border-red-200 mb-4">
          <span className="h-2 w-2 rounded-full bg-red-600 animate-pulse"></span>
          <span className="text-[11px] font-extrabold uppercase tracking-widest text-red-700">
            Practical Exposure & Infrastructure
          </span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 tracking-tight leading-tight">
          Real-world engineering environments{" "}
          <span className="text-red-700 block sm:inline">in action.</span>
        </h2>

        <p className="mt-4 text-sm sm:text-base text-gray-600 leading-relaxed">
          Explore our state-of-the-art training labs, industrial automation equipment, 
          and collaborative spaces designed to foster practical development across 
          the UE Technical Club community.
        </p>
      </div>

      {/* ================= GALLERY MAIN CONTAINER ================= */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        
        {/* Left Big Preview Image */}
        <div className="lg:col-span-6 relative h-[450px] sm:h-[520px] md:h-[580px] rounded-3xl overflow-hidden shadow-2xl group transition-all duration-300">
          <Image
            src={activeItem.src}
            alt={activeItem.alt}
            fill
            priority
            className="object-cover object-center transition-all duration-500"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20" />

          {/* Navigation Arrows */}
          <div className="absolute top-6 right-6 flex items-center gap-2 z-10">
            <button
              onClick={handlePrev}
              className="w-10 h-10 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-white flex items-center justify-center hover:bg-black/70 transition cursor-pointer"
              aria-label="Previous image"
            >
              ←
            </button>
            <button
              onClick={handleNext}
              className="w-10 h-10 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-white flex items-center justify-center hover:bg-black/70 transition cursor-pointer"
              aria-label="Next image"
            >
              →
            </button>
          </div>

          {/* Text Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 z-10 text-white">
            <span className="inline-block bg-[#1a080a] border border-red-500/40 text-red-400 text-[10px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full mb-3">
              {activeItem.tag}
            </span>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-black leading-tight mb-2">
              {activeItem.title}
            </h3>
            <p className="text-xs sm:text-sm text-gray-300 max-w-lg leading-relaxed">
              {activeItem.description}
            </p>
          </div>
        </div>

        {/* Right Thumbnails Grid */}
        <div className="lg:col-span-6 grid grid-cols-2 gap-4">
          
          {/* Card 1: Main Tall Card */}
          <div
            onClick={() => setActiveIdx(0)}
            className={`relative row-span-2 rounded-2xl overflow-hidden cursor-pointer min-h-[260px] lg:min-h-full border-2 transition-all duration-300 group ${
              activeIdx === 0
                ? "border-red-600 ring-2 ring-red-600/50 scale-[0.99]"
                : "border-transparent opacity-90 hover:opacity-100"
            }`}
          >
            <Image
              src={galleryData[0].src}
              alt={galleryData[0].alt}
              fill
              className="object-cover group-hover:scale-105 transition duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <span className="absolute bottom-4 left-4 right-4 text-xs font-bold text-white leading-tight">
              {galleryData[0].thumbnailTitle}
            </span>
          </div>

          {/* Cards 2-5 */}
          {galleryData.slice(1).map((item, idx) => {
            const actualIndex = idx + 1;
            const isActive = activeIdx === actualIndex;

            return (
              <div
                key={item.id}
                onClick={() => setActiveIdx(actualIndex)}
                className={`relative h-[220px] sm:h-[260px] lg:h-auto rounded-2xl overflow-hidden cursor-pointer border-2 transition-all duration-300 group ${
                  isActive
                    ? "border-red-600 ring-2 ring-red-600/50 scale-[0.99]"
                    : "border-transparent opacity-90 hover:opacity-100"
                }`}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <span className="absolute bottom-3 left-3 right-3 text-xs font-bold text-white leading-tight">
                  {item.thumbnailTitle}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center items-center gap-2 mt-8">
        {galleryData.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setActiveIdx(idx)}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              activeIdx === idx ? "w-8 bg-red-600" : "w-2.5 bg-gray-300 hover:bg-gray-400"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
     <div className="flex flex-col sm:flex-row justify-center items-center mt-8 gap-4">
  {/* Primary Button */}
 <Link href={'/pages/community/success'}>
  <button className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-red-700 hover:bg-red-800 text-white font-extrabold text-sm tracking-wide shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2 cursor-pointer">
    View Student Success
  </button>
 </Link>

  {/* Secondary/Outline Button */}
 <Link href={'/pages/community/alumni'}>
  <button className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-xl border-2 border-gray-200 hover:border-red-700 bg-white text-gray-800 hover:text-red-700 font-extrabold text-sm tracking-wide shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2 cursor-pointer">
    Meet our Alumni
  </button>
 </Link>
</div>

<div className="w-full bg-[#B31919] text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-white/20">
        {statistics.map((stat, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center text-center p-6 transition-transform duration-200 hover:scale-105"
          >
            {/* Number/Value */}
            <h3 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-3">
              {stat.value}
            </h3>

            {/* Label */}
            <p className="text-xs sm:text-sm font-bold tracking-wide text-white/90 max-w-[200px] leading-snug">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </div>
    </section>

    
  );
}