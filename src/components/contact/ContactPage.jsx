"use client";
import React, { useState } from "react";
import { 
  FaMapMarkerAlt, 
  FaEnvelope, 
  FaPhoneAlt, 
  FaPaperPlane, 
  FaGraduationCap, 
  FaMicrochip, 
  FaProjectDiagram 
} from "react-icons/fa";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Thank you for reaching out! We will contact you soon.");
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans pt-28 pb-16 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Header Hero Section */}
        <div className="relative overflow-hidden bg-gradient-to-r from-[#801414] via-[#9B1C1C] to-[#C81E1E] text-white rounded-3xl p-8 md:p-12 shadow-xl shadow-red-900/10">
          <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-white/5 rounded-full blur-2xl pointer-events-none" />
          <div className="relative z-10 max-w-3xl space-y-4">
            <span className="inline-block bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full">
              Get In Touch With Us
            </span>
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">
              Let&apos;s Build Something Great Together
            </h1>
            <p className="text-red-100 text-sm md:text-base leading-relaxed">
              Have questions about our engineering programs, R&D innovations, or project consultations? Reach out to our team below.
            </p>
          </div>
        </div>

        {/* Main Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Side: Direct Contact Details & Departments */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Location Card */}
            <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm hover:shadow-md transition duration-300 flex items-start gap-4">
              <div className="p-3.5 bg-red-50 text-[#9B1C1C] rounded-2xl border border-red-100 shrink-0">
                <FaMapMarkerAlt className="text-2xl" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-base mb-1">Head Office Location</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  2nd floor, Alook Tower, 47/1 Shaheed Tajuddin Ahmed Ave, Dhaka 1212
                </p>
              </div>
            </div>

            {/* Email Contact Card */}
            <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm hover:shadow-md transition duration-300">
              <div className="flex items-center gap-3 border-b border-slate-100 pb-4 mb-4">
                <div className="p-3 bg-red-50 text-[#9B1C1C] rounded-xl border border-red-100">
                  <FaEnvelope className="text-lg" />
                </div>
                <h3 className="font-bold text-slate-900 text-base">Email Support</h3>
              </div>

              <div className="space-y-3.5 text-sm">
                <div className="p-3 bg-slate-50 rounded-xl hover:bg-red-50/50 transition">
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#9B1C1C] mb-0.5">
                    <FaGraduationCap /> Training Query
                  </div>
                  <a href="mailto:training@ulteriorengineering.com" className="font-medium text-slate-700 hover:text-[#9B1C1C]">
                    training@ulteriorengineering.com
                  </a>
                </div>

                <div className="p-3 bg-slate-50 rounded-xl hover:bg-red-50/50 transition">
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#9B1C1C] mb-0.5">
                    <FaMicrochip /> Research & Development (R&D)
                  </div>
                  <a href="mailto:rnd@ulteriorengineering.com" className="font-medium text-slate-700 hover:text-[#9B1C1C]">
                    
                  </a>
                </div>

                <div className="p-3 bg-slate-50 rounded-xl hover:bg-red-50/50 transition">
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#9B1C1C] mb-0.5">
                    <FaProjectDiagram /> Project Inquiries
                  </div>
                  <a href="mailto:technicalsolarue@gmail.com" className="font-medium text-slate-700 hover:text-[#9B1C1C]">
                   admin@ulteriorengineering.com
                  </a>
                </div>
              </div>
            </div>

            {/* Phone Hotline Card */}
            <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm hover:shadow-md transition duration-300">
              <div className="flex items-center gap-3 border-b border-slate-100 pb-4 mb-4">
                <div className="p-3 bg-red-50 text-[#9B1C1C] rounded-xl border border-red-100">
                  <FaPhoneAlt className="text-lg" />
                </div>
                <h3 className="font-bold text-slate-900 text-base">Call For Support</h3>
              </div>

              <div className="space-y-4 text-sm">
                {/* Training */}
                <div className="border-l-2 border-[#9B1C1C] pl-3">
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">Training Dept</p>
                  <p className="text-slate-800 font-semibold">
                    01672747135 <span className="text-xs font-normal text-slate-500">(Engr. Sayed Bin Osman)</span>
                  </p>
                  <p className="text-slate-800 font-semibold">
                    01901372972 <span className="text-xs font-normal text-slate-500">(Engr. Shakil)</span>
                  </p>
                  <p className="text-slate-800 font-semibold">
                    01901372975 <span className="text-xs font-normal text-slate-500">(Engr. Azizul Hakim Sobuj)</span>
                  </p>
                </div>

                {/* R&D */}
                <div className="border-l-2 border-[#9B1C1C] pl-3">
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">R&D Dept</p>
                  <p className="text-slate-800 font-semibold">
                    01700000000 <span className="text-xs font-normal text-slate-500">(Engr. S.M. Zian Reza)</span>
                  </p>
                </div>

                {/* Project */}
                <div className="border-l-2 border-[#9B1C1C] pl-3">
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">Project Dept</p>
                  <p className="text-slate-800 font-semibold">
                    01856897987 <span className="text-xs font-normal text-slate-500">(Engr. Asif Mahmud)</span>
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Box */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-2xl p-6 shadow-md border border-slate-700 flex items-center justify-between">
              <div>
                <h4 className="font-bold text-base">Ready to start?</h4>
                <p className="text-xs text-slate-400">Join our engineering certification programs.</p>
              </div>
              <a
                href="/pages/programs/admission"
                className="bg-[#9B1C1C] hover:bg-red-700 text-white font-semibold text-xs px-4 py-2.5 rounded-xl transition shadow-sm"
              >
                Apply Now
              </a>
            </div>

          </div>

          {/* Right Side: Message Form */}
          <div className="lg:col-span-7">
            <div className="bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-10 shadow-sm">
              <div className="mb-8">
                <h2 className="text-2xl font-black text-slate-900 mb-1">Send Us a Message</h2>
                <p className="text-sm text-slate-500">
                  Fill out the form below and our team will respond within 24 hours.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. John Doe"
                      className="w-full bg-slate-50/50 border border-slate-200 focus:border-[#9B1C1C] focus:bg-white focus:ring-4 focus:ring-red-500/10 rounded-xl px-4 py-3.5 text-sm text-slate-900 placeholder-slate-400 outline-none transition"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="017XXXXXXXX"
                      className="w-full bg-slate-50/50 border border-slate-200 focus:border-[#9B1C1C] focus:bg-white focus:ring-4 focus:ring-red-500/10 rounded-xl px-4 py-3.5 text-sm text-slate-900 placeholder-slate-400 outline-none transition"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="example@gmail.com"
                    className="w-full bg-slate-50/50 border border-slate-200 focus:border-[#9B1C1C] focus:bg-white focus:ring-4 focus:ring-red-500/10 rounded-xl px-4 py-3.5 text-sm text-slate-900 placeholder-slate-400 outline-none transition"
                  />
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="How can we help you?"
                    className="w-full bg-slate-50/50 border border-slate-200 focus:border-[#9B1C1C] focus:bg-white focus:ring-4 focus:ring-red-500/10 rounded-xl px-4 py-3.5 text-sm text-slate-900 placeholder-slate-400 outline-none transition"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    rows="5"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your message details..."
                    className="w-full bg-slate-50/50 border border-slate-200 focus:border-[#9B1C1C] focus:bg-white focus:ring-4 focus:ring-red-500/10 rounded-xl px-4 py-3.5 text-sm text-slate-900 placeholder-slate-400 outline-none transition resize-none"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-[#9B1C1C] hover:bg-red-700 text-white font-bold text-sm uppercase tracking-wider py-4 rounded-xl transition-all duration-300 shadow-lg shadow-red-900/20 active:scale-[0.99] flex items-center justify-center gap-2 cursor-pointer"
                >
                  <FaPaperPlane className="text-xs" /> Send Message
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ContactPage;