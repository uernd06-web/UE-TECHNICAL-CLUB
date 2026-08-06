"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Check, ShieldAlert, ArrowUpRight, Maximize2, Download, X, Search } from "lucide-react";

const certificationData = [
  {
    id: "iso",
    type: "iso",
    category: "GLOBAL STANDARD",
    title: "ISO 21001:2018 Certification",
    issuer: "International Organization for Standardization",
    regNo: "ISO-REG-2026-9901",
    validity: "Valid & Active",
    image: "/images/iso-certificate.jpg",
    features: [
      "Educational Organizations Management System (EOMS)",
      "International benchmark for technical training quality",
      "Audited curriculum and laboratory infrastructure",
    ],
  },
  {
    id: "nsda",
    type: "nsda",
    category: "GOVERNMENT APPROVED",
    title: "NSDA Registration Certificate",
    issuer: "Prime Minister's Office, Government of Bangladesh",
    regNo: "NSDA/STP/CHIT/2026/042",
    validity: "Valid & Active",
    image: "/images/nsda-certificate.jpg",
    features: [
      "Registered Skills Training Provider (STP)",
      "National Skills Development Authority framework compliance",
      "Official government recognized competency credentials",
    ],
  },
];

export default function CertificateGrid({ activeTab }) {
  const [selectedCert, setSelectedCert] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredData = certificationData.filter((item) => {
    const matchesTab = activeTab === "all" || item.type === activeTab;
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.regNo.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesSearch;
  });

  return (
    <div className="space-y-8">
      
      {/* Search & Verification Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-white p-4 rounded-2xl border border-gray-200/80 shadow-sm">
        <div className="relative w-full sm:w-96">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search certificate or reg number..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-slate-50 text-xs sm:text-sm pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-red-600 transition"
          />
        </div>
        <p className="text-xs text-gray-500 font-medium text-center sm:text-right">
          Showing <span className="font-bold text-gray-900">{filteredData.length}</span> official accreditation records
        </p>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredData.map((item) => (
          <div
            key={item.id}
            className="group relative bg-white rounded-3xl p-6 sm:p-8 border border-gray-200/90 shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col justify-between overflow-hidden"
          >
            {/* Top Border Highlight */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-red-600 to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity" />

            <div>
              {/* Header Badge */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-red-600 bg-red-50 border border-red-100 px-3 py-1 rounded-md">
                  {item.category}
                </span>
                <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-600 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                  {item.validity}
                </span>
              </div>

              {/* Title & Issuer */}
              <h3 className="text-xl sm:text-2xl font-black text-gray-950 mb-1 group-hover:text-red-600 transition-colors">
                {item.title}
              </h3>
              <p className="text-xs text-gray-500 font-medium mb-6">
                Issued by: <span className="text-gray-800 font-semibold">{item.issuer}</span>
              </p>

              {/* Card Preview Area */}
              <div className="relative w-full h-[320px] sm:h-[380px] bg-slate-900 rounded-2xl overflow-hidden mb-6 border border-gray-200 shadow-inner group/img">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-contain p-3 group-hover/img:scale-105 transition-transform duration-500"
                />

                {/* Hover Quick Fullscreen Button */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                  <button
                    onClick={() => setSelectedCert(item)}
                    className="bg-white text-gray-900 font-extrabold text-xs px-5 py-2.5 rounded-xl shadow-xl flex items-center gap-2 hover:bg-red-600 hover:text-white transition cursor-pointer"
                  >
                    <Maximize2 className="w-4 h-4" /> Full View
                  </button>
                </div>
              </div>

              {/* Highlights */}
              <ul className="space-y-2 mb-8">
                {item.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-gray-600 font-medium">
                    <div className="w-4 h-4 rounded-full bg-red-50 text-red-600 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-2.5 h-2.5 stroke-[3]" />
                    </div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Bottom Actions */}
            <div className="pt-4 border-t border-gray-100 flex items-center justify-between gap-3">
              <span className="text-[11px] font-mono font-bold text-gray-400">
                ID: {item.regNo}
              </span>
              <button
                onClick={() => setSelectedCert(item)}
                className="inline-flex items-center gap-1.5 text-xs font-black text-red-600 hover:text-red-700 hover:underline cursor-pointer"
              >
                Inspect Record <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        ))}
      </div>

      {/* Modal Popup */}
      {selectedCert && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
          <div className="relative bg-white rounded-3xl max-w-4xl w-full p-6 sm:p-8 max-h-[92vh] overflow-y-auto shadow-2xl flex flex-col justify-between">
            <div className="flex justify-between items-start border-b border-gray-200 pb-4 mb-6">
              <div>
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-red-600 bg-red-50 px-2.5 py-1 rounded">
                  {selectedCert.category}
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-gray-900 mt-2">
                  {selectedCert.title}
                </h3>
                <p className="text-xs text-gray-500 font-mono mt-1">
                  Official Reg No: {selectedCert.regNo}
                </p>
              </div>
              <button
                onClick={() => setSelectedCert(null)}
                className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 flex items-center justify-center transition cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="relative w-full h-[450px] sm:h-[550px] bg-slate-950 rounded-2xl overflow-hidden mb-6 flex items-center justify-center">
              <Image
                src={selectedCert.image}
                alt={selectedCert.title}
                fill
                className="object-contain p-4"
              />
            </div>

            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-4 border-t border-gray-200">
              <span className="text-xs text-gray-500 font-medium">
                Authority: <strong className="text-gray-900">{selectedCert.issuer}</strong>
              </span>

              <div className="flex gap-3 w-full sm:w-auto">
                <button
                  onClick={() => window.print()}
                  className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 bg-red-600 text-white font-bold text-xs px-5 py-2.5 rounded-xl hover:bg-red-700 transition cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5" /> Save Copy
                </button>
                <button
                  onClick={() => setSelectedCert(null)}
                  className="flex-1 sm:flex-none bg-gray-100 text-gray-800 font-bold text-xs px-5 py-2.5 rounded-xl hover:bg-gray-200 transition cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}