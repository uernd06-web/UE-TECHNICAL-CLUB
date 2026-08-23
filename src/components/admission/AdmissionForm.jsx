"use client";

import React, { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AdmissionForm = () => {
  // 1. initial form state
  const initialFormData = {
    fullName: "",
    phoneNumber: "",
    emailAddress: "",
    educationLevel: "",
    preferredProgram: "",
    message: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      
      await new Promise((resolve) => setTimeout(resolve, 2000));

      console.log("Submitted Inquiry:", formData);

      // 2.reset form data
      setFormData(initialFormData);

      // 3. React Toastify Success Message
      toast.success("Thank you! Your inquiry has been submitted successfully.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    } catch (error) {
      console.error("Submission failed:", error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="w-full p-4 sm:p-6 md:p-8">
      {/* Toast Container  */}
      <ToastContainer />

      {/* Outer Card Container */}
      <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-6 sm:p-8 md:p-10 font-sans">
        
        {/* Header Section */}
        <div className="space-y-1.5 mb-8">
          <span className="text-[11px] font-black uppercase tracking-widest text-red-700 block">
            APPLICATION FORM
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-950 tracking-tight">
            Admission Inquiry
          </h2>
          <p className="text-xs sm:text-sm text-gray-500 font-medium leading-relaxed pt-1">
            Complete the form below and the training team can contact you about your selected programs.
          </p>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="space-y-5">
          
          {/* Row 1: Full Name & Phone Number */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="space-y-1.5">
              <label htmlFor="fullName" className="block text-xs font-bold text-gray-950">
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Your name"
                disabled={isSubmitting}
                className="w-full bg-white text-gray-900 text-sm font-medium px-4 py-3 rounded-xl border border-gray-200 focus:border-red-500 focus:ring-1 focus:ring-red-500 focus:outline-none transition-all placeholder:text-gray-400 disabled:opacity-60"
                required
              />
            </div>

            <div className="space-y-1.5">
              <label htmlFor="phoneNumber" className="block text-xs font-bold text-gray-950">
                Phone Number
              </label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                placeholder="01XXXXXXXXX"
                disabled={isSubmitting}
                className="w-full bg-white text-gray-900 text-sm font-medium px-4 py-3 rounded-xl border border-gray-200 focus:border-red-500 focus:ring-1 focus:ring-red-500 focus:outline-none transition-all placeholder:text-gray-400 disabled:opacity-60"
                required
              />
            </div>
          </div>

          {/* Row 2: Email Address & Education Level */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="space-y-1.5">
              <label htmlFor="emailAddress" className="block text-xs font-bold text-gray-950">
                Email Address
              </label>
              <input
                type="email"
                id="emailAddress"
                name="emailAddress"
                value={formData.emailAddress}
                onChange={handleChange}
                placeholder="name@email.com"
                disabled={isSubmitting}
                className="w-full bg-white text-gray-900 text-sm font-medium px-4 py-3 rounded-xl border border-gray-200 focus:border-red-500 focus:ring-1 focus:ring-red-500 focus:outline-none transition-all placeholder:text-gray-400 disabled:opacity-60"
                required
              />
            </div>

            <div className="space-y-1.5">
              <label htmlFor="educationLevel" className="block text-xs font-bold text-gray-950">
                Education Level
              </label>
              <div className="relative">
                <select
                  id="educationLevel"
                  name="educationLevel"
                  value={formData.educationLevel}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className="w-full bg-white text-gray-900 text-sm font-medium px-4 py-3 rounded-xl border border-gray-200 focus:border-red-500 focus:ring-1 focus:ring-red-500 focus:outline-none transition-all appearance-none cursor-pointer pr-10 disabled:opacity-60"
                  required
                >
                  <option value="" disabled>Select</option>
                  <option value="SSC">SSC</option>
                  <option value="HSC">HSC</option>
                  <option value="Diploma">Diploma</option>
                  <option value="Undergraduate">Undergraduate</option>
                  <option value="Graduate">Graduate</option>
                  <option value="Professional">Professional</option>
                </select>
                <FiChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-700 text-lg pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Row 3: Preferred Program */}
          <div className="space-y-1.5">
            <label htmlFor="preferredProgram" className="block text-xs font-bold text-gray-950">
              Preferred Program
            </label>
            <div className="relative">
              <select
                id="preferredProgram"
                name="preferredProgram"
                value={formData.preferredProgram}
                onChange={handleChange}
                disabled={isSubmitting}
                className="w-full bg-white text-gray-900 text-sm font-medium px-4 py-3 rounded-xl border border-gray-200 focus:border-red-500 focus:ring-1 focus:ring-red-500 focus:outline-none transition-all appearance-none cursor-pointer pr-10 disabled:opacity-60"
                required
              >
                <option value="" disabled>Select a training program</option>
                <option value="Industrial Membership">Industrial Membership</option>
                <option value="Bronze Membership">Bronze Membership</option>
                <option value="Silver Membership">Silver Membership</option>
                <option value="Gold Membership">Gold Membership</option>
                <option value="Elite Membership">Elite Membership</option>
                <option value="VIP Membership">VIP Membership</option>
                <option value="OnLab Practical Training">OnLab Practical Training</option>
              </select>
              <FiChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-700 text-lg pointer-events-none" />
            </div>
          </div>

          {/* Row 4: Message */}
          <div className="space-y-1.5">
            <label htmlFor="message" className="block text-xs font-bold text-gray-950">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about your goal or preferred schedule"
              disabled={isSubmitting}
              className="w-full bg-white text-gray-900 text-sm font-medium p-4 rounded-xl border border-gray-200 focus:border-red-500 focus:ring-1 focus:ring-red-500 focus:outline-none transition-all placeholder:text-gray-400 resize-y disabled:opacity-60"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-[#b91c1c] hover:bg-[#991b1b] text-white font-extrabold text-sm py-3.5 px-6 rounded-xl shadow-md transition-all duration-200 hover:scale-[1.005] active:scale-[0.995] flex items-center justify-center gap-2 cursor-pointer mt-3 disabled:bg-red-900 disabled:cursor-not-allowed disabled:scale-100"
          >
            {isSubmitting ? (
              <>
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                <span>Processing...</span>
              </>
            ) : (
              <>
                <span>Submit Inquiry</span>
                <span className="text-base font-normal">→</span>
              </>
            )}
          </button>

        </form>
      </div>
    </section>
  );
};

export default AdmissionForm;