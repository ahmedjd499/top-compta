import React from "react";
import Link from "next/link";
import {
  Phone,
  Mail,
  Building,
  ShieldCheck,
  MessageCircle,
  FolderLock,
  RefreshCw,
  CreditCard,
  Handshake,
} from "lucide-react";
import { siteConfig } from "@/content/site";
import { footerContent } from "@/content/home";

export function Footer() {
  return (
    <footer className="w-full bg-primary-container text-inverse-on-surface border-t border-surface-variant/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14 lg:py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Col 1: Identity & WhatsApp */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <span className="font-space-grotesk text-2xl font-bold tracking-tight text-on-primary">
              {footerContent.companyName}
            </span>
          </div>
          <p className="text-sm text-on-primary-container leading-relaxed">
            {footerContent.description}
          </p>
          <div className="flex flex-col gap-2.5 pt-2">
            {footerContent.badges &&
              footerContent.badges.map((badge, idx) => (
                <div
                  key={idx}
                  className="inline-flex items-center gap-2 bg-surface-variant/20 px-3 py-1.5 rounded-lg text-on-primary text-xs font-semibold w-fit"
                >
                  <ShieldCheck className="w-4 h-4 text-secondary-fixed shrink-0" />
                  <span>{badge}</span>
                </div>
              ))}
            <a
              href={footerContent.whatsappHref || siteConfig.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-on-primary hover:text-secondary-fixed transition-colors text-xs font-semibold"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366] shrink-0" />
              <span>Support WhatsApp direct ({siteConfig.whatsappPhoneText})</span>
            </a>
          </div>
        </div>

        {/* Col 2: Navigation */}
        <div className="flex flex-col gap-4">
          <span className="font-space-grotesk text-base font-bold text-on-primary">
            Navigation
          </span>
          <nav className="flex flex-col gap-2.5 text-sm" aria-label="Liens du pied de page">
            <Link
              href="/"
              className="text-on-primary-container hover:text-on-primary transition-colors"
            >
              Accueil
            </Link>
            <Link
              href="/offres"
              className="text-on-primary-container hover:text-on-primary transition-colors"
            >
              Notre Offre
            </Link>
            <Link
              href="/notre-adn"
              className="text-on-primary-container hover:text-on-primary transition-colors"
            >
              Notre ADN
            </Link>
            <Link
              href="/externalisation_page"
              className="text-on-primary-container hover:text-on-primary transition-colors"
            >
              L&apos;externalisation comptable
            </Link>
            <Link
              href="/#contact"
              className="text-on-primary-container hover:text-on-primary transition-colors"
            >
              Demande de devis
            </Link>
            <Link
              href="/offres"
              className="text-on-primary-container hover:text-on-primary transition-colors"
            >
              Formules &amp; Tarifs
            </Link>
          </nav>
        </div>

        {/* Col 3: Espace Client & Outils */}
        <div className="flex flex-col gap-4">
          <span className="font-space-grotesk text-base font-bold text-on-primary">
            Espace Client &amp; Outils
          </span>
          <div className="flex flex-col gap-2.5 text-sm">
            <a
              href={siteConfig.clientPortalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-on-primary-container hover:text-on-primary transition-colors"
            >
              <FolderLock className="w-4 h-4 text-secondary-fixed shrink-0" />
              <span>GED Sécurisée (MyCompanyFiles)</span>
            </a>
            <a
              href="https://habile-solutions.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-on-primary-container hover:text-on-primary transition-colors"
            >
              <RefreshCw className="w-4 h-4 text-secondary-fixed shrink-0" />
              <span>CRM &amp; PA Habile Solutions</span>
            </a>
            <Link
              href="/#offres"
              className="inline-flex items-center gap-2 text-on-primary-container hover:text-on-primary transition-colors"
            >
              <CreditCard className="w-4 h-4 text-secondary-fixed shrink-0" />
              <span>Paiement sécurisé PayPal</span>
            </Link>
            <a
              href={siteConfig.partnerUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-on-primary-container hover:text-on-primary transition-colors"
            >
              <Handshake className="w-4 h-4 text-secondary-fixed shrink-0" />
              <span>Réseau de partenaires agréés</span>
            </a>
          </div>
        </div>

        {/* Col 4: Nous contacter */}
        <div className="flex flex-col gap-4">
          <span className="font-space-grotesk text-base font-bold text-on-primary">
            Nous contacter
          </span>
          <div className="flex flex-col gap-3 text-sm">
            <div className="flex items-start gap-2.5 text-on-primary-container">
              <Phone className="w-4 h-4 text-secondary-fixed shrink-0 mt-1" />
              <div>
                <a
                  href={`tel:${(footerContent.phone || siteConfig.phone).replace(/\s+/g, "")}`}
                  className="text-on-primary font-bold hover:text-secondary-fixed transition-colors"
                >
                  {footerContent.phone || siteConfig.phone}
                </a>
                <div className="text-xs text-on-primary-container">
                  Du lundi au vendredi, 9h-18h
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2.5 text-on-primary-container">
              <Mail className="w-4 h-4 text-secondary-fixed shrink-0" />
              <a
                href={`mailto:${footerContent.email || siteConfig.email}`}
                className="hover:text-on-primary transition-colors"
              >
                {footerContent.email || siteConfig.email}
              </a>
            </div>
            <div className="flex items-start gap-2.5 text-on-primary-container">
              <Building className="w-4 h-4 text-secondary-fixed shrink-0 mt-1" />
              <span>{footerContent.address}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Sub-footer */}
      <div className="bg-black/40 py-6 px-4 sm:px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-on-primary-container">
          <p>{footerContent.copyright}</p>
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <Link
              href="/mentions-legales"
              className="hover:text-on-primary transition-colors"
            >
              Mentions Légales
            </Link>
            <Link
              href="/mentions-legales#cgv"
              className="hover:text-on-primary transition-colors"
            >
              Conditions Générales de Vente (CGV)
            </Link>
            <Link
              href="/mentions-legales"
              className="hover:text-on-primary transition-colors"
            >
              Politique de Confidentialité
            </Link>
            
          </div>
        </div>
      </div>
    </footer>
  );
}
