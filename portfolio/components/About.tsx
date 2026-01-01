import Link from "next/link";
import { FaEnvelope } from "react-icons/fa";

export default function About() {
  return (
    <section id="about" className="flex items-center">
      <div className="max-w-6xl w-full mx-4 sm:mx-6 md:mx-8 pt-8 sm:pt-10 md:pt-12 pb-16 sm:pb-20 md:pb-24 border-color border-b-4">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl title-font text-(--primary-color) font-bold mb-3 sm:mb-4 tracking-wider">
          ABOUT.
        </h2>
        <hr className="w-full border-color border-2" />
        <div className="max-w-4xl mt-8 sm:mt-12 md:mt-16">
          <div className="text-base sm:text-lg md:text-xl font-semibold leading-relaxed sm:leading-relaxed mb-6 sm:mb-8 tracking-wide space-y-4 sm:space-y-6">
            <p>
              Passionate Cloud &amp; DevOps engineer focused on infrastructure
              with Terraform, CI/CD pipelines, and Kubernetes deployments.
            </p>

            <p>
              I thrive on automation, scalability, and reliability&mdash;turning
              ideas into resilient systems.
            </p>

            <p>
              While I&rsquo;m early in my career, my hands-on projects show
              I&rsquo;m ready to contribute and grow with a forward-thinking
              team.
            </p>
          </div>
          <Link
            href="#connect"
            className="button-shadow rounded-md hover:text-(--alter-color) border-color border-2 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold uppercase tracking-wider inline-flex gap-2 items-center justify-center w-full sm:w-auto"
          >
            <span>LET'S CONNECT</span>
            <FaEnvelope size={20} className="sm:w-6 sm:h-6" />
          </Link>
        </div>
      </div>
    </section>
  );
}
