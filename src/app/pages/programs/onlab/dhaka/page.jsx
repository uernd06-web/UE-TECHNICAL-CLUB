import DhakaLabSection from '@/components/onlab/Dhaka lab/DhakaLabSection';
import OnlabBanner from '@/components/onlab/OnlabBanner';
import OnlabCardSection from '@/components/onlab/OnlabCardSection';
import { dhakaLab } from '@/data/dhakaLabData';
import React from 'react';

const DhakaLab = async () => {
  const dhakaData = dhakaLab;

  return (
    <main className="w-full min-h-screen bg-slate-50/50 pt-24 sm:pt-28 pb-16 px-4 sm:px-6 lg:px-8 font-sans relative z-0">
      <div className="max-w-7xl mx-auto space-y-10 sm:space-y-12">
        {/* Banner Section */}
        <section className="w-full">
          <OnlabBanner />
        </section>

        {/* Card Section */}
        <section className="w-full">
          <DhakaLabSection dhakaData={dhakaData}></DhakaLabSection>
        </section>
      </div>
    </main>
  );
};

export default DhakaLab;