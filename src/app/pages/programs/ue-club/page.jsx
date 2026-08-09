import Banner from '@/components/ueClub/Banner'
import ClubPhilosophy from '@/components/ueClub/ClubPhilosophy'
import ExpansionVision from '@/components/ueClub/ExpansionVision'
import LearningEcosystem from '@/components/ueClub/LearningEcosystem'
import React from 'react'

const UeClub = () => {
  return (
  <div>

    <Banner></Banner>
    <div className=''>
        <ClubPhilosophy></ClubPhilosophy>
        <ExpansionVision></ExpansionVision>
        <LearningEcosystem></LearningEcosystem>

    </div>
  </div>
  )
}

export default UeClub