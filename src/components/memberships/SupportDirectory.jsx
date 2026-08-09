import React from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function SupportDirectory() {
  const directoryData = [
    {
      membershipType: "Industrial Membership",
      contactNumbers: ["+8801897999594"],
      contactPerson: "Engr. Raihan, Engr. Mohin",
      programsTrack: "Solar PV (PV-syst), HVAC, Power System",
    },
    {
      membershipType: "Bronze Membership",
      contactNumbers: ["+8801616943937"],
      contactPerson: "Engr. Sabiha",
      programsTrack: "Solar PV SCADA, SCADA Pro, APEC-AE (Automation Pro)",
    },
    {
      membershipType: "Silver Membership",
      contactNumbers: ["+8801897999599", "+8801897999595"],
      contactPerson: "Engr. Sara, Engr. Odhora",
      programsTrack: "APEC-PE (Automation Combined), BMS Pro",
    },
    {
      membershipType: "Gold Membership",
      contactNumbers: ["+8801897999595", "+8801897999599"],
      contactPerson: "Engr. Odhora, Engr. Sara",
      programsTrack: "APEC-SE Program",
    },
    {
      membershipType: "Elite Membership",
      contactNumbers: ["+8801818988959"],
      contactPerson: "—",
      programsTrack: "GCAE Program",
    },
    {
      membershipType: "VIP Membership",
      contactNumbers: ["+8801818988959"],
      contactPerson: "—",
      programsTrack: "Mission 121 – Global Career Track",
    },
  ];

  return (
    <section className="w-full max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 font-sans">
      
      {/* Header Section */}
      <div className="text-center max-w-3xl mx-auto space-y-1.5 mb-8">
        <span className="text-xs font-bold uppercase tracking-widest text-red-700 block">
          MEMBERSHIP SUPPORT DIRECTORY
        </span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-950 tracking-tight">
          Contact numbers, people and program tracks
        </h2>
      </div>

      {/* Table Container */}
      <div className="overflow-x-auto rounded-2xl border border-gray-200/80 shadow-xs mb-8">
        <table className="w-full text-left border-collapse">
          
          {/* Table Header */}
          <thead>
            <tr className="bg-black text-white text-xs sm:text-sm uppercase tracking-wider">
              <th className="py-4 px-6 font-bold">Membership Type</th>
              <th className="py-4 px-6 font-bold">Contact Number</th>
              <th className="py-4 px-6 font-bold">Contact Person</th>
              <th className="py-4 px-6 font-bold">Programs / Track</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody className="divide-y divide-gray-100 text-xs sm:text-sm font-semibold">
            {directoryData.map((row, index) => (
              <tr
                key={index}
                className={`transition-colors duration-150 hover:bg-red-50/60 ${
                  index % 2 !== 0 ? "bg-[#fff8f8]" : "bg-white"
                }`}
              >
                {/* Membership Type */}
                <td className="py-4 px-6 text-red-700 font-bold whitespace-nowrap">
                  {row.membershipType}
                </td>

                {/* Contact Numbers */}
                <td className="py-4 px-6 text-red-700 font-bold whitespace-nowrap">
                  {row.contactNumbers.map((num, i) => (
                    <div key={i}>{num}</div>
                  ))}
                </td>

                {/* Contact Person */}
                <td className="py-4 px-6 text-gray-800 font-medium whitespace-nowrap">
                  {row.contactPerson}
                </td>

                {/* Programs / Track */}
                <td className="py-4 px-6 text-gray-900 font-medium">
                  {row.programsTrack}
                </td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>

      {/* Action Button */}
      <Link href={'/pages/programs/ue-club'} className="flex justify-center">
        <button className="inline-flex items-center gap-2 bg-[#b91c1c] hover:bg-[#991b1b] active:scale-95 text-white font-bold text-sm px-7 py-3 rounded-xl transition-all duration-200 cursor-pointer shadow-sm">
          <span>Click to Join UE Club</span>
          <ArrowRight className="w-4 h-4 stroke-[2.5]" />
        </button>
      </Link>

    </section>
  );
}