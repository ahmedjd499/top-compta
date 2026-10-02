export interface DetailedFormula {
  slug: string;
  name: string;
  tag: string;
  price: number | string;
  period?: string;
  summary: string;
  targetAudience: string[];
  deliverables: {
    title: string;
    items: string[];
  }[];
  advantages: string[];
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

export const offresHeroContent = {
  title: "Choisissez le niveau d’accompagnement",
  titleHighlight: "qui vous correspond le mieux.",
  subtitle:
    "De la tenue comptable aux formalités administratives, choisissez le niveau d'accompagnement qui vous correspond.",
  trustItems: [
    {
      title: "Dès 124 €/mois",
      subtitle: "Sans frais cachés et PA incluse",
    },
    {
      title: "Sans engagement",
      subtitle: "Résiliation sans préavis",
    },
    {
      title: "Avec assistance dédiée",
      subtitle: "Tel & whatsapp",
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
    description: "La gestion comptable de base pour démarrer sereinement.",
    href: "/offres/formule-essentiel",
    ctaText: "Choisir ce plan",
  },
  {
    id: "formule-confort",
    name: "Formule Confort",
    tag: "Délégation Totale",
    price: 184,
    pricePeriod: "/mois",
    description:
      "Une offre complète pour déléguer toute votre comptabilité de manière fluide.",
    href: "/offres/formule-confort",
    ctaText: "Choisir ce plan",
    recommended: true,
  },
  {
    id: "formule-independant",
    name: "Formule Indépendant",
    tag: "Freelances & TNS",
    price: 204,
    pricePeriod: "/mois",
    description: "Spécifique pour les travailleurs indépendants TNS.",
    href: "/offres/formule-independant",
    ctaText: "Choisir ce plan",
  },
  {
    id: "formule-sci",
    name: "Formule SCI",
    tag: "Gestion Immobilière",
    price: 124,
    pricePeriod: "/mois",
    description:
      "Dédiée à la gestion comptable et fiscale de votre patrimoine immobilier.",
    href: "/offres/formule-sci",
    ctaText: "Choisir ce plan",
  },
  {
    id: "formule-sos-compta",
    name: "Formule SOS Compta",
    tag: "Rattrapage & Régularisation",
    price: "Forfait Annuel",
    description:
      "Une assistance ponctuelle pour régulariser ou rattraper votre retard comptable.",
    href: "/offres/formule-sos-compta",
    ctaText: "Choisir ce plan",
  },
  {
    id: "speed-bilan",
    name: "Speed Bilan",
    tag: "Bilan Express",
    price: "Sur devis",
    description:
      "Votre bilan annuel réalisé rapidement, simplement et en toute fiabilité.",
    href: "https://speedbilan.fr",
    ctaText: "VOIR PLUS",
    recommended: true,
    isExternal: true,
  },
];

export const whyChooseForfaits = {
  title: "Pourquoi nos forfaits ?",
  subtitle:
    "Un tarif fixe, des délais garantis et une équipe dédiée à Tunis. Vous ne payez que ce dont vous avez besoin.",
  badges: [
    "Compte CRM + PA + GED sécurisé et en ligne",
    "Sans engagement",
  ],
  steps: [
    {
      time: "Jour 1",
      title: "Premier contact",
      description: "Étude de vos besoins .",
    },
    {
      time: "Jour 2-3",
      title: "Forfait sur mesure",
      description: "Devis détaillé avec le niveau de service adapté.",
    },
    {
      time: "Jour 5",
      title: "Activation de votre espace client, CRM et PA",
      description: "Accès à l'espace client et début du traitement.",
    },
  ],
};

export const servicesALaCarteContent = {
  title: "Service à la carte",
  subtitle: "Prestations à la carte et accompagnement spécialisé.",
  services: [
    {
      id: "service-en-social",
      name: "La Paie",
      tag: "Social & Salariés",
      price: "À la carte",
      pricePeriod: "",
      description:
        "Gestion externalisée de vos salariés et de vos obligations d'employeur.",
      href: "/offres/service-en-social",
      ctaText: "Demander un devis",
    },
    {
      id: "services-associes-a-la-paie",
      name: "Services associés à la Paie",
      tag: "Conseil RH & Social",
      price: "À la carte",
      pricePeriod: "",
      description:
        "Accompagnement dédié sur mesure pour sécuriser vos relations de travail.",
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
        "De l'idée au Kbis, nous prenons en charge toutes les formalités administratives de création.",
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
        "Faites évoluer la structure ou le capital de votre entreprise existante.",
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
        "Fermez proprement votre structure en totale conformité légale.",
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
        "Votre outil de facturation avec Plateforme agréée native.",
      href: "/offres/crm-pa-native",
      ctaText: "Choisir ce plan",
    },
  ],
};

export const offresFaqList: OffresFaqItem[] = [
  {
    question: "Puis-je changer de formule en cours de contrat ?",
    answer: "Oui, vous pouvez upgrader ou downgrader à tout moment.",
  },
  {
    question: "Qu'est-ce qui est inclus dans la saisie comptable ?",
    answer:
      "Enregistrement de vos achats, ventes, banques et OD. Pièces traitées une fois déposées dans votre espace GED via le PC ou le smartphone.",
  },
  {
    question: "Les fiches de paie sont-elles incluses dans les formules ?",
    answer:
      "Les services à la carte et prestations associées sont facturées séparément et ne sont pas incluses dans les forfaits mensuels.",
  },
  {
    question: "Y a-t-il un engagement de durée ?",
    answer:
      "Non. Tous nos contrats sont sans engagement. Vous pouvez résilier sans préavis et sans pénalité.",
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
      "La gestion comptable de base pour démarrer sereinement. Vous êtes en lancement d'entreprise ou en franchise en base de TVA et souhaitez faire des économies en assurant une partie de vos flux.",
    targetAudience: [
      "Créateurs d'entreprise et jeunes structures",
      "Entreprises en franchise en base de TVA",
      "Dirigeants prenant une partie des obligations en charge",
    ],
    deliverables: [
      {
        title: "Comptabilité & Saisie",
        items: [
          "Saisie courante et pointage régulier des écritures",
          "Rapprochement bancaire mensuel",
          "Vérification de la cohérence des flux",
        ],
      },
      {
        title: "Outils & Services",
        items: [
          "Accès complet GED MyCompanyFiles (Web & Mobile)",
          "Classement documentaire sécurisé cloud ISO-27001",
          "Assistance téléphonique aux heures ouvrées",
        ],
      },
    ],
    advantages: [
      "Tarif forfaitaire accessible sans frais cachés",
      "Zéro engagement de durée",
      "Évolution fluide vers la formule Confort dès que l'activité grandit",
    ],
  },
  "formule-confort": {
    slug: "formule-confort",
    name: "Formule Confort",
    tag: "Délégation Totale",
    price: 184,
    period: "/mois",
    summary:
      "Une offre complète pour déléguer toute votre comptabilité de manière fluide. Vous êtes gérant minoritaire ou égalitaire de SARL, ou président de SAS, et souhaitez vous consacrer à votre développement.",
    recommended: true,
    targetAudience: [
      "Présidents de SAS et SASU",
      "Gérants minoritaires ou égalitaires de SARL",
      "PME et TPE avec flux réguliers souhaitant une sérénité totale",
    ],
    deliverables: [
      {
        title: "Comptabilité & Fiscalité Complète",
        items: [
          "Saisie intégrale de toutes les pièces comptables",
          "Déclarations fiscales périodiques (TVA, CFE, IS)",
          "Préparation de la liasse fiscale et plaquette des comptes annuels",
        ],
      },
      {
        title: "Pilotage & GED Avancée",
        items: [
          "Accès GED Cloud + intégration CRM / Plateforme Agréée Habile Solutions",
          "Tableaux de bord mensuels et reportings trimestriels consultables",
          "Accompagnateur dédié disponible par téléphone, email et WhatsApp",
        ],
      },
    ],
    advantages: [
      "Délégation administrative et comptable 100% sans anxiété",
      "Plateforme agréée en natif pour la facturation électronique 2026",
      "Pilotage en temps réel avec indicateurs clés",
    ],
  },
  "formule-independant": {
    slug: "formule-independant",
    name: "Formule Indépendant",
    tag: "Freelances & TNS",
    price: 204,
    period: "/mois",
    summary:
      "Spécifique pour les travailleurs indépendants TNS. Vous voulez déléguer la gestion du RSI / Urssaf anxiogène et avoir l'esprit tranquille pour développer votre business et optimiser vos revenus.",
    targetAudience: [
      "Professions libérales et indépendants au régime réel",
      "Travailleurs non-salariés (TNS) et gérants majoritaires de SARL/EURL",
      "Consultants, freelances et artisans prestataires",
    ],
    deliverables: [
      {
        title: "Déclarations Sociales & Fiscales TNS",
        items: [
          "Déclarations sociales TNS & déclarations URSSAF",
          "Déclaration 2042 C Pro et intégration des revenus professionnels",
          "Optimisation des cotisations sociales et suivi de régularisation",
        ],
      },
      {
        title: "Outils Dédiés & Mobilité",
        items: [
          "Espace mobile dédié pour capture et notes de frais",
          "Accès GED MyCompanyFiles 24/7",
          "Reportings adaptés aux revenus d'indépendants",
        ],
      },
    ],
    advantages: [
      "Gestion experte des subtilités du régime des indépendants",
      "Zéro pénalité de retard sur les échéances URSSAF",
      "Accompagnement humain et réactif",
    ],
  },
  "formule-sci": {
    slug: "formule-sci",
    name: "Formule SCI",
    tag: "Gestion Immobilière",
    price: 124,
    period: "/mois",
    summary:
      "Dédiée à la gestion comptable et fiscale de votre patrimoine immobilier (SCI à l'IR ou à l'IS). Assurez la rigueur de vos comptes d'associés et le respect des obligations déclaratives.",
    targetAudience: [
      "SCI familiales de détention immobilière",
      "SCI assujetties à l'impôt sur le revenu (IR - déclaration 2072)",
      "SCI assujetties à l'impôt sur les sociétés (IS - liasse 2065)",
    ],
    deliverables: [
      {
        title: "Déclarations Spécifiques SCI",
        items: [
          "Déclarations 2072 (IR) ou 2065 (IS) complètes",
          "Suivi et répartition des comptes courants d'associés",
          "Calcul des quotes-parts de chaque associé",
        ],
      },
      {
        title: "Archivage & Justificatifs",
        items: [
          "Archivage sécurisé des baux, quittances et factures de travaux",
          "Mise à disposition des éléments pour les assemblées générales",
          "Assistance téléphonique dédiée",
        ],
      },
    ],
    advantages: [
      "Tarif compétitif adapté aux structures patrimoniales",
      "Dossier conforme prêt pour vos banques et notaires",
      "Simplicité de transmission documentaire",
    ],
  },
  "formule-sos-compta": {
    slug: "formule-sos-compta",
    name: "Formule SOS Compta",
    tag: "Rattrapage & Régularisation",
    price: "Forfait Annuel",
    period: "",
    summary:
      "Une assistance ponctuelle pour régulariser ou rattraper votre retard comptable. Découvrez l'ensemble des modules de gestion, suivi comptable et fiscal.",
    targetAudience: [
      "Entreprises avec des retards d'un ou plusieurs exercices",
      "Dirigeants confrontés à des relances fiscales ou URSSAF",
      "Entreprises ayant besoin d'une régularisation urgente des livres comptables",
    ],
    deliverables: [
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
      {
        title: "Outils & Services Inclus",
        items: [
          "Application smartphone disponible sur Play Store ou Apple Store",
          "Interface de gestion en ligne sécurisée (GED, Outils gestion, CRM, PA native), tout au même endroit",
          "Assistance téléphonique & WhatsApp dédiée",
          "Accompagnement utilisation PA (Plateforme agréée) pour la facturation électronique",
          "Assistance à distance complète en cas de contrôle fiscal ou URSSAF (uniquement sur les années traitées)",
        ],
      },
    ],
    advantages: [
      "Rattrapage comptable complet et sérénité retrouvée",
      "Accompagnement direct face à l'administration",
      "Reprise en main immédiate de votre situation financière",
    ],
  },
  "service-en-social": {
    slug: "service-en-social",
    name: "La Paie",
    tag: "Social & Salariés",
    price: "À la carte",
    period: "",
    summary:
      "Gestion externalisée de vos salariés et de vos obligations d'employeur. Découvrez l'ensemble des modules de gestion, suivi comptable et fiscal.",
    targetAudience: [
      "TPE et PME employant de 1 à 50 salariés",
      "Entreprises souhaitant sécuriser l'émission de leurs bulletins de salaire",
      "Dirigeants souhaitant déléguer les déclarations sociales et DSN",
    ],
    deliverables: [
      {
        title: "Comptabilité & Déclarations",
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
        title: "Fiscalité & Social",
        items: [
          "TVA annuelles & Cadrage annuel de TVA pour régimes réels",
          "DAS2",
          "CVAE",
          "Relevé de solde IS",
          "PV approbation des comptes annuels pour le Greffe du TC",
        ],
      },
      {
        title: "CRM & Outils",
        items: [
          "Fiches clients et base articles",
          "Devis et factures automatiques",
          "Envoi des documents automatiquement depuis l'interface",
          "Application smartphone et GED sécurisée",
          "Assistance téléphonique & WhatsApp dédiée",
        ],
      },
    ],
    advantages: [
      "Conformité sociale rigoureuse garantie",
      "Télétransmissions DSN sans retard",
      "Assistance dédiée en droit social",
    ],
  },
  "services-associes-a-la-paie": {
    slug: "services-associes-a-la-paie",
    name: "Services associés à la Paie",
    tag: "Conseil RH & Juridique Social",
    price: "À la carte",
    period: "",
    summary:
      "Accompagnement dédié sur mesure pour sécuriser vos relations de travail. Découvrez l'ensemble des modules de gestion et de conseil RH avec nos consultants RH spécialisés basés en France.",
    targetAudience: [
      "Employeurs recherchant un accompagnement juridique et RH sur mesure",
      "Entreprises lors de recrutements, contrats de travail et ruptures",
      "Dirigeants voulant une réponse rapide sous 24h à leurs questions sociales",
    ],
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
      "Sécurité juridique face aux contentieux prud'homaux",
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
      "De l'idée au Kbis, nous prenons en charge toutes les formalités administratives de création. Comprend les frais de JAL et Greffe du TC.",
    targetAudience: [
      "Créateurs d'entreprises (SAS, SASU, SARL, EURL, SCI)",
      "Porteurs de projet souhaitant un accompagnement juridique clef en main",
      "Entrepreneurs souhaitant optimiser le statut social du dirigeant dès le départ",
    ],
    deliverables: [
      {
        title: "Formalités Juridiques Complètes",
        items: [
          "Interview du créateur",
          "Définition des options juridiques, fiscales et sociales (statut du dirigeant)",
          "Rédaction personnalisée des statuts",
          "Liste des souscripteurs d'actions (SAS et SASU)",
          "Texte d'insertion Journal d'Annonces Légales (JAL)",
          "Formulaire M0",
          "PV de création (délégation de signature bancaire, rémunération dirigeant)",
          "Demande d'ACCRE",
          "Rescrit fiscal (ZFU si applicable)",
          "Frais de JAL et Greffe du TC inclus",
        ],
      },
    ],
    advantages: [
      "Obtention rapide du Kbis",
      "Frais d'annonces légales et Greffe inclus dans le forfait",
      "Conseils personnalisés sur le statut juridique et fiscal",
    ],
  },
  "transformations-societe": {
    slug: "transformations-societe",
    name: "Transformations Société",
    tag: "Évolution de Structure",
    price: 950,
    period: " au forfait",
    summary:
      "Faites évoluer la structure ou le capital de votre entreprise existante. Comprend les frais de JAL et Greffe du TC.",
    targetAudience: [
      "Entreprises changeant de forme (SARL vers SAS, etc.)",
      "Sociétés procédant à des augmentations de capital ou transferts de siège",
      "Cessions de parts sociales et changements de gérance",
    ],
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
    targetAudience: [
      "Dirigeants clôturant l'activité de leur société",
      "Entreprises procédant à une dissolution amiable et liquidation",
      "Sociétés arrivant au terme de leur mandat d'activité",
    ],
    deliverables: [
      {
        title: "Formalités de Dissolution & Liquidation",
        items: [
          "Texte insertion Journal Annonces Légales",
          "Formulaire M2 (dissolution)",
          "Formulaire M4 (radiation)",
          "PV de cessation d'activité",
          "Bilan de liquidation",
          "PV de liquidation et quitus au liquidateur",
          "Rapport de liquidation",
        ],
      },
    ],
    advantages: [
      "Clôture juridique rigoureuse sans risque de contentieux futur",
      "Radiation officielle auprès du Registre du Commerce et des Sociétés",
      "Accompagnement par une équipe spécialisée",
    ],
  },
  "crm-pa-native": {
    slug: "crm-pa-native",
    name: "CRM + PA native",
    tag: "Facturation & Plateforme Agréée",
    price: 30,
    period: "/mois",
    summary:
      "Votre outil de facturation avec Plateforme agréée native. Découvrez l'ensemble des modules de facturation, suivi client et conformité facturation électronique 2026.",
    targetAudience: [
      "Toutes entreprises soumises à la facturation électronique 2026",
      "TPE/PME recherchant un CRM facturation simple et connecté",
      "Entrepreneurs souhaitant automatiser leurs devis et relances",
    ],
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
