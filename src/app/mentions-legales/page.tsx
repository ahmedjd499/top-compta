import type { Metadata } from "next";
import { MentionsLegalesClient } from "@/components/sections/mentions-legales-client";

export const metadata: Metadata = {
  title: "Mentions Légales & Informations Réglementaires | TOP-COMPTA.FR",
  description:
    "Consultez les mentions légales de TOP-COMPTA.FR : éditeur Groupe PEGASIO INTERNATIONAL, hébergement IONOS, commissariat aux comptes et conformité RGPD.",
  alternates: {
    canonical: "https://www.top-compta.fr/mentions-legales",
  },
  openGraph: {
    title: "Mentions Légales & Informations Réglementaires | TOP-COMPTA.FR",
    description:
      "Mentions légales et informations juridiques du service d'externalisation comptable TOP-COMPTA.FR.",
    url: "https://www.top-compta.fr/mentions-legales",
  },
};

export default function MentionsLegalesPage() {
  return <MentionsLegalesClient />;
}
