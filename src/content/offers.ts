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
  id: string;
  slug: string;
  name: string;
  tag: string;
  price: number | string;
  period?: string;
  pricePeriod?: string;
  description: string;
  summary: string;
  href: string;
  ctaText: string;
  ctaHref?: string;
  pricingTiers?: PricingTier[];
  deliverables: {
    title: string;
    items: string[];
  }[];
  reassurance?: string;
  phoneContact?: string;
  recommended?: boolean;
  isExternal?: boolean;
}

export type OffresMonthlyPlan = DetailedFormula;
export type OffresServiceCarte = DetailedFormula;

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
  title: "Choisissez le niveau d'accompagnement",
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

export const detailedFormulas: Record<string, DetailedFormula> = {
  "formule-essentiel": {
    id: "formule-essentiel",
    slug: "formule-essentiel",
    name: "Formule Essentiel",
    tag: "Pack Débutant",
    price: 124,
    period: "/mois",
    pricePeriod: "/mois",
    description: "La gestion comptable de base pour démarrer sereinement.",
    summary:
      "Découvrez l'ensemble des modules de gestion, suivi comptable et fiscal.",
    href: "/offres/formule-essentiel",
    ctaText: "Choisir ce plan",
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
        title: "Services",
        items: [
          "Application smartphone disponible sur Play Store ou Apple Store",
          "Interface de gestion en ligne sécurisée (GED, Outils gestion, CRM, PA native), tout au même endroit",
          "Assistance téléphonique & WhatsApp dédiée ",
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
          "CA12 TVA annuelle",
          "Cadrage annuel de TVA pour les régimes réels",
          "DAS2",
          "CVAE",
          "Relevé de solde IS",
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
      {
        title: "PA (Plateforme Agréée Native)",
        items: [
          "Facturation électronique conforme",
          "Réception factures fournisseurs",
          "Flux de banque et caisse",
          "E-Reporting vers",
          "Transmission Bercy",
          "Archivage sécurisé",
        ],
      },
    ],
   
  },
  "formule-confort": {
    id: "formule-confort",
    slug: "formule-confort",
    name: "Formule Confort",
    tag: "Délégation Totale",
    price: 184,
    period: "/mois",
    pricePeriod: "/mois",
    description:
      "Une offre complète pour déléguer toute votre comptabilité de manière fluide.",
    summary:
      "Découvrez l'ensemble des modules de gestion, suivi comptable et fiscal.",
    href: "/offres/formule-confort",
    ctaText: "Choisir ce plan",
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
        title: "Services",
        items: [
          "Application smartphone disponible sur Play Store ou Apple Store",
          "Interface de gestion en ligne sécurisée (GED, Outils gestion, CRM, PA native), tout au même endroit",
          "Assistance téléphonique & WhatsApp dédiée ",
          "Accompagnement utilisation PA (Plateforme agréée) pour la facturation électronique",
          "Assistance à distance complète en cas de contrôle fiscal ou URSSAF (uniquement sur les années traitées)",
        ],
      },
      {
        title: "Comptabilité" ,
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
        title: "Fiscal",
        items: [
          "TVA mensuelles ou trimestrielles",
          "Cadrage annuel de TVA pour les régimes réels",
          "DAS2",
          "CVAE",
          "Relevé de solde IS",
        ],
      },
      {
        title: "Juridique Associé",
        items: [
          "PV approbation des comptes annuels pour le Greffe du TC",
        ],
      },
      {
        title: "CRM",
        items: [
          "Fiches clients ",
          "Base articles",
          "Devis ",
          "Factures automatiques",
          "Envoi des documents automatiquement depuis l'interface",
          "Génération automatique des écritures de ventes",
          "Gestion des relances",
          "Personnalisation des documents",
        ],
      },
      {
        title: "PA (Plateforme Agréée Native)",
        items: [
          "Facturation électronique",
          "Réception factures fournisseurs",
          "Flux de banque et caisse",
          "E-Reporting",
          "Transmission Bercy",
          "Archivage sécurisé",
        ],
      },
    ],
   
  },
  "formule-independant": {
    id: "formule-independant",
    slug: "formule-independant",
    name: "Formule Indépendant",
    tag: "Freelances & TNS",
    price: 204,
    period: "/mois",
    pricePeriod: "/mois",
    description: "Spécifique pour les travailleurs indépendants TNS.",
    summary:
      "Découvrez l'ensemble des modules de gestion, suivi comptable et fiscal.",
    href: "/offres/formule-independant",
    ctaText: "Choisir ce plan",
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
        title: "Services",
        items: [
          "Application smartphone disponible sur Play Store ou Apple Store",
          "Interface de gestion en ligne sécurisée (GED, Outils gestion, CRM, PA native), tout au même endroit",
          "Assistance téléphonique & WhatsApp dédiée ",
          "Accompagnement utilisation PA (Plateforme agréée) pour la facturation électronique",
          "Assistance à distance complète en cas de contrôle fiscal ou URSSAF (uniquement sur les années traitées)",
        ],
      },
      {
        title: "Comptabilité" ,
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
          "CA12 TVA annuelle",
          "Cadrage annuel de TVA pour les régimes réels",
          "DAS2",
          "CVAE",
          "Relevé de solde IS",
        ],
      },
      {
        title: "Social",
        items: [
          "Gestion SSI (ex-RSI)",
          "Gestion CIPAV (professions libérales)",
        ],
      },
      {
        title: "Juridique Associé",
        items: [
          "PV approbation des comptes annuels pour le Greffe du TC",
        ],
      },
      {
        title: "CRM",
        items: [
          "Fiches clients ",
          "Base articles",
          "Devis ",
          "Factures automatiques",
          "Envoi des documents automatiquement depuis l'interface",
          "Génération automatique des écritures de ventes",
          "Gestion des relances",
          "Personnalisation des documents",
        ],
      },
      {
        title: "PA (Plateforme Agréée Native)",
        items: [
          "Facturation électronique conforme",
          "Réception factures fournisseurs",
          "Flux de banque et caisse",
          "E-Reporting",
          "Transmission Bercy",
          "Archivage sécurisé",
        ],
      },
    ],
  
  },
  "formule-sci": {
    id: "formule-sci",
    slug: "formule-sci",
    name: "Formule SCI",
    tag: "Gestion Immobilière",
    price: 124,
    period: "/mois",
    pricePeriod: "/mois",
    description:
      "Dédiée à la gestion comptable et fiscale de votre patrimoine immobilier.",
    summary:
      "Découvrez l'ensemble des modules de gestion, suivi comptable et fiscal.",
    href: "/offres/formule-sci",
    ctaText: "Choisir ce plan",
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
        title: "Services",
        items: [
          "Application smartphone disponible sur Play Store ou Apple Store",
          "Interface de gestion en ligne sécurisée (GED, Outils gestion, CRM, PA native), tout au même endroit",
          "Assistance téléphonique & WhatsApp dédiée ",
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
          
          "CA12 TVA annuelle",
          "Cadrage annuel de TVA pour les régimes réels",
          "DAS2",
          "CVAE",
          "Relevé de solde IS",
        ],
      },
      {
        title: "CRM",
        items: [
          "Fiches clients ",
           "Base biens",
           "Devis",
           "Factures automatiques",
          "Envoi des documents automatiquement depuis l'interface",
          "Génération des écritures de ventes",
          "Gestion des relances",
          "Personnalisation des documents",
        ],
      },
      {
        title: "PA (Plateforme Agréée Native)",
        items: [
          "Facturation électronique conforme",
          "Réception factures fournisseurs",
          "Flux de banque et caisse",
          "E-Reporting",
          "Transmission Bercy",
          "Archivage sécurisé",
        ],
      },
    ],
    
  },
  "formule-sos-compta": {
    id: "formule-sos-compta",
    slug: "formule-sos-compta",
    name: "Formule SOS Compta",
    tag: "Rattrapage & Régularisation",
    price: 990,
    period: " / an",
    pricePeriod: " / an",
    description:
      "Assistance ponctuelle urgente pour régulariser ou rattraper votre retard comptable.",
    summary:
      "Découvrez l'ensemble des modules de gestion, suivi comptable et fiscal.",
    href: "/offres/formule-sos-compta",
    ctaText: "Choisir ce plan",
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
        title: "Services",
        items: [
          "Application smartphone disponible sur Play Store ou Apple Store",
          "Interface de gestion en ligne sécurisée (GED, Outils gestion, CRM, PA native), tout au même endroit",
          "Assistance téléphonique & WhatsApp dédiée ",
          "Accompagnement utilisation PA (Plateforme agréée) pour la facturation électronique",
          "Assistance à distance complète en cas de contrôle fiscal ou URSSAF (uniquement sur les années traitées)",
        ],
      },
      {
        title: "Comptabilité",
        items: [
          "Rattrapage des exercices en retard",
          "Reconstitution des livres comptables",
          "Bilan de régularisation",
          "Télétransmission liasse fiscale",
        ],
      },
      {
        title: "Fiscal",
        items: [
          "Audit de conformité fiscale",
          "Correction des anomalies de déclaration",
          "Négociation avec l'administration fiscale",
        ],
      },
    ],
  
  },
  "service-en-social": {
    id: "service-en-social",
    slug: "service-en-social",
    name: "La Paie",
    tag: "Social & Salariés",
    price: 159,
    period: "/mois",
    pricePeriod: "/mois",
    description:
      "Gestion externalisée de vos salariés et de vos obligations d'employeur (bulletins, DSN, charges).",
    summary:
      "Découvrez l'ensemble des modules de gestion, suivi comptable et fiscal.",
    href: "/offres/service-en-social",
    ctaText: "Choisir ce plan",
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
  
  },
  "services-associes-a-la-paie": {
    id: "services-associes-a-la-paie",
    slug: "services-associes-a-la-paie",
    name: "Services associés à la Paie",
    tag: "Conseil RH & Social",
    price: "À la carte",
    period: "",
    pricePeriod: "",
    description:
      "Accompagnement dédié sur mesure pour sécuriser vos relations de travail (contrats, ruptures, contentieux).",
    summary:
      "Découvrez l'ensemble des modules de gestion, suivi comptable et fiscal.",
    href: "/offres/services-associes-a-la-paie",
    ctaText: "Demander un devis",
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
  },
  "creation-societe": {
    id: "creation-societe",
    slug: "creation-societe",
    name: "Création Société",
    tag: "Formalités Juridiques",
    price: 790,
    period: " au forfait",
    pricePeriod: " au forfait",
    description:
      "De l'idée au Kbis, prise en charge intégrale de la rédaction des statuts, JAL et Greffe inclus.",
    summary:
      "Découvrez l'ensemble des modules de gestion, suivi comptable et fiscal.",
    href: "/offres/creation-societe",
    ctaText: "Choisir ce plan",
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
   
  },
  "transformations-societe": {
    id: "transformations-societe",
    slug: "transformations-societe",
    name: "Transformations Société",
    tag: "Évolution Structurelle",
    price: 950,
    period: " au forfait",
    pricePeriod: " au forfait",
    description:
      "Faites évoluer la forme sociale, transférez le siège ou augmentez le capital en toute légalité.",
    summary:
      "Découvrez l'ensemble des modules de gestion, suivi comptable et fiscal.",
    href: "/offres/transformations-societe",
    ctaText: "Choisir ce plan",
   
    deliverables: [
      {
        title: "Actes & Formalités de Transformation",
        items: [
          "Définition des options juridiques, fiscales et sociales (statut du dirigeant)",
          "Mise à jour des statuts",
          "Liste des souscripteurs d'actions (SAS et SASU)",
          "Texte insertion Journal Annonces Légales",
          "PV de modification",
          "Document de cession des parts",
          "Attestation de dépôt d'actes",
          "Comprend les frais de JAL et Greffe du TC",
        ],
      },
    ],
  
  },
  "cessation-et-liquidation": {
    id: "cessation-et-liquidation",
    slug: "cessation-et-liquidation",
    name: "Cessation & Liquidation",
    tag: "Fermeture & Dissolution",
    price: 1150,
    period: " au forfait",
    pricePeriod: " au forfait",
    description:
      "Clôturez rigoureusement votre société sans litige ultérieur : PV, bilan de liquidation et radiation.",
    summary:
      "Découvrez l'ensemble des modules de gestion, suivi comptable et fiscal.",
    href: "/offres/cessation-et-liquidation",
    ctaText: "Choisir ce plan",
   
    deliverables: [
      {
        title: "Cessation d'Activité et Liquidation de Société",
        items: [
          "Texte insertion Journal Annonces Légales",
          "Formulaire M2",
          "Formulaire M4",
          "PV de cessation d'activité",
          "Bilan de liquidation",
          "PV de liquidation",
          "Rapport de liquidation",
          "Ne comprend pas les frais d'enregistrement du boni et PV de liquidation à la Recette des impots",
        ],
      },
    ],
   
  },
  "crm-pa-native": {
    id: "crm-pa-native",
    slug: "crm-pa-native",
    name: "CRM + PA native",
    tag: "Facturation Électronique",
    price: 30,
    period: "/mois",
    pricePeriod: "/mois",
    description:
      "Votre logiciel de facturation avec Plateforme agréée native et télétransmission Bercy.",
    summary:
      "Découvrez l'ensemble des modules de gestion, suivi comptable et fiscal.",
    href: "/offres/crm-pa-native",
    ctaText: "Choisir ce plan",
   
    deliverables: [
      {
        title: "CRM ",
        items: [
          "Fiches clients ",
          "base articles",
          "Devis",
          "Factures automatiques",
          "Envoi des documents automatiquement depuis l'interface",
          "Génération des écritures de ventes",
          "Gestion des relances",
          "Personnalisation de documents",
        ],
      },
      {
        title: "PA (Plateforme Agréée Native)",
        items: [
          "Facturation électronique conforme",
          "Réception factures fournisseurs en électronique ",
          "Flux banque caisse",
          "E-Reporting",
          "Télétransmission sécurisée Bercy",
          "Archivage sécurisé",
        ],
      },
    ],
 
  },
  "speed-bilan": {
    id: "speed-bilan",
    slug: "speed-bilan",
    name: "Speed Bilan",
    tag: "Bilan Express",
    price: "Sur devis",
    period: "",
    pricePeriod: "",
    description:
      "Votre bilan annuel réalisé rapidement, simplement et en toute conformité légale.",
    summary:
      "Découvrez l'ensemble des modules de gestion, suivi comptable et fiscal.",
    href: "https://speedbilan.fr",
    ctaText: "VOIR PLUS",
    recommended: false,
    isExternal: true,
    deliverables: [],
  },
};

export const allOffers = detailedFormulas;

export const monthlyOffers: OffresMonthlyPlan[] = [
  detailedFormulas["formule-essentiel"],
  detailedFormulas["formule-confort"],
  detailedFormulas["formule-independant"],
  detailedFormulas["formule-sci"],
  detailedFormulas["formule-sos-compta"],
  detailedFormulas["speed-bilan"],
];

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
        name: "Assistance téléphonique & WhatsApp ",
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
        name: "Flux de banque et caisse",
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
    detailedFormulas["service-en-social"],
    detailedFormulas["services-associes-a-la-paie"],
    detailedFormulas["creation-societe"],
    detailedFormulas["transformations-societe"],
    detailedFormulas["cessation-et-liquidation"],
    detailedFormulas["crm-pa-native"],
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
