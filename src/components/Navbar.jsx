import { useState, useEffect } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import {  Menu, X, Home, User, Code, Mail } from "lucide-react";
import { FaGithub } from "react-icons/fa";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = [
    { to: "hero", label: "Home", icon: <Home size={18} /> },
    { to: "about", label: "About", icon: <User size={18} /> },
    { to: "projects", label: "Projects", icon: <Code size={18} /> },
    { to: "contact", label: "Contact", icon: <Mail size={18} /> },
  ];

  return (
    <>
      {/* Desktop Navbar (hidden on mobile) */}
      <header className="hidden md:block fixed inset-x-0 top-0 z-50">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mt-4 rounded-2xl border border-slate-200/80 dark:border-slate-800/70 bg-white/70 dark:bg-slate-900/60 backdrop-blur shadow-sm">
            <div className="flex items-center justify-between px-4 py-3">
              {/* Logo */}
              <button
                onClick={() => scroll.scrollToTop({ duration: 600 })}
                className="text-sm font-semibold tracking-tight"
              >
                <span className="text-slate-900 dark:text-slate-100">
                  Somnath
                </span>
                <span className="text-indigo-600 dark:text-indigo-400">
                  .dev
                </span>
              </button>

              {/* Desktop nav */}
              <nav className="hidden md:flex items-center gap-6 text-sm">
                {navItems.map((n) => (
                  <Link
                    key={n.to}
                    to={n.to}
                    spy
                    smooth
                    offset={-96}
                    duration={500}
                    className="cursor-pointer text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
                  >
                    {n.label}
                  </Link>
                ))}
                <a
                  href="https://github.com/somnath271"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-200 dark:border-slate-700 px-3 py-1.5 text-sm font-medium hover:bg-slate-50 dark:hover:bg-slate-800"
                >
                  <FaGithub className="h-4 w-4" /> GitHub
                </a>
              </nav>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Bottom Navbar */}
      <nav className="md:hidden fixed bottom-0 inset-x-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur border-t border-slate-200 dark:border-slate-700">
        <div className="flex justify-around items-center py-2">
          {navItems.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              spy
              smooth
              offset={-96}
              duration={500}
              className="flex flex-col items-center text-xs text-slate-600 dark:text-slate-300 hover:text-indigo-500"
            >
              {n.icon}
              {n.label}
            </Link>
          ))}
        </div>
      </nav>
    </>
  );
}
