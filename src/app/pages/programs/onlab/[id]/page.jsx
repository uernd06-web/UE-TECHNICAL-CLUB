import React from 'react'
import path from 'path'
import fs from 'fs/promises'
import Image from 'next/image';


export const metadata = {
  title: "onlab details",
  description: "",
};

const DetailsPage =async ({params}) => {

    const {id}= await params;
    const filePath = path.join(process.cwd(), 'public', 'data' , 'labData.json')
    const jsonData = await fs.readFile(filePath, 'utf-8')
    const labData = JSON.parse(jsonData)

    const singleLab = labData.find(lab=> lab.id== id)
    if(!singleLab){
        return (
      <div className="max-w-7xl mx-auto py-20 text-center text-red-600 font-bold text-2xl">
        Lab Not Found!
      </div>
    );
    }
  return (
   <div className="max-w-5xl mx-auto py-12 px-4 space-y-6">
      <span className="bg-black text-white text-xs px-3 py-1 rounded-full font-bold">
        {singleLab.labBadge}
      </span>
      
      <h1 className="text-3xl font-extrabold text-gray-900">{singleLab.title}</h1>
      <p className="text-red-700 font-bold text-sm">{singleLab.category}</p>

      <div className="relative w-full h-96 rounded-2xl overflow-hidden my-6 border">
       <Image
                  src={singleLab?.image || "/placeholder.png"}
                  alt={singleLab?.title || "Lab Image"}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                />
      
      </div>

      <p className="text-gray-600 leading-relaxed text-lg">{singleLab.description}</p>
    </div>
  )
}

export default DetailsPage