"use client";

import { HiArrowDown } from "react-icons/hi";
import { useState, useEffect } from "react";
import Image from "next/image";
import { FaFileDownload } from "react-icons/fa";
import Link from "next/link";

export default function Hero() {

  const roles = [
    "AI / ML Developer",
    "Backend Developer",
    "Mobile Developer",
    "Software Developer"
  ];

  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="portfolio" className="flex justify-center">

      {/* ✅ FIXED: responsive padding */}
      <div className="px-4 sm:px-6 md:px-8 pt-6 md:pt-8 pb-8 md:pb-10 w-full relative">

        {/* ✅ FIXED: reduce gap on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-16 items-center">

          {/* TEXT SECTION */}
          <div className="flex flex-col gap-4 md:gap-6">

            <h1 className="title-font text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight tracking-wider">
              HI! I'M <br />
              <span className="text-xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl">
                Manish Kashyap
              </span>
            </h1>

            <h2 className="text-base sm:text-lg md:text-2xl lg:text-3xl xl:text-4xl default-font font-bold -mt-2">
              <span className="text-(--primary-color)">|</span>
              <span className="ml-2">
                {roles[currentRole]}
              </span>
            </h2>

            <div className="mt-2 md:mt-4">
              <p className="text-base sm:text-lg md:text-2xl text-(--primary-color) tagline-font uppercase tracking-widest">
                SPECIALIZED IN
              </p>
              <p className="text-sm sm:text-base md:text-xl font-semibold leading-relaxed">
                Building scalable Desktop and Mobile applications, developing AI/ML solutions, designing REST APIs, and integrating cloud-based systems.
              </p>
            </div>

            <Link
              href="/docs/Manish-Kashyap-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="button-shadow rounded-md mt-4 px-5 sm:px-8 py-3 sm:py-4 border-color border-2 text-sm sm:text-md font-semibold uppercase tracking-wider flex items-center gap-2 w-fit hover:text-(--alter-color)"
            >
              <FaFileDownload size={20} />
              DOWNLOAD RESUME
            </Link>
          </div>

          {/* IMAGE SECTION */}
         <div className="relative flex justify-center items-start md:items-center order-first md:order-last mb-2 md:mb-0">

            {/* ✅ FIXED: responsive image size */}
            <Image
              className="w-40 sm:w-60 md:w-80 lg:w-[26rem] object-cover
                        drop-shadow-[0_0_0_6px_white]"
              src="/images/profile_pic.png"
              alt="Profile Image"
              width={400}
              height={400}
              priority
            />

            {/* ✅ FIXED: hide icons on small screens */}
            <div className="absolute right-2 top-1/2 -translate-y-1/2 flex flex-col items-center gap-4">

  <img src="/icons/react.svg" className="w-5 sm:w-6 md:w-8 float" />
  <img src="/icons/github.svg" className="w-5 sm:w-6 md:w-8 float" />
  <img src="/icons/javascript.svg" className="w-4 sm:w-5 md:w-7 float" />
  <img src="/icons/spring.svg" className="w-4 sm:w-5 md:w-7 float" />
  <img src="/icons/node.svg" className="w-5 sm:w-6 md:w-8 float" />
  <img src="/icons/aws.svg" className="w-5 sm:w-6 md:w-8 float" />
 
  <img src="/icons/mongodb.svg" className="w-5 sm:w-6 md:w-8 float" />
  <img src="/icons/docker.svg" className="w-5 sm:w-6 md:w-8 float" />
  <img src="/icons/eclipse.svg" className="w-5 sm:w-6 md:w-8 float" />
  <img src="/icons/javascript.svg" className="w-5 sm:w-6 md:w-8 float" />
  <img src="/icons/github.svg" className="w-5 sm:w-6 md:w-8 float" />
  <img src="/icons/react.svg" className="w-5 sm:w-6 md:w-8 float" />
  

</div>
          </div>
        </div>
      </div>
    </section>
  );
}