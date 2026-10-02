"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion, type Variants } from "motion/react";
import { CheckCircle2, ArrowRight, Lock, Zap, Star } from "lucide-react";
import { offersContent } from "@/content/home";
import { CountUp } from "@/components/ui/count-up";
import { PayPalModal } from "@/components/ui/paypal-modal";
import { cn } from "@/lib/utils";

export function OffersSection() {
  const shouldReduceMotion = useReducedMotion();
  const [selectedOffer, setSelectedOffer] = useState<{
    name: string;
    amount: number;
  } | null>(null);

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
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  return (
    <section id="offres" className="w-full py-16 lg:py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-surface-container-high text-secondary text-xs font-bold mb-3 uppercase tracking-wider">
              {offersContent.badge}
            </div>
            <h2 className="font-space-grotesk text-2xl sm:text-3xl lg:text-4xl text-on-surface font-bold tracking-tight">
              {offersContent.title}
            </h2>
          </div>
          <p className="text-base text-on-surface-variant max-w-md">
            {offersContent.subtitle}
          </p>
        </div>

        {/* Quick Fast-Action Notice */}
        <motion.div
          initial={shouldReduceMotion ? undefined : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10 p-4 rounded-2xl bg-surface-container-low border border-outline-variant/30 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xs"
        >
          <div className="flex items-center gap-3">
            <motion.div
              animate={
                shouldReduceMotion
                  ? undefined
                  : { scale: [1, 1.1, 1] }
              }
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-8 h-8 rounded-full bg-secondary-fixed flex items-center justify-center shrink-0"
            >
              <Zap className="w-4 h-4 text-secondary" />
            </motion.div>
            <span className="text-xs sm:text-sm text-on-surface font-medium">
              {offersContent.fastActionNotice}
            </span>
          </div>
          <div className="flex items-center gap-1.5 text-on-surface-variant text-xs font-medium shrink-0">
            <Lock className="w-4 h-4 text-secondary" />
            <span>{offersContent.securityNotice}</span>
          </div>
        </motion.div>

        {/* 4 Cards Grid with Spring Stagger */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch"
        >
          {offersContent.plans.map((plan) => {
            const isFeatured = plan.recommended;

            return (
              <motion.div
                key={plan.id}
                variants={cardVariants}
                whileHover={
                  shouldReduceMotion
                    ? undefined
                    : {
                        y: -8,
                        scale: 1.015,
                        transition: {
                          type: "spring",
                          stiffness: 350,
                          damping: 22,
                        },
                      }
                }
                className={cn(
                  "bg-surface-container-lowest rounded-2xl p-6 sm:p-7 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative border group",
                  isFeatured
                    ? "border-secondary/50 shadow-lg ring-2 ring-secondary/20 lg:-translate-y-2"
                    : "border-outline-variant/30"
                )}
              >
                {/* Recommended Badge with subtle pulsing ring */}
                {isFeatured && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-tertiary-fixed text-on-tertiary-fixed text-xs px-3.5 py-1 rounded-full shadow-md font-bold tracking-wider uppercase flex items-center gap-1 ring-4 ring-tertiary-fixed/30 animate-pulse">
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <span>Recommandée</span>
                  </div>
                )}

                <div className="flex flex-col gap-3.5">
                  <span
                    className={cn(
                      "text-xs uppercase tracking-wider font-bold",
                      isFeatured ? "text-secondary" : "text-on-surface-variant"
                    )}
                  >
                    {plan.tag}
                  </span>

                  <h3 className="font-space-grotesk text-xl font-bold text-on-surface group-hover:text-secondary transition-colors">
                    {plan.name}
                  </h3>

                  <div className="flex items-baseline gap-1 my-1">
                    <span
                      className={cn(
                        "font-space-grotesk text-4xl font-bold tracking-tight",
                        isFeatured ? "text-secondary" : "text-on-surface"
                      )}
                    >
                      <CountUp value={plan.price} suffix="€" />
                    </span>
                    <span className="text-xs text-on-surface-variant">
                      {plan.pricePeriod}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-on-surface-variant min-h-[38px] leading-relaxed">
                    {plan.description}
                  </p>

                  <ul className="flex flex-col gap-2.5 pt-3 text-xs sm:text-sm text-on-surface">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col gap-2.5 pt-6 mt-4 border-t border-outline-variant/20">
                  <motion.div
                    whileTap={shouldReduceMotion ? undefined : { scale: 0.97 }}
                  >
                    <Link
                      href={plan.href}
                      className={cn(
                        "w-full py-2.5 px-4 rounded-xl text-xs sm:text-sm font-bold text-center inline-flex items-center justify-center gap-1.5 transition-colors cursor-pointer",
                        isFeatured
                          ? "bg-secondary text-on-secondary hover:bg-on-secondary-container shadow-md"
                          : "bg-surface-container text-on-surface hover:bg-surface-container-high"
                      )}
                    >
                      <span>Voir les détails</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </motion.div>

                  {/* PayPal Instant Checkout Button */}
                  <motion.button
                    whileTap={shouldReduceMotion ? undefined : { scale: 0.97 }}
                    onClick={() =>
                      setSelectedOffer({ name: plan.name, amount: plan.price })
                    }
                    className={cn(
                      "w-full py-2 px-3 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 shadow-xs transition-all cursor-pointer",
                      isFeatured
                        ? "bg-[#FFC439] text-[#111111] hover:bg-[#F4B41A]"
                        : "bg-[#003087] text-white hover:bg-[#00215c]"
                    )}
                  >
                    <span
                      className={cn(
                        "font-extrabold tracking-wider px-1.5 py-0.2 rounded text-xs",
                        isFeatured
                          ? "text-[#003087]"
                          : "text-[#0079C1] bg-white"
                      )}
                    >
                      Pay<span className="text-[#00457C]">Pal</span>
                    </span>
                    <span>Régler par PayPal ({plan.price}€)</span>
                  </motion.button>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* PayPal Checkout Modal */}
      {selectedOffer && (
        <PayPalModal
          isOpen={true}
          offerName={selectedOffer.name}
          amount={selectedOffer.amount}
          onClose={() => setSelectedOffer(null)}
        />
      )}
    </section>
  );
}
