import type { Metadata } from "next";
import { detailedFormulas } from "@/content/offers";
import { FormulaDetailView } from "@/components/sections/formula-detail-view";

export const metadata: Metadata = {
  title: "Formule SCI - 124€ HT/mois",
  description:
    "Dédiée à la gestion comptable et fiscale de votre patrimoine immobilier dès 124€ HT/mois sans engagement. Déclarations 2072 / 2065 et suivi des associés.",
};

export default function FormuleSciPage() {
  const formula = detailedFormulas["formule-sci"];
  return <FormulaDetailView formula={formula} />;
}
