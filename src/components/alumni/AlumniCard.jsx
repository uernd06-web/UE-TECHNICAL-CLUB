'use client'
import React, { useState } from 'react';

const AlumniCard = ({ alumni }) => {
  const [imgError, setImgError] = useState(false);


  const avatarText = 'AL';

  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between">
      <div>
       
        <div className="flex justify-between items-center mb-4">
          <span className="text-xs font-semibold px-2.5 py-1 bg-gray-100 text-gray-600 rounded-md">
            #{alumni.id || 'N/A'}
          </span>
          <span className="text-xs font-bold px-2.5 py-1 bg-red-50 text-red-600 border border-red-200 rounded-full">
            {alumni.code || 'A00'}
          </span>
        </div>

        
        <div className="flex items-center gap-4 mb-4">
          {alumni.image && !imgError ? (
            <div className="w-16 h-16 rounded-full border border-gray-200 overflow-hidden flex-shrink-0 bg-gray-50">
              <img
                src={alumni.image}
                alt={alumni.name || 'Alumni'}
                className="w-full h-full object-cover"
                onError={() => setImgError(true)} // imag load error avatar appare
              />
            </div>
          ) : (
            <div className="w-16 h-16 rounded-full bg-red-100 border border-red-200 text-red-800 font-bold text-lg flex items-center justify-center flex-shrink-0 shadow-inner">
              {avatarText}
            </div>
          )}

          <div className="overflow-hidden">
            <h3 className="font-bold text-gray-900 text-base md:text-lg truncate">
              {alumni.name || 'Alumni Name'}
            </h3>
            <p className="text-xs md:text-sm font-semibold text-red-600 truncate">
              {alumni.designation || 'Engineer'}
            </p>
            <p className="text-xs text-gray-500 truncate">
              {alumni.subDesignation || 'Department'}
            </p>
          </div>
        </div>

        {/* ডেসক্রিপশন */}
        <p className="text-xs text-gray-600 mb-4 line-clamp-3 leading-relaxed">
          {alumni.description || 'A UE Training alumni member with practical industry skills.'}
        </p>

        {/* গ্রিড ডিটেইলস */}
        <div className="grid grid-cols-2 gap-2 text-xs">
          <div className="bg-gray-50 p-2 rounded-lg border border-gray-100">
            <span className="block text-[10px] text-gray-400 font-bold uppercase tracking-wider">Company</span>
            <span className="font-semibold text-gray-800 truncate block">{alumni.company || 'N/A'}</span>
          </div>
          <div className="bg-gray-50 p-2 rounded-lg border border-gray-100">
            <span className="block text-[10px] text-gray-400 font-bold uppercase tracking-wider">University</span>
            <span className="font-semibold text-gray-800 truncate block">{alumni.university || 'N/A'}</span>
          </div>
          <div className="bg-gray-50 p-2 rounded-lg border border-gray-100">
            <span className="block text-[10px] text-gray-400 font-bold uppercase tracking-wider">Experience</span>
            <span className="font-semibold text-gray-800">{alumni.experience || 'N/A'}</span>
          </div>
          <div className="bg-gray-50 p-2 rounded-lg border border-gray-100">
            <span className="block text-[10px] text-gray-400 font-bold uppercase tracking-wider">Location</span>
            <span className="font-semibold text-gray-800">{alumni.location || 'Bangladesh'}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlumniCard;