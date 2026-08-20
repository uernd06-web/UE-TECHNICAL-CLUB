import React from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';


const DhakaLabCard = ({ lab }) => {
  return (
    <div className="group bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between">
      <div>
        {/* Image Container with Badges */}
        <div className="relative w-full aspect-[16/10] overflow-hidden bg-gray-900">
          <Image
            src={lab?.image || "/placeholder.png"}
            alt={lab?.title || "Lab Image"}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
          />

          {/* Top Left Badge (e.g. LAB 01) */}
          {lab?.labBadge && (
            <div className="absolute top-3.5 left-3.5 z-10">
              <span className="bg-black/80 backdrop-blur-md text-white text-[10px] font-extrabold uppercase tracking-widest px-3 py-1.5 rounded-full border border-white/20">
                {lab.labBadge}
              </span>
            </div>
          )}

          {/* Bottom Right Arrow Button */}
          <Link href={`/pages/programs/onlab/dhaka/${lab.id}`} className="absolute bottom-3.5 right-3.5 z-10">
            <div className="w-9 h-9 rounded-full bg-red-700 text-white flex items-center justify-center shadow-lg group-hover:bg-red-800 group-hover:scale-110 transition-all">
              <ArrowRight className="w-4 h-4 stroke-[2.5]" />
            </div>
          </Link >
        </div>

        {/* Card Content Body */}
        <div className="p-5 space-y-2.5">
          {/* Category Tag */}
          {lab?.category && (
            <span className="text-[11px] font-extrabold uppercase tracking-wider text-red-700 block">
              {lab.category}
            </span>
          )}

          {/* Title */}
          <h3 className="text-lg font-extrabold text-gray-950 leading-snug group-hover:text-red-700 transition-colors">
            {lab?.title}
          </h3>

          {/* Dynamic Description */}
          <p className="text-xs text-gray-500 font-medium leading-relaxed line-clamp-3 pt-0.5">
            {lab?.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DhakaLabCard;