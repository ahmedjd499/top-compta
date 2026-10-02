import type { Metadata } from "next";
import { detailedFormulas } from "@/content/offers";
import { FormulaDetailView } from "@/components/sections/formula-detail-view";

export const metadata: Metadata = {
  title: "Formule Indépendant - 204€ HT/mois",
  description:
    "Spécifique pour les travailleurs indépendants TNS dès 204€ HT/mois sans engagement. Déclarations sociales TNS, URSSAF, 2042 C Pro et notes de frais.",
};

export default function FormuleIndependantPage() {
  const formula = detailedFormulas["formule-independant"];
  return <FormulaDetailView formula={formula} />;
}
