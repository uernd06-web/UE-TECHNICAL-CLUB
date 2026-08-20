import { dhakaLab } from '@/data/dhakaLabData';
import { gazipurLab } from '@/data/gazipurLabData';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import React from 'react';
import { FaArrowLeft, FaCheckCircle, FaFlask, FaGraduationCap } from 'react-icons/fa';

const GazipurLabDetails = async ({ params }) => {
  const { id } = await params;

  // Find single lab by matching ID
  const singleLab = gazipurLab.find((gazipur) => String(gazipur.id) === String(id));

  // Show 404 page if lab is not found
  if (!singleLab) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-50 text-slate-800 pt-28 pb-16 px-6 md:px-16">
      <div className="max-w-6xl mx-auto space-y-8">
        
        {/* Top Navigation / Back Button */}
        <div>
          <Link
            href="/pages/programs/onlab/gazipur"
            className="inline-flex items-center gap-2 text-sm text-slate-600 hover:text-red-600 transition-colors duration-200 bg-white border border-slate-200 shadow-sm px-4 py-2 rounded-lg font-medium"
          >
            <FaArrowLeft className="text-red-600" /> Back to Labs
          </Link>
        </div>

        {/* Hero Banner Area (Light Theme) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-white border border-slate-200/80 rounded-2xl p-6 md:p-8 shadow-sm">
          
          {/* Left Side: Lab Details */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="bg-red-50 text-red-700 text-xs font-bold px-3 py-1 rounded-md border border-red-200 uppercase tracking-wider">
                {singleLab.labBadge}
              </span>
              <span className="text-slate-500 text-xs font-semibold uppercase tracking-widest">
                {singleLab.category}
              </span>
            </div>

            <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 leading-tight">
              {singleLab.title}
            </h1>

            <p className="text-slate-600 text-base md:text-lg leading-relaxed">
              {singleLab.description}
            </p>

            <div className="pt-4 flex flex-wrap gap-4">
              <Link
                href="/pages/programs/admission"
                className="bg-red-600 hover:bg-red-700 text-white font-semibold text-sm px-6 py-3 rounded-xl transition-all duration-300 shadow-md shadow-red-200 inline-flex items-center gap-2"
              >
                <FaGraduationCap className="text-lg" /> Apply for Practical Training
              </Link>
            </div>
          </div>

          {/* Right Side: Lab Image */}
          <div className="relative w-full h-64 md:h-96 rounded-xl overflow-hidden border border-slate-200 shadow-md">
            <Image
              src={singleLab.image}
              alt={singleLab.title}
              fill
              priority
              className="object-cover hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>

        {/* Detailed Lab Specifications / Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white border border-slate-200 p-6 rounded-xl space-y-2 shadow-sm hover:shadow-md transition-shadow">
            <FaFlask className="text-red-600 text-2xl mb-2" />
            <h3 className="text-slate-900 font-bold text-lg">Practical Exposure</h3>
            <p className="text-slate-600 text-sm">
              Hands-on practical equipment setup and real-time environment testing.
            </p>
          </div>

          <div className="bg-white border border-slate-200 p-6 rounded-xl space-y-2 shadow-sm hover:shadow-md transition-shadow">
            <FaCheckCircle className="text-red-600 text-2xl mb-2" />
            <h3 className="text-slate-900 font-bold text-lg">Industrial Standards</h3>
            <p className="text-slate-600 text-sm">
              Curriculum aligned with modern industrial power and automation standards.
            </p>
          </div>

          <div className="bg-white border border-slate-200 p-6 rounded-xl space-y-2 shadow-sm hover:shadow-md transition-shadow">
            <FaGraduationCap className="text-red-600 text-2xl mb-2" />
            <h3 className="text-slate-900 font-bold text-lg">Expert Mentorship</h3>
            <p className="text-slate-600 text-sm">
              Guided directly by experienced industry engineers and project leads.
            </p>
          </div>
        </div>

      </div>
    </main>
  );
};

export default GazipurLabDetails;