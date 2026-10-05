"use client";

import React, { useState } from "react";
import Link from "next/link";
import { CheckCircle2, X, HelpCircle, ArrowRight, Lock, Star, Sparkles, ShieldCheck } from "lucide-react";
import { comparisonCategories, detailedFormulas, PricingTier } from "@/content/offers";
import { PayPalModal } from "@/components/ui/paypal-modal";
import { cn } from "@/lib/utils";

interface OffersComparisonTableProps {
  showTitle?: boolean;
}

export function OffersComparisonTable({ showTitle = true }: OffersComparisonTableProps) {
  const [selectedDuration, setSelectedDuration] = useState<number>(12); // Default to 12 months for best savings
  const [selectedFormulaForPaypal, setSelectedFormulaForPaypal] = useState<{
    name: string;
    amount: number;
    pricingTiers?: PricingTier[];
  } | null>(null);

  const columns = [
    {
      id: "essentiel",
      name: "Formule Essentiel",
      tag: "Pack Débutant",
      slug: "formule-essentiel",
      recommended: false,
      tiers: detailedFormulas["formule-essentiel"]?.pricingTiers || [],
    },
    {
      id: "confort",
      name: "Formule Confort",
      tag: "Délégation Totale",
      slug: "formule-confort",
      recommended: true,
      tiers: detailedFormulas["formule-confort"]?.pricingTiers || [],
    },
    {
      id: "independant",
      name: "Formule Indépendant",
      tag: "Freelances & TNS",
      slug: "formule-independant",
      recommended: false,
      tiers: detailedFormulas["formule-independant"]?.pricingTiers || [],
    },
    {
      id: "sci",
      name: "Formule SCI",
      tag: "Gestion Immobilière",
      slug: "formule-sci",
      recommended: false,
      tiers: detailedFormulas["formule-sci"]?.pricingTiers || [],
    },
    {
      id: "sos-compta",
      name: "Formule SOS Compta",
      tag: "Rattrapage",
      slug: "formule-sos-compta",
      recommended: false,
      tiers: detailedFormulas["formule-sos-compta"]?.pricingTiers || [],
    },
  ];

  return (
    <div className="w-full">
      {showTitle && (
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-secondary/10 text-secondary text-xs font-bold mb-3 uppercase tracking-wider">
            Comparatif Détaillé
          </div>
          <h2 className="font-space-grotesk text-2xl sm:text-3xl lg:text-4xl font-extrabold text-on-surface tracking-tight">
            Comparez toutes nos formules en un coup d&apos;œil
          </h2>
          <p className="text-xs sm:text-sm text-on-surface-variant mt-2 leading-relaxed">
            Transparence totale : découvrez l&apos;ensemble des prestations incluses dans chaque formule selon votre statut et vos besoins.
          </p>
        </div>
      )}

      {/* Duration Toggle Selector */}
      <div className="mb-8 flex flex-col items-center justify-center gap-3">
        <span className="text-xs font-bold uppercase tracking-wider text-on-surface-variant">
          Afficher les tarifs pour :
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
                    ? "bg-secondary text-on-secondary shadow-md"
                    : "text-on-surface hover:text-secondary hover:bg-surface-container-high"
                )}
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

      {/* Responsive Table Container */}
      <div className="w-full overflow-x-auto rounded-3xl border border-outline-variant/30 bg-surface-container-lowest shadow-lg">
        <table className="w-full text-left border-collapse min-w-[900px]">
          {/* Table Header: Formulas */}
          <thead>
            <tr className="border-b border-outline-variant/20 bg-surface-container-low/70">
              <th className="p-5 w-[260px] align-bottom">
                <span className="font-space-grotesk text-sm font-bold text-on-surface uppercase tracking-wider block">
                  Modules &amp; Services
                </span>
                <span className="text-[11px] text-on-surface-variant font-normal">
                  Détail par formule
                </span>
              </th>

              {columns.map((col) => {
                const tier =
                  col.tiers.find((t) => t.durationMonths === selectedDuration) ||
                  col.tiers[0];
                const price = tier ? tier.priceTotal : 0;

                return (
                  <th
                    key={col.id}
                    className={cn(
                      "p-5 text-center align-top relative min-w-[155px]",
                      col.recommended && "bg-secondary/5 border-x border-secondary/30"
                    )}
                  >
                    {col.recommended && (
                      <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-jaune-vif text-[#0b1c30] text-[10px] font-bold uppercase tracking-wider mb-1.5 border border-jaune-moutarde/25">
                        <Star className="w-3 h-3 fill-current text-jaune-moutarde" />
                        <span>Recommandé</span>
                      </div>
                    )}
                    <span className="text-[10px] font-bold text-secondary uppercase tracking-wider block">
                      {col.tag}
                    </span>
                    <strong className="text-sm sm:text-base font-bold text-on-surface block mt-0.5">
                      {col.name}
                    </strong>

                    {/* Price display */}
                    <div className="mt-2 flex flex-col items-center">
                      <div className="font-space-grotesk text-2xl font-extrabold text-secondary">
                        {price} €
                      </div>
                      <span className="text-[11px] text-on-surface-variant font-medium">
                        HT ({tier?.label || "Forfait"})
                      </span>
                      {tier && tier.durationMonths > 1 && (
                        <span className="text-[10px] text-emerald-600 font-bold mt-0.5">
                          {tier.monthlyEquivalent.toFixed(2)} €/mois
                        </span>
                      )}
                    </div>

                    {/* CTAs */}
                    <div className="mt-4 flex flex-col gap-1.5">
                      <button
                        type="button"
                        onClick={() =>
                          setSelectedFormulaForPaypal({
                            name: col.name,
                            amount: price,
                            pricingTiers: col.tiers,
                          })
                        }
                        className={cn(
                          "w-full py-1.5 px-2 rounded-lg text-[11px] font-bold flex items-center justify-center gap-1 shadow-xs cursor-pointer transition-all",
                          col.recommended
                            ? "bg-jaune-vif text-[#0b1c30] hover:bg-jaune-vif-hover"
                            : "bg-bleu text-white hover:bg-bleu-hover"
                        )}
                      >
                        <Lock className="w-3 h-3" />
                        <span>Souscrire</span>
                      </button>

                      <Link
                        href={`/offres/${col.slug}`}
                        className="text-[11px] font-semibold text-secondary hover:underline flex items-center justify-center gap-0.5"
                      >
                        <span>Détails</span>
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </th>
                );
              })}
            </tr>
          </thead>

          {/* Table Body: Categories and Features */}
          <tbody className="divide-y divide-outline-variant/15 text-xs">
            {comparisonCategories.map((category) => (
              <React.Fragment key={category.category}>
                {/* Category Header Row */}
                <tr className="bg-surface-container-low/90 font-space-grotesk font-bold text-on-surface">
                  <td
                    colSpan={6}
                    className="py-3 px-5 text-xs sm:text-sm uppercase tracking-wider text-secondary border-t border-b border-outline-variant/30"
                  >
                    {category.category}
                  </td>
                </tr>

                {/* Category Feature Rows */}
                {category.features.map((feature, fIdx) => (
                  <tr
                    key={fIdx}
                    className="hover:bg-surface-container/40 transition-colors"
                  >
                    {/* Feature Name */}
                    <td className="py-3 px-5 text-on-surface font-medium">
                      <div className="flex items-center gap-1.5">
                        <span>{feature.name}</span>
                        {feature.tooltip && (
                          <span
                            title={feature.tooltip}
                            className="text-on-surface-variant hover:text-on-surface cursor-help"
                          >
                            <HelpCircle className="w-3.5 h-3.5" />
                          </span>
                        )}
                      </div>
                    </td>

                    {/* Columns Values */}
                    {[
                      { key: "essentiel", val: feature.essentiel, rec: false },
                      { key: "confort", val: feature.confort, rec: true },
                      { key: "independant", val: feature.independant, rec: false },
                      { key: "sci", val: feature.sci, rec: false },
                      { key: "sosCompta", val: feature.sosCompta, rec: false },
                    ].map((colVal) => {
                      const v = colVal.val;

                      return (
                        <td
                          key={colVal.key}
                          className={cn(
                            "py-3 px-3 text-center align-middle",
                            colVal.rec && "bg-secondary/5 border-x border-secondary/20"
                          )}
                        >
                          {typeof v === "boolean" ? (
                            v ? (
                              <CheckCircle2 className="w-4 h-4 text-emerald-600 mx-auto" />
                            ) : (
                              <span className="text-on-surface-variant/40">—</span>
                            )
                          ) : (
                            <span
                              className={cn(
                                "inline-block px-2 py-0.5 rounded-md font-semibold text-[11px]",
                                v === "-"
                                  ? "text-on-surface-variant/40"
                                  : "bg-surface-container text-on-surface border border-outline-variant/20"
                              )}
                            >
                              {v}
                            </span>
                          )}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>

      {/* Assurance and Contact Bar below Table */}
      <div className="mt-8 rounded-2xl bg-secondary/10 border border-secondary/20 p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <ShieldCheck className="w-6 h-6 text-secondary shrink-0" />
          <div className="text-xs sm:text-sm text-on-surface">
            <strong>Garantie &amp; Assistance incluses sur toutes nos formules :</strong>{" "}
            Assistance à distance complète en cas de contrôle fiscal ou URSSAF.
          </div>
        </div>

        <Link
          href="/#contact"
          className="shrink-0 px-4 py-2 rounded-xl bg-secondary text-on-secondary text-xs font-bold hover:bg-on-secondary-container transition-colors shadow-xs"
        >
          Demander conseil à un expert
        </Link>
      </div>

      {/* PayPal Subscription Modal */}
      {selectedFormulaForPaypal && (
        <PayPalModal
          isOpen={true}
          offerName={selectedFormulaForPaypal.name}
          amount={selectedFormulaForPaypal.amount}
          pricingTiers={selectedFormulaForPaypal.pricingTiers}
          initialDurationMonths={selectedDuration}
          onClose={() => setSelectedFormulaForPaypal(null)}
        />
      )}
    </div>
  );
}
