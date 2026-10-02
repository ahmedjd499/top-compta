export interface DetailedFormula {
  slug: string;
  name: string;
  tag: string;
  price: number;
  period: string;
  summary: string;
  targetAudience: string[];
  deliverables: {
    title: string;
    items: string[];
  }[];
  advantages: string[];
  recommended?: boolean;
}

export const detailedFormulas: Record<string, DetailedFormula> = {
  "formule-essentiel": {
    slug: "formule-essentiel",
    name: "Formule Essentiel",
    tag: "Pack Débutant",
    price: 124,
    period: "/mois HT",
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
    period: "/mois HT",
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
    period: "/mois HT",
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
    period: "/mois HT",
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
};
