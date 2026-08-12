import path from 'path'
import fs from 'fs/promises'
import React from 'react'
import BoardDirectors from '@/components/board-director/BoardDirectors'
import BoardDirectorsBanner from '@/components/board-director/BoardDirectorBanner'

import SingleOrganogram from '@/components/SingleOrganogram'
import { ORGANOGRAM_CHARTS } from '@/teamData'
import OrgChart from '@/components/board-director/OrgChart'

const BoardOfDirectors =async () => {

  // const filePath = path.join(process.cwd(), 'public', 'data', 'directors.json')
  // const jsonData = await fs.readFile(filePath,'utf-8')
  // const directors = JSON.parse(jsonData)
  // console.log(directors)
  return (
    <div>
      {/* <BoardDirectorsBanner></BoardDirectorsBanner>
     <BoardDirectors directors={directors}></BoardDirectors>
     <OrgChart></OrgChart> */}


     {/* <div className="w-full min-h-screen bg-[#240808] p-6 text-white">
     
      <div className="text-center py-6">
        <h1 className="text-4xl font-black text-red-500 uppercase tracking-widest">
          UE Team Organogram
        </h1>
        <p className="text-gray-400 text-sm mt-2">Complete Organizational Structure</p>
      </div>

      <div className="max-w-7xl mx-auto space-y-12">
    
        <SingleOrganogram chartData={ORGANOGRAM_CHARTS.boardOfDirectors} />

      
        <SingleOrganogram chartData={ORGANOGRAM_CHARTS.executiveTeam} />

  
        <SingleOrganogram chartData={ORGANOGRAM_CHARTS.trainingDivision} />

    
        <SingleOrganogram chartData={ORGANOGRAM_CHARTS.marketingTeam} />

    
        <SingleOrganogram chartData={ORGANOGRAM_CHARTS.internTeam} />
      </div>
    </div> */}
<OrgChart></OrgChart>
    </div>
  )
}

export default BoardOfDirectors