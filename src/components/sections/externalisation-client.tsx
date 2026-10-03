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
  Scale,
  ShieldCheck,
} from "lucide-react";
import { externalisationContent } from "@/content/externalisation";

export function ExternalisationClient() {
  return (
    <div className="w-full min-h-screen flex flex-col bg-surface overflow-hidden">
      {/* 1. Hero / Introduction */}
      <section
        className="relative overflow-hidden pt-16 pb-14 border-b border-outline-variant/20"
        style={{
          background:
            "radial-gradient(circle at 85% 15%, rgba(55, 85, 195, 0.12), transparent 40%), radial-gradient(circle at 15% 85%, rgba(34, 183, 198, 0.10), transparent 40%), linear-gradient(180deg, var(--color-surface) 0%, var(--color-surface-container-low) 100%)",
        }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-secondary/10 text-secondary text-xs font-bold uppercase tracking-wider mb-6 border border-secondary/20 shadow-xs">
            <Scale className="w-3.5 h-3.5" />
            <span>Cadre Légal &amp; Réglementaire</span>
          </div>

          <h1 className="font-space-grotesk text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-on-surface leading-snug">
            {externalisationContent.hero.intro}
          </h1>
        </div>
      </section>

      {/* 2. Les 3 éléments */}
      <section className="py-12 sm:py-16 max-w-6xl mx-auto px-4 sm:px-6 w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {externalisationContent.elements.map((el, idx) => (
            <div
              key={idx}
              className="flex flex-col bg-surface-container-lowest rounded-2xl p-7 border border-outline-variant/30 shadow-xs hover:shadow-md hover:border-secondary/40 transition-all duration-200"
            >
              <div className="flex items-center justify-between mb-5">
                <div className="w-12 h-12 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center">
                  {idx === 0 && <GraduationCap className="w-6 h-6" />}
                  {idx === 1 && <Cpu className="w-6 h-6" />}
                  {idx === 2 && <Send className="w-6 h-6" />}
                </div>
                <span className="font-space-grotesk text-2xl font-bold text-secondary/30">
                  0{idx + 1}
                </span>
              </div>
              <h3 className="font-space-grotesk text-lg font-bold text-on-surface mb-3">
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
      <section className="py-14 sm:py-16 bg-surface-container-low border-y border-outline-variant/20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="font-space-grotesk text-2xl sm:text-3xl font-extrabold text-on-surface mb-4">
              {externalisationContent.providerRule.title}
            </h2>
            <p className="text-sm sm:text-base text-on-surface-variant leading-relaxed">
              {externalisationContent.providerRule.text}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Prestataire basé en France */}
            <div className="bg-surface-container-lowest rounded-2xl p-7 sm:p-8 border border-outline-variant/30 shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <h3 className="font-space-grotesk text-lg font-bold text-on-surface">
                    {externalisationContent.providerRule.france.title}
                  </h3>
                </div>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  {externalisationContent.providerRule.france.text}
                </p>
              </div>
            </div>

            {/* Prestataire basé à l'étranger */}
            <div className="bg-surface-container-lowest rounded-2xl p-7 sm:p-8 border-2 border-secondary shadow-md flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center">
                    <Globe2 className="w-5 h-5" />
                  </div>
                  <h3 className="font-space-grotesk text-lg font-bold text-on-surface">
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
        <div className="bg-primary-container text-white rounded-3xl p-8 sm:p-12 shadow-xl relative overflow-hidden">
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-secondary-fixed text-xs font-bold uppercase tracking-wider mb-6 border border-white/15">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Analyse &amp; Garanties</span>
            </div>

            <h2 className="font-space-grotesk text-2xl sm:text-3xl font-extrabold mb-6">
              {externalisationContent.alternative.title}
            </h2>

            <p className="text-sm sm:text-base text-gray-200 leading-relaxed font-normal">
              {externalisationContent.alternative.text}
            </p>
          </div>
        </div>
      </section>

      {/* 5. La Loi, noir sur blanc */}
      <section className="py-14 sm:py-18 bg-surface-container-low border-t border-outline-variant/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="font-space-grotesk text-2xl sm:text-3xl font-extrabold text-on-surface mb-4">
              {externalisationContent.theLaw.title}
            </h2>
            <p className="text-sm sm:text-base text-on-surface-variant leading-relaxed">
              {externalisationContent.theLaw.intro}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {externalisationContent.theLaw.quotes.map((q, idx) => (
              <div
                key={idx}
                className="flex flex-col justify-between bg-surface-container-lowest p-6 sm:p-7 rounded-2xl border border-outline-variant/30 shadow-xs hover:border-secondary/40 transition-colors"
              >
                <div>
                  <Quote className="w-7 h-7 text-secondary/30 mb-4" />
                  <p className="text-sm font-medium text-on-surface leading-relaxed mb-6 italic">
                    « {q.quote} »
                  </p>
                </div>

                <div className="pt-4 border-t border-outline-variant/20 text-xs">
                  <span className="font-bold text-on-surface block">{q.source}</span>
                  {q.date && (
                    <span className="text-on-surface-variant text-[11px] block mt-0.5">
                      {q.date}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Prêt à externaliser votre comptabilité en toute sérénité ? */}
      <section className="py-14 sm:py-20 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <div className="bg-surface-container-lowest rounded-3xl p-8 sm:p-12 border border-outline-variant/30 shadow-lg">
          <h2 className="font-space-grotesk text-2xl sm:text-3xl font-extrabold text-on-surface mb-4">
            {externalisationContent.cta.title}
          </h2>

          <p className="text-sm sm:text-base text-on-surface-variant max-w-2xl mx-auto mb-8 leading-relaxed">
            {externalisationContent.cta.text}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href={externalisationContent.cta.buttonQuote.href}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-secondary text-white font-bold text-sm shadow-md hover:bg-on-secondary-container transition-all"
            >
              <span>{externalisationContent.cta.buttonQuote.text}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href={externalisationContent.cta.buttonAdn.href}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-surface-container text-on-surface font-semibold text-sm border border-outline-variant/30 hover:border-secondary transition-all"
            >
              <span>{externalisationContent.cta.buttonAdn.text}</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
