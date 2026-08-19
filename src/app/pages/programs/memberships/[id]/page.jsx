import React from 'react'
import Link from 'next/link'
import { 
  CheckCircle2, 
  Phone, 
  Mail, 
  UserCheck, 
  MapPin, 
  ArrowRight,
  ArrowLeft,
  ShieldCheck,
  Star,
  Sparkles,
  Gift
} from 'lucide-react'
import { membershipsData } from '@/data/memberships'

// Dynamic Contact Icon Renderer
const getContactIcon = (iconName) => {
  switch (iconName) {
    case 'phone': return <Phone className="w-5 h-5 text-red-600" />
    case 'email': return <Mail className="w-5 h-5 text-red-600" />
    case 'user-check': return <UserCheck className="w-5 h-5 text-red-600" />
    case 'map-pin': return <MapPin className="w-5 h-5 text-red-600" />
    default: return <UserCheck className="w-5 h-5 text-red-600" />
  }
}

const MembershipsDetails = async ({ params }) => {
  const { id } = await params
  const expectedData = membershipsData.find((membership) => membership.id === id)

  if (!expectedData) {
    return (
      <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col items-center justify-center gap-4">
        <h2 className="text-2xl font-bold">Membership Not Found!</h2>
        <Link 
          href="/memberships" 
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-red-600 text-white font-bold text-sm hover:bg-red-700 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Memberships</span>
        </Link>
      </div>
    )
  }

  const { 
    title, 
    badge, 
    tagline, 
    description, 
    image, 
    type, 
    options, 
    courses, 
    modules, 
    extendedSkills, 
    commonBenefits, 
    extraBenefits, 
    highlights, 
    contactInfo 
  } = expectedData

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 py-12 px-4 sm:px-6 lg:px-8 pt-28">
      <div className="max-w-7xl mx-auto space-y-8">

        {/* BACK NAVIGATION BUTTON */}
        <div>
          <Link 
            href={'/pages/programs/memberships'}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-slate-200 text-slate-700 font-semibold text-sm hover:bg-slate-100 hover:text-slate-900 transition-all shadow-2xs active:scale-95"
          >
            <ArrowLeft className="w-4 h-4 text-red-600" />
            <span>Back to Memberships</span>
          </Link>
        </div>

        {/* 1. HERO HEADER SECTION */}
        <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 md:p-12 shadow-sm">
          <div className="flex flex-col md:flex-row items-center gap-8 justify-between">
            <div className="space-y-4 max-w-2xl">
              {badge && (
                <span className="inline-block rounded-full bg-red-50 border border-red-200 px-4 py-1.5 text-xs font-bold text-red-600 tracking-wider uppercase">
                  {badge}
                </span>
              )}
              <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-950 uppercase">
                {title}
              </h1>
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
                {tagline || description}
              </p>
            </div>

            {image && (
              <div className="w-full md:w-80 h-48 sm:h-56 relative rounded-2xl border border-slate-100 bg-slate-50 p-4 flex items-center justify-center shrink-0">
                <img 
                  src={image} 
                  alt={title} 
                  className="w-full h-full object-contain filter drop-shadow-md"
                />
              </div>
            )}
          </div>
        </div>

        {/* 2. OPTIONS-BASED (Industrial Membership) */}
        {type === 'options-based' && options && (
          <div className="space-y-6">
            <div className="border-l-4 border-red-600 pl-4">
              <h2 className="text-2xl font-black uppercase text-slate-900">Program Options</h2>
              <p className="text-xs sm:text-sm text-slate-500">Choose from specialized engineering pathways</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {options.map((option) => (
                <div key={option.id} className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 space-y-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
                  <div className="space-y-6">
                    <div className="flex justify-between items-start border-b border-slate-100 pb-4">
                      <div>
                        <h3 className="text-xl font-bold text-slate-900">{option.title}</h3>
                        <div className="mt-2 flex items-baseline gap-2">
                          <span className="text-2xl font-black text-red-600">{option.specialFee}</span>
                          {option.regularPrice && (
                            <span className="text-xs text-slate-400 line-through font-medium">{option.regularPrice}</span>
                          )}
                        </div>
                      </div>
                      {option.discount && (
                        <span className="rounded-full bg-red-100 px-3 py-1 text-xs font-bold text-red-700">
                          {option.discount} OFF
                        </span>
                      )}
                    </div>

                    {/* Option Features */}
                    <div>
                      <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Core Modules & Features</h4>
                      <ul className="space-y-2 max-h-60 overflow-y-auto pr-1 text-xs sm:text-sm text-slate-700 scrollbar-thin">
                        {option.features.map((feat, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Extended Skills & Enrollment Button */}
                  <div className="space-y-4 pt-4 border-t border-slate-100">
                    {option.extendedSkills && option.extendedSkills.length > 0 && (
                      <div>
                        <div className="flex items-center gap-1.5 mb-2">
                          <Gift className="w-3.5 h-3.5 text-emerald-600" />
                          <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                            Extended Skills <span className="text-emerald-600 font-extrabold">(Included Free)</span>
                          </h4>
                        </div>
                        <div className="space-y-1.5">
                          {option.extendedSkills.map((skill, idx) => (
                            <div key={idx} className="flex justify-between items-center text-xs font-medium text-slate-800 bg-emerald-50/60 p-2.5 rounded-lg border border-emerald-100">
                              <span className="font-semibold text-slate-800">
                                {typeof skill === 'string' ? skill : skill.title}
                              </span>
                              <span className="text-[10px] font-black uppercase tracking-wider bg-emerald-600 text-white px-2 py-0.5 rounded-md shadow-2xs">
                                Free
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    <button className="w-full flex items-center justify-center gap-2 rounded-xl bg-red-600 py-3.5 px-6 font-bold text-white transition-all hover:bg-red-700 active:scale-95 shadow-md shadow-red-600/20">
                      <span>Enroll Now</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 3. STANDARD COURSES (Bronze, Silver & Gold Membership) */}
        {type === 'standard' && courses && (
          <div className="space-y-6">
            <div className="border-l-4 border-red-600 pl-4">
              <h2 className="text-2xl font-black uppercase text-slate-900">Available Courses & Programs</h2>
              <p className="text-xs sm:text-sm text-slate-500">Comprehensive technical modules included in this tier</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {courses.map((course) => (
                <div key={course.id} className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 space-y-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
                  <div className="space-y-6">
                    {/* Header with Title, Price, and Discount Badge */}
                    <div className="flex justify-between items-start border-b border-slate-100 pb-4 gap-4">
                      <div>
                        <h3 className="text-xl font-bold text-slate-900 leading-snug">{course.title}</h3>
                        <div className="mt-2 flex items-baseline gap-2">
                          <span className="text-2xl font-black text-red-600">{course.price}</span>
                          {course.originalPrice && (
                            <span className="text-xs text-slate-400 line-through font-medium">{course.originalPrice}</span>
                          )}
                        </div>
                      </div>
                      {course.discount && (
                        <span className="rounded-full bg-red-100 px-3 py-1 text-xs font-bold text-red-700 shrink-0">
                          {course.discount} OFF
                        </span>
                      )}
                    </div>

                    {/* Features List */}
                    {course.features && course.features.length > 0 && (
                      <div>
                        <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Core Modules & Features</h4>
                        <ul className="space-y-2 max-h-60 overflow-y-auto pr-1 text-xs sm:text-sm text-slate-700 scrollbar-thin">
                          {course.features.map((feat, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <CheckCircle2 className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                              <span>{feat}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Modules Inside Gold/Special Membership Card */}
                    {modules && modules.length > 0 && (
                      <div>
                        <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Detailed Program Modules</h4>
                        <div className="space-y-3 max-h-80 overflow-y-auto pr-1 scrollbar-thin">
                          {modules.map((mod, idx) => (
                            <div key={idx} className="rounded-xl border border-slate-100 bg-slate-50 p-3.5 space-y-2">
                              <div className="flex justify-between items-center border-b border-slate-200/60 pb-1.5">
                                <span className="font-bold text-slate-900 text-xs sm:text-sm">{mod.category}</span>
                                {mod.fee && <span className="text-[10px] font-extrabold text-red-600 bg-red-50 px-2 py-0.5 rounded border border-red-100">{mod.fee}</span>}
                              </div>
                              <ul className="space-y-1 text-xs text-slate-700">
                                {mod.topics.map((topic, i) => (
                                  <li key={i} className="flex items-start gap-1.5">
                                    <Sparkles className="w-3 h-3 text-red-500 shrink-0 mt-0.5" />
                                    <span>{topic}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Extended Skills & Enrollment Button */}
                  <div className="space-y-4 pt-4 border-t border-slate-100">
                    {extendedSkills && Array.isArray(extendedSkills) && extendedSkills.length > 0 && (
                      <div>
                        <div className="flex items-center gap-1.5 mb-2">
                          <Gift className="w-3.5 h-3.5 text-emerald-600" />
                          <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                            Extended Skills <span className="text-emerald-600 font-extrabold">(Included Free)</span>
                          </h4>
                        </div>
                        <div className="space-y-1.5">
                          {extendedSkills.map((skill, idx) => (
                            <div key={idx} className="flex justify-between items-center text-xs font-medium text-slate-800 bg-emerald-50/60 p-2.5 rounded-lg border border-emerald-100">
                              <span className="font-semibold text-slate-800">
                                {typeof skill === 'string' ? skill : skill.title}
                              </span>
                              <div className="flex items-center gap-2">
                                {skill.price && (
                                  <span className="text-slate-400 line-through text-[11px] font-medium">
                                    {skill.price}
                                  </span>
                                )}
                                <span className="text-[10px] font-black uppercase tracking-wider bg-emerald-600 text-white px-2 py-0.5 rounded-md shadow-2xs">
                                  Free
                                </span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    <button className="w-full flex items-center justify-center gap-2 rounded-xl bg-red-600 py-3.5 px-6 font-bold text-white transition-all hover:bg-red-700 active:scale-95 shadow-md shadow-red-600/20">
                      <span>Enroll Now</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 4. COMMON & EXTRA BENEFITS SECTION */}
        {(commonBenefits || extraBenefits) && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {commonBenefits && (
              <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 space-y-6 shadow-sm">
                <div className="flex items-center gap-2.5 border-b border-slate-100 pb-4">
                  <ShieldCheck className="w-6 h-6 text-red-600" />
                  <h3 className="text-xl font-black uppercase text-slate-900">Common Benefits</h3>
                </div>
                <div className="space-y-2.5 max-h-96 overflow-y-auto pr-1 scrollbar-thin">
                  {commonBenefits.map((benefit, idx) => (
                    <div key={idx} className="flex justify-between items-center p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs sm:text-sm">
                      <span className="font-semibold text-slate-700">{benefit.title}</span>
                      <span className="font-extrabold text-slate-950 bg-white px-2.5 py-1 rounded-lg border border-slate-200 shadow-2xs">{benefit.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {extraBenefits && (
              <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 space-y-6 shadow-sm">
                <div className="flex items-center gap-2.5 border-b border-slate-100 pb-4">
                  <Star className="w-6 h-6 text-red-600" />
                  <h3 className="text-xl font-black uppercase text-slate-900">Extra Exclusive Benefits</h3>
                </div>
                <div className="space-y-2.5 max-h-96 overflow-y-auto pr-1 scrollbar-thin">
                  {extraBenefits.map((benefit, idx) => (
                    <div key={idx} className="flex justify-between items-center p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs sm:text-sm">
                      <span className="font-semibold text-slate-700">{benefit.title}</span>
                      <span className="font-extrabold text-red-600 bg-red-50 px-2.5 py-1 rounded-lg border border-red-100">{benefit.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* 5. CONTACT-ONLY TYPE (Elite & VIP Membership) */}
        {type === 'contact-only' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {highlights && (
              <div className="rounded-3xl border border-slate-200 bg-white p-8 space-y-6 shadow-sm">
                <div className="border-b border-slate-100 pb-4">
                  <h3 className="text-xl font-black uppercase tracking-wide text-slate-900">Membership Highlights</h3>
                  <p className="text-xs text-slate-500 mt-1">Exclusive privileges reserved for this tier</p>
                </div>
                <ul className="space-y-4">
                  {highlights.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-slate-700">
                      <CheckCircle2 className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                      <span className="text-sm font-semibold leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {contactInfo && (
              <div className="rounded-3xl border border-red-200 bg-white p-8 space-y-6 shadow-md">
                <div className="border-b border-slate-100 pb-4">
                  <h3 className="text-xl font-black uppercase tracking-wide text-red-600">
                    {contactInfo.title}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                    {contactInfo.description}
                  </p>
                </div>

                <div className="space-y-3.5">
                  {contactInfo.details.map((detail, idx) => (
                    <div key={idx} className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100">
                      <div className="p-2.5 bg-white rounded-lg border border-slate-200 shadow-2xs">
                        {getContactIcon(detail.icon)}
                      </div>
                      <div>
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                          {detail.label}
                        </span>
                        <span className="text-sm font-bold text-slate-800">
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