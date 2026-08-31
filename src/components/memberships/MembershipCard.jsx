// import Link from "next/link";
// import Image from "next/image";

// export default function MembershipCard({ membership, alignRight = false }) {
//   return (
//     <div className="relative flex items-center w-full">
//       <Link
//         href={`/memberships/${membership.id}`}
//         className="w-full group transition-all duration-300 hover:scale-[1.01]"
//       >
//         <div
//           className={`border-[3px] ${membership.borderColor} rounded-2xl p-4 bg-white shadow-sm flex flex-col sm:flex-row items-center gap-4 relative z-10`}
//         >
//           {/* Left Side: Card Image */}
//           <div className="w-full sm:w-[40%] flex flex-col items-center justify-center">
//             <div className="relative w-full h-24 sm:h-28 rounded-lg overflow-hidden border border-gray-200 shadow-inner flex items-center justify-center bg-gray-900">
//               <Image
//                 src={membership.cardImage}
//                 alt={membership.title}
//                 fill
//                 className="object-cover"
//               />
//             </div>
//             <span className={`${membership.badgeBg} text-white text-xs font-bold px-3 py-1 rounded-md mt-2 tracking-wide uppercase shadow-sm text-center w-full`}>
//               {membership.title}
//             </span>
//           </div>

//           {/* Right Side: Packages List */}
//           <div className="w-full sm:w-[60%] space-y-2">
//             {membership.packages.map((pkg, idx) => (
//               <div
//                 key={idx}
//                 className={`border-2 ${membership.borderColor} rounded-xl px-3 py-1.5 text-xs font-semibold flex items-center gap-2.5 bg-white text-gray-800 shadow-2xs hover:bg-gray-50 transition-colors`}
//               >
//                 <span className="text-gray-700 text-sm flex-shrink-0">
//                   {pkg.icon}
//                 </span>
//                 <span className="truncate">{pkg.packageName}</span>
//               </div>
//             ))}
//           </div>
//         </div>
//       </Link>

//       {/* Connection Dot for Large Screens */}
//       <div
//         className={`hidden lg:block absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full ${membership.dotColor} border-2 border-white shadow-md z-20 ${
//           alignRight ? "-left-2" : "-right-2"
//         }`}
//       />
//     </div>
//   );
// }

import Link from "next/link";
import Image from "next/image";

export default function MembershipCard({ membership }) {
  return (
    <Link
      href={`/pages/programs/memberships/${membership.id}`}
      className="block w-full group transition-all duration-300 hover:scale-[1.01] "
    >
      <div
        className={`border-[3px] ${membership.borderColor} rounded-2xl p-3 sm:p-4 bg-white shadow-md flex flex-col sm:flex-row items-center gap-3.5 relative z-10`}
      >
        {/* Left Side: Card Image & Badge */}
        <div className="w-full sm:w-[40%] flex flex-col items-center justify-center">
          
          {/* Aspect-Ratio Container for Perfect Image Fitting */}
          <div className="relative w-full aspect-[16/9] sm:h-28 rounded-lg overflow-hidden border border-gray-200 bg-gray-900 shadow-inner flex items-center justify-center">
            <Image
              src={membership.cardImage}
              alt={membership.title}
              fill
              sizes="(max-width: 640px) 100vw, 40vw"
              className="object-contain p-1" 
            />
          </div>

          {/* Badge Title */}
          <span className="bg-[#B81D24] text-white text-[11px] sm:text-xs font-bold px-2.5 py-1 rounded mt-2 uppercase text-center w-full tracking-wide">
            {membership.title}
          </span>
        </div>

        {/* Right Side: Packages List */}
        <div className="w-full sm:w-[60%] space-y-1.5">
          {membership.packages.map((pkg, idx) => (
            <div
              key={idx}
              className={`border ${membership.borderColor} rounded-xl px-3 py-1.5 text-xs font-semibold flex items-center gap-2.5 bg-white text-gray-800 shadow-2xs hover:bg-gray-50 transition-colors`}
            >
              <span className="text-gray-700 text-sm flex-shrink-0">
                {pkg.icon}
              </span>
              <span className="truncate">{pkg.packageName}</span>
            </div>
          ))}
        </div>
      </div>
    </Link>
  );
}