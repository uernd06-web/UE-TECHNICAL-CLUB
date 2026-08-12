import React from 'react';
import { Award, Briefcase, Layers, TrendingUp } from 'lucide-react';

const SuccessBanner = () => {
  const stats = [
    {
      number: '12',
      label: 'Featured stories',
      icon: <Award className="w-5 h-5 text-red-600 shrink-0" />,
    },
    {
      number: '08+',
      label: 'Engineering disciplines',
      icon: <Layers className="w-5 h-5 text-red-600 shrink-0" />,
    },
    {
      number: 'Project',
      label: 'Practical achievement',
      icon: <Briefcase className="w-5 h-5 text-red-600 shrink-0" />,
    },
    {
      number: 'Career',
      label: 'Professional growth',
      icon: <TrendingUp className="w-5 h-5 text-red-600 shrink-0" />,
    },
  ];

  return (
    <section className="w-full max-w-7xl mx-auto p-4 md:p-6">
      {/* Outer Banner Box */}
      <div 
        className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80')`,
        }}
      >
        {/* Soft Light Overlay for proper contrast */}
        <div className="absolute inset-0 bg-white/90 backdrop-blur-[2px]" />

        {/* Subtle Dot Grid Overlay */}
        <div 
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(#94a3b8 1px, transparent 1px)`,
            backgroundSize: '24px 24px',
          }}
        />

        {/* Main Content Layout */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 md:p-10 lg:p-12 items-center">
          
          {/* Left Column: Text Content */}
          <div className="lg:col-span-7 space-y-4">
            {/* Pill Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 border border-red-200">
              <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-wide text-red-600">
                Member Achievements & Career Growth
              </span>
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
              Our <span className="text-red-600">Success</span>
            </h1>

            {/* Description */}
            <p className="text-slate-600 text-sm md:text-base leading-relaxed max-w-xl">
              Discover selected UETraining member journeys that connect practical engineering 
              learning with project confidence, stronger technical capability, and professional 
              career progression.
            </p>
          </div>

          {/* Right Column: 2x2 Grid Stats Cards */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
            {stats.map((item, index) => (
              <div 
                key={index}
                className="flex flex-col justify-between p-5 rounded-2xl bg-white/90 border border-slate-200 shadow-sm hover:shadow-md hover:border-red-300 transition-all duration-200"
              >
                <div className="flex items-start justify-between gap-2 mb-3">
                  <span className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
                    {item.number}
                  </span>
                  <div className="p-2 rounded-lg bg-red-50">
                    {item.icon}
                  </div>
                </div>
                <p className="text-xs md:text-sm font-medium text-slate-600 leading-snug">
                  {item.label}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default SuccessBanner;