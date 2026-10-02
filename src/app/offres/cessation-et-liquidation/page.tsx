import type { Metadata } from "next";
import { detailedFormulas } from "@/content/offers";
import { FormulaDetailView } from "@/components/sections/formula-detail-view";

export const metadata: Metadata = {
  title: "Cessation & Liquidation - 1150€ au forfait | TOP-COMPTA.FR",
  description:
    "Fermez proprement votre structure en totale conformité légale. PV de cessation d'activité, bilan de liquidation et rapport de liquidation.",
};

export default function CessationEtLiquidationPage() {
  const formula = detailedFormulas["cessation-et-liquidation"];
  return <FormulaDetailView formula={formula} />;
}
