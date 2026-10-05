"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  FileText,
  Download,
  ExternalLink,
  Printer,
  ArrowRight,
  Phone,
} from "lucide-react";
import { siteConfig } from "@/content/site";

export function CgvClient() {
  const [iframeError, setIframeError] = useState(false);
  const pdfUrl = "/assets/Condtions%20contractuelles.pdf";

  const handlePrint = () => {
    window.open(pdfUrl, "_blank")?.print();
  };

  return (
    <div className="w-full min-h-screen flex flex-col bg-surface overflow-hidden">
      {/* 1. Hero Section */}
      <section className="relative pt-16 pb-12 bg-surface">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-secondary mb-3 block">
                Document Contractuel Officiel
              </span>

              <h1 className="font-space-grotesk text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-bleu-petrole mb-3">
                Conditions Générales de Vente <span className="text-bleu">(CGV)</span>
              </h1>

              <p className="text-sm sm:text-base text-on-surface-variant max-w-2xl leading-relaxed">
                Consultez ci-dessous le document officiel régissant les prestations
                d&apos;externalisation comptable, administrative et fiscale délivrées par TOP-COMPTA.FR.
              </p>
            </div>

            {/* Quick Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <a
                href={pdfUrl}
                download="Conditions_Contractuelles_TOP_COMPTA.pdf"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-bleu text-white font-bold text-xs sm:text-sm shadow-md hover:bg-bleu-petrole hover:-translate-y-0.5 active:scale-[0.98] transition-all"
              >
                <Download className="w-4 h-4" />
                <span>Télécharger le PDF</span>
              </a>

              <a
                href={pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-jaune-vif text-[#0b1c30] font-bold text-xs sm:text-sm border border-jaune-moutarde/30 hover:bg-jaune-citron transition-all shadow-xs"
              >
                <ExternalLink className="w-4 h-4 text-jaune-moutarde" />
                <span>Ouvrir en plein écran</span>
              </a>

              <button
                type="button"
                onClick={handlePrint}
                className="hidden sm:inline-flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-white text-bleu font-bold text-xs sm:text-sm border border-bleu/30 hover:bg-blue-50 transition-all shadow-xs"
                title="Imprimer les CGV"
              >
                <Printer className="w-4 h-4 text-bleu" />
                <span>Imprimer</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. PDF Viewer Container */}
      <section className="py-8 sm:py-12 max-w-6xl mx-auto px-4 sm:px-6 w-full">
        {/* Document Bar */}
        <div className="flex items-center justify-between bg-gradient-to-r from-bleu via-[#1a386b] to-bleu px-5 py-3.5 rounded-t-2xl border-t border-x border-bleu/40 text-xs text-blue-100 font-medium shadow-sm">
          <div className="flex items-center gap-2">
            <FileText className="w-4 h-4 text-jaune-vif" />
            <span className="font-bold text-white">
              Condtions contractuelles.pdf
            </span>
            <span className="hidden sm:inline text-blue-200/70">
              • Version contractuelle en vigueur
            </span>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-[11px] bg-jaune-vif text-[#0b1c30] font-black px-2.5 py-0.5 rounded shadow-xs">
              Document certifié
            </span>
            <a
              href={pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-100 hover:text-white font-bold underline inline-flex items-center gap-1"
            >
              <span>Nouvel onglet</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* Embedded PDF iframe */}
        <div className="w-full bg-white rounded-b-2xl border-2 border-bleu/30 shadow-2xl overflow-hidden relative min-h-[650px] lg:min-h-[850px]">
          {!iframeError ? (
            <iframe
              src={`${pdfUrl}#toolbar=1&navpanes=0&scrollbar=1`}
              className="w-full h-[650px] lg:h-[850px] border-none"
              title="Conditions contractuelles TOP-COMPTA.FR"
              onError={() => setIframeError(true)}
            />
          ) : (
            <div className="p-12 text-center flex flex-col items-center justify-center min-h-[400px]">
              <FileText className="w-16 h-16 text-bleu mb-4" />
              <h3 className="font-space-grotesk text-xl font-bold text-bleu-petrole mb-2">
                Visualisation directe du PDF
              </h3>
              <p className="text-sm text-on-surface-variant max-w-md mb-6 leading-relaxed">
                Votre navigateur ne permet pas l&apos;intégration directe des fichiers PDF.
                Vous pouvez consulter et télécharger l&apos;intégralité du document en un clic :
              </p>
              <a
                href={pdfUrl}
                download
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-bleu text-white font-bold text-sm shadow-md hover:bg-bleu-petrole"
              >
                <Download className="w-4 h-4" />
                <span>Télécharger le document PDF</span>
              </a>
            </div>
          )}
        </div>

        {/* Mobile quick reminder */}
        <div className="mt-4 sm:hidden bg-blue-50/80 p-4 rounded-xl text-center text-xs text-bleu-petrole border border-bleu/20">
          Pour une lecture optimale sur smartphone, vous pouvez{" "}
          <a
            href={pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-bleu font-bold underline"
          >
            ouvrir le document en plein écran
          </a>
          .
        </div>
      </section>

      {/* 3. Bottom CTA */}
      <section className="py-12 sm:py-16 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <div className="bg-gradient-to-br from-bleu via-[#1a386b] to-bleu-petrole text-white rounded-3xl p-8 sm:p-12 border-2 border-jaune-vif/50 shadow-2xl relative overflow-hidden">
          {/* Ambient glow in CTA */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(231,184,33,0.15),transparent_70%)] pointer-events-none" />

          <h2 className="font-space-grotesk text-2xl sm:text-3xl font-extrabold text-white mb-3 relative z-10">
            Une question sur les conditions contractuelles ?
          </h2>
          <p className="text-sm text-blue-100 max-w-xl mx-auto mb-6 relative z-10">
            Nos conseillers sont disponibles pour vous détailler les modalités d&apos;intervention et établir un devis personnalisé.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 relative z-10">
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-xl bg-jaune-vif text-[#0b1c30] font-black text-sm shadow-xl border border-jaune-citron hover:bg-jaune-citron transition-all"
            >
              <span>Demander un devis sans engagement</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <a
              href={siteConfig.phoneHref}
              className="inline-flex items-center gap-2 px-6 py-4 rounded-xl bg-white/10 text-white font-bold text-sm border-2 border-white/40 hover:bg-white hover:text-bleu backdrop-blur-md transition-all"
            >
              <Phone className="w-4 h-4 text-jaune-vif" />
              <span>{siteConfig.phone}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
