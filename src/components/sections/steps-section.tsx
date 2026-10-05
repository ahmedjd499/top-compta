"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion, useReducedMotion, AnimatePresence } from "motion/react";
import {
  ClipboardList,
  FileCheck,
  FolderUp,
  TrendingUp,
  RotateCw,
  ArrowRight,
  ArrowLeft,
} from "lucide-react";
import { stepsContent } from "@/content/home";
import { cn } from "@/lib/utils";

export function StepsSection() {
  const shouldReduceMotion = useReducedMotion();
  const [activeStep, setActiveStep] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);
  const autoPlayTimerRef = useRef<NodeJS.Timeout | null>(null);

  const stepShortLabels = [
    "01 • Diagnostic",
    "02 • Périmètre",
    "03 • Collecte GED",
    "04 • Pilotage",
  ];

  const getStepIcon = (index: number) => {
    switch (index) {
      case 0:
        return <ClipboardList className="w-5 h-5 text-bleu" />;
      case 1:
        return <FileCheck className="w-5 h-5 text-bleu-petrole" />;
      case 2:
        return <FolderUp className="w-5 h-5 text-bleu-turquoise" />;
      default:
        return <TrendingUp className="w-5 h-5 text-jaune-moutarde" />;
    }
  };

  const stepsWithPortions = stepsContent.steps.map((step, idx) => ({
    ...step,
    index: idx,
    formattedNumber: `0${step.stepNumber}`,
    shortLabel: stepShortLabels[idx],
  }));

  // Auto-advance step every 4.5 seconds if auto-play is enabled and user is not hovering
  const nextStep = useCallback(() => {
    setActiveStep((prev) => (prev + 1) % stepsWithPortions.length);
  }, [stepsWithPortions.length]);

  const prevStep = useCallback(() => {
    setActiveStep((prev) => (prev - 1 + stepsWithPortions.length) % stepsWithPortions.length);
  }, [stepsWithPortions.length]);

  useEffect(() => {
    if (!isAutoPlaying || hoveredStep !== null || shouldReduceMotion) {
      if (autoPlayTimerRef.current) clearInterval(autoPlayTimerRef.current);
      return;
    }

    autoPlayTimerRef.current = setInterval(() => {
      nextStep();
    }, 4500);

    return () => {
      if (autoPlayTimerRef.current) clearInterval(autoPlayTimerRef.current);
    };
  }, [isAutoPlaying, hoveredStep, shouldReduceMotion, nextStep]);

  // Highlighted step (hover takes temporary visual precedence)
  const currentDisplayedIndex = hoveredStep !== null ? hoveredStep : activeStep;

  return (
    <section
      aria-labelledby="steps-section-heading"
      className="w-full py-16 lg:py-24 bg-gradient-to-b from-blue-50/70 via-amber-50/30 to-slate-50 border-y border-bleu/15 relative overflow-hidden"
    >
      {/* Background ambient circular glow - bleu and jaune brand accents */}
      <div className="absolute -top-32 -left-32 w-[600px] h-[600px] bg-bleu/10 rounded-full blur-3xl pointer-events-none -z-0" />
      <div className="absolute -bottom-32 -right-32 w-[600px] h-[600px] bg-jaune-vif/15 rounded-full blur-3xl pointer-events-none -z-0" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[760px] h-[760px] bg-bleu-turquoise/5 rounded-full blur-3xl pointer-events-none -z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Épured Minimal Header Badge (Desktop & Tablet) */}
        <motion.div
          initial={shouldReduceMotion ? undefined : { opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="hidden md:flex justify-center mb-6"
        >
          <div className="inline-flex items-center gap-2 px-4 mb-6 py-1.5 rounded-full text-bleu text-xs font-extrabold uppercase tracking-wider ">
            {stepsContent.badge}
          </div>
        </motion.div>

        {/* ========================================================================= */}
        {/* DESKTOP & TABLET: THE 4 CIRCLE PORTIONS (md & above)                     */}
        {/* Perfectly centered text, no overlap, spacious geometric quadrant cards    */}
        {/* ========================================================================= */}
        <div className="hidden md:flex flex-col items-center justify-center my-6">
          <div className="relative w-full max-w-[620px] lg:max-w-[660px] aspect-square">
            {/* Outer Perimeter Orbit SVG Track with Clockwise Travelling Beam */}
            <div className="absolute -inset-5 lg:-inset-7 flex items-center justify-center pointer-events-none select-none">
              <svg
                className="w-full h-full text-secondary/30"
                viewBox="0 0 760 760"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Outer Dashed Guide Circle */}
                <circle
                  cx="380"
                  cy="380"
                  r="365"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeDasharray="6 8"
                  className="opacity-40"
                />

                {/* Clockwise Animated Orbit Beam */}
                {!shouldReduceMotion && (
                  <g className="animate-[spin_40s_linear_infinite] origin-[380px_380px]">
                    <circle
                      cx="380"
                      cy="380"
                      r="365"
                      stroke="#22437f"
                      strokeWidth="2.5"
                      strokeDasharray="40 240"
                      strokeLinecap="round"
                      className="opacity-80"
                    />
                    <circle cx="380" cy="15" r="5" fill="#22437f" />
                    <circle cx="745" cy="380" r="4.5" fill="#0891b2" />
                    <circle cx="380" cy="745" r="4.5" fill="#e7b821" />
                    <circle cx="15" cy="380" r="4.5" fill="#60a5fa" />
                  </g>
                )}
              </svg>

              {/* Directional Flow Arrows at 4 cardinal axes */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-bleu text-white border-2 border-white flex items-center justify-center shadow-md">
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
              <div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-jaune-vif text-[#0b1c30] border-2 border-white flex items-center justify-center shadow-md">
                <ArrowRight className="w-3.5 h-3.5 rotate-90" />
              </div>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-7 h-7 rounded-full bg-bleu text-white border-2 border-white flex items-center justify-center shadow-md">
                <ArrowRight className="w-3.5 h-3.5 rotate-180" />
              </div>
              <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-jaune-vif text-[#0b1c30] border-2 border-white flex items-center justify-center shadow-md">
                <ArrowRight className="w-3.5 h-3.5 -rotate-90" />
              </div>
            </div>

            {/* Central Hub Disc with Integrated Title */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none">
              <motion.div
                initial={shouldReduceMotion ? undefined : { scale: 0.85, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="w-48 h-48 sm:w-52 sm:h-52 rounded-full border-2 border-bleu/30 p-2 bg-white/95 backdrop-blur-md flex items-center justify-center shadow-2xl relative"
              >
                {/* Outer subtle glow */}
                <div className="absolute -inset-2 rounded-full bg-bleu/10 blur-md pointer-events-none" />

                {/* Spinning decorative ring with bleu/jaune dashes */}
                <div className="absolute inset-1 rounded-full border border-dashed border-jaune-vif/60 animate-[spin_35s_linear_infinite] pointer-events-none" />

                {/* Core Hub Body */}
                <div className="w-full h-full rounded-full bg-gradient-to-b from-blue-50/90 via-white to-amber-50/40 border border-bleu/15 p-3 flex flex-col items-center justify-center text-center shadow-inner relative overflow-hidden">
                  <div className="absolute inset-0 bg-radial from-bleu/10 via-transparent to-transparent pointer-events-none" />

                  {/* Step counter */}
                  <span className="text-[10px] font-bold text-bleu uppercase tracking-widest font-space-grotesk mb-1">
                    0{currentDisplayedIndex + 1} / 04
                  </span>

                  {/* Integrated Title as Central Focal Point */}
                  <h2
                    id="steps-section-heading"
                    className="font-space-grotesk text-[12px] sm:text-[13px] font-extrabold text-bleu-petrole leading-tight mt-1 max-w-[150px]"
                  >
                    {stepsContent.title}
                  </h2>

                  {/* Directional Subtle Flow Hint */}
                  <div className="mt-2 pt-2 text-[11px] font-bold text-bleu border-t-2 border-bleu">
                    4 étapes clés <br /> TOP-COMPTA
                  </div>
                </div>
              </motion.div>
            </div>

            {/* 2x2 Grid of 4 Quadrant Cards Forming the Round Circle */}
            <div className="w-full h-full grid grid-cols-2 grid-rows-2 gap-2.5 sm:gap-3 relative z-10">
              {/* Quadrant 1: Top-Left */}
              <CenteredQuadrantCard
                step={stepsWithPortions[0]}
                position="top-left"
                isActive={currentDisplayedIndex === 0}
                onClick={() => {
                  setActiveStep(0);
                  setIsAutoPlaying(false);
                }}
                onMouseEnter={() => setHoveredStep(0)}
                onMouseLeave={() => setHoveredStep(null)}
                icon={getStepIcon(0)}
                shouldReduceMotion={shouldReduceMotion}
              />

              {/* Quadrant 2: Top-Right */}
              <CenteredQuadrantCard
                step={stepsWithPortions[1]}
                position="top-right"
                isActive={currentDisplayedIndex === 1}
                onClick={() => {
                  setActiveStep(1);
                  setIsAutoPlaying(false);
                }}
                onMouseEnter={() => setHoveredStep(1)}
                onMouseLeave={() => setHoveredStep(null)}
                icon={getStepIcon(1)}
                shouldReduceMotion={shouldReduceMotion}
              />

              {/* Quadrant 4: Bottom-Left (Row 2, Col 1) */}
              <CenteredQuadrantCard
                step={stepsWithPortions[3]}
                position="bottom-left"
                isActive={currentDisplayedIndex === 3}
                onClick={() => {
                  setActiveStep(3);
                  setIsAutoPlaying(false);
                }}
                onMouseEnter={() => setHoveredStep(3)}
                onMouseLeave={() => setHoveredStep(null)}
                icon={getStepIcon(3)}
                shouldReduceMotion={shouldReduceMotion}
              />

              {/* Quadrant 3: Bottom-Right (Row 2, Col 2) */}
              <CenteredQuadrantCard
                step={stepsWithPortions[2]}
                position="bottom-right"
                isActive={currentDisplayedIndex === 2}
                onClick={() => {
                  setActiveStep(2);
                  setIsAutoPlaying(false);
                }}
                onMouseEnter={() => setHoveredStep(2)}
                onMouseLeave={() => setHoveredStep(null)}
                icon={getStepIcon(2)}
                shouldReduceMotion={shouldReduceMotion}
              />
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* MOBILE RESPONSIVE ADAPTATION (< md)                                      */}
        {/* ========================================================================= */}
        <div className="md:hidden flex flex-col gap-6">
          {/* Mobile Central Hub Badge with Integrated Title */}
          <motion.div
            initial={shouldReduceMotion ? undefined : { opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center"
          >
            <div className="w-full max-w-sm rounded-2xl p-5 relative overflow-hidden flex flex-col items-center text-center">
              <div className="absolute inset-0 bg-radial from-bleu/10 via-transparent to-transparent pointer-events-none" />

              {/* Minimal Badge */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 text-bleu text-[11px] font-bold uppercase tracking-wider mb-2.5">
                <span>{stepsContent.badge}</span>
              </div>

              {/* Integrated Section Title */}
              <h2
                id="steps-section-heading-mobile"
                className="font-space-grotesk font-extrabold text-base sm:text-lg text-bleu-petrole leading-tight"
              >
                {stepsContent.title}
              </h2>

              <div className="mt-2.5 inline-flex items-center gap-1.5 px-2.5 py-0.5 text-[11px] font-semibold text-bleu">
                4 étapes clés TOP-COMPTA
              </div>
            </div>
          </motion.div>

          {/* Mini Interactive Circle Dial */}
          <div className="flex flex-col items-center">
            <div className="relative w-56 h-56 p-2">
              <div className="absolute inset-0 rounded-full border border-dashed border-secondary/30 pointer-events-none" />

              {/* Center Mini Hub */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none">
                <div className="w-16 h-16 rounded-full bg-surface-container-lowest border-2 border-secondary/30 shadow-md flex flex-col items-center justify-center p-1 text-center">
                  <span className="font-space-grotesk text-xs font-bold text-secondary">
                    0{activeStep + 1}
                  </span>
                  <span className="text-[8px] text-on-surface-variant">/ 04</span>
                </div>
              </div>

              {/* 4 Quadrant Interactive Slices */}
              <div className="w-full h-full grid grid-cols-2 grid-rows-2 gap-2">
                {/* 01: Top-Left */}
                <button
                  type="button"
                  onClick={() => {
                    setActiveStep(0);
                    setIsAutoPlaying(false);
                  }}
                  className={cn(
                    "rounded-tl-full rounded-tr-md rounded-bl-md rounded-br-[20px] p-2.5 flex items-start justify-start transition-all border",
                    activeStep === 0
                      ? "bg-bleu text-white border-bleu shadow-md scale-102"
                      : "bg-white border-bleu/20 text-bleu-petrole"
                  )}
                >
                  <span className="text-xs font-bold font-space-grotesk">01</span>
                </button>

                {/* 02: Top-Right */}
                <button
                  type="button"
                  onClick={() => {
                    setActiveStep(1);
                    setIsAutoPlaying(false);
                  }}
                  className={cn(
                    "rounded-tr-full rounded-tl-md rounded-br-md rounded-bl-[20px] p-2.5 flex items-start justify-end transition-all border",
                    activeStep === 1
                      ? "bg-jaune-vif text-[#0b1c30] border-jaune-citron shadow-md scale-102 font-extrabold"
                      : "bg-white border-bleu/20 text-bleu-petrole"
                  )}
                >
                  <span className="text-xs font-bold font-space-grotesk">02</span>
                </button>

                {/* 04: Bottom-Left */}
                <button
                  type="button"
                  onClick={() => {
                    setActiveStep(3);
                    setIsAutoPlaying(false);
                  }}
                  className={cn(
                    "rounded-bl-full rounded-tl-md rounded-br-md rounded-tr-[20px] p-2.5 flex items-end justify-start transition-all border",
                    activeStep === 3
                      ? "bg-jaune-vif text-[#0b1c30] border-jaune-citron shadow-md scale-102 font-extrabold"
                      : "bg-white border-bleu/20 text-bleu-petrole"
                  )}
                >
                  <span className="text-xs font-bold font-space-grotesk">04</span>
                </button>

                {/* 03: Bottom-Right */}
                <button
                  type="button"
                  onClick={() => {
                    setActiveStep(2);
                    setIsAutoPlaying(false);
                  }}
                  className={cn(
                    "rounded-br-full rounded-tr-md rounded-bl-md rounded-tl-[20px] p-2.5 flex items-end justify-end transition-all border",
                    activeStep === 2
                      ? "bg-bleu text-white border-bleu shadow-md scale-102"
                      : "bg-white border-bleu/20 text-bleu-petrole"
                  )}
                >
                  <span className="text-xs font-bold font-space-grotesk">03</span>
                </button>
              </div>
            </div>
          </div>

          {/* Active Card Detail */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
              className="bg-white rounded-2xl p-6 shadow-lg border-2 border-bleu/30 flex flex-col gap-3.5 text-center items-center"
            >
              <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-bleu border border-bleu/30 shadow-xs">
                {getStepIcon(activeStep)}
              </div>

              <div>
                <span className="text-xs font-extrabold uppercase tracking-wider px-3 py-1 rounded-full bg-jaune-vif text-[#0b1c30] inline-block mb-1 border border-jaune-moutarde/30">
                  Étape {stepsWithPortions[activeStep].formattedNumber}
                </span>
                <h3 className="font-space-grotesk text-lg font-bold text-bleu-petrole mt-1">
                  {stepsWithPortions[activeStep].title}
                </h3>
              </div>

              <p className="text-sm text-on-surface-variant leading-relaxed max-w-md">
                {stepsWithPortions[activeStep].description}
              </p>

              {/* Navigation Controls */}
              <div className="flex items-center justify-between w-full pt-3 border-t border-bleu/15 mt-1">
                <button
                  type="button"
                  onClick={() => {
                    prevStep();
                    setIsAutoPlaying(false);
                  }}
                  className="text-xs font-bold text-bleu hover:underline flex items-center gap-1"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  Précédent
                </button>

                <div className="flex items-center gap-1.5">
                  {stepsWithPortions.map((_, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => {
                        setActiveStep(i);
                        setIsAutoPlaying(false);
                      }}
                      aria-label={`Étape ${i + 1}`}
                      className={cn(
                        "h-2 rounded-full transition-all",
                        activeStep === i
                          ? "bg-bleu w-6"
                          : "bg-bleu/20 w-2"
                      )}
                    />
                  ))}
                </div>

                <button
                  type="button"
                  onClick={() => {
                    nextStep();
                    setIsAutoPlaying(false);
                  }}
                  className="text-xs font-semibold text-secondary hover:underline flex items-center gap-1"
                >
                  Suivant
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

// =============================================================================
// SUBCOMPONENT: Perfectly Centered Quadrant Card
// Fits the geometric sweet spot of each circle portion with zero clipping
// =============================================================================
interface CenteredQuadrantCardProps {
  step: {
    formattedNumber: string;
    title: string;
    description: string;
    stepNumber: number;
  };
  position: "top-left" | "top-right" | "bottom-right" | "bottom-left";
  isActive: boolean;
  onClick: () => void;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  icon: React.ReactNode;
  shouldReduceMotion: boolean | null;
}

function CenteredQuadrantCard({
  step,
  position,
  isActive,
  onClick,
  onMouseEnter,
  onMouseLeave,
  icon,
  shouldReduceMotion,
}: CenteredQuadrantCardProps) {
  // Shape each quadrant: outer corner is rounded-full (quarter-circle arc),
  // inner corner has a smooth cutout near the center pivot.
  // Inner padding pulls the content closer toward the center of the circle.
  const quadrantStyles = {
    "top-left": {
      container: "rounded-tl-full rounded-tr-2xl rounded-bl-2xl rounded-br-[65px] sm:rounded-br-[75px]",
      innerOffset: "pt-8 pl-8 sm:pt-10 sm:pl-10 pr-4 pb-4 sm:pr-5 sm:pb-5",
      hoverTranslate: shouldReduceMotion ? {} : { x: -5, y: -5 },
    },
    "top-right": {
      container: "rounded-tr-full rounded-tl-2xl rounded-br-2xl rounded-bl-[65px] sm:rounded-bl-[75px]",
      innerOffset: "pt-8 pr-8 sm:pt-10 sm:pr-10 pl-4 pb-4 sm:pl-5 sm:pb-5",
      hoverTranslate: shouldReduceMotion ? {} : { x: 5, y: -5 },
    },
    "bottom-right": {
      container: "rounded-br-full rounded-tr-2xl rounded-bl-2xl rounded-tl-[65px] sm:rounded-tl-[75px]",
      innerOffset: "pb-8 pr-8 sm:pb-10 sm:pr-10 pl-4 pt-4 sm:pl-5 sm:pt-5",
      hoverTranslate: shouldReduceMotion ? {} : { x: 5, y: 5 },
    },
    "bottom-left": {
      container: "rounded-bl-full rounded-tl-2xl rounded-br-2xl rounded-tr-[65px] sm:rounded-tr-[75px]",
      innerOffset: "pb-8 pl-8 sm:pb-10 sm:pl-10 pr-4 pt-4 sm:pr-5 sm:pt-5",
      hoverTranslate: shouldReduceMotion ? {} : { x: -5, y: 5 },
    },
  }[position];

  const isOdd = step.stepNumber % 2 === 1;

  return (
    <motion.div
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      whileHover={quadrantStyles.hoverTranslate}
      transition={{ type: "spring", stiffness: 350, damping: 24 }}
      className={cn(
        "relative backdrop-blur-md border transition-all duration-300 cursor-pointer select-none shadow-xs flex flex-col items-center justify-center text-center",
        quadrantStyles.container,
        quadrantStyles.innerOffset,
        isActive
          ? isOdd
            ? "bg-gradient-to-br from-white via-blue-50/80 to-blue-100/40 border-2 border-bleu ring-4 ring-bleu/20 shadow-2xl z-10 scale-[1.015]"
            : "bg-gradient-to-br from-white via-amber-50/80 to-yellow-100/40 border-2 border-jaune-vif ring-4 ring-jaune-vif/25 shadow-2xl z-10 scale-[1.015]"
          : "bg-white/95 border-bleu/15 hover:border-bleu/50 hover:shadow-lg"
      )}
    >
      {/* Centered Content Column */}
      <div className="flex flex-col items-center justify-center max-w-[210px] sm:max-w-[240px] gap-2">
        {/* Badge & Icon Pill */}
        <div className="flex items-center gap-2 mb-0.5">
          <div
            className={cn(
              "w-7 h-7 sm:w-8 sm:h-8 rounded-full font-space-grotesk text-xs font-bold flex items-center justify-center transition-all border",
              isActive
                ? isOdd
                  ? "bg-bleu text-white border-bleu shadow-xs scale-105"
                  : "bg-jaune-vif text-[#0b1c30] border-jaune-citron shadow-xs scale-105 font-black"
                : isOdd
                ? "bg-blue-50 text-bleu border-bleu/25"
                : "bg-amber-50 text-jaune-moutarde border-jaune-moutarde/30"
            )}
          >
            {step.formattedNumber}
          </div>

          <div
            className={cn(
              "w-7 h-7 sm:w-8 sm:h-8 rounded-xl flex items-center justify-center transition-transform",
              isActive ? (isOdd ? "bg-bleu/15" : "bg-jaune-vif/20") : "bg-surface-container"
            )}
          >
            {icon}
          </div>
        </div>

        {/* Title: Centered & Bold */}
        <h3
          className={cn(
            "font-space-grotesk text-sm sm:text-base font-bold transition-colors leading-snug",
            isActive
              ? isOdd
                ? "text-bleu font-extrabold"
                : "text-jaune-moutarde font-extrabold"
              : "text-bleu-petrole"
          )}
        >
          {step.title}
        </h3>

        {/* Description: Centered with comfortable line-height */}
        <p className="text-[11px] sm:text-xs text-on-surface-variant leading-relaxed">
          {step.description}
        </p>


      </div>
    </motion.div>
  );
}


