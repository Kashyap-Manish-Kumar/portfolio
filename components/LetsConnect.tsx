"use client";

import Link from "next/link";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";


const socialLinks = [
  {
    name: "GITHUB",
    url: "https://github.com/Kashyap-Manish-Kumar",
    icon: <FaGithub className="w-6 h-6" />,
  },
  {
    name: "LINKEDIN",
    url: "https://www.linkedin.com/in/manish-kashyap-22154732b/",
    icon: <FaLinkedin className="w-6 h-6" />,
  },
  {
    name: "LEETCODE",
    url: "https://leetcode.com/u/Kashyap-Manish-Kumar/",
    icon: <SiLeetcode className="w-6 h-6" />,
  },
  {
    name: "WHATSAPP",
    url: "https://wa.me/917046894649?text=Hi%20Manish%2C%20I%20came%20across%20your%20portfolio%20and%20really%20liked%20your%20work.%20Are%20you%20available%20to%20discuss%20a%20project%3F",
    icon: <FaWhatsapp className="w-6 h-6" />,
  },
  
];

export default function LetsConnect() {

  const formRef = useRef();
  const [loading, setLoading] = useState(false);

  
    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_2a2mhgk",
        "template_syl5k6n",
        formRef.current,
        "oIDt_BpZGhe7Ls8Ni"
      )
      .then(
        () => {

          emailjs.send(
        "service_2a2mhgk",
        "template_xjzy86k", // ✅ your actual template ID
        {
          name: formRef.current.name.value,
          email: formRef.current.email.value,
          message: formRef.current.message.value,
        },
        "oIDt_BpZGhe7Ls8Ni"
      );


          alert("Message sent ✅");
          formRef.current.reset();
          setLoading(false);
        },
        (error) => {
          console.error(error);
          alert("Failed ❌");
          setLoading(false);
        }
      );
  };

  return (
    <section id="connect" className="bg-[--bg-color] scroll-mt-32">
      <div className="max-w-6xl mx-auto pb-2  px-4 sm:px-6 md:px-8 flex flex-col items-center">
       
        <h3 className="w-full title-font text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-[var(--text-color)] font-bold tracking-wider leading-tight mb-0 sm:mb-0 md:mb-0">
          LET'S CONNECT
        </h3>

        <p className="text-[var(--text-color)] text-center max-w-xl text-sm sm:text-base mb-0 mt-0">
          Got a project, idea, or just want to say hi? I’m always open to new opportunities and collaborations.
        </p>

        <div className="w-full grid md:grid-cols-2 gap-8 mt-5 mb-5">

          <div className="relative w-full h-[300px] md:h-[295px] rounded-lg overflow-hidden border-4 border-color">

            <iframe
              src="https://www.google.com/maps?q=Vadodara&output=embed"
              className="w-full h-full"
              loading="lazy"
            ></iframe>

            <div className="absolute top-[60%] left-[55%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">

              <div className="relative flex items-center justify-center">
                <span className="absolute w-10 h-10 rounded-full bg-pink-500/30 animate-ping"></span>

                <div className="w-6 h-6 rounded-full flex items-center justify-center shadow-lg">
                  <FaUser className="text-black text-3xl" />
                </div>
              </div>

              <div className="mt-2 px-3 py-1.5 rounded-full bg-black/80 backdrop-blur-md border border-white/10 shadow-lg">
                <span className="text-white text-xs font-semibold tracking-wide">
                  Its Me
                </span>
              </div>

            </div>

          </div>

          {/* ✅ FORM (ONLY FUNCTIONAL CHANGES ADDED) */}
          <form ref={formRef} onSubmit={sendEmail} className="flex flex-col gap-4 border-color">

            <input
              name="name"
              type="text"
              placeholder="Name"
              required
              className="bg-white/10 border border-color rounded-md px-4 py-3 outline-none text-[var(--text-color)]  placeholder-gray-400 focus:border-pink-500 "
            />

            <input
              name="email"
              type="email"
              placeholder="Email address"
              required
              className="bg-white/10 border border-color rounded-md px-4 py-3 outline-none text-[var(--text-color)]  placeholder-gray-400 focus:border-pink-500"
            />

            <textarea
              name="message"
              placeholder="Message"
              rows="3"
              required
              className="bg-white/10 border border-color rounded-md px-4 py-3 outline-none text-[var(--text-color)]  placeholder-gray-400 focus:border-pink-500"
            />

            <button
              type="submit"
              disabled={loading}
              className="bg-pink-600 hover:bg-pink-700 transition-all py-3 rounded-md font-semibold"
            >
              {loading ? "Sending..." : "Send"}
            </button>

          </form>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4">

          {socialLinks.map((social, index) => (
            <Link
              key={index}
              href={social.url}
              target="_blank"
             className="skill-card-shadow rounded-lg border-color border-4 py-4 flex flex-col items-center gap-2 text-center hover:scale-[1.05] hover:bg-pink-400 transition-all duration-200"
            >
              <div className="flex items-center justify-center">
                {social.icon}
              </div>

              <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider">
                {social.name}
              </span>
            </Link>
          ))}

        </div>

      </div>
    </section>
  );
}