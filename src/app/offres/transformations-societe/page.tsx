import type { Metadata } from "next";
import { detailedFormulas } from "@/content/offers";
import { FormulaDetailView } from "@/components/sections/formula-detail-view";

export const metadata: Metadata = {
  title: "Transformations Société - 950€ au forfait | TOP-COMPTA.FR",
  description:
    "Faites évoluer la structure ou le capital de votre entreprise existante. Comprend les frais de JAL et Greffe du TC.",
};

export default function TransformationsSocietePage() {
  const formula = detailedFormulas["transformations-societe"];
  return <FormulaDetailView formula={formula} />;
}
