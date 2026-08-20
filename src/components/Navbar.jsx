"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);
  const [subOpenIndex, setSubOpenIndex] = useState(null); // Step 1: nested dropdown state
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(null);
  const [mobileSubDropdown, setMobileSubDropdown] = useState(null); // Mobile nested state

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "HOME", path: "/" },
    { name: "ABOUT", path: "/pages/about" },
    { name: "CERTIFICATION", path: "/pages/certification" },
    {
      name: "PROGRAMS",
      dropdown: [
        { name: "UE CLUB", description: "Membership learning ecosystem", path: "/pages/programs/ue-club" },
        { name: "MEMBERSHIPS", description: "Explore every club tier", path: "/pages/programs/memberships" },
        { name: "ADMISSION", description: "Eligibility and enrollment", path: "/pages/programs/admission" },
        // ONLAB with Nested Submenu
        {
          name: "ONLAB",
          description: "Hands-on practical learning",
          path: "/pages/programs/onlab",
          subDropdown: [
            { name: "Dhaka Lab", path: "/pages/programs/onlab/dhaka" },
            { name: "Chattogram Lab", path: "/pages/programs/onlab/chattogram" },
            { name: "Gazipur Lab", path: "/pages/programs/onlab/gazipur" },
          ],
        },
      ],
    },
    {
      name: "ADMINISTRATION",
      dropdown: [
        { name: "BOARD OF DIRECTORS", description: "Executive governance and leadership", path: "/pages/administration/board-of-directors" },
        { name: "UE TEAM MEMBERS", description: "Management, trainers and mentors", path: "/pages/administration/training-department" },
      ],
    },
    {
      name: "COMMUNITY",
      dropdown: [
        { name: "OUR ALUMNI", description: "Graduate network and careers", path: "/pages/community/alumni" },
        { name: "OUR SUCCESS", description: "Member achievement stories", path: "/pages/community/success" },
        { name: "NGX", description: "Next-generation engineering platform", path: "/pages/community/ngx" },
        { name: "COMPANIES", description: "Ulterior Engineering ecosystem", path: "/pages/community/companies" },
      ],
    },
  ];

  const leftItems = navItems.slice(0, 4);
  const rightItems = navItems.slice(4);

  const renderNavItem = (item, index) => {
    const isDropdownOpen = openIndex === index;

    return (
      <div
        key={item.name}
        className="relative py-2"
        onMouseEnter={() => setOpenIndex(index)}
        onMouseLeave={() => {
          setOpenIndex(null);
          setSubOpenIndex(null);
        }}
      >
        {!item.dropdown ? (
          <Link
            href={item.path}
            className={`px-3 py-2 text-xs font-bold tracking-wider transition-all duration-200 ${
              isScrolled
                ? "text-gray-800 hover:text-red-700"
                : "text-white hover:text-yellow-300 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]"
            }`}
          >
            {item.name}
          </Link>
        ) : (
          <button
            className={`flex items-center gap-1 px-3 py-2 text-xs font-bold tracking-wider transition-all duration-200 cursor-pointer ${
              isScrolled
                ? "text-gray-800 hover:text-red-700"
                : "text-white hover:text-yellow-300 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]"
            }`}
          >
            {item.name}
            <span className="text-[10px]">{isDropdownOpen ? "▲" : "▼"}</span>
          </button>
        )}

        {/* Level 1 Dropdown */}
        {item.dropdown && isDropdownOpen && (
          <div
            className={`absolute top-full left-0 w-64 rounded-xl p-2.5 z-50 transition-all duration-200 ${
              isScrolled
                ? "bg-white shadow-xl border border-gray-100 text-gray-900"
                : "bg-slate-900/95 border border-white/20 text-white shadow-2xl"
            }`}
          >
            {item.dropdown.map((sub, subIdx) => (
              <div
                key={sub.name}
                className="relative"
                onMouseEnter={() => setSubOpenIndex(subIdx)}
                onMouseLeave={() => setSubOpenIndex(null)}
              >
                <Link
                  href={sub.path}
                  className={`flex justify-between items-center p-2.5 rounded-lg transition-colors ${
                    isScrolled ? "hover:bg-gray-100" : "hover:bg-white/15"
                  }`}
                >
                  <div>
                    <div className={`text-xs font-bold ${isScrolled ? "text-gray-900" : "text-white"}`}>
                      {sub.name}
                    </div>
                    {sub.description && (
                      <div className={`text-[11px] mt-0.5 ${isScrolled ? "text-gray-500" : "text-gray-300"}`}>
                        {sub.description}
                      </div>
                    )}
                  </div>

                  {/* {sub.subDropdown && <span className="text-[10px] ml-2">▶</span>} */}
                </Link>

                {/* Level 2 Sub-Dropdown (Fly-out Menu) */}
                {sub.subDropdown && subOpenIndex === subIdx && (
                  <div
                    className={`absolute left-full top-0 pl-2 -ml-2 w-56 rounded-xl p-2.5 z-50 shadow-2xl transition-all duration-200 ${
                      isScrolled
                        ? "bg-white shadow-xl border border-gray-100 text-gray-900"
                        : "bg-slate-900/95 border border-white/20 text-white"
                    }`}
                  >
                    {sub.subDropdown.map((nested) => (
                      <Link
                        key={nested.name}
                        href={nested.path}
                        className={`block p-2 rounded-lg text-xs font-bold transition-colors ${
                          isScrolled ? "hover:bg-gray-100 text-gray-800" : "hover:bg-white/15 text-white"
                        }`}
                      >
                        {nested.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 transition-all duration-300 font-sans">
      {/* 1. Top Bar */}
      <div
        className={`transition-all duration-300 px-4 md:px-8 flex justify-between items-center text-xs border-b ${
          isScrolled
            ? "bg-[#E9ECF0] text-gray-700 border-gray-200 py-2 max-h-10 opacity-100"
            : "bg-black/40 text-white border-white/10 py-2 max-h-10 opacity-100"
        }`}
      >
        <div className="flex items-center gap-2">
          <span className={`h-2.5 w-2.5 rounded-full inline-block ${isScrolled ? "bg-red-700" : "bg-yellow-400"}`}></span>
          <span className={`font-semibold ${isScrolled ? "text-gray-900" : "text-white"}`}>
            Ulterior Engineering Group
          </span>
          <span className={isScrolled ? "text-gray-400" : "text-white/40"}>|</span>
          <span className={`hidden sm:inline ${isScrolled ? "text-gray-600" : "text-gray-200"}`}>
            Professional Engineering Education
          </span>
        </div>
        <Link
          href="/pages/contact"
          className={`font-medium transition ${
            isScrolled ? "text-gray-700 hover:text-black" : "text-white hover:text-yellow-300"
          }`}
        >
          Contact
        </Link>
      </div>

      {/* 2. Main Navbar */}
      <nav
        style={
          !isScrolled
            ? {
                backgroundColor: "rgba(0, 0, 0, 0.15)",
                borderBottom: "1px solid rgba(255, 255, 255, 0.15)",
              }
            : {
                backgroundColor: "#ffffff",
                borderBottom: "1px solid #e5e7eb",
              }
        }
        className="w-full transition-all duration-300 py-3 md:py-4 shadow-sm relative"
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between relative">
          {/* Mobile Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`lg:hidden p-2 focus:outline-none ${isScrolled ? "text-gray-700" : "text-white"}`}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Left Navigation (Desktop) */}
          <div className="hidden lg:flex items-center gap-1.5">
            {leftItems.map((item, idx) => renderNavItem(item, idx))}
          </div>

          {/* Center Logo */}
          <div className="lg:absolute lg:left-1/2 lg:-translate-x-1/2 flex items-center justify-center pointer-events-none z-10">
            <Link href="/" className="pointer-events-auto flex items-center gap-2 py-1">
              <Image
                src={'/UE Black PNG.png'}
                alt="UE Logo"
                width={240}
                height={80}
                priority
                className="h-12 md:h-20 w-auto object-contain transition-all duration-300 drop-shadow-md hover:scale-105"
              />
            </Link>
          </div>

          {/* Right Navigation & Apply Button (Desktop) */}
          <div className="hidden lg:flex items-center gap-2">
            {rightItems.map((item, idx) => renderNavItem(item, idx + leftItems.length))}

            <Link
              href="/pages/programs/admission"
              className={`font-bold text-xs uppercase px-4 py-2 rounded-lg transition duration-200 flex items-center gap-1.5 shadow ml-2 ${
                isScrolled
                  ? "bg-[#9B1C1C] hover:bg-red-800 text-white"
                  : "bg-white/20 text-white hover:bg-white/30 border border-white/30"
              }`}
            >
              APPLY NOW <span className="text-sm">→</span>
            </Link>
          </div>

          {/* Mobile Direct Apply Button Header Right */}
          <div className="lg:hidden flex items-center">
            <Link
              href="/pages/programs/admission"
              className={`font-bold text-[10px] sm:text-xs uppercase px-3 py-1.5 rounded-md transition duration-200 flex items-center gap-1 ${
                isScrolled ? "bg-[#9B1C1C] text-white" : "bg-white/20 text-white border border-white/30"
              }`}
            >
              APPLY <span className="text-xs">→</span>
            </Link>
          </div>
        </div>
      </nav>

      {/* 3. Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div
          className={`lg:hidden border-t px-4 pt-2 pb-6 space-y-1 transition-all duration-300 max-h-[80vh] overflow-y-auto ${
            isScrolled ? "bg-white text-gray-800 border-gray-100" : "bg-black/90 text-white border-white/20"
          }`}
        >
          {navItems.map((item, index) => (
            <div
              key={item.name}
              className={`border-b pb-2 ${isScrolled ? "border-gray-100" : "border-white/10"}`}
            >
              {item.dropdown ? (
                <div>
                  <button
                    onClick={() => setMobileDropdown(mobileDropdown === index ? null : index)}
                    className="w-full flex justify-between items-center py-2 text-sm font-bold"
                  >
                    <span>{item.name}</span>
                    <span>{mobileDropdown === index ? "▲" : "▼"}</span>
                  </button>

                  {/* Level 1 Mobile Menu */}
                  {mobileDropdown === index && (
                    <div className="pl-3 space-y-2 mt-1">
                      {item.dropdown.map((sub, subIdx) => (
                        <div key={sub.name}>
                          {sub.subDropdown ? (
                            <div>
                              <button
                                onClick={() =>
                                  setMobileSubDropdown(mobileSubDropdown === subIdx ? null : subIdx)
                                }
                                className="w-full flex justify-between items-center py-1.5 text-xs font-semibold"
                              >
                                <span>{sub.name}</span>
                                <span className="text-[10px]">
                                  {mobileSubDropdown === subIdx ? "▲" : "▼"}
                                </span>
                              </button>

                              {/* Level 2 Mobile Submenu */}
                              {mobileSubDropdown === subIdx && (
                                <div className="pl-4 space-y-1.5 py-1">
                                  {sub.subDropdown.map((nested) => (
                                    <Link
                                      key={nested.name}
                                      href={nested.path}
                                      onClick={() => setMobileMenuOpen(false)}
                                      className={`block text-[11px] py-1 ${
                                        isScrolled
                                          ? "text-gray-600 hover:text-red-700"
                                          : "text-gray-300 hover:text-white"
                                      }`}
                                    >
                                      {nested.name}
                                    </Link>
                                  ))}
                                </div>
                              )}
                            </div>
                          ) : (
                            <Link
                              href={sub.path}
                              onClick={() => setMobileMenuOpen(false)}
                              className={`block py-1 text-xs ${
                                isScrolled
                                  ? "text-gray-600 hover:text-red-700"
                                  : "text-gray-200 hover:text-white"
                              }`}
                            >
                              <div className="font-semibold">{sub.name}</div>
                            </Link>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  href={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-2 text-sm font-bold"
                >
                  {item.name}
                </Link>
              )}
            </div>
          ))}

          <div className="pt-4">
            <Link
              href="/pages/programs/admission"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full bg-[#9B1C1C] hover:bg-red-800 text-white font-bold text-xs uppercase py-3 rounded-lg shadow text-center flex items-center justify-center gap-2"
            >
              APPLY NOW <span className="text-sm">→</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;