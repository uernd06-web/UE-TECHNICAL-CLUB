import React from 'react'
import path from 'path'
import fs from 'fs/promises'
import SuccessBanner from '@/components/success/SuccessBanner'
import SuccessSection from '@/components/success/SuccessSection'

export const metadata = {
  title: "success",
  description: "",
};
const Success =async () => {
  const filePath = path.join(process.cwd(), 'public', 'data', 'successStory.json')
const jsonData= await fs.readFile(filePath, 'utf-8')
const stories = JSON.parse(jsonData)
console.log(stories, 'from alumni')
  return (
    <div>

 <SuccessBanner></SuccessBanner>
      <SuccessSection stories={stories}></SuccessSection>
    </div>
  )
}

export default Success