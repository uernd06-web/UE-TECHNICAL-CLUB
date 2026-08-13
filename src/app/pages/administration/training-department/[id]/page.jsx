import React from 'react';
import path from 'path';
import fs from 'fs/promises';
import Image from 'next/image';
import Link from 'next/link';

import TrainerDetailCard from '@/components/training-department/TrainerDetailCard';

const TrainerProfileDetails = async ({ params ,searchParams }) => {
  const { id } = await params;
  const {category}= await searchParams;

  
  // JSON ফাইল থেকে ডেটা লোড
 const fileName = category=='mentor'?'mentors.json':'departmentLeader.json'

 const filePath=path.join(process.cwd(), 'public', 'data', fileName)
 const jsonData =await fs.readFile(filePath,'utf-8')
 const data = JSON.parse(jsonData)
 
 const member = data.find(item=>item.id==id)





  if (!member) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center px-4">
        <h2 className="text-2xl font-bold text-gray-800">Trainer Not Found</h2>
        <p className="text-gray-500 mt-2">The profile you are looking for does not exist.</p>
        <Link
          href="/"
          className="mt-6 inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-medium px-5 py-2.5 rounded-xl transition-colors shadow-md text-sm"
        >
          <FiArrowLeft /> Back to Home
        </Link>
      </div>
    );
  }

  return (
  <div>
    <TrainerDetailCard trainer={member}></TrainerDetailCard>
  </div>
  );
};

export default TrainerProfileDetails;