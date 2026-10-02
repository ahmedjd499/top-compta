"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  CheckCircle2,
  Users,
  ShieldCheck,
  CreditCard,
  FileText,
  Phone,
  ArrowLeft,
  Lock,
} from "lucide-react";
import { DetailedFormula } from "@/content/offers";
import { PayPalModal } from "@/components/ui/paypal-modal";
import { siteConfig } from "@/content/site";

interface FormulaDetailViewProps {
  formula: DetailedFormula;
}

export function FormulaDetailView({ formula }: FormulaDetailViewProps) {
  const [paypalOpen, setPaypalOpen] = useState(false);

  return (
    <div className="w-full py-12 lg:py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 flex flex-col gap-10">
        {/* Back Link */}
        <Link
          href="/offres"
          className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-secondary hover:underline w-fit"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Toutes les formules</span>
        </Link>

        {/* Hero Card */}
        <div className="bg-primary-container text-on-primary rounded-3xl p-6 sm:p-10 lg:p-12 shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div className="flex flex-col gap-3 max-w-xl">
            <span className="px-3 py-1 rounded-md bg-secondary text-on-secondary text-xs font-bold uppercase tracking-wider w-fit">
              {formula.tag}
            </span>
            <h1 className="font-space-grotesk text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-on-primary">
              {formula.name}
            </h1>
            <p className="text-sm sm:text-base text-inverse-on-surface/90 leading-relaxed mt-1">
              {formula.summary}
            </p>
          </div>

          <div className="bg-surface-container-lowest text-on-surface rounded-2xl p-6 shadow-md flex flex-col gap-4 min-w-[260px] text-center">
            <div>
              <span className="text-xs text-on-surface-variant uppercase font-bold tracking-wider">
                Tarif Forfaitaire
              </span>
              <div className="font-space-grotesk text-4xl font-bold text-secondary mt-1">
                {formula.price}€
              </div>
              <span className="text-xs text-on-surface-variant font-medium">
                {formula.period}
              </span>
            </div>

            <div className="flex flex-col gap-2 pt-2">
              <button
                type="button"
                onClick={() => setPaypalOpen(true)}
                className="w-full py-2.5 px-4 rounded-xl bg-[#FFC439] text-[#111111] hover:bg-[#F4B41A] font-bold text-xs flex items-center justify-center gap-1.5 shadow-sm transition-all cursor-pointer"
              >
                <Lock className="w-3.5 h-3.5 text-[#003087]" />
                <span>Régler par PayPal ({formula.price}€)</span>
              </button>

              <Link
                href="/#contact"
                className="w-full py-2.5 px-4 rounded-xl bg-secondary text-on-secondary hover:bg-on-secondary-container font-bold text-xs flex items-center justify-center gap-1.5 shadow-sm transition-colors"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Demander un devis</span>
              </Link>
            </div>

            <span className="text-[11px] text-on-surface-variant">
              Sans engagement • Résiliation libre 30j
            </span>
          </div>
        </div>

        {/* Target Audience */}
        <div className="bg-surface-container-lowest rounded-2xl p-6 sm:p-8 shadow-xs border border-outline-variant/30 flex flex-col gap-4">
          <div className="flex items-center gap-2 text-secondary font-bold text-base font-space-grotesk">
            <Users className="w-5 h-5 text-secondary" />
            <span>À qui s&apos;adresse cette formule ?</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {formula.targetAudience.map((audience, i) => (
              <div
                key={i}
                className="p-4 rounded-xl bg-surface-container-low border border-outline-variant/20 text-xs sm:text-sm font-medium text-on-surface"
              >
                {audience}
              </div>
            ))}
          </div>
        </div>

        {/* Deliverables */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {formula.deliverables.map((deliv, index) => (
            <div
              key={index}
              className="bg-surface-container-lowest rounded-2xl p-6 sm:p-8 shadow-xs border border-outline-variant/30 flex flex-col gap-4"
            >
              <h3 className="font-space-grotesk text-lg font-bold text-on-surface">
                {deliv.title}
              </h3>
              <ul className="flex flex-col gap-2.5 text-xs sm:text-sm text-on-surface">
                {deliv.items.map((item, itemIdx) => (
                  <li key={itemIdx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Advantages & Reassurance */}
        <div className="bg-surface-container-low rounded-2xl p-6 sm:p-8 border border-outline-variant/30 flex flex-col gap-4">
          <div className="flex items-center gap-2 text-secondary font-bold text-base font-space-grotesk">
            <ShieldCheck className="w-5 h-5 text-secondary" />
            <span>Les garanties TOP-COMPTA.FR</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {formula.advantages.map((adv, i) => (
              <div
                key={i}
                className="p-4 rounded-xl bg-surface-container-lowest shadow-xs text-xs sm:text-sm text-on-surface font-medium"
              >
                {adv}
              </div>
            ))}
          </div>
        </div>
      </div>

      {paypalOpen && (
        <PayPalModal
          isOpen={true}
          offerName={formula.name}
          amount={formula.price}
          onClose={() => setPaypalOpen(false)}
        />
      )}
    </div>
  );
}
