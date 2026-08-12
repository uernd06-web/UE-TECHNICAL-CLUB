import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  // Navigation Links Data
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
        
        {/* Column 1: Brand Info (Optimized Logo Size) */}
        <div className="space-y-4">
          <Link href="/" className="inline-block">
            <div className="relative w-20 h-20 md:w-24 md:h-24">
              <Image
                src="/ue-logo2.png"
                alt="UE Logo"
                fill
                sizes="(max-width: 768px) 80px, 96px"
                className="object-contain object-left"
                priority
              />
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