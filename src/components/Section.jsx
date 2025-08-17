import { motion } from "framer-motion";
import { fadeUp } from "../animations/motionConfig";
import Container from "./Container";

export default function Section({ id, heading, sub, children }) {
  return (
    <section id={id} className="scroll-mt-28 py-20 sm:py-28">
      <Container>
        <motion.div {...fadeUp} className="mb-10 sm:mb-14">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-100 text-center">
            {heading}
          </h2>
          {sub && (
            <p className="mt-2 max-w-2xl text-slate-600 dark:text-slate-300 text-center lg:ml-50">
              {sub}
            </p>
          )}
        </motion.div>
        {children}
      </Container>
    </section>
  );
}
