import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const MemberNode = ({ member }) => {
  if (!member) return null;

  return (
    <Link href={`/pages/administration/training-department/${member.id}`}>
      <div className="flex flex-col items-center cursor-pointer group m-3">
        {/* Profile Image — outer ring spins, inner ring stays still */}
        <div className="relative w-20 h-20 sm:w-24 sm:h-24 shrink-0">
          {/* Outer dashed ring */}
          <div className="absolute inset-0 rounded-full border-2 border-dashed border-red-500 animate-[spin_10s_linear_infinite]" />

          {/* Inner ring */}
          <div className="absolute inset-[8%] rounded-full border-2 border-red-600 overflow-hidden bg-white shadow-lg group-hover:scale-110 transition-transform duration-300">
            <Image
              src={member.image}
              alt={member.name}
              fill
              sizes="(max-width: 640px) 80px, 96px"
              /* যদি সদস্যের তথ্যে বিশেষ কোনো অবস্থান থাকে (যেমন: object-center বা object-contain), তা ব্যবহার করবে; না থাকলে ডিফল্ট object-top ও object-cover নেবে */
              className={`${member.objectFit || 'object-cover'} ${member.objectPosition || 'object-top'}`}
            />
          </div>
        </div>

        {/* Name & Role Banner */}
        <div className="bg-red-700 text-white text-center px-3 py-1.5 rounded-xl mt-2 shadow-md w-full max-w-[170px] border border-red-600 group-hover:bg-red-600 transition-colors">
          <h4 className="text-xs font-bold leading-tight truncate">{member.name}</h4>
          <p className="text-[10px] text-red-100 mt-0.5 truncate">{member.role}</p>
        </div>
      </div>
    </Link>
  );
};

export default MemberNode;