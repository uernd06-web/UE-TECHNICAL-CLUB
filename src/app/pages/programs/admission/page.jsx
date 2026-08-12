import AdmissionBanner from '@/components/admission/AdmissionBanner'
import AdmissionForm from '@/components/admission/AdmissionForm'
import AdmissionPathwayCard from '@/components/admission/AdmissionPathwayCard'
import React from 'react'

export const metadata = {
  title: "Admission | Ulterior Engineering",
  description: "Apply for admission to Ulterior Engineering programs.",
};

const AdmissionPage = () => {
  return (
    <div className='space-y-6 md:space-y-10 pb-12'>
      {/* Banner Section */}
      <AdmissionBanner />

      {/* Main Content Layout Container */}
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-12 bg-base-100 p-4 sm:p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100'>
          
          {/* Pathway Card Section */}
          <div className='w-full lg:w-1/2'>
            <AdmissionPathwayCard />
          </div>

          {/* Admission Form Section */}
          <div className='w-full lg:w-1/2'>
            <AdmissionForm />
          </div>

        </div>
      </div>
    </div>
  )
}

export default AdmissionPage