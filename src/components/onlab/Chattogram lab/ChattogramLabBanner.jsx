import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ChattogramLabBanner = () => {
  return (
    <section className="relative w-full h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden">
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/room3.jpeg" // todo=> chattogram lab real image
          alt="Chattogram Engineering Training Lab"
          fill
          priority
          className="object-cover object-center"
        />
        {/* Dark Gradient Overlay for optimal text legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40 z-1" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto h-full flex flex-col justify-center px-6 md:px-10 lg:px-16 text-white">
        
        {/* Top Location Specific Tag */}
        <div className="mb-6 flex items-center gap-3 bg-black/40 backdrop-blur-md border border-white/20 w-max px-4 py-1.5 rounded-full">
          <span className="h-2.5 w-2.5 rounded-full bg-red-600 inline-block animate-pulse"></span>
          <span className="text-[10px] md:text-xs font-bold tracking-widest uppercase text-white/90">
            Chattogram Regional Hub & Lab
          </span>
        </div>

        {/* Main Heading - Chattogram Context */}
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold leading-tight tracking-tight mb-6 max-w-4xl">
          <span className="text-white">Empowering </span>
          <span className="text-[#BD1E2D]">Chattogram's </span>
          <span className="text-white">Next-Gen Engineers.</span>
        </h1>

        {/* Subheading/Paragraph - Focused on Port, Heavy Industry & Local Hub */}
        <p className="text-sm md:text-base lg:text-lg text-white/80 leading-relaxed mb-10 max-w-2xl font-normal">
          Hands-on industrial automation, SCADA, power system, and renewable energy training tailored for the port city's growing industrial and maritime sectors right here at our Chattogram lab.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-4">
          <Link href="/pages/programs/admission">
            <button className="bg-[#BD1E2D] hover:bg-red-700 text-white font-bold text-sm px-8 py-3.5 rounded-xl transition duration-200 flex items-center gap-2.5 shadow-lg cursor-pointer">
              Join Chattogram Batch <span className="text-lg">→</span>
            </button>
          </Link>

          <Link href="/pages/contact">
            <button className="bg-white/10 hover:bg-white hover:text-black text-white font-bold text-sm px-8 py-3.5 rounded-xl border border-white/20 transition duration-200 backdrop-blur-sm cursor-pointer capitalize">
              Visit Chattogram Lab
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ChattogramLabBanner