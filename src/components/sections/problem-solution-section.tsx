"use client";

import React from "react";
import { motion, useReducedMotion } from "motion/react";
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

  return (
    <section className="w-full py-16 lg:py-24 bg-surface-container-low border-y border-outline-variant/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Side: Context & Problem statement */}
          <div className="lg:col-span-5 flex flex-col gap-6 lg:sticky lg:top-28">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-surface-container-high text-secondary text-xs font-bold uppercase tracking-wider w-fit">
              {problemSolutionContent.badge}
            </div>

            <h2 className="font-space-grotesk text-2xl sm:text-3xl lg:text-4xl text-on-surface font-bold tracking-tight leading-tight">
              {problemSolutionContent.title}
            </h2>

            <p className="text-sm sm:text-base text-on-surface-variant leading-relaxed">
              {problemSolutionContent.description}
            </p>

            <div className="p-5 sm:p-6 bg-surface-container-lowest rounded-2xl shadow-xs border border-outline-variant/30 mt-2">
              <div className="flex items-center gap-2.5 mb-2 text-secondary font-space-grotesk text-base font-bold">
                <CheckCircle className="w-5 h-5 text-secondary" />
                <span>{problemSolutionContent.guaranteeTitle}</span>
              </div>
              <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                {problemSolutionContent.guaranteeText}
              </p>
            </div>
          </div>

          {/* Right Side: 2x2 Solutions Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
            {problemSolutionContent.cards.map((card, index) => (
              <motion.div
                key={card.title}
                initial={shouldReduceMotion ? undefined : { opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
                whileHover={shouldReduceMotion ? undefined : { y: -4 }}
                className="bg-surface-container-lowest rounded-2xl p-6 sm:p-7 shadow-xs hover:shadow-md transition-all border border-outline-variant/30 flex flex-col gap-4"
              >
                <div
                  className={`w-12 h-12 rounded-xl ${card.accentBg} flex items-center justify-center`}
                >
                  {getCardIcon(card.icon)}
                </div>

                <h3 className="font-space-grotesk text-base sm:text-lg font-bold text-on-surface">
                  {card.title}
                </h3>

                <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                  {card.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
