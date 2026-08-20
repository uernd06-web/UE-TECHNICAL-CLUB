"use client"
import React, { useState } from 'react';

const AlumniCard = ({ alumni, index }) => {
  const [isOpen, setIsOpen] = useState(false);

  // আপনার দেওয়া ডাটা অবজেক্ট অনুযায়ী Destructuring
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
    personRole,
    personCompany,
    description
  } = alumni || {};

  // ফলব্যাক ভ্যালু নির্ধারণ
  const displayName = alumniName || 'Alumni Member';
  const displayRole = personRole || presentDesignation || 'Engineer';
  const displayCompany = personCompany || company || 'N/A';
  const displayBadge = badge || `A${(index + 1).toString().padStart(2, '0')}`;
  const displayStoryNo = storyNumber || successStoryTitle || `#${id || index + 1}`;

  return (
    <div className={`bg-white border rounded-2xl p-5 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between relative ${
      isOpen ? 'border-red-500 ring-2 ring-red-100' : 'border-gray-200'
    }`}>
      
      {/* ১. কার্ড হেডার: স্টোরি নম্বর ও ব্যাজ */}
      <div>
        <div className="flex justify-between items-center mb-4">
          <span className="text-xs font-bold text-gray-400">{displayStoryNo}</span>
          <span className="text-xs font-bold bg-red-50 text-red-600 px-2.5 py-0.5 rounded-full border border-red-100">
            {displayBadge}
          </span>
        </div>

        {/* ২. ইমেজ / অ্যাভাটার সেকশন */}
        <div className="flex flex-col items-center text-center mb-4">
          {image ? (
            <img 
              src={image} 
              alt={displayName} 
              className="w-20 h-20 rounded-full object-cover border-2 border-red-500 p-0.5 shadow-sm"
              onError={(e) => { 
                e.target.style.display = 'none'; 
                if (e.target.nextSibling) e.target.nextSibling.style.display = 'flex'; 
              }}
            />
          ) : null}

          <div 
            className="w-20 h-20 rounded-full bg-red-100 border-2 border-dashed border-red-400 flex items-center justify-center text-red-700 font-extrabold text-xl shadow-inner"
            style={{ display: image ? 'none' : 'flex' }}
          >
            {displayName.slice(0, 2).toUpperCase()}
          </div>

          <span className="text-[9px] font-extrabold uppercase tracking-widest text-red-600 mt-3">
            {track || 'UE Alumni'}
          </span>
          <h3 className="font-bold text-gray-900 text-base line-clamp-1 mt-0.5">{displayName}</h3>
          <p className="text-xs font-semibold text-red-700 line-clamp-1 mt-0.5">{displayRole}</p>
        </div>

        {/* ৩. শর্ট প্রিভিউ (ডিফল্ট ভিউ) */}
        {!isOpen && (
          <div className="bg-gray-50 rounded-xl p-2.5 mb-4 border border-gray-100 text-xs">
            <span className="block text-[10px] text-gray-400 font-bold uppercase">Company / Institute</span>
            <span className="font-semibold text-gray-800 truncate block mt-0.5">{displayCompany}</span>
          </div>
        )}

        {/* ৪. ডিটেইলস (View Profile এ ক্লিক করার পর) */}
        {isOpen && (
          <div className="mt-4 pt-4 border-t border-gray-100 animate-fadeIn">
            <p className="text-xs text-gray-600 mb-4 leading-relaxed">
              {description || `${displayName} is a proud alumni of UE Training under the ${track || 'Engineering'} track, currently working as ${displayRole}.`}
            </p>

            {/* ৪টি ইনফো গ্রিড */}
            <div className="grid grid-cols-2 gap-2 text-xs mb-4">
              <div className="bg-gray-50 p-2.5 rounded-xl border border-gray-100">
                <span className="block text-[9px] text-gray-400 font-bold uppercase">Company</span>
                <span className="font-bold text-gray-800 truncate block mt-0.5">{displayCompany}</span>
              </div>

              <div className="bg-gray-50 p-2.5 rounded-xl border border-gray-100">
                <span className="block text-[9px] text-gray-400 font-bold uppercase">University</span>
                <span className="font-bold text-gray-800 truncate block mt-0.5">{university || 'N/A'}</span>
              </div>

              <div className="bg-gray-50 p-2.5 rounded-xl border border-gray-100">
                <span className="block text-[9px] text-gray-400 font-bold uppercase">Track</span>
                <span className="font-bold text-gray-800 truncate block mt-0.5">{track || 'N/A'}</span>
              </div>

              <div className="bg-gray-50 p-2.5 rounded-xl border border-gray-100">
                <span className="block text-[9px] text-gray-400 font-bold uppercase">Designation</span>
                <span className="font-bold text-gray-800 truncate block mt-0.5">{displayRole}</span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* ৫. একশন বাটন */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full py-2.5 px-4 rounded-xl font-semibold text-xs tracking-wider transition-all duration-200 active:scale-95 shadow-sm flex items-center justify-center gap-1.5 mt-2 ${
          isOpen 
            ? 'bg-gray-100 hover:bg-gray-200 text-gray-700' 
            : 'bg-red-800 hover:bg-red-900 text-white'
        }`}
      >
        {isOpen ? 'Close Profile ✕' : 'View Profile ↓'}
      </button>

    </div>
  );
};

const AlumniSection = ({ data = [] }) => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 border-b pb-6">
        <div>
          <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">
            Alumni Directory
          </h2>
          <p className="text-gray-600 mt-2 text-sm sm:text-base max-w-2xl">
            All course alumni are presented together in one professional directory. Open any card to view the full profile.
          </p>
        </div>
        
        <div className="flex items-center gap-2">
          <span className="text-sm font-semibold text-gray-500">Total Alumni:</span>
          <div className="bg-red-600 text-white font-bold text-sm px-4 py-1.5 rounded-full shadow-sm">
            {data.length}
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 items-start">
        {data.map((alumni, index) => (
          <AlumniCard key={alumni.id || index} alumni={alumni} index={index} />
        ))}
      </div>
    </section>
  );
};

export default AlumniSection;