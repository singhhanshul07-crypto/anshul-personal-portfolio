import type { Variants } from "framer-motion";

const cinematicEase = [0.22, 1, 0.36, 1] as const;

const cinematicTransition = {
  duration: 0.58,
  ease: cinematicEase,
};

export const heroTitle: Variants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.12,
      staggerChildren: 0.09,
    },
  },
};

export const heroLetter: Variants = {
  hidden: { opacity: 0, y: "105%" },
  visible: {
    opacity: 1,
    y: "0%",
    transition: { duration: 0.76, ease: cinematicEase },
  },
};

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: cinematicTransition,
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: cinematicTransition },
};

export const textReveal: Variants = {
  hidden: { clipPath: "inset(0 0 100% 0)", y: 12 },
  visible: {
    clipPath: "inset(0 0 0% 0)",
    y: 0,
    transition: { ...cinematicTransition, duration: 0.72 },
  },
};

export const imageReveal: Variants = {
  hidden: { clipPath: "inset(100% 0 0 0)", scale: 1.08 },
  visible: {
    clipPath: "inset(0% 0 0 0)",
    scale: 1,
    transition: { ...cinematicTransition, duration: 0.82 },
  },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.94 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: cinematicTransition,
  },
};

export const slideIn: Variants = {
  hidden: { opacity: 0, x: 28 },
  visible: {
    opacity: 1,
    x: 0,
    transition: cinematicTransition,
  },
};

export const blurReveal: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: cinematicTransition,
  },
};

export const staggerChildren: Variants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.08,
      staggerChildren: 0.075,
    },
  },
};

export const gentleHover: Variants = {
  rest: { y: 0, scale: 1 },
  hover: {
    y: -3,
    scale: 1.01,
    transition: { duration: 0.24, ease: cinematicEase },
  },
};
