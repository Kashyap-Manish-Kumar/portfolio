import Link from "next/link";
import { FaEnvelope } from "react-icons/fa";

export default function About() {
  return (
    <section id="about" className="flex justify-center scroll-mt-20">
      
      <div
        className="max-w-6xl w-full mx-4 sm:mx-6 md:mx-8 
        pt-0 
        pb-8 sm:pb-10 md:pb-12 
        border-color border-b-4"
      >
        <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl title-font text-[var(--text-color)] font-bold mb-3 sm:mb-4 tracking-wider">
          ABOUT ME
        </h2>

        <hr className="w-full border-color border-2" />

        <div className="mt-6 md:mt-14 grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
          
          {/* BOX 1 */}
          <div className="group border-2 border-[var(--border-color)] rounded-xl overflow-hidden about-card hover:scale-[1.02] transition-all duration-300">
            
            <div className="flex flex-col items-center justify-center text-center px-4 sm:px-5 py-4 border-b-2 border-[var(--border-color)] min-h-[64px]">
              <div className="text-2xl sm:text-3xl">👤</div>
              <h3 className="text-lg sm:text-xl font-bold tracking-wide">
                Who I Am
              </h3>
            </div>

            <div className="px-4 sm:px-5 py-4 sm:py-5">
              <p className="text-sm sm:text-base leading-relaxed text-center opacity-90 group-hover:opacity-100 transition">
                I am a Computer Science undergraduate specializing in AI & Machine Learning,
                with a strong foundation in software development and problem solving.
                I enjoy building scalable web applications and writing clean, maintainable code.
              </p>
            </div>
          </div>

          {/* BOX 2 */}
          <div className="group border-2 border-[var(--border-color)] rounded-xl overflow-hidden about-card hover:scale-[1.02] transition-all duration-300">
            
            <div className="flex flex-col items-center justify-center text-center px-4 sm:px-5 py-4 border-b-2 border-[var(--border-color)] min-h-[64px]">
              <div className="text-2xl sm:text-3xl">🎯</div>
              <h3 className="text-lg sm:text-xl font-bold tracking-wide">
                What I Do
              </h3>
            </div>

            <div className="px-4 sm:px-5 py-4 sm:py-5">
              <p className="text-sm sm:text-base leading-relaxed text-center opacity-90 group-hover:opacity-100 transition">
                I have experience developing full-stack applications with Java backend using
                Spring Boot, MongoDB, and REST APIs. I have also worked on AI-based projects,
                including Multiple Sclerosis detection using MRI scans.
              </p>
            </div>
          </div>

          {/* BOX 3 */}
          <div className="group border-2 border-[var(--border-color)] rounded-xl overflow-hidden about-card hover:scale-[1.02] transition-all duration-300">
            
            <div className="flex flex-col items-center justify-center text-center px-4 sm:px-5 py-4 border-b-2 border-[var(--border-color)] min-h-[64px]">
              <div className="text-2xl sm:text-3xl">🚀</div>
              <h3 className="text-lg sm:text-xl font-bold tracking-wide">
                My Current Goal
              </h3>
            </div>

            <div className="px-4 sm:px-5 py-4 sm:py-5">
              <p className="text-sm sm:text-base leading-relaxed text-center opacity-90 group-hover:opacity-100 transition">
                I am focused on backend engineering, system design, and AI integration.
                I continuously learn new technologies to build scalable, intelligent,
                and user-friendly applications that create meaningful impact.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}