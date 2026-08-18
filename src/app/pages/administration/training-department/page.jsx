
// 'use client';

// import React, { useEffect, useState } from 'react';
// import MemberNode from '@/components/training-department/MemberNode';

// // Single Child & Multiple Children হ্যান্ডেল করার জন্য OrgNode
// function OrgNode({ label, children, wrapChildren = false }) {
//   const childrenArray = React.Children.toArray(children);
//   const hasChildren = childrenArray.length > 0;
//   const isSingleChild = childrenArray.length === 1;

//   return (
//     <div className="flex flex-col items-center relative my-2">
//       {/* Node Card */}
//       <div className="z-10">{label}</div>

//       {hasChildren && (
//         <>
//           {/* Single Child Connection */}
//           {isSingleChild ? (
//             <div className="flex flex-col items-center">
//               <div className="w-[2px] h-6 bg-white" />
//               <div className="w-0 h-0 border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-t-[7px] border-t-white z-20" />
//               <div className="pt-2">{childrenArray[0]}</div>
//             </div>
//           ) : (
//             /* Multiple Children Connection */
//             <div className="flex flex-col items-center w-full">
//               <div className="w-[2px] h-6 bg-white" />
//               <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-white z-20" />

//               {/* Responsive Wrap or Flex depending on width */}
//               <div
//                 className={`flex ${
//                   wrapChildren ? 'flex-wrap max-w-5xl justify-center gap-y-8' : 'justify-center'
//                 } relative pt-8 w-full`}
//               >
//                 {childrenArray.map((child, index) => {
//                   const count = childrenArray.length;
//                   const isFirst = index === 0;
//                   const isLast = index === count - 1;

//                   return (
//                     <div
//                       key={index}
//                       className="relative flex flex-col items-center px-1 lg:px-3"
//                     >
//                       {!wrapChildren && (
//                         <>
//                           <div
//                             className={`absolute top-0 left-0 w-1/2 border-t-2 border-white ${
//                               isFirst ? 'opacity-0' : 'opacity-100'
//                             }`}
//                           />
//                           <div
//                             className={`absolute top-0 right-0 w-1/2 border-t-2 border-white ${
//                               isLast ? 'opacity-0' : 'opacity-100'
//                             }`}
//                           />
//                           <div className="absolute top-0 w-[2px] h-[22px] bg-white" />
//                           <div className="absolute top-[20px] w-0 h-0 border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-t-[7px] border-t-white z-20" />
//                         </>
//                       )}

//                       <div className={wrapChildren ? 'pt-0' : 'pt-6'}>{child}</div>
//                     </div>
//                   );
//                 })}
//               </div>
//             </div>
//           )}
//         </>
//       )}
//     </div>
//   );
// }

// const SectionHeader = ({ title }) => (
//   <div className="inline-block bg-white text-red-700 font-extrabold text-sm sm:text-base lg:text-lg px-4 lg:px-6 py-2 rounded-xl my-4 shadow-xl uppercase border-2 border-red-600">
//     {title}
//   </div>
// );

// export default function OrganogramPage() {
//   const [members, setMembers] = useState({});

//   useEffect(() => {
//     fetch('/data/organogramData.json')
//       .then((res) => res.json())
//       .then((data) => {
//         const memberMap = {};
//         data.forEach((m) => {
//           memberMap[m.id] = m;
//         });
//         setMembers(memberMap);
//       })
//       .catch((err) => console.error('Failed to load organogram data:', err));
//   }, []);

//   if (Object.keys(members).length === 0) {
//     return (
//       <div className="bg-[#2D090A] min-h-screen flex items-center justify-center text-white">
//         Loading Organogram...
//       </div>
//     );
//   }

//   return (
//     <div className="bg-[#2D090A] min-h-screen py-8 px-2 lg:px-6 text-white overflow-x-hidden">
//       {/* Desktop Container centered with dynamic scale for fitting full screen without horizontal scroll */}
//       <div className="w-full max-w-[1400px] mx-auto flex flex-col items-center space-y-12 lg:scale-[0.88] xl:scale-100 origin-top transition-transform">
        
//         {/* 1. BOARD OF DIRECTORS */}
//         <div className="flex flex-col items-center w-full">
//           <SectionHeader title="Board of Directors" />
//           <div className="flex justify-center mt-4 w-full">
//             <OrgNode label={<MemberNode member={members['rafat-bin-ali']} />}>
//               <OrgNode label={<MemberNode member={members['fahim-shahrier']} />} />
//               <OrgNode label={<MemberNode member={members['sayed-bin-osman']} />} />
//               <OrgNode label={<MemberNode member={members['nowshad-amin']} />}>
//                 <OrgNode label={<MemberNode member={members['fakir-sharif']} />} />
//                 <OrgNode label={<MemberNode member={members['zahroul-haque']} />} />
//                 <OrgNode label={<MemberNode member={members['asif-mahmud']} />} />
//               </OrgNode>
//             </OrgNode>
//           </div>
//         </div>

//         <div className="border-t border-red-900/50 my-8 w-full max-w-6xl" />

//         {/* 2. EXECUTIVE TEAM */}
//         <div className="flex flex-col items-center w-full">
//           <SectionHeader title="Executive Team" />
//           <div className="flex justify-center mt-4 w-full">
//             <OrgNode label={<MemberNode member={members['rafat-bin-ali']} />}>
//               <OrgNode label={<MemberNode member={members['zahroul-haque']} />} />
//               <OrgNode label={<MemberNode member={members['fahim-shahrier']} />} />
//               <OrgNode label={<MemberNode member={members['sayed-bin-osman']} />} />
//               <OrgNode label={<MemberNode member={members['shakil-ahmed']} />} />
//               <OrgNode label={<MemberNode member={members['ratin']} />} />
//             </OrgNode>
//           </div>
//         </div>

//         <div className="border-t border-red-900/50 my-8 w-full max-w-6xl" />

//         {/* 3. TRAINING DIVISION */}
//         <div className="flex flex-col items-center w-full">
//           <SectionHeader title="Training Division" />
//           <div className="flex justify-center mt-4 w-full">
//             <OrgNode
//               label={
//                 <div className="flex justify-center gap-4">
//                   <MemberNode member={members['zahroul-haque']} />
//                   <MemberNode member={members['rafat-bin-ali']} />
//                 </div>
//               }
//             >
//               {/* DHAKA BRANCH */}
//               <OrgNode
//                 label={
//                   <div className="bg-white text-red-700 font-bold text-xs lg:text-sm px-4 py-1.5 rounded-xl border-2 border-red-600 uppercase">
//                     Dhaka Branch
//                   </div>
//                 }
//               >
//                 <OrgNode
//                   wrapChildren={true}
//                   label={<MemberNode member={members['shakil-ahmed']} />}
//                 >
//                   <MemberNode member={members['sobuj']} />
//                   <MemberNode member={members['robiul-hasan']} />
//                   <MemberNode member={members['ibrahim-khalil']} />
//                   <MemberNode member={members['asif-automation']} />
//                   <MemberNode member={members['minar']} />
//                   <MemberNode member={members['naim']} />
//                   <MemberNode member={members['asim']} />
//                   <MemberNode member={members['faruk-hossain']} />
//                   <MemberNode member={members['nazmul-islam']} />
//                 </OrgNode>
//               </OrgNode>

//               {/* GAZIPUR BRANCH */}
//               <OrgNode
//                 label={
//                   <div className="bg-white text-red-700 font-bold text-xs lg:text-sm px-4 py-1.5 rounded-xl border-2 border-red-600 uppercase">
//                     Gazipur Branch
//                   </div>
//                 }
//               >
//                 <OrgNode label={<MemberNode member={members['minhaz']} />}>
//                   <OrgNode label={<MemberNode member={members['sahadat']} />} />
//                   <OrgNode label={<MemberNode member={members['bijoy-das']} />} />
//                 </OrgNode>
//               </OrgNode>
//             </OrgNode>
//           </div>
//         </div>

//         <div className="border-t border-red-900/50 my-8 w-full max-w-6xl" />

//         {/* 4. R&D TEAM */}
//         <div className="flex flex-col items-center w-full">
//           <SectionHeader title="R&D / Research Publication" />
//           <div className="flex justify-center mt-4 w-full">
//             <OrgNode label={<MemberNode member={members['zian-reza']} />}>
//               <OrgNode label={<MemberNode member={members['areful-amin']} />} />
//               <OrgNode label={<MemberNode member={members['sharjeel-hassan']} />} />
//               <OrgNode label={<MemberNode member={members['faruk-hossain']} />} />
//               <OrgNode label={<MemberNode member={members['bayzid']} />} />
//               <OrgNode label={<MemberNode member={members['alvee']} />} />
//             </OrgNode>
//           </div>
//         </div>

//         <div className="border-t border-red-900/50 my-8 w-full max-w-6xl" />

//         {/* 5. MARKETING TEAM */}
//         <div className="flex flex-col items-center w-full">
//           <SectionHeader title="Marketing Team" />
//           <div className="flex justify-center mt-4 w-full">
//             <OrgNode label={<MemberNode member={members['rafat-bin-ali']} />}>
//               <OrgNode label={<MemberNode member={members['shakil-ahmed']} />} />
//               <OrgNode label={<MemberNode member={members['sobuj']} />} />
//               <OrgNode label={<MemberNode member={members['zahroul-haque']} />} />
//               <OrgNode label={<MemberNode member={members['sayed-bin-osman']} />}>
//                 <OrgNode label={<MemberNode member={members['sabiha']} />} />
//                 <OrgNode label={<MemberNode member={members['rayhan']} />} />
//                 <OrgNode label={<MemberNode member={members['odhora']} />} />
//                 <OrgNode label={<MemberNode member={members['mostafa']} />} />
//               </OrgNode>
//             </OrgNode>
//           </div>
//         </div>

//         <div className="border-t border-red-900/50 my-8 w-full max-w-6xl" />

//         {/* 6. INTERN TEAM */}
//         <div className="flex flex-col items-center w-full">
//           <SectionHeader title="Intern Team" />
//           <div className="flex justify-center mt-4 w-full">
//             <OrgNode
//               wrapChildren={true}
//               label={
//                 <div className="flex justify-center gap-4">
//                   <MemberNode member={members['zian-reza']} />
//                   <MemberNode member={members['zahroul-haque']} />
//                 </div>
//               }
//             >
//               <MemberNode member={members['roman-ahmed']} />
//               <MemberNode member={members['apurba-sarker']} />
//               <MemberNode member={members['safayet-hosen']} />
//               <MemberNode member={members['sagor-sutradhar']} />
//               <MemberNode member={members['bijoy-das']} />
//               <MemberNode member={members['montasir-hasan']} />
//               <MemberNode member={members['jabed-hossain']} />
//               <MemberNode member={members['mahbub-ahmed']} />
//             </OrgNode>
//           </div>
//         </div>

//       </div>
//     </div>
//   );
// }

// 'use client';

// import React, { useEffect, useState } from 'react';
// import MemberNode from '@/components/training-department/MemberNode';

// // Single Child & Multiple Children হ্যান্ডেল করার জন্য OrgNode
// function OrgNode({ label, children, wrapChildren = false }) {
//   const childrenArray = React.Children.toArray(children);
//   const hasChildren = childrenArray.length > 0;
//   const isSingleChild = childrenArray.length === 1;

//   return (
//     <div className="flex flex-col items-center relative my-2">
//       {/* Node Card */}
//       <div className="z-10">{label}</div>

//       {hasChildren && (
//         <>
//           {/* Single Child Connection */}
//           {isSingleChild ? (
//             <div className="flex flex-col items-center">
//               <div className="w-[2px] h-6 bg-white" />
//               <div className="w-0 h-0 border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-t-[7px] border-t-white z-20" />
//               <div className="pt-2">{childrenArray[0]}</div>
//             </div>
//           ) : (
//             /* Multiple Children Connection */
//             <div className="flex flex-col items-center w-full">
//               <div className="w-[2px] h-6 bg-white" />
//               <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-white z-20" />

//               {/* Flex Connection: Default-এ নো-র‍্যাপ, কিন্তু নির্দিষ্ট জায়গায় wrap-এর অপশন */}
//               <div
//                 className={`flex ${
//                   wrapChildren
//                     ? 'flex-wrap max-w-5xl justify-center gap-y-8'
//                     : 'flex-nowrap justify-center'
//                 } relative pt-8 w-full`}
//               >
//                 {childrenArray.map((child, index) => {
//                   const count = childrenArray.length;
//                   const isFirst = index === 0;
//                   const isLast = index === count - 1;

//                   return (
//                     <div
//                       key={index}
//                       className="relative flex flex-col items-center px-1 lg:px-3 min-w-max"
//                     >
//                       {!wrapChildren && (
//                         <>
//                           <div
//                             className={`absolute top-0 left-0 w-1/2 border-t-2 border-white ${
//                               isFirst ? 'opacity-0' : 'opacity-100'
//                             }`}
//                           />
//                           <div
//                             className={`absolute top-0 right-0 w-1/2 border-t-2 border-white ${
//                               isLast ? 'opacity-0' : 'opacity-100'
//                             }`}
//                           />
//                           <div className="absolute top-0 w-[2px] h-[22px] bg-white left-1/2 -translate-x-1/2" />
//                           <div className="absolute top-[20px] w-0 h-0 border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-t-[7px] border-t-white z-20 left-1/2 -translate-x-1/2" />
//                         </>
//                       )}

//                       <div className={wrapChildren ? 'pt-0' : 'pt-6'}>{child}</div>
//                     </div>
//                   );
//                 })}
//               </div>
//             </div>
//           )}
//         </>
//       )}
//     </div>
//   );
// }

// const SectionHeader = ({ title }) => (
//   <div className="inline-block bg-white text-red-700 font-extrabold text-sm sm:text-base lg:text-lg px-4 lg:px-6 py-2 rounded-xl my-4 shadow-xl uppercase border-2 border-red-600">
//     {title}
//   </div>
// );

// export default function OrganogramPage() {
//   const [members, setMembers] = useState({});

//   useEffect(() => {
//     fetch('/data/organogramData.json')
//       .then((res) => res.json())
//       .then((data) => {
//         const memberMap = {};
//         data.forEach((m) => {
//           memberMap[m.id] = m;
//         });
//         setMembers(memberMap);
//       })
//       .catch((err) => console.error('Failed to load organogram data:', err));
//   }, []);

//   if (Object.keys(members).length === 0) {
//     return (
//       <div className="bg-[#2D090A] min-h-screen flex items-center justify-center text-white">
//         Loading Organogram...
//       </div>
//     );
//   }

//   return (
//     <div className="bg-[#2D090A] min-h-screen py-6 px-2 lg:px-4 text-white overflow-x-auto">
//       {/* Container: Scaled down proportionally on desktop to prevent horizontal scrollbars while keeping full layout intact */}
//       <div className="w-full max-w-[1500px] mx-auto flex flex-col items-center space-y-8 lg:scale-[0.80] xl:scale-[0.90] 2xl:scale-100 origin-top transition-all">
        
//         {/* 1. BOARD OF DIRECTORS */}
//         <div className="flex flex-col items-center w-full">
//           <SectionHeader title="Board of Directors" />
//           <div className="flex justify-center mt-2 w-full">
//             <OrgNode label={<MemberNode member={members['rafat-bin-ali']} />}>
//               <OrgNode label={<MemberNode member={members['fahim-shahrier']} />} />
//               <OrgNode label={<MemberNode member={members['sayed-bin-osman']} />} />
//               <OrgNode label={<MemberNode member={members['nowshad-amin']} />}>
//                 <OrgNode label={<MemberNode member={members['fakir-sharif']} />} />
//                 <OrgNode label={<MemberNode member={members['zahroul-haque']} />} />
//                 <OrgNode label={<MemberNode member={members['asif-mahmud']} />} />
//               </OrgNode>
//             </OrgNode>
//           </div>
//         </div>

//         <div className="border-t border-red-900/50 my-6 w-full max-w-6xl" />

//         {/* 2. EXECUTIVE TEAM */}
//         <div className="flex flex-col items-center w-full">
//           <SectionHeader title="Executive Team" />
//           <div className="flex justify-center mt-2 w-full">
//             <OrgNode label={<MemberNode member={members['rafat-bin-ali']} />}>
//               <OrgNode label={<MemberNode member={members['zahroul-haque']} />} />
//               <OrgNode label={<MemberNode member={members['fahim-shahrier']} />} />
//               <OrgNode label={<MemberNode member={members['sayed-bin-osman']} />} />
//               <OrgNode label={<MemberNode member={members['shakil-ahmed']} />} />
//               <OrgNode label={<MemberNode member={members['ratin']} />} />
//             </OrgNode>
//           </div>
//         </div>

//         <div className="border-t border-red-900/50 my-6 w-full max-w-6xl" />

//         {/* 3. TRAINING DIVISION */}
//         <div className="flex flex-col items-center w-full">
//           <SectionHeader title="Training Division" />
//           <div className="flex justify-center mt-2 w-full">
//             <OrgNode
//               label={
//                 <div className="flex justify-center gap-4">
//                   <MemberNode member={members['zahroul-haque']} />
//                   <MemberNode member={members['rafat-bin-ali']} />
//                 </div>
//               }
//             >
//               {/* DHAKA BRANCH */}
//               <OrgNode
//                 label={
//                   <div className="bg-white text-red-700 font-bold text-xs lg:text-sm px-4 py-1.5 rounded-xl border-2 border-red-600 uppercase">
//                     Dhaka Branch
//                   </div>
//                 }
//               >
//                 <OrgNode
//                   wrapChildren={true}
//                   label={<MemberNode member={members['shakil-ahmed']} />}
//                 >
//                   <MemberNode member={members['sobuj']} />
//                   <MemberNode member={members['robiul-hasan']} />
//                   <MemberNode member={members['ibrahim-khalil']} />
//                   <MemberNode member={members['asif-automation']} />
//                   <MemberNode member={members['minar']} />
//                   <MemberNode member={members['naim']} />
//                   <MemberNode member={members['asim']} />
//                   <MemberNode member={members['faruk-hossain']} />
//                   <MemberNode member={members['nazmul-islam']} />
//                 </OrgNode>
//               </OrgNode>

//               {/* GAZIPUR BRANCH */}
//               <OrgNode
//                 label={
//                   <div className="bg-white text-red-700 font-bold text-xs lg:text-sm px-4 py-1.5 rounded-xl border-2 border-red-600 uppercase">
//                     Gazipur Branch
//                   </div>
//                 }
//               >
//                 <OrgNode label={<MemberNode member={members['minhaz']} />}>
//                   <OrgNode label={<MemberNode member={members['sahadat']} />} />
//                   <OrgNode label={<MemberNode member={members['bijoy-das']} />} />
//                 </OrgNode>
//               </OrgNode>
//             </OrgNode>
//           </div>
//         </div>

//         <div className="border-t border-red-900/50 my-6 w-full max-w-6xl" />

//         {/* 4. R&D TEAM */}
//         <div className="flex flex-col items-center w-full">
//           <SectionHeader title="R&D / Research Publication" />
//           <div className="flex justify-center mt-2 w-full">
//             <OrgNode label={<MemberNode member={members['zian-reza']} />}>
//               <OrgNode label={<MemberNode member={members['areful-amin']} />} />
//               <OrgNode label={<MemberNode member={members['sharjeel-hassan']} />} />
//               <OrgNode label={<MemberNode member={members['faruk-hossain']} />} />
//               <OrgNode label={<MemberNode member={members['bayzid']} />} />
//               <OrgNode label={<MemberNode member={members['alvee']} />} />
//             </OrgNode>
//           </div>
//         </div>

//         <div className="border-t border-red-900/50 my-6 w-full max-w-6xl" />

//         {/* 5. MARKETING TEAM */}
//         <div className="flex flex-col items-center w-full">
//           <SectionHeader title="Marketing Team" />
//           <div className="flex justify-center mt-2 w-full">
//             <OrgNode label={<MemberNode member={members['rafat-bin-ali']} />}>
//               <OrgNode label={<MemberNode member={members['shakil-ahmed']} />} />
//               <OrgNode label={<MemberNode member={members['sobuj']} />} />
//               <OrgNode label={<MemberNode member={members['zahroul-haque']} />} />
//               <OrgNode label={<MemberNode member={members['sayed-bin-osman']} />}>
//                 <OrgNode label={<MemberNode member={members['sabiha']} />} />
//                 <OrgNode label={<MemberNode member={members['rayhan']} />} />
//                 <OrgNode label={<MemberNode member={members['odhora']} />} />
//                 <OrgNode label={<MemberNode member={members['mostafa']} />} />
//               </OrgNode>
//             </OrgNode>
//           </div>
//         </div>

//         <div className="border-t border-red-900/50 my-6 w-full max-w-6xl" />

//         {/* 6. INTERN TEAM */}
//         <div className="flex flex-col items-center w-full">
//           <SectionHeader title="Intern Team" />
//           <div className="flex justify-center mt-2 w-full">
//             <OrgNode
//               wrapChildren={true}
//               label={
//                 <div className="flex justify-center gap-4">
//                   <MemberNode member={members['zian-reza']} />
//                   <MemberNode member={members['zahroul-haque']} />
//                 </div>
//               }
//             >
//               <MemberNode member={members['roman-ahmed']} />
//               <MemberNode member={members['apurba-sarker']} />
//               <MemberNode member={members['safayet-hosen']} />
//               <MemberNode member={members['sagor-sutradhar']} />
//               <MemberNode member={members['bijoy-das']} />
//               <MemberNode member={members['montasir-hasan']} />
//               <MemberNode member={members['jabed-hossain']} />
//               <MemberNode member={members['mahbub-ahmed']} />
//             </OrgNode>
//           </div>
//         </div>

//       </div>
//     </div>
//   );
// }


'use client';

import React, { useEffect, useState } from 'react';
import MemberNode from '@/components/training-department/MemberNode';

function OrgNode({ label, children, wrapChildren = false }) {
  const childrenArray = React.Children.toArray(children);
  const hasChildren = childrenArray.length > 0;
  const isSingleChild = childrenArray.length === 1;

  return (
    <div className="flex flex-col items-center relative my-2">
      {/* Parent Node Card */}
      <div className="z-10">{label}</div>

      {hasChildren && (
        <div className="flex flex-col items-center w-full">
          {/* Vertical Line coming down from Parent */}
          <div className="w-[2px] h-6 bg-white" />

          {/* Single Child Connection */}
          {isSingleChild ? (
            <div className="flex flex-col items-center">
              <div className="w-0 h-0 border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-t-[7px] border-t-white z-20" />
              <div className="pt-2">{childrenArray[0]}</div>
            </div>
          ) : (
            /* Multiple Children Connection Tree */
            <div className="flex flex-col items-center w-full">
              {/* Main Arrow pointing to horizontal connector bar */}
              <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-white z-20" />

              {/* Children Container */}
              <div
                className={`flex ${
                  wrapChildren
                    ? 'flex-wrap max-w-5xl justify-center gap-y-10'
                    : 'flex-nowrap justify-center'
                } relative pt-6 w-full`}
              >
                {childrenArray.map((child, index) => {
                  const count = childrenArray.length;
                  const isFirst = index === 0;
                  const isLast = index === count - 1;

                  return (
                    <div
                      key={index}
                      className="relative flex flex-col items-center px-1 lg:px-3 min-w-max"
                    >
                      {/* Top Horizontal Connection Bar & Down Arrow to each Child */}
                      <div className="absolute top-0 w-full h-6">
                        {/* Horizontal Line Left Side */}
                        <div
                          className={`absolute top-0 left-0 w-1/2 border-t-2 border-white ${
                            isFirst ? 'opacity-0' : 'opacity-100'
                          }`}
                        />
                        {/* Horizontal Line Right Side */}
                        <div
                          className={`absolute top-0 right-0 w-1/2 border-t-2 border-white ${
                            isLast ? 'opacity-0' : 'opacity-100'
                          }`}
                        />
                        {/* Vertical Drop Line to Child */}
                        <div className="absolute top-0 w-[2px] h-[18px] bg-white left-1/2 -translate-x-1/2" />
                        {/* Down Arrowhead onto Child */}
                        <div className="absolute top-[16px] w-0 h-0 border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-t-[7px] border-t-white z-20 left-1/2 -translate-x-1/2" />
                      </div>

                      <div className="pt-6">{child}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

const SectionHeader = ({ title }) => (
  <div className="inline-block bg-white text-red-700 font-extrabold text-sm sm:text-base lg:text-lg px-4 lg:px-6 py-2 rounded-xl my-4 shadow-xl uppercase border-2 border-red-600">
    {title}
  </div>
);

export default function OrganogramPage() {
  const [members, setMembers] = useState({});

  useEffect(() => {
    fetch('/data/organogramData.json')
      .then((res) => res.json())
      .then((data) => {
        const memberMap = {};
        data.forEach((m) => {
          memberMap[m.id] = m;
        });
        setMembers(memberMap);
      })
      .catch((err) => console.error('Failed to load organogram data:', err));
  }, []);

  if (Object.keys(members).length === 0) {
    return (
      <div className="bg-[#2D090A]  min-h-screen flex items-center justify-center text-white">
        Loading Organogram...
      </div>
    );
  }

  return (
    <div className="bg-[#2D090A] pt-28 min-h-screen py-8 px-4 text-white overflow-x-auto">
      <div className="w-full max-w-[1400px] mx-auto flex flex-col items-center space-y-6 h-fit pb-12">
        
        {/* 1. BOARD OF DIRECTORS */}
        <div className="flex flex-col items-center w-full">
          <SectionHeader title="Board of Directors" />
          <div className="flex justify-center mt-2 w-full">
            <OrgNode label={<MemberNode member={members['rafat-bin-ali']} />}>
              <OrgNode label={<MemberNode member={members['fahim-shahrier']} />} />
              <OrgNode label={<MemberNode member={members['sayed-bin-osman']} />} />
              <OrgNode label={<MemberNode member={members['ahsanul-nabil']} />} />

              <OrgNode label={<MemberNode member={members['nowshad-amin']} />}>
                <OrgNode label={<MemberNode member={members['fakir-sharif']} />} />
                <OrgNode label={<MemberNode member={members['zahroul-haque']} />} />
                <OrgNode label={<MemberNode member={members['asif-mahmud']} />} />
              </OrgNode>
            </OrgNode>
          </div>
        </div>

        <div className="border-t border-red-900/50 my-4 w-full max-w-6xl" />

        {/* 2. EXECUTIVE TEAM */}
        <div className="flex flex-col items-center w-full">
          <SectionHeader title="Executive Team" />
          <div className="flex justify-center mt-2 w-full">
            <OrgNode label={<MemberNode member={members['rafat-bin-ali']} />}>
              <OrgNode label={<MemberNode member={members['zahroul-haque']} />} />
              <OrgNode label={<MemberNode member={members['fahim-shahrier']} />} />
              <OrgNode label={<MemberNode member={members['sayed-bin-osman']} />} />
              <OrgNode label={<MemberNode member={members['shakil-ahmed']} />} />
              <OrgNode label={<MemberNode member={members['ratin']} />} />
              <OrgNode label={<MemberNode member={members['zian-reza']} />} />
              <OrgNode label={<MemberNode member={members['asif-mahmud']} />} />
            </OrgNode>
          </div>
        </div>

        <div className="border-t border-red-900/50 my-4 w-full max-w-6xl" />

        {/* 3. TRAINING DIVISION */}
        <div className="flex flex-col items-center w-full">
          <SectionHeader title="Training Division" />
          <div className="flex justify-center mt-2 w-full">
            <OrgNode
              label={
                <div className="flex justify-center gap-4">
                  <MemberNode member={members['zahroul-haque']} />
                  <MemberNode member={members['rafat-bin-ali']} />
                </div>
              }
            >
              {/* DHAKA BRANCH */}
              <OrgNode
                label={
                  <div className="bg-white text-red-700 font-bold text-xs lg:text-sm px-4 py-1.5 rounded-xl border-2 border-red-600 uppercase">
                    Dhaka Branch
                  </div>
                }
              >
                <OrgNode
                  wrapChildren={true}
                  label={<MemberNode member={members['shakil-ahmed']} />}
                >
                  <MemberNode member={members['asif-automation']} />
                  <MemberNode member={members['sobuj']} />
                  <MemberNode member={members['robiul-hasan']} />
                  <MemberNode member={members['ibrahim-khalil']} />
                  <MemberNode member={members['minar']} />
                  <MemberNode member={members['masud']} />
                  <MemberNode member={members['asif-hossain']} />
                  <MemberNode member={members['asim']} />
                  <MemberNode member={members['faruk-hossain']} />
                  <MemberNode member={members['nazmul-islam']} />
                </OrgNode>
              </OrgNode>

              {/* GAZIPUR BRANCH */}
              <OrgNode
                label={
                  <div className="bg-white text-red-700 font-bold text-xs lg:text-sm px-4 py-1.5 rounded-xl border-2 border-red-600 uppercase">
                    Gazipur Branch
                  </div>
                }
              >
                <OrgNode label={<MemberNode member={members['mohaiminul-islam']} />}>
                  <OrgNode label={<MemberNode member={members['sahadat']} />} />
                  <OrgNode label={<MemberNode member={members['bijoy-das']} />} />
                </OrgNode>
              </OrgNode>
            </OrgNode>
          </div>
        </div>

        <div className="border-t border-red-900/50 my-4 w-full max-w-6xl" />

        {/* 4. R&D TEAM */}
        <div className="flex flex-col items-center w-full">
          <SectionHeader title="R&D / Research Publication" />
          <div className="flex justify-center mt-2 w-full">
            <OrgNode label={<MemberNode member={members['zian-reza']} />}>
              <OrgNode label={<MemberNode member={members['areful-amin']} />} />
              <OrgNode label={<MemberNode member={members['sharjeel-hassan']} />} />
              <OrgNode label={<MemberNode member={members['faruk-hossain']} />} />
              <OrgNode label={<MemberNode member={members['bayzid']} />} />
              <OrgNode label={<MemberNode member={members['alvee']} />} />
            </OrgNode>
          </div>
        </div>

        <div className="border-t border-red-900/50 my-4 w-full max-w-6xl" />

        {/* 5. MARKETING TEAM */}
        <div className="flex flex-col items-center w-full">
          <SectionHeader title="Marketing Team" />
          <div className="flex justify-center mt-2 w-full">
            <OrgNode label={<MemberNode member={members['rafat-bin-ali']} />}>
              <OrgNode label={<MemberNode member={members['shakil-ahmed']} />} />
              <OrgNode label={<MemberNode member={members['sobuj']} />} />
              <OrgNode label={<MemberNode member={members['zahroul-haque']} />} />
              <OrgNode label={<MemberNode member={members['sayed-bin-osman']} />}>
                <OrgNode label={<MemberNode member={members['sabiha']} />} />
                <OrgNode label={<MemberNode member={members['rayhan']} />} />
                <OrgNode label={<MemberNode member={members['odhora']} />} />
                <OrgNode label={<MemberNode member={members['mostafa']} />} />
              </OrgNode>
            </OrgNode>
          </div>
        </div>

        <div className="border-t border-red-900/50 my-4 w-full max-w-6xl" />

        {/* 6. INTERN TEAM */}
        <div className="flex flex-col items-center w-full">
          <SectionHeader title="Intern Team" />
          <div className="flex justify-center mt-2 w-full">
            <OrgNode
              wrapChildren={true}
              label={
                <div className="flex justify-center gap-4">
                  <MemberNode member={members['zian-reza']} />
                  <MemberNode member={members['zahroul-haque']} />
                </div>
              }
            >
              <MemberNode member={members['roman-ahmed']} />
              <MemberNode member={members['apurba-sarker']} />
              <MemberNode member={members['safayet-hosen']} />
              <MemberNode member={members['sagor-sutradhar']} />
              
              <MemberNode member={members['montasir-hasan']} />
              <MemberNode member={members['jabed-hossain']} />
              <MemberNode member={members['mahbub-ahmed']} />
            </OrgNode>
          </div>
        </div>

      </div>
    </div>
  );
}


