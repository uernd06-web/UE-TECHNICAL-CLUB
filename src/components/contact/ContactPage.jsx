"use client";
import React, { useState } from "react";

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
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans pt-28 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 bg-red-50 border border-red-200 px-4 py-1.5 rounded-full mb-4">
            <span className="h-2 w-2 rounded-full bg-[#9B1C1C] animate-pulse"></span>
            <span className="text-xs font-bold uppercase tracking-wider text-[#9B1C1C]">
              Get In Touch
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-4 text-gray-900">
            Contact <span className="text-[#9B1C1C]">Ulterior Engineering</span>
          </h1>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            Have questions about our engineering programs, admissions, or community? Send us a message and our team will get back to you shortly.
          </p>
        </div>

        {/* Main Grid Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Contact Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-6 border-b border-gray-100 pb-3">
                Contact Information
              </h3>

              <div className="space-y-6">
                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-red-50 border border-red-100 rounded-xl text-[#9B1C1C] shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900">Head Office Location</h4>
                    <p className="text-sm text-gray-600 mt-1">
                      Ulterior Engineering Group,<br />
                      Chittagong / Dhaka, Bangladesh
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-red-50 border border-red-100 rounded-xl text-[#9B1C1C] shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 002-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900">Email Us</h4>
                    <p className="text-sm text-gray-600 mt-1">info@ulteriorengineering.com</p>
                    <p className="text-sm text-gray-600">admission@ulteriorengineering.com</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-red-50 border border-red-100 rounded-xl text-[#9B1C1C] shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900">Call For Support</h4>
                    <p className="text-sm text-gray-600 mt-1">+880 1800-000000</p>
                    <p className="text-xs text-gray-500 mt-0.5">Sat - Thu: 9:00 AM - 7:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Red Highlight Box */}
            <div className="bg-[#9B1C1C] rounded-2xl p-6 text-white shadow-md">
              <h4 className="font-bold text-base mb-2">Looking for Admission?</h4>
              <p className="text-xs text-red-100 leading-relaxed mb-4">
                Explore our certification programs and join the next generation engineering network directly.
              </p>
              <a
                href="/pages/programs/admission"
                className="inline-block bg-white text-[#9B1C1C] font-bold text-xs uppercase px-4 py-2.5 rounded-lg hover:bg-gray-100 transition shadow-sm"
              >
                Apply For Admission →
              </a>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 md:p-10 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Send Us A Message</h3>
              <p className="text-xs md:text-sm text-gray-500 mb-8">
                Fill out the form below and our team will respond within 24 hours.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Name Input */}
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      className="w-full bg-gray-50 border border-gray-300 focus:border-[#9B1C1C] focus:bg-white focus:ring-1 focus:ring-[#9B1C1C] rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-400 outline-none transition"
                    />
                  </div>

                  {/* Phone Input */}
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+880 1700-000000"
                      className="w-full bg-gray-50 border border-gray-300 focus:border-[#9B1C1C] focus:bg-white focus:ring-1 focus:ring-[#9B1C1C] rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-400 outline-none transition"
                    />
                  </div>
                </div>

                {/* Email Input */}
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="example@domain.com"
                    className="w-full bg-gray-50 border border-gray-300 focus:border-[#9B1C1C] focus:bg-white focus:ring-1 focus:ring-[#9B1C1C] rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-400 outline-none transition"
                  />
                </div>

                {/* Subject Input */}
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Admission Query / Program Details"
                    className="w-full bg-gray-50 border border-gray-300 focus:border-[#9B1C1C] focus:bg-white focus:ring-1 focus:ring-[#9B1C1C] rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-400 outline-none transition"
                  />
                </div>

                {/* Message Input */}
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    rows="5"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your message here..."
                    className="w-full bg-gray-50 border border-gray-300 focus:border-[#9B1C1C] focus:bg-white focus:ring-1 focus:ring-[#9B1C1C] rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-400 outline-none transition resize-none"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-[#9B1C1C] hover:bg-red-800 text-white font-bold text-sm uppercase tracking-wider py-4 rounded-xl transition duration-300 shadow-md cursor-pointer flex items-center justify-center gap-2"
                >
                  Send Message <span>→</span>
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