"use client";

import React, { useRef } from "react";
import { motion, useReducedMotion } from "motion/react";
import { heroContent } from "@/content/home";
import { cn } from "@/lib/utils";

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      ref={containerRef}
      id="facturation-electronique"
      className="relative w-full py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-[#071626] via-[#0a2139] to-[#071626] text-white border-b border-bleu/30 overflow-hidden"
    >
      {/* Background ambient lighting - bleu & subtle or accents */}
      <div className="absolute top-0 left-1/4 -translate-x-1/2 w-[650px] h-[650px] bg-bleu/25 rounded-full blur-3xl pointer-events-none -z-0" />
      <div className="absolute bottom-0 right-10 w-[500px] h-[500px] bg-jaune-vif/10 rounded-full blur-3xl pointer-events-none -z-0" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-cyan-500/5 rounded-full blur-3xl pointer-events-none -z-0" />

      {/* Subtle background tech grid */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(96,165,250,0.08)_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none opacity-60" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Headline, Description & CTAs */}
          <div className="lg:col-span-7 flex flex-col">
            {/* H1 Title */}
            <motion.h1
              initial={shouldReduceMotion ? undefined : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-space-grotesk text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight"
            >
              {heroContent.title}
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={shouldReduceMotion ? undefined : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-blue-100/85 mt-4 leading-relaxed max-w-2xl font-normal"
            >
              {heroContent.description}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={shouldReduceMotion ? undefined : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 mt-7"
            >
              <motion.a
                whileHover={shouldReduceMotion ? undefined : { scale: 1.025 }}
                whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
                href={heroContent.partnerCta.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-jaune-vif text-[#0b1c30] hover:bg-jaune-citron font-extrabold text-sm shadow-lg shadow-jaune-vif/20 transition-all cursor-pointer"
              >
                <span>{heroContent.partnerCta.text}</span>
              </motion.a>

              <motion.a
                whileHover={shouldReduceMotion ? undefined : { scale: 1.025 }}
                whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
                href={heroContent.clientCta.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white border border-white/20 font-bold text-sm backdrop-blur-md transition-all cursor-pointer"
              >
                <span>{heroContent.clientCta.text}</span>
              </motion.a>
            </motion.div>
          </div>

          {/* Right Column: Horizontal Time Ladder strictly containing heroContent data */}
          <motion.div
            initial={shouldReduceMotion ? undefined : { opacity: 0, x: 25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 w-full flex flex-col justify-center lg:pl-6"
          >
            {/* Horizontal Timeline Track */}
            <div className="flex flex-col gap-3">
              {/* Row 1: The Nodes and Connecting Rail - perfectly vertically & horizontally centered */}
              <div className="grid grid-cols-2 gap-6 items-center relative">
                {/* Horizontal line running behind the beacons from center of node 1 to center of node 2 */}
                <div
                  className="absolute h-[2px] bg-gradient-to-r from-jaune-vif via-blue-400 to-cyan-400 pointer-events-none"
                  style={{
                    left: "18px",
                    width: "calc(50% + 12px)",
                  }}
                />

                {/* Node 1 */}
                <div className="flex items-center z-10">
                  <div className="w-9 h-9 rounded-full bg-[#071626] border-2 border-jaune-vif flex items-center justify-center shrink-0 shadow-md shadow-jaune-vif/20">
                    <span className="w-3 h-3 rounded-full bg-jaune-vif" />
                  </div>
                </div>

                {/* Node 2 */}
                <div className="flex items-center z-10">
                  <div className="w-9 h-9 rounded-full bg-[#071626] border-2 border-cyan-400 flex items-center justify-center shrink-0 shadow-md shadow-cyan-400/20">
                    <span className="w-3 h-3 rounded-full bg-cyan-400" />
                  </div>
                </div>
              </div>

              {/* Row 2: Milestone Text & Descriptions strictly from heroContent */}
              <div className="grid grid-cols-2 gap-6">
                {heroContent.milestones.map((milestone, idx) => (
                  <div key={milestone.year} className="flex flex-col items-start gap-1.5">
                    <span
                      className={cn(
                        "text-[10px] font-extrabold uppercase tracking-wider block",
                        idx === 0 ? "text-jaune-vif" : "text-cyan-300"
                      )}
                    >
                      {milestone.tag}
                    </span>
                    <span className="font-space-grotesk text-lg sm:text-xl font-extrabold text-white">
                      {milestone.day} {milestone.month} {milestone.year}
                    </span>
                    <h3 className="font-space-grotesk text-xs sm:text-sm font-bold text-white mt-1 leading-snug">
                      {milestone.title}
                    </h3>
                    <p className="text-[11px] sm:text-xs text-blue-100/70 leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
