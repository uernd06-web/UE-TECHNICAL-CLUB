import DemoCertificate from '@/components/memberships/DemoCertificate'
import FeaturedCourses from '@/components/memberships/FeaturedCourses'
import MembershipCard from '@/components/memberships/MembershipCard'
import MembershipsHero from '@/components/memberships/MembershipsHero'
import ReferralBenefits from '@/components/memberships/ReferralBenefits'
import ReferralMembership from '@/components/memberships/ReferralMembership'
import SupportDirectory from '@/components/memberships/SupportDirectory'



import React from 'react'

export const metadata = {
  title: "memberships",
  description: "",
};

const MembershipsPage = () => {
  return (
   <div>
    <MembershipsHero></MembershipsHero>
    <MembershipCard></MembershipCard>
    <ReferralMembership></ReferralMembership>
    <ReferralBenefits></ReferralBenefits>
    <FeaturedCourses></FeaturedCourses>
    <DemoCertificate></DemoCertificate>
    <SupportDirectory></SupportDirectory>
   </div>
  )
}

export default MembershipsPage