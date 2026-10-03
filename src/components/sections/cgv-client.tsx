"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  FileText,
  Download,
  ExternalLink,
  Printer,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Lock,
  ArrowRight,
  Sparkles,
  Phone,
  FileCheck,
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
      <section
        className="relative overflow-hidden pt-16 pb-12 border-b border-outline-variant/20"
        style={{
          background:
            "radial-gradient(circle at 80% 20%, rgba(55, 85, 195, 0.12), transparent 40%), radial-gradient(circle at 20% 80%, rgba(34, 183, 198, 0.10), transparent 40%), linear-gradient(180deg, var(--color-surface) 0%, var(--color-surface-container-low) 100%)",
        }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-secondary/10 text-secondary text-xs font-bold uppercase tracking-wider mb-4 border border-secondary/20 shadow-xs">
                <FileCheck className="w-3.5 h-3.5" />
                <span>Document Contractuel Officiel</span>
              </div>

              <h1 className="font-space-grotesk text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-on-surface mb-3">
                Conditions Générales de Vente <span className="text-secondary">(CGV)</span>
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
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-secondary text-white font-bold text-xs sm:text-sm shadow-md hover:bg-on-secondary-container hover:-translate-y-0.5 active:scale-[0.98] transition-all"
              >
                <Download className="w-4 h-4" />
                <span>Télécharger le PDF</span>
              </a>

              <a
                href={pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-surface-container-lowest text-on-surface font-semibold text-xs sm:text-sm border border-outline-variant/40 hover:border-secondary hover:bg-surface-container transition-all shadow-xs"
              >
                <ExternalLink className="w-4 h-4 text-secondary" />
                <span>Ouvrir en plein écran</span>
              </a>

              <button
                type="button"
                onClick={handlePrint}
                className="hidden sm:inline-flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-surface-container-lowest text-on-surface-variant hover:text-on-surface font-medium text-xs sm:text-sm border border-outline-variant/40 hover:bg-surface-container transition-all shadow-xs"
                title="Imprimer les CGV"
              >
                <Printer className="w-4 h-4" />
                <span>Imprimer</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. PDF Viewer Container */}
      <section className="py-8 sm:py-12 max-w-6xl mx-auto px-4 sm:px-6 w-full">
        {/* Document Bar */}
        <div className="flex items-center justify-between bg-surface-container-lowest px-5 py-3.5 rounded-t-2xl border-t border-x border-outline-variant/30 text-xs text-on-surface-variant font-medium">
          <div className="flex items-center gap-2">
            <FileText className="w-4 h-4 text-secondary" />
            <span className="font-semibold text-on-surface">
              Condtions contractuelles.pdf
            </span>
            <span className="hidden sm:inline text-on-surface-variant/60">
              • Version contractuelle en vigueur
            </span>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-[11px] bg-secondary/10 text-secondary font-bold px-2 py-0.5 rounded">
              Document certifié
            </span>
            <a
              href={pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary font-semibold hover:underline inline-flex items-center gap-1"
            >
              <span>Nouvel onglet</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* Embedded PDF iframe */}
        <div className="w-full bg-white rounded-b-2xl border border-outline-variant/30 shadow-2xl overflow-hidden relative min-h-[650px] lg:min-h-[850px]">
          {!iframeError ? (
            <iframe
              src={`${pdfUrl}#toolbar=1&navpanes=0&scrollbar=1`}
              className="w-full h-[650px] lg:h-[850px] border-none"
              title="Conditions contractuelles TOP-COMPTA.FR"
              onError={() => setIframeError(true)}
            />
          ) : (
            <div className="p-12 text-center flex flex-col items-center justify-center min-h-[400px]">
              <FileText className="w-16 h-16 text-secondary mb-4" />
              <h3 className="font-space-grotesk text-xl font-bold text-on-surface mb-2">
                Visualisation directe du PDF
              </h3>
              <p className="text-sm text-on-surface-variant max-w-md mb-6 leading-relaxed">
                Votre navigateur ne permet pas l&apos;intégration directe des fichiers PDF.
                Vous pouvez consulter et télécharger l&apos;intégralité du document en un clic :
              </p>
              <a
                href={pdfUrl}
                download
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-secondary text-white font-bold text-sm shadow-md"
              >
                <Download className="w-4 h-4" />
                <span>Télécharger le document PDF</span>
              </a>
            </div>
          )}
        </div>

        {/* Mobile quick reminder */}
        <div className="mt-4 sm:hidden bg-surface-container-low p-4 rounded-xl text-center text-xs text-on-surface-variant border border-outline-variant/20">
          Pour une lecture optimale sur smartphone, vous pouvez{" "}
          <a
            href={pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-secondary font-bold underline"
          >
            ouvrir le document en plein écran
          </a>
          .
        </div>
      </section>

  

      {/* 3. Bottom CTA */}
      <section className="py-12 sm:py-16 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="font-space-grotesk text-xl sm:text-2xl font-bold text-on-surface mb-3">
          Une question sur les conditions contractuelles ?
        </h2>
        <p className="text-sm text-on-surface-variant max-w-xl mx-auto mb-6">
          Nos conseillers sont disponibles pour vous détailler les modalités d&apos;intervention et établir un devis personnalisé.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-secondary text-white font-bold text-sm shadow-md hover:bg-on-secondary-container transition-all"
          >
            <span>Demander un devis sans engagement</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <a
            href={siteConfig.phoneHref}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-surface-container-lowest text-on-surface font-semibold text-sm border border-outline-variant/40 hover:border-secondary transition-all"
          >
            <Phone className="w-4 h-4 text-secondary" />
            <span>{siteConfig.phone}</span>
          </a>
        </div>
      </section>
    </div>
  );
}
