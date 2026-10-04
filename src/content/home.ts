import {
  FaqItem,
  FinalCtaContent,
  FooterContent,
  HeroContent,
  ProblemSolutionCard,
  QuoteReassurance,
  StepItem,
  TestimonialContent,
  TrustpilotContent,
} from "./types";
import { monthlyOffers, OffresMonthlyPlan } from "./offers";

export const heroContent: HeroContent = {
  badge: "Plateforme Agréée (PA) en natif",
  title: "Préparez vos flux à la facturation électronique.",
  description:
    "TOP-COMPTA.FR vous aide à structurer la collecte des pièces, organiser les circuits de traitement et préparer vos outils internes. TOP-COMPTA.FR propose une PA (Plateforme agréée) en natif via son CRM inclus dans ses services. Le parcours GED > Gestion > CRM > PA est unifié et fluide.",
  partnerCta: {
    text: "Notre partenaire agréé",
    href: "https://www.habile-solutions.com/",
  },
  clientCta: {
    text: "Connexion GED Client",
    href: "https://customer.mycompanyfiles.fr/auth/login",
  },
  indicators: [
    "GED",
    "Facturation Électronique",
    "Plateforme Agréée",
  ],
  milestones: [
    {
      day: "1er",
      month: "septembre",
      year: "2026",
      tag: "Obligation Réception",
      title: "Réception pour toutes les entreprises concernées",
      description:
        "Chaque entreprise doit être en capacité de recevoir les factures électroniques. Les grandes entreprises et les ETI passent également à l'émission.",
      accentClass: "secondary",
    },
    {
      day: "1er",
      month: "septembre",
      year: "2027",
      tag: "Obligation Émission",
      title: "Émission pour les PME, TPE et micro-entreprises",
      description:
        "Dès le 1er septembre 2026, chaque entreprise doit pouvoir émettre ses factures en électronique. Dès le 1er septembre 2027, cette capacité à émettre en électronique devient une obligation.",
      accentClass: "primary",
    },
  ],
};



export const offersContent: {
  badge: string;
  title: string;
  subtitle: string;
  fastActionNotice: string;
  plans: OffresMonthlyPlan[];
} = {
  badge: "Formules au forfait & Tarifs dégressifs",
  title: "Le bon niveau d'externalisation, sans prestation inutile.",
  subtitle: "Chaque formule pensée selon votre spécificité et besoins.",
  fastActionNotice:
    "Souscrire en 1 clic : Choisissez votre formule et réglez en toute sécurité avec PayPal.",
  plans: monthlyOffers,
};

export const trustpilotContent: TrustpilotContent = {
  score: "4,6",
  scoreMax: "5",
  reviewsCount: 52,
  reviewsLabel: "sur 5 · 52 avis affichés sur Trustpilot",
  trustpilotUrl: "https://fr.trustpilot.com/review/top-compta.fr",
  reviews: [
    {
      id: "1",
      quote:
        "Une équipe réactive, disponible et attentive tout au long de l'année.",
      authorRole: "Avis client",
      platform: "Trustpilot",
    },
    {
      id: "2",
      quote:
        "Une plateforme complète qui facilite le dépôt des documents et le suivi.",
      authorRole: "Avis client",
      platform: "Trustpilot",
    },
    {
      id: "3",
      quote:
        "Un contact facile et un travail sérieux, même lorsque le dossier est complexe.",
      authorRole: "Avis client",
      platform: "Trustpilot",
    },
    {
      id: "4",
      quote:
        "Un service apprécié pour sa réactivité et sa compréhension des urgences.",
      authorRole: "Avis client",
      platform: "Trustpilot",
    },
  ],
};

export const testimonialContent: TestimonialContent = {
  badge: "TÉMOIGNAGE CLIENT",
  title: "Confiance, conseil et suivi sur le long terme",
  quoteParagraphs: [
    "Depuis une dizaine d'année nous avons eu la chance d'être suivi par une équipe à l'écoute, réactive et disponible, et ce jusqu'à la liquidation de nos sociétés.",
    "Années après années et tout au long de la vie de notre entreprise, la direction ainsi que ses collaborateurs ont donné de précieux conseils, toujours à taille humaine et adaptés à tous niveaux quel qu'il soit.",
    "Création de notre SCI familiale lors de l'achat de notre local commercial à un tarif plus que concurrentiel, aucun souci à gérer de ce côté avec un montage “clef en main”.",
    "Démarches complètes et suivi total lors de l'arrêt de notre activité, avec réponses à nos questionnements qui sont nombreux et des démarches administratives nombreuses.",
    "Nous recommandons vivement Top Compta, souhaitant à toute entreprise un accompagnement et un suivi aussi performant.",
  ],
  author: "Mr et Mme ANNEBIQUE",
  location: "Département 59 · Nord",
  companies:
    "SARL VEROLIV Fleuriste (2013-2025) · SCI OVERIMO Bailleur (2023-2025)",
};

export const problemSolutionContent: {
  badge: string;
  title: string;
  description: string;

  cards: ProblemSolutionCard[];
} = {
  badge: "Méthode & Clarté",
  title: "Moins de tâches dispersées. Plus de visibilité.",
  description:
    "Quand les documents arrivent par plusieurs canaux et que les échéances se cumulent, le suivi devient vite chronophage. TOP-COMPTA.FR remet de l'ordre dans les flux et prend en charge les opérations définies avec votre entreprise.",
  cards: [
    {
      title: "Des pièces éparpillées",
      description:
        "Factures, relevés et justificatifs sont regroupés dans un espace unique, organisé par dossier et par période.",
      icon: "folder_open",
      accentBg: "bg-blue-100 text-secondary border border-blue-200/60",
    },
    {
      title: "Des tâches qui prennent du retard",
      description:
        "Les opérations courantes sont planifiées, traitées et suivies avec une vision claire des éléments reçus ou manquants.",
      icon: "schedule",
      accentBg: "bg-amber-100 text-amber-700 border border-amber-200/60",
    },
    {
      title: "Un pilotage sans repères",
      description:
        "Les données disponibles sont synthétisées dans des reportings et tableaux de bord adaptés à la formule retenue.",
      icon: "query_stats",
      accentBg: "bg-emerald-100 text-emerald-700 border border-emerald-200/60",
    },
    {
      title: "Des échanges difficiles à retrouver",
      description:
        "Les demandes et documents restent rattachés au dossier afin de limiter les relances inutiles et les pertes d'information.",
      icon: "mark_chat_unread",
      accentBg: "bg-purple-100 text-purple-700 border border-purple-200/60",
    },
  ],
};

export const stepsContent: {
  badge: string;
  title: string;
  description: string;
  steps: StepItem[];
} = {
  badge: "Fonctionnement Transparent",
  title: "Quatre étapes pour garder votre dossier sous contrôle.",
  description:
    "Chaque entreprise conserve une vision claire de ce qu'elle transmet, de ce qui est traité et des actions restant à effectuer.",
  steps: [
    {
      stepNumber: 1,
      title: "Vous présentez votre besoin",
      description:
        "Nous identifions les tâches à externaliser, vos outils actuels et la fréquence de traitement attendue.",
    },
    {
      stepNumber: 2,
      title: "Le périmètre est défini",
      description:
        "Le devis et le contrat précisent les opérations prises en charge, les responsabilités et les modalités d'échange.",
    },
    {
      stepNumber: 3,
      title: "Vous déposez vos pièces",
      description:
        "Les documents sont transmis dans votre espace afin d'être classés, suivis et traités selon le calendrier convenu.",
    },
    {
      stepNumber: 4,
      title: "Vous suivez votre activité",
      description:
        "Vous consultez les documents disponibles, les demandes en cours et les indicateurs prévus dans votre formule.",
    },
  ],
};

export const faqContent: {
  title: string;
  subtitle: string;
  items: FaqItem[];
} = {
  title: "Ce qu'il faut savoir avant de demander un devis.",
  subtitle:
    "Le fonctionnement exact dépend du périmètre confié, de votre organisation et des outils déjà utilisés dans votre entreprise.",
  items: [
    {
      question: "TOP-COMPTA.FR est-il un service d'outsourcing ?",
      answer:
        "Oui. TOP-COMPTA.FR prend en charge à distance des tâches administratives, documentaires, de saisie et de suivi. Le périmètre exact de nos prestations est défini dans votre devis et contrat de services.",
    },
    {
      question: "Comment transmettre mes documents ?",
      answer:
        "Vos pièces peuvent être déposées très simplement dans votre espace client sécurisé afin de centraliser vos documents, suivre leur traitement par nos équipes et les retrouver facilement 24h/24.",
    },
    {
      question: "Puis-je suivre mon activité en ligne ?",
      answer:
        "Oui. Selon la formule retenue, des tableaux de bord, reportings synthétiques et documents de suivi sont mis à disposition dans votre espace client pour conserver une visibilité totale sur vos chiffres.",
    },
    {
      question: "Que reste-t-il à la charge de mon entreprise ?",
      answer:
        "Votre entreprise reste responsable de la transmission de pièces complètes et exactes, de la validation des documents qui lui sont soumis et des actions expressément conservées en interne. Le contrat précise la répartition des tâches.",
    },
    {
      question: "La facturation électronique est-elle prise en compte ?",
      answer:
        "Le forfait intègre l'adhésion à une PA native dans un CRM pour pouvoir émettre vos factures.",
    },
    {
      question: "Comment le tarif est-il déterminé ?",
      answer:
        "Le tarif est fixé au forfait sur la formule qui convient le mieux à vos besoins et spécificités.",
    },
  ],
};

export const quoteReassurance: QuoteReassurance = {
  badge: "Devis Gratuit & Rapide",
  title: "Recevez une proposition adaptée à votre activité.",
  description:
    "Expliquez-nous ce que vous souhaitez externaliser. Notre équipe revient vers vous pour préciser le périmètre, les outils et le rythme de traitement.",
  phone: "01 70 60 00 82",
  phoneRaw: "0170600082",
  schedule: "Lundi au vendredi, 9h-18h",
  email: "info@top-compta.fr",
  responseGuarantee: "Réponse garantie sous 24h ouvrées",
  whatsappLabel: "WhatsApp Direct",
  whatsappHref: "https://wa.me/33779335302",
  rgpdNote: "Données confidentielles et protégées RGPD.",
};

export const finalCtaContent: FinalCtaContent = {
  title: "Votre gestion quotidienne mérite une organisation plus simple.",
  description:
    "Présentez votre besoin et recevez une proposition adaptée au volume réel de votre activité.",
  quoteButtonText: "Demander un devis",
  quoteButtonHref: "#contact",
  callButtonText: "Appeler TOP.COMPTA",
  callButtonHref: "tel:0170600082",
};

export const footerContent: FooterContent = {
  companyName: "TOP-COMPTA",
  description:
    "Service d'externalisation administrative, de gestion documentaire et de suivi d'activité dédié aux indépendants, TPE et PME.",
  badges: [
    "Plateforme Agréée (PA) & GED sécurisée",
  ],
  whatsappHref: "https://wa.me/33779335302",
  phone: "01 70 60 00 82",
  email: "info@top-compta.fr",
  address: "Immeuble Amina, 15 Avenue Farhat Hached, Ariana – Tunis",
  copyright: "© 2026 TOP-COMPTA.FR. Tous droits réservés.",
};
