import type { Metadata } from "next";
import { OffresPageClient } from "@/components/sections/offres-page-client";

export const metadata: Metadata = {
  title: "Toutes nos offres et formules comptables | TOP-COMPTA.FR",
  description:
    "Découvrez l'ensemble de nos formules comptables et fiscales : Formule Essentiel, Confort, Indépendant, SCI, SOS Compta et formalités juridiques au forfait. Tarifs dégressifs sans engagement.",
};

export default function OffresPage() {
  return <OffresPageClient />;
}
