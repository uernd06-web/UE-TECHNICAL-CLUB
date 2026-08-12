'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowRight, Briefcase, Building2, GraduationCap } from 'lucide-react';
import Link from 'next/link';

const SuccessCard = ({ story }) => {
  const {
    id,
    badge,
    storyNumber,
    alumniName,
    track,
    presentDesignation,
    company,
    university,
    image,
    successStoryTitle,
    personName,
    personRole,
    personCompany,
  } = story;

  return (
   <Link href={`/pages/community/success/${id}`}>
    <div className="group cursor-pointer bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between">
      <div>
        {/* Top Image Overlay Section - Vertical Aspect Ratio Fixed */}
        <div className="relative w-full aspect-[4/3] bg-slate-900 overflow-hidden">
          <Image
            src={image}
            alt={personName || alumniName}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            
            className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
            priority={false}
          />

          {/* Top Badges */}
          {storyNumber && (
            <div className="absolute top-2.5 left-2.5 bg-black/70 backdrop-blur-sm text-white text-[11px] font-bold px-2 py-0.5 rounded">
              {storyNumber}
            </div>
          )}
          {badge && (
            <div className="absolute top-2.5 right-2.5 bg-red-600 text-white text-[11px] font-bold px-2 py-0.5 rounded">
              {badge}
            </div>
          )}

          {/* Bottom Card Content Overlay on Image */}
          <div className="absolute bottom-2.5 left-2.5 right-2.5 bg-red-950/85 backdrop-blur-md border border-red-800/40 p-2.5 rounded-lg text-white">
            {successStoryTitle && (
              <p className="text-[10px] font-semibold text-red-300 uppercase tracking-wide">
                {successStoryTitle}
              </p>
            )}
            {personName && (
              <h4 className="text-xs font-bold truncate text-white uppercase">
                {personName}
              </h4>
            )}
            {(personRole || personCompany) && (
              <p className="text-[10px] text-slate-300 truncate">
                {personRole} {personCompany ? `— ${personCompany}` : ''}
              </p>
            )}
          </div>
        </div>

        {/* Card Body Details */}
        <div className="p-5 space-y-4">
          {/* Header */}
          <div>
            <p className="text-[10px] font-bold text-red-600 uppercase tracking-widest mb-0.5">
              UETraining Success Story
            </p>
            <h3 className="text-lg font-extrabold text-slate-900 leading-tight">
              {alumniName}
            </h3>
            <p className="text-xs text-slate-500 font-medium mt-0.5">{track}</p>
          </div>

          {/* Information List */}
          <div className="space-y-2.5 pt-3 border-t border-slate-100 text-xs">
            <div className="flex items-center gap-2 text-slate-600">
              <Briefcase className="w-3.5 h-3.5 text-red-600 shrink-0" />
              <div className="truncate">
                <span className="text-[10px] font-bold text-slate-400 uppercase block">
                  Present Designation
                </span>
                <span className="font-semibold text-slate-800">
                  {presentDesignation}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2 text-slate-600">
              <Building2 className="w-3.5 h-3.5 text-red-600 shrink-0" />
              <div className="truncate">
                <span className="text-[10px] font-bold text-slate-400 uppercase block">
                  Company / Institute
                </span>
                <span className="font-semibold text-slate-800">{company}</span>
              </div>
            </div>

            <div className="flex items-center gap-2 text-slate-600">
              <GraduationCap className="w-3.5 h-3.5 text-red-600 shrink-0" />
              <div className="truncate">
                <span className="text-[10px] font-bold text-slate-400 uppercase block">
                  University
                </span>
                <span className="font-semibold text-slate-800">{university}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Link / Button */}
      <div className="px-5 pb-5 pt-1">
        <button className="w-full py-2 flex items-center justify-between text-xs font-bold text-red-600 hover:text-red-700 transition-colors">
          <span>View success story</span>
          <span className="w-6 h-6 rounded-full bg-black text-white flex items-center justify-center group-hover:bg-red-600 transition-colors">
            <ArrowRight className="w-3 h-3" />
          </span>
        </button>
      </div>
    </div>
   
   </Link>
  );
};

export default SuccessCard;