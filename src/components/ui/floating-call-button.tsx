"use client";

import React, { useState } from "react";
import { motion, useReducedMotion, AnimatePresence } from "motion/react";
import { PhoneCall } from "lucide-react";
import { siteConfig } from "@/content/site";
import { cn } from "@/lib/utils";

export function FloatingCallButton() {
  const shouldReduceMotion = useReducedMotion();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="fixed bottom-34 right-4 sm:bottom-38 sm:right-6 lg:bottom-24 lg:right-8 z-40 flex items-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Desktop expanding label tooltip */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, x: 10, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, x: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="hidden lg:flex items-center gap-2 mr-3 px-3.5 py-2 rounded-full bg-surface-container-lowest/95 backdrop-blur-md border border-secondary/30 shadow-lg text-on-surface select-none pointer-events-none"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs font-medium text-on-surface-variant">
              Besoin d&apos;un conseil ?
            </span>
            <span className="text-xs font-bold text-secondary font-space-grotesk">
              {siteConfig.phone}
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Floating Call Button */}
      <motion.a
        href={siteConfig.phoneHref}
        aria-label={`Appelez TOP-COMPTA au ${siteConfig.phone}`}
        initial={shouldReduceMotion ? undefined : { scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 350, damping: 20, delay: 0.4 }}
        whileHover={shouldReduceMotion ? undefined : { scale: 1.08 }}
        whileTap={{ scale: 0.94 }}
        className={cn(
          "relative w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-secondary text-on-secondary flex items-center justify-center shadow-[0_8px_24px_rgba(55,85,195,0.4)] hover:shadow-[0_12px_32px_rgba(55,85,195,0.55)] border border-white/20 transition-all duration-300 focus:outline-none focus-visible:ring-4 focus-visible:ring-secondary/40 group"
        )}
      >
        {/* Subtle breathing ripple ping */}
        {!shouldReduceMotion && (
          <span className="absolute -inset-1 rounded-full bg-secondary/25 animate-ping pointer-events-none" />
        )}

        {/* Live availability badge */}
        <span
          className="absolute -top-0.5 -right-0.5 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-surface shadow-2xs"
          title="Conseillers disponibles"
        />

        {/* Telephone icon with gentle hover animation */}
        <motion.div
          animate={isHovered && !shouldReduceMotion ? { rotate: [0, -12, 12, -8, 8, 0] } : {}}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <PhoneCall className="w-5 h-5 sm:w-6 sm:h-6 transition-transform group-hover:scale-105" />
        </motion.div>
      </motion.a>
    </div>
  );
}
