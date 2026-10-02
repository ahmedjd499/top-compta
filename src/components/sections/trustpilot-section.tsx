"use client";

import React from "react";
import { motion, useReducedMotion, type Variants } from "motion/react";
import { Star, ShieldCheck, ExternalLink } from "lucide-react";
import { trustpilotContent } from "@/content/home";
import { CountUp } from "@/components/ui/count-up";

export function TrustpilotSection() {
  const shouldReduceMotion = useReducedMotion();

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

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 30 },
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
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div>
            <h2 className="font-space-grotesk text-2xl sm:text-3xl lg:text-4xl text-on-surface font-bold tracking-tight">
              Une relation suivie,<br />
              appréciée par nos clients.
            </h2>
          </div>
          <p className="text-sm sm:text-base text-on-surface-variant max-w-lg">
            Les extraits ci-dessous reprennent des avis publiés sur 
             <a className="hover:underline  font-bold transition-all cursor-pointer ms-1"   href={trustpilotContent.trustpilotUrl}
                target="_blank"
                rel="noopener noreferrer">
                  la page Trustpilot de TOP-COMPTA.FR.
              </a>
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Trustpilot Score Showcase Card */}
          <motion.div
            initial={shouldReduceMotion ? undefined : { opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            whileHover={
              shouldReduceMotion
                ? undefined
                : {
                    scale: 1.015,
                    y: -4,
                    transition: { type: "spring", stiffness: 350, damping: 22 },
                  }
            }
            className="lg:col-span-4 bg-primary-container text-on-primary rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-xl cursor-default relative overflow-hidden group"
          >
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-6 h-6 text-secondary-fixed" />
                <span className="font-space-grotesk text-lg font-bold tracking-tight">
                  Trustpilot
                </span>
              </div>

              <div className="pt-4 sm:pt-6">
                <div className="font-space-grotesk text-5xl sm:text-6xl font-bold leading-none tracking-tight text-on-primary">
                  <CountUp value={4.6} decimals={1} decimalSeparator="," />
                </div>
                <div className="text-sm text-on-primary-container mt-2">
                  sur 5 · <CountUp value={52} /> avis affichés sur Trustpilot
                </div>
              </div>

              {/* Trustpilot Stars in Green Box Representation */}
              <div className="flex items-center gap-1.5 pt-3">
                {[1, 2, 3, 4].map((star, sIdx) => (
                  <motion.span
                    key={star}
                    initial={
                      shouldReduceMotion
                        ? undefined
                        : { scale: 0.5, opacity: 0 }
                    }
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: 0.2 + sIdx * 0.08,
                      type: "spring",
                      stiffness: 300,
                      damping: 15,
                    }}
                    className="bg-[#00b67a] text-white p-1 rounded flex items-center justify-center shadow-xs"
                  >
                    <Star className="w-4 h-4 fill-current" />
                  </motion.span>
                ))}
                <motion.span
                  initial={
                    shouldReduceMotion
                      ? undefined
                      : { scale: 0.5, opacity: 0 }
                  }
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: 0.2 + 4 * 0.08,
                    type: "spring",
                    stiffness: 300,
                    damping: 15,
                  }}
                  className="bg-[#00b67a] text-white p-1 rounded flex items-center justify-center shadow-xs"
                >
                  <Star className="w-4 h-4 fill-current opacity-80" />
                </motion.span>
              </div>
            </div>

            <div className="pt-8">
              <motion.a
                whileHover={shouldReduceMotion ? undefined : { scale: 1.02 }}
                whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
                href={trustpilotContent.trustpilotUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl bg-surface-container-lowest text-on-surface hover:bg-surface-bright text-xs sm:text-sm font-bold transition-all inline-flex items-center justify-center gap-2 shadow-sm cursor-pointer"
              >
                <span>Consulter tous les avis</span>
                <ExternalLink className="w-4 h-4" />
              </motion.a>
            </div>
          </motion.div>

          {/* 4 Reviews Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-5"
          >
            {trustpilotContent.reviews.map((review) => (
              <motion.div
                key={review.id}
                variants={cardVariants}
                whileHover={
                  shouldReduceMotion
                    ? undefined
                    : {
                        y: -6,
                        scale: 1.015,
                        transition: {
                          type: "spring",
                          stiffness: 350,
                          damping: 22,
                        },
                      }
                }
                className="bg-surface-container-lowest rounded-2xl p-6 shadow-xs hover:shadow-xl transition-all duration-300 border border-outline-variant/30 hover:border-secondary/40 flex flex-col justify-between group"
              >
                <div className="flex flex-col gap-2">
                  <span className="text-secondary text-4xl font-space-grotesk leading-none select-none group-hover:scale-110 transition-transform origin-left">
                    &ldquo;
                  </span>
                  <p className="text-sm sm:text-base text-on-surface font-medium leading-relaxed">
                    {review.quote}
                  </p>
                </div>
                <div className="pt-6 flex items-center justify-between text-xs text-on-surface-variant border-t border-outline-variant/20 mt-4">
                  <span>{review.authorRole}</span>
                  <div className="flex items-center gap-1 text-[#00b67a] font-bold">
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <span>{review.platform}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
