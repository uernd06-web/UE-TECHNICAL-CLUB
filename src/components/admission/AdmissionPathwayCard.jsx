"use client";

import React from "react";
import {  FiCheckCircle } from "react-icons/fi";

const AdmissionPathwayCard = () => {
  const steps = [
    {
      step: "01",
      title: "Choose your pathway",
      description:
        "Match your study background and career goal with the relevant technical program.",
    },
    {
      step: "02",
      title: "Submit an inquiry",
      description:
        "Provide your contact details, education level and preferred course.",
    },
    {
      step: "03",
      title: "Receive counseling",
      description:
        "The training team can discuss course structure, schedule and learning outcomes.",
    },
    {
      step: "04",
      title: "Confirm enrollment",
      description:
        "Complete the official admission and payment process after verification.",
    },
  ];

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-white rounded-3xl p-6 sm:p-8 md:p-10 shadow-xl border border-gray-800/80 h-full flex flex-col justify-between">
      {/* Background Accent Glow */}
      <div className="absolute top-0 right-0 -mr-16 -mt-16 w-60 h-60 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />

      <div>
        {/* Top Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-950/40 border border-red-800/50 text-red-400 mb-6">
          <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
          <span className="text-[11px] font-bold tracking-wider uppercase">
            Admission Process
          </span>
        </div>

        {/* Heading */}
        <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-[1.15] mb-4">
          Your engineering <br className="hidden sm:block" />
          pathway starts <span className="text-red-500">here.</span>
        </h3>

        {/* Subtitle */}
        <p className="text-sm text-gray-400 font-medium leading-relaxed mb-8">
          Select a program, submit your information and connect with the training
          team for schedule, eligibility, fees and enrollment confirmation.
        </p>

        {/* Timeline Steps */}
        <div className="relative space-y-6">
          {/* Vertical Timeline Connecting Line */}
          <div className="absolute left-5 top-6 bottom-6 w-0.5 bg-gradient-to-b from-red-600/50 via-gray-800 to-transparent pointer-events-none" />

          {steps.map((item, index) => (
            <div key={index} className="relative flex items-start gap-4 group">
              {/* Step Badge / Number */}
              <div className="relative z-10 flex items-center justify-center w-10 h-10 rounded-xl bg-gray-900 border border-red-900/60 text-red-400 font-black text-xs shrink-0 transition-colors group-hover:border-red-500 group-hover:bg-red-950/30">
                {item.step}
              </div>

              {/* Step Content */}
              <div className="pt-0.5 space-y-1">
                <h4 className="text-base font-bold text-gray-100 group-hover:text-red-400 transition-colors">
                  {item.title}
                </h4>
                <p className="text-xs sm:text-sm text-gray-400 font-medium leading-normal">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Feature Note */}
      <div className="mt-8 pt-6 border-t border-gray-800/80 flex items-center gap-3 text-xs text-gray-400 font-medium">
        <FiCheckCircle className="text-red-500 text-lg shrink-0" />
        <span>Need guidance? Our expert team is ready to assist you.</span>
      </div>
    </div>
  );
};

export default AdmissionPathwayCard;