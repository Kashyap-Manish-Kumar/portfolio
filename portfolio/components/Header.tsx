"use client";

import { useState, useEffect } from "react";
import { useTheme } from "@/contexts/ThemeContext";
import { HiSun } from "react-icons/hi";
import { AiFillMoon } from "react-icons/ai";
import Link from "next/link";
import { FaTimes } from "react-icons/fa";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["portfolio", "about", "projects", "skills", "connect"];
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const offsetTop = (target as HTMLElement).offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 left-0 right-0 bg-(--bg-color) border-b-2 border-(--border-color) z-50 transition-colors duration-300">
      <div className="max-w-6xl mx-auto border-r-2 border-(--border-color) border-l-2 px-8 py-5 flex items-center justify-between">
        {/* Logo */}
        <div className="logo">
          <Link href="/" className="flex justify-center items-center gap-1.5">
            <div className="w-10 h-10 title-font card-top-bg border-2 border-(--border-color) flex items-center justify-center font-bold text-xl logo-shadow rounded-sm">
              R
            </div>
            <span className="text-(--text-color) text-xl font-bold">idoy</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-2 items-center">
          {["portfolio", "about", "projects", "skills", "connect"].map(
            (section) => (
              <Link
                key={section}
                href={`#${section}`}
                className={`text-md font-bold uppercase tracking-wider px-4 py-2 transition-all duration-200 rounded-sm ${
                  activeSection === section
                    ? "logo-shadow border-2 border-(--border-color)"
                    : "hover:logo-shadow hover:border-2 hover:border-(--border-color)"
                }`}
                onClick={(e) => handleNavClick(e, `#${section}`)}
              >
                {section.toUpperCase()}
              </Link>
            )
          )}

          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 flex items-center justify-center text-(--text-color) card-shadow rounded-sm border-2 border-(--border-color) hover:text-(--alter-color)"
            aria-label="Toggle theme"
          >
            {theme === "light" ? <AiFillMoon size={24} /> : <HiSun size={24} />}
          </button>
        </nav>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden flex flex-col gap-1 bg-none border-none cursor-pointer p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Menu"
        >
          <span className="w-6 h-0.5 bg-(--text-color) block transition-colors duration-300"></span>
          <span className="w-6 h-0.5 bg-(--text-color) block transition-colors duration-300"></span>
          <span className="w-6 h-0.5 bg-(--text-color) block transition-colors duration-300"></span>
        </button>
      </div>

      {/* Mobile Navigation Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-(--bg-color) flex flex-col items-center justify-center gap-6 z-50 transition-all duration-300">
          {["portfolio", "about", "projects", "skills", "connect"].map(
            (section) => (
              <Link
                key={section}
                href={`#${section}`}
                className={`text-lg font-bold uppercase tracking-wider px-6 py-3 transition-all duration-200 rounded-sm ${
                  activeSection === section
                    ? "logo-shadow border-2 border-(--border-color)"
                    : "hover:logo-shadow hover:border-2 hover:border-(--border-color)"
                }`}
                onClick={(e) => handleNavClick(e, `#${section}`)}
              >
                {section.toUpperCase()}
              </Link>
            )
          )}

          {/* Theme toggle in mobile menu */}
          <button
            onClick={toggleTheme}
            className="p-3 flex items-center justify-center text-(--text-color) card-shadow rounded-sm border-2 border-(--border-color) hover:text-(--alter-color)"
            aria-label="Toggle theme"
          >
            {theme === "light" ? <AiFillMoon size={28} /> : <HiSun size={28} />}
          </button>

          {/* Close button */}
          <button
            className="absolute top-6 right-6 text-(--text-color) p-2  bg-(--primary-color) rounded-full hover:logo-shadow"
            onClick={() => setIsMenuOpen(false)}
            aria-label="Close menu"
          >
            <FaTimes size={18}/>
          </button>
        </div>
      )}
    </header>
  );
}
