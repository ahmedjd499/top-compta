"use client";

import React, { useRef } from "react";
import {
  motion,
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
      className="relative w-full py-8 sm:py-12 lg:py-16 bg-surface overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Captivating Yellow / Amber Hero Container harmonized with logo */}
        <div className="bg-gradient-to-br from-[#e7b821] via-[#facc15] to-[#f59e0b] text-[#0b1c30] rounded-3xl p-6 sm:p-10 lg:p-14 shadow-2xl relative overflow-hidden border border-amber-200/60">
          {/* Subtle warm luminous overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.4),transparent_60%),radial-gradient(circle_at_80%_80%,rgba(180,83,9,0.2),transparent_60%)] pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Column: Key Messaging with Staggered Entrance */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="lg:col-span-7 flex flex-col gap-6"
            >
              {/* Clean Badge in Bleu Pétrole */}
              <motion.div
                variants={itemVariants}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0f3b5c]/10 text-[#0f3b5c] text-xs font-bold uppercase tracking-wider w-fit border border-[#0f3b5c]/20 backdrop-blur-xs shadow-2xs"
              >
                <ShieldCheck className="w-4 h-4 text-[#0f3b5c] shrink-0" />
                <span>{heroContent.badge}</span>
              </motion.div>

              <motion.h1
                variants={itemVariants}
                className="font-space-grotesk text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0a253a] leading-tight"
              >
                {heroContent.title}
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className="text-base sm:text-lg text-[#0f3b5c]/95 max-w-2xl leading-relaxed font-medium"
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
                        boxShadow: "0 12px 24px -6px rgba(15, 59, 92, 0.4)",
                      }
                  }
                  whileTap={shouldReduceMotion ? undefined : { scale: 0.97 }}
                  transition={{ type: "spring", stiffness: 350, damping: 20 }}
                  href={heroContent.partnerCta.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#0f3b5c] text-white hover:bg-[#22437f] text-sm font-bold shadow-xl transition-all cursor-pointer"
                >
                  <Sparkles className="w-4 h-4 text-[#facc15]" />
                  <span>{heroContent.partnerCta.text}</span>
                  <ExternalLink className="w-4 h-4 ml-0.5 opacity-80" />
                </motion.a>

                <motion.a
                  whileHover={
                    shouldReduceMotion
                      ? undefined
                      : {
                        scale: 1.03,
                        backgroundColor: "rgba(255, 255, 255, 1)",
                      }
                  }
                  whileTap={shouldReduceMotion ? undefined : { scale: 0.97 }}
                  transition={{ type: "spring", stiffness: 350, damping: 20 }}
                  href={heroContent.clientCta.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/95 text-[#0f3b5c] hover:bg-white text-sm font-bold transition-all shadow-md border border-[#0f3b5c]/15 cursor-pointer"
                >
                  <Lock className="w-4 h-4 text-[#22437f]" />
                  <span>{heroContent.clientCta.text}</span>
                </motion.a>
              </motion.div>

              {/* Integrated pipeline indicators */}
              <motion.div
                variants={itemVariants}
                className="flex flex-wrap items-center gap-4 pt-4 text-[#0f3b5c] text-xs font-bold border-t border-[#0f3b5c]/20"
              >
                <span className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#0f3b5c]" />
                  {heroContent.indicators[0]}
                </span>

                <span className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#0f3b5c]" />
                  {heroContent.indicators[1]}
                </span>

                <span className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#0f3b5c]" />
                  {heroContent.indicators[2]}
                </span>
              </motion.div>
            </motion.div>

            {/* Right Column: 2 Centered High-Contrast Milestone Cards */}
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
                      boxShadow: "0 20px 30px -10px rgba(15, 59, 92, 0.15)",
                    }
                }
                className="bg-white rounded-2xl p-6 shadow-xl border border-amber-200/80 transition-all hover:shadow-2xl cursor-default relative group flex flex-col items-center text-center"
              >
                {/* Date Pill in Bleu Pétrole with Jaune Vif Day */}
                <div className="flex flex-col items-center justify-center w-24 h-20 rounded-xl bg-[#0f3b5c] text-white p-2 text-center shadow-md mb-3">
                  <span className="font-space-grotesk text-xs uppercase font-bold leading-none text-[#e7b821]">
                    {heroContent.milestones[0].day}
                  </span>
                  <span className="text-xs leading-tight mt-1 opacity-90 text-white">
                    {heroContent.milestones[0].month}
                  </span>
                  <span className="font-space-grotesk text-xl font-extrabold leading-none mt-1 text-white">
                    {heroContent.milestones[0].year}
                  </span>
                </div>

                <div className="inline-flex items-center justify-center gap-1.5 text-[#b45309] text-xs font-bold uppercase tracking-wider mb-2">
                  <Inbox className="w-4 h-4 text-[#b45309]" />
                  <span>{heroContent.milestones[0].tag}</span>
                </div>

                <h3 className="font-space-grotesk text-lg text-[#0a253a] font-bold leading-snug mb-2 text-center">
                  {heroContent.milestones[0].title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed text-center">
                  {heroContent.milestones[0].description}
                </p>
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
                      boxShadow: "0 20px 30px -10px rgba(15, 59, 92, 0.15)",
                    }
                }
                className="bg-white rounded-2xl p-6 shadow-xl border border-amber-200/80 transition-all hover:shadow-2xl cursor-default relative group flex flex-col items-center text-center"
              >
                {/* Date Pill in Bleu Pétrole with Jaune Vif Day */}
                <div className="flex flex-col items-center justify-center w-24 h-20 rounded-xl bg-[#0f3b5c] text-white p-2 text-center shadow-md mb-3">
                  <span className="font-space-grotesk text-xs uppercase font-bold leading-none text-[#e7b821]">
                    {heroContent.milestones[1].day}
                  </span>
                  <span className="text-xs leading-tight mt-1 opacity-90 text-white">
                    {heroContent.milestones[1].month}
                  </span>
                  <span className="font-space-grotesk text-xl font-extrabold leading-none mt-1 text-white">
                    {heroContent.milestones[1].year}
                  </span>
                </div>

                <div className="inline-flex items-center justify-center gap-1.5 text-[#b45309] text-xs font-bold uppercase tracking-wider mb-2">
                  <Send className="w-4 h-4 text-[#b45309]" />
                  <span>{heroContent.milestones[1].tag}</span>
                </div>

                <h3 className="font-space-grotesk text-lg text-[#0a253a] font-bold leading-snug mb-2 text-center">
                  {heroContent.milestones[1].title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed text-center">
                  {heroContent.milestones[1].description}
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
