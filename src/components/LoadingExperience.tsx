import { motion } from "framer-motion";

export function LoadingExperience() {
  return (
    <motion.div
      className="loading-experience"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
      aria-hidden="true"
    >
      <div className="loading-experience__mark">
        <motion.span
          className="loading-experience__name"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.42, delay: 0.04, ease: [0.22, 1, 0.36, 1] }}
        >
          ANSHUL
        </motion.span>
        <motion.span
          className="loading-experience__rule"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.34, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </motion.div>
  );
}
