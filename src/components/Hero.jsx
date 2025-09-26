import { motion as Motion } from "framer-motion";
import { Link } from "react-scroll";
import { FaGithub, FaLinkedin, FaInstagram, FaCode, FaFolderOpen, FaHandshake } from "react-icons/fa";
import { SiMedium } from "react-icons/si";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-[80vh] md:min-h-screen flex flex-col md:flex-row items-center md:items-center justify-center md:justify-between gap-8 md:gap-12 px-4 sm:px-6 md:px-12 lg:px-24 pt-12 md:pt-0 relative overflow-hidden"
    >
      {/* Decorative Background Blobs */}
      <div className="pointer-events-none absolute top-20 -left-20 w-72 h-72 bg-indigo-500/20 rounded-full mix-blend-multiply blur-3xl animate-pulse" />
      <div className="pointer-events-none absolute bottom-10 right-0 w-80 h-80 bg-purple-500/20 rounded-full mix-blend-multiply blur-3xl animate-pulse" />

      {/* Left Content */}
      <Motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex-1 space-y-6 text-center md:text-left z-10"
      >
        <h1 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white leading-snug">
          <span className="">👋 Hey I'm </span>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
            Somnath
          </span>
        </h1>

        {/* Mobile Image Above Text */}
        <div className="flex justify-center md:hidden">
          <Motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            className="relative"
          >
            {/* Glow Effect Behind Image */}
            <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full blur-2xl opacity-30 animate-pulse" />
            <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-indigo-600 shadow-lg relative z-10">
              <img
                src="/Mee.jpeg"
                alt="Somnath"
                className="w-full h-78 object-cover"
              />
            </div>
          </Motion.div>
        </div>

        <div className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-xl mx-auto md:mx-0">
          <p className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">Welcome to my digital space ✨</p>
          <p className="mt-2">🚀 <span className="font-semibold">Frontend Developer</span></p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <Link
            to="projects"
            smooth
            duration={600}
            offset={-96}
            className="cursor-pointer px-6 py-3 rounded-xl bg-indigo-600 text-white font-medium shadow-md
                 hover:bg-indigo-700 hover:scale-105 transition-all duration-300 ease-in-out"
          >
            View Projects
          </Link>

          <Link
            to="contact"
            smooth
            duration={600}
            offset={-96}
            className="cursor-pointer px-6 py-3 rounded-xl border border-slate-300 dark:border-slate-600 
                 text-slate-800 dark:text-slate-200 font-medium
                 hover:bg-slate-100 dark:hover:bg-slate-800 hover:scale-105 transition-all duration-300 ease-in-out"
          >
            Contact Me
          </Link>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center md:justify-start gap-6 mt-6">
          <a
            href="https://github.com/somnath271"
            target="_blank"
            rel="noopener noreferrer"
            className="relative group text-2xl text-slate-600 dark:text-slate-300 hover:text-indigo-600 transition"
          >
            <FaGithub />
            <span className="absolute bottom-[-2rem] left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 text-xs bg-slate-800 text-white px-2 py-1 rounded shadow-lg">
              GitHub
            </span>
          </a>
          <a
            href="https://in.linkedin.com/in/somnath-bhattarai"
            target="_blank"
            rel="noopener noreferrer"
            className="relative group text-2xl text-slate-600 dark:text-slate-300 hover:text-indigo-600 transition"
          >
            <FaLinkedin />
            <span className="absolute bottom-[-2rem] left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 text-xs bg-slate-800 text-white px-2 py-1 rounded shadow-lg">
              LinkedIn
            </span>
          </a>
          <a
            href="https://www.instagram.com/suman_271_/"
            target="_blank"
            rel="noopener noreferrer"
            className="relative group text-2xl text-slate-600 dark:text-slate-300 hover:text-indigo-600 transition"
          >
            <FaInstagram />
            <span className="absolute bottom-[-2rem] left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 text-xs bg-slate-800 text-white px-2 py-1 rounded shadow-lg">
              Instagram
            </span>
          </a>
          <a
            href="https://somnath271.medium.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="relative group text-2xl text-slate-600 dark:text-slate-300 hover:text-indigo-600 transition"
          >
            <SiMedium />
            <span className="absolute bottom-[-2rem] left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 text-xs bg-slate-800 text-white px-2 py-1 rounded shadow-lg">
              Medium
            </span>
          </a>
        </div>
      </Motion.div>

      {/* Right Image with Floating Glow (Desktop Only) */}
      <Motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="flex-1 justify-center relative z-10 hidden md:flex"
      >
        <Motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
          className="relative"
        >
          {/* Glow Effect Behind Image */}
          <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full blur-2xl opacity-30 animate-pulse" />
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-indigo-600 shadow-lg hover:scale-105 transition-transform duration-500 relative z-10">
            <img
              src="/Mee.jpeg"
              alt="Somnath"
              className="w-full h-100 object-cover"
            />
          </div>
        </Motion.div>
      </Motion.div>
      {/* Quick Stats / Highlights */}
      <div className="absolute inset-x-0 bottom-24 hidden md:block">
        <div className="mx-auto max-w-4xl grid grid-cols-3 gap-6 px-6">
          <div className="rounded-2xl border border-slate-700/40 bg-slate-900/40 backdrop-blur-sm p-4 flex items-center gap-3 text-white dark:text-slate-200">
            <FaCode className="text-indigo-400 text-xl" />
            <div>
              <p className="text-sm text-white/90 dark:text-slate-300">Experience</p>
              <p className="font-semibold">1+ years coding</p>
            </div>
          </div>
          <div className="rounded-2xl border border-slate-700/40 bg-slate-900/40 backdrop-blur-sm p-4 flex items-center gap-3 text-white dark:text-slate-200">
            <FaFolderOpen className="text-purple-400 text-xl" />
            <div>
              <p className="text-sm text-white/90 dark:text-slate-300">Projects</p>
              <p className="font-semibold">10+ shipped</p>
            </div>
          </div>
          <div className="rounded-2xl border border-slate-700/40 bg-slate-900/40 backdrop-blur-sm p-4 flex items-center gap-3 text-white dark:text-slate-200">
            <FaHandshake className="text-pink-400 text-xl" />
            <div>
              <p className="text-sm text-white/90 dark:text-slate-300">Availability</p>
              <p className="font-semibold">Open to work</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave Divider */}
      <div className="absolute bottom-0 inset-x-0 pointer-events-none select-none" aria-hidden>
        <svg viewBox="0 0 1440 120" xmlns="http://www.w3.org/2000/svg" className="w-full h-[120px] fill-current text-slate-900/70 dark:text-slate-900/60">
          <path d="M0,64L48,58.7C96,53,192,43,288,37.3C384,32,480,32,576,53.3C672,75,768,117,864,122.7C960,128,1056,96,1152,74.7C1248,53,1344,43,1392,37.3L1440,32L1440,160L1392,160C1344,160,1248,160,1152,160C1056,160,960,160,864,160C768,160,672,160,576,160C480,160,384,160,288,160C192,160,96,160,48,160L0,160Z" />
        </svg>
      </div>
    </section>
  );
}
