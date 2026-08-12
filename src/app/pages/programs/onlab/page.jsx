import OnlabBanner from '@/components/onlab/OnlabBanner'
import OnlabCardSection from '@/components/onlab/OnlabCardSection'
import path from 'path'
import fs from 'fs/promises'
import React from 'react'


export const metadata = {
  title: "onlab",
  description: "",
};

const OnlabPage =async () => {
   const filePath =path.join(process.cwd(), 'public', 'data', 'labData.json')
   const  jsonData = await fs.readFile(filePath, 'utf-8')
   const labData =JSON.parse(jsonData)
   console.log(labData,'from onlab page')
  
  return (
    <div className='space-y-4'>

      <OnlabBanner></OnlabBanner>

      <OnlabCardSection data={labData}></OnlabCardSection>
    </div>
  )
}

export default OnlabPage