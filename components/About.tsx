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
              I am a Software Development Engineer Intern building and improving real-world software products. I enjoy solving practical engineering problems, understanding systems deeply, and writing clean, maintainable code that works reliably in production environments.
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
               I build full-stack applications with a strong focus on backend development, APIs, databases, authentication, and system integration. My experience includes React, TypeScript, Node.js, Express.js, PostgreSQL, Prisma, Java, Spring Boot, Docker, and AI-powered applications. 
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
                I am focused on becoming a strong software engineer with deeper expertise in backend engineering, system design, and scalable applications. I want to take greater ownership of real-world engineering problems while exploring how AI can be integrated into practical software systems.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}