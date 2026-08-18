// import React from 'react';
// import path from 'path';
// import fs from 'fs/promises';
// import Image from 'next/image';
// import Link from 'next/link';

// import TrainerDetailCard from '@/components/training-department/TrainerDetailCard';

// const TrainerProfileDetails = async ({ params ,searchParams }) => {
//   const { id } = await params;
//   const {category}= await searchParams;

  
//   // JSON ফাইল থেকে ডেটা লোড
//  const fileName = category=='mentor'?'mentors.json':'departmentLeader.json'

//  const filePath=path.join(process.cwd(), 'public', 'data', fileName)
//  const jsonData =await fs.readFile(filePath,'utf-8')
//  const data = JSON.parse(jsonData)
 
//  const member = data.find(item=>item.id==id)





//   if (!member) {
//     return (
//       <div className="min-h-[70vh] flex flex-col items-center justify-center px-4">
//         <h2 className="text-2xl font-bold text-gray-800">Trainer Not Found</h2>
//         <p className="text-gray-500 mt-2">The profile you are looking for does not exist.</p>
//         <Link
//           href="/"
//           className="mt-6 inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-medium px-5 py-2.5 rounded-xl transition-colors shadow-md text-sm"
//         >
//           <FiArrowLeft /> Back to Home
//         </Link>
//       </div>
//     );
//   }

//   return (
//   <div>
//     <TrainerDetailCard trainer={member}></TrainerDetailCard>
//   </div>
//   );
// };

// export default TrainerProfileDetails;


import fs from 'fs/promises';
import path from 'path';
import Link from 'next/link';
import { FiArrowLeft } from 'react-icons/fi';
import TrainerDetailCard from '@/components/training-department/TrainerDetailCard';

export default async function MemberDetailPage({ params }) {
  const { id } = await params;

  const filePath = path.join(process.cwd(), 'public', 'data', 'organogramData.json');
  let member = null;

  try {
    const jsonData = await fs.readFile(filePath, 'utf-8');
    const members = JSON.parse(jsonData);
    member = members.find((m) => String(m.id) === String(id));
  } catch (error) {
    console.error('Error loading organogram data:', error);
  }

  if (!member) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 px-4">
        <h2 className="text-2xl font-bold text-gray-800">Profile Not Found</h2>
        <Link
          href="/pages/administration/training-department"
          className="mt-4 inline-flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-xl text-sm"
        >
          <FiArrowLeft /> Back to all members
        </Link>
      </div>
    );
  }

  return <TrainerDetailCard trainer={member} />;
}