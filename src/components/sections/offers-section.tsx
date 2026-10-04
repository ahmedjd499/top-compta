"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion, type Variants } from "motion/react";
import { CheckCircle2, ArrowRight, Lock, Zap, Star, Sparkles, Layers, ShieldCheck } from "lucide-react";
import { offersContent } from "@/content/home";
import { PayPalModal } from "@/components/ui/paypal-modal";
import { cn } from "@/lib/utils";
import { PricingTier } from "@/content/offers";

export function OffersSection() {
  const shouldReduceMotion = useReducedMotion();
  const [selectedDuration, setSelectedDuration] = useState<number>(1);
  const [selectedOffer, setSelectedOffer] = useState<{
    name: string;
    amount: number;
    pricingTiers?: PricingTier[];
  } | null>(null);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.05,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  return (
    <section id="offres" className="w-full py-16 lg:py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-surface-container-high text-secondary text-xs font-bold mb-3 uppercase tracking-wider">
              {offersContent.badge}
            </div>
            <h2 className="font-space-grotesk text-2xl sm:text-3xl lg:text-4xl text-on-surface font-bold tracking-tight">
              {offersContent.title}
            </h2>
          </div>
          <div className="flex flex-col items-start md:items-end gap-2">
            <p className="text-sm sm:text-base text-on-surface-variant max-w-md md:text-right">
              {offersContent.subtitle}
            </p>
            <Link
              href="/offres/comparatif"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-secondary hover:underline"
            >
              <Layers className="w-4 h-4" />
              <span>Tableau comparatif détaillé →</span>
            </Link>
          </div>
        </div>



        {/* Quick Fast-Action Reassurance Strip */}
        <motion.div
          initial={shouldReduceMotion ? undefined : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10 p-4 rounded-2xl bg-surface-container-low border border-outline-variant/30 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xs"
        >
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-secondary-fixed flex items-center justify-center shrink-0">
              <Zap className="w-4 h-4 text-secondary" />
            </div>
            <span className="text-xs sm:text-sm text-on-surface font-medium">
              {offersContent.fastActionNotice}
            </span>
          </div>

          <div className="flex items-center gap-2 text-xs font-semibold text-secondary">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Assistance contrôle fiscal/URSSAF incluse sur toutes les formules</span>
          </div>
        </motion.div>

        {/* Degressive Duration Toggle Selector (1, 3, 6, 12 mois) */}
        <div className="mb-10 flex flex-col items-center justify-center gap-3">
          <span className="text-xs font-bold uppercase tracking-wider text-on-surface-variant">
            Tarifs dégressifs ! Choisissez votre période :
          </span>

          <div className="inline-flex flex-wrap p-1.5 rounded-2xl bg-surface-container border border-outline-variant/30 gap-1.5 shadow-xs">
            {[
              { duration: 1, label: "1 mois", badge: null },
              { duration: 3, label: "3 mois", badge: "-17€ à -27€" },
              { duration: 6, label: "6 mois", badge: "-59€ à -108€" },
              { duration: 12, label: "1 an", badge: "Jusqu'à -430€" },
            ].map((opt) => {
              const isSelected = selectedDuration === opt.duration;
              return (
                <button
                  key={opt.duration}
                  type="button"
                  onClick={() => setSelectedDuration(opt.duration)}
                  className={cn(
                    "px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-1.5",
                    isSelected
                      ? "bg-secondary text-on-secondary shadow-md scale-100"
                      : "text-on-surface hover:text-secondary hover:bg-surface-container-high"
                  )}
                  aria-pressed={isSelected}
                >
                  <span>{opt.label}</span>
                  {opt.badge && (
                    <span
                      className={cn(
                        "text-[10px] px-1.5 py-0.5 rounded-full font-bold",
                        isSelected
                          ? "bg-on-secondary text-secondary"
                          : "bg-emerald-100 text-emerald-800"
                      )}
                    >
                      {opt.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Cards Grid with Dynamic Degressive Pricing */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch"
        >
          {offersContent.plans.map((plan) => {
            const isFeatured = plan.recommended;

            // Find tier corresponding to active selectedDuration, or closest
            const activeTier = plan.pricingTiers?.find(
              (t) => t.durationMonths === selectedDuration
            ) || plan.pricingTiers?.[0];

            const displayPrice = activeTier ? activeTier.priceTotal : plan.price;
            const isNumericPrice = typeof displayPrice === "number";

            return (
              <motion.div
                key={plan.id}
                variants={cardVariants}
                whileHover={
                  shouldReduceMotion
                    ? undefined
                    : {
                      y: -4,
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
                    ? "border-secondary/60 shadow-lg ring-2 ring-secondary/20 lg:-translate-y-1"
                    : "border-outline-variant/30"
                )}
              >
                {/* Featured Badge */}
                {isFeatured && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#FFC439] text-[#111111] text-xs px-3.5 py-1 rounded-full shadow-md font-bold tracking-wider uppercase flex items-center gap-1">
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <span>Recommandé</span>
                  </div>
                )}

                <div className="flex flex-col gap-3.5">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <span className="text-[11px] font-bold text-secondary uppercase tracking-wider block mb-1">
                        {plan.tag}
                      </span>
                      <h3 className="font-space-grotesk text-xl font-bold text-on-surface group-hover:text-secondary transition-colors">
                        {plan.name}
                      </h3>
                      <div className="mt-2 h-0.5 w-8 rounded-full bg-secondary/70"></div>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-on-surface-variant min-h-[44px] leading-relaxed">
                    {plan.description}
                  </p>

                  <div className="my-1 h-px bg-outline-variant/20" />

                  {/* Price Block */}
                  <div className="min-h-[64px] flex flex-col justify-center">
                    <div className="flex items-baseline gap-1.5">
                      {isNumericPrice ? (
                        <>
                          <span
                            className={cn(
                              "font-space-grotesk text-4xl font-extrabold tracking-tight",
                              isFeatured ? "text-secondary" : "text-on-surface"
                            )}
                          >
                            {displayPrice} €
                          </span>
                          <span className="text-xs font-semibold text-on-surface-variant">
                            {activeTier ? `HT (${activeTier.label})` : plan.pricePeriod}
                          </span>
                        </>
                      ) : (
                        <span
                          className={cn(
                            "font-space-grotesk text-3xl font-extrabold tracking-tight",
                            isFeatured ? "text-secondary" : "text-on-surface"
                          )}
                        >
                          {plan.price}
                        </span>
                      )}
                    </div>

                    {activeTier && activeTier.durationMonths > 1 && (
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-xs text-on-surface-variant">
                          Soit {activeTier.monthlyEquivalent.toFixed(2)} €/mois HT
                        </span>
                        {activeTier.savings && (
                          <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                            {activeTier.savings}
                          </span>
                        )}
                      </div>
                    )}
                  </div>


                </div>

                {/* Bottom Actions */}
                <div className="flex flex-col gap-2.5 pt-6 mt-4 border-t border-outline-variant/20">
                  <motion.div whileTap={shouldReduceMotion ? undefined : { scale: 0.97 }}>
                    {plan.isExternal ? (
                      <a
                        href={plan.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-2.5 px-4 rounded-xl text-xs sm:text-sm font-bold text-center inline-flex items-center justify-center gap-1.5 transition-colors cursor-pointer bg-surface-container text-on-surface hover:bg-surface-container-high"
                      >
                        <span>{plan.ctaText || "Voir plus"}</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </a>
                    ) : (
                      <Link
                        href={plan.href}
                        className={cn(
                          "w-full py-2.5 px-4 rounded-xl text-xs sm:text-sm font-bold text-center inline-flex items-center justify-center gap-1.5 transition-colors cursor-pointer",
                          isFeatured
                            ? "bg-secondary text-on-secondary hover:bg-on-secondary-container shadow-md"
                            : "bg-surface-container text-on-surface hover:bg-surface-container-high"
                        )}
                      >
                        <span>{plan.ctaText || "Découvrir la formule"}</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    )}
                  </motion.div>

                  {/* PayPal Instant Checkout (Zero manual input!) */}
                  {isNumericPrice && (
                    <motion.button
                      whileTap={shouldReduceMotion ? undefined : { scale: 0.97 }}
                      onClick={() =>
                        setSelectedOffer({
                          name: plan.name,
                          amount: displayPrice as number,
                          pricingTiers: plan.pricingTiers,
                        })
                      }
                      className={cn(
                        "w-full py-2 px-3 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 shadow-xs transition-all cursor-pointer",
                        isFeatured
                          ? "bg-[#FFC439] text-[#111111] hover:bg-[#F4B41A]"
                          : "bg-[#003087] text-white hover:bg-[#00215c]"
                      )}
                    >
                      <Lock className="w-3.5 h-3.5" />
                      <span>Payer {displayPrice}€ via PayPal</span>
                    </motion.button>
                  )}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom Callout & Links */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
          <Link
            href="/offres"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-secondary text-on-secondary hover:bg-on-secondary-container font-bold text-sm shadow-sm transition-all group"
          >
            <Sparkles className="w-4 h-4" />
            <span>Voir toutes nos offres</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>

          <Link
            href="/offres/comparatif"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-surface-container-low border border-outline-variant/30 text-secondary hover:bg-surface-container font-bold text-sm shadow-xs transition-all group"
          >
            <Layers className="w-4 h-4" />
            <span>Consulter le grand tableau comparatif</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>

      {/* PayPal Modal */}
      {selectedOffer && (
        <PayPalModal
          isOpen={true}
          offerName={selectedOffer.name}
          amount={selectedOffer.amount}
          pricingTiers={selectedOffer.pricingTiers}
          initialDurationMonths={selectedDuration}
          onClose={() => setSelectedOffer(null)}
        />
      )}
    </section>
  );
}
