"use client";

import React, { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
  type Variants,
} from "motion/react";
import {
  ShieldCheck,
  ExternalLink,
  Inbox,
  Send,
  Lock,
  Sparkles,
} from "lucide-react";
import { heroContent } from "@/content/home";

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  return (
    <section
      ref={containerRef}
      id="facturation-electronique"
      className="relative w-full py-12 lg:py-20 bg-surface-container-low overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-primary-container text-on-primary rounded-3xl p-6 sm:p-10 lg:p-14 shadow-2xl relative overflow-hidden border border-white/5">
          {/* Luminous sovereign ambient glow - hardware accelerated static gradient */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_15%,rgba(0,102,153,0.3),transparent_55%),radial-gradient(circle_at_20%_90%,rgba(217,119,6,0.18),transparent_50%)] pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Column: Key Messaging with Staggered Entrance */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="lg:col-span-7 flex flex-col gap-6"
            >
              {/* Shimmering Badge */}
              <motion.div
                variants={itemVariants}
                className="relative inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-container-low/10 text-tertiary-fixed text-xs font-semibold w-fit backdrop-blur-md border border-white/10 overflow-hidden group shadow-xs"
              >
                <motion.div
                  animate={
                    shouldReduceMotion
                      ? undefined
                      : { x: ["-100%", "200%"] }
                  }
                  transition={{
                    duration: 3.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    repeatDelay: 2,
                  }}
                  className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"
                />
                <ShieldCheck className="w-4 h-4 text-tertiary-fixed shrink-0" />
                <span className="relative z-10">{heroContent.badge}</span>
              </motion.div>

              <motion.h1
                variants={itemVariants}
                className="font-space-grotesk text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-on-primary leading-tight"
              >
                {heroContent.title}
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className="text-base sm:text-lg text-inverse-on-surface/90 max-w-2xl leading-relaxed"
              >
                {heroContent.description}
              </motion.p>

              <motion.div
                variants={itemVariants}
                className="flex flex-wrap items-center gap-4 pt-2"
              >
                <motion.a
                  whileHover={
                    shouldReduceMotion
                      ? undefined
                      : {
                        scale: 1.03,
                        boxShadow: "0 12px 24px -6px rgba(217, 119, 6, 0.4)",
                      }
                  }
                  whileTap={shouldReduceMotion ? undefined : { scale: 0.97 }}
                  transition={{ type: "spring", stiffness: 350, damping: 20 }}
                  href={heroContent.partnerCta.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-tertiary-fixed text-on-tertiary-fixed text-sm font-bold shadow-lg hover:brightness-110 transition-all cursor-pointer"
                >
                  <Sparkles className="w-4 h-4 text-on-tertiary-fixed" />
                  <span>{heroContent.partnerCta.text}</span>
                  <ExternalLink className="w-4 h-4 ml-0.5 opacity-80" />
                </motion.a>

                <motion.a
                  whileHover={
                    shouldReduceMotion
                      ? undefined
                      : {
                        scale: 1.03,
                        backgroundColor: "rgba(255, 255, 255, 0.15)",
                      }
                  }
                  whileTap={shouldReduceMotion ? undefined : { scale: 0.97 }}
                  transition={{ type: "spring", stiffness: 350, damping: 20 }}
                  href={heroContent.clientCta.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-surface-variant/20 text-on-primary text-sm font-semibold transition-all backdrop-blur-sm border border-white/10 cursor-pointer"
                >
                  <Lock className="w-4 h-4 text-secondary-fixed" />
                  <span>{heroContent.clientCta.text}</span>
                </motion.a>
              </motion.div>

              {/* Integrated pipeline indicators with vivid pulsing glow */}
              <motion.div
                variants={itemVariants}
                className="flex flex-wrap items-center gap-4 pt-4 text-inverse-on-surface/80 text-xs font-medium border-t border-white/10"
              >
                <span className="flex items-center gap-2">
                  <span className="relative flex h-2.5 w-2.5 items-center justify-center">
                    <motion.span
                      animate={
                        shouldReduceMotion
                          ? undefined
                          : { scale: [1, 2.2, 2.2], opacity: [0.9, 0, 0] }
                      }
                      transition={{
                        duration: 2.2,
                        repeat: Infinity,
                        ease: "easeOut",
                      }}
                      className="absolute h-full w-full rounded-full bg-secondary-fixed"
                    />
                    <motion.span
                      animate={
                        shouldReduceMotion
                          ? undefined
                          : { scale: [1, 1.2, 1], opacity: [0.8, 1, 0.8] }
                      }
                      transition={{
                        duration: 2.2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="relative h-2 w-2 rounded-full bg-secondary-fixed shadow-[0_0_8px_rgba(221,225,255,0.9)]"
                    />
                  </span>
                  {heroContent.indicators[0]}
                </span>

                <span className="flex items-center gap-2">
                  <span className="relative flex h-2.5 w-2.5 items-center justify-center">
                    <motion.span
                      animate={
                        shouldReduceMotion
                          ? undefined
                          : { scale: [1, 2.2, 2.2], opacity: [0.9, 0, 0] }
                      }
                      transition={{
                        duration: 2.2,
                        repeat: Infinity,
                        ease: "easeOut",
                        delay: 0.7,
                      }}
                      className="absolute h-full w-full rounded-full bg-tertiary-fixed"
                    />
                    <motion.span
                      animate={
                        shouldReduceMotion
                          ? undefined
                          : { scale: [1, 1.2, 1], opacity: [0.8, 1, 0.8] }
                      }
                      transition={{
                        duration: 2.2,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 0.7,
                      }}
                      className="relative h-2 w-2 rounded-full bg-tertiary-fixed shadow-[0_0_8px_rgba(255,220,195,0.9)]"
                    />
                  </span>
                  {heroContent.indicators[1]}
                </span>

                <span className="flex items-center gap-2">
                  <span className="relative flex h-2.5 w-2.5 items-center justify-center">
                    <motion.span
                      animate={
                        shouldReduceMotion
                          ? undefined
                          : { scale: [1, 2.2, 2.2], opacity: [0.9, 0, 0] }
                      }
                      transition={{
                        duration: 2.2,
                        repeat: Infinity,
                        ease: "easeOut",
                        delay: 1.4,
                      }}
                      className="absolute h-full w-full rounded-full bg-emerald-400"
                    />
                    <motion.span
                      animate={
                        shouldReduceMotion
                          ? undefined
                          : { scale: [1, 1.2, 1], opacity: [0.8, 1, 0.8] }
                      }
                      transition={{
                        duration: 2.2,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1.4,
                      }}
                      className="relative h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.9)]"
                    />
                  </span>
                  {heroContent.indicators[2]}
                </span>
              </motion.div>
            </motion.div>

            {/* Right Column: 2 Interactive High-Tech Milestone Cards */}
            <div className="lg:col-span-5 flex flex-col gap-5">
              {/* Milestone 1: 2026 */}
              <motion.div
                initial={shouldReduceMotion ? undefined : { opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.85,
                  delay: 0.15,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={
                  shouldReduceMotion
                    ? undefined
                    : {
                      scale: 1.02,
                      y: -3,
                      boxShadow: "0 20px 30px -10px rgba(55, 85, 195, 0.3)",
                    }
                }
                className="bg-surface-container-lowest/10 backdrop-blur-md rounded-2xl p-5 sm:p-6 border border-white/15 shadow-md transition-colors hover:bg-surface-container-lowest/15 cursor-default relative group overflow-hidden"
              >
                <div className="flex items-start gap-4">
                  <motion.div
                    whileHover={
                      shouldReduceMotion ? undefined : { rotate: [0, -3, 3, 0] }
                    }
                    transition={{ duration: 0.4 }}
                    className="flex flex-col items-center justify-center shrink-0 w-20 h-20 rounded-xl bg-secondary text-on-secondary p-2 text-center shadow-inner"
                  >
                    <span className="font-space-grotesk text-xs uppercase font-bold leading-none">
                      {heroContent.milestones[0].day}
                    </span>
                    <span className="text-xs leading-tight mt-1 opacity-90">
                      {heroContent.milestones[0].month}
                    </span>
                    <span className="font-space-grotesk text-lg font-bold leading-none mt-1">
                      {heroContent.milestones[0].year}
                    </span>
                  </motion.div>
                  <div className="flex flex-col gap-1">
                    <div className="inline-flex items-center gap-1.5 text-tertiary-fixed text-xs font-bold uppercase tracking-wider">
                      <Inbox className="w-4 h-4" />
                      <span>{heroContent.milestones[0].tag}</span>
                    </div>
                    <h3 className="font-space-grotesk text-base text-on-primary font-bold leading-snug">
                      {heroContent.milestones[0].title}
                    </h3>
                    <p className="text-xs text-inverse-on-surface/85 leading-relaxed">
                      {heroContent.milestones[0].description}
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Milestone 2: 2027 */}
              <motion.div
                initial={shouldReduceMotion ? undefined : { opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.85,
                  delay: 0.3,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={
                  shouldReduceMotion
                    ? undefined
                    : {
                      scale: 1.02,
                      y: -3,
                      boxShadow: "0 20px 30px -10px rgba(15, 23, 42, 0.5)",
                    }
                }
                className="bg-surface-container-lowest/10 backdrop-blur-md rounded-2xl p-5 sm:p-6 border border-white/15 shadow-md transition-colors hover:bg-surface-container-lowest/15 cursor-default relative group overflow-hidden"
              >
                <div className="flex items-start gap-4">
                  <motion.div
                    whileHover={
                      shouldReduceMotion ? undefined : { rotate: [0, -3, 3, 0] }
                    }
                    transition={{ duration: 0.4 }}
                    className="flex flex-col items-center justify-center shrink-0 w-20 h-20 rounded-xl bg-primary-container border border-tertiary-fixed/30 text-tertiary-fixed p-2 text-center shadow-inner"
                  >
                    <span className="font-space-grotesk text-xs uppercase font-bold leading-none">
                      {heroContent.milestones[1].day}
                    </span>
                    <span className="text-xs leading-tight mt-1 opacity-90">
                      {heroContent.milestones[1].month}
                    </span>
                    <span className="font-space-grotesk text-lg font-bold leading-none mt-1">
                      {heroContent.milestones[1].year}
                    </span>
                  </motion.div>
                  <div className="flex flex-col gap-1">
                    <div className="inline-flex items-center gap-1.5 text-secondary-fixed text-xs font-bold uppercase tracking-wider">
                      <Send className="w-4 h-4" />
                      <span>{heroContent.milestones[1].tag}</span>
                    </div>
                    <h3 className="font-space-grotesk text-base text-on-primary font-bold leading-snug">
                      {heroContent.milestones[1].title}
                    </h3>
                    <p className="text-xs text-inverse-on-surface/85 leading-relaxed">
                      {heroContent.milestones[1].description}
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
