import OnlabBanner from '@/components/onlab/OnlabBanner';
import OnlabCardSection from '@/components/onlab/OnlabCardSection';
import { gazipurLab } from '@/data/gazipurLabData';
import React from 'react';

const GazipurLab = async () => {
  const gazipurData = gazipurLab;

  return (
    <main className="w-full min-h-screen bg-slate-50/50 pt-24 sm:pt-28 pb-16 px-4 sm:px-6 lg:px-8 font-sans relative z-0">
      <div className="max-w-7xl mx-auto space-y-10 sm:space-y-12">
        {/* Banner Section */}
        <section className="w-full">
          <OnlabBanner />
        </section>

        {/* Card Section */}
        <section className="w-full">
          <OnlabCardSection data={gazipurData} />
        </section>
      </div>
    </main>
  );
};

export default GazipurLab;