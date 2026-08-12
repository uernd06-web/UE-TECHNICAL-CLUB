import React from "react";
import Link from "next/link";

const CompaniesTree = () => {
  const sisterCompanies = [
    {
      code: "EC",
      name: "UE Energy & Control",
      description:
        "Engineering solutions, control systems, industrial automation and energy services.",
      link: "/pages/community/companies",
    },
    {
      code: "NG",
      name: "NGX",
      description:
        "Digital learning, project challenges, professional community and industry connection.",
      link: "/pages/community/ngx",
    },
    {
      code: "UT",
      name: "Uthboe",
      description:
        "A specialized group initiative supporting the wider engineering ecosystem.",
      link: "/pages/community/companies",
    },
  ];

  return (
    <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-6xl mx-auto bg-white border border-gray-200 rounded-3xl p-6 sm:p-10 md:p-14 shadow-sm relative">
        
        {/* --- Top Level: Mother Company --- */}
        <div className="flex justify-center relative z-10">
          <div className="bg-gradient-to-b from-black via-slate-950 to-red-950 text-white rounded-2xl p-6 sm:p-8 text-center max-w-xl w-full shadow-lg border border-red-900/30">
            <span className="text-[10px] sm:text-xs font-black uppercase tracking-widest text-red-500 block mb-2">
              MOTHER COMPANY
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-2">
              Ulterior Engineering
            </h2>
            <p className="text-xs sm:text-sm text-gray-300 font-medium">
              Group leadership, engineering vision and strategic coordination.
            </p>
          </div>
        </div>

        {/* --- Connecting Tree Lines --- */}
        <div className="relative w-full my-6 hidden md:block">
          {/* Vertical line coming out from Mother Company */}
          <div className="w-0.5 h-8 bg-red-600 mx-auto" />

          {/* Horizontal connecting bar extending to all 3 columns */}
          <div className="w-[67%] h-0.5 bg-red-600 mx-auto relative">
            {/* Vertical drop lines to each of the 3 cards */}
            <div className="absolute left-0 top-0 w-0.5 h-8 bg-red-600" />
            <div className="absolute left-1/2 -translate-x-1/2 top-0 w-0.5 h-8 bg-red-600" />
            <div className="absolute right-0 top-0 w-0.5 h-8 bg-red-600" />
          </div>
        </div>

        {/* Mobile Connector (Vertical spacing line) */}
        <div className="w-0.5 h-8 bg-red-600 mx-auto md:hidden my-2" />

        {/* --- Bottom Level: Sister Companies Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10 pt-2 md:pt-6">
          {sisterCompanies.map((item, idx) => (
            <div
              key={idx}
              className="bg-white border border-gray-200 rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-all duration-200 flex flex-col items-center justify-between min-h-[260px] group"
            >
              <div className="flex flex-col items-center w-full">
                {/* Short Badge (EC, NG, UT) */}
                <div className="bg-red-50 text-[#9B1C1C] font-bold text-xs px-3 py-1 rounded-lg mb-4 inline-block">
                  {item.code}
                </div>

                {/* Company Name */}
                <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-[#9B1C1C] transition-colors">
                  {item.name}
                </h3>

                {/* Company Description */}
                <p className="text-xs text-gray-500 leading-relaxed max-w-xs">
                  {item.description}
                </p>
              </div>

              {/* Action Link */}
              <Link
                href={item.link}
                className="text-xs font-bold text-[#9B1C1C] hover:text-red-800 transition-all flex items-center gap-1 mt-6"
              >
                Explore company <span className="text-sm">→</span>
              </Link>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CompaniesTree;