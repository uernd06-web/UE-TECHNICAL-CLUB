import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Banner = () => {
  return (
    <section className="relative w-full h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden">
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/t6.jpg" // Replace with your actual image filename in public folder
          alt="Engineering Training Lab"
          fill
          priority
          className="object-cover object-center"
        />
        {/* Semi-transparent dark overlay to make text readable */}
        <div className="absolute inset-0  z-1"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto h-full flex flex-col justify-center px-6 md:px-10 lg:px-16 text-white">
        
        {/* Top Practical Engineering Education Label */}
        <div className="mb-6 flex items-center gap-3 bg-black/30 backdrop-blur-sm border border-white/20 w-max px-4 py-1.5 rounded-full">
          <span className="h-2.5 w-2.5 rounded-full bg-red-600 inline-block"></span>
          <span className="text-[10px] md:text-xs font-bold tracking-widest uppercase text-white/90">
           UE Training Department
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold leading-tight tracking-tight mb-6 max-w-4xl">
          <span className="text-white">A professional engineering </span>
          <span className="text-[#BD1E2D]">power </span>
          <span className="text-[#BD1E2D]">industry.</span>
        </h1>

        {/* Subheading/Paragraph */}
        <p className="text-sm md:text-base lg:text-lg text-white/80 leading-relaxed mb-10 max-w-2xl font-normal">
         We do not only sell courses. We build lifelong engineers through a structured professional club, practical learning and engineering community system.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-4">
         <Link href={'/pages/programs/memberships'}>
          <button className="bg-white text-black font-bold text-sm px-8 py-3.5 rounded-xl hover:bg-red-500 transition duration-200 flex items-center gap-2.5 shadow-lg cursor-pointer">
            Explore Memberships <span className="text-lg">→</span>
          </button>
         </Link>
          
        <Link href={'/pages/programs/admission'}>
          <button className="bg-transparent text-white font-bold text-sm px-8 py-3.5 rounded-xl border border-white/20 hover:bg-white hover:text-black transition duration-200 backdrop-blur-sm cursor-pointer">
           Click to join UE-club
          </button>
        </Link>
        </div>
      </div>
    </section>
  )
}

export default Banner