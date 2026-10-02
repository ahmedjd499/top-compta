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
        <div className="text-center mb-10 flex flex-col items-center gap-3">
          <span className="px-4 py-1.5 rounded-full bg-surface-container-highest text-secondary text-xs font-bold tracking-wider uppercase">
            {testimonialContent.badge}
          </span>
          <h2 className="font-space-grotesk text-2xl sm:text-3xl lg:text-4xl text-on-surface font-bold tracking-tight">
            {testimonialContent.title}
          </h2>
        </div>

        {/* Extended Testimonial Card */}
        <motion.div
          initial={shouldReduceMotion ? undefined : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="bg-primary-container text-on-primary rounded-3xl p-6 sm:p-10 lg:p-14 shadow-2xl relative overflow-hidden"
        >
          {/* Subtle gold accent stars */}
          <div className="flex items-center gap-1 text-tertiary-fixed mb-4 sm:mb-6">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} className="w-5 h-5 fill-current" />
            ))}
          </div>

          <div className="font-space-grotesk text-tertiary-fixed/30 text-5xl sm:text-6xl leading-none mb-2 select-none">
            &ldquo;
          </div>

          <div className="text-sm sm:text-base lg:text-lg text-inverse-on-surface space-y-4 leading-relaxed">
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

          <div className="mt-8 pt-6 border-t border-surface-variant/20 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="font-space-grotesk text-base sm:text-lg font-bold text-on-primary">
                {testimonialContent.author}
              </div>
              <div className="text-xs sm:text-sm text-on-primary-container">
                {testimonialContent.location}
              </div>
            </div>

            <div className="text-xs text-secondary-fixed bg-surface-variant/20 px-3 py-1.5 rounded-lg max-w-fit font-medium">
              {testimonialContent.companies}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
