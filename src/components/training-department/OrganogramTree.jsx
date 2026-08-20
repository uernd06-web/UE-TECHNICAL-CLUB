'use client';

import React from 'react';
import OrgNode from './OrgNode';
import MemberNode from './MemberNode';


const SectionHeader = ({ title }) => (
  <div className="inline-block bg-white text-red-700 font-extrabold text-sm sm:text-base lg:text-lg px-4 lg:px-6 py-2 rounded-xl my-4 shadow-xl uppercase border-2 border-red-600">
    {title}
  </div>
);

export default function OrganogramTree({ members }) {
  if (!members || Object.keys(members).length === 0) {
    return (
      <div className="bg-[#2D090A] min-h-screen flex items-center justify-center text-white">
        Loading Organogram...
      </div>
    );
  }

  return (
    <div className="w-full max-w-[1400px] mx-auto flex flex-col items-center space-y-6 h-fit pb-12">
      {/* 1. BOARD OF DIRECTORS */}
      <div className="flex flex-col items-center w-full">
        <SectionHeader title="Board of Directors" />
        <div className="flex justify-center mt-2 w-full">
          <OrgNode label={<MemberNode member={members['rafat-bin-ali']} />}>
            <OrgNode label={<MemberNode member={members['fahim-shahrier']} />} />
            <OrgNode label={<MemberNode member={members['sayed-bin-osman']} />} />
          </OrgNode>
        </div>
      </div>

      <div className="border-t border-red-900/50 my-4 w-full max-w-6xl" />

      {/* 2. BOARD OF ADVISORS */}
      <div className="flex flex-col items-center w-full">
        <SectionHeader title="Board of Advisors" />
        <div className="flex justify-center mt-2 w-full">
          <OrgNode wrapChildren={true}>
            <MemberNode member={members['nowshad-amin']} />
            <MemberNode member={members['ahsanul-nabil']} />
            <MemberNode member={members['zahroul-haque']} />
            <MemberNode member={members['fakir-sharif']} />
            <MemberNode member={members['asif-mahmud']} />
          </OrgNode>
        </div>
      </div>

      <div className="border-t border-red-900/50 my-4 w-full max-w-6xl" />

      {/* 3. EXECUTIVE TEAM */}
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

      {/* 4. TRAINING DIVISION */}
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
                <MemberNode member={members['asif-hossain']} />
                <MemberNode member={members['masud']} />
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

      {/* 5. PROJECT DIVISION */}
      <div className="flex flex-col items-center w-full">
        <SectionHeader title="Project Division" />
        <div className="flex justify-center mt-2 w-full">
          <OrgNode label={<MemberNode member={members['asif-mahmud']} />}>
            <MemberNode member={members['dipok-raj']} />
            <MemberNode member={members['bayzid']} />
            <MemberNode member={members['sara']} />
          </OrgNode>
        </div>
      </div>

      <div className="border-t border-red-900/50 my-4 w-full max-w-6xl" />

      {/* 6. R&D TEAM */}
      <div className="flex flex-col items-center w-full">
        <SectionHeader title="R&D / Research Publication" />
        <div className="flex justify-center mt-2 w-full">
          <OrgNode label={<MemberNode member={members['zian-reza']} />}>
            <OrgNode label={<MemberNode member={members['alvee']} />} />
            <OrgNode label={<MemberNode member={members['areful-amin']} />} />
            <OrgNode label={<MemberNode member={members['sharjeel-hassan']} />} />
            <OrgNode label={<MemberNode member={members['jeba-shajida']} />} />
            <OrgNode label={<MemberNode member={members['jakerul-islam']} />} />
          </OrgNode>
        </div>
      </div>

      <div className="border-t border-red-900/50 my-4 w-full max-w-6xl" />

      {/* 7. MARKETING TEAM */}
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

      {/* 8. INTERN TEAM */}
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
  );
}