import type { Metadata } from "next";
import { detailedFormulas } from "@/content/offers";
import { FormulaDetailView } from "@/components/sections/formula-detail-view";

export const metadata: Metadata = {
  title: "La Paie - Gestion Externalisée des Salariés | TOP-COMPTA.FR",
  description:
    "Gestion externalisée de vos salariés et de vos obligations d'employeur. Fiches de paie, déclarations DSN, cadrage TVA et bilans.",
};

export default function ServiceEnSocialPage() {
  const formula = detailedFormulas["service-en-social"];
  return <FormulaDetailView formula={formula} />;
}
