import { HeaderContactInfo, NavItem, TopBannerContent } from "./types";

export const siteConfig = {
  name: "TOP-COMPTA",
  fullName: "TOP-COMPTA.FR",
  tagline: "EXTERNALISATION & CONSEIL",
  description:
    "Service d'externalisation administrative, de gestion documentaire et de suivi d'activité dédié aux indépendants, TPE et PME depuis 2011.",
  url: "https://www.top-compta.fr",
  clientPortalUrl: "https://customer.mycompanyfiles.fr/auth/login",
  phone: "01 70 60 00 82",
  phoneRaw: "0170600082",
  phoneHref: "tel:0170600082",
  email: "info@top-compta.fr",
  emailHref: "mailto:info@top-compta.fr",
  whatsappUrl: "https://wa.me/33779335302",
  whatsappPhoneText: "+33 7 79 33 53 02",
  partnerUrl: "https://www.habile-solutions.com/",
  trustpilotUrl: "https://fr.trustpilot.com/review/top-compta.fr",
};

export const topBannerContent: TopBannerContent = {
  tag: "Urgence Légale",
  message:
    "Facturation électronique : réception obligatoire pour toutes les entreprises dès le 1er septembre 2026.",
  linkText: "Facturation Électronique →",
  linkHref: "/#facturation-electronique",
};

export const headerContactInfo: HeaderContactInfo = {
  phone: "01 70 60 00 82",
  phoneRaw: "0170600082",
  email: "info@top-compta.fr",
  schedule: "Lun-Ven 9h-18h",
  trustpilotScore: "Trustpilot 4.6/5",
  certifications: "Plateforme Agréée (PA) • GED ",
};

export const mainNavItems: NavItem[] = [
  {
    title: "Notre Offre",
    href: "/offres",
    dropdown: [
      { title: "Toutes Les Formules", href: "/offres" },
      { title: "Formule Essentiel", href: "/offres/formule-essentiel" },
      {
        title: "Formule Confort",
        href: "/offres/formule-confort",
        badge: "Recommandé",
      },
      { title: "Formule Indépendant", href: "/offres/formule-independant" },
      { title: "Formule SCI", href: "/offres/formule-sci" },
      { title: "SOS Compta", href: "/offres/formule-sos-compta" },
      { title: "SpeedBilan", href: "https://speedbilan.fr", badge: "New" },
      { title: "Fiches de paie et services associés", href: "/offres/service-en-social" },
      { title: "Création Transformation Liquidation", href: "/offres/creation-societe" },
      { title: "CRM + PA", href: "https://habile-solutions.com" },
    ],
  },
  {
    title: "Notre ADN",
    href: "/notre-adn",
  },
  {
    title: "L'externalisation comptable",
    href: "/externalisation_page",
  },
  {
    title: "CGV",
    href: "/cgv",
  },
];
