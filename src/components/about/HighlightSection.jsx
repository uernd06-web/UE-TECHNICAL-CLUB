import React from "react";
import Image from "next/image";
import Link from "next/link";

const HighlightSection = () => {
  const highlights = [
    {
      title: "Career-focused Development",
      desc: "Customized technical roadmap for industry roles.",
    },
    {
      title: "Practical & Project-based",
      desc: "Hands-on experience with real industrial hardware.",
    },
    {
      title: "Engineering Club Network",
      desc: "Connect with alumni, mentors, and peers globally.",
    },
    {
      title: "Industry & Consultancy Exposure",
      desc: "Work on live client tasks and research projects.",
    },
  ];

  return (
    <section className="w-full bg-slate-50 py-16 lg:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* ================= LEFT SIDE: CREATIVE IMAGE COMPOSITE ================= */}
        <div className="lg:col-span-6 relative flex justify-center lg:justify-start">
          
          {/* Main Large Image */}
          <div className="relative w-[280px] sm:w-[340px] md:w-[380px] h-[380px] sm:h-[460px] md:h-[500px] rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white transform lg:-rotate-1 transition-transform hover:rotate-0 duration-500">
            <Image
              src="/t1.jpg" // Replace with your image path
              alt="Engineering Lab Training"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            
            {/* Overlay Tag inside Main Image */}
            <div className="absolute bottom-6 left-6 right-6">
              <span className="text-[10px] font-extrabold tracking-wider uppercase text-red-400 bg-red-950/80 backdrop-blur-md border border-red-500/30 px-3 py-1 rounded-full">
                Interactive Environment
              </span>
              <h4 className="text-white font-bold text-base mt-2">
                Modern Automation & Robotics Workbench
              </h4>
            </div>
          </div>

          {/* Floating Small Secondary Image Card */}
          <div className="absolute -bottom-6 -right-2 sm:right-4 md:right-8 w-44 sm:w-56 h-36 sm:h-44 rounded-2xl overflow-hidden shadow-2xl border-4 border-white z-20 transform hover:scale-105 transition-all duration-300">
            <Image
              src="/t12.jpg" // Replace with your image path
              alt="Mentor guidance"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/30" />
            <div className="absolute bottom-2 left-3 right-3 text-white">
              <p className="text-[11px] font-bold leading-tight">1-on-1 Industry Mentorship</p>
            </div>
          </div>

          {/* Floating Highlight Badge */}
          <div className="absolute top-8 -left-4 sm:left-2 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-gray-100 z-20 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-red-100 text-red-600 flex items-center justify-center font-black text-lg">
              UE
            </div>
            <div>
              <p className="text-xs font-black text-gray-900">Training Ecosystem</p>
              <p className="text-[10px] text-gray-500 font-semibold">Practical First Learning</p>
            </div>
          </div>

        </div>

        {/* ================= RIGHT SIDE: CONTENT & FEATURES ================= */}
        <div className="lg:col-span-6 flex flex-col justify-center">
          
          {/* Tagline Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-100/80 border border-red-200 w-max mb-5">
            <span className="h-2 w-2 rounded-full bg-red-600 animate-pulse"></span>
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-red-700">
              ABOUT UETRAINING
            </span>
          </div>

          {/* Main Title */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 tracking-tight leading-[1.15] mb-6">
            A professional engineering learning <span className="text-red-600 underline decoration-red-200 decoration-wavy underline-offset-8">ecosystem.</span>
          </h2>

          {/* Description */}
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-8">
            UETraining is a dedicated skills-development platform designed for engineers and tech students. We bridge the gap between classroom theory and real-world industrial practice.
          </p>

          {/* Feature Grid Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            {highlights.map((item, index) => (
              <div 
                key={index} 
                className="bg-white p-4 rounded-2xl border border-gray-200/80 shadow-sm hover:shadow-md hover:border-red-200 transition-all duration-200 group"
              >
                <div className="flex items-center gap-2.5 mb-1.5">
                  <div className="w-5 h-5 rounded-full bg-red-600 text-white flex items-center justify-center text-[10px] font-bold group-hover:scale-110 transition-transform">
                    ✓
                  </div>
                  <h3 className="text-xs sm:text-sm font-extrabold text-gray-900 group-hover:text-red-600 transition-colors">
                    {item.title}
                  </h3>
                </div>
                <p className="text-[11px] text-gray-500 leading-normal pl-7">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Call to Action Buttons */}
          <div className="flex flex-wrap items-center gap-4">
          <Link href={'/pages/programs/admission'}>
            <button className="bg-red-600 hover:bg-red-700 text-white font-extrabold text-sm px-7 py-3.5 rounded-xl shadow-lg shadow-red-600/25 hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer flex items-center gap-2">
              Start Learning
              <span className="text-base">→</span>
            </button>
          </Link>
            <button className="border-2 border-gray-300 hover:border-gray-900 text-gray-800 hover:text-black font-extrabold text-sm px-7 py-3.5 rounded-xl hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer">
              Explore Programs
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};

export default HighlightSection;