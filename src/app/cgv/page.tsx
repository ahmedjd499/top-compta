import type { Metadata } from "next";
import { CgvClient } from "@/components/sections/cgv-client";

export const metadata: Metadata = {
  title: "Conditions Générales de Vente (CGV) & Conditions Contractuelles | TOP-COMPTA.FR",
  description:
    "Consultez les conditions contractuelles et générales de vente de TOP-COMPTA.FR : forfaits comptables sans engagement, modalités de prestation et garanties.",
  alternates: {
    canonical: "https://www.top-compta.fr/cgv",
  },
  openGraph: {
    title: "Conditions Générales de Vente (CGV) | TOP-COMPTA.FR",
    description:
      "Conditions contractuelles et générales de vente du service d'externalisation TOP-COMPTA.FR.",
    url: "https://www.top-compta.fr/cgv",
  },
};

export default function CgvPage() {
  return <CgvClient />;
}
