import { motion as Motion } from "framer-motion";
import { scaleIn } from "../animations/motionConfig";

export default function Card({ children, className = "" }) {
  return (
    <Motion.div
      {...scaleIn}
      className={`group relative rounded-2xl border border-slate-200/60 dark:border-slate-800/60 bg-white/70 dark:bg-slate-900/60 backdrop-blur p-6 shadow-sm hover:shadow-xl transition-all overflow-hidden ${className}`}
    >
      <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
        <div className="absolute -inset-20 bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-pink-500/10 blur-2xl" />
      </div>
      {children}
    </Motion.div>
  );
}
