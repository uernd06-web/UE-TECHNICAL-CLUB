'use client'
import React from 'react'
import { FiArrowUpRight } from 'react-icons/fi'
import Image from 'next/image'
import Link from 'next/link'

const MentorsSection = ({ mentors }) => {
  return (
    <div>
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-10 gap-4">
            <div>
              <span className="text-xs font-bold tracking-widest text-red-600 uppercase mb-2 block">
                Governance
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
                Board of Directors
              </h2>
              <p className="text-sm sm:text-base text-gray-600 mt-1">
                Select a director card to view the full member profile.
              </p>
            </div>

            {/* Badge Count */}
            <div className="self-start md:self-auto bg-red-50 border border-red-200 text-red-600 text-xs font-bold px-3 py-1.5 rounded-full">
              {mentors?.length || 0} Mentors
            </div>
          </div>

          {/* Directors Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {mentors?.map((mentor) => (
              <div
                key={mentor.id}
                className="bg-white rounded-3xl border border-gray-200/80 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between group"
              >
                {/* Responsive Image Container */}
                <div className="relative  overflow-hidden w-full aspect-[4/4.5] sm:aspect-[4/3.8] flex items-center justify-center">
                  {/* Role Badge (Top Right) */}
                  <div className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10 bg-black/60 backdrop-blur-md border border-white/10 text-white text-[10px] sm:text-xs font-bold px-2.5 py-1 rounded-full">
                    {mentor.initials || "MENTOR"}
                  </div>

                  {/* Director Image */}
                  <div className="relative w-full h-full">
                    <Image
                      src={mentor.image}
                      alt={mentor.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      style={{ objectFit: 'contain', objectPosition: 'center bottom' }}
                      className="transition-transform duration-500 group-hover:scale-105 p-2 sm:p-3"
                      priority={false}
                    />
                  </div>
                </div>

                {/* Bottom Info Box */}
                <div className="p-5 sm:p-6 flex flex-col justify-between flex-grow bg-white">
                  <div>
                    <span className="text-[10px] sm:text-[11px] font-bold tracking-wider text-red-600 uppercase block mb-1">
                      Department Lead Profile
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 group-hover:text-red-600 transition-colors">
                      {mentor.name}
                    </h3>
                    <p className="text-xs sm:text-sm font-medium text-gray-500 mt-1">
                      {mentor.role}
                    </p>
                  </div>

                  {/* Bottom Tag & View Profile Button */}
                  <div className="mt-5 pt-4 border-t border-gray-100 flex items-center justify-between gap-2">
                    <span className="bg-red-50 text-red-700 text-[11px] sm:text-xs font-semibold px-2.5 py-1 rounded-lg border border-red-100">
                      {mentor.category}
                    </span>

                    
                 <Link href={`/pages/administration/training-department/${mentor.id}?category=mentor`}>
                    <button className="bg-gray-900 hover:bg-red-600 text-white font-semibold py-1.5 px-3 sm:py-2 sm:px-3.5 rounded-xl flex items-center justify-center gap-1 transition-colors text-xs shadow-md">
                      <span>View Profile</span>
                      <FiArrowUpRight className="text-sm transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </button>
                 </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default MentorsSection