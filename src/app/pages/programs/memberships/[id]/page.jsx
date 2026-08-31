import { membershipsData } from "@/data/memberships";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  FaSun,
  FaMoon,
  FaLaptop,
  FaCalendarAlt,
  FaAward,
  FaWhatsapp,
  FaUsers,
  FaUserCheck,
  FaPhoneAlt,
  FaCheckCircle,
  FaShieldAlt,
  FaDesktop,
  FaDraftingCompass,
  FaCube,
  FaNetworkWired,
  FaSlidersH,
  FaTools,
  FaBolt,
  FaPlug,
  FaRobot,
  FaSearch,
  FaLightbulb,
  FaChalkboardTeacher,
  FaBriefcase,
  FaBookOpen,
  FaHandshake,
  FaChargingStation,
  FaCogs,
  FaBroadcastTower,
  FaArrowLeft,
} from "react-icons/fa";
import { GiSun, GiSolarPower, GiElectric } from "react-icons/gi";
import { MdOutlineAnalytics } from "react-icons/md";

// Dynamic Icon Matching Function
const getTopicIcon = (topicText) => {
  const text = topicText.toLowerCase();

  if (text.includes("solar fundamentals")) return <GiSun className="text-red-600 text-sm shrink-0" />;
  if (text.includes("irradiation")) return <FaSun className="text-red-600 text-sm shrink-0" />;
  if (text.includes("pv modules")) return <GiSolarPower className="text-red-600 text-sm shrink-0" />;
  if (text.includes("inverters")) return <FaChargingStation className="text-red-600 text-sm shrink-0" />;
  if (text.includes("bos components")) return <FaCogs className="text-red-600 text-sm shrink-0" />;
  if (text.includes("on-grid")) return <FaBroadcastTower className="text-red-600 text-sm shrink-0" />;
  if (text.includes("off-grid")) return <FaBolt className="text-red-600 text-sm shrink-0" />;
  if (text.includes("hybrid")) return <FaPlug className="text-red-600 text-sm shrink-0" />;
  if (text.includes("micro grid")) return <FaNetworkWired className="text-red-600 text-sm shrink-0" />;
  if (text.includes("pumping")) return <FaTools className="text-red-600 text-sm shrink-0" />;
  if (text.includes("bess") || text.includes("eess")) return <FaChargingStation className="text-red-600 text-sm shrink-0" />;
  if (text.includes("load calculation")) return <FaSlidersH className="text-red-600 text-sm shrink-0" />;
  if (text.includes("sizing")) return <FaDraftingCompass className="text-red-600 text-sm shrink-0" />;
  if (text.includes("pvsyst") || text.includes("pvsol") || text.includes("helioscope")) return <FaDesktop className="text-red-600 text-sm shrink-0" />;
  if (text.includes("autocad")) return <FaDraftingCompass className="text-red-600 text-sm shrink-0" />;
  if (text.includes("sketchup")) return <FaCube className="text-red-600 text-sm shrink-0" />;
  if (text.includes("safety")) return <FaShieldAlt className="text-red-600 text-sm shrink-0" />;
  if (text.includes("cost & roi")) return <MdOutlineAnalytics className="text-red-600 text-sm shrink-0" />;
  if (text.includes("2d")) return <FaDraftingCompass className="text-red-600 text-sm shrink-0" />;
  if (text.includes("3d")) return <FaCube className="text-red-600 text-sm shrink-0" />;
  if (text.includes("substation") || text.includes("grid")) return <GiElectric className="text-red-600 text-sm shrink-0" />;
  if (text.includes("switchgear")) return <FaSlidersH className="text-red-600 text-sm shrink-0" />;
  if (text.includes("protection") || text.includes("earthing")) return <FaShieldAlt className="text-red-600 text-sm shrink-0" />;
  if (text.includes("scada") || text.includes("pcms")) return <FaDesktop className="text-red-600 text-sm shrink-0" />;

  return <FaCheckCircle className="text-red-600 text-sm shrink-0" />;
};

const formatPackageId = (id = "") =>
  id.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());

const SCHEDULE_ICONS = [FaSun, FaMoon, FaLaptop, FaCalendarAlt];

// Unified Card Box Component
const PackageCard = ({ pkg }) => {
  return (
    <div className="flex flex-col border border-gray-300 rounded-md overflow-hidden bg-white shadow-sm h-full">
      {/* Header */}
      <div className="bg-[#333333] text-white text-center py-2 px-2">
        <span className="text-[11px] block uppercase text-gray-300 font-bold tracking-wider">
          {formatPackageId(pkg.packageId)}
        </span>
        <h3 className="text-xs sm:text-sm font-black uppercase leading-tight">
          {pkg.packageName}
        </h3>
      </div>

      {/* Description */}
      {pkg.description && (
        <div className="p-2">
          <p className="text-xs font-bold text-gray-800 p-1.5 bg-gray-50 border border-gray-200 rounded text-left">
            {pkg.description}
          </p>
        </div>
      )}

      {/* Topics */}
      {pkg.topics && (
        <div className="p-2 space-y-1.5">
          {pkg.topics.map((topic, tIdx) => (
            <div
              key={tIdx}
              className="border border-red-300 rounded px-2.5 py-1.5 text-gray-900 bg-red-50/20 font-bold text-xs flex items-center text-left gap-2 leading-snug"
            >
              {getTopicIcon(topic)}
              <span className="flex-1">{topic}</span>
            </div>
          ))}
        </div>
      )}

      {/* Image */}
      {pkg.image && (
        <div className="p-2 flex justify-center items-center my-auto">
          <Image
            src={pkg.image}
            alt={pkg.packageName}
            width={220}
            height={130}
            className="object-contain drop-shadow-md rounded"
          />
        </div>
      )}

      {/* Included Cards */}
      {pkg.includedCards && (
        <div className="p-3 text-left my-auto space-y-2">
          {pkg.includedCards.map((card, cIdx) => (
            <h4 key={cIdx} className="text-xs sm:text-sm font-black text-gray-900 leading-snug">
              • {typeof card === "string" ? card : card.title}
            </h4>
          ))}
          {pkg.summary && (
            <p className="text-xs text-gray-700 font-bold italic mt-2 text-left">
              {pkg.summary}
            </p>
          )}
        </div>
      )}

      {/* Price Badge */}
      {pkg.price && (
        <div className="p-2 pt-0 mt-auto">
          <div className="bg-red-600 text-white text-center py-1.5 rounded font-black text-xs sm:text-sm shadow-sm">
            Price: {pkg.price}
          </div>
        </div>
      )}
    </div>
  );
};

// Slim Click Here Button Component (Removed Arrow Sign and Added cursor-pointer)
const SlimClickHereButton = () => (
  <button
    type="button"
    className="bg-red-600 hover:bg-red-700 text-white font-extrabold text-xs py-2 px-4 rounded-md flex items-center justify-center gap-2 shadow-sm transition-all border border-red-700 w-full sm:w-auto text-left cursor-pointer"
  >
    <span>Click Here For Details Outline</span>
  </button>
);

const MembershipDetails = async ({ params }) => {
  const { id } = await params;
  const data = membershipsData.find((item) => item.id === id);

  if (!data) {
    return (
      <div className="flex min-h-screen items-center justify-center text-2xl font-bold text-red-600 pt-24">
        Membership Not Found!
      </div>
    );
  }

  const isIndustrial = data.id === "industrial";
  const isBronze = data.id === "bronze";
  const isSilver = data.id === "silver";
  const isGold = data.id === "gold";
  const isElite = data.id === "elite";
  const isVip = data.id === "vip";

  return (
    <div className="min-h-screen bg-gray-100 pt-24 sm:pt-28 md:pt-32 pb-8 px-2 sm:px-4 md:px-6 font-sans text-gray-900">
      <div className="max-w-[1500px] mx-auto bg-white p-4 sm:p-6 rounded-xl shadow-xl border border-gray-200 relative">
        
        {/* Back To All Membership Button */}
        <div className="mb-4">
          <Link
            href="/pages/programs/memberships"
            className="inline-flex items-center gap-2 bg-gray-800 hover:bg-gray-900 text-white font-bold text-xs sm:text-sm py-2 px-4 rounded-lg shadow transition-all cursor-pointer"
          >
            <FaArrowLeft className="text-xs" />
            <span>Back to All Memberships</span>
          </Link>
        </div>

        {/* Header */}
        <div className="text-center my-2">
          <div className="inline-block border-2 border-red-600 rounded-2xl px-8 py-2 bg-white shadow-sm">
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-black text-red-600 tracking-wider uppercase">
              {data.title}
            </h1>
          </div>
          {data.subtitle && (
            <p className="text-sm sm:text-base md:text-lg font-bold text-gray-800 mt-1 uppercase tracking-wide">
              {data.subtitle}
            </p>
          )}
          {data.tagline && (
            <p className="text-xs sm:text-sm font-semibold text-gray-700 mt-0.5 max-w-4xl mx-auto">
              {data.tagline}
            </p>
          )}
        </div>

        {/* Connector Line */}
        <div className="hidden md:block relative mt-4 mb-3 w-full">
          <div className="w-0.5 h-4 bg-gray-800 mx-auto" />
          <div className="h-0.5 bg-gray-800 mx-auto w-[85%]" />
        </div>

        {/* ================= INDUSTRIAL MEMBERSHIP ================= */}
        {isIndustrial && (
          <div className="grid grid-cols-1 md:grid-cols-5 gap-3 items-start">
            <div className="md:col-span-1 h-full">
              <PackageCard pkg={data.packages[0]} />
            </div>

            <div className="md:col-span-3 flex flex-col justify-between h-full gap-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <PackageCard pkg={data.packages[1]} />
                <PackageCard pkg={data.packages[2]} />
                <PackageCard pkg={data.packages[3]} />
              </div>

              <div className="mt-auto pt-2">
                <div className="relative flex items-center justify-center mb-3">
                  <div className="w-full h-[2px] bg-red-600 absolute" />
                  <span className="relative z-10 bg-[#2d2d2d] text-white font-black text-xs px-6 py-1 rounded-xl uppercase tracking-wider">
                    BATCH WISE SCHEDULE
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-5 gap-1.5">
                  {data.schedules?.map((sched, idx) => {
                    const ScheduleIcon = SCHEDULE_ICONS[idx] ?? FaCalendarAlt;
                    return (
                      <div key={idx} className="border-2 border-red-300 rounded-lg p-2 bg-white text-left flex flex-col justify-between shadow-sm">
                        <ScheduleIcon className="text-red-600 text-base mb-1" />
                        <div className="text-[11px] leading-tight space-y-0.5 text-left">
                          <h4 className="font-extrabold text-gray-900">Batch : {sched.type}</h4>
                          <p className="text-gray-800 font-bold">Weekly: {sched.days}</p>
                          <p className="text-gray-800 font-bold">Time: {sched.time}</p>
                          <p className="text-gray-800 font-bold">Duration: {sched.duration}</p>
                        </div>
                      </div>
                    );
                  })}
                  <div className="border-2 border-red-300 rounded-lg p-2 bg-white flex flex-col items-center justify-center text-center shadow-sm">
                    <FaAward className="text-red-600 text-2xl mb-1" />
                    <p className="text-[11px] font-extrabold text-gray-900 leading-tight">Certificate of Completion</p>
                    <span className="text-[9px] text-gray-700 font-bold">Industry Recognized</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 mt-3">
                  <SlimClickHereButton />
                  <button type="button" className="bg-red-600 hover:bg-red-700 text-white font-extrabold text-[11px] py-2 px-3 rounded-md flex items-center justify-start gap-2 shadow cursor-pointer">
                    <FaWhatsapp className="shrink-0" /> <span>Click to Join UE Club</span>
                  </button>
                  <button type="button" className="bg-red-600 hover:bg-red-700 text-white font-extrabold text-[11px] py-2 px-3 rounded-md flex items-center justify-start gap-2 shadow cursor-pointer">
                    <FaUsers className="shrink-0" /> <span>Member & Alumni</span>
                  </button>
                  <button type="button" className="bg-red-600 hover:bg-red-700 text-white font-extrabold text-[11px] py-2 px-3 rounded-md flex items-center justify-start gap-2 shadow cursor-pointer">
                    <FaUserCheck className="shrink-0" /> <span>Lifetime Members</span>
                  </button>
                </div>
              </div>
            </div>

            <div className="md:col-span-1 h-full">
              <PackageCard pkg={data.packages[4]} />
            </div>
          </div>
        )}

        {/* ================= BRONZE MEMBERSHIP ================= */}
        {isBronze && (
          <div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
              <div><PackageCard pkg={data.packages[0]} /></div>
              <div><PackageCard pkg={data.packages[1]} /></div>
              
              <div className="flex flex-col gap-3">
                <PackageCard pkg={data.packages[2]} />

                <div className="flex flex-col gap-2 mt-1">
                  <button type="button" className="bg-red-600 hover:bg-red-700 text-white font-black text-xs py-2 px-3 rounded-lg flex items-center justify-start gap-2 shadow cursor-pointer">
                    <FaWhatsapp className="text-sm shrink-0" /> <span>Click to Join UE Club (Whatsapp Group)</span>
                  </button>
                  <button type="button" className="bg-red-600 hover:bg-red-700 text-white font-black text-xs py-2 px-3 rounded-lg flex items-center justify-start gap-2 shadow cursor-pointer">
                    <FaUsers className="text-sm shrink-0" /> <span>Click & View Successful Member & Alumni</span>
                  </button>
                  <button type="button" className="bg-red-600 hover:bg-red-700 text-white font-black text-xs py-2 px-3 rounded-lg flex items-center justify-start gap-2 shadow cursor-pointer">
                    <FaUserCheck className="text-sm shrink-0" /> <span>Click & View Our Lifetime Members</span>
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <div className="relative flex items-center justify-center mb-3">
                <div className="w-full h-[2px] bg-red-600 absolute" />
                <span className="relative z-10 bg-[#2d2d2d] text-white font-black text-xs px-6 py-1 rounded-xl uppercase">
                  BATCH WISE SCHEDULE
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-6 gap-2 items-center">
                <div className="flex items-center justify-center">
                  <SlimClickHereButton />
                </div>
                {data.schedules?.map((sched, idx) => {
                  const ScheduleIcon = SCHEDULE_ICONS[idx] ?? FaCalendarAlt;
                  return (
                    <div key={idx} className="border-2 border-red-300 rounded-xl p-2 bg-white text-left flex flex-col justify-between shadow-sm">
                      <ScheduleIcon className="text-red-600 text-base mb-1" />
                      <div className="text-[11px] leading-tight space-y-0.5 text-left">
                        <h4 className="font-extrabold text-gray-900">Batch : {sched.type}</h4>
                        <p className="text-gray-800 font-bold">Weekly: {sched.days}</p>
                        <p className="text-gray-800 font-bold">Time: {sched.time}</p>
                        <p className="text-gray-800 font-bold">Duration: {sched.duration}</p>
                      </div>
                    </div>
                  );
                })}
                <div className="border-2 border-red-300 rounded-xl p-2 bg-white flex flex-col items-center justify-center text-center shadow-sm">
                  <FaAward className="text-red-600 text-2xl mb-1" />
                  <p className="text-[11px] font-extrabold text-gray-900 leading-tight">Certificate of Completion</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ================= SILVER & GOLD MEMBERSHIPS ================= */}
        {(isSilver || isGold) && (
          <div>
            <div className={`grid gap-3 ${isSilver ? "grid-cols-1 md:grid-cols-3 lg:grid-cols-6" : "grid-cols-1 md:grid-cols-3 lg:grid-cols-5"}`}>
              {data.packages?.map((pkg, idx) => (
                <PackageCard key={idx} pkg={pkg} />
              ))}
            </div>

            <div className="mt-6">
              <div className="relative flex items-center justify-center mb-3">
                <div className="w-full h-[2px] bg-red-600 absolute" />
                <span className="relative z-10 bg-[#2d2d2d] text-white font-black text-xs px-6 py-1 rounded-xl uppercase">
                  BATCH WISE SCHEDULE
                </span>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 items-center">
                <div className="lg:col-span-2 flex justify-center">
                  <SlimClickHereButton />
                </div>

                <div className="lg:col-span-7">
                  <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                    {data.schedules?.map((sched, idx) => {
                      const ScheduleIcon = SCHEDULE_ICONS[idx] ?? FaCalendarAlt;
                      return (
                        <div key={idx} className="border-2 border-red-300 rounded-xl p-2 bg-white text-left flex flex-col justify-between shadow-sm">
                          <ScheduleIcon className="text-red-600 text-base mb-1" />
                          <div className="text-[11px] leading-tight space-y-0.5 text-left">
                            <h4 className="font-extrabold text-gray-900">Batch : {sched.type}</h4>
                            <p className="text-gray-800 font-bold">Weekly: {sched.days}</p>
                            <p className="text-gray-800 font-bold">Time: {sched.time}</p>
                            <p className="text-gray-800 font-bold">Duration: {sched.duration}</p>
                          </div>
                        </div>
                      );
                    })}
                    <div className="border-2 border-red-300 rounded-xl p-2 bg-white flex flex-col items-center justify-center text-center shadow-sm">
                      <FaAward className="text-red-600 text-2xl mb-1" />
                      <p className="text-[11px] font-extrabold text-gray-900 leading-tight">Certificate of Completion</p>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-3 flex">
                  {data.totalPrice && (
                    <div className="w-full bg-red-600 text-white p-2.5 rounded-xl flex flex-col items-center justify-center text-center shadow">
                      <h4 className="text-xs font-black uppercase">Full {data.title} Fee</h4>
                      <p className="text-lg font-black mt-0.5">{data.totalPrice}</p>
                    </div>
                  )}
                </div>
              </div>

              <div className="mt-3 grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                <button type="button" className="bg-red-600 hover:bg-red-700 text-white text-xs font-black py-2 px-3 rounded-lg flex items-center justify-start gap-2 shadow cursor-pointer">
                  <FaWhatsapp className="shrink-0" /> <span>Click to Join UE Club (Whatsapp Group)</span>
                </button>
                <button type="button" className="bg-red-600 hover:bg-red-700 text-white text-xs font-black py-2 px-3 rounded-lg flex items-center justify-start gap-2 shadow cursor-pointer">
                  <FaUsers className="shrink-0" /> <span>Click & View Successful Member & Alumni</span>
                </button>
                <button type="button" className="bg-red-600 hover:bg-red-700 text-white text-xs font-black py-2 px-3 rounded-lg flex items-center justify-start gap-2 shadow cursor-pointer">
                  <FaUserCheck className="shrink-0" /> <span>Click & View Our Lifetime Members</span>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ================= ELITE MEMBERSHIP ================= */}
        {isElite && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
              
              {/* Package 1 */}
              <div className="border-2 border-red-600 rounded-lg p-4 bg-white flex flex-col justify-between shadow-md relative">
                <div className="bg-[#444444] text-white text-center py-2 px-4 rounded font-extrabold text-sm uppercase -mt-7 mx-auto w-3/4 shadow">
                  Package-1
                </div>

                <h2 className="text-2xl font-black text-red-700 text-center uppercase tracking-wide my-4">
                  FULL GOLD MEMBERSHIP
                </h2>

                <div className="flex justify-center my-2">
                  {data.packages[0]?.image ? (
                    <Image
                      src={data.packages[0].image}
                      alt="Gold Membership Card"
                      width={260}
                      height={160}
                      className="object-contain drop-shadow-md rounded-md"
                    />
                  ) : (
                    <div className="w-56 h-32 bg-amber-400 rounded-lg border-2 border-amber-600 flex flex-col justify-center items-center text-amber-950 font-black p-2 text-center">
                      <span>GOLD MEMBERSHIP CARD</span>
                      <span className="text-[10px] mt-2">Ulterior Engineering</span>
                    </div>
                  )}
                </div>

                {/* Inner Includes Box */}
                <div className="border-2 border-red-500 rounded-lg p-3 mt-4 bg-red-50/10 relative">
                  <div className="bg-red-700 text-white font-black text-xs px-4 py-1 rounded-md mx-auto w-max uppercase -mt-6 mb-2 text-center shadow">
                    Includes:
                  </div>

                  <div className="grid grid-cols-5 gap-1.5 text-center text-[11px] font-extrabold text-gray-800 my-2">
                    {data.packages[0]?.includedCards?.map((item, idx) => (
                      <div
                        key={idx}
                        className={`p-1 flex flex-col items-center justify-between ${
                          idx !== data.packages[0].includedCards.length - 1 ? "border-r border-gray-300" : ""
                        }`}
                      >
                        {item.type === "image" ? (
                          <div className="h-8 flex items-center justify-center">
                            <Image
                              src={item.src}
                              alt={item.title}
                              width={45}
                              height={28}
                              className="object-contain rounded-[2px] shadow-sm"
                            />
                          </div>
                        ) : (
                          <div className="h-8 flex items-center justify-center">
                            {item.icon === "robot" && <FaRobot className="text-red-600 text-xl" />}
                            {item.icon === "cogs" && <FaCogs className="text-red-600 text-xl" />}
                            {item.icon === "sliders" && <FaSlidersH className="text-red-600 text-xl" />}
                          </div>
                        )}

                        <span className="mt-1 leading-tight">{item.title}</span>
                      </div>
                    ))}
                  </div>

                  <p className="text-xs text-center font-bold text-gray-700 mt-3 pt-2 border-t border-gray-200">
                    {data.packages[0]?.summary}
                  </p>
                </div>
              </div>

              {/* Package 2 */}
              <div className="border-2 border-red-600 rounded-lg p-4 bg-white flex flex-col justify-between shadow-md relative">
                <div className="bg-[#444444] text-white text-center py-2 px-4 rounded font-extrabold text-sm uppercase -mt-7 mx-auto w-3/4 shadow">
                  Package-2
                </div>

                <h2 className="text-xl sm:text-2xl font-black text-red-700 text-center uppercase tracking-wide my-4">
                  NGX COMPANY R&D OPPORTUNITY
                </h2>

                 <div className="flex justify-center my-1">
  {data.packages[1]?.image && (
    <Image
      src={data.packages[1].image} // এখানে [1] যোগ করতে হবে
      alt="ngx logo"
      width={220}
      height={130}
      className="object-contain drop-shadow-md rounded-md"
    />
  )}
</div>

                <div className="space-y-2 my-auto">
                  {[
                    { label: "Work on Real R&D Projects", icon: FaBriefcase },
                    { label: "Industry Problem Solving", icon: FaLightbulb },
                    { label: "Innovation & Prototyping", icon: FaDraftingCompass },
                    { label: "New Technology Exploration", icon: FaSearch },
                    { label: "Testing & Validation", icon: FaTools },
                    { label: "Research & Documentation", icon: FaBookOpen },
                    { label: "Mentorship from Experts", icon: FaChalkboardTeacher },
                    { label: "Career Growth Opportunity", icon: FaHandshake },
                  ].map((item, idx) => {
                    const ItemIcon = item.icon;
                    return (
                      <div
                        key={idx}
                        className="border border-red-400 bg-gray-50/50 rounded-md py-1.5 px-3 flex items-center gap-3 text-left font-bold text-xs sm:text-sm text-gray-800 shadow-sm hover:border-red-600 transition-colors"
                      >
                        <ItemIcon className="text-red-600 text-sm shrink-0" />
                        <span>{item.label}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

            </div>

            {/* Bottom Contact & Action Bar */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 items-stretch">
              <div className="lg:col-span-3 bg-red-600 text-white rounded-xl p-3 flex flex-col justify-center items-start text-center shadow">
                <span className="text-xs font-bold uppercase">Contact Us</span>
                <span className="text-[10px]">For Details Course Outline</span>
                <p className="text-base font-black mt-1 flex items-center gap-1.5"><FaPhoneAlt /> {data.contact || "+8801818988959"}</p>
              </div>

              <div className="lg:col-span-4 bg-red-600 text-white rounded-xl p-3 flex flex-col justify-center items-start text-left shadow">
                <h3 className="text-sm font-black">Course Duration: {data.meta?.duration || "6 Months"}</h3>
                <p className="text-xs font-bold mt-1">Time: {data.meta?.time || "8:00 PM - 10:00 PM"} | Weekly: {data.meta?.weekly || "2 Days"}</p>
              </div>

              <div className="lg:col-span-3 flex flex-col gap-1.5 justify-center">
                <button type="button" className="bg-red-600 hover:bg-red-700 text-white text-[11px] font-black py-2 px-3 rounded-md flex items-center justify-start gap-2 shadow cursor-pointer">
                  <FaWhatsapp className="shrink-0" /> <span>Click to Join UE Club</span>
                </button>
                <button type="button" className="bg-red-600 hover:bg-red-700 text-white text-[11px] font-black py-2 px-3 rounded-md flex items-center justify-start gap-2 shadow cursor-pointer">
                  <FaUsers className="shrink-0" /> <span>Member & Alumni</span>
                </button>
                <button type="button" className="bg-red-600 hover:bg-red-700 text-white text-[11px] font-black py-2 px-3 rounded-md flex items-center justify-start gap-2 shadow cursor-pointer">
                  <FaUserCheck className="shrink-0" /> <span>Our Lifetime Members</span>
                </button>
              </div>

              <div className="lg:col-span-2 border-2 border-red-300 rounded-xl p-2 bg-white flex flex-col items-center justify-center text-center shadow-sm">
                <FaAward className="text-red-600 text-3xl mb-1" />
                <p className="text-xs font-extrabold text-gray-900 leading-tight">Certificate of Completion</p>
              </div>
            </div>
          </div>
        )}

        {/* ================= VIP MEMBERSHIP ================= */}
        {isVip && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-stretch">
              
              {/* Package 1 */}
              <div className="border-2 border-red-600 rounded-lg p-4 bg-white flex flex-col justify-between shadow-md relative">
                <div className="bg-[#444444] text-white text-center py-2 px-4 rounded font-extrabold text-sm uppercase -mt-7 mx-auto w-3/4 shadow">
                  Package-1
                </div>

                <h2 className="text-xl font-black text-red-700 text-center uppercase tracking-wide my-3">
                  FULL ELITE CARD
                </h2>

                <div className="flex justify-center my-2">
                  {data.packages[0]?.image ? (
                    <Image
                      src={data.packages[0].image}
                      alt="Elite Membership Card"
                      width={220}
                      height={130}
                      className="object-contain drop-shadow-md rounded-md"
                    />
                  ) : (
                    <div className="w-48 h-28 bg-amber-300 rounded-lg border-2 border-amber-600 flex flex-col justify-center items-center text-amber-950 font-black p-2 text-center">
                      <span>ELITE MEMBERSHIP CARD</span>
                      <span className="text-[10px] mt-1">Ulterior Engineering</span>
                    </div>
                  )}
                </div>

                <p className="text-xs font-bold text-gray-800 text-center my-2">
                  Includes all courses & contents of Elite Membership
                </p>

                <div className="space-y-1.5 my-auto text-left font-bold text-xs sm:text-sm text-gray-800 px-2">
                  <div className="flex items-center gap-2"><span className="text-red-600 text-base">•</span> Automation Pro</div>
                  <div className="flex items-center gap-2"><span className="text-red-600 text-base">•</span> SCADA Pro</div>
                  <div className="flex items-center gap-2"><span className="text-red-600 text-base">•</span> Robotics Pro</div>
                  <div className="flex items-center gap-2"><span className="text-red-600 text-base">•</span> IIoT</div>
                  <div className="flex items-center gap-2"><span className="text-red-600 text-base">•</span> BMS</div>
                  <div className="flex items-center gap-2"><span className="text-red-600 text-base">•</span> NGX Company R&D Opportunity</div>
                </div>
              </div>

              {/* Package 2 */}
              <div className="border-2 border-red-600 rounded-lg p-4 bg-white flex flex-col justify-between shadow-md relative">
                <div className="bg-[#444444] text-white text-center py-2 px-4 rounded font-extrabold text-sm uppercase -mt-7 mx-auto w-3/4 shadow">
                  Package-2
                </div>

                <h2 className="text-lg font-black text-red-700 text-center uppercase tracking-wide my-3">
                  NGX COMPANY R&D OPPORTUNITY
                </h2>

                <div className="flex justify-center my-1">
  {data.packages[1]?.image && (
    <Image
      src={data.packages[1].image} // এখানে [1] যোগ করতে হবে
      alt="ngx logo"
      width={220}
      height={130}
      className="object-contain drop-shadow-md rounded-md"
    />
  )}
</div>

                <div className="space-y-2 my-auto">
                  {[
                    { label: "Work on Real R&D Projects", icon: FaBriefcase },
                    { label: "Industry Problem Solving", icon: FaLightbulb },
                    { label: "Innovation & Prototyping", icon: FaDraftingCompass },
                    { label: "Testing & Validation", icon: FaTools },
                    { label: "Research & Documentation", icon: FaBookOpen },
                  ].map((item, idx) => {
                    const ItemIcon = item.icon;
                    return (
                      <div key={idx} className="border border-red-300 rounded p-1.5 flex items-center gap-2 text-xs font-bold text-gray-800">
                        <ItemIcon className="text-red-600 shrink-0" />
                        <span>{item.label}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Package 3 */}
              {data.packages[2] && (
                <div className="border-2 border-red-600 rounded-lg p-4 bg-white flex flex-col justify-between shadow-md relative">
                  <div className="bg-[#444444] text-white text-center py-2 px-4 rounded font-extrabold text-sm uppercase -mt-7 mx-auto w-3/4 shadow">
                    Package-3
                  </div>
                  <h2 className="text-xl font-black text-red-700 text-center uppercase tracking-wide my-3">
                    {data.packages[2].packageName}
                  </h2>
                  <div className="flex justify-center my-1">
  {data.packages[2]?.image && (
    <Image
      src={data.packages[2].image} // এখানে [1] যোগ করতে হবে
      alt="ngx logo"
      width={220}
      height={130}
      className="object-contain drop-shadow-md rounded-md"
    />
  )}
</div>
                   <div className="space-y-2 my-auto">
                  {[
                    { label: "Work on Real Industrial Projects", icon: FaBriefcase },
                    { label: "Energy & Control Solution", icon: FaLightbulb },
                    { label: "Practical Site Exposure", icon: FaDraftingCompass },
                    { label: "Electrical & Automation Implementation", icon: FaTools },
                    { label: "Team Based Project Experience", icon: FaBookOpen },
                    { label: "Professional Guidence", icon: FaBookOpen },
                    { label: "Industry Ready Skills", icon: FaBookOpen },
                  ].map((item, idx) => {
                    const ItemIcon = item.icon;
                    return (
                      <div key={idx} className="border border-red-300 rounded p-1.5 flex items-center gap-2 text-xs font-bold text-gray-800">
                        <ItemIcon className="text-red-600 shrink-0" />
                        <span>{item.label}</span>
                      </div>
                    );
                  })}
                </div>
                </div>
              )}

            </div>
             <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 items-stretch">
              <div className="lg:col-span-3 bg-red-600 text-white rounded-xl p-3 flex flex-col justify-center items-start text-center shadow">
                <span className="text-xs font-bold uppercase">Contact Us</span>
                <span className="text-[10px]">For Details Course Outline</span>
                <p className="text-base font-black mt-1 flex items-center gap-1.5"><FaPhoneAlt /> {data.contact || "+8801818988959"}</p>
              </div>

              <div className="lg:col-span-4 bg-red-600 text-white rounded-xl p-3 flex flex-col justify-center items-start text-left shadow">
                <h3 className="text-sm font-black">Course Duration: {data.meta?.duration || "6 Months"}</h3>
                <p className="text-xs font-bold mt-1">Time: {data.meta?.time || "8:00 PM - 10:00 PM"} | Weekly: {data.meta?.weekly || "2 Days"}</p>
              </div>

              <div className="lg:col-span-3 flex flex-col gap-1.5 justify-center">
                <button type="button" className="bg-red-600 hover:bg-red-700 text-white text-[11px] font-black py-2 px-3 rounded-md flex items-center justify-start gap-2 shadow cursor-pointer">
                  <FaWhatsapp className="shrink-0" /> <span>Click to Join UE Club</span>
                </button>
                <button type="button" className="bg-red-600 hover:bg-red-700 text-white text-[11px] font-black py-2 px-3 rounded-md flex items-center justify-start gap-2 shadow cursor-pointer">
                  <FaUsers className="shrink-0" /> <span>Member & Alumni</span>
                </button>
                <button type="button" className="bg-red-600 hover:bg-red-700 text-white text-[11px] font-black py-2 px-3 rounded-md flex items-center justify-start gap-2 shadow cursor-pointer">
                  <FaUserCheck className="shrink-0" /> <span>Our Lifetime Members</span>
                </button>
              </div>

              <div className="lg:col-span-2 border-2 border-red-300 rounded-xl p-2 bg-white flex flex-col items-center justify-center text-center shadow-sm">
                <FaAward className="text-red-600 text-3xl mb-1" />
                <p className="text-xs font-extrabold text-gray-900 leading-tight">Certificate of Completion</p>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default MembershipDetails;



