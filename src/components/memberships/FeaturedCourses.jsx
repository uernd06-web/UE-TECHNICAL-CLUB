import React from "react";
import { ArrowRight } from "lucide-react";

export default function FeaturedCourses() {
  const courses = [
    {
      id: 1,
      badge: "M",
      title: "Advanced Industrial Motor Controlling & Relay Logic Control",
      regularPrice: "10,000 BDT",
    },
    {
      id: 2,
      badge: "PV",
      title: "Solar PV System – Panel Selection & Design Steps",
      regularPrice: "10,000 BDT",
      isHighlighted: true, 
    },
    {
      id: 3,
      badge: "PLC",
      title: "Basic PLC with Project-Based Industrial Training",
      regularPrice: "10,000 BDT",
    },
  ];

  return (
    <section className="w-full max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 font-sans">
      
      {/* Header Section */}
      <div className="text-center max-w-3xl mx-auto space-y-2 mb-10">
        <span className="text-xs font-bold uppercase tracking-widest text-red-700 block">
          FEATURED FREE COURSES
        </span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
          Practical short courses available through referral benefits
        </h2>
      </div>

      {/* Course Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch mb-10">
        {courses.map((course) => (
          <div
            key={course.id}
            className={`bg-white rounded-2xl p-6 sm:p-7 flex flex-col justify-between border transition-all duration-200 ${
              course.isHighlighted
                ? "border-red-600 shadow-md"
                : "border-gray-200 hover:border-gray-300"
            }`}
          >
            <div>
              {/* Badge Icon */}
              <div className="w-10 h-10 rounded-xl bg-black text-white flex items-center justify-center font-bold text-xs mb-6">
                {course.badge}
              </div>

              {/* Course Title */}
              <h3 className="text-base sm:text-lg font-bold text-gray-900 leading-snug mb-6">
                {course.title}
              </h3>
            </div>

            {/* Price Info */}
            <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-xs sm:text-sm">
              <span className="text-gray-500 font-medium">Regular Price</span>
              <span className="font-bold text-gray-900">{course.regularPrice}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Action Button */}
      <div className="flex justify-center">
        <button className="inline-flex items-center gap-2 bg-[#991b1b] hover:bg-[#7f1d1d] text-white font-bold text-sm px-7 py-3 rounded-xl transition-colors cursor-pointer">
          <span>Click Here to Apply</span>
          <ArrowRight className="w-4 h-4 stroke-[2.5]" />
        </button>
      </div>

    </section>
  );
}