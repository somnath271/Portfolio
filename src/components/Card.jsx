import { motion } from "framer-motion";
import { scaleIn } from "../animations/motionConfig";

export default function Card({ children, className = "" }) {
  return (
    <motion.div
      {...scaleIn}
      className={`group rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/60 backdrop-blur p-6 shadow-sm hover:shadow-md transition-shadow ${className}`}
    >
      {children}
    </motion.div>
  );
}
