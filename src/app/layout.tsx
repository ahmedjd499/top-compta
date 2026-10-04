import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { Footer } from "@/components/layout/footer";
import { MobileNavBar } from "@/components/layout/mobile-nav-bar";
import { FloatingCallButton } from "@/components/ui/floating-call-button";
import { ChatWidget } from "@/components/chat/chat-widget";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0F172A",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.top-compta.fr"),
  title: {
    default: "TOP-COMPTA.FR | Externalisation Comptable & Conseil depuis 2011",
    template: "%s | TOP-COMPTA.FR",
  },
  description:
    "Externalisation administrative, documentaire et comptable pour TPE, PME et indépendants dès 124€ HT/mois. Préparez vos flux à la facturation électronique 2026.",
  keywords: [
    "externalisation comptable",
    "facturation électronique 2026",
    "plateforme agréée",
    "saisie comptable",
    "gestion documentaire GED",
    "comptabilité TPE PME",
    "comptabilité freelance TNS",
    "comptabilité SCI",
  ],
  authors: [{ name: "TOP-COMPTA.FR" }],
  creator: "TOP-COMPTA.FR",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://www.top-compta.fr",
    siteName: "TOP-COMPTA.FR",
    title: "TOP-COMPTA.FR | Externalisation Comptable & Conseil",
    description:
      "Gestion comptable et administrative de confiance. gestion documentaire GED, facturation électronique 2026/2027 et accompagnement sur mesure sans engagement.",
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/apple-icon.svg", type: "image/svg+xml" },
    ],
  },
  alternates: {
    canonical: "https://www.top-compta.fr",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AccountingService",
  name: "TOP-COMPTA.FR",
  alternateName: "TOP-COMPTA",
  description:
    "Service d'externalisation administrative, documentaire et suivi d'activité dédié aux indépendants, TPE et PME.",
  url: "https://www.top-compta.fr",
  telephone: "+33170600082",
  email: "info@top-compta.fr",
  priceRange: "124€ - 204€ HT/mois",
  areaServed: "France",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.6",
    bestRating: "5",
    reviewCount: "52",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-surface font-sans text-on-surface antialiased flex flex-col selection:bg-secondary-fixed selection:text-on-secondary-fixed">
        <ScrollProgress />
        <Header />
        <main className="flex-1 w-full pb-16 lg:pb-0">
          {children}
        </main>
        <Footer />
        <MobileNavBar />
        <FloatingCallButton />
        <ChatWidget />
      </body>
    </html>
  );
}
