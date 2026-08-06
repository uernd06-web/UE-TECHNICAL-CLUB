"use client";
import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const navItems = [
    { name: "HOME", path: "/" },
    { name: "ABOUT", path: "/pages/about" },
    { name: "CERTIFICATION", path: "/pages/certification" },
    {
      name: "PROGRAMS",
      dropdown: [
        {
          name: "UE CLUB",
          description: "Membership learning ecosystem",
          path: "/pages/programs/ue-club",
        },
        {
          name: "MEMBERSHIPS",
          description: "Explore every club tier",
          path: "/pages/programs/memberships",
        },
        {
          name: "ADMISSION",
          description: "Eligibility and enrollment",
          path: "/pages/programs/admission",
        },
        {
          name: "ONLAB",
          description: "Hands-on practical learning",
          path: "/pages/programs/onlab",
        },
      ],
    },
    {
      name: "ADMINISTRATION",
      dropdown: [
        {
          name: "BOARD OF DIRECTORS",
          description: "Executive governance and leadership",
          path: "/pages/administration/board-of-directors",
        },
        {
          name: "TRAINING DEPARTMENT",
          description: "Management, trainers and mentors",
          path: "/pages/administration/training-department",
        },
      ],
    },
    {
      name: "COMMUNITY",
      dropdown: [
        {
          name: "OUR ALUMNI",
          description: "Graduate network and careers",
          path: "/pages/community/alumni",
        },
        {
          name: "OUR SUCCESS",
          description: "Member achievement stories",
          path: "/pages/community/success",
        },
        {
          name: "NGX",
          description: "Next-generation engineering platform",
          path: "/pages/community/ngx",
        },
        {
          name: "COMPANIES",
          description: "Ulterior Engineering ecosystem",
          path: "/pages/community/companies",
        },
      ],
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(null);

  // Split menu into left and right parts around logo for desktop
  const leftItems = navItems.slice(0, 4);
  const rightItems = navItems.slice(4);

  const renderNavItem = (item, index) => {
    const isDropdownOpen = openIndex === index;

    if (!item.dropdown) {
      return (
        <Link
          key={item.name}
          href={item.path}
          className="px-4 py-2 rounded-lg text-xs font-bold tracking-wider text-gray-800 hover:text-red-700 transition duration-150"
        >
          {item.name}
        </Link>
      );
    }

    return (
      <div
        key={item.name}
        className="relative py-4"
        onMouseEnter={() => setOpenIndex(index)}
        onMouseLeave={() => setOpenIndex(null)}
      >
        <button className="flex items-center gap-1.5 px-3 py-2 text-xs font-bold tracking-wider text-gray-800 hover:text-red-700 transition duration-150 cursor-pointer">
          {item.name}
          <span className="text-[10px] transform transition-transform">
            {isDropdownOpen ? "▲" : "▼"}
          </span>
        </button>

        {/* Desktop Dropdown Menu */}
        {isDropdownOpen && (
          <div className="absolute top-full left-0 w-64 bg-white shadow-xl rounded-xl border border-gray-100 p-2 z-50 transition-all duration-200">
            {item.dropdown.map((sub) => (
              <Link
                key={sub.name}
                href={sub.path}
                className="block p-3 rounded-lg hover:bg-gray-50 transition"
              >
                <div className="text-xs font-bold text-gray-900">{sub.name}</div>
                {sub.description && (
                  <div className="text-[11px] text-gray-500 mt-0.5">
                    {sub.description}
                  </div>
                )}
              </Link>
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <header className="w-full bg-white border-b border-gray-200 font-sans">
      {/* 1. Top Announcement Bar */}
      <div className="bg-[#E9ECF0] text-gray-700 text-xs py-2 px-4 md:px-8 flex justify-between items-center border-b border-gray-200">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-red-700 inline-block"></span>
          <span className="font-semibold text-gray-900">
            Ulterior Engineering Group
          </span>
          <span className="text-gray-400">|</span>
          <span className="hidden sm:inline text-gray-600">
            Professional Engineering Education
          </span>
        </div>
        <Link
          href="/contact"
          className="font-medium text-gray-700 hover:text-black transition"
        >
          Contact
        </Link>
      </div>

      {/* 2. Main Navbar */}
      <nav className="max-w-7xl mx-auto px-4 md:px-6 py-2 flex items-center justify-between">
        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-gray-700 hover:text-black focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {mobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Desktop Navigation Left Side */}
        <div className="hidden lg:flex items-center gap-2">
          {leftItems.map((item, idx) => renderNavItem(item, idx))}
        </div>

        {/* Center Logo Area */}
        <Link href="/" className="flex items-center gap-2 my-1">
          <div className="flex items-center justify-center bg-black text-white font-black text-xl px-2.5 py-1 rounded">
            UE
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-bold text-sm tracking-tight text-gray-900">
              Technical
            </span>
            <span className="font-semibold text-xs tracking-wider text-gray-600">
              Club
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Right Side */}
        <div className="hidden lg:flex items-center gap-2">
          {rightItems.map((item, idx) =>
            renderNavItem(item, idx + leftItems.length)
          )}
        </div>

        {/* Apply Now Button */}
        <div className="flex items-center">
          <Link
            href="/pages/apply"
            className="bg-[#9B1C1C] hover:bg-red-800 text-white font-bold text-xs uppercase px-5 py-2.5 rounded-lg shadow transition duration-200 flex items-center gap-2"
          >
            APPLY NOW <span className="text-sm">→</span>
          </Link>
        </div>
      </nav>

      {/* 3. Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-4 pt-2 pb-6 space-y-1">
          {navItems.map((item, index) => (
            <div key={item.name} className="border-b border-gray-50 pb-2">
              {item.dropdown ? (
                <div>
                  <button
                    onClick={() =>
                      setMobileDropdown(
                        mobileDropdown === index ? null : index
                      )
                    }
                    className="w-full flex justify-between items-center py-2 text-sm font-bold text-gray-800"
                  >
                    <span>{item.name}</span>
                    <span>{mobileDropdown === index ? "▲" : "▼"}</span>
                  </button>
                  {mobileDropdown === index && (
                    <div className="pl-4 space-y-2 mt-1">
                      {item.dropdown.map((sub) => (
                        <Link
                          key={sub.name}
                          href={sub.path}
                          onClick={() => setMobileMenuOpen(false)}
                          className="block py-1 text-xs text-gray-600 hover:text-red-700"
                        >
                          <div className="font-semibold">{sub.name}</div>
                          {sub.description && (
                            <div className="text-[10px] text-gray-400">
                              {sub.description}
                            </div>
                          )}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  href={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-2 text-sm font-bold text-gray-800 hover:text-red-700"
                >
                  {item.name}
                </Link>
              )}
            </div>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;