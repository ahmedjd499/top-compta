"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import { stepsContent } from "@/content/home";
import { cn } from "@/lib/utils";

export function StepsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 50%"],
  });

  const lineWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section ref={containerRef} className="w-full py-16 lg:py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <span className="px-3 py-1 rounded-md bg-surface-container text-secondary text-xs font-bold uppercase tracking-wider inline-block mb-3">
              {stepsContent.badge}
            </span>
            <h2 className="font-space-grotesk text-2xl sm:text-3xl lg:text-4xl text-on-surface font-bold tracking-tight">
              {stepsContent.title}
            </h2>
          </div>
          <p className="text-sm sm:text-base text-on-surface-variant max-w-md">
            {stepsContent.description}
          </p>
        </div>

        {/* Steps Timeline Grid with scroll-drawn line */}
        <div className="relative">
          {/* Desktop background connecting line */}
          <div className="hidden lg:block absolute top-14 left-8 right-8 h-0.5 bg-outline-variant/30 -z-0">
            <motion.div
              style={{ width: shouldReduceMotion ? "100%" : lineWidth }}
              className="h-full bg-secondary"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {stepsContent.steps.map((step, index) => {
              const isLast = index === stepsContent.steps.length - 1;

              return (
                <motion.div
                  key={step.stepNumber}
                  initial={shouldReduceMotion ? undefined : { opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                    ease: "easeOut",
                  }}
                  className="bg-surface-container-lowest rounded-2xl p-6 sm:p-7 shadow-xs hover:shadow-md transition-shadow border border-outline-variant/30 flex flex-col gap-4 relative"
                >
                  {/* Badge with scale-in animation */}
                  <motion.div
                    initial={shouldReduceMotion ? undefined : { scale: 0.6, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.1 + 0.2,
                      type: "spring",
                      stiffness: 260,
                      damping: 20,
                    }}
                    className={cn(
                      "w-12 h-12 rounded-xl flex items-center justify-center font-space-grotesk text-xl font-bold",
                      isLast
                        ? "bg-secondary text-on-secondary shadow-md"
                        : "bg-primary-container text-on-primary"
                    )}
                  >
                    {step.stepNumber}
                  </motion.div>

                  <h3 className="font-space-grotesk text-base sm:text-lg font-bold text-on-surface">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
