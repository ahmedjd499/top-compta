"use client";

import React from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { FileText, Phone } from "lucide-react";
import { finalCtaContent } from "@/content/home";

export function FinalCtaSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="w-full py-16 lg:py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={shouldReduceMotion ? undefined : { opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="bg-primary-container text-on-primary rounded-3xl p-6 sm:p-10 lg:p-14 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8 relative overflow-hidden border border-white/5"
        >
          {/* Luminous ambient floating gradient */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_20%,rgba(0,102,153,0.3),transparent_65%)] pointer-events-none" />

          <div className="flex flex-col gap-3 max-w-2xl text-center lg:text-left relative z-10">
            <h2 className="font-space-grotesk text-2xl sm:text-3xl lg:text-4xl font-bold text-on-primary tracking-tight">
              {finalCtaContent.title}
            </h2>
            <p className="text-sm sm:text-base text-inverse-on-surface/90">
              {finalCtaContent.description}
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 shrink-0 relative z-10">
            <motion.div
              whileHover={shouldReduceMotion ? undefined : { scale: 1.04, y: -2 }}
              whileTap={shouldReduceMotion ? undefined : { scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
            >
              <Link
                href={finalCtaContent.quoteButtonHref}
                className="px-6 sm:px-7 py-3.5 sm:py-4 rounded-xl bg-tertiary-fixed text-on-tertiary-fixed hover:brightness-110 text-xs sm:text-sm font-bold shadow-lg transition-all flex items-center gap-2"
              >
                <FileText className="w-4 h-4" />
                <span>{finalCtaContent.quoteButtonText}</span>
              </Link>
            </motion.div>

            <motion.div
              whileHover={shouldReduceMotion ? undefined : { scale: 1.04, y: -2 }}
              whileTap={shouldReduceMotion ? undefined : { scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
            >
              <a
                href={finalCtaContent.callButtonHref}
                className="px-6 sm:px-7 py-3.5 sm:py-4 rounded-xl bg-surface-variant/20 hover:bg-surface-variant/30 text-on-primary text-xs sm:text-sm font-bold transition-all flex items-center gap-2 backdrop-blur-sm border border-white/10"
              >
                <Phone className="w-4 h-4 text-secondary-fixed" />
                <span>{finalCtaContent.callButtonText}</span>
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

