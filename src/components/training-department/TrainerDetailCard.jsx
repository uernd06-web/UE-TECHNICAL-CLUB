import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FiArrowLeft, FiCheckCircle, FiBriefcase, FiAward, FiUserCheck } from 'react-icons/fi';

const TrainerDetailCard = ({ trainer }) => {
  if (!trainer) return null;

  // 1. Dynamic Tag & Badge Selection
  const tagText = trainer.tag || trainer.category || (trainer.departments && trainer.departments[0]) || 'MEMBER PROFILE';
  const badgeText = trainer.badge || trainer.specialty;

  // 2. Handle Bio / Description Fallback
  const descriptionText = trainer.description || trainer.bio || 'No description available.';

  return (
    <div className="bg-slate-50 min-h-screen pt-24 sm:pt-32 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        
        {/* Back Button */}
        <Link
          href="/pages/administration/training-department"
          className="inline-flex items-center gap-2 text-sm font-semibold text-gray-600 hover:text-red-600 mb-6 sm:mb-8 transition-colors group"
        >
          <FiArrowLeft className="transition-transform group-hover:-translate-x-1" />
          <span>Back To All Members</span>
        </Link>

        {/* Main Card Grid */}
        <div className="bg-white rounded-3xl border border-gray-200/80 shadow-sm overflow-hidden grid grid-cols-1 lg:grid-cols-12">
          
          {/* LEFT SIDE: Image Section */}
          <div className="lg:col-span-5 bg-slate-950 relative w-full aspect-[4/4.5] sm:aspect-[4/3.5] lg:aspect-auto lg:min-h-[520px] flex items-center justify-center overflow-hidden">
            
            {/* Tag / Category Badge */}
            <div className="absolute top-4 left-4 z-10 bg-red-600/90 backdrop-blur-md text-white text-[10px] sm:text-xs font-bold tracking-wider uppercase px-3 py-1.5 rounded-full border border-red-500/30 shadow-md">
              {tagText}
            </div>

            {/* Initials Badge */}
            {trainer.initials && (
              <div className="absolute top-4 right-4 z-10 bg-black/60 backdrop-blur-md border border-white/10 text-white text-xs font-bold px-3 py-1.5 rounded-full">
                {trainer.initials}
              </div>
            )}

            {/* Profile Image */}
            <div className="relative w-full h-full">
              <Image
                src={trainer.image || '/placeholder.png'}
                alt={trainer.name || 'Member Profile'}
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                style={{ objectFit: 'contain', objectPosition: 'center bottom' }}
                className="transition-transform duration-700 hover:scale-105 p-2 sm:p-4 lg:p-0"
                priority
              />
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* RIGHT SIDE: Content Details */}
          <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between space-y-8">
            
            <div className="space-y-4">
              
              {/* Badge or Specialty */}
              {badgeText && (
                <div className="inline-flex items-center gap-1.5 bg-red-50 text-red-600 border border-red-200/80 text-xs font-bold px-3 py-1 rounded-full">
                  <FiAward className="text-red-600" />
                  <span>{badgeText}</span>
                </div>
              )}

              {/* Name & Role */}
              <div>
                <h1 className="text-2xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
                  {trainer.name}
                </h1>
                <p className="text-red-600 font-semibold text-base sm:text-lg mt-1 flex items-center gap-2">
                  <FiBriefcase className="text-sm" />
                  <span>{trainer.role}</span>
                </p>
              </div>

              {/* Description / Bio */}
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed pt-2">
                {descriptionText}
              </p>
            </div>

            {/* Responsibilities Section */}
            {trainer.main_responsibilities?.length > 0 && (
              <div className="pt-6 border-t border-gray-100">
                <div className="flex items-center gap-2 mb-4">
                  <FiUserCheck className="text-red-600 text-lg" />
                  <h2 className="text-lg font-bold text-gray-900">
                    Main Responsibilities
                  </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {trainer.main_responsibilities.map((item, index) => (
                    <div
                      key={index}
                      className="bg-slate-50 border border-slate-200/80 rounded-xl p-3 flex items-start gap-2.5 hover:bg-red-50/40 hover:border-red-200 transition-colors"
                    >
                      <FiCheckCircle className="text-red-600 text-base flex-shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm font-medium text-gray-700">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Footer Status */}
            <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-4 flex items-center justify-between gap-4">
              <span className="text-xs font-medium text-gray-500">
                Departmental Operations & Support
              </span>
              <span className="bg-red-600 text-white text-[11px] font-semibold px-3 py-1 rounded-lg shadow-sm whitespace-nowrap">
                Active Member
              </span>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};

export default TrainerDetailCard;