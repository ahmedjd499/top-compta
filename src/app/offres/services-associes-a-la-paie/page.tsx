import type { Metadata } from "next";
import { detailedFormulas } from "@/content/offers";
import { FormulaDetailView } from "@/components/sections/formula-detail-view";

export const metadata: Metadata = {
  title: "Services associés à la Paie | TOP-COMPTA.FR",
  description:
    "Accompagnement dédié sur mesure pour sécuriser vos relations de travail avec nos consultants RH spécialisés basés en France.",
};

export default function ServicesAssociesALaPaiePage() {
  const formula = detailedFormulas["services-associes-a-la-paie"];
  return <FormulaDetailView formula={formula} />;
}
