import type { Metadata } from "next";
import { detailedFormulas } from "@/content/offers";
import { FormulaDetailView } from "@/components/sections/formula-detail-view";

export const metadata: Metadata = {
  title: "Création Société - 790€ au forfait | TOP-COMPTA.FR",
  description:
    "De l'idée au Kbis, nous prenons en charge toutes les formalités administratives de création. Comprend les frais de JAL et Greffe du TC.",
};

export default function CreationSocietePage() {
  const formula = detailedFormulas["creation-societe"];
  return <FormulaDetailView formula={formula} />;
}
