import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const ReferralBenefits = () => {
  const referralData = [
    {
      cardType: "Industrial Card",
      monthlyReferrals: "03",
      yearlyReferrals: 36,
      contributionValue: "360,000 BDT",
    },
    {
      cardType: "Bronze Card",
      monthlyReferrals: "05",
      yearlyReferrals: 60,
      contributionValue: "600,000 BDT",
    },
    {
      cardType: "Silver Card",
      monthlyReferrals: "10",
      yearlyReferrals: 120,
      contributionValue: "1,200,000 BDT",
    },
    {
      cardType: "Gold Card",
      monthlyReferrals: "15",
      yearlyReferrals: 180,
      contributionValue: "1,800,000 BDT",
    },
    {
      cardType: "Elite Card",
      monthlyReferrals: "20",
      yearlyReferrals: 240,
      contributionValue: "2,400,000 BDT",
    },
    {
      cardType: "VIP Card",
      monthlyReferrals: "25",
      yearlyReferrals: 300,
      contributionValue: "3,000,000 BDT",
    },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto my-8 px-4 sm:px-6 lg:px-8 font-sans border border-red-600 p-6 rounded-xl">
      
      {/* Title */}
      <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-6">
        Referral benefits by membership tier
      </h2>

      {/* Table Container */}
      <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
        <table className="w-full text-left border-collapse">
          
          {/* Table Header */}
          <thead>
            <tr className="bg-black text-white text-xs sm:text-sm uppercase tracking-wider">
              <th className="py-4 px-6 font-bold">Card Type</th>
              <th className="py-4 px-6 font-bold">Monthly Referrals</th>
              <th className="py-4 px-6 font-bold">Yearly Referrals</th>
              <th className="py-4 px-6 font-bold">Contribution Value</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody className="divide-y divide-gray-100 text-sm font-semibold">
            {referralData.map((row, index) => (
              <tr
                key={index}
                className={`transition-colors duration-150 hover:bg-red-50/60 ${
                  index % 2 !== 0 ? "bg-red-50/30" : "bg-white"
                }`}
              >
                <td className="py-4 px-6 text-red-800 font-bold">
                  {row.cardType}
                </td>
                <td className="py-4 px-6 text-gray-900 font-bold">
                  {row.monthlyReferrals}
                </td>
                <td className="py-4 px-6 text-gray-900 font-bold">
                  {row.yearlyReferrals}
                </td>
                <td className="py-4 px-6 text-gray-900 font-black">
                  {row.contributionValue}
                </td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>

      {/* refferl cta */}

      <div className="w-full max-w-7xl mx-auto my-8 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="w-full bg-black text-white rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-xl border border-gray-900">
        
        {/* Left Side: Title & Description */}
        <div className="space-y-2">
          <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
            Ready to use your referral benefit?
          </h3>
          <p className="text-sm sm:text-base text-gray-300 font-normal">
            Apply for a membership card to unlock monthly referral opportunities.
          </p>
        </div>

        {/* Right Side: Button */}
        <Link href={'/pages/programs/admission'} className="shrink-0 w-full md:w-auto">
          <button className="w-full hover:bg-white hover:text-black md:w-auto inline-flex items-center justify-center gap-2 bg-[#991b1b] hover:bg-[#7f1d1d] active:scale-95 text-white font-bold text-sm sm:text-base px-6 py-3 rounded-xl transition-all duration-200 shadow-md cursor-pointer">
            <span>Apply Now</span>
            <ArrowRight className="w-4 h-4 stroke-[2.5]" />
          </button>
        </Link >

      </div>
    </div>

    </div>
  );
};

export default ReferralBenefits;