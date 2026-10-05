"use client";

import React from "react";
import Link from "next/link";
import {
  GraduationCap,
  Cpu,
  Send,
  Building2,
  Globe2,
  Quote,
  ArrowRight,
  ShieldCheck,
  AlertTriangle,
  CheckCircle2,
  Sparkles,
  ArrowDown,
  HelpCircle,
  Scale,
} from "lucide-react";
import { externalisationContent } from "@/content/externalisation";
import { cn } from "@/lib/utils";

export function ExternalisationClient() {
  return (
    <div className="w-full min-h-screen flex flex-col bg-surface overflow-hidden">
      {/* 1. Hero / Section 1 : Problème ➔ Solution */}
      <section
        className="relative overflow-hidden pt-16 pb-16 lg:pt-20 lg:pb-20 border-b border-bleu/20 bg-gradient-to-b from-blue-50/70 via-amber-50/30 to-surface"
      >
        {/* Ambient decorative glowing auras */}
        <div className="absolute top-10 left-10 w-[500px] h-[500px] bg-bleu/12 rounded-full blur-3xl pointer-events-none -z-10" />
        <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-jaune-vif/15 rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {/* Header Title with exact pre-title */}
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-jaune-vif text-[#0b1c30] text-xs font-bold uppercase tracking-wider mb-4 border border-jaune-moutarde/30 shadow-xs">
              <HelpCircle className="w-3.5 h-3.5 text-jaune-moutarde" />
              <span>{externalisationContent.hero.badge}</span>
            </div>

            <h1 className="font-space-grotesk text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-bleu-petrole leading-tight">
              {externalisationContent.hero.title}
            </h1>
          </div>

          {/* Problem vs Solution Split Architecture */}
          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-stretch max-w-5xl mx-auto">
            {/* The Problem / Idée Reçue */}
            <div className="relative flex flex-col justify-between bg-white rounded-3xl p-7 sm:p-9 border-2 border-jaune-vif shadow-lg">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-jaune-vif text-[#0b1c30] text-xs font-bold uppercase tracking-wider">
                    <AlertTriangle className="w-3.5 h-3.5 text-jaune-moutarde" />
                    <span>L&apos;Idée reçue / Le Problème</span>
                  </span>
                  <span className="text-xs font-bold text-jaune-moutarde bg-amber-50 px-2.5 py-0.5 rounded-md border border-jaune-moutarde/30">
                    Croyance erronée
                  </span>
                </div>

                <h2 className="font-space-grotesk text-xl sm:text-2xl font-bold text-bleu-petrole leading-snug">
                  {externalisationContent.hero.introLead}
                </h2>

                <p className="text-sm sm:text-base text-on-surface-variant leading-relaxed">
                  Beaucoup d&apos;entreprises et d&apos;indépendants croient à tort qu&apos;un expert-comptable est imposé par la loi en France.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-jaune-vif/30 flex items-center gap-2 text-xs font-bold text-jaune-moutarde">
                <span className="w-2.5 h-2.5 rounded-full bg-jaune-vif shrink-0 border border-jaune-citron" />
                <span>Aucune obligation légale n&apos;existe dans le Code général des impôts</span>
              </div>
            </div>

            {/* Central Transition Indicator for desktop */}
            <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-bleu text-white shadow-xl items-center justify-center border-4 border-white">
              <ArrowRight className="w-5 h-5" />
            </div>

            {/* Central Transition Indicator for mobile */}
            <div className="flex lg:hidden justify-center -my-3 z-10">
              <div className="w-10 h-10 rounded-full bg-bleu text-white shadow-md flex items-center justify-center border-2 border-white">
                <ArrowDown className="w-4 h-4" />
              </div>
            </div>

            {/* The Solution / La Réalité Légale */}
            <div className="relative flex flex-col justify-between bg-white rounded-3xl p-7 sm:p-9 border-2 border-bleu shadow-xl ring-4 ring-bleu/10">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-bleu text-white text-xs font-bold uppercase tracking-wider shadow-xs">
                    <Sparkles className="w-3.5 h-3.5 text-jaune-citron" />
                    <span>La Solution / La Vérité Légale</span>
                  </span>
                  <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-md border border-emerald-200 flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                    Réalité Légale
                  </span>
                </div>

                <h2 className="font-space-grotesk text-xl sm:text-2xl font-extrabold text-bleu leading-snug">
                  {externalisationContent.hero.introStatement}
                </h2>

                <p className="text-sm sm:text-base text-on-surface font-medium leading-relaxed">
                  {externalisationContent.hero.introCondition}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-bleu/20 flex items-center justify-between text-xs font-bold text-bleu">
                <span>3 éléments indispensables pour déclarer ↓</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Les 3 éléments */}
      <section className="py-12 sm:py-16 max-w-6xl mx-auto px-4 sm:px-6 w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {externalisationContent.elements.map((el, idx) => (
            <div
              key={idx}
              className={cn(
                "flex flex-col bg-white rounded-2xl p-7 border-2 shadow-sm hover:shadow-xl transition-all duration-200",
                idx === 0
                  ? "border-bleu/25 hover:border-bleu"
                  : idx === 1
                  ? "border-jaune-vif/40 hover:border-jaune-vif"
                  : "border-bleu-turquoise/30 hover:border-bleu-turquoise"
              )}
            >
              <div className="flex items-center justify-between mb-5">
                <div
                  className={cn(
                    "w-12 h-12 rounded-xl flex items-center justify-center shadow-xs border",
                    idx === 0
                      ? "bg-blue-50 text-bleu border-bleu/20"
                      : idx === 1
                      ? "bg-amber-50 text-jaune-moutarde border-jaune-moutarde/30"
                      : "bg-cyan-50 text-bleu-turquoise border-bleu-turquoise/30"
                  )}
                >
                  {idx === 0 && <GraduationCap className="w-6 h-6" />}
                  {idx === 1 && <Cpu className="w-6 h-6" />}
                  {idx === 2 && <Send className="w-6 h-6" />}
                </div>
                <span className={cn(
                  "font-space-grotesk text-2xl font-extrabold select-none",
                  idx === 0
                    ? "text-bleu/30"
                    : idx === 1
                    ? "text-jaune-moutarde/30"
                    : "text-bleu-turquoise/30"
                )}>
                  0{idx + 1}
                </span>
              </div>
              <h3 className="font-space-grotesk text-lg font-bold text-bleu-petrole mb-3">
                {el.title}
              </h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                {el.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Et si l'entreprise fait appel à un prestataire externe ? */}
      <section className="py-14 sm:py-16 bg-gradient-to-b from-blue-50/40 via-amber-50/20 to-slate-50 border-y border-bleu/15">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="font-space-grotesk text-2xl sm:text-3xl font-extrabold text-bleu-petrole mb-4">
              {externalisationContent.providerRule.title}
            </h2>
            <p className="text-sm sm:text-base text-on-surface-variant leading-relaxed">
              {externalisationContent.providerRule.text}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Prestataire basé en France */}
            <div className="bg-white rounded-2xl p-7 sm:p-8 border-2 border-jaune-vif/50 shadow-md flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-50 text-jaune-moutarde border border-jaune-moutarde/25 flex items-center justify-center">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <h3 className="font-space-grotesk text-lg font-bold text-bleu-petrole">
                    {externalisationContent.providerRule.france.title}
                  </h3>
                </div>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  {externalisationContent.providerRule.france.text}
                </p>
              </div>
            </div>

            {/* Prestataire basé à l'étranger */}
            <div className="bg-white rounded-2xl p-7 sm:p-8 border-2 border-bleu shadow-xl ring-2 ring-bleu/15 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-bleu border border-bleu/25 flex items-center justify-center">
                    <Globe2 className="w-5 h-5" />
                  </div>
                  <h3 className="font-space-grotesk text-lg font-bold text-bleu">
                    {externalisationContent.providerRule.foreign.title}
                  </h3>
                </div>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  {externalisationContent.providerRule.foreign.text}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. L'externalisation comptable une alternative crédible ? */}
      <section className="py-14 sm:py-20 max-w-5xl mx-auto px-4 sm:px-6 w-full">
        <div className="bg-gradient-to-br from-bleu via-[#1a386b] to-bleu-petrole text-white rounded-3xl p-8 sm:p-12 shadow-2xl border-2 border-jaune-vif/50 relative overflow-hidden">
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-jaune-vif text-[#0b1c30] text-xs font-extrabold uppercase tracking-wider mb-6 border border-jaune-citron shadow-md">
              <ShieldCheck className="w-3.5 h-3.5 text-jaune-moutarde" />
              <span>{externalisationContent.alternative.badge}</span>
            </div>

            <h2 className="font-space-grotesk text-2xl sm:text-3xl font-extrabold mb-6 text-white">
              {externalisationContent.alternative.title}
            </h2>

            <p className="text-sm sm:text-base text-blue-50 leading-relaxed font-normal">
              {externalisationContent.alternative.text}
            </p>
          </div>
        </div>
      </section>

      {/* 5. La Loi, noir sur blanc */}
      <section className="py-14 sm:py-18 bg-gradient-to-b from-slate-50 via-blue-50/30 to-amber-50/20 border-t border-bleu/15">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-bleu text-white text-xs font-bold uppercase tracking-wider mb-3 shadow-xs">
              <Scale className="w-3.5 h-3.5 text-jaune-citron" />
              <span>{externalisationContent.theLaw.badge}</span>
            </div>

            <h2 className="font-space-grotesk text-2xl sm:text-3xl font-extrabold text-bleu-petrole mb-4">
              {externalisationContent.theLaw.title}
            </h2>
            <p className="text-sm sm:text-base text-on-surface-variant leading-relaxed">
              {externalisationContent.theLaw.intro}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {externalisationContent.theLaw.quotes.map((q, idx) => {
              const isEven = idx % 2 === 1;
              return (
                <div
                  key={idx}
                  className={cn(
                    "flex flex-col justify-between bg-white p-6 sm:p-7 rounded-2xl border-2 shadow-sm transition-all duration-200",
                    isEven
                      ? "border-jaune-vif/40 hover:border-jaune-vif hover:shadow-xl"
                      : "border-bleu/20 hover:border-bleu hover:shadow-xl"
                  )}
                >
                  <div>
                    <Quote className={cn(
                      "w-7 h-7 mb-4",
                      isEven ? "text-jaune-moutarde/30" : "text-bleu/30"
                    )} />
                    <p className="text-sm font-medium text-on-surface leading-relaxed mb-6 italic">
                      « {q.quote} »
                    </p>
                  </div>

                  <div className="pt-4 border-t border-outline-variant/20 text-xs">
                    <span className="font-bold text-bleu block">{q.source}</span>
                    {q.date && (
                      <span className="text-on-surface-variant text-[11px] block mt-0.5">
                        {q.date}
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. Prêt à externaliser votre comptabilité en toute sérénité ? */}
      <section className="py-14 sm:py-20 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <div className="bg-gradient-to-br from-white via-blue-50/40 to-amber-50/30 rounded-3xl p-8 sm:p-12 border-2 border-bleu/30 shadow-xl">
          <h2 className="font-space-grotesk text-2xl sm:text-3xl font-extrabold text-bleu-petrole mb-4">
            {externalisationContent.cta.title}
          </h2>

          <p className="text-sm sm:text-base text-on-surface-variant max-w-2xl mx-auto mb-8 leading-relaxed">
            {externalisationContent.cta.text}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href={externalisationContent.cta.buttonQuote.href}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-bleu text-white font-bold text-sm shadow-md hover:bg-bleu-petrole transition-all"
            >
              <span>{externalisationContent.cta.buttonQuote.text}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href={externalisationContent.cta.buttonAdn.href}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-jaune-vif text-[#0b1c30] font-extrabold text-sm border border-jaune-moutarde/30 hover:bg-jaune-citron shadow-xs transition-all"
            >
              <span>{externalisationContent.cta.buttonAdn.text}</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
