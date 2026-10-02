import type { Metadata } from "next";
import { detailedFormulas } from "@/content/offers";
import { FormulaDetailView } from "@/components/sections/formula-detail-view";

export const metadata: Metadata = {
  title: "Formule Confort (Recommandée) - 184€ HT/mois",
  description:
    "L'offre complète pour déléguer toute votre comptabilité de manière fluide dès 184€ HT/mois sans engagement. Saisie intégrale, déclarations fiscales, GED et tableaux de bord.",
};

export default function FormuleConfortPage() {
  const formula = detailedFormulas["formule-confort"];
  return <FormulaDetailView formula={formula} />;
}
