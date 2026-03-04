import { motion as Motion } from "framer-motion";
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
    <Section
      id="about"
      heading="About Me"
      sub="Who I am & What I do."
      className="pt-6 md:pt-10"
    >
      {/* Intro Heading */}
      <Motion.h2
        {...fadeUp}
        className="text-2xl md:text-3xl font-bold text-indigo-600 text-center lg:mr-10"
      >
        Hi, I'm Somnath Bhattarai
      </Motion.h2>

      {/* About Text */}
      <Motion.p
        {...fadeUp}
        className="mt-4 text-slate-600 dark:text-slate-300 max-w-3xl mx-auto text-lg md:text-xl leading-loose text-justify"
      >
        A <span className="font-semibold">Frontend Developer</span> focused on
        building scalable, maintainable, and user-friendly web interfaces using{" "}
        <span className="font-semibold">React.js</span> and modern{" "}
        <span className="font-semibold">JavaScript</span>.
        <br />I specialise in:
        <ul className="list-disc ml-5 mt-2 space-y-1">
          <li className="pl-2 text-justify">
            Converting UI/UX designs into reusable React components
          </li>
          <li className="pl-2 text-justify">
            Integrating REST APIs into production-ready applications
          </li>
          <li className="pl-2 text-justify">
            Optimising performance and responsiveness across devices
          </li>
          <li className="pl-2 text-justify">
            Writing clean, modular, maintainable code
          </li>
        </ul>
        I've developed interactive web applications, real-time tools, and
        UI-driven platforms. I enjoy collaborating with teams and supporting
        agencies, startups, and companies on meaningful projects.
        <br />
        I'm open to remote frontend roles and internships, eager to learn and
        contribute effectively.
      </Motion.p>

      {/* Skills Section */}
      <Motion.h3
        {...fadeUp}
        className="mt-10 text-xl md:text-2xl font-semibold text-slate-900 dark:text-white text-center"
      >
        ⚡ Skills & Tools
      </Motion.h3>

      {/* Skills Logos with Tooltip + Links */}
      <Motion.div
        {...fadeUp}
        className="mt-6 flex flex-wrap justify-center gap-12 text-6xl md:text-7xl text-slate-600 dark:text-slate-300"
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
      </Motion.div>
    </Section>
  );
}
