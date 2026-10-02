export interface PricingTier {
  durationMonths: number; // 1, 3, 6, 12
  label: string; // "1 mois", "3 mois", "6 mois", "1 an"
  priceTotal: number;
  monthlyEquivalent: number;
  savings?: string; // "Soit 17€ d'économies"
  savingsAmount?: number;
  popular?: boolean;
}

export interface DetailedFormula {
  slug: string;
  name: string;
  tag: string;
  price: number | string;
  period?: string;
  summary: string;
  pricingTiers?: PricingTier[];
  deliverables: {
    title: string;
    items: string[];
  }[];
  advantages: string[];
  reassurance?: string;
  phoneContact?: string;
  recommended?: boolean;
  ctaText?: string;
  ctaHref?: string;
  isExternal?: boolean;
}

export interface OffresMonthlyPlan {
  id: string;
  name: string;
  tag: string;
  price: number | string;
  pricePeriod?: string;
  description: string;
  href: string;
  ctaText: string;
  pricingTiers?: PricingTier[];
  recommended?: boolean;
  isExternal?: boolean;
}

export interface OffresServiceCarte {
  id: string;
  name: string;
  tag: string;
  price: number | string;
  pricePeriod?: string;
  description: string;
  href: string;
  ctaText: string;
}

export interface OffresFaqItem {
  question: string;
  answer: string;
}

export interface ComparisonFeature {
  name: string;
  tooltip?: string;
  essentiel: boolean | string;
  confort: boolean | string;
  independant: boolean | string;
  sci: boolean | string;
  sosCompta: boolean | string;
}

export interface ComparisonCategory {
  category: string;
  features: ComparisonFeature[];
}

export const offresHeroContent = {
  title: "Choisissez le niveau d’accompagnement",
  titleHighlight: "qui vous correspond le mieux.",
  subtitle:
    "De la tenue comptable aux formalités administratives, découvrez l'ensemble des modules de gestion, suivi comptable et fiscal.",
  trustItems: [
    {
      title: "Dès 124 €/mois",
      subtitle: "Tarifs dégressifs & PA native incluse",
    },
    {
      title: "Sans engagement",
      subtitle: "Résiliation libre à tout moment",
    },
    {
      title: "Assistance dédiée",
      subtitle: "Tél 01 70 60 00 82 & WhatsApp",
    },
  ],
};

export const monthlyOffers: OffresMonthlyPlan[] = [
  {
    id: "formule-essentiel",
    name: "Formule Essentiel",
    tag: "Pack Débutant",
    price: 124,
    pricePeriod: "/mois",
    description: "La gestion comptable de base pour démarrer sereinement. Idéal créateurs & franchise en base de TVA.",
    href: "/offres/formule-essentiel",
    ctaText: "Choisir ce plan",
    pricingTiers: [
      {
        durationMonths: 1,
        label: "1 mois",
        priceTotal: 124,
        monthlyEquivalent: 124,
      },
      {
        durationMonths: 3,
        label: "3 mois",
        priceTotal: 355,
        monthlyEquivalent: 118.33,
        savings: "Soit 17€ d'économies",
        savingsAmount: 17,
      },
      {
        durationMonths: 6,
        label: "6 mois",
        priceTotal: 685,
        monthlyEquivalent: 114.17,
        savings: "Soit 59€ d'économies",
        savingsAmount: 59,
      },
      {
        durationMonths: 12,
        label: "1 an",
        priceTotal: 1310,
        monthlyEquivalent: 109.17,
        savings: "Soit 178€ d'économies",
        savingsAmount: 178,
        popular: true,
      },
    ],
  },
  {
    id: "formule-confort",
    name: "Formule Confort",
    tag: "Délégation Totale",
    price: 184,
    pricePeriod: "/mois",
    description:
      "Une offre complète pour déléguer toute votre comptabilité et vos déclarations avec sérénité.",
    href: "/offres/formule-confort",
    ctaText: "Choisir ce plan",
    recommended: true,
    pricingTiers: [
      {
        durationMonths: 1,
        label: "1 mois",
        priceTotal: 184,
        monthlyEquivalent: 184,
      },
      {
        durationMonths: 3,
        label: "3 mois",
        priceTotal: 525,
        monthlyEquivalent: 175,
        savings: "Soit 27€ d'économies",
        savingsAmount: 27,
      },
      {
        durationMonths: 6,
        label: "6 mois",
        priceTotal: 1008,
        monthlyEquivalent: 168,
        savings: "Soit 96€ d'économies",
        savingsAmount: 96,
      },
      {
        durationMonths: 12,
        label: "1 an",
        priceTotal: 1826,
        monthlyEquivalent: 152.17,
        savings: "Soit 382€ d'économies",
        savingsAmount: 382,
        popular: true,
      },
    ],
  },
  {
    id: "formule-independant",
    name: "Formule Indépendant",
    tag: "Freelances & TNS",
    price: 204,
    pricePeriod: "/mois",
    description: "Spécifique pour les travailleurs indépendants TNS, professions libérales et gérants majoritaires.",
    href: "/offres/formule-independant",
    ctaText: "Choisir ce plan",
    pricingTiers: [
      {
        durationMonths: 1,
        label: "1 mois",
        priceTotal: 204,
        monthlyEquivalent: 204,
      },
      {
        durationMonths: 3,
        label: "3 mois",
        priceTotal: 585,
        monthlyEquivalent: 195,
        savings: "Soit 27€ d'économies",
        savingsAmount: 27,
      },
      {
        durationMonths: 6,
        label: "6 mois",
        priceTotal: 1116,
        monthlyEquivalent: 186,
        savings: "Soit 108€ d'économies",
        savingsAmount: 108,
      },
      {
        durationMonths: 12,
        label: "1 an",
        priceTotal: 2018,
        monthlyEquivalent: 168.17,
        savings: "Soit 430€ d'économies",
        savingsAmount: 430,
        popular: true,
      },
    ],
  },
  {
    id: "formule-sci",
    name: "Formule SCI",
    tag: "Gestion Immobilière",
    price: 124,
    pricePeriod: "/mois",
    description:
      "Dédiée à la gestion comptable et fiscale de votre patrimoine immobilier (IR déclaration 2072 ou IS).",
    href: "/offres/formule-sci",
    ctaText: "Choisir ce plan",
    pricingTiers: [
      {
        durationMonths: 1,
        label: "1 mois",
        priceTotal: 124,
        monthlyEquivalent: 124,
      },
      {
        durationMonths: 3,
        label: "3 mois",
        priceTotal: 355,
        monthlyEquivalent: 118.33,
        savings: "Soit 17€ d'économies",
        savingsAmount: 17,
      },
      {
        durationMonths: 6,
        label: "6 mois",
        priceTotal: 685,
        monthlyEquivalent: 114.17,
        savings: "Soit 59€ d'économies",
        savingsAmount: 59,
      },
      {
        durationMonths: 12,
        label: "1 an",
        priceTotal: 1310,
        monthlyEquivalent: 109.17,
        savings: "Soit 178€ d'économies",
        savingsAmount: 178,
        popular: true,
      },
    ],
  },
  {
    id: "formule-sos-compta",
    name: "Formule SOS Compta",
    tag: "Rattrapage & Régularisation",
    price: 990,
    pricePeriod: " / an",
    description:
      "Assistance ponctuelle urgente pour régulariser ou rattraper vos exercices comptables en retard.",
    href: "/offres/formule-sos-compta",
    ctaText: "Choisir ce plan",
    pricingTiers: [
      {
        durationMonths: 12,
        label: "1 an (Forfait Annuel)",
        priceTotal: 990,
        monthlyEquivalent: 82.5,
        savings: "Tarif Forfaitaire Annuel Garanti",
        popular: true,
      },
    ],
  },
  {
    id: "speed-bilan",
    name: "Speed Bilan",
    tag: "Bilan Express",
    price: "Sur devis",
    description:
      "Votre bilan annuel réalisé rapidement, simplement et en toute conformité légale.",
    href: "https://speedbilan.fr",
    ctaText: "VOIR PLUS",
    recommended: false,
    isExternal: true,
  },
];

export const detailedFormulas: Record<string, DetailedFormula> = {
  "formule-essentiel": {
    slug: "formule-essentiel",
    name: "Formule Essentiel",
    tag: "Pack Débutant",
    price: 124,
    period: "/mois",
    summary:
      "Découvrez l'ensemble des modules de gestion, suivi comptable et fiscal. La formule essentielle pour piloter votre activité en toute conformité.",
    phoneContact: "01 70 60 00 82",
    reassurance:
      "Garantie & Assistance incluses : Nos prestations incluent une assistance à distance complète en cas de contrôle fiscal ou URSSAF. Vous n’êtes jamais seul face à l’Administration.",
    pricingTiers: [
      {
        durationMonths: 1,
        label: "1 mois",
        priceTotal: 124,
        monthlyEquivalent: 124,
      },
      {
        durationMonths: 3,
        label: "3 mois",
        priceTotal: 355,
        monthlyEquivalent: 118.33,
        savings: "Soit 17€ d'économies",
        savingsAmount: 17,
      },
      {
        durationMonths: 6,
        label: "6 mois",
        priceTotal: 685,
        monthlyEquivalent: 114.17,
        savings: "Soit 59€ d'économies",
        savingsAmount: 59,
      },
      {
        durationMonths: 12,
        label: "1 an",
        priceTotal: 1310,
        monthlyEquivalent: 109.17,
        savings: "Soit 178€ d'économies",
        savingsAmount: 178,
        popular: true,
      },
    ],
    
    deliverables: [
      {
        title: "Services & Outils Connectés",
        items: [
          "Application smartphone disponible sur Play Store ou Apple Store",
          "Interface de gestion en ligne sécurisée (GED, Outils gestion, CRM, PA native), tout au même endroit",
          "Assistance téléphonique & WhatsApp dédiée (01 70 60 00 82)",
          "Accompagnement utilisation PA (Plateforme agréée) pour la facturation électronique",
          "Assistance à distance complète en cas de contrôle fiscal ou URSSAF (uniquement sur les années traitées)",
        ],
      },
      {
        title: "Comptabilité Complète",
        items: [
          "Saisie courante",
          "Situations trimestrielles",
          "Reportings et Tableaux de bord mensuels",
          "Bilan de fin d'exercice",
          "Télétransmission de la liasse fiscale",
          "Plaquette des comptes pour le Greffe du TC",
        ],
      },
      {
        title: "Fiscalité & Déclarations",
        items: [
          "CA12 TVA annuelle",
          "Cadrage annuel de TVA pour les régimes réels",
          "DAS2",
          "CVAE",
          "Relevé de solde IS",
        ],
      },
      {
        title: "CRM Commercial & Facturation",
        items: [
          "Fiches clients & Base articles",
          "Devis et factures automatiques",
          "Envoi des documents automatiquement depuis l'interface",
          "Génération automatique des écritures de ventes",
          "Gestion des relances",
          "Personnalisation des documents",
        ],
      },
      {
        title: "PA (Plateforme Agréée Native)",
        items: [
          "Facturation électronique 100% conforme à la réforme 2026",
          "Réception factures fournisseurs",
          "Flux de banque et caisse intégrés",
          "E-Reporting vers l'administration fiscale",
          "Transmission directe Bercy (PPF)",
          "Archivage sécurisé à valeur probante",
        ],
      },
    ],
    advantages: [
      "Tarifs dégressifs clairs avec jusqu'à 178€ d'économies",
      "Assistance contrôle fiscal ou URSSAF incluse",
      "Interface tout-en-un avec GED et PA intégrée nativement",
    ],
  },
  "formule-confort": {
    slug: "formule-confort",
    name: "Formule Confort",
    tag: "Délégation Totale",
    price: 184,
    period: "/mois",
    summary:
      "Découvrez l'ensemble des modules de gestion, suivi comptable et fiscal. Une formule tout inclus pour déléguer 100% de votre comptabilité, TVA mensuelle et formalités juridiques.",
    phoneContact: "01 70 60 00 82",
    recommended: true,
    reassurance:
      "Garantie & Assistance incluses : Nos prestations incluent une assistance à distance complète en cas de contrôle fiscal ou URSSAF. Vous n’êtes jamais seul face à l’Administration.",
    pricingTiers: [
      {
        durationMonths: 1,
        label: "1 mois",
        priceTotal: 184,
        monthlyEquivalent: 184,
      },
      {
        durationMonths: 3,
        label: "3 mois",
        priceTotal: 525,
        monthlyEquivalent: 175,
        savings: "Soit 27€ d'économies",
        savingsAmount: 27,
      },
      {
        durationMonths: 6,
        label: "6 mois",
        priceTotal: 1008,
        monthlyEquivalent: 168,
        savings: "Soit 96€ d'économies",
        savingsAmount: 96,
      },
      {
        durationMonths: 12,
        label: "1 an",
        priceTotal: 1826,
        monthlyEquivalent: 152.17,
        savings: "Soit 382€ d'économies",
        savingsAmount: 382,
        popular: true,
      },
    ],
   
    deliverables: [
      {
        title: "Services & Outils Connectés",
        items: [
          "Application smartphone disponible sur Play Store ou Apple Store",
          "Interface de gestion en ligne sécurisée (GED, Outils gestion, CRM, PA native), tout au même endroit",
          "Assistance téléphonique & WhatsApp dédiée (01 70 60 00 82)",
          "Accompagnement utilisation PA (Plateforme agréée) pour la facturation électronique",
          "Assistance à distance complète en cas de contrôle fiscal ou URSSAF (uniquement sur les années traitées)",
        ],
      },
      {
        title: "Comptabilité Complète",
        items: [
          "Saisie courante de toutes les écritures",
          "Situations trimestrielles",
          "Reportings et Tableaux de bord mensuels",
          "Bilan de fin d'exercice",
          "Télétransmission de la liasse fiscale",
          "Plaquette des comptes pour le Greffe du TC",
        ],
      },
      {
        title: "Fiscalité Complète & Mensuelle",
        items: [
          "TVA mensuelles ou trimestrielles",
          "Cadrage annuel de TVA pour les régimes réels",
          "DAS2",
          "CVAE",
          "Relevé de solde IS",
        ],
      },
      {
        title: "Juridique Associé Inclus",
        items: [
          "PV approbation des comptes annuels pour le Greffe du TC",
          "Dépôt officiel des comptes auprès du tribunal de commerce",
        ],
      },
      {
        title: "CRM Commercial & Facturation",
        items: [
          "Fiches clients & Base articles",
          "Devis et factures automatiques",
          "Envoi des documents automatiquement depuis l'interface",
          "Génération automatique des écritures de ventes",
          "Gestion des relances",
          "Personnalisation des documents",
        ],
      },
      {
        title: "PA (Plateforme Agréée Native)",
        items: [
          "Facturation électronique 100% conforme à la réforme 2026",
          "Réception factures fournisseurs",
          "Flux de banque et caisse intégrés",
          "E-Reporting vers l'administration fiscale",
          "Transmission directe Bercy (PPF)",
          "Archivage sécurisé à valeur probante",
        ],
      },
    ],
    advantages: [
      "Jusqu'à 382€ d'économies sur la formule annuelle",
      "PV d'approbation des comptes greffe inclus",
      "TVA mensuelle ou trimestrielle prise en charge",
    ],
  },
  "formule-independant": {
    slug: "formule-independant",
    name: "Formule Indépendant",
    tag: "Freelances & TNS",
    price: 204,
    period: "/mois",
    summary:
      "Découvrez l'ensemble des modules de gestion, suivi comptable et fiscal. Spécifique pour les indépendants TNS, intégrant la gestion SSI (ex-RSI) et CIPAV.",
    phoneContact: "01 70 60 00 82",
    reassurance:
      "Garantie & Assistance incluses : Nos prestations incluent une assistance à distance complète en cas de contrôle fiscal ou URSSAF. Vous n’êtes jamais seul face à l’Administration.",
    pricingTiers: [
      {
        durationMonths: 1,
        label: "1 mois",
        priceTotal: 204,
        monthlyEquivalent: 204,
      },
      {
        durationMonths: 3,
        label: "3 mois",
        priceTotal: 585,
        monthlyEquivalent: 195,
        savings: "Soit 27€ d'économies",
        savingsAmount: 27,
      },
      {
        durationMonths: 6,
        label: "6 mois",
        priceTotal: 1116,
        monthlyEquivalent: 186,
        savings: "Soit 108€ d'économies",
        savingsAmount: 108,
      },
      {
        durationMonths: 12,
        label: "1 an",
        priceTotal: 2018,
        monthlyEquivalent: 168.17,
        savings: "Soit 430€ d'économies",
        savingsAmount: 430,
        popular: true,
      },
    ],
  
    deliverables: [
      {
        title: "Services & Outils Connectés",
        items: [
          "Application smartphone disponible sur Play Store ou Apple Store",
          "Interface de gestion en ligne sécurisée (GED, Outils gestion, CRM, PA native), tout au même endroit",
          "Assistance téléphonique & WhatsApp dédiée (01 70 60 00 82)",
          "Accompagnement utilisation PA (Plateforme agréée) pour la facturation électronique",
          "Assistance à distance complète en cas de contrôle fiscal ou URSSAF (uniquement sur les années traitées)",
        ],
      },
      {
        title: "Comptabilité Complète",
        items: [
          "Saisie courante",
          "Situations trimestrielles",
          "Reportings et Tableaux de bord mensuels",
          "Bilan de fin d'exercice",
          "Télétransmission de la liasse fiscale",
          "Plaquette des comptes pour le Greffe du TC",
        ],
      },
      {
        title: "Fiscalité Dédiée TNS",
        items: [
          "CA12 TVA annuelle",
          "Cadrage annuel de TVA pour les régimes réels",
          "DAS2",
          "CVAE",
          "Relevé de solde IS",
        ],
      },
      {
        title: "Volet Social & Déclarations TNS",
        items: [
          "Gestion SSI (ex-RSI)",
          "Gestion CIPAV (professions libérales)",
          "Optimisation des cotisations sociales et régularisations",
        ],
      },
      {
        title: "Juridique Associé Inclus",
        items: [
          "PV approbation des comptes annuels pour le Greffe du TC",
        ],
      },
      {
        title: "CRM Commercial & Facturation",
        items: [
          "Fiches clients & Base articles",
          "Devis et factures automatiques",
          "Envoi des documents automatiquement depuis l'interface",
          "Génération automatique des écritures de ventes",
          "Gestion des relances",
          "Personnalisation des documents",
        ],
      },
      {
        title: "PA (Plateforme Agréée Native)",
        items: [
          "Facturation électronique 100% conforme à la réforme 2026",
          "Réception factures fournisseurs",
          "Flux de banque et caisse intégrés",
          "E-Reporting vers l'administration fiscale",
          "Transmission directe Bercy (PPF)",
          "Archivage sécurisé à valeur probante",
        ],
      },
    ],
    advantages: [
      "Jusqu'à 430€ d'économies en paiement annuel",
      "Prise en charge intégrale SSI / CIPAV / URSSAF",
      "Zéro risque d'erreur ou pénalité déclarative",
    ],
  },
  "formule-sci": {
    slug: "formule-sci",
    name: "Formule SCI",
    tag: "Gestion Immobilière",
    price: 124,
    period: "/mois",
    summary:
      "Découvrez l'ensemble des modules de gestion, suivi comptable et fiscal. Dédiée à la gestion comptable et fiscale de votre patrimoine immobilier.",
    phoneContact: "01 70 60 00 82",
    reassurance:
      "Garantie & Assistance incluses : Nos prestations incluent une assistance à distance complète en cas de contrôle fiscal ou URSSAF. Vous n’êtes jamais seul face à l’Administration.",
    pricingTiers: [
      {
        durationMonths: 1,
        label: "1 mois",
        priceTotal: 124,
        monthlyEquivalent: 124,
      },
      {
        durationMonths: 3,
        label: "3 mois",
        priceTotal: 355,
        monthlyEquivalent: 118.33,
        savings: "Soit 17€ d'économies",
        savingsAmount: 17,
      },
      {
        durationMonths: 6,
        label: "6 mois",
        priceTotal: 685,
        monthlyEquivalent: 114.17,
        savings: "Soit 59€ d'économies",
        savingsAmount: 59,
      },
      {
        durationMonths: 12,
        label: "1 an",
        priceTotal: 1310,
        monthlyEquivalent: 109.17,
        savings: "Soit 178€ d'économies",
        savingsAmount: 178,
        popular: true,
      },
    ],
   
    deliverables: [
      {
        title: "Services & Outils Connectés",
        items: [
          "Application smartphone disponible sur Play Store ou Apple Store",
          "Interface de gestion en ligne sécurisée (GED, Outils gestion, CRM, PA native), tout au même endroit",
          "Assistance téléphonique & WhatsApp dédiée (01 70 60 00 82)",
          "Accompagnement utilisation PA (Plateforme agréée) pour la facturation électronique",
          "Assistance à distance complète en cas de contrôle fiscal ou URSSAF (uniquement sur les années traitées)",
        ],
      },
      {
        title: "Comptabilité Spécifique SCI",
        items: [
          "Saisie courante et suivi des flux",
          "Situations trimestrielles",
          "Reportings et Tableaux de bord mensuels",
          "Bilan de fin d'exercice",
          "Télétransmission de la liasse fiscale",
          "Plaquette des comptes pour le Greffe du TC",
          "Suivi et répartition des comptes courants d'associés",
        ],
      },
      {
        title: "Fiscalité Immobilière",
        items: [
          "Déclarations 2072 (IR) ou 2065 (IS) complètes",
          "CA12 TVA annuelle (si option TVA immobilière)",
          "Cadrage annuel de TVA pour les régimes réels",
          "DAS2",
          "CVAE",
          "Relevé de solde IS (pour SCI à l'IS)",
        ],
      },
      {
        title: "CRM & Gestion Locative",
        items: [
          "Fiches locataires & Base biens",
          "Appels de loyers et quittances automatisés",
          "Envoi des documents automatiquement depuis l'interface",
          "Génération automatique des écritures comptables",
          "Gestion des relances impayés",
          "Personnalisation des documents",
        ],
      },
      {
        title: "PA (Plateforme Agréée Native)",
        items: [
          "Facturation électronique conforme",
          "Réception factures fournisseurs de travaux",
          "Flux de banque et caisse intégrés",
          "E-Reporting",
          "Transmission Bercy",
          "Archivage sécurisé des baux et factures",
        ],
      },
    ],
    advantages: [
      "Formule de gestion immobilière à 124,00 € / mois",
      "Économisez jusqu'à 178€ sur le paiement annuel",
      "Archivage sécurisé de tous les baux et justificatifs",
    ],
  },
  "formule-sos-compta": {
    slug: "formule-sos-compta",
    name: "Formule SOS Compta",
    tag: "Rattrapage & Régularisation",
    price: 990,
    period: " / an",
    summary:
      "Découvrez l'ensemble des modules de gestion, suivi comptable et fiscal. Une assistance ponctuelle pour régulariser ou rattraper votre retard comptable et vos exercices non déclarés.",
    phoneContact: "01 70 60 00 82",
    reassurance:
      "Garantie & Assistance incluses : Nos prestations incluent une assistance à distance complète en cas de contrôle fiscal ou URSSAF. Vous n’êtes jamais seul face à l’Administration.",
    pricingTiers: [
      {
        durationMonths: 12,
        label: "1 an",
        priceTotal: 990,
        monthlyEquivalent: 82.5,
        savings: "Forfait Annuel Intégral",
        popular: true,
      },
    ],
   
    deliverables: [
      {
        title: "Services & Outils Inclus",
        items: [
          "Application smartphone disponible sur Play Store ou Apple Store",
          "Interface de gestion en ligne sécurisée (GED, Outils gestion, CRM, PA native), tout au même endroit",
          "Assistance téléphonique & WhatsApp dédiée (01 70 60 00 82)",
          "Accompagnement utilisation PA (Plateforme agréée) pour la facturation électronique",
          "Assistance à distance complète en cas de contrôle fiscal ou URSSAF (uniquement sur les années traitées)",
        ],
      },
      {
        title: "Comptabilité de Rattrapage",
        items: [
          "Rattrapage des exercices en retard",
          "Reconstitution des livres comptables",
          "Bilan de régularisation",
          "Télétransmission liasse fiscale",
        ],
      },
      {
        title: "Fiscalité & Régularisation",
        items: [
          "Audit de conformité fiscale",
          "Correction des anomalies de déclaration",
          "Négociation avec l'administration fiscale",
        ],
      },
    ],
    advantages: [
      "Forfait annuel transparent à 990,00 €",
      "Sérénité totale face aux mises en demeure",
      "Mise en conformité rapide et irréprochable",
    ],
  },
  "service-en-social": {
    slug: "service-en-social",
    name: "La Paie",
    tag: "Social & Salariés",
    price: 159,
    period: "/mois",
    summary:
      "Découvrez l'ensemble des modules de gestion, suivi comptable et fiscal.",
    phoneContact: "01 70 60 00 82",
    reassurance:
      "Garantie & Assistance incluses : Nos prestations incluent une assistance à distance complète en cas de contrôle fiscal ou URSSAF. Vous n’êtes jamais seul face à l’Administration.",
    pricingTiers: [
      {
        durationMonths: 1,
        label: "1 mois",
        priceTotal: 159,
        monthlyEquivalent: 159,
      },
      {
        durationMonths: 3,
        label: "3 mois",
        priceTotal: 450,
        monthlyEquivalent: 150,
        savings: "Soit 28€ d'économies",
        savingsAmount: 28,
      },
      {
        durationMonths: 6,
        label: "6 mois",
        priceTotal: 858,
        monthlyEquivalent: 143,
        savings: "Soit 96€ d'économies",
        savingsAmount: 96,
      },
      {
        durationMonths: 12,
        label: "1 an",
        priceTotal: 1526,
        monthlyEquivalent: 127.17,
        savings: "Soit 382€ d'économies",
        savingsAmount: 382,
        popular: true,
      },
    ],
    deliverables: [
      {
        title: "Services",
        items: [
          "Application smartphone disponible sur Play Store ou Apple Store",
          "Interface de gestion en ligne sécurisée (GED, Outils gestion, CRM, PA native), tout au même endroit",
          "Assistance téléphonique & whatsapp dédiée",
          "Accompagnement utilisation PA (Plateforme agréée) pour la facturation électronique",
          "Assistance à distance complète en cas de contrôle fiscal ou URSSAF (uniquement sur les années traitées)",
        ],
      },
      {
        title: "Comptabilité",
        items: [
          "Saisie courante",
          "Situations trimestrielles",
          "Reportings et Tableaux de bord mensuels",
          "Bilan de fin d'exercice",
          "Télétransmission de la liasse fiscale",
          "Plaquette des comptes pour le Greffe du TC",
        ],
      },
      {
        title: "Fiscal",
        items: [
          "TVA annuelles",
          "Cadrage annuel de TVA pour les régimes réels",
          "DAS2",
          "CVAE",
          "Relevé de solde IS",
        ],
      },
      {
        title: "Juridique associé",
        items: [
          "PV approbation des comptes annuels pour le Greffe du TC",
        ],
      },
      {
        title: "CRM",
        items: [
          "Fiches clients",
          "Base articles",
          "Devis",
          "Factures automatiques",
          "Envoi des documents automatiquement depuis l'interface",
          "Génération des écritures de ventes",
          "Gestion des relances",
          "Personnalisation des documents",
        ],
      },
    ],
    advantages: [
      "Jusqu'à 382€ d'économies en paiement annuel",
      "Gestion complète de la paie et déclarations sociales",
      "Assistance contrôle fiscal ou URSSAF incluse",
    ],
  },
  "services-associes-a-la-paie": {
    slug: "services-associes-a-la-paie",
    name: "Services associés à la Paie",
    tag: "Conseil RH & Social",
    price: "À la carte",
    period: "",
    summary:
      "Accompagnement dédié sur mesure pour sécuriser vos relations de travail. Consultants RH spécialisés basés en France.",
    deliverables: [
      {
        title: "Plan de Paie & Fiches de Paie",
        items: [
          "Ouverture des caisses",
          "Création et paramétrage du plan de paie",
          "Établissement de la fiche de paie",
          "Déclarations sociales associées dont DSN mensuelles et SDTC",
          "Gestion Impôt sur le Revenu retenue à la source",
        ],
      },
      {
        title: "Veille Sociale & Conseil RH",
        items: [
          "Réponses à 20 problématiques et questions en 24h",
          "Accès téléphonique au consultant social en France",
        ],
      },
      {
        title: "Rédaction & Relecture de Contrats",
        items: [
          "Contrats d'Apprentissage et de Professionnalisation",
          "Contrats de Travail Non Cadre, Cadre et VRP",
          "Contrats de Dirigeant et d'Agent Commercial",
          "Lettres de Mise à Pied et Licenciement",
          "Accords de Rupture Conventionnelle et Transactions",
          "Avenants et relecture de contrats de travail",
        ],
      },
    ],
    advantages: [
      "Consultants RH spécialisés basés en France",
      "Sécurité juridique face aux contentieux",
      "Tarifs transparents à l'acte",
    ],
  },
  "creation-societe": {
    slug: "creation-societe",
    name: "Création Société",
    tag: "Formalités Juridiques",
    price: 790,
    period: " au forfait",
    summary:
      "Découvrez l'ensemble des modules de gestion, suivi comptable et fiscal.",
    phoneContact: "01 70 60 00 82",
    reassurance:
      "Garantie & Assistance incluses : Nos prestations incluent une assistance à distance complète en cas de contrôle fiscal ou URSSAF. Vous n’êtes jamais seul face à l’Administration.",
    pricingTiers: [
      {
        durationMonths: 1,
        label: "Forfait Création",
        priceTotal: 790,
        monthlyEquivalent: 790,
        savings: "Comprend les frais de JAL et Greffe du TC",
        popular: true,
      },
    ],
    deliverables: [
      {
        title: "Création de Société",
        items: [
          "Interview du créateur",
          "Définition des options juridiques, fiscales et sociales (statut du dirigeant)",
          "Rédaction des statuts",
          "Liste des souscripteurs d'actions (SAS et SASU)",
          "Texte insertion Journal Annonces Légales",
          "Formulaire M0",
          "PV de création (délégation de signature bancaire, rémunération dirigeant)",
          "Demande d'ACCRE",
          "Rescrit fiscal (ZFU)",
          "Comprend les frais de JAL et Greffe du TC",
        ],
      },
    ],
    advantages: [
      "Forfait création complet à 790,00 €",
      "Frais de JAL et Greffe du Tribunal de Commerce inclus",
      "Accompagnement personnalisé de l'idée au Kbis",
    ],
  },
  "transformations-societe": {
    slug: "transformations-societe",
    name: "Transformations Société",
    tag: "Évolution Structurelle",
    price: 950,
    period: " au forfait",
    summary:
      "Faites évoluer la structure ou le capital de votre entreprise existante. Comprend les frais de JAL et Greffe du TC.",
   
    deliverables: [
      {
        title: "Actes & Formalités de Transformation",
        items: [
          "Définition des options juridiques, fiscales et sociales",
          "Mise à jour des statuts",
          "Liste des souscripteurs d'actions (SAS et SASU)",
          "Texte insertion Journal Annonces Légales",
          "PV de modification et document de cession des parts",
          "Attestation de dépôt d'actes",
          "Frais de JAL et Greffe du TC inclus",
        ],
      },
    ],
    advantages: [
      "Prise en charge intégrale des formalités administratives",
      "Respect des délais légaux pour la validité des actes",
      "Frais de Greffe et annonce légale inclus",
    ],
  },
  "cessation-et-liquidation": {
    slug: "cessation-et-liquidation",
    name: "Cessation & Liquidation",
    tag: "Fermeture & Dissolution",
    price: 1150,
    period: " au forfait",
    summary:
      "Fermez proprement votre structure en totale conformité légale. PV de cessation d'activité, bilan de liquidation et rapport de liquidation.",
   
    deliverables: [
      {
        title: "Formalités de Dissolution & Liquidation",
        items: [
          "Texte insertion Journal Annonces Légales",
          "Formulaire M2 (dissolution) et M4 (radiation)",
          "PV de cessation d'activité",
          "Bilan de liquidation",
          "PV de liquidation et quitus au liquidateur",
          "Rapport de liquidation",
        ],
      },
    ],
    advantages: [
      "Clôture juridique rigoureuse sans risque de contentieux",
      "Radiation officielle auprès du RCS",
      "Accompagnement par une équipe spécialisée",
    ],
  },
  "crm-pa-native": {
    slug: "crm-pa-native",
    name: "CRM + PA native",
    tag: "Facturation Électronique",
    price: 30,
    period: "/mois",
    summary:
      "Votre outil de facturation avec Plateforme agréée native. Découvrez l'ensemble des modules de facturation, suivi client et conformité facturation électronique 2026.",
   
    deliverables: [
      {
        title: "Module CRM Facturation",
        items: [
          "Fiches clients et base articles",
          "Émission de devis et bons de commande",
          "Factures automatiques et récurrentes",
          "Envoi des documents automatiquement depuis l'interface",
          "Génération automatique des écritures de ventes",
          "Gestion des relances d'impayés",
          "Personnalisation de vos documents à votre image",
        ],
      },
      {
        title: "Module Plateforme Agréée (PA)",
        items: [
          "Facturation électronique 100% conforme à la réforme 2026",
          "Réception et rapprochement des factures fournisseurs",
          "Gestion des flux bancaires et flux de caisse",
          "E-Reporting vers l'administration fiscale",
          "Télétransmission sécurisée Bercy (PPF)",
          "Archivage sécurisé à valeur probante",
        ],
      },
    ],
    advantages: [
      "Conformité légale 2026 garantie sans frais cachés",
      "Plateforme française certifiée",
      "Liaison directe avec vos outils comptables",
    ],
  },
};

export const comparisonCategories: ComparisonCategory[] = [
  {
    category: "Tarification & Économies Dégressives",
    features: [
      {
        name: "Tarif 1 mois",
        tooltip: "Paiement mensuel sans engagement",
        essentiel: "124 €",
        confort: "184 €",
        independant: "204 €",
        sci: "124 €",
        sosCompta: "-",
      },
      {
        name: "Tarif 3 mois",
        tooltip: "Paiement trimestriel avec économie",
        essentiel: "355 € (-17€)",
        confort: "525 € (-27€)",
        independant: "585 € (-27€)",
        sci: "355 € (-17€)",
        sosCompta: "-",
      },
      {
        name: "Tarif 6 mois",
        tooltip: "Paiement semestriel avec économie",
        essentiel: "685 € (-59€)",
        confort: "1 008 € (-96€)",
        independant: "1 116 € (-108€)",
        sci: "685 € (-59€)",
        sosCompta: "-",
      },
      {
        name: "Tarif 1 an (Meilleure Offre)",
        tooltip: "Paiement annuel avec économie maximale",
        essentiel: "1 310 € (-178€)",
        confort: "1 826 € (-382€)",
        independant: "2 018 € (-430€)",
        sci: "1 310 € (-178€)",
        sosCompta: "990 € (Forfait)",
      },
      {
        name: "Sans engagement / Résiliation libre",
        tooltip: "Vous êtes libre d'arrêter sans pénalité",
        essentiel: true,
        confort: true,
        independant: true,
        sci: true,
        sosCompta: "Forfait",
      },
    ],
  },
  {
    category: "Services & Outils Inclus",
    features: [
      {
        name: "Application smartphone (Play Store & App Store)",
        tooltip: "Accès mobile 24h/24",
        essentiel: true,
        confort: true,
        independant: true,
        sci: true,
        sosCompta: true,
      },
      {
        name: "Interface en ligne sécurisée (GED, Outils, CRM, PA)",
        tooltip: "Portail sécurisé centralisé",
        essentiel: true,
        confort: true,
        independant: true,
        sci: true,
        sosCompta: true,
      },
      {
        name: "Assistance téléphonique & WhatsApp (01 70 60 00 82)",
        tooltip: "Interlocuteur dédié",
        essentiel: true,
        confort: true,
        independant: true,
        sci: true,
        sosCompta: true,
      },
      {
        name: "Accompagnement Plateforme Agréée (PA)",
        tooltip: "Aide à la mise en œuvre de la facturation 2026",
        essentiel: true,
        confort: true,
        independant: true,
        sci: true,
        sosCompta: true,
      },
      {
        name: "Assistance contrôle fiscal ou URSSAF à distance",
        tooltip: "Prestation complète sur les années traitées",
        essentiel: true,
        confort: true,
        independant: true,
        sci: true,
        sosCompta: true,
      },
    ],
  },
  {
    category: "Comptabilité & Bilan",
    features: [
      {
        name: "Saisie courante des pièces comptables",
        tooltip: "Achats, ventes, relevés bancaires",
        essentiel: true,
        confort: true,
        independant: true,
        sci: true,
        sosCompta: "Retards",
      },
      {
        name: "Situations trimestrielles",
        tooltip: "Points intermédiaires de gestion",
        essentiel: true,
        confort: true,
        independant: true,
        sci: true,
        sosCompta: false,
      },
      {
        name: "Reportings et Tableaux de bord mensuels",
        tooltip: "Visibilité de trésorerie et rentabilité",
        essentiel: true,
        confort: true,
        independant: true,
        sci: true,
        sosCompta: false,
      },
      {
        name: "Bilan de fin d'exercice",
        tooltip: "Établissement des comptes annuels",
        essentiel: true,
        confort: true,
        independant: true,
        sci: true,
        sosCompta: "Régularisation",
      },
      {
        name: "Télétransmission de la liasse fiscale",
        tooltip: "Envoi officiel à l'administration fiscale",
        essentiel: true,
        confort: true,
        independant: true,
        sci: true,
        sosCompta: true,
      },
      {
        name: "Plaquette des comptes pour le Greffe du TC",
        tooltip: "Dossier conforme prêt pour dépôt",
        essentiel: true,
        confort: true,
        independant: true,
        sci: true,
        sosCompta: false,
      },
      {
        name: "Rattrapage & reconstitution des exercices en retard",
        tooltip: "Reprise des années non clôturées",
        essentiel: false,
        confort: false,
        independant: false,
        sci: false,
        sosCompta: true,
      },
    ],
  },
  {
    category: "Fiscalité & Déclarations",
    features: [
      {
        name: "CA12 TVA annuelle",
        tooltip: "Déclaration annuelle de TVA",
        essentiel: true,
        confort: false,
        independant: true,
        sci: true,
        sosCompta: false,
      },
      {
        name: "TVA mensuelles ou trimestrielles",
        tooltip: "Déclarations récurrentes pour régimes réels",
        essentiel: false,
        confort: true,
        independant: false,
        sci: false,
        sosCompta: false,
      },
      {
        name: "Cadrage annuel de TVA (régimes réels)",
        tooltip: "Rapprochement TVA CA3 et balance",
        essentiel: true,
        confort: true,
        independant: true,
        sci: true,
        sosCompta: false,
      },
      {
        name: "Déclarations DAS2 & CVAE",
        tooltip: "Honoraires et taxes annexes",
        essentiel: true,
        confort: true,
        independant: true,
        sci: true,
        sosCompta: false,
      },
      {
        name: "Relevé de solde IS",
        tooltip: "Impôt sur les sociétés",
        essentiel: true,
        confort: true,
        independant: true,
        sci: true,
        sosCompta: false,
      },
      {
        name: "Déclarations 2072 (IR) ou 2065 (IS) spécifiques SCI",
        tooltip: "Répartition quotes-parts d'associés",
        essentiel: false,
        confort: false,
        independant: false,
        sci: true,
        sosCompta: false,
      },
      {
        name: "Audit de conformité & négociation administration",
        tooltip: "Régularisation des anomalies fiscales",
        essentiel: false,
        confort: false,
        independant: false,
        sci: false,
        sosCompta: true,
      },
    ],
  },
  {
    category: "Volet Social & Juridique",
    features: [
      {
        name: "Gestion SSI (ex-RSI)",
        tooltip: "Sécurité sociale des indépendants",
        essentiel: false,
        confort: false,
        independant: true,
        sci: false,
        sosCompta: false,
      },
      {
        name: "Gestion CIPAV (professions libérales)",
        tooltip: "Caisse interprofessionnelle",
        essentiel: false,
        confort: false,
        independant: true,
        sci: false,
        sosCompta: false,
      },
      {
        name: "PV approbation comptes annuels pour le Greffe du TC",
        tooltip: "Procès-verbal d'assemblée générale",
        essentiel: false,
        confort: true,
        independant: true,
        sci: false,
        sosCompta: false,
      },
    ],
  },
  {
    category: "CRM Facturation Commerciale",
    features: [
      {
        name: "Fiches clients & Base articles",
        tooltip: "Gestion centralisée du catalogue et clients",
        essentiel: true,
        confort: true,
        independant: true,
        sci: true,
        sosCompta: false,
      },
      {
        name: "Devis & Factures automatiques",
        tooltip: "Création et suivi",
        essentiel: true,
        confort: true,
        independant: true,
        sci: true,
        sosCompta: false,
      },
      {
        name: "Envoi des documents directement depuis l'interface",
        tooltip: "Emailing natif des factures",
        essentiel: true,
        confort: true,
        independant: true,
        sci: true,
        sosCompta: false,
      },
      {
        name: "Génération automatique des écritures de ventes",
        tooltip: "Passerelle directe vers la comptabilité",
        essentiel: true,
        confort: true,
        independant: true,
        sci: true,
        sosCompta: false,
      },
      {
        name: "Gestion des relances & Personnalisation",
        tooltip: "Suivi des impayés et charte visuelle",
        essentiel: true,
        confort: true,
        independant: true,
        sci: true,
        sosCompta: false,
      },
    ],
  },
  {
    category: "Plateforme Agréée Native (PA 2026)",
    features: [
      {
        name: "Facturation électronique conforme réforme 2026",
        tooltip: "Conformité légale anticipée",
        essentiel: true,
        confort: true,
        independant: true,
        sci: true,
        sosCompta: false,
      },
      {
        name: "Réception des factures fournisseurs",
        tooltip: "Collecte et rapprochement",
        essentiel: true,
        confort: true,
        independant: true,
        sci: true,
        sosCompta: false,
      },
      {
        name: "Flux de banque et caisse intégrés",
        tooltip: "Synchronisation bancaire automatique",
        essentiel: true,
        confort: true,
        independant: true,
        sci: true,
        sosCompta: false,
      },
      {
        name: "E-Reporting & Transmission Bercy (PPF)",
        tooltip: "Flux obligatoires vers l'administration",
        essentiel: true,
        confort: true,
        independant: true,
        sci: true,
        sosCompta: false,
      },
      {
        name: "Archivage sécurisé à valeur probante",
        tooltip: "Conservation légale 10 ans",
        essentiel: true,
        confort: true,
        independant: true,
        sci: true,
        sosCompta: false,
      },
    ],
  },
];

export const whyChooseForfaits = {
  title: "Pourquoi nos forfaits ?",
  subtitle:
    "Un tarif fixe, des délais garantis et une équipe dédiée. Vous bénéficiez de tous les outils réunis : CRM, Plateforme Agréée et GED sécurisée.",
  badges: [
    "Compte CRM + PA + GED sécurisé et en ligne",
    "Sans engagement de durée",
    "Tarifs dégressifs clairs",
  ],
  steps: [
    {
      time: "Jour 1",
      title: "Premier contact & Diagnostic",
      description: "Étude de votre situation et sélection de la formule idéale.",
    },
    {
      time: "Jour 2-3",
      title: "Activation & Paramétrage",
      description: "Ouverture de votre espace GED sécurisé, CRM et module PA 2026.",
    },
    {
      time: "Jour 5",
      title: "Prise en charge comptable",
      description: "Liaison bancaire, début du traitement des pièces et suivi dédié.",
    },
  ],
};

export const servicesALaCarteContent = {
  title: "Services à la carte & Formalités",
  subtitle: "Des prestations spécialisées au forfait pour vos démarches juridiques et RH.",
  services: [
    {
      id: "service-en-social",
      name: "La Paie",
      tag: "Social & Salariés",
      price: 159,
      pricePeriod: "/mois",
      description:
        "Gestion externalisée de vos salariés et de vos obligations d'employeur (bulletins, DSN, charges).",
      href: "/offres/service-en-social",
      ctaText: "Choisir ce plan",
    },
    {
      id: "services-associes-a-la-paie",
      name: "Services associés à la Paie",
      tag: "Conseil RH & Social",
      price: "À la carte",
      pricePeriod: "",
      description:
        "Accompagnement dédié sur mesure pour sécuriser vos relations de travail (contrats, ruptures, contentieux).",
      href: "/offres/services-associes-a-la-paie",
      ctaText: "Demander un devis",
    },
    {
      id: "creation-societe",
      name: "Création Société",
      tag: "Formalités Juridiques",
      price: 790,
      pricePeriod: " au forfait",
      description:
        "De l'idée au Kbis, prise en charge intégrale de la rédaction des statuts, JAL et Greffe inclus.",
      href: "/offres/creation-societe",
      ctaText: "Choisir ce plan",
    },
    {
      id: "transformations-societe",
      name: "Transformations Société",
      tag: "Évolution Structurelle",
      price: 950,
      pricePeriod: " au forfait",
      description:
        "Faites évoluer la forme sociale, transférez le siège ou augmentez le capital en toute légalité.",
      href: "/offres/transformations-societe",
      ctaText: "Choisir ce plan",
    },
    {
      id: "cessation-et-liquidation",
      name: "Cessation & Liquidation",
      tag: "Fermeture & Dissolution",
      price: 1150,
      pricePeriod: " au forfait",
      description:
        "Clôturez rigoureusement votre société sans litige ultérieur : PV, bilan de liquidation et radiation.",
      href: "/offres/cessation-et-liquidation",
      ctaText: "Choisir ce plan",
    },
    {
      id: "crm-pa-native",
      name: "CRM + PA native",
      tag: "Facturation Électronique",
      price: 30,
      pricePeriod: "/mois",
      description:
        "Votre logiciel de facturation avec Plateforme agréée native et télétransmission Bercy.",
      href: "/offres/crm-pa-native",
      ctaText: "Choisir ce plan",
    },
  ],
};

export const offresFaqList: OffresFaqItem[] = [
  {
    question: "Comment fonctionnent les tarifs dégressifs ?",
    answer:
      "Plus vous prévoyez votre trésorerie à l'avance (3 mois, 6 mois ou 1 an), plus le coût mensuel équivalent baisse. Par exemple, sur la Formule Confort, le paiement annuel vous fait économiser 382 € HT !",
  },
  {
    question: "Puis-je changer de formule en cours de route ?",
    answer:
      "Oui absolument. Toutes nos formules sont flexibles : vous pouvez ajuster votre formule selon la croissance de votre entreprise sans frais cachés.",
  },
  {
    question: "L'assistance en cas de contrôle fiscal ou URSSAF est-elle vraiment incluse ?",
    answer:
      "Oui ! Toutes nos formules incluent l'assistance à distance complète en cas de contrôle fiscal ou URSSAF sur les années traitées par TOP-COMPTA.FR. Vous n'êtes jamais seul face à l'Administration.",
  },
  {
    question: "La facturation électronique 2026 est-elle déjà comprise ?",
    answer:
      "Oui. Nos formules intègrent nativement le CRM connecté à une Plateforme Agréée (PA), prête pour l'émission, la réception et l'E-Reporting obligatoire auprès de Bercy.",
  },
  {
    question: "Y a-t-il un engagement de durée ?",
    answer:
      "Non. Nos forfaits sont sans engagement. La résiliation est libre et sans pénalité.",
  },
];
