'use client'
import CertificateGrid from '@/components/certificate/CertificateGrid'
import CertificateHeader from '@/components/certificate/CertificateHeader'
import React, { useState } from 'react'

const Certification = () => {
  const [activeTab, setActiveTab] = useState("all");
  return (
   <section className="w-full bg-slate-50 py-12 lg:py-20 font-sans text-gray-900 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <CertificateHeader activeTab={activeTab} setActiveTab={setActiveTab} />
        <CertificateGrid activeTab={activeTab} />
      </div>
    </section>
  )
}

export default Certification