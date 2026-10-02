"use client";

import React from "react";
import { motion, useScroll, useReducedMotion } from "motion/react";

export function ScrollProgress() {
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();

  if (shouldReduceMotion) return null;

  return (
    <motion.div
      style={{ scaleX: scrollYProgress }}
      className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-secondary via-secondary-container to-tertiary-fixed origin-left z-[60] pointer-events-none shadow-[0_0_12px_rgba(55,85,195,0.6)] will-change-transform"
    />
  );
}
