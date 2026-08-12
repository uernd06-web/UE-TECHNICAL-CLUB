
import Image from 'next/image';
import React, { useEffect } from 'react'
import { FiCheck, FiX } from 'react-icons/fi';

const MentorsModal = ({isOpen,onClose,mentor}) => {
    useEffect(() => {
        const handleKeyDown = (e) => {
          if (e.key === "Escape") onClose();
        };
    
        if (isOpen) {
          document.body.style.overflow = "hidden";
          window.addEventListener("keydown", handleKeyDown);
        }
    
        return () => {
          document.body.style.overflow = "auto";
          window.removeEventListener("keydown", handleKeyDown);
        };
      }, [isOpen, onClose]);
    
      if (!isOpen || !mentor) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8">
         {/* Backdrop Overlay */}
         <div
           className="fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
           onClick={onClose}
         />
   
         {/* Modal Container */}
         <div className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl overflow-hidden z-10 border border-gray-100 max-h-[90vh] flex flex-col md:flex-row">
           
           {/* Close Button */}
           <button
             onClick={onClose}
             type="button"
             className="absolute top-4 right-4 z-30 w-9 h-9 rounded-full bg-gray-100/90 hover:bg-gray-200 text-gray-700 flex items-center justify-center transition-colors cursor-pointer shadow-sm"
           >
             <FiX className="text-lg" />
           </button>
   
           {/* LEFT SIDE: Image Column */}
           {mentor.image && (
             <div className="relative  w-full md:w-2/5 h-64 md:h-auto bg-gray-950 shrink-0">
               <Image
                 src={mentor.image}
                 alt={mentor.name || "Mentor Profile"}
                 fill
                 priority
                 sizes="(max-width: 768px) 100vw, 40vw"
                 className="object-cover object-top"
               />
               {/* Tag Badge overlay on mobile / top left */}
               {mentor.category && (
                 <div className="absolute top-4 left-4 z-20 md:hidden">
                   <span className="bg-black/60 backdrop-blur-md text-white text-[10px] font-bold px-3 py-1 rounded-full border border-white/20">
                     {mentor.category}
                   </span>
                 </div>
               )}
             </div>
           )}
   
           {/* RIGHT SIDE: Content Column */}
           <div className="w-full md:w-3/5 overflow-y-auto p-6 sm:p-8 flex flex-col justify-between space-y-6">
             
             <div className="space-y-5">
               {/* Header Info */}
               <div className="space-y-1.5 pr-6">
                 <span className="text-[11px] font-bold tracking-widest text-red-600 uppercase block">
                   Board Member
                 </span>
                 <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-950 tracking-tight leading-tight">
                   {mentor.name}
                 </h2>
                 <p className="text-xs sm:text-sm font-bold text-red-700">
                   {mentor.role}
                 </p>
               </div>
   
               {/* Description */}
               <p className="text-sm text-gray-600 font-medium leading-relaxed">
                 {mentor.description}
               </p>
   
               {/* Main Responsibilities */}
               {mentor.main_responsibilities && mentor.main_responsibilities.length > 0 && (
                 <div className="space-y-3 pt-2">
                   <h3 className="text-xs font-extrabold text-gray-950 uppercase tracking-wider">
                     Main responsibilities
                   </h3>
                   
                   <div className="space-y-2.5">
                     {mentor.main_responsibilities.map((item, index) => (
                       <div key={index} className="flex items-start gap-3">
                         <div className="w-4 h-4 rounded-full bg-red-700 text-white flex items-center justify-center shrink-0 mt-0.5">
                           <FiCheck className="text-[10px] stroke-[3]" />
                         </div>
                         <span className="text-xs sm:text-sm font-medium text-gray-700">
                           {item}
                         </span>
                       </div>
                     ))}
                   </div>
                 </div>
               )}
             </div>
   
             {/* Footer Section */}
             <div className="pt-6 border-t border-gray-100 flex items-center justify-between gap-4 mt-auto">
               {mentor.categroy && (
                 <span className="hidden md:inline-block bg-red-50 text-red-700 text-xs font-bold px-3.5 py-1.5 rounded-full border border-red-100">
                   {mentor.category}
                 </span>
               )}
   
               <button
                 onClick={onClose}
                 type="button"
                 className="w-full md:w-auto ml-auto bg-black hover:bg-gray-800 text-white font-bold text-xs py-3 px-6 rounded-xl transition-all cursor-pointer text-center"
               >
                 Close Profile
               </button>
             </div>
   
           </div>
   
         </div>
       </div>
  )
}

export default MentorsModal