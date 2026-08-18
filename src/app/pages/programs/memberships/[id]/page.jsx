import { membershipsData } from '@/data/memberships'
import React from 'react'
import { 
  CheckCircle2, 
  Zap, 
  Grid, 
  Sparkles, 
  Wrench, 
  Phone, 
  Mail, 
  UserCheck, 
  MapPin, 
  ArrowRight,
  ShieldCheck,
  Star
} from 'lucide-react'

// Contact Icon Helper
const getContactIcon = (iconName) => {
  switch (iconName) {
    case 'phone': return <Phone className="w-5 h-5 text-red-600" />
    case 'email': return <Mail className="w-5 h-5 text-red-600" />
    case 'user-check': return <UserCheck className="w-5 h-5 text-red-600" />
    case 'map-pin': return <MapPin className="w-5 h-5 text-red-600" />
    default: return <UserCheck className="w-5 h-5 text-red-600" />
  }
}

// Course Icon Helper
const getCourseIcon = (courseId) => {
  switch (courseId) {
    case 'automation-pro': return <Grid className="w-6 h-6 text-slate-700" />
    case 'bms-pro': return <Zap className="w-6 h-6 text-slate-700" />
    case 'ai-automation-bms-scada': return <Sparkles className="w-6 h-6 text-red-600" />
    default: return <Wrench className="w-6 h-6 text-slate-700" />
  }
}

const MembershipsDetails = async ({ params }) => {
  const { id } = await params
  const expectedData = membershipsData.find((membership) => membership.id === id)

  if (!expectedData) {
    return (
      <div className="min-h-screen bg-slate-50 text-slate-900 flex items-center justify-center">
        <h2 className="text-2xl font-bold">Membership Not Found!</h2>
      </div>
    )
  }

  const { title, badge, tagline, description, image, type, courses, commonBenefits, extraBenefits, highlights, contactInfo } = expectedData

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 py-12 px-4 sm:px-6 lg:px-8 pt-30">
      <div className="max-w-7xl mx-auto space-y-10">

        {/* Header Hero Section */}
        <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 md:p-12 shadow-sm">
          <div className="flex flex-col md:flex-row items-center gap-8 justify-between">
            <div className="space-y-4 max-w-2xl">
              <span className="inline-block rounded-full bg-red-50 border border-red-200 px-4 py-1.5 text-xs font-semibold text-red-600 tracking-wider uppercase">
                {badge}
              </span>
              <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-900 uppercase">
                {title}
              </h1>
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
                {tagline || description}
              </p>
            </div>

            {image && (
              <div className="w-full md:w-80 h-48 sm:h-56 relative rounded-2xl border border-slate-200 bg-slate-50 p-4 flex items-center justify-center shrink-0">
                <img 
                  src={image} 
                  alt={title} 
                  className="w-full h-full object-contain filter drop-shadow-sm"
                />
              </div>
            )}
          </div>
        </div>

        {/* 1. STANDARD TYPE (Bronze, Silver, Gold) */}
        {type === 'standard' && (
          <>
            {/* Courses Section */}
            {courses && courses.length > 0 && (
              <div className="space-y-6">
                <div className="border-l-4 border-red-600 pl-4">
                  <h2 className="text-2xl font-bold uppercase tracking-wide text-slate-900">Included Courses</h2>
                  <p className="text-sm text-slate-500">Select or review available course modules under this membership</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {courses.map((course) => (
                    <div
                      key={course.id}
                      className={`relative flex flex-col justify-between rounded-2xl bg-white p-6 border transition-all duration-300 shadow-sm ${
                        course.isPopular
                          ? 'border-red-500 ring-2 ring-red-500/10 shadow-md'
                          : 'border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      {course.isPopular && (
                        <div className="absolute right-4 top-4">
                          <span className="rounded-full bg-red-600 px-3 py-1 text-[10px] font-bold text-white uppercase tracking-wider">
                            Popular
                          </span>
                        </div>
                      )}

                      <div>
                        <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-slate-100 border border-slate-200">
                          {getCourseIcon(course.id)}
                        </div>

                        <h3 className="mb-2 text-xl font-bold uppercase tracking-wide text-slate-900">
                          {course.title}
                        </h3>

                        <div className="mb-6">
                          {course.originalPrice && (
                            <span className="block text-xs font-medium text-slate-400 line-through">
                              {course.originalPrice}
                            </span>
                          )}
                          <span className="text-2xl font-black text-red-600 tracking-tight">
                            {course.price}
                          </span>
                        </div>

                        <div className="border-t border-slate-100 pt-4 mb-4">
                          <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block mb-3">
                            Course Features:
                          </span>
                          <ul className="space-y-2.5 max-h-60 overflow-y-auto pr-1 text-sm text-slate-700 scrollbar-thin">
                            {course.features.map((feature, idx) => (
                              <li key={idx} className="flex items-start gap-2.5">
                                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-red-600" />
                                <span className="text-xs leading-relaxed text-slate-700">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Benefits Sections */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-4">
              {/* Common Benefits */}
              {commonBenefits && (
                <div className="rounded-2xl border border-slate-200 bg-white p-6 space-y-5 shadow-sm">
                  <div className="flex items-center gap-2.5 border-b border-slate-100 pb-3">
                    <ShieldCheck className="w-5 h-5 text-red-600" />
                    <h3 className="text-lg font-bold uppercase tracking-wide text-slate-900">Common Benefits</h3>
                  </div>
                  <div className="grid grid-cols-1 gap-3">
                    {commonBenefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                        <CheckCircle2 className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                        <div>
                          <h4 className="text-sm font-semibold text-slate-900">{benefit.title}</h4>
                          <p className="text-xs text-slate-500 mt-0.5">{benefit.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Extra Benefits */}
              {extraBenefits && (
                <div className="rounded-2xl border border-slate-200 bg-white p-6 space-y-5 shadow-sm">
                  <div className="flex items-center gap-2.5 border-b border-slate-100 pb-3">
                    <Star className="w-5 h-5 text-red-600" />
                    <h3 className="text-lg font-bold uppercase tracking-wide text-slate-900">Exclusive Extra Benefits</h3>
                  </div>
                  <div className="grid grid-cols-1 gap-3">
                    {extraBenefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                        <CheckCircle2 className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                        <div>
                          <h4 className="text-sm font-semibold text-slate-900">{benefit.title}</h4>
                          <p className="text-xs text-slate-500 mt-0.5">{benefit.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </>
        )}

        {/* 2. CONTACT-ONLY TYPE (Industrial, VIP, Elite) */}
        {type === 'contact-only' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Highlights */}
            {highlights && (
              <div className="rounded-3xl border border-slate-200 bg-white p-8 space-y-6 shadow-sm">
                <div className="border-b border-slate-100 pb-4">
                  <h3 className="text-xl font-bold uppercase tracking-wide text-slate-900">Membership Highlights</h3>
                  <p className="text-sm text-slate-500">Exclusive features reserved for this tier</p>
                </div>
                <ul className="space-y-4">
                  {highlights.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-slate-700">
                      <CheckCircle2 className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                      <span className="text-sm font-medium leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Contact Info Section */}
            {contactInfo && (
              <div className="rounded-3xl border border-red-100 bg-white p-8 space-y-6 shadow-md">
                <div className="border-b border-slate-100 pb-4">
                  <h3 className="text-xl font-bold uppercase tracking-wide text-red-600">
                    {contactInfo.title}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                    {contactInfo.description}
                  </p>
                </div>

                <div className="space-y-3.5">
                  {contactInfo.details.map((detail, idx) => (
                    <div key={idx} className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200/60">
                      <div className="p-2.5 bg-white rounded-lg border border-slate-200 shadow-sm">
                        {getContactIcon(detail.icon)}
                      </div>
                      <div>
                        <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                          {detail.label}
                        </span>
                        <span className="text-sm font-semibold text-slate-800">
                          {detail.value}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                <button className="w-full mt-4 flex items-center justify-center gap-2 rounded-xl bg-red-600 py-3.5 px-6 font-bold text-white transition-all hover:bg-red-700 active:scale-95 shadow-md shadow-red-600/20">
                  <span>{contactInfo.buttonText || "Contact Office Now"}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
        )}

      </div>
    </div>
  )
}

export default MembershipsDetails