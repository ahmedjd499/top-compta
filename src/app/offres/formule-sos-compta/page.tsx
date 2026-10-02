import type { Metadata } from "next";
import { detailedFormulas } from "@/content/offers";
import { FormulaDetailView } from "@/components/sections/formula-detail-view";

export const metadata: Metadata = {
  title: "Formule SOS Compta - Forfait Annuel | TOP-COMPTA.FR",
  description:
    "Une assistance ponctuelle pour régulariser ou rattraper votre retard comptable. Rattrapage des exercices, bilan de régularisation et télétransmission.",
};

export default function FormuleSosComptaPage() {
  const formula = detailedFormulas["formule-sos-compta"];
  return <FormulaDetailView formula={formula} />;
}
