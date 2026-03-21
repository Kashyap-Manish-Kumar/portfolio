"use client";

import { FiPhone } from "react-icons/fi"; // Feather icons
import { useState, useEffect } from "react";
import { BiCopyright } from "react-icons/bi";
import { HiArrowUp } from "react-icons/hi";
import { FaGithub, FaLinkedin, } from "react-icons/fa";

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  const socials = [
    { icon: <FaGithub />, link: "#", label: "GitHub" },
    { icon: <FaLinkedin />, link: "#", label: "LinkedIn" },
    {
      icon: <FiPhone />,
      link: "tel:+917046894649",
      label: "+91 7046894649",
    },
  ];

  return (
    <footer className="relative mt-12 border-t border-white/10 bg-gradient-to-b from-black/30 via-black/60 to-black backdrop-blur-xl">

      {/* TOP GLOW LINE */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-(--alter-color) to-transparent opacity-40" />

      <div className="max-w-7xl mx-auto px-6 py-8">

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">

          {/* LEFT */}
          <div className="text-center md:text-left space-y-1">
            <p className="flex items-center justify-center md:justify-start gap-2 text-base font-semibold">
              <BiCopyright className="text-lg opacity-80" />
              {currentYear} Manish Kashyap
            </p>
            <p className="text-sm text-white/60">
              Crafted with passion, performance & clean code.
            </p>
          </div>

          {/* NAV */}
          <div className="flex justify-center flex-wrap gap-5 text-sm font-medium">
            {["Home", "About", "Projects", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="relative text-white/70 hover:text-white transition duration-300 group"
              >
                {item}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-(--alter-color) transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* SOCIALS */}
          <div className="flex justify-center md:justify-end gap-3 flex-wrap">
            {socials.map((social, i) => (
              <a
                key={i}
                href={social.link}
                aria-label={social.label}
                className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-sm text-white/70 hover:text-white hover:bg-(--alter-color) transition-all duration-300 hover:scale-105"
              >
                {social.icon}
                <span className="hidden sm:inline">{social.label}</span>
              </a>
            ))}
          </div>
        </div>

        {/* DIVIDER */}
        <div className="mt-6 h-[1px] bg-white/10" />

        {/* BOTTOM */}
        <div className="mt-4 text-center text-xs text-white/50">
          All rights reserved.
        </div>
      </div>

      {/* SCROLL BUTTON */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="fixed bottom-5 right-5 w-10 h-10 flex items-center justify-center 
          rounded-full bg-(--alter-color) text-white shadow-lg shadow-(--alter-color)/30 
          hover:scale-110 active:scale-95 transition-all duration-300 z-50"
        >
          <HiArrowUp className="text-base" />
        </button>
      )}
    </footer>
  );
}