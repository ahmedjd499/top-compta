"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import {
  CheckCircle2,
  ShieldCheck,
  FileText,
  Phone,
  ArrowLeft,
  Lock,
  Sparkles,
  Check,
  Layers,
  ArrowRight,
  Smartphone,
  FileSpreadsheet,
  Landmark,
  Receipt,
  Scale,
  Users,
} from "lucide-react";
import { DetailedFormula, PricingTier } from "@/content/offers";
import { PayPalModal } from "@/components/ui/paypal-modal";
import { siteConfig } from "@/content/site";
import { cn } from "@/lib/utils";

interface FormulaDetailViewProps {
  formula: DetailedFormula;
}

const getCategoryMeta = (title: string) => {
  const t = title.toLowerCase();
  if (t.includes("service") || t.includes("outil")) {
    return {
      icon: Smartphone,
      gradient: "from-blue-500/10 via-cyan-500/5 to-transparent",
      badgeColor: "bg-blue-500/10 text-blue-700 border-blue-200",
      accent: "text-blue-600",
      pillText: "Services & GED",
    };
  }
  if (t.includes("compta") || t.includes("saisie") || t.includes("rattrapage")) {
    return {
      icon: FileSpreadsheet,
      gradient: "from-emerald-500/10 via-teal-500/5 to-transparent",
      badgeColor: "bg-emerald-500/10 text-emerald-700 border-emerald-200",
      accent: "text-emerald-600",
      pillText: "Comptabilité Complète",
    };
  }
  if (t.includes("fiscal") || t.includes("tva") || t.includes("impôt") || t.includes("déclaration")) {
    return {
      icon: Landmark,
      gradient: "from-indigo-500/10 via-purple-500/5 to-transparent",
      badgeColor: "bg-indigo-500/10 text-indigo-700 border-indigo-200",
      accent: "text-indigo-600",
      pillText: "Fiscalité & Déclarations",
    };
  }
  if (t.includes("crm") || t.includes("vente") || t.includes("factur") || t.includes("commercial")) {
    return {
      icon: Receipt,
      gradient: "from-amber-500/10 via-orange-500/5 to-transparent",
      badgeColor: "bg-amber-500/10 text-amber-700 border-amber-200",
      accent: "text-amber-600",
      pillText: "CRM & Ventes",
    };
  }
  if (t.includes("pa ") || t.includes("plateforme") || t.includes("agréée") || t.includes("native")) {
    return {
      icon: ShieldCheck,
      gradient: "from-cyan-500/10 via-blue-500/5 to-transparent",
      badgeColor: "bg-cyan-500/10 text-cyan-700 border-cyan-200",
      accent: "text-cyan-600",
      pillText: "PA Réforme 2026",
    };
  }
  if (t.includes("juridique") || t.includes("greffe") || t.includes("pv") || t.includes("formalit")) {
    return {
      icon: Scale,
      gradient: "from-purple-500/10 via-violet-500/5 to-transparent",
      badgeColor: "bg-purple-500/10 text-purple-700 border-purple-200",
      accent: "text-purple-600",
      pillText: "Juridique & Greffe",
    };
  }
  if (t.includes("social") || t.includes("paie") || t.includes("tns") || t.includes("rh") || t.includes("ssi")) {
    return {
      icon: Users,
      gradient: "from-rose-500/10 via-pink-500/5 to-transparent",
      badgeColor: "bg-rose-500/10 text-rose-700 border-rose-200",
      accent: "text-rose-600",
      pillText: "Volet Social TNS",
    };
  }
  return {
    icon: Layers,
    gradient: "from-secondary/10 via-secondary/5 to-transparent",
    badgeColor: "bg-secondary/10 text-secondary border-secondary/20",
    accent: "text-secondary",
    pillText: "Prestation",
  };
};

export function FormulaDetailView({ formula }: FormulaDetailViewProps) {
  const shouldReduceMotion = useReducedMotion();
  const [paypalOpen, setPaypalOpen] = useState(false);

  // Available pricing tiers (1, 3, 6, 12 months)
  const tiers: PricingTier[] = formula.pricingTiers || [];
  const defaultTier = tiers.find((t) => t.popular) || tiers[0];

  const [selectedDuration, setSelectedDuration] = useState<number>(
    defaultTier ? defaultTier.durationMonths : 1
  );

  const activeTier = tiers.find((t) => t.durationMonths === selectedDuration);
  const activePriceTotal = activeTier
    ? activeTier.priceTotal
    : typeof formula.price === "number"
    ? formula.price
    : 0;

  const isNumericFormula = typeof formula.price === "number" || tiers.length > 0;

  return (
    <div className="w-full py-8 lg:py-14 bg-surface">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col gap-12">
        {/* Navigation Breadcrumb / Top Bar */}
        <div className="flex items-center justify-between">
          <Link
            href="/offres"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-secondary hover:underline w-fit"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Toutes les formules</span>
          </Link>

          <Link
            href="/offres/comparatif"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-secondary hover:underline"
          >
            <Layers className="w-4 h-4" />
            <span>Voir le tableau comparatif complet</span>
          </Link>
        </div>

        {/* 1. TOP CARD: Header + ALL 4 DURATION OPTIONS DIRECTLY SHOWN */}
        <motion.div
          initial={shouldReduceMotion ? undefined : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="bg-primary-container text-on-primary rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden border border-white/10 flex flex-col gap-8"
        >
          {/* Top Row: Formula Identification */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 relative z-10 border-b border-white/10 pb-6">
            <div className="flex flex-col gap-2.5 max-w-2xl">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3.5 py-1 rounded-full bg-secondary text-on-secondary text-xs font-bold uppercase tracking-wider">
                  {formula.tag}
                </span>
                {formula.recommended && (
                  <span className="px-3 py-1 rounded-full bg-[#FFC439] text-[#111111] text-xs font-bold uppercase tracking-wider flex items-center gap-1 shadow-xs">
                    <Sparkles className="w-3.5 h-3.5 fill-current" />
                    Recommandé
                  </span>
                )}
              </div>

              <h1 className="font-space-grotesk text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-on-primary">
                {formula.name}
              </h1>

              <p className="text-sm sm:text-base text-inverse-on-surface font-medium leading-relaxed">
                Découvrez l&apos;ensemble des modules de gestion, suivi comptable et fiscal. {formula.summary}
              </p>
            </div>

            {/* Assistance Contact Callout in Header */}
            <div className="flex flex-col sm:flex-row lg:flex-col items-start lg:items-end gap-2 shrink-0">
              <span className="text-xs text-inverse-on-surface/80">
                Une question avant de vous lancer ?
              </span>
              <a
                href={siteConfig.phoneHref}
                className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white font-extrabold text-sm border border-white/20 transition-all inline-flex items-center gap-2"
              >
                <Phone className="w-4 h-4 text-secondary-fixed" />
                <span>{formula.phoneContact || siteConfig.phone}</span>
              </a>
            </div>
          </div>

          {/* ALL OPTIONS DISPLAYED DIRECTLY IN THE TOP CARD */}
          {isNumericFormula && tiers.length > 0 && (
            <div className="flex flex-col gap-5 relative z-10">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#ffd700]" />
                  <strong className="text-sm sm:text-base font-bold text-white font-space-grotesk">
                    Tarifs dégressifs ! Maîtrisez votre budget !
                  </strong>
                </div>
                <span className="text-xs text-inverse-on-surface/80">
                  {tiers.length > 1
                    ? "Choisissez ci-dessous : 1 mois, 3 mois, 6 mois ou 1 an"
                    : "Tarif forfaitaire garanti sans surcoût"}
                </span>
              </div>

              {/* Interactive Cards Grid right in top card */}
              <div
                className={cn(
                  "grid gap-3.5",
                  tiers.length === 1
                    ? "grid-cols-1 max-w-sm"
                    : tiers.length === 2
                    ? "grid-cols-1 sm:grid-cols-2 max-w-xl"
                    : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
                )}
              >
                {tiers.map((tier) => {
                  const isSelected = selectedDuration === tier.durationMonths;

                  return (
                    <button
                      key={tier.durationMonths}
                      type="button"
                      onClick={() => setSelectedDuration(tier.durationMonths)}
                      className={cn(
                        "relative p-4 sm:p-5 rounded-2xl text-left transition-all cursor-pointer flex flex-col justify-between border",
                        isSelected
                          ? "bg-surface-container-lowest text-on-surface border-white shadow-xl ring-2 ring-white/50 scale-[1.02]"
                          : "bg-white/10 text-white border-white/15 hover:bg-white/15 hover:border-white/30"
                      )}
                      aria-pressed={isSelected}
                    >
                      {/* Popular / Best offer badge */}
                      {tier.popular && (
                        <div className="absolute -top-2.5 right-3 bg-amber-500 text-white text-[9px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider shadow-xs flex items-center gap-1">
                          <Sparkles className="w-2.5 h-2.5" />
                          <span>Meilleure offre</span>
                        </div>
                      )}

                      <div>
                        {/* Radio Selection Toggle */}
                        <div className="flex items-center justify-between mb-2">
                          <span
                            className={cn(
                              "text-[10px] font-bold uppercase tracking-wider",
                              isSelected ? "text-secondary" : "text-white/70"
                            )}
                          >
                            Période
                          </span>
                          <div
                            className={cn(
                              "w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors",
                              isSelected
                                ? "border-secondary bg-secondary text-on-secondary"
                                : "border-white/40"
                            )}
                          >
                            {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                          </div>
                        </div>

                        {/* Title */}
                        <strong
                          className={cn(
                            "font-space-grotesk text-lg font-bold block",
                            isSelected ? "text-on-surface" : "text-white"
                          )}
                        >
                          {tier.label}
                        </strong>

                        {/* Price */}
                        <div className="mt-2 flex items-baseline gap-1">
                          <span
                            className={cn(
                              "font-space-grotesk text-2xl sm:text-3xl font-extrabold tracking-tight",
                              isSelected ? "text-secondary" : "text-white"
                            )}
                          >
                            {tier.priceTotal} €
                          </span>
                          <span
                            className={cn(
                              "text-xs font-semibold",
                              isSelected ? "text-on-surface-variant" : "text-white/70"
                            )}
                          >
                            HT
                          </span>
                        </div>

                        {/* Monthly Breakdown */}
                        <div
                          className={cn(
                            "mt-0.5 text-xs",
                            isSelected ? "text-on-surface-variant" : "text-white/70"
                          )}
                        >
                          Soit{" "}
                          <strong
                            className={cn(
                              "font-bold",
                              isSelected ? "text-on-surface" : "text-white"
                            )}
                          >
                            {tier.monthlyEquivalent.toFixed(2)} €
                          </strong>{" "}
                          / mois HT
                        </div>
                      </div>

                      {/* Savings badge */}
                      <div className="mt-4 pt-2.5 border-t border-white/10">
                        {tier.savings ? (
                          <span
                            className={cn(
                              "inline-flex items-center justify-center gap-1 text-[11px] font-bold px-2 py-0.5 rounded-lg w-full text-center",
                              isSelected
                                ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                                : "bg-emerald-500/20 text-emerald-200 border border-emerald-400/30"
                            )}
                          >
                            <CheckCircle2 className="w-3 h-3 shrink-0" />
                            <span>{tier.savings}</span>
                          </span>
                        ) : (
                          <span
                            className={cn(
                              "text-[11px] block text-center py-0.5",
                              isSelected ? "text-on-surface-variant" : "text-white/70"
                            )}
                          >
                            Au mois sans engagement
                          </span>
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Action Strip inside the top card */}
              <div className="rounded-2xl bg-surface-container-lowest text-on-surface p-4 sm:p-5 flex flex-col md:flex-row items-center justify-between gap-4 shadow-lg border border-outline-variant/30">
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 text-center sm:text-left">
                  <span className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">
                    Total sélectionné ({activeTier?.label || "1 mois"}) :
                  </span>
                  <div className="flex items-baseline gap-2 justify-center sm:justify-start">
                    <span className="font-space-grotesk text-2xl sm:text-3xl font-extrabold text-secondary">
                      {activePriceTotal} € HT
                    </span>
                    {activeTier && activeTier.savings && (
                      <span className="text-xs text-emerald-600 font-bold bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                        {activeTier.savings}
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-2.5 w-full md:w-auto">
                  <button
                    type="button"
                    onClick={() => setPaypalOpen(true)}
                    className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#FFC439] text-[#111111] hover:bg-[#F4B41A] font-extrabold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer"
                  >
                    <Lock className="w-4 h-4 text-[#003087]" />
                    <span>Régler {activePriceTotal} € via PayPal</span>
                  </button>

                  <a
                    href="#details-section"
                    className="w-full sm:w-auto px-4 py-3 rounded-xl bg-surface-container hover:bg-surface-container-high transition-colors text-xs font-bold text-on-surface flex items-center justify-center gap-1.5"
                  >
                    <span>Voir les détails des modules</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          )}

          {/* Bottom strip inside hero */}
          <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs text-inverse-on-surface/85 relative z-10">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Assistance contrôle fiscal ou URSSAF incluse • Sans engagement • Paiement 100% sécurisé via SSL</span>
            </div>
            <a
              href="#details-section"
              className="font-bold text-white hover:underline flex items-center gap-1"
            >
              <span>Découvrir le détail des prestations ci-dessous</span>
              <ArrowRight className="w-3 h-3" />
            </a>
          </div>
        </motion.div>

        {/* 2. THE DETAILS SECTION (All Modules & Prestations) */}
        <section id="details-section" className="flex flex-col gap-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary/10 text-secondary text-xs font-bold uppercase tracking-wider mb-2">
                <Layers className="w-3.5 h-3.5" />
                <span>Modules &amp; Prestations Incluses</span>
              </div>
              <h2 className="font-space-grotesk text-2xl sm:text-3xl font-extrabold text-on-surface tracking-tight">
                Découvrez l&apos;ensemble des modules de gestion, suivi comptable et fiscal
              </h2>
              <p className="text-xs sm:text-sm text-on-surface-variant mt-1 max-w-xl">
                Toutes les prestations ci-dessous sont incluses sans surcoût dans votre formule {formula.name}.
              </p>
            </div>

            <Link
              href="/offres/comparatif"
              className="text-xs sm:text-sm font-bold text-secondary hover:underline inline-flex items-center gap-1.5 self-start sm:self-auto shrink-0 px-3 py-1.5 rounded-xl bg-surface-container-low border border-outline-variant/30"
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Consulter le comparatif interactif</span>
            </Link>
          </div>

          {/* Cards Grid: Rich, Distinctive, Highly Stylized Module Deliverables */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {formula.deliverables.map((deliv, index) => {
              const meta = getCategoryMeta(deliv.title);
              const Icon = meta.icon;

              return (
                <motion.div
                  key={index}
                  initial={shouldReduceMotion ? undefined : { opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: 0.05 + index * 0.04 }}
                  whileHover={shouldReduceMotion ? undefined : { y: -4 }}
                  className="group relative bg-surface-container-lowest rounded-3xl p-6 shadow-xs hover:shadow-xl transition-all duration-300 border border-outline-variant/30 flex flex-col justify-between overflow-hidden"
                >
                  {/* Subtle top accent bar */}
                  <div
                    className={cn(
                      "absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r",
                      meta.gradient
                    )}
                  />

                  <div>
                    {/* Header: Category Icon, Title, and Badge */}
                    <div className="flex items-start justify-between gap-3 mb-4">
                      <div className="flex items-center gap-3">
                        <div
                          className={cn(
                            "w-10 h-10 rounded-2xl flex items-center justify-center shrink-0 border transition-transform duration-200 group-hover:scale-110",
                            meta.badgeColor
                          )}
                        >
                          <Icon className={cn("w-5 h-5", meta.accent)} />
                        </div>
                        <div>
                          <h3 className="font-space-grotesk text-base font-bold text-on-surface leading-tight">
                            {deliv.title}
                          </h3>
                          <span className="text-[11px] text-on-surface-variant font-medium">
                            {deliv.items.length} points inclus
                          </span>
                        </div>
                      </div>

                      <span
                        className={cn(
                          "text-[10px] font-bold px-2 py-0.5 rounded-full border whitespace-nowrap",
                          meta.badgeColor
                        )}
                      >
                        {meta.pillText}
                      </span>
                    </div>

                    <div className="h-px bg-outline-variant/20 mb-4" />

                    {/* Deliverable Items List */}
                    <ul className="flex flex-col gap-2.5 text-xs sm:text-sm text-on-surface/90">
                      {deliv.items.map((item, itemIdx) => (
                        <li key={itemIdx} className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span className="leading-snug font-medium text-on-surface/90">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6 pt-3 border-t border-outline-variant/15 flex items-center justify-between text-[11px] text-on-surface-variant">
                    <span className="inline-flex items-center gap-1 font-semibold text-secondary">
                      <Check className="w-3.5 h-3.5" />
                      Inclus dans la formule
                    </span>
                    <span>100% conforme</span>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Reassurance Banner from offres.md */}
          <div className="rounded-3xl bg-secondary/10 border border-secondary/20 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-secondary text-on-secondary flex items-center justify-center shrink-0 shadow-sm">
                <ShieldCheck className="w-7 h-7" />
              </div>
              <div className="flex flex-col gap-0.5">
                <strong className="text-base sm:text-lg font-bold text-on-surface font-space-grotesk">
                  Garantie &amp; Assistance incluses
                </strong>
                <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                  Nos prestations incluent une assistance à distance complète en cas de contrôle fiscal ou URSSAF. Vous n’êtes jamais seul face à l’Administration.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full md:w-auto">
              <div className="text-center md:text-right">
                <span className="text-[11px] text-on-surface-variant font-medium block">
                  Une question avant de vous lancer ?
                </span>
                <a
                  href={siteConfig.phoneHref}
                  className="text-sm font-extrabold text-secondary hover:underline inline-flex items-center gap-1"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>01 70 60 00 82</span>
                </a>
              </div>

              <a
                href={siteConfig.phoneHref}
                className="px-5 py-3 rounded-xl bg-secondary text-on-secondary font-bold text-xs sm:text-sm hover:bg-on-secondary-container transition-colors shadow-xs flex items-center justify-center gap-2 w-full sm:w-auto"
              >
                <Phone className="w-4 h-4" />
                <span>Nous appeler</span>
              </a>
            </div>
          </div>
        </section>

        {/* 3. CHECKOUT CONFIRMATION & PAYMENT PANEL (After Details) */}
        {isNumericFormula && (
          <section id="checkout-section" className="flex flex-col gap-6 pt-6 border-t border-outline-variant/30">
            <div className="rounded-3xl bg-surface-container-low border border-outline-variant/30 p-6 sm:p-10 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-md">
              <div className="flex flex-col gap-2 max-w-xl">
                <div className="inline-flex items-center gap-1.5 text-xs font-bold text-secondary uppercase tracking-wider">
                  <Lock className="w-3.5 h-3.5" />
                  <span>Paiement 100% sécurisé via SSL</span>
                </div>

                <div className="flex flex-wrap items-baseline gap-3">
                  <h3 className="font-space-grotesk text-2xl sm:text-3xl font-bold text-on-surface">
                    Formule mensuelle de gestion :
                  </h3>
                  <span className="font-space-grotesk text-3xl sm:text-4xl font-extrabold text-secondary">
                    {activePriceTotal} € HT
                  </span>
                  <span className="text-xs font-semibold text-on-surface-variant">
                    ({activeTier ? activeTier.label : "Forfait"})
                  </span>
                </div>

                {activeTier && activeTier.savings && (
                  <div className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200 w-fit">
                    <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                    <span>{activeTier.savings}</span>
                  </div>
                )}

                <p className="text-xs text-on-surface-variant mt-1">
                  Sans engagement • Résiliation libre avec préavis de 30 jours • Prise en charge immédiate de vos pièces comptables.
                </p>
              </div>

              {/* Checkout Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto shrink-0">
                <button
                  type="button"
                  onClick={() => setPaypalOpen(true)}
                  className="w-full sm:w-auto px-7 py-4 rounded-2xl bg-[#FFC439] text-[#111111] hover:bg-[#F4B41A] font-extrabold text-sm flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all cursor-pointer"
                >
                  <Lock className="w-4 h-4 text-[#003087]" />
                  <span>Régler {activePriceTotal} € via PayPal</span>
                </button>

                <Link
                  href="/#contact"
                  className="w-full sm:w-auto px-6 py-4 rounded-2xl bg-surface-container-lowest border border-outline-variant/30 hover:bg-surface-container transition-colors text-xs sm:text-sm font-bold text-on-surface flex items-center justify-center gap-2"
                >
                  <FileText className="w-4 h-4 text-secondary" />
                  <span>Demander un devis</span>
                </Link>
              </div>
            </div>
          </section>
        )}

        {/* 4. Advantages & Commitments */}
        <div className="bg-surface-container-low rounded-3xl p-6 sm:p-8 border border-outline-variant/30 flex flex-col gap-5">
          <div className="flex items-center gap-2 text-secondary font-bold text-base font-space-grotesk">
            <ShieldCheck className="w-5 h-5 text-secondary" />
            <span>Les engagements TOP-COMPTA.FR pour {formula.name}</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {formula.advantages.map((adv, i) => (
              <div
                key={i}
                className="p-5 rounded-2xl bg-surface-container-lowest shadow-xs text-xs sm:text-sm text-on-surface font-semibold border border-outline-variant/20 flex items-start gap-3"
              >
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <span className="leading-relaxed">{adv}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* PayPal Subscription Modal */}
      {paypalOpen && (
        <PayPalModal
          isOpen={true}
          offerName={formula.name}
          amount={activePriceTotal}
          pricingTiers={formula.pricingTiers}
          initialDurationMonths={selectedDuration}
          onClose={() => setPaypalOpen(false)}
        />
      )}
    </div>
  );
}
