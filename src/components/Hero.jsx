import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { SiMedium } from "react-icons/si";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center md:justify-between gap-12 px-6 md:px-12 lg:px-24 pt-16 md:pt-0 relative overflow-hidden"
    >
      {/* Decorative Background Blobs */}
      <div className="absolute top-20 -left-20 w-72 h-72 bg-indigo-500/20 rounded-full mix-blend-multiply blur-3xl animate-pulse" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-purple-500/20 rounded-full mix-blend-multiply blur-3xl animate-pulse" />

      {/* Left Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex-1 space-y-6 text-center md:text-left z-10"
      >
        <h1 className="text-md md:text-5xl font-bold text-slate-900 dark:text-white leading-snug">
          <span className="">👋 Hey I'm </span>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
            Somnath
          </span>
        </h1>

        {/* Mobile Image Above Text */}
        <div className="flex justify-center md:hidden">
          <motion.div
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
          </motion.div>
        </div>

        <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-xl">
          <h1 className="text-4xl font-bold">Welcome to my digital space ✨</h1>{" "}
          <br />
          🚀 <span className="font-semibold">Frontend Developer</span>
        </p>

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
      </motion.div>

      {/* Right Image with Floating Glow (Desktop Only) */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="flex-1 justify-center relative z-10 hidden md:flex"
      >
        <motion.div
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
        </motion.div>
      </motion.div>
    </section>
  );
}
