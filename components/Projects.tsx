"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight, FaGithub } from "react-icons/fa";

const projectData = [
  {
    title: "CI/CD Pipeline",
    name: "1. GitHub Actions Pipeline",
    description:
      "Automated build, test, and deployment pipeline using GitHub Actions and Docker.Automated build, test, and deployment pipeline using GitHub Actions and Docker.Automated build, test, and deployment pipeline using GitHub Actions and Docker.Automated build, test, and deployment pipeline using GitHub Actions and Docker.Automated build, test, and deployment pipeline using GitHub Actions and Docker.",
    icons: ["/icons/github.svg", "/icons/docker.svg", "/icons/bash.svg"],
    techStack: ["GitHub Actions", "Docker", "Bash"],
    video: "https://www.youtube.com/watch?v=your_video_id",
    github: "#",
    image: "/images/project_first.png",
    launch: "https://your-live-site.com",
  },
  {
    title: "Kubernetes Setup",
    name: "2. K8s Cluster",
    description:
      "A beautiful and intuitive mobile app to track and improve your daily water intake. HydraTrack combines smooth, features a modern, adaptive interface and smart reminders, backed by a robust Spring Boot API to ensure reliable data tracking and analytics. Fully containerized with Docker Compose, HydraTrack offers seamless consistency across development and production environments.",
    icons: ["/icons/kubernetes.svg", "/icons/prometheus.svg", "/icons/grafana.svg"],
    techStack: ["Kubernetes", "Prometheus", "Grafana"],
    video: "https://www.youtube.com/watch?v=your_video_id",
    github: "#",
    image: "/images/project-second.png",
    launch: "https://your-live-site.com",
  },
  {
    title: "Terraform Infra",
    name: "3. AWS Infrastructure",
    description:
      "A real-time chatroom platform with host-controlled private rooms. Create timed sessions, set participant limits, and share images instantly - all powered by Socket.IO for seamless live messaging. Join rooms via meeting code or email invitation(no signup required), perfect for quick group chats or virtual hangouts.",
    icons: ["/icons/terraform.svg", "/icons/aws.svg", "/icons/linux.svg"],
    techStack: ["Terraform", "AWS", "Linux"],
    video: "https://www.youtube.com/watch?v=your_video_id",
    github: "#",
    image: "/images/project-third.png",
    launch: "https://your-live-site.com",
  },
];

export default function Projects() {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);

  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const next = () => {
    setIndex((prev) => (prev + 1) % projectData.length);
    setProgress(0);
  };

  const prev = () => {
    setIndex((prev) =>
      prev === 0 ? projectData.length - 1 : prev - 1
    );
    setProgress(0);
  };

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

 const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    const distance = touchStartX.current - touchEndX.current;
    if (distance > 50) next();
    if (distance < -50) prev();
  };

  return (
    // UPDATED RESPONSIVE CLASSES ONLY

<section id="projects" className="bg-[--bg-color]">
  <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-4 pb-16">

    {/* HEADER */}
    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 md:mb-10 gap-4">
      
      <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-[var(--text-color)]">
        PROJECTS
      </h2>

      <div className="flex flex-col items-start md:items-end gap-3">
        
        <div className="w-32 sm:w-40 h-2 border bg-gray-300 dark:bg-white/20 rounded-full overflow-hidden">
          <div
            className="h-full border-4 bg-gray-900 dark:bg-white rounded-full transition-all duration-100"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* DOTS */}
        <div className="flex items-center border-2 gap-2 px-3 py-1.5 rounded-full bg-black/5 dark:bg-white/5">
          {projectData.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setIndex(i);
                setProgress(0);
              }}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300
                ${
                  i === index
                    ? "bg-black dark:bg-white border-2 border-blue-700 scale-110"
                    : "border border-grey-500 hover:bg-black/30 dark:hover:bg-white/30"
                }`}
            />
          ))}
        </div>
      </div>
    </div>

    {/* MAIN */}
    <div
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      className="flex flex-col md:flex-row items-center gap-8 md:gap-12"
    >

      {/* LEFT */}
      <div className="flex-1 min-h-[auto] md:min-h-[320px] text-center md:text-left">

        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">
          {projectData[index].name}
        </h3>

        <p className="text-[var(--text-color)] text-sm sm:text-base leading-relaxed mb-6 md:min-h-[120px]">
          {projectData[index].description}
        </p>

        <div className="flex flex-wrap justify-center md:justify-start gap-2 sm:gap-3 mb-6 md:mb-8">
          {projectData[index].techStack.map((tech, i) => (
            <span
              key={i}
              className="px-3 py-1 rounded-full border text-xs sm:text-sm hover:bg-white hover:text-black transition"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-3 sm:gap-4">
          <a
            href={projectData[index].video}
            target="_blank"
            className="px-5 sm:px-6 py-2.5 sm:py-3 bg-white border flex items-center justify-center gap-2 text-black rounded-full font-semibold hover:scale-105 transition"
          >
            Live Demo
          </a>

          <a
            href={projectData[index].github}
            target="_blank"
            className="px-5 sm:px-6 py-2.5 sm:py-3 flex items-center justify-center gap-2 bg-white border text-black rounded-full font-semibold hover:scale-105 transition"
          >
            GitHub <FaGithub />
          </a>
        </div>
      </div>

      {/* RIGHT */}
      <div className="flex-1 flex justify-center min-h-[300px] sm:min-h-[350px] md:min-h-[420px] w-full">
        
        <div className="relative group w-full max-w-md">

          {projectData[index].launch && (
            <a
              href={projectData[index].launch}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute -top-3 right-2 sm:-top-4 sm:right-4 z-20 
                px-3 sm:px-4 py-1 text-xs sm:text-sm rounded-full 
                border border-blue-500 text-blue-400 
                bg-black/70 backdrop-blur-md
                hover:bg-blue-500 hover:text-white 
                transition-all duration-300 flex items-center gap-2"
            >
              <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></span>
              LAUNCH APP
            </a>
          )}

          <div className="absolute inset-0 bg-white/10 blur-2xl rounded-xl"></div>

          <Image
            src={projectData[index].image}
            alt="project"
            width={500}
            height={300}
            className="relative z-10 object-contain w-full h-auto max-h-[300px] sm:max-h-[350px] md:h-[350px] rounded-xl border border-white/20 
              group-hover:scale-105 transition duration-300"
          />
        </div>
      </div>
    </div>

    {/* NAV */}
    <div className="flex justify-center gap-4 sm:gap-6 mt-6">
      <button
        onClick={prev}
        className="p-2.5 sm:p-3 border rounded-md hover:bg-white hover:text-black flex items-center hover:scale-105 transition"
      >
        <FaChevronLeft />
      </button>

      <button
        onClick={next}
        className="p-2.5 sm:p-3 border rounded-md hover:bg-white hover:text-black flex items-center hover:scale-105 transition"
      >
        <FaChevronRight />
      </button>
    </div>

  </div>
</section>
  );
}