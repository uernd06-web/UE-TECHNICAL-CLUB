import CompaniesEcosystem from '@/components/company/CompaniesEcosystem'
import CompaniesTree from '@/components/company/CompaniesTree'
import React from 'react'

export const metadata = {
  title: "Companies",
  description: "",
};

const Companies = () => {
  return (
    <div>

      <CompaniesTree></CompaniesTree>
    </div>
  )
}

export default Companies