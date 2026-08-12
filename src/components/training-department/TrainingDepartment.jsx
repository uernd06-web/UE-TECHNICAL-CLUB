'use client'
import React, { useState } from 'react'
import { FiArrowUpRight } from 'react-icons/fi';
import TrainersModal from './TrainersModal';
import Image from 'next/image';

const TrainingDepartment = ({trainers}) => {
      const [selectedTrainer, setSelectedTrainer] = useState(null);
      const [isModalOpen, setIsModalOpen] = useState(false);
    
      const handleOpenModal = (trainers) => {
        setSelectedTrainer(trainers);
        setIsModalOpen(true);
      };
    
      const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedTrainer(null);
      }
  return (
    <div>

      <section className=" py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <span className="text-xs font-bold tracking-widest text-red-600 uppercase mb-2 block">
              Delivery Team
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
             Training Department
            </h2>
            <p className="text-sm sm:text-base text-gray-600 mt-1">
             Select a department member to view the complete profile.
            </p>
          </div>
          
          {/* Badge Count */}
          <div className="self-start md:self-auto bg-red-50 border border-red-200 text-red-600 text-xs font-bold px-3 py-1.5 rounded-full">
            {trainers?.length || 0} trainer
          </div>
        </div>

        {/* Directors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trainers?.map((trainer) => (
            <div
              key={trainer.id}
              onClick={()=>handleOpenModal(trainer)}
              className="bg-white  rounded-3xl border border-gray-200/80 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between group cursor-pointer"
            >
              {/* Top Image & Badge Box */}
              <div className="relative bg-[#0d0d0d] pt-8 px-6 pb-0 flex flex-col items-center justify-end overflow-hidden h-[320px]">
                {/* Role Badge (Top Right) */}
                <div className="absolute top-4 right-4 z-10 bg-black/60 backdrop-blur-md border border-white/10 text-white text-xs font-bold px-3 py-1 rounded-full">
                  {trainer.roleCode || trainer.role.match(/\(([^)]+)\)/)?.[1] || "TRINER"}
                </div>

                {/* Director Image */}
              <div className="relative w-full h-full">
                  <Image
                    src={trainer.image}
                    alt={trainer.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    priority={false}
                  />
                </div>

                {/* View Profile Button Overlay */}
                <div className="absolute bottom-4 left-4 right-4 z-10">
                  <button className="w-full cursor-pointer bg-black/80 hover:bg-black backdrop-blur-md text-white font-semibold py-3 px-4 rounded-xl border border-white/10 flex items-center justify-center gap-2 transition-colors text-sm shadow-lg">
                    <span>View Profile</span>
                    <FiArrowUpRight className="text-base transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </button>
                 
                </div>
              </div>

              {/* Bottom Info Box */}
              <div className="p-6 flex flex-col justify-between flex-grow bg-white">
                <div>
                  <span className="text-[11px] font-bold tracking-wider text-red-600 uppercase block mb-1">
                   Department Lead Profile
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-red-600 transition-colors">
                    {trainer.name}
                  </h3>
                  <p className="text-sm font-medium text-gray-500 mt-1">
                    {trainer.role}
                  </p>
                </div>

                {/* Bottom Tag */}
                <div className="mt-6 pt-4 border-t border-gray-100 flex items-center">
                  <span className="bg-red-50 text-red-700 text-xs font-semibold px-3 py-1 rounded-lg border border-red-100">
                    {trainer.tag}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <TrainersModal isOpen={isModalOpen} onClose={handleCloseModal} trainer={selectedTrainer}></TrainersModal>
    </section>
    </div>
  )
}

export default TrainingDepartment


// 'use client'
// import React, { useState } from 'react'
// import { FiArrowUpRight } from 'react-icons/fi';
// import TrainersModal from './TrainersModal';
// import Image from 'next/image';

// const TrainingDepartment = ({ trainers }) => {
//   const [selectedTrainer, setSelectedTrainer] = useState(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const handleOpenModal = (trainer) => {
//     setSelectedTrainer(trainer);
//     setIsModalOpen(true);
//   };

//   const handleCloseModal = () => {
//     setIsModalOpen(false);
//     setSelectedTrainer(null);
//   };

//   return (
//     <div>
//       <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-7xl mx-auto">
          
//           {/* Header Section */}
//           <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
//             <div>
//               <span className="text-xs font-bold tracking-widest text-red-600 uppercase mb-2 block">
//                 Delivery Team
//               </span>
//               <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
//                 Training Department
//               </h2>
//               <p className="text-sm sm:text-base text-gray-600 mt-1">
//                 Select a department member to view the complete profile.
//               </p>
//             </div>

//             {/* Badge Count */}
//             <div className="self-start md:self-auto bg-red-50 border border-red-200 text-red-600 text-xs font-bold px-3 py-1.5 rounded-full">
//               {trainers?.length || 0} trainer{trainers?.length === 1 ? '' : 's'}
//             </div>
//           </div>

//           {/* Trainers Grid */}
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {trainers?.map((trainer) => (
//               <div
//                 key={trainer.id}
//                 onClick={() => handleOpenModal(trainer)}
//                 className="bg-white rounded-3xl border border-gray-200/80 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between group cursor-pointer"
//               >
//                 {/* Top Image & Badge Box */}
//                 <div className="relative bg-[#0d0d0d] pt-6 px-4 pb-14 flex items-center justify-center overflow-hidden h-[280px] sm:h-[320px]">
                  
//                   {/* Role Badge (Top Right) */}
//                   <div className="absolute top-4 right-4 z-10 bg-black/60 backdrop-blur-md border border-white/10 text-white text-xs font-bold px-3 py-1 rounded-full">
//                     {trainer.roleCode || trainer.role?.match(/\(([^)]+)\)/)?.[1] || "TRAINER"}
//                   </div>

//                   {/* Trainer Image Wrapper */}
//                   <div className="relative w-full h-full flex items-center justify-center">
//                     <Image
//                       src={trainer.image}
//                       alt={trainer.name}
//                       fill
//                       sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
//                       className="object-contain object-bottom transition-transform duration-500 group-hover:scale-105"
//                       priority={false}
//                     />
//                   </div>

//                   {/* View Profile Button Overlay */}
//                   <div className="absolute bottom-3 left-4 right-4 z-10">
//                     <button className="w-full cursor-pointer bg-black/80 hover:bg-black backdrop-blur-md text-white font-semibold py-2.5 px-4 rounded-xl border border-white/10 flex items-center justify-center gap-2 transition-colors text-sm shadow-lg">
//                       <span>View Profile</span>
//                       <FiArrowUpRight className="text-base transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
//                     </button>
//                   </div>
//                 </div>

//                 {/* Bottom Info Box */}
//                 <div className="p-6 flex flex-col justify-between flex-grow bg-white">
//                   <div>
//                     <span className="text-[11px] font-bold tracking-wider text-red-600 uppercase block mb-1">
//                       Department Lead Profile
//                     </span>
//                     <h3 className="text-xl font-bold text-gray-900 group-hover:text-red-600 transition-colors">
//                       {trainer.name}
//                     </h3>
//                     <p className="text-sm font-medium text-gray-500 mt-1">
//                       {trainer.role}
//                     </p>
//                   </div>

//                   {/* Bottom Tag */}
//                   {trainer.tag && (
//                     <div className="mt-6 pt-4 border-t border-gray-100 flex items-center">
//                       <span className="bg-red-50 text-red-700 text-xs font-semibold px-3 py-1 rounded-lg border border-red-100">
//                         {trainer.tag}
//                       </span>
//                     </div>
//                   )}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Modal Component */}
//         <TrainersModal
//           isOpen={isModalOpen}
//           onClose={handleCloseModal}
//           trainer={selectedTrainer}
//         />
//       </section>
//     </div>
//   )
// }

// export default TrainingDepartment