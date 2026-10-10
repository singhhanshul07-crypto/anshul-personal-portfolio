import { motion, useScroll } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <div className="scroll-progress" aria-hidden="true">
      <motion.div className="scroll-progress__bar" style={{ scaleX: scrollYProgress }} />
    </div>
  );
}
