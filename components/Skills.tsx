"use client";

import { useState, useEffect, useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import { FaJava, FaPython, FaAws, FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
import { SiJavascript, SiMongodb, SiMysql, SiNextdotjs, SiTailwindcss, SiExpress, SiFirebase, SiGooglecloud, SiVercel, SiPostman } from "react-icons/si";
import { VscCode } from "react-icons/vsc";
import { MdCloud, MdEngineering, MdApi, MdSecurity } from "react-icons/md";
import { GrSystem } from "react-icons/gr";
import { SiTypescript, SiEclipseide, SiJenkins } from "react-icons/si";
import { FaDocker } from "react-icons/fa";

const skillData = [
  {
    title: "Programming Languages & Knowledge",
    skills: [
      { name: "Java", icon: <FaJava /> },
      { name: "Python", icon: <FaPython /> },
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "SQL", icon: <SiMysql /> },
      { name: "TypeScript", icon: <SiTypescript /> }, 
      { name: "Cloud", icon: <MdCloud /> },
      { name: "SDLC", icon: <GrSystem /> },
      { name: "CI/CD", icon: <MdEngineering /> },
      { name: "Agile", icon: <GrSystem /> },
      { name: "DevOps", icon: <MdEngineering /> }
    ],
  },
  {
    title: "Frontend and Backend Development",
    skills: [
      { name: "React", icon: <FaReact /> },
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "HTML", icon: <VscCode /> },
      { name: "Tailwind", icon: <SiTailwindcss /> },
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "Express.js", icon: <SiExpress /> },
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "MySQL", icon: <SiMysql /> },
      { name: "JWT/Auth", icon: <MdSecurity /> },
      { name: "REST API", icon: <MdApi /> }, 
    ],
  },
  {
    title: "Cloud Platforms & Devlopment Tools",
    skills: [
      { name: "Vercel", icon: <SiVercel /> },
      { name: "AWS", icon: <FaAws /> },
      { name: "GCP", icon: <SiGooglecloud /> },
      { name: "Firebase", icon: <SiFirebase /> },
      { name: "Docker", icon: <FaDocker /> },
      { name: "VS Code", icon: <VscCode /> },
      { name: "Eclipse", icon: <SiEclipseide /> },
      { name: "Postman", icon: <SiPostman /> },
      { name: "GitHub", icon: <FaGitAlt /> },
      { name: "Jenkins", icon: <SiJenkins /> }
    ],
  },
];

export default function Skills() {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);

  // ✅ FIX: track mobile safely
  const [isMobile, setIsMobile] = useState(false);

  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const next = () => {
    setIndex((prev) => (prev + 1) % skillData.length);
    setProgress(0);
  };

  const prev = () => {
    setIndex((prev) =>
      prev === 0 ? skillData.length - 1 : prev - 1
    );
    setProgress(0);
  };

  useEffect(() => {
    // ✅ FIX: window used only on client
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    handleResize(); // run once
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          next();
          return 0;
        }
        return prev + 2.5;
      });
    }, 50);

    return () => clearInterval(interval);
  }, [isPaused]);

  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    const distance = touchStartX.current - touchEndX.current;

    if (distance > 50) next();
    if (distance < -50) prev();
  };

  return (
    <section id="skills" className="bg-[--bg-color] overflow-hidden">
      <div className="max-w-6xl w-full mx-auto px-4 sm:px-6 md:px-8 pt-3 pb-16 border-color border-b-4">

        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 gap-4">
          
          <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl title-font font-bold text-[var(--text-color)] tracking-wider">
            MY SKILLS
          </h2>

          <div className="flex flex-col items-start md:items-end gap-3">
            
            <div className="w-32 sm:w-40 h-2 bg-white/20 border rounded-full overflow-hidden">
              <div
                className="h-full bg-white border-4 rounded-full transition-all duration-100"
                style={{ width: `${progress}%` }}
              />
            </div>

            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border">
              {skillData.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setIndex(i);
                    setProgress(0);
                  }}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300
                    ${i === index
                      ? "bg-black dark:bg-white border-2 border-blue-700 scale-110"
                      : "border border-grey-500 hover:bg-black/30 dark:hover:bg-white/30"
                    }`}
                />
              ))}
            </div>
          </div>
        </div>

        <hr className="w-full border-color border-2" />

        {/* MAIN */}
        <div className="mt-8 flex items-center justify-center gap-2 sm:gap-4 md:gap-6">

          <button
            onClick={prev}
            className="hidden sm:flex p-3 border-2 border-[var(--border-color)] rounded-md hover:scale-105 hover:bg-white hover:text-black transition"
          >
            <FaChevronLeft />
          </button>

          <div
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            className="w-full max-w-5xl min-h-[320px] sm:min-h-[350px] md:min-h-[400px] border-2 border-[var(--border-color)] rounded-xl overflow-hidden flex flex-col"
          >
            
            <div className="flex items-center justify-center px-4 sm:px-6 py-4 sm:py-5 bg-[var(--primary-color)] border-b-2 border-[var(--border-color)]">
              <h3 className="text-lg sm:text-xl md:text-2xl text-white font-bold text-center">
                {skillData[index].title}
              </h3>
            </div>

            <div className="flex-1 flex items-center justify-center px-3 sm:px-6 py-6 sm:py-8 bg-black">
              
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4 sm:gap-6 w-full">
                {skillData[index].skills
                  .slice(0, isMobile ? 9 : skillData[index].skills.length)
                  .map((skill, i) => (
                  <div key={i} className="flex flex-col items-center">
                    
                    <div className="relative w-full max-w-[90px] sm:max-w-[110px] md:max-w-[135px] aspect-square mx-auto">
                      
                      <div className="absolute inset-0 translate-x-1 translate-y-1 sm:translate-x-2 sm:translate-y-2 bg-white rounded-lg"></div>

                      <div className="relative z-10 flex items-center justify-center 
                                    border-2 border-[var(--border-color)] rounded-lg bg-[var(--primary-color)]
                                    w-full h-full">
                        <div className="text-3xl sm:text-5xl md:text-6xl text-white">
                          {skill.icon}
                        </div>
                      </div>
                    </div>

                    <span className="text-[10px] sm:text-xs text-white mt-2 text-center">
                      {skill.name}
                    </span>

                  </div>
                ))}
              </div>
            </div>
          </div>

          <button
            onClick={next}
            className="hidden sm:flex p-3 border-2 border-[var(--border-color)] rounded-md hover:scale-105 hover:bg-white hover:text-black transition"
          >
            <FaChevronRight />
          </button>
        </div>

      </div>
    </section>
  );
}