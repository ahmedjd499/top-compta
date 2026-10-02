"use client";

import React from "react";
import { motion, useReducedMotion, type Variants } from "motion/react";
import {
  FolderOpen,
  Clock,
  LineChart,
  MessageSquareWarning,
  CheckCircle,
} from "lucide-react";
import { problemSolutionContent } from "@/content/home";

export function ProblemSolutionSection() {
  const shouldReduceMotion = useReducedMotion();

  const getCardIcon = (iconName: string) => {
    switch (iconName) {
      case "folder_open":
        return <FolderOpen className="w-6 h-6 text-on-secondary-fixed" />;
      case "schedule":
        return <Clock className="w-6 h-6 text-on-tertiary-fixed" />;
      case "query_stats":
        return <LineChart className="w-6 h-6 text-secondary" />;
      default:
        return <MessageSquareWarning className="w-6 h-6 text-on-secondary-fixed" />;
    }
  };

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

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 35 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.75,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  return (
    <section className="w-full py-16 lg:py-24 bg-surface-container-low border-y border-outline-variant/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Side: Context & Problem statement */}
          <motion.div
            initial={shouldReduceMotion ? undefined : { opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 flex flex-col gap-6 lg:sticky lg:top-28"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-surface-container-high text-secondary text-xs font-bold uppercase tracking-wider w-fit">
              {problemSolutionContent.badge}
            </div>

            <h2 className="font-space-grotesk text-2xl sm:text-3xl lg:text-4xl text-on-surface font-bold tracking-tight leading-tight">
              {problemSolutionContent.title}
            </h2>

            <p className="text-sm sm:text-base text-on-surface-variant leading-relaxed">
              {problemSolutionContent.description}
            </p>

          </motion.div>

          {/* Right Side: 2x2 Solutions Cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6"
          >
            {problemSolutionContent.cards.map((card) => (
              <motion.div
                key={card.title}
                variants={cardVariants}
                whileHover={
                  shouldReduceMotion
                    ? undefined
                    : {
                        y: -6,
                        scale: 1.015,
                        transition: { type: "spring", stiffness: 350, damping: 20 },
                      }
                }
                className="bg-surface-container-lowest rounded-2xl p-6 sm:p-7 shadow-xs hover:shadow-lg transition-all border border-outline-variant/30 hover:border-secondary/40 flex flex-col gap-4 group cursor-default"
              >
                <motion.div
                  whileHover={shouldReduceMotion ? undefined : { scale: 1.12, rotate: -4 }}
                  transition={{ type: "spring", stiffness: 400, damping: 15 }}
                  className={`w-12 h-12 rounded-xl ${card.accentBg} flex items-center justify-center transition-transform`}
                >
                  {getCardIcon(card.icon)}
                </motion.div>

                <h3 className="font-space-grotesk text-base sm:text-lg font-bold text-on-surface group-hover:text-secondary transition-colors">
                  {card.title}
                </h3>

                <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                  {card.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
