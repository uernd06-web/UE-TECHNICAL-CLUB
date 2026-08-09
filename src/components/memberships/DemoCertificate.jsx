import React from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function DemoCertificate() {
  const certificates = [
    {
      id: 1,
      title: "Automation Pro",
      image: "/certificate.png", // আপনার ইমেজের ফাইল পাথ দিন
    },
    {
      id: 2,
      title: "BMS Pro",
      image: "/certificate.png",
    },
    {
      id: 3,
      title: "SCADA Pro",
      image: "/certificate.png",
    },
    {
      id: 4,
      title: "Solar PV Pro",
      image: "/certificate.png", 
    },
    {
      id: 5,
      title: "Power Plant Pro",
      image: "/certificate.png",
    },
    {
      id: 6,
      title: "HVAC Pro",
      image: "/certificate.png",
    },
  ];

  return (
    <section className="w-full  mx-auto py-12 px-4 sm:px-6 lg:px-8 font-sans bg-gray-200 rounded-none">
      
      {/* Header Section */}
      <div className="text-center max-w-3xl mx-auto space-y-2 mb-10">
        <span className="text-xs font-bold uppercase tracking-widest text-red-700 block">
          PROFESSIONAL CERTIFICATION
        </span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-950 tracking-tight">
          View our professional demo certificates
        </h2>
        <p className="text-xs sm:text-sm text-gray-500 font-medium pt-1">
          Explore sample certificates for automation, BMS, SCADA, solar, power and HVAC training programs.
        </p>
      </div>

      {/* Certificates Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
        {certificates.map((cert) => (
          <div
            key={cert.id}
            className="group bg-white rounded-2xl p-4 sm:p-5 border border-gray-200/90 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
          >
            {/* Image Container */}
            <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-gray-50 border border-gray-100 mb-4">
              <Image
                src={cert.image}
                alt={cert.title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Content & Action Buttons */}
            <div className="space-y-3">
              {/* Category Badge / Red Bar */}
              <div className="w-full bg-[#b91c1c] text-white text-center font-bold text-sm sm:text-base py-2.5 rounded-xl shadow-xs">
                {cert.title}
              </div>

              {/* View Demo Button */}
              <button className="w-full inline-flex items-center justify-center gap-1.5 bg-white hover:bg-gray-50 text-gray-900 border border-gray-300 font-bold text-xs sm:text-sm py-2.5 rounded-xl transition-all cursor-pointer group-hover:border-gray-400">
                <span>View demo certificate</span>
                <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
              </button>
            </div>

          </div>
        ))}
      </div>

    </section>
  );
}