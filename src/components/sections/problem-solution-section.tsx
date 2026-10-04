"use client";

import React, { useState } from "react";
import { motion, useReducedMotion, type Variants } from "motion/react";
import {
  FolderOpen,
  Clock,
  LineChart,
  MessageSquareWarning,
  Workflow,
  Sparkles,
  Layers,
  CheckCircle2,
  ArrowRight,
  RotateCw,
} from "lucide-react";
import { problemSolutionContent } from "@/content/home";
import { cn } from "@/lib/utils";

export function ProblemSolutionSection() {
  const shouldReduceMotion = useReducedMotion();
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const getCardIcon = (iconName: string) => {
    switch (iconName) {
      case "folder_open":
        return <FolderOpen className="w-5 h-5 text-secondary" />;
      case "schedule":
        return <Clock className="w-5 h-5 text-amber-700" />;
      case "query_stats":
        return <LineChart className="w-5 h-5 text-emerald-700" />;
      default:
        return <MessageSquareWarning className="w-5 h-5 text-purple-700" />;
    }
  };

  const cardAccents = [
    "bg-blue-100 text-secondary border border-blue-200/60",
    "bg-amber-100 text-amber-700 border border-amber-200/60",
    "bg-emerald-100 text-emerald-700 border border-emerald-200/60",
    "bg-purple-100 text-purple-700 border border-purple-200/60",
  ];

  const cardsWithMetadata = problemSolutionContent.cards.map((card, idx) => ({
    ...card,
    accentBg: cardAccents[idx % cardAccents.length],
    number: `0${idx + 1}`,
    quadrant: idx === 0 ? "top-left" : idx === 1 ? "top-right" : idx === 2 ? "bottom-right" : "bottom-left",
    stepName:
      idx === 0
        ? "1. Centralisation"
        : idx === 1
        ? "2. Planification"
        : idx === 2
        ? "3. Visibilité"
        : "4. Traçabilité",
  }));

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, scale: shouldReduceMotion ? 1 : 0.94, y: shouldReduceMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  return (
    <section
      aria-labelledby="problem-solution-heading"
      className="w-full py-16 lg:py-24 bg-surface-container-low border-y border-outline-variant/20 relative overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-secondary/5 rounded-full blur-3xl pointer-events-none -z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header (Centered) */}
        <motion.div
          initial={shouldReduceMotion ? undefined : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-3xl mx-auto mb-12 lg:mb-16 flex flex-col items-center gap-4"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-container-high border border-secondary/20 text-secondary text-xs font-bold uppercase tracking-wider shadow-2xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{problemSolutionContent.badge}</span>
          </div>

          <h2
            id="problem-solution-heading"
            className="font-space-grotesk text-2xl sm:text-3xl lg:text-4xl text-on-surface font-bold tracking-tight leading-tight"
          >
            {problemSolutionContent.title}
          </h2>

          <p className="text-sm sm:text-base text-on-surface-variant leading-relaxed max-w-2xl">
            {problemSolutionContent.description}
          </p>
        </motion.div>

        {/* ========================================================================= */}
        {/* DESKTOP CIRCULAR ORBITAL LAYOUT (lg & above)                             */}
        {/* ========================================================================= */}
        <div className="hidden lg:block relative max-w-5xl mx-auto min-h-[580px] my-4">
          {/* Orbital Circle SVG Layer */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
            <svg
              className="w-[620px] h-[620px] text-outline-variant/30"
              viewBox="0 0 620 620"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Outer Decorative Glow Ring */}
              <circle
                cx="310"
                cy="310"
                r="285"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeDasharray="4 6"
                className="opacity-40"
              />

              {/* Main Orbital Track */}
              <circle
                cx="310"
                cy="310"
                r="220"
                stroke="currentColor"
                strokeWidth="2"
                strokeDasharray="6 8"
                className="opacity-60 text-secondary/40"
              />

              {/* Inner Focus Ring */}
              <circle
                cx="310"
                cy="310"
                r="150"
                stroke="currentColor"
                strokeWidth="1"
                className="opacity-25"
              />

              {/* Rotating Dashed Orbit Ring */}
              {!shouldReduceMotion && (
                <g className="animate-[spin_60s_linear_infinite] origin-[310px_310px]">
                  <circle
                    cx="310"
                    cy="310"
                    r="220"
                    stroke="#3755c3"
                    strokeWidth="2.5"
                    strokeDasharray="25 180"
                    strokeLinecap="round"
                    className="opacity-70"
                  />
                  <circle cx="310" cy="90" r="4.5" fill="#3755c3" />
                  <circle cx="310" cy="530" r="4" fill="#708cfd" />
                </g>
              )}

              {/* Quadrant Connecting Beams to Cards */}
              {/* Top-Left Beam (Idx 0) */}
              <line
                x1="200"
                y1="200"
                x2="100"
                y2="100"
                stroke={hoveredCard === 0 ? "#3755c3" : "currentColor"}
                strokeWidth={hoveredCard === 0 ? "2.5" : "1.5"}
                strokeDasharray={hoveredCard === 0 ? "none" : "3 3"}
                className={cn(
                  "transition-all duration-300",
                  hoveredCard === 0 ? "opacity-100" : "opacity-30"
                )}
              />
              {/* Top-Right Beam (Idx 1) */}
              <line
                x1="420"
                y1="200"
                x2="520"
                y2="100"
                stroke={hoveredCard === 1 ? "#3755c3" : "currentColor"}
                strokeWidth={hoveredCard === 1 ? "2.5" : "1.5"}
                strokeDasharray={hoveredCard === 1 ? "none" : "3 3"}
                className={cn(
                  "transition-all duration-300",
                  hoveredCard === 1 ? "opacity-100" : "opacity-30"
                )}
              />
              {/* Bottom-Right Beam (Idx 2) */}
              <line
                x1="420"
                y1="420"
                x2="520"
                y2="520"
                stroke={hoveredCard === 2 ? "#3755c3" : "currentColor"}
                strokeWidth={hoveredCard === 2 ? "2.5" : "1.5"}
                strokeDasharray={hoveredCard === 2 ? "none" : "3 3"}
                className={cn(
                  "transition-all duration-300",
                  hoveredCard === 2 ? "opacity-100" : "opacity-30"
                )}
              />
              {/* Bottom-Left Beam (Idx 3) */}
              <line
                x1="200"
                y1="420"
                x2="100"
                y2="520"
                stroke={hoveredCard === 3 ? "#3755c3" : "currentColor"}
                strokeWidth={hoveredCard === 3 ? "2.5" : "1.5"}
                strokeDasharray={hoveredCard === 3 ? "none" : "3 3"}
                className={cn(
                  "transition-all duration-300",
                  hoveredCard === 3 ? "opacity-100" : "opacity-30"
                )}
              />

              {/* Orbital Anchor Nodes (4 points) */}
              <circle
                cx="154"
                cy="154"
                r={hoveredCard === 0 ? "7" : "5"}
                fill={hoveredCard === 0 ? "#3755c3" : "#708cfd"}
                className="transition-all duration-300"
              />
              <circle
                cx="466"
                cy="154"
                r={hoveredCard === 1 ? "7" : "5"}
                fill={hoveredCard === 1 ? "#3755c3" : "#708cfd"}
                className="transition-all duration-300"
              />
              <circle
                cx="466"
                cy="466"
                r={hoveredCard === 2 ? "7" : "5"}
                fill={hoveredCard === 2 ? "#3755c3" : "#708cfd"}
                className="transition-all duration-300"
              />
              <circle
                cx="154"
                cy="466"
                r={hoveredCard === 3 ? "7" : "5"}
                fill={hoveredCard === 3 ? "#3755c3" : "#708cfd"}
                className="transition-all duration-300"
              />
            </svg>
          </div>

          {/* Central Hub Disc */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
            <motion.div
              initial={shouldReduceMotion ? undefined : { scale: 0.85, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="relative group cursor-pointer"
            >
              {/* Outer decorative breathing ring */}
              <div className="absolute -inset-3 rounded-full bg-secondary/10 blur-md group-hover:bg-secondary/20 transition-all duration-500" />

              {/* Rotating outer ring accent */}
              <div className="w-56 h-56 rounded-full border border-secondary/30 p-2.5 bg-surface-container-low/70 backdrop-blur-md flex items-center justify-center shadow-lg transition-transform duration-700 group-hover:scale-105">
                {/* Core Hub Body */}
                <div className="w-full h-full rounded-full bg-surface-container-lowest border border-outline-variant/40 p-4 flex flex-col items-center justify-center text-center shadow-inner relative overflow-hidden">
                  {/* Subtle radial sheen */}
                  <div className="absolute inset-0 bg-radial from-secondary/10 via-transparent to-transparent pointer-events-none" />

                  {/* Hub Icon badge */}
                  <div className="w-10 h-10 rounded-full bg-secondary/15 flex items-center justify-center text-secondary mb-2 border border-secondary/20 shadow-2xs">
                    <Workflow className="w-5 h-5 text-secondary" />
                  </div>

                  <span className="font-space-grotesk text-xs uppercase tracking-widest font-bold text-secondary">
                    TOP-COMPTA
                  </span>

                  <span className="font-space-grotesk text-sm font-bold text-on-surface leading-tight mt-0.5">
                    Hub Unifié
                  </span>

                  <div className="mt-1.5 inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-surface-container text-[10px] font-semibold text-on-surface-variant">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span>PA • GED • CRM</span>
                  </div>

                  <span className="text-[10px] text-on-surface-variant/80 mt-1">
                    Flux continu 360°
                  </span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* 4 Cards Arranged in 3-Column Radial Geometry */}
          <div className="relative z-30 grid grid-cols-12 gap-8 items-center min-h-[580px]">
            {/* Left Column (Cards 01 & 04) */}
            <div className="col-span-5 flex flex-col justify-between gap-16">
              {/* Card 01: Top-Left */}
              <OrbitalCard
                card={cardsWithMetadata[0]}
                isHovered={hoveredCard === 0}
                onHover={() => setHoveredCard(0)}
                onLeave={() => setHoveredCard(null)}
                getIcon={getCardIcon}
                alignment="right"
                shouldReduceMotion={shouldReduceMotion}
              />

              {/* Card 04: Bottom-Left */}
              <OrbitalCard
                card={cardsWithMetadata[3]}
                isHovered={hoveredCard === 3}
                onHover={() => setHoveredCard(3)}
                onLeave={() => setHoveredCard(null)}
                getIcon={getCardIcon}
                alignment="right"
                shouldReduceMotion={shouldReduceMotion}
              />
            </div>

            {/* Spacer Middle Column for Center Hub (Col-span-2) */}
            <div className="col-span-2" aria-hidden="true" />

            {/* Right Column (Cards 02 & 03) */}
            <div className="col-span-5 flex flex-col justify-between gap-16">
              {/* Card 02: Top-Right */}
              <OrbitalCard
                card={cardsWithMetadata[1]}
                isHovered={hoveredCard === 1}
                onHover={() => setHoveredCard(1)}
                onLeave={() => setHoveredCard(null)}
                getIcon={getCardIcon}
                alignment="left"
                shouldReduceMotion={shouldReduceMotion}
              />

              {/* Card 03: Bottom-Right */}
              <OrbitalCard
                card={cardsWithMetadata[2]}
                isHovered={hoveredCard === 2}
                onHover={() => setHoveredCard(2)}
                onLeave={() => setHoveredCard(null)}
                getIcon={getCardIcon}
                alignment="left"
                shouldReduceMotion={shouldReduceMotion}
              />
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* MOBILE & TABLET RESPONSIVE CIRCULAR TIMELINE (< lg)                      */}
        {/* ========================================================================= */}
        <div className="lg:hidden flex flex-col gap-8">
          {/* Mobile Central Hub Badge */}
          <motion.div
            initial={shouldReduceMotion ? undefined : { opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex items-center justify-center"
          >
            <div className="w-full max-w-sm rounded-2xl bg-surface-container-lowest border border-secondary/30 p-5 shadow-sm flex items-center gap-4 relative overflow-hidden">
              <div className="w-12 h-12 rounded-full bg-secondary/10 border border-secondary/20 flex items-center justify-center shrink-0">
                <Workflow className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-space-grotesk font-bold text-sm text-on-surface">
                    Hub Unifié TOP-COMPTA
                  </span>
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                </div>
                <p className="text-xs text-on-surface-variant mt-0.5">
                  Synchronisation continue • PA, GED & CRM
                </p>
              </div>
            </div>
          </motion.div>

          {/* Connected Circular Cards Stack */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="relative flex flex-col gap-5 sm:gap-6 pl-6 sm:pl-8 border-l-2 border-dashed border-secondary/30 ml-3 sm:ml-4"
          >
            {cardsWithMetadata.map((card, idx) => (
              <motion.div
                key={card.title}
                variants={itemVariants}
                className="relative bg-surface-container-lowest rounded-2xl p-5 sm:p-6 shadow-xs border border-outline-variant/30 hover:border-secondary/50 transition-all flex flex-col gap-3 group"
              >
                {/* Connecting Circular Node Badge on the left spine */}
                <div className="absolute -left-[37px] sm:-left-[45px] top-6 w-8 h-8 rounded-full bg-surface-container-lowest border-2 border-secondary flex items-center justify-center shadow-xs">
                  <span className="text-xs font-bold text-secondary font-space-grotesk">
                    {card.number}
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <div
                    className={cn(
                      "w-10 h-10 rounded-xl flex items-center justify-center shrink-0",
                      card.accentBg
                    )}
                  >
                    {getCardIcon(card.icon)}
                  </div>
                  <span className="text-xs font-semibold text-secondary uppercase tracking-wider">
                    {card.stepName}
                  </span>
                </div>

                <h3 className="font-space-grotesk text-base font-bold text-on-surface group-hover:text-secondary transition-colors">
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

// Subcomponent for Desktop Orbital Card
interface OrbitalCardProps {
  card: {
    number: string;
    stepName: string;
    title: string;
    description: string;
    icon: string;
    accentBg: string;
  };
  isHovered: boolean;
  onHover: () => void;
  onLeave: () => void;
  getIcon: (iconName: string) => React.ReactNode;
  alignment: "left" | "right";
  shouldReduceMotion: boolean | null;
}

function OrbitalCard({
  card,
  isHovered,
  onHover,
  onLeave,
  getIcon,
  alignment,
  shouldReduceMotion,
}: OrbitalCardProps) {
  return (
    <motion.div
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      initial={shouldReduceMotion ? undefined : { opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      whileHover={
        shouldReduceMotion
          ? undefined
          : {
              scale: 1.025,
              y: -4,
              transition: { type: "spring", stiffness: 380, damping: 22 },
            }
      }
      className={cn(
        "relative bg-surface-container-lowest/95 backdrop-blur-md rounded-2xl p-6 shadow-xs transition-all duration-300 border cursor-default flex flex-col gap-3 group",
        isHovered
          ? "border-secondary/60 shadow-xl ring-2 ring-secondary/15"
          : "border-outline-variant/30 hover:border-secondary/40 hover:shadow-md"
      )}
    >
      {/* Top Header Row with Icon & Circular Step Badge */}
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <div
            className={cn(
              "w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-transform group-hover:scale-105",
              card.accentBg
            )}
          >
            {getIcon(card.icon)}
          </div>
          <span className="text-xs font-semibold text-secondary uppercase tracking-wider font-space-grotesk">
            {card.stepName}
          </span>
        </div>

        {/* Circular Sequence Badge */}
        <div
          className={cn(
            "w-7 h-7 rounded-full text-xs font-bold font-space-grotesk flex items-center justify-center transition-colors border",
            isHovered
              ? "bg-secondary text-on-secondary border-secondary"
              : "bg-surface-container text-on-surface-variant border-outline-variant/40"
          )}
        >
          {card.number}
        </div>
      </div>

      {/* Title */}
      <h3 className="font-space-grotesk text-base font-bold text-on-surface group-hover:text-secondary transition-colors">
        {card.title}
      </h3>

      {/* Description */}
      <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
        {card.description}
      </p>

      {/* Directional Subtle Flow Hint */}
      <div className="pt-1 flex items-center gap-1.5 text-[11px] font-medium text-secondary/70 group-hover:text-secondary transition-colors">
        <span>Résolu par TOP-COMPTA</span>
        <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
      </div>
    </motion.div>
  );
}

