import type { Metadata } from "next";
import { ExternalisationClient } from "@/components/sections/externalisation-client";

export const metadata: Metadata = {
  title: "L'externalisation comptable est-elle légale ? | TOP-COMPTA.FR",
  description:
    "Découvrez le cadre légal français de l'externalisation comptable. L'expert-comptable n'est pas obligatoire en France : explications, textes de loi et garanties TOP-COMPTA.",
  alternates: {
    canonical: "https://www.top-compta.fr/externalisation_page",
  },
  openGraph: {
    title: "L'externalisation comptable est-elle légale ? | TOP-COMPTA.FR",
    description:
      "L'expertise-comptable n'est pas obligatoire en France : cadre juridique, règles de localisation et garanties de conformité fiscale.",
    url: "https://www.top-compta.fr/externalisation_page",
  },
};

export default function ExternalisationPage() {
  return <ExternalisationClient />;
}
