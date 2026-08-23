import React from 'react'

import SuccessBanner from '@/components/success/SuccessBanner'
import SuccessSection from '@/components/success/SuccessSection'
import { successStory } from '@/data/successStory'

export const metadata = {
  title: "success",
  description: "",
};
const Success =async () => {

  return (
    <div className='mb-10'>

 <SuccessBanner></SuccessBanner>
      <SuccessSection stories={successStory}></SuccessSection>
    </div>
  )
}

export default Success