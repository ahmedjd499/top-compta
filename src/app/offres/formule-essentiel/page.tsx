import type { Metadata } from "next";
import { detailedFormulas } from "@/content/offers";
import { FormulaDetailView } from "@/components/sections/formula-detail-view";

export const metadata: Metadata = {
  title: "Formule Essentiel - 124€ HT/mois",
  description:
    "La gestion comptable de base pour démarrer sereinement dès 124€ HT/mois sans engagement. Saisie, pointage et accès complet GED MyCompanyFiles.",
};

export default function FormuleEssentielPage() {
  const formula = detailedFormulas["formule-essentiel"];
  return <FormulaDetailView formula={formula} />;
}
