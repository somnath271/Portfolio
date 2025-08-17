import { motion } from "framer-motion";
import Section from "./Section";
import { fadeUp } from "../animations/motionConfig";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaBootstrap,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaNodeJs,
} from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

export default function About() {
  return (
    <Section id="about" heading="About Me" sub="Who I am & What I do.">
      {/* Intro Heading */}
      <motion.h2
        {...fadeUp}
        className="text-2xl md:text-3xl font-bold text-indigo-600 text-center lg:mr-10"
      >
        Hi, I'm Somnath Bhattarai 👋
      </motion.h2>

      {/* About Text */}
      <motion.p
        {...fadeUp}
        className="mt-4 text-slate-600 dark:text-slate-300 max-w-3xl text-lg md:text-xl leading-loose text-justify lg:ml-22"
      >
        A passionate <span className="font-semibold">Frontend Developer</span>{" "}
        with a strong foundation in programming and a love for crafting
        interactive, user-friendly web experiences. I specialize in building
        clean, responsive, and visually engaging websites using modern
        technologies like <span className="font-semibold">React</span> and{" "}
        <span className="font-semibold">Tailwind CSS</span>.
        <br />
        <br />
        Beyond frontend, I'm expanding my skills in{" "}
        <span className="font-semibold">full-stack development</span>, working
        with backend integrations and APIs to deliver complete, scalable
        solutions. My goal is to create digital products that not only look
        great but also enhance usability and drive real engagement. 🚀
      </motion.p>

      {/* Skills Section */}
      <motion.h3
        {...fadeUp}
        className="mt-10 text-xl md:text-2xl font-semibold text-slate-900 dark:text-white text-center"
      >
        ⚡ Skills & Tools
      </motion.h3>

      {/* Skills Logos with Tooltip + Links */}
      <motion.div
        {...fadeUp}
        className="mt-6 flex flex-wrap justify-center gap-10 text-5xl text-slate-600 dark:text-slate-300"
      >
        {/* HTML5 */}
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5"
          target="_blank"
          rel="noopener noreferrer"
          className="relative group"
        >
          <FaHtml5 className="text-orange-500 hover:scale-110 transition-transform" />
          <span className="absolute -bottom-7 left-1/2 -translate-x-1/2 text-sm bg-slate-800 text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">
            HTML5
          </span>
        </a>

        {/* CSS3 */}
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/CSS"
          target="_blank"
          rel="noopener noreferrer"
          className="relative group"
        >
          <FaCss3Alt className="text-blue-500 hover:scale-110 transition-transform" />
          <span className="absolute -bottom-7 left-1/2 -translate-x-1/2 text-sm bg-slate-800 text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">
            CSS3
          </span>
        </a>

        {/* JavaScript */}
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
          target="_blank"
          rel="noopener noreferrer"
          className="relative group"
        >
          <FaJs className="text-yellow-400 hover:scale-110 transition-transform" />
          <span className="absolute -bottom-7 left-1/2 -translate-x-1/2 text-sm bg-slate-800 text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">
            JavaScript
          </span>
        </a>

        {/* Bootstrap */}
        <a
          href="https://getbootstrap.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="relative group"
        >
          <FaBootstrap className="text-purple-600 hover:scale-110 transition-transform" />
          <span className="absolute -bottom-7 left-1/2 -translate-x-1/2 text-sm bg-slate-800 text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">
            Bootstrap
          </span>
        </a>

        {/* Tailwind CSS */}
        <a
          href="https://tailwindcss.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="relative group"
        >
          <SiTailwindcss className="text-sky-400 hover:scale-110 transition-transform" />
          <span className="absolute -bottom-7 left-1/2 -translate-x-1/2 text-sm bg-slate-800 text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">
            TailwindCSS
          </span>
        </a>

        {/* React.js */}
        <a
          href="https://react.dev/"
          target="_blank"
          rel="noopener noreferrer"
          className="relative group"
        >
          <FaReact className="text-cyan-400 hover:scale-110 transition-transform" />
          <span className="absolute -bottom-7 left-1/2 -translate-x-1/2 text-sm bg-slate-800 text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">
            React.js
          </span>
        </a>

        {/* Git */}
        <a
          href="https://git-scm.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="relative group"
        >
          <FaGitAlt className="text-red-500 hover:scale-110 transition-transform" />
          <span className="absolute -bottom-7 left-1/2 -translate-x-1/2 text-sm bg-slate-800 text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">
            Git
          </span>
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="relative group"
        >
          <FaGithub className="hover:scale-110 transition-transform" />
          <span className="absolute -bottom-7 left-1/2 -translate-x-1/2 text-sm bg-slate-800 text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">
            GitHub
          </span>
        </a>

        {/* Node.js */}
        <a
          href="https://nodejs.org/"
          target="_blank"
          rel="noopener noreferrer"
          className="relative group"
        >
          <FaNodeJs className="text-green-600 hover:scale-110 transition-transform" />
          <span className="absolute -bottom-7 left-1/2 -translate-x-1/2 text-sm bg-slate-800 text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">
            Node.js
          </span>
        </a>
      </motion.div>
    </Section>
  );
}
