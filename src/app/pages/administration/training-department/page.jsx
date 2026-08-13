import TrainingDepartmentBanner from '@/components/training-department/TrainingDepartmentBanner'
import React from 'react'
import path from 'path'
import fs from 'fs/promises'
import TrainingDepartment from '@/components/training-department/TrainingDepartment'
import MentorsSection from '@/components/training-department/MentorsSection'

export const metaData={
  title:'training | ulterior engineering',
  description: ''
  
}

const TrainingDepartmentPage = async() => {

  const filePath = path.join(process.cwd(), 'public', 'data', 'departmentLeader.json')
  const jsonData = await fs.readFile(filePath, 'utf-8')
  
  const trainers = JSON.parse(jsonData)

  const filePath2 = path.join(process.cwd(), 'public' , 'data', 'mentors.json')
  const jsonData2 = await fs.readFile(filePath2,'utf-8')
  const mentors = JSON.parse(jsonData2)
  
  return (
    <div>

      <TrainingDepartmentBanner></TrainingDepartmentBanner>
      <div className='bg-base-100 rounded-xl shadow  m-6 p-6'>

        <TrainingDepartment trainers ={trainers}></TrainingDepartment>
        <MentorsSection mentors={mentors}></MentorsSection>

      </div>
    </div>
  )
}

export default TrainingDepartmentPage