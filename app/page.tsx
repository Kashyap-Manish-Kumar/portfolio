import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";

import Projects from "@/components/Projects";
import Skills from "@/components/Skills";


import LetsConnect from "@/components/LetsConnect";
import Footer from "@/components/Footer";
import Experience from "@/components/Experience";
export default function Home() {
  return (
    <div className="app-container flex flex-col ">
      {/* <div className="header-wrapper w-full h-full relative"> */}
        <Header />
      {/* </div> */}

      <main className="max-w-6xl mx-auto border-r-2 border-l-2">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <LetsConnect />
        <Footer />
      </main>
    </div>
  );
}
