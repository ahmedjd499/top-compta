import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Phone, Mail, ShieldCheck } from "lucide-react";
import { OffersComparisonTable } from "@/components/sections/offers-comparison-table";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: "Comparatif complet des formules comptables | TOP-COMPTA.FR",
  description:
    "Comparez en détail nos formules comptables : Formule Essentiel, Confort, Indépendant, SCI et SOS Compta. Tarifs dégressifs, services inclus et facturation électronique 2026.",
};

export default function ComparatifPage() {
  return (
    <div className="w-full min-h-screen flex flex-col bg-surface">
      {/* Top Banner / Hero */}
      <section
        className="relative overflow-hidden pt-12 pb-10 border-b border-outline-variant/20"
        style={{
          background:
            "radial-gradient(circle at 85% 12%, rgba(36, 87, 255, 0.12), transparent 34%), radial-gradient(circle at 68% 76%, rgba(34, 183, 198, 0.10), transparent 32%), linear-gradient(180deg, var(--surface) 0%, var(--surface-container-low) 100%)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Link
            href="/offres"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-secondary hover:underline mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Retour aux offres</span>
          </Link>

          <div className="text-center max-w-3xl mx-auto">
            <span className="px-3.5 py-1 rounded-full bg-secondary/15 text-secondary text-xs font-bold uppercase tracking-wider">
              Guide &amp; Grille Comparative
            </span>
            <h1 className="font-space-grotesk text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-on-surface mt-3 mb-4">
              Tableau comparatif de nos formules
            </h1>
            <p className="text-sm sm:text-base text-on-surface-variant leading-relaxed">
              Analysez les fonctionnalités et découvrez nos tarifs dégressifs sur 1 mois, 3 mois, 6 mois et 1 an. Sans engagement et avec assistance dédiée.
            </p>
          </div>
        </div>
      </section>

      {/* Main Comparison Section */}
      <main className="flex-1 w-full py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <OffersComparisonTable showTitle={false} />

          {/* Quick FAQ / Assistance Card */}
          <div className="mt-16 rounded-3xl bg-surface-container-low border border-outline-variant/30 p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex flex-col gap-2 max-w-xl">
              <h3 className="font-space-grotesk text-xl sm:text-2xl font-bold text-on-surface">
                Besoin d&apos;aide pour choisir la formule adaptée ?
              </h3>
              <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                Nos experts comptables et conseillers vous orientent selon la forme juridique de votre entreprise, votre volume de pièces et vos options fiscales.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full sm:w-auto">
              <a
                href={siteConfig.phoneHref}
                className="w-full sm:w-auto px-5 py-3 rounded-xl bg-secondary text-on-secondary hover:bg-on-secondary-container transition-colors text-xs sm:text-sm font-bold flex items-center justify-center gap-2 shadow-sm"
              >
                <Phone className="w-4 h-4" />
                <span>Appeler le {siteConfig.phone}</span>
              </a>

              <Link
                href="/#contact"
                className="w-full sm:w-auto px-5 py-3 rounded-xl bg-surface-container-lowest border border-outline-variant/30 hover:bg-surface-container transition-colors text-xs sm:text-sm font-bold text-on-surface flex items-center justify-center gap-2"
              >
                <Mail className="w-4 h-4 text-secondary" />
                <span>Demander un devis</span>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
