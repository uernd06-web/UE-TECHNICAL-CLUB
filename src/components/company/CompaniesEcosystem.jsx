import React from "react";
import Link from "next/link";

const CompaniesEcosystem = () => {
  // আপনার গ্রুপের অধীনস্থ কোম্পানিগুলোর লিস্ট
  const companies = [
    {
      id: "ue-training",
      name: "UE Training",
      category: "Education & Skills",
      description:
        "Professional engineering training, practical lab programs, and skill development ecosystem.",
      link: "/pages/community/companies",
    },
    {
      id: "ue-club",
      name: "UE Club & Community",
      category: "Networking & Memberships",
      description:
        "Exclusive member ecosystem connecting engineers, mentors, and industry pioneers.",
      link: "/pages/programs/ue-club",
    },
    {
      id: "ngx",
      name: "NGX Platform",
      category: "Digital Innovation",
      description:
        "Next-generation digital engineering platform, project challenges, and tech solutions.",
      link: "/pages/community/ngx",
    },
    {
      id: "ue-solutions",
      name: "UE Engineering & Consultancy",
      category: "Industrial Solutions",
      description:
        "Core engineering services, automation solutions, and enterprise technical consulting.",
      link: "/pages/community/companies",
    },
  ];

  return (
    <section className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8 font-sans border-t border-gray-200">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-red-50 border border-red-200 px-4 py-1.5 rounded-full mb-4">
            <span className="h-2 w-2 rounded-full bg-[#9B1C1C] animate-pulse"></span>
            <span className="text-xs font-bold uppercase tracking-wider text-[#9B1C1C]">
              Corporate Structure
            </span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 tracking-tight mb-4">
            Our Business Ecosystem
          </h2>
          
          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            Operating under the strategic leadership of{" "}
            <span className="font-bold text-gray-900">Ulterior Engineering Group</span>, 
            our specialized concerns drive innovation across education, consulting, and technology.
          </p>
        </div>

        {/* Mother Company Featured Card */}
        <div className="bg-white border-2 border-[#9B1C1C]/20 rounded-2xl p-6 sm:p-8 md:p-10 shadow-sm mb-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 bg-[#9B1C1C] text-white text-[10px] font-extrabold uppercase px-4 py-1 rounded-bl-xl tracking-widest">
            Parent Organization
          </div>
          <div className="max-w-2xl">
            <h3 className="text-2xl md:text-3xl font-black text-gray-900 mb-2">
              Ulterior Engineering Group
            </h3>
            <p className="text-xs md:text-sm text-[#9B1C1C] font-semibold tracking-wider uppercase mb-4">
              Group Leadership • Engineering Vision • Strategic Coordination
            </p>
            <p className="text-gray-600 text-sm leading-relaxed">
              Provides overall governance, strategic investments, and cross-industry leadership to ensure all business verticals deliver world-class engineering standards.
            </p>
          </div>
        </div>

        {/* Sister Companies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {companies.map((company) => (
            <div
              key={company.id}
              className="bg-white border border-gray-200 hover:border-[#9B1C1C]/40 rounded-2xl p-6 sm:p-8 transition-all duration-300 shadow-sm hover:shadow-md flex flex-col justify-between group"
            >
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400 block mb-2">
                  {company.category}
                </span>
                <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#9B1C1C] transition-colors">
                  {company.name}
                </h4>
                <p className="text-sm text-gray-600 leading-relaxed mb-6">
                  {company.description}
                </p>
              </div>

              <Link
                href={company.link}
                className="inline-flex items-center gap-2 text-xs font-bold text-[#9B1C1C] hover:text-red-800 uppercase tracking-wider transition-all"
              >
                Learn More <span className="text-sm transition-transform group-hover:translate-x-1">→</span>
              </Link>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CompaniesEcosystem;