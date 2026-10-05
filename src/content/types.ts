export interface TopBannerContent {
  tag: string;
  message: string;
  linkText: string;
  linkHref: string;
}

export interface HeaderContactInfo {
  phone: string;
  phoneRaw: string;
  email: string;
  schedule: string;
  trustpilotScore: string;
  certifications: string;
}

export interface NavDropdownItem {
  title: string;
  href: string;
  badge?: string;
}

export interface NavItem {
  title: string;
  href: string;
  dropdown?: NavDropdownItem[];
}

export interface HeroContent {
  title: string;
  description: string;
  partnerCta: {
    text: string;
    href: string;
  };
  clientCta: {
    text: string;
    href: string;
  };
  milestones: {
    day: string;
    month: string;
    year: string;
    tag: string;
    title: string;
    description: string;
    accentClass: "secondary" | "primary";
  }[];
}

export interface PartnerItem {
  name: string;
  tag: string;
  iconName: string;
}

import type { OffresMonthlyPlan } from "./offers";

export type OfferPlan = OffresMonthlyPlan;

export interface TrustpilotContent {
  score: string;
  scoreMax: string;
  reviewsCount: number;
  reviewsLabel: string;
  trustpilotUrl: string;
  reviews: {
    id: string;
    quote: string;
    authorRole: string;
    platform: string;
  }[];
}

export interface TestimonialContent {
  badge: string;
  title: string;
  quoteParagraphs: string[];
  author: string;
  location: string;
  companies: string;
}

export interface ProblemSolutionCard {
  title: string;
  description: string;
  icon: string;
  accentBg: string;
}

export interface StepItem {
  stepNumber: number;
  title: string;
  description: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface QuoteReassurance {
  badge: string;
  title: string;
  description: string;
  phone: string;
  phoneRaw: string;
  schedule: string;
  email: string;
  responseGuarantee: string;
  whatsappLabel: string;
  whatsappHref: string;
  rgpdNote: string;
}

export interface FinalCtaContent {
  title: string;
  description: string;
  quoteButtonText: string;
  quoteButtonHref: string;
  callButtonText: string;
  callButtonHref: string;
}

export interface FooterContent {
  companyName: string;
  description: string;
  badges: string[];
  whatsappHref: string;
  phone: string;
  email: string;
  address: string;
  copyright: string;
}
