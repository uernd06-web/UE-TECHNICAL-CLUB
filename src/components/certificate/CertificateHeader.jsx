import React from "react";
import { ShieldCheck, Award, FileDown, Search } from "lucide-react";

export default function CertificateHeader({ activeTab, setActiveTab }) {
  return (
    <div className="relative rounded-3xl bg-gradient-to-b from-gray-950 via-slate-900 to-gray-900 p-8 sm:p-12 md:p-16 text-white overflow-hidden shadow-2xl mb-12 border border-white/10">
      
      {/* Background Accent Lights */}
      <div className="absolute top-0 right-0 -mt-12 -mr-12 w-96 h-96 bg-red-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -mb-12 -ml-12 w-96 h-96 bg-red-900/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-4xl">
        
        {/* Top Tag */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs font-semibold text-red-400 mb-6">
          <ShieldCheck className="w-4 h-4 text-red-500" />
          <span>Accreditation & Standards Records</span>
        </div>

        {/* Title */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight leading-none mb-6">
          Verified National & <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-400 to-amber-500">
            International Credentials.
          </span>
        </h1>

        {/* Description */}
        <p className="text-sm sm:text-base text-gray-300 leading-relaxed max-w-2xl font-normal mb-8">
          Explore official quality management standards and government-approved skills training registrations issued to Ulterior Engineering & Professional Training Institute.
        </p>

        {/* Action Controls & Filter Tabs */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pt-6 border-t border-white/10">
          
          {/* Custom Tabs */}
          <div className="flex p-1 bg-black/40 backdrop-blur-lg rounded-2xl border border-white/10">
            <button
              onClick={() => setActiveTab("all")}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all ${
                activeTab === "all"
                  ? "bg-red-600 text-white shadow-lg"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              All Records
            </button>
            <button
              onClick={() => setActiveTab("iso")}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all ${
                activeTab === "iso"
                  ? "bg-red-600 text-white shadow-lg"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              ISO 21001:2018
            </button>
            <button
              onClick={() => setActiveTab("nsda")}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all ${
                activeTab === "nsda"
                  ? "bg-red-600 text-white shadow-lg"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              NSDA Reg.
            </button>
          </div>

          {/* Quick Download All */}
          <button className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/15 px-5 py-2.5 rounded-xl text-xs font-bold backdrop-blur-md transition cursor-pointer">
            <FileDown className="w-4 h-4 text-red-400" />
            <span>Download All Documentation</span>
          </button>
        </div>

      </div>
    </div>
  );
}