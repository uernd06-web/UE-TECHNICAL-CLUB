"use client";
import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";

const TrainingDepartment = ({ trainers }) => {
  return (
    <div>
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <span className="text-xs font-bold tracking-widest text-red-600 uppercase mb-2 block">
                Delivery Team
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
                Training Department
              </h2>
              <p className="text-sm sm:text-base text-gray-600 mt-1">
                Select a department member to view the complete profile.
              </p>
            </div>

            {/* Badge Count */}
            <div className="self-start md:self-auto bg-red-50 border border-red-200 text-red-600 text-xs font-bold px-3 py-1.5 rounded-full">
              {trainers?.length || 0} trainer
            </div>
          </div>

          {/* Directors Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trainers?.map((trainer) => (
              <div
                key={trainer.id}
                className="bg-white rounded-3xl border border-gray-200/80 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between group"
              >
                {/* Top Image & Badge Box */}
              <div className="relative bg-[#0d0d0d] overflow-hidden w-full aspect-[4/4.5] sm:aspect-[4/5]">
  {/* Role Badge (Top Right) */}
  <div className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10 bg-black/60 backdrop-blur-md border border-white/10 text-white text-[10px] sm:text-xs font-bold px-2.5 py-1 rounded-full">
    {trainer.roleCode || trainer.role?.match(/\(([^)]+)\)/)?.[1] || "TRAINER"}
  </div>

  {/* Full Width Image */}
  <div className="relative w-full h-full">
    <Image
      src={trainer.image}
      alt={trainer.name}
      fill
      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
      style={{ objectFit: 'cover', objectPosition: 'top center' }}
      className="transition-transform duration-500 group-hover:scale-105"
      priority={false}
    />
  </div>
</div>

                {/* Bottom Info Box */}
                <div className="p-6 flex flex-col justify-between flex-grow bg-white">
                  <div>
                    <span className="text-[11px] font-bold tracking-wider text-red-600 uppercase block mb-1">
                      Department Lead Profile
                    </span>
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-red-600 transition-colors">
                      {trainer.name}
                    </h3>
                    <p className="text-sm font-medium text-gray-500 mt-1">
                      {trainer.role}
                    </p>
                  </div>

                  {/* Bottom Tag & View Profile Button */}
                  <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between gap-3">
                    <span className="bg-red-50 text-red-700 text-xs font-semibold px-3 py-1.5 rounded-lg border border-red-100">
                      {trainer.tag}
                    </span>

                   
                   <Link href={`/pages/administration/training-department/${trainer.id}?category=leader`}>
                    <button className="bg-gray-900 cursor-pointer hover:bg-red-600 text-white font-semibold py-2 px-3.5 rounded-xl flex items-center justify-center gap-1.5 transition-colors text-xs shadow-md">
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
  );
};

export default TrainingDepartment;
