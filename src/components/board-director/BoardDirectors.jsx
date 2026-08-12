'use client'
import Image from 'next/image';
import React, { useState } from 'react';
import { FiArrowUpRight } from 'react-icons/fi';
import BoardModal from './DirectorProfileModal';
import DirectorProfileModal from './DirectorProfileModal';

const BoardDirectors = ({ directors }) => {

    const [selectedDirector, setSelectedDirector] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = (director) => {
    setSelectedDirector(director);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedDirector(null);
  };
  return (
    <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <span className="text-xs font-bold tracking-widest text-red-600 uppercase mb-2 block">
              Governance
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
              Board of Directors
            </h2>
            <p className="text-sm sm:text-base text-gray-600 mt-1">
              Select a director card to view the full member profile.
            </p>
          </div>
          
          {/* Badge Count */}
          <div className="self-start md:self-auto bg-red-50 border border-red-200 text-red-600 text-xs font-bold px-3 py-1.5 rounded-full">
            {directors?.length || 0} directors
          </div>
        </div>

        {/* Directors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {directors?.map((director) => (
            <div
              key={director.id}
              onClick={()=>handleOpenModal(director)}
              className="bg-white  rounded-3xl border border-gray-200/80 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between group cursor-pointer"
            >
              {/* Top Image & Badge Box */}
              <div className="relative bg-[#0d0d0d] pt-8 px-6 pb-0 flex flex-col items-center justify-end overflow-hidden h-[320px]">
                {/* Role Badge (Top Right) */}
                <div className="absolute top-4 right-4 z-10 bg-black/60 backdrop-blur-md border border-white/10 text-white text-xs font-bold px-3 py-1 rounded-full">
                  {director.roleCode || director.role.match(/\(([^)]+)\)/)?.[1] || "DIRECTOR"}
                </div>

                {/* Director Image */}
              <div className="relative w-full h-full">
                  <Image
                    src={director.image}
                    alt={director.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    priority={false}
                  />
                </div>

                {/* View Profile Button Overlay */}
                <div className="absolute bottom-4 left-4 right-4 z-10">
                  <button className="w-full cursor-pointer bg-black/80 hover:bg-black backdrop-blur-md text-white font-semibold py-3 px-4 rounded-xl border border-white/10 flex items-center justify-center gap-2 transition-colors text-sm shadow-lg">
                    <span>View Profile</span>
                    <FiArrowUpRight className="text-base transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </button>
                 
                </div>
              </div>

              {/* Bottom Info Box */}
              <div className="p-6 flex flex-col justify-between flex-grow bg-white">
                <div>
                  <span className="text-[11px] font-bold tracking-wider text-red-600 uppercase block mb-1">
                    Board of Directors
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-red-600 transition-colors">
                    {director.name}
                  </h3>
                  <p className="text-sm font-medium text-gray-500 mt-1">
                    {director.role}
                  </p>
                </div>

                {/* Bottom Tag */}
                <div className="mt-6 pt-4 border-t border-gray-100 flex items-center">
                  <span className="bg-red-50 text-red-700 text-xs font-semibold px-3 py-1 rounded-lg border border-red-100">
                    {director.tag}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <DirectorProfileModal isOpen={isModalOpen} onClose={handleCloseModal} director={selectedDirector}></DirectorProfileModal>
    </section>
  );
};

export default BoardDirectors;