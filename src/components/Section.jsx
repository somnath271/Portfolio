import { motion as Motion } from "framer-motion";
import { fadeUp } from "../animations/motionConfig";
import Container from "./Container";

export default function Section({ id, heading, sub, children, className = "" }) {
  return (
    <section id={id} className={`scroll-mt-28 py-12 sm:py-20 md:py-28 ${className}`}>
      <Container>
        <Motion.div {...fadeUp} className="mb-10 sm:mb-14">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-100 text-center">
            {heading}
          </h2>
          {sub && (
            <p className="mt-2 max-w-2xl mx-auto text-slate-600 dark:text-slate-300 text-center">
              {sub}
            </p>
          )}
        </Motion.div>
        {children}
      </Container>
    </section>
  );
}
