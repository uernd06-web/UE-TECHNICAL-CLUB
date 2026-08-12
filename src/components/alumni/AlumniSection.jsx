"use client"
import React, { useState } from 'react';

const AlumniCard = ({ alumni, index }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { name, designation, subDesignation, description, company, university, experience, location, image, code, id } = alumni;

  return (
    <div className={`bg-white border rounded-2xl p-5 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between relative ${isOpen ? 'border-red-500 ring-2 ring-red-100' : 'border-gray-200'}`}>
      
      {/* ১. কার্ড হেডার: আইডি/কোড ব্যাজ */}
      <div>
        <div className="flex justify-between items-center mb-4">
          <span className="text-xs font-bold text-gray-400">#{id || index + 1}</span>
          <span className="text-xs font-bold bg-red-50 text-red-600 px-2.5 py-0.5 rounded-full border border-red-100">
            {code || `A${index + 1}`}
          </span>
        </div>

        {/* ২. ইমেজ / অ্যাভাটার সেকশন (ছবি থাকলে ছবি, না থাকলে 'AL') */}
        <div className="flex flex-col items-center text-center mb-4">
          {image ? (
            <img 
              src={image} 
              alt={name} 
              className="w-20 h-20 rounded-full object-cover border-2 border-red-500 p-0.5 shadow-sm"
              onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex'; }}
            />
          ) : null}

          <div 
            className="w-20 h-20 rounded-full bg-red-100 border-2 border-dashed border-red-400 flex items-center justify-center text-red-700 font-extrabold text-xl shadow-inner"
            style={{ display: image ? 'none' : 'flex' }}
          >
            AL
          </div>

          <span className="text-[9px] font-extrabold uppercase tracking-widest text-red-600 mt-3">UETraining Alumni</span>
          <h3 className="font-bold text-gray-900 text-lg line-clamp-1">{name}</h3>
          <p className="text-xs font-semibold text-red-700 line-clamp-1">{designation || 'Engineer'}</p>
          <p className="text-[11px] text-gray-500 line-clamp-1">{subDesignation || 'Technology'}</p>
        </div>

        {/* ৩. শর্ট প্রিভিউ (প্রথমে যা দেখা যাবে) */}
        {!isOpen && (
          <div className="bg-gray-50 rounded-xl p-2.5 mb-4 border border-gray-100 text-xs">
            <span className="block text-[10px] text-gray-400 font-bold uppercase">Company / Institute</span>
            <span className="font-semibold text-gray-800 truncate block">{company || 'N/A'}</span>
          </div>
        )}

        {/* ৪. কার্ডের ভেতরেই ফুল ডিটেইলস (View Profile এ ক্লিক করলে দেখাবে) */}
        {isOpen && (
          <div className="mt-4 pt-4 border-t border-gray-100 animate-fadeIn">
            {/* ডেসক্রিপশন */}
            <p className="text-xs text-gray-600 mb-4 leading-relaxed">
              {description || 'A UE Training alumni member who has developed practical, industry-focused engineering skills through professional training, projects and community participation.'}
            </p>

            {/* ৪টি বক্সের ডিটেইলস */}
            <div className="grid grid-cols-2 gap-2 text-xs mb-4">
              <div className="bg-gray-50 p-2.5 rounded-xl border border-gray-100">
                <span className="block text-[9px] text-gray-400 font-bold uppercase">Company</span>
                <span className="font-bold text-gray-800 truncate block mt-0.5">{company || 'N/A'}</span>
              </div>

              <div className="bg-gray-50 p-2.5 rounded-xl border border-gray-100">
                <span className="block text-[9px] text-gray-400 font-bold uppercase">University</span>
                <span className="font-bold text-gray-800 truncate block mt-0.5">{university || 'N/A'}</span>
              </div>

              <div className="bg-gray-50 p-2.5 rounded-xl border border-gray-100">
                <span className="block text-[9px] text-gray-400 font-bold uppercase">Experience</span>
                <span className="font-bold text-gray-800 block mt-0.5">{experience || 'N/A'}</span>
              </div>

              <div className="bg-gray-50 p-2.5 rounded-xl border border-gray-100">
                <span className="block text-[9px] text-gray-400 font-bold uppercase">Location</span>
                <span className="font-bold text-gray-800 block mt-0.5">{location || 'Bangladesh'}</span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* ৫. ভিউ প্রোফাইল / হাইড প্রোফাইল বাটন */}
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
      {/* হেডার */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 border-b pb-6">
        <div>
          <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">
            Alumni Directory
          </h2>
          <p className="text-gray-600 mt-2 text-sm sm:text-base max-w-2xl">
            All course alumni are presented together in one professional directory. Open any card to view the full profile.
          </p>
        </div>
        
        {/* ব্যাজ */}
        <div className="flex items-center gap-2">
          <span className="text-sm font-semibold text-gray-500">Total Alumni:</span>
          <div className="badge badge-error badge-lg font-bold text-white px-4 py-3">
            {data.length}
          </div>
        </div>
      </div>

      {/* কার্ড লিস্ট (Grid) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 items-start">
        {data.map((alumni, index) => (
          <AlumniCard key={alumni.id || index} alumni={alumni} index={index} />
        ))}
      </div>
    </section>
  );
};

export default AlumniSection;