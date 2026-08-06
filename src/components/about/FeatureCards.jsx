
'use client'
import React from "react";
import { Wrench, Microscope, Users, Lightbulb } from "lucide-react";

const FeatureCards = () => {
  const steps = [
    {
      id: "01",
      title: "Technical Development",
      description:
        "Structured engineering learning focused on real technical competence and modern workflows.",
      icon: Wrench,
    },
    {
      id: "02",
      title: "Practical Experience",
      description:
        "Lab work, simulation, commissioning and project-based practice using industrial tools.",
      icon: Microscope,
    },
    {
      id: "03",
      title: "Professional Network",
      description:
        "A thriving community connecting engineering students, mentors, and industry professionals.",
      icon: Users,
    },
    {
      id: "04",
      title: "Research & Innovation",
      description:
        "Real-world opportunities in prototype design, R&D projects, and technical consultancy.",
      icon: Lightbulb,
    },
  ];

  return (
    <section className="w-full bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((step) => {
          const Icon = step.icon;
          return (
            <div
              key={step.id}
              className="group relative bg-white p-7 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-pointer"
            >
              {/* Top Accent Line (Hover করলে লাল হবে) */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-transparent group-hover:bg-red-600 transition-colors duration-300" />

              <div>
                {/* Number & Icon Header */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-3xl font-black text-red-600 tracking-tight">
                    {step.id}
                  </span>
                  
                  {/* Icon Badge */}
                  <div className="w-10 h-10 rounded-xl bg-red-50 text-red-600 flex items-center justify-center group-hover:bg-red-600 group-hover:text-white transition-colors duration-300">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                {/* Card Title */}
                <h3 className="text-lg font-extrabold text-gray-900 mb-3 group-hover:text-red-600 transition-colors">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Bottom Subtle Arrow Link */}
              <div className="mt-6 pt-4 border-t border-gray-100 flex items-center text-xs font-bold text-gray-400 group-hover:text-red-600 transition-colors">
                <span>Learn More</span>
                <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FeatureCards;