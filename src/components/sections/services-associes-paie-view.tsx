"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  FileText,
  FileSpreadsheet,
  Bell,
  CheckCircle2,
  Phone,
  ArrowLeft,
  Layers,
  Lock,
  Star,
  Sparkles,
  ShieldCheck,
  Zap,
} from "lucide-react";
import { PayPalModal } from "@/components/ui/paypal-modal";
import { siteConfig } from "@/content/site";
import { cn } from "@/lib/utils";

interface ContractItem {
  id: string;
  name: string;
  subtitle?: string;
  standardPrice: number;
  expressPrice: number | null; // null if non disponible
}

const CONTRACT_SERVICES: ContractItem[] = [
  {
    id: "apprentissage",
    name: "Contrat d'Apprentissage",
    standardPrice: 120,
    expressPrice: 150,
  },
  {
    id: "pro",
    name: "Contrat de Professionnalisation",
    standardPrice: 120,
    expressPrice: 150,
  },
  {
    id: "non-cadre",
    name: "Contrat de Travail Non Cadre",
    standardPrice: 120,
    expressPrice: 150,
  },
  {
    id: "vrp",
    name: "Contrat de Travail VRP",
    standardPrice: 120,
    expressPrice: 150,
  },
  {
    id: "cadre",
    name: "Contrat de Travail Cadre",
    standardPrice: 180,
    expressPrice: 230,
  },
  {
    id: "dirigeant",
    name: "Contrat de Dirigeant",
    standardPrice: 240,
    expressPrice: 310,
  },
  {
    id: "agent-commercial",
    name: "Contrat d'Agent Commercial",
    standardPrice: 360,
    expressPrice: 450,
  },
  {
    id: "mise-a-pied",
    name: "Lettre de Mise à Pied (Conservatoire)",
    standardPrice: 60,
    expressPrice: 75,
  },
  {
    id: "licenciement-lettre",
    name: "Lettre de Licenciement",
    standardPrice: 120,
    expressPrice: 150,
  },
  {
    id: "transaction",
    name: "Transaction",
    standardPrice: 120,
    expressPrice: 150,
  },
  {
    id: "rupture-conv",
    name: "Accord de Rupture Conventionnelle",
    standardPrice: 250,
    expressPrice: 300,
  },
  {
    id: "avenant",
    name: "Avenant à un Contrat de Travail",
    standardPrice: 30,
    expressPrice: 40,
  },
  {
    id: "relecture",
    name: "Relecture d'un Contrat de Travail",
    subtitle: "30 € la 1ère page, puis +10 € par page supplémentaire.",
    standardPrice: 30,
    expressPrice: 40,
  },
  {
    id: "reglement-interieur",
    name: "Règlement Intérieur",
    standardPrice: 30,
    expressPrice: 40,
  },
  {
    id: "charte-info",
    name: "Charte Informatique",
    standardPrice: 30,
    expressPrice: 40,
  },
  {
    id: "licenciement-procedure",
    name: "Licenciement (Procédure complète)",
    standardPrice: 700,
    expressPrice: null,
  },
];

export function ServicesAssociesPaieView() {
  const [selectedPayment, setSelectedPayment] = useState<{
    name: string;
    amount: number;
  } | null>(null);

  return (
    <div className="w-full py-8 lg:py-14 bg-surface">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col gap-10">
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

        {/* 1. Header Hero Area */}
        <div className="text-center max-w-3xl mx-auto flex flex-col items-center gap-3">
          <h1 className="font-space-grotesk text-3xl sm:text-4xl lg:text-5xl font-extrabold text-on-surface tracking-tight">
            Services associés à la Paie
          </h1>
          <p className="text-sm sm:text-base text-on-surface-variant font-medium leading-relaxed">
            Découvrez l&apos;ensemble des modules de gestion, suivi comptable et fiscal.
          </p>
        </div>

        {/* 2. Subheader */}
        <div className="text-center mt-2">
          <span className="text-[11px] font-bold text-secondary tracking-widest uppercase block mb-1">
            PAIE · FICHE DE PAIE · VEILLE SOCIALE
          </span>
          <h2 className="font-space-grotesk text-2xl sm:text-3xl font-extrabold text-on-surface tracking-tight">
            Des prestations RH sur mesure
          </h2>
        </div>

        {/* 3. The 3 Main Package Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {/* Card 1: Plan de Paie */}
          <div className="rounded-3xl bg-surface-container-lowest border border-outline-variant/30 p-6 sm:p-7 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative overflow-hidden group">
            <div className="flex flex-col gap-5">
              {/* Header Badge Row */}
              <div className="flex items-center justify-between">
                <div className="w-9 h-9 rounded-xl bg-secondary text-on-secondary font-bold text-sm flex items-center justify-center shadow-xs">
                  01
                </div>
                <span className="text-[10px] font-bold px-3 py-1 rounded-full bg-secondary/10 text-secondary uppercase tracking-wider">
                  FORFAIT UNIQUE
                </span>
              </div>

              {/* Title & Icon */}
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-surface-container text-secondary">
                  <FileText className="w-5 h-5" />
                </div>
                <h3 className="font-space-grotesk text-xl font-bold text-on-surface">
                  Plan de Paie
                </h3>
              </div>

              {/* Features List */}
              <div className="flex flex-col gap-3 pt-4 border-t border-outline-variant/15 text-xs sm:text-sm text-on-surface">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                  <span>Ouverture des caisses</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                  <span>Création et paramétrage du plan de paie</span>
                </div>
              </div>
            </div>

            {/* Bottom Price & Action */}
            <div className="mt-8 pt-5 border-t border-outline-variant/20 flex flex-col gap-3">
              <div className="flex items-baseline gap-2">
                <span className="font-space-grotesk text-3xl font-extrabold text-on-surface">
                  100 €
                </span>
                <span className="text-xs text-on-surface-variant font-medium">
                  une fois au forfait
                </span>
              </div>

              <button
                type="button"
                onClick={() =>
                  setSelectedPayment({
                    name: "Plan de Paie (Forfait unique)",
                    amount: 100,
                  })
                }
                className="w-full py-2.5 px-4 rounded-xl bg-secondary text-on-secondary hover:bg-on-secondary-container transition-colors font-bold text-xs flex items-center justify-center gap-1.5 shadow-xs cursor-pointer"
              >
                <Lock className="w-3.5 h-3.5" />
                <span>Souscrire à ce forfait</span>
              </button>
            </div>
          </div>

          {/* Card 2: La Fiche de Paie (LE PLUS POPULAIRE) */}
          <div className="rounded-3xl bg-surface-container-lowest border-2 border-secondary p-6 sm:p-7 shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-between relative overflow-hidden group">
            {/* Best Offer Top Ribbon */}
            <div className="absolute top-0 left-0 right-0 bg-jaune-vif text-[#0b1c30] text-[10px] font-extrabold uppercase tracking-wider py-1 text-center flex items-center justify-center gap-1 border-b border-jaune-moutarde/25">
              <Star className="w-3 h-3 fill-current text-jaune-moutarde" />
              <span>LE PLUS POPULAIRE</span>
            </div>

            <div className="flex flex-col gap-5 pt-3">
              {/* Header Badge Row */}
              <div className="flex items-center justify-between">
                <div className="w-9 h-9 rounded-xl bg-secondary text-on-secondary font-bold text-sm flex items-center justify-center shadow-xs">
                  02
                </div>
                <span className="text-[10px] font-bold px-3 py-1 rounded-full bg-secondary/10 text-secondary uppercase tracking-wider">
                  MENSUEL
                </span>
              </div>

              {/* Title & Icon */}
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-jaune-vif/20 text-bleu">
                  <FileSpreadsheet className="w-5 h-5" />
                </div>
                <h3 className="font-space-grotesk text-xl font-bold text-on-surface">
                  La Fiche de Paie
                </h3>
              </div>

              {/* Features List */}
              <div className="flex flex-col gap-3 pt-4 border-t border-outline-variant/15 text-xs sm:text-sm text-on-surface">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Établissement de la fiche de paie</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>
                    Déclarations sociales associées dont DSN mensuelles et SDTC
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Gestion Impôt sur le Revenu retenue à la source</span>
                </div>
              </div>
            </div>

            {/* Bottom Price & Action */}
            <div className="mt-8 pt-5 border-t border-outline-variant/20 flex flex-col gap-3">
              <div className="flex items-baseline gap-2">
                <span className="font-space-grotesk text-3xl font-extrabold text-secondary">
                  30 €
                </span>
                <span className="text-xs text-on-surface-variant font-medium">
                  / mois HT
                </span>
              </div>

              <button
                type="button"
                onClick={() =>
                  setSelectedPayment({
                    name: "La Fiche de Paie",
                    amount: 30,
                  })
                }
                className="w-full py-2.5 px-4 rounded-xl bg-jaune-vif text-[#0b1c30] hover:bg-jaune-vif-hover transition-colors font-bold text-xs flex items-center justify-center gap-1.5 shadow-md cursor-pointer"
              >
                <Lock className="w-3.5 h-3.5 text-bleu" />
                <span>Souscrire (30 € / mois)</span>
              </button>
            </div>
          </div>

          {/* Card 3: Veille Sociale */}
          <div className="rounded-3xl bg-surface-container-lowest border border-outline-variant/30 p-6 sm:p-7 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative overflow-hidden group">
            <div className="flex flex-col gap-5">
              {/* Header Badge Row */}
              <div className="flex items-center justify-between">
                <div className="w-9 h-9 rounded-xl bg-secondary text-on-secondary font-bold text-sm flex items-center justify-center shadow-xs">
                  03
                </div>
                <span className="text-[10px] font-bold px-3 py-1 rounded-full bg-secondary/10 text-secondary uppercase tracking-wider">
                  MENSUEL
                </span>
              </div>

              {/* Title & Icon */}
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-surface-container text-secondary">
                  <Bell className="w-5 h-5" />
                </div>
                <h3 className="font-space-grotesk text-xl font-bold text-on-surface">
                  Veille Sociale
                </h3>
              </div>

              {/* Features List */}
              <div className="flex flex-col gap-3 pt-4 border-t border-outline-variant/15 text-xs sm:text-sm text-on-surface">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                  <span>Réponses à 20 problématiques et questions en 24h</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                  <span>Accès téléphonique au consultant social</span>
                </div>
              </div>
            </div>

            {/* Bottom Price & Action */}
            <div className="mt-8 pt-5 border-t border-outline-variant/20 flex flex-col gap-3">
              <div className="flex items-baseline gap-2">
                <span className="font-space-grotesk text-3xl font-extrabold text-on-surface">
                  200 €
                </span>
                <span className="text-xs text-on-surface-variant font-medium">
                  / mois HT
                </span>
              </div>

              <button
                type="button"
                onClick={() =>
                  setSelectedPayment({
                    name: "Veille Sociale",
                    amount: 200,
                  })
                }
                className="w-full py-2.5 px-4 rounded-xl bg-secondary text-on-secondary hover:bg-on-secondary-container transition-colors font-bold text-xs flex items-center justify-center gap-1.5 shadow-xs cursor-pointer"
              >
                <Lock className="w-3.5 h-3.5" />
                <span>Souscrire (200 € / mois)</span>
              </button>
            </div>
          </div>
        </div>

        {/* 4. Center Reassurance Quote Callout */}
        <div className="text-center max-w-3xl mx-auto py-8 px-4 flex flex-col gap-3 border-y border-outline-variant/30 my-4">
          <p className="text-sm sm:text-base text-on-surface font-medium leading-relaxed">
            Ne soyez pas tenté de passer par une solution on-line low cost pour vous mettre en conformité au niveau légal…
          </p>
          <p className="text-base sm:text-lg font-bold text-secondary">
            Sécurisez plutôt votre entreprise et optez pour les compétences de nos{" "}
            <span className="uppercase text-on-surface font-extrabold">
              CONSULTANTS RH*
            </span>{" "}
            spécialisés !
          </p>
          <span className="text-xs text-on-surface-variant italic">
            * Nos consultants RH sont basés en France
          </span>
        </div>

        {/* 5. 16 Contract & Legal Act Cards Grid */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <h3 className="font-space-grotesk text-xl sm:text-2xl font-bold text-on-surface">
              Actes, Contrats &amp; Procédures RH à la carte
            </h3>
            <span className="text-xs text-on-surface-variant font-medium">
              Tarification transparente Standard &amp; Express 72h
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {CONTRACT_SERVICES.map((item) => (
              <div
                key={item.id}
                className="rounded-2xl bg-surface-container-lowest border border-outline-variant/25 p-5 shadow-xs hover:shadow-md hover:border-secondary/40 transition-all duration-200 flex flex-col justify-between gap-4"
              >
                <div>
                  <h4 className="font-space-grotesk text-sm font-bold text-on-surface leading-snug">
                    {item.name}
                  </h4>
                  {item.subtitle && (
                    <p className="text-[11px] text-on-surface-variant mt-1 leading-relaxed">
                      {item.subtitle}
                    </p>
                  )}
                </div>

                {/* Price Display Rows */}
                <div className="flex items-center justify-between pt-3 border-t border-outline-variant/15">
                  {/* Standard Option */}
                  <div className="flex flex-col">
                    <span className="text-[9px] uppercase tracking-wider text-on-surface-variant font-bold">
                      STANDARD
                    </span>
                    <button
                      type="button"
                      onClick={() =>
                        setSelectedPayment({
                          name: `${item.name} (Standard)`,
                          amount: item.standardPrice,
                        })
                      }
                      className="font-space-grotesk text-lg font-extrabold text-on-surface hover:text-secondary transition-colors cursor-pointer text-left"
                      title="Commander en délai Standard"
                    >
                      {item.standardPrice} €
                    </button>
                  </div>

                  {/* Express 72h Option */}
                  <div className="flex flex-col items-end">
                    {item.expressPrice !== null ? (
                      <>
                        <span className="inline-flex items-center gap-1 text-[10px] font-bold text-amber-900 bg-amber-100/90 px-2 py-0.5 rounded-full mb-0.5">
                          <Zap className="w-2.5 h-2.5 fill-current" />
                          <span>EXPRESS 72H</span>
                        </span>
                        <button
                          type="button"
                          onClick={() =>
                            setSelectedPayment({
                              name: `${item.name} (Express 72h)`,
                              amount: item.expressPrice!,
                            })
                          }
                          className="font-space-grotesk text-lg font-extrabold text-amber-700 hover:text-amber-800 transition-colors cursor-pointer text-right"
                          title="Commander en délai Express 72h"
                        >
                          {item.expressPrice} €
                        </button>
                      </>
                    ) : (
                      <span className="inline-block text-[10px] font-medium text-on-surface-variant/60 bg-surface-container px-2 py-0.5 rounded-full mt-2">
                        Non disponible
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 6. Bottom Assistance Contact Callout */}
        <div className="mt-6 rounded-3xl bg-secondary/10 border border-secondary/20 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-center md:text-left">
            <div className="w-12 h-12 rounded-2xl bg-secondary text-on-secondary flex items-center justify-center shrink-0 mx-auto md:mx-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-space-grotesk text-base sm:text-lg font-bold text-on-surface">
                Besoin d&apos;un RH sur-mesure ou d&apos;un acte non listé ?
              </h4>
              <p className="text-xs sm:text-sm text-on-surface-variant mt-0.5">
                Nos juristes et consultants en droit social basés en France vous répondent sans délai.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full sm:w-auto">
            <a
              href={siteConfig.phoneHref}
              className="w-full sm:w-auto px-5 py-3 rounded-xl bg-secondary text-on-secondary hover:bg-on-secondary-container transition-colors font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-xs"
            >
              <Phone className="w-4 h-4" />
              <span>{siteConfig.phone}</span>
            </a>

            <Link
              href="/#contact"
              className="w-full sm:w-auto px-5 py-3 rounded-xl bg-surface-container-lowest border border-outline-variant/30 hover:bg-surface-container transition-colors font-bold text-xs sm:text-sm text-on-surface flex items-center justify-center gap-2"
            >
              <span>Demander un devis</span>
            </Link>
          </div>
        </div>
      </div>

      {/* PayPal Subscription Modal */}
      {selectedPayment && (
        <PayPalModal
          isOpen={true}
          offerName={selectedPayment.name}
          amount={selectedPayment.amount}
          onClose={() => setSelectedPayment(null)}
        />
      )}
    </div>
  );
}
