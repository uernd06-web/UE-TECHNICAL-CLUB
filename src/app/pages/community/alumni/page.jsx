
import { alumniList } from '@/alumniData'
import AlumniBanner from '@/components/alumni/AlumniBanner'
import AlumniSection from '@/components/alumni/AlumniSection'

import React from 'react'

export const metadata = {
  title: "our alumni",
  description: "",
};


const OurAlumni = () => {

  const alumni = alumniList
  console.log(alumni)

  return (
    <div>

     <AlumniBanner></AlumniBanner>
     <AlumniSection data={alumni}></AlumniSection>
    </div>
  )
}

export default OurAlumni