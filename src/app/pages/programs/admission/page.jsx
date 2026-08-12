import AdmissionBanner from '@/components/admission/AdmissionBanner'
import AdmissionForm from '@/components/admission/AdmissionForm'
import AdmissionPathwayCard from '@/components/admission/AdmissionPathwayCard'
import React from 'react'

const AdmissionPage = () => {

  return (
    <div className='space-y-6'>

      <AdmissionBanner></AdmissionBanner>
      <div className='flex justify-between items-center gap-6 bg-base-100 p-6 shadow '>
         <AdmissionPathwayCard></AdmissionPathwayCard>
        <AdmissionForm></AdmissionForm>
       
      </div>
    </div>
  )
}

export default AdmissionPage