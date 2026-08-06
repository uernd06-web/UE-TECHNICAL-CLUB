import Link from "next/link";
import React from "react";

const Footer = () => {
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

  // Helper arrays for mapping links cleanly
  const exploreLinks = [
    { name: "About", path: "/pages/about" },
    { name: "Certification", path: "/pages/certification" },
    { name: "UE Club", path: "/pages/programs/ue-club" },
    { name: "Memberships", path: "/pages/programs/memberships" },
    { name: "Admission", path: "/pages/programs/admission" },
    { name: "OnLab", path: "/pages/programs/onlab" },
    { name: "Student Portal", path: "/pages/student-portal" },
  ];

  const moreLinks = [
    { name: "BOD", path: "/pages/administration/board-of-directors" },
    { name: "Training Department", path: "/pages/administration/training-department" },
    { name: "Our Success", path: "/pages/community/success" },
    { name: "Our Alumni", path: "/pages/community/alumni" },
    { name: "Companies", path: "/pages/community/companies" },
  ];

  return (
    <footer className="bg-[#050B14] text-gray-300 font-sans pt-16 pb-8 px-6 md:px-16 border-t border-red-900/40">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-16">
        {/* Column 1: Brand Info */}
        <div className="space-y-6">
          <Link href="/" className="inline-block">
            <div className="flex items-center gap-2">
              <div className="flex items-center justify-center bg-black text-white font-black text-xl px-2.5 py-1 rounded border border-gray-700">
                UE
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-bold text-sm tracking-tight text-white">
                  Technical
                </span>
                <span className="font-semibold text-xs tracking-wider text-gray-400">
                  Club
                </span>
              </div>
            </div>
          </Link>
          <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
            UETraining is part of the Ulterior Engineering ecosystem, connected
            with UE Energy & Control, NGX and Uthboe.
          </p>
        </div>

        {/* Column 2: Explore */}
        <div>
          <h3 className="text-white font-bold text-base mb-6">Explore</h3>
          <ul className="space-y-3 text-sm">
            {exploreLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.path}
                  className="hover:text-white transition duration-200 block"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: More */}
        <div>
          <h3 className="text-white font-bold text-base mb-6">More</h3>
          <ul className="space-y-3 text-sm">
            {moreLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.path}
                  className="hover:text-white transition duration-200 block"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4: Official Contact */}
        <div>
          <h3 className="text-white font-bold text-base mb-6">
            Official Contact
          </h3>
          <ul className="space-y-4 text-sm">
            <li>
              <a
                href="tel:+8801818988959"
                className="hover:text-white transition duration-200 block"
              >
                +880 1818-988959
              </a>
            </li>
            <li>
              <a
                href="mailto:info@ulterior.com.bd"
                className="hover:text-white transition duration-200 block"
              >
                info@ulterior.com.bd
              </a>
            </li>
            <li>
              <a
                href="https://ueenergycontrol.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition duration-200 inline-flex items-center gap-1"
              >
                UE Energy & Control <span className="text-xs">↗</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="max-w-7xl mx-auto pt-6 border-t border-gray-800/80 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 gap-4">
        <p>© 2026 UETraining UI concept. All rights reserved.</p>
        <p className="text-center md:text-right">
          Source reference:{" "}
          <span className="font-semibold text-gray-400">
            ueenergycontrol.com
          </span>
          . Photos are engineering-themed presentation images.
        </p>
      </div>
    </footer>
  );
};

export default Footer;