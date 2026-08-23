import OrganogramTree from '@/components/training-department/OrganogramTree';
import { organogramList } from '@/data/organogramData';
import fs from 'fs';
import path from 'path';

export const metadata={
  title: 'Organogram | UE Technical Club',
  description: 'Explore the organizational structure, team members, advisors, and board of directors of UE Technical Club.',
  
}


// সার্ভার সাইডে JSON ডাটা পড়ার ফাংশন
async function getOrganogramData() {
 
  const memberMap = {};
  organogramList.forEach((m) => {
    memberMap[m.id] = m;
  });

  return memberMap;
}

export default async function OrganogramPage() {
  const members = await getOrganogramData();

  return (
    <div className="bg-[#2D090A] pt-28 min-h-screen py-8 px-4 text-white overflow-x-auto">
      <OrganogramTree members={members} />
    </div>
  );
}