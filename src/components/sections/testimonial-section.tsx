"use client";

import React from "react";
import { motion, useReducedMotion } from "motion/react";
import { Star } from "lucide-react";
import { testimonialContent } from "@/content/home";

export function TestimonialSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="w-full py-16 lg:py-24 bg-surface">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 flex flex-col items-center">
          <span className="text-bleu text-xs sm:text-sm font-bold tracking-widest uppercase mb-2">
            {testimonialContent.badge}
          </span>
          <h2 className="font-space-grotesk text-2xl sm:text-3xl lg:text-4xl text-on-surface font-bold tracking-tight">
            {testimonialContent.title}
          </h2>
        </div>

        {/* Extended Testimonial Card */}
        <motion.div
          initial={shouldReduceMotion ? undefined : { opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="bg-primary-container text-on-primary rounded-3xl p-6 sm:p-10 lg:p-14 shadow-2xl relative overflow-hidden border border-white/10"
        >
          {/* Subtle static ambient light gradient with Turquoise and Gold */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_15%,rgba(8,145,178,0.25),transparent_65%),radial-gradient(circle_at_15%_85%,rgba(231,184,33,0.12),transparent_60%)] pointer-events-none" />

          {/* Staggered Pop Stars in Jaune Vif */}
          <div className="flex items-center gap-1.5 text-jaune-vif mb-4 sm:mb-6 relative z-10">
            {[1, 2, 3, 4, 5].map((star, i) => (
              <motion.div
                key={star}
                initial={shouldReduceMotion ? undefined : { scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{
                  duration: 0.4,
                  delay: 0.2 + i * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <Star className="w-5 h-5 fill-current drop-shadow-xs text-jaune-vif" />
              </motion.div>
            ))}
          </div>

          <motion.div
            animate={
              shouldReduceMotion
                ? undefined
                : { y: [0, -4, 0] }
            }
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="font-space-grotesk text-jaune-vif/25 text-5xl sm:text-6xl leading-none mb-2 select-none"
          >
            &ldquo;
          </motion.div>

          <div className="text-sm sm:text-base lg:text-lg text-inverse-on-surface space-y-4 leading-relaxed relative z-10">
            {testimonialContent.quoteParagraphs.map((paragraph, index) => {
              const isLast =
                index === testimonialContent.quoteParagraphs.length - 1;
              return (
                <p
                  key={index}
                  className={isLast ? "font-bold text-on-primary pt-2" : ""}
                >
                  {paragraph}
                </p>
              );
            })}
          </div>

          <div className="mt-8 pt-6 border-t border-surface-variant/20 flex flex-col sm:flex-row sm:items-center justify-between gap-4 relative z-10">
            <div>
              <div className="font-space-grotesk text-base sm:text-lg font-bold text-on-primary">
                {testimonialContent.author}
              </div>
              <div className="text-xs sm:text-sm text-on-primary-container">
                {testimonialContent.location}
              </div>
            </div>

            <motion.div
              whileHover={shouldReduceMotion ? undefined : { scale: 1.05 }}
              transition={{ type: "spring", stiffness: 350, damping: 20 }}
              className="text-xs text-bleu-clair bg-bleu-clair/10 px-3.5 py-1.5 rounded-lg max-w-fit font-semibold border border-bleu-clair/20"
            >
              {testimonialContent.companies}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
