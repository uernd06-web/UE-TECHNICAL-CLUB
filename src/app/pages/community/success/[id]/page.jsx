import React from 'react'
import path from 'path'
import fs from 'fs/promises'

const SuccessDetails =async ({params}) => {
    const {id}=await params;
    const filePath = path.join(process.cwd(), 'public', 'data' , 'successStory.json')
    const jsonData = await fs.readFile(filePath, 'utf-8')
    const stories = JSON.parse(jsonData)

    const expectedStories = stories.find(story=>story.id ==id)
console.log(expectedStories)
  return (
    <div className='flex justify-center items-center h-[70vh] font-bold text-2xl'>{expectedStories.personName} SuccessDetails</div>
  )
}

export default SuccessDetails