import { motion as Motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function AnimatedSection({ children }) {
  const { ref, inView } = useInView({
    triggerOnce: false, // runs animation every time it's visible
    threshold: 0.2,     // 20% visible triggers animation
  });

  return (
    <Motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {children}
    </Motion.div>
  );
}
