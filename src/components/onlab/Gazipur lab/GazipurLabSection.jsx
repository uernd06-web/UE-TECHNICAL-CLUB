import React from "react";
import GazipurLabCard from "./GazipurLabCard";

const GazipurLabSection = ({ gazipurData }) => {
//   console.log(data, "data from onlab card section");

  return (
    <section className="max-w-7xl mx-auto my-10 px-4 sm:px-6 lg:px-8">
      {/* Outer Card Container */}
      <div className="bg-white rounded-3xl shadow-sm border border-red-600/30 p-6 sm:p-8 md:p-10 transition-all">
        
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between lg:items-end gap-6 border-b border-gray-100 pb-8 mb-8">
          <div className="space-y-2 lg:max-w-xl">
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-red-700 block">
              PRACTICAL TRAINING LABS
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-950 tracking-tight leading-tight">
              Explore five hands-on engineering laboratories.
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-gray-500 font-medium leading-relaxed lg:max-w-md">
            Laboratory pictures are arranged in a clean grid. Select any lab to
            open its page containing detailed views, descriptions, equipment
            areas, activities, and outcomes.
          </p>
        </div>

        {/* Card Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {gazipurData?.map((lab) => (
            <GazipurLabCard key={lab.id || lab.title} lab={lab} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default GazipurLabSection;