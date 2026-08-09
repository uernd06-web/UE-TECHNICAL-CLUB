import React from "react";
import { UserCheck, Wrench, Users, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function LearningEcosystem() {
  const features = [
    {
      id: "01",
      title: "Professional Membership",
      description:
        "A structured engineering membership system for continuous technical and career development.",
      icon: UserCheck,
    },
    {
      id: "02",
      title: "Practical Learning",
      description:
        "Develop practical competence through laboratories, projects, simulations and technical activities.",
      icon: Wrench,
    },
    {
      id: "03",
      title: "Engineering Community",
      description:
        "Connect with students, engineers, trainers, alumni and industry professionals.",
      icon: Users,
    },
  ];

  return (
    <section className="w-full bg-slate-100/60 py-16 sm:py-20 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mb-12">
          <span className="text-[11px] font-black uppercase tracking-widest text-red-600 block mb-3">
            MEMBERSHIP LEARNING ECOSYSTEM
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-950 tracking-tight leading-tight mb-4">
            Built for long-term engineering <br className="hidden sm:inline" />
            development.
          </h2>
          <p className="text-xs sm:text-sm text-gray-500 font-medium leading-relaxed max-w-2xl mx-auto">
            UE Club combines professional membership, practical competence and community-based engineering development.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {features.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="group relative bg-white rounded-3xl p-7 sm:p-8 border border-gray-200/80 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-pointer"
              >
                {/* Top Accent Hover Line */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-transparent group-hover:bg-red-600 transition-colors duration-300" />

                <div>
                  {/* ID Number & Icon Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl sm:text-4xl font-black text-red-600 tracking-tight">
                      {item.id}
                    </span>
                    <div className="w-10 h-10 rounded-2xl bg-red-50 text-red-600 flex items-center justify-center group-hover:bg-red-600 group-hover:text-white transition-colors duration-300 shadow-sm">
                      <Icon className="w-5 h-5 stroke-[2.2]" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-xl font-bold text-gray-950 mb-3 group-hover:text-red-600 transition-colors">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-gray-500 leading-relaxed font-medium">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4">

          <Link href={'/pages/programs/memberships'}>
          <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-red-700 hover:bg-red-800 text-white font-extrabold text-xs sm:text-sm px-7 py-3.5 rounded-2xl shadow-md shadow-red-700/20 hover:shadow-lg transition-all cursor-pointer">
            <span>View Membership Options</span>
            <ArrowRight className="w-4 h-4 stroke-[2.5]" />
          </button>
          
          </Link>

         <Link href={'/pages/programs/admission'}>
          <button className="w-full sm:w-auto inline-flex items-center justify-center bg-white hover:bg-gray-50 text-gray-950 border border-gray-300 font-extrabold text-xs sm:text-sm px-7 py-3.5 rounded-2xl shadow-sm transition-all cursor-pointer">
            Join UE Club
          </button>
         </Link>
        </div>

      </div>
    </section>
  );
}