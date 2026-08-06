import React from 'react'

function AboutBanner() {
  return (
    <section className="relative w-full h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden">
      {/* 1. Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/ABOUT.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* 2. Dark Overlay (টেক্সট পড়ার সুবিধা এবং কন্ট্রাস্ট বাড়াতে) */}
      <div className="absolute inset-0 z-[1]" />

      {/* 3. Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto h-full flex flex-col justify-center px-6 md:px-10 lg:px-16 text-white">
        
        {/* Top Tag/Badge */}
        <div className="mb-6 flex items-center gap-3 bg-black/30 backdrop-blur-md border border-white/20 w-max px-4 py-1.5 rounded-full">
          <span className="h-2.5 w-2.5 rounded-full bg-red-600 inline-block animate-pulse"></span>
          <span className="text-[10px] md:text-xs font-bold tracking-widest uppercase text-white/90">
            Practical Engineering Education
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold leading-tight tracking-tight mb-6 max-w-4xl">
          <span className="text-white">Build skills that </span>
          <span className="text-[#BD1E2D]">power </span>
          <span className="text-[#BD1E2D]">industry.</span>
        </h1>

        {/* Subheading */}
        <p className="text-sm md:text-base lg:text-lg text-white/80 leading-relaxed mb-10 max-w-2xl font-normal">
          UE Technical Club connects classroom learning with real industrial practice
          in automation, SCADA, building management systems, solar engineering,
          power systems and EPC project development.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-4">
          <button className="bg-[#BD1E2D] text-white font-bold text-sm px-8 py-3.5 rounded-xl hover:bg-gray-200 hover:text-black transition duration-200 flex items-center gap-2.5 shadow-lg cursor-pointer">
            Explore UE Club <span className="text-lg">→</span>
          </button>
          
          <button className="bg-transparent text-white font-bold text-sm px-8 py-3.5 rounded-xl border border-white/20 hover:bg-white/10 transition duration-200 backdrop-blur-sm cursor-pointer">
           Meet out Alumni
          </button>
        </div>
      </div>
    </section>
  )
}

export default AboutBanner