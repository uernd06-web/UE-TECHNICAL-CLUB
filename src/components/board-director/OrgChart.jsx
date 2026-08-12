'use client'
import React from "react";
import Image from "next/image";

// টিমের ডাটা স্ট্রাকচার (প্রয়োজন অনুযায়ী নাম ও ছবি পরিবর্তন করতে পারবেন)
const orgData = [
  {
    sectionTitle: "Board of Directors",
    topMember: {
      name: "Managing Director",
      role: "Chief Executive Officer",
      image: "/avatar-placeholder.png", // public ফোল্ডারে ছবি রাখবেন
    },
    subLevels: [
      {
        levelTitle: "Executive Board",
        members: [
          { name: "Director 01", role: "Technical Operations", image: "/avatar-placeholder.png" },
          { name: "Director 02", role: "Academic Affairs", image: "/avatar-placeholder.png" },
          { name: "Director 03", role: "Corporate Planning", image: "/avatar-placeholder.png" },
        ],
      },
    ],
  },
  {
    sectionTitle: "Executive Team",
    topMember: {
      name: "Chief Operating Officer",
      role: "Operations Head",
      image: "/avatar-placeholder.png",
    },
    subLevels: [
      {
        levelTitle: "Department Leads",
        members: [
          { name: "Lead Engineer 01", role: "Automation & Control", image: "/avatar-placeholder.png" },
          { name: "Lead Engineer 02", role: "Software & NGX", image: "/avatar-placeholder.png" },
          { name: "Lead Instructor", role: "Training Division", image: "/avatar-placeholder.png" },
          { name: "Finance Head", role: "Accounts & Audit", image: "/avatar-placeholder.png" },
        ],
      },
    ],
  },
  {
    sectionTitle: "Training Division",
    topMember: {
      name: "Head of Training",
      role: "Chief Mentor",
      image: "/avatar-placeholder.png",
    },
    subLevels: [
      {
        levelTitle: "Mentors & Lab Instructors",
        members: [
          { name: "Senior Instructor", role: "Electrical & Power", image: "/avatar-placeholder.png" },
          { name: "Lab Instructor", role: "PLC & Industrial Automation", image: "/avatar-placeholder.png" },
          { name: "Junior Instructor", role: "Embedded Systems", image: "/avatar-placeholder.png" },
          { name: "Course Coordinator", role: "Student Support", image: "/avatar-placeholder.png" },
        ],
      },
    ],
  },
];

const MemberCard = ({ member, isTop = false }) => (
  <div className="flex flex-col items-center group">
    {/* Avatar Image with Border & Glow Effect */}
    <div
      className={`relative rounded-full overflow-hidden border-2 shadow-md transition-all duration-300 group-hover:scale-105 ${
        isTop
          ? "w-20 h-20 md:w-24 md:h-24 border-[#9B1C1C] ring-4 ring-red-100"
          : "w-14 h-14 md:w-16 md:h-16 border-gray-300 group-hover:border-[#9B1C1C]"
      }`}
    >
      <Image
        src={member.image}
        alt={member.name}
        fill
        className="object-cover"
        // ব্যাকআপ হিসাবে প্লেসহোল্ডার ডামি ইমেজ
        onError={(e) => {
          e.currentTarget.src = "https://via.placeholder.com/150";
        }}
      />
    </div>

    {/* Name & Role */}
    <div className="text-center mt-2">
      <h4
        className={`font-extrabold text-gray-900 group-hover:text-[#9B1C1C] transition-colors ${
          isTop ? "text-sm md:text-base" : "text-xs"
        }`}
      >
        {member.name}
      </h4>
      <p className="text-[10px] md:text-xs text-gray-500 font-medium">
        {member.role}
      </p>
    </div>
  </div>
);

const OrgChart = () => {
  return (
    <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-6xl mx-auto bg-white border border-gray-200 rounded-3xl p-6 sm:p-10 md:p-14 shadow-sm">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-red-50 border border-red-200 px-4 py-1.5 rounded-full mb-3">
            <span className="h-2 w-2 rounded-full bg-[#9B1C1C] animate-pulse"></span>
            <span className="text-xs font-bold uppercase tracking-wider text-[#9B1C1C]">
              Organizational Hierarchy
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 tracking-tight">
            Our Management Structure
          </h2>
        </div>

        {/* Tree Render */}
        <div className="space-y-20">
          {orgData.map((section, idx) => (
            <div key={idx} className="relative flex flex-col items-center">
              
              {/* Section Header Badge */}
              <div className="bg-[#9B1C1C] text-white text-xs md:text-sm font-bold uppercase tracking-widest px-6 py-2 rounded-full shadow-md mb-8">
                {section.sectionTitle}
              </div>

              {/* Top Level Member (Head of Section) */}
              <MemberCard member={section.topMember} isTop={true} />

              {/* Connecting Tree Lines */}
              {section.subLevels && section.subLevels.length > 0 && (
                <div className="w-full flex flex-col items-center my-4">
                  {/* Vertical Line */}
                  <div className="w-0.5 h-6 bg-red-500" />
                  
                  {/* Horizontal Line for Branches */}
                  <div className="w-[80%] max-w-3xl h-0.5 bg-red-500 relative hidden md:block">
                    {/* Branch Drop Lines */}
                    <div className="absolute left-0 top-0 w-0.5 h-6 bg-red-500" />
                    <div className="absolute left-1/2 -translate-x-1/2 top-0 w-0.5 h-6 bg-red-500" />
                    <div className="absolute right-0 top-0 w-0.5 h-6 bg-red-500" />
                  </div>
                  
                  {/* Mobile Fallback Vertical Line */}
                  <div className="w-0.5 h-6 bg-red-500 md:hidden" />
                </div>
              )}

              {/* Sub Members Row */}
              {section.subLevels && (
                <div className="w-full pt-2">
                  {section.subLevels.map((sub, sIdx) => (
                    <div
                      key={sIdx}
                      className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 justify-items-center max-w-4xl mx-auto"
                    >
                      {sub.members.map((member, mIdx) => (
                        <MemberCard key={mIdx} member={member} />
                      ))}
                    </div>
                  ))}
                </div>
              )}

              {/* Divider Between Big Sections */}
              {idx < orgData.length - 1 && (
                <div className="w-full border-b border-dashed border-gray-200 mt-16" />
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default OrgChart;