"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import {
  ShieldCheck,
  ExternalLink,
  Cloud,
  FileCheck2,
  Inbox,
  Send,
  Lock,
} from "lucide-react";
import { heroContent } from "@/content/home";

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const card1Y = useTransform(scrollYProgress, [0, 1], shouldReduceMotion ? [0, 0] : [-12, 12]);
  const card2Y = useTransform(scrollYProgress, [0, 1], shouldReduceMotion ? [0, 0] : [12, -12]);

  return (
    <section
      ref={containerRef}
      id="facturation-electronique"
      className="relative w-full py-12 lg:py-20 bg-surface-bright overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-primary-container text-on-primary rounded-3xl p-6 sm:p-10 lg:p-14 shadow-2xl relative overflow-hidden">
          {/* Ambient decorative drifting glow elements */}
          <motion.div
            animate={
              shouldReduceMotion
                ? undefined
                : {
                    x: [0, 25, 0],
                    y: [0, -20, 0],
                    scale: [1, 1.08, 1],
                  }
            }
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -right-24 -top-24 w-96 h-96 bg-secondary/25 rounded-full blur-3xl pointer-events-none"
          />
          <motion.div
            animate={
              shouldReduceMotion
                ? undefined
                : {
                    x: [0, -20, 0],
                    y: [0, 20, 0],
                    scale: [1, 1.1, 1],
                  }
            }
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute right-1/3 -bottom-20 w-80 h-80 bg-tertiary-fixed-dim/15 rounded-full blur-2xl pointer-events-none"
          />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Column: Key Messaging */}
            <motion.div
              initial={shouldReduceMotion ? undefined : { opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="lg:col-span-7 flex flex-col gap-6"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-container-low/10 text-tertiary-fixed text-xs font-semibold w-fit backdrop-blur-md border border-white/10">
                <ShieldCheck className="w-4 h-4" />
                <span>{heroContent.badge}</span>
              </div>

              <h1 className="font-space-grotesk text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-on-primary leading-tight">
                {heroContent.title}
              </h1>

              <p className="text-base sm:text-lg text-inverse-on-surface/90 max-w-2xl leading-relaxed">
                {heroContent.description}
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href={heroContent.partnerCta.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-tertiary-fixed text-on-tertiary-fixed text-sm font-bold shadow-lg hover:brightness-110 active:scale-[0.97] transition-all"
                >
                  <ShieldCheck className="w-5 h-5 text-on-tertiary-fixed" />
                  <span>{heroContent.partnerCta.text}</span>
                  <ExternalLink className="w-4 h-4 ml-0.5 opacity-80" />
                </a>

                <a
                  href={heroContent.clientCta.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-surface-variant/20 hover:bg-surface-variant/30 text-on-primary text-sm font-semibold transition-all backdrop-blur-sm border border-white/10 active:scale-[0.97]"
                >
                  <Lock className="w-4 h-4 text-secondary-fixed" />
                  <span>{heroContent.clientCta.text}</span>
                </a>
              </div>

              {/* Integrated pipeline indicators */}
              <div className="flex flex-wrap items-center gap-3 pt-4 text-inverse-on-surface/75 text-xs font-medium border-t border-white/10">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-secondary-fixed" />
                  {heroContent.indicators[0]}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-tertiary-fixed" />
                  {heroContent.indicators[1]}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-secondary-container" />
                  {heroContent.indicators[2]}
                </span>
              </div>
            </motion.div>

            {/* Right Column: 2 High-Tech Legal Milestones Cards */}
            <div className="lg:col-span-5 flex flex-col gap-5">
              {/* Milestone 1: 2026 */}
              <motion.div
                style={{ y: card1Y }}
                initial={shouldReduceMotion ? undefined : { opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
                className="bg-surface-container-lowest/10 backdrop-blur-md rounded-2xl p-5 sm:p-6 border border-white/15 shadow-md hover:bg-surface-container-lowest/15 transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="flex flex-col items-center justify-center shrink-0 w-20 h-20 rounded-xl bg-secondary text-on-secondary p-2 text-center shadow-inner">
                    <span className="font-space-grotesk text-xs uppercase font-bold leading-none">
                      {heroContent.milestones[0].day}
                    </span>
                    <span className="text-[11px] leading-tight mt-1 opacity-90">
                      {heroContent.milestones[0].month}
                    </span>
                    <span className="font-space-grotesk text-lg font-bold leading-none mt-1">
                      {heroContent.milestones[0].year}
                    </span>
                  </div>
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
                style={{ y: card2Y }}
                initial={shouldReduceMotion ? undefined : { opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                className="bg-surface-container-lowest/10 backdrop-blur-md rounded-2xl p-5 sm:p-6 border border-white/15 shadow-md hover:bg-surface-container-lowest/15 transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="flex flex-col items-center justify-center shrink-0 w-20 h-20 rounded-xl bg-primary-container border border-tertiary-fixed/30 text-tertiary-fixed p-2 text-center shadow-inner">
                    <span className="font-space-grotesk text-xs uppercase font-bold leading-none">
                      {heroContent.milestones[1].day}
                    </span>
                    <span className="text-[11px] leading-tight mt-1 opacity-90">
                      {heroContent.milestones[1].month}
                    </span>
                    <span className="font-space-grotesk text-lg font-bold leading-none mt-1">
                      {heroContent.milestones[1].year}
                    </span>
                  </div>
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
