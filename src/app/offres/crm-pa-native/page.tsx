import type { Metadata } from "next";
import { detailedFormulas } from "@/content/offers";
import { FormulaDetailView } from "@/components/sections/formula-detail-view";

export const metadata: Metadata = {
  title: "CRM + PA native - 30€/mois | TOP-COMPTA.FR",
  description:
    "Votre outil de facturation avec Plateforme agréée native. Devis, factures automatiques, archivage probant et conformité facturation électronique 2026.",
};

export default function CrmPaNativePage() {
  const formula = detailedFormulas["crm-pa-native"];
  return <FormulaDetailView formula={formula} />;
}
