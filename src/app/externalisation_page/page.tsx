import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, ShieldCheck, Laptop, PhoneCall, ArrowRight } from "lucide-react";
import { externalisationContent } from "@/content/externalisation";

export const metadata: Metadata = {
  title: "L'Externalisation Comptable au Service de la Gestion d'Entreprise",
  description:
    "Comprendre l'externalisation comptable et administrative : outils en ligne sécurisés, livrables, accompagnement humain et gain de sérénité.",
};

export default function ExternalisationPage() {
  const getSectionIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Laptop className="w-6 h-6 text-secondary" />;
      case 1:
        return <CheckCircle2 className="w-6 h-6 text-secondary" />;
      case 2:
        return <ShieldCheck className="w-6 h-6 text-secondary" />;
      default:
        return <PhoneCall className="w-6 h-6 text-secondary" />;
    }
  };

  return (
    <div className="w-full py-12 lg:py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 flex flex-col gap-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto flex flex-col items-center gap-4">
          <span className="px-3.5 py-1.5 rounded-full bg-surface-container-high text-secondary text-xs font-bold uppercase tracking-wider">
            {externalisationContent.badge}
          </span>
          <h1 className="font-space-grotesk text-3xl sm:text-4xl lg:text-5xl font-bold text-on-surface tracking-tight">
            {externalisationContent.title}
          </h1>
          <p className="text-base sm:text-lg text-on-surface-variant leading-relaxed">
            {externalisationContent.intro}
          </p>
        </div>

        {/* 4 Pillars of Outsourcing */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {externalisationContent.sections.map((section, idx) => (
            <div
              key={section.title}
              className="bg-surface-container-lowest rounded-2xl p-6 sm:p-8 shadow-xs border border-outline-variant/30 flex flex-col gap-4"
            >
              <div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center">
                {getSectionIcon(idx)}
              </div>
              <h2 className="font-space-grotesk text-xl font-bold text-on-surface">
                {section.title}
              </h2>
              <ul className="flex flex-col gap-2.5 text-xs sm:text-sm text-on-surface">
                {section.items.map((item, itemIdx) => (
                  <li key={itemIdx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom CTA Block */}
        <div className="bg-primary-container text-on-primary rounded-3xl p-8 sm:p-12 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="flex flex-col gap-2">
            <h3 className="font-space-grotesk text-2xl font-bold text-on-primary">
              Prêt à simplifier votre gestion au quotidien ?
            </h3>
            <p className="text-sm text-inverse-on-surface/90">
              Échangez avec nos conseillers et recevez une proposition chiffrée sous 24h.
            </p>
          </div>
          <Link
            href="/#contact"
            className="px-6 py-3.5 rounded-xl bg-tertiary-fixed text-on-tertiary-fixed font-bold text-sm shadow-md hover:brightness-110 transition-all shrink-0 flex items-center gap-2"
          >
            <span>Demander un devis</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
