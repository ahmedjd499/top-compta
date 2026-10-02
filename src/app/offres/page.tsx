import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, ArrowRight, Zap, Star } from "lucide-react";
import { offersContent } from "@/content/home";
import { detailedFormulas } from "@/content/offers";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Nos Formules & Tarifs Forfaitaires",
  description:
    "Découvrez nos formules d'externalisation comptable sans engagement : Essentiel (124€/mois), Confort (184€/mois), Indépendant (204€/mois), SCI (124€/mois).",
};

export default function OffresPage() {
  return (
    <div className="w-full py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col gap-14">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto flex flex-col items-center gap-3">
          <span className="px-3.5 py-1.5 rounded-full bg-surface-container-high text-secondary text-xs font-bold uppercase tracking-wider">
            {offersContent.badge}
          </span>
          <h1 className="font-space-grotesk text-3xl sm:text-4xl lg:text-5xl font-bold text-on-surface tracking-tight">
            {offersContent.title}
          </h1>
          <p className="text-base text-on-surface-variant">
            {offersContent.subtitle}
          </p>
        </div>

        {/* 4 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {offersContent.plans.map((plan) => {
            const isFeatured = plan.recommended;

            return (
              <div
                key={plan.id}
                className={cn(
                  "bg-surface-container-lowest rounded-2xl p-6 sm:p-7 shadow-xs hover:shadow-xl transition-all flex flex-col justify-between relative border",
                  isFeatured
                    ? "border-secondary/40 shadow-lg ring-2 ring-secondary/20 lg:-translate-y-2"
                    : "border-outline-variant/30"
                )}
              >
                {isFeatured && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-tertiary-fixed text-on-tertiary-fixed text-xs px-3.5 py-1 rounded-full shadow-md font-bold tracking-wider uppercase flex items-center gap-1">
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <span>Recommandée</span>
                  </div>
                )}

                <div className="flex flex-col gap-3">
                  <span
                    className={cn(
                      "text-xs uppercase tracking-wider font-bold",
                      isFeatured ? "text-secondary" : "text-on-surface-variant"
                    )}
                  >
                    {plan.tag}
                  </span>

                  <h2 className="font-space-grotesk text-xl font-bold text-on-surface">
                    {plan.name}
                  </h2>

                  <div className="flex items-baseline gap-1 my-1">
                    <span
                      className={cn(
                        "font-space-grotesk text-4xl font-bold",
                        isFeatured ? "text-secondary" : "text-on-surface"
                      )}
                    >
                      {plan.price}€
                    </span>
                    <span className="text-xs text-on-surface-variant">
                      {plan.pricePeriod}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
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

                <div className="pt-6 mt-4 border-t border-outline-variant/20 flex flex-col gap-2.5">
                  <Link
                    href={plan.href}
                    className={cn(
                      "w-full py-2.5 px-4 rounded-xl text-xs sm:text-sm font-bold text-center inline-flex items-center justify-center gap-1.5 transition-colors cursor-pointer",
                      isFeatured
                        ? "bg-secondary text-on-secondary hover:bg-on-secondary-container shadow-md"
                        : "bg-surface-container text-on-surface hover:bg-surface-container-high"
                    )}
                  >
                    <span>Détails &amp; Souscription</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Detailed Comparison Table */}
        <div className="mt-8 bg-surface-container-lowest rounded-3xl p-6 sm:p-10 shadow-xs border border-outline-variant/30 flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-secondary">
              Tableau Comparatif
            </span>
            <h2 className="font-space-grotesk text-2xl font-bold text-on-surface">
              Comparatif détaillé des prestations par formule
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm border-collapse min-w-[640px]">
              <thead>
                <tr className="border-b border-outline-variant/30 text-on-surface font-space-grotesk">
                  <th className="py-3 px-4 font-bold">Services &amp; Livrables</th>
                  <th className="py-3 px-4 font-bold text-center">Essentiel (124€)</th>
                  <th className="py-3 px-4 font-bold text-center bg-secondary/10 text-secondary">Confort (184€)</th>
                  <th className="py-3 px-4 font-bold text-center">Indépendant (204€)</th>
                  <th className="py-3 px-4 font-bold text-center">SCI (124€)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-outline-variant/20 text-xs sm:text-sm">
                <tr>
                  <td className="py-3 px-4 font-medium">Saisie courante &amp; pointage</td>
                  <td className="py-3 px-4 text-center text-secondary font-bold">✓</td>
                  <td className="py-3 px-4 text-center text-secondary font-bold bg-secondary/5">✓</td>
                  <td className="py-3 px-4 text-center text-secondary font-bold">✓</td>
                  <td className="py-3 px-4 text-center text-secondary font-bold">✓</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium">Accès GED Cloud MyCompanyFiles 24/7</td>
                  <td className="py-3 px-4 text-center text-secondary font-bold">✓</td>
                  <td className="py-3 px-4 text-center text-secondary font-bold bg-secondary/5">✓</td>
                  <td className="py-3 px-4 text-center text-secondary font-bold">✓</td>
                  <td className="py-3 px-4 text-center text-secondary font-bold">✓</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium">Déclarations fiscales (TVA, CFE, IS)</td>
                  <td className="py-3 px-4 text-center text-on-surface-variant">-</td>
                  <td className="py-3 px-4 text-center text-secondary font-bold bg-secondary/5">✓</td>
                  <td className="py-3 px-4 text-center text-secondary font-bold">✓</td>
                  <td className="py-3 px-4 text-center text-secondary font-bold">2072 / 2065</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium">Déclarations sociales TNS &amp; URSSAF</td>
                  <td className="py-3 px-4 text-center text-on-surface-variant">-</td>
                  <td className="py-3 px-4 text-center text-on-surface-variant bg-secondary/5">-</td>
                  <td className="py-3 px-4 text-center text-secondary font-bold">✓</td>
                  <td className="py-3 px-4 text-center text-on-surface-variant">-</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium">Déclaration 2042 C-Pro</td>
                  <td className="py-3 px-4 text-center text-on-surface-variant">-</td>
                  <td className="py-3 px-4 text-center text-on-surface-variant bg-secondary/5">-</td>
                  <td className="py-3 px-4 text-center text-secondary font-bold">✓</td>
                  <td className="py-3 px-4 text-center text-on-surface-variant">-</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium">Raccordement PA Facturation Électronique 2026</td>
                  <td className="py-3 px-4 text-center text-secondary font-bold">✓</td>
                  <td className="py-3 px-4 text-center text-secondary font-bold bg-secondary/5">✓</td>
                  <td className="py-3 px-4 text-center text-secondary font-bold">✓</td>
                  <td className="py-3 px-4 text-center text-secondary font-bold">✓</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium">Tableaux de bord mensuels &amp; reportings</td>
                  <td className="py-3 px-4 text-center text-on-surface-variant">-</td>
                  <td className="py-3 px-4 text-center text-secondary font-bold bg-secondary/5">✓</td>
                  <td className="py-3 px-4 text-center text-secondary font-bold">✓</td>
                  <td className="py-3 px-4 text-center text-on-surface-variant">-</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
