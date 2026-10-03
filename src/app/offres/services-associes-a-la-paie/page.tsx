import type { Metadata } from "next";
import { ServicesAssociesPaieView } from "@/components/sections/services-associes-paie-view";

export const metadata: Metadata = {
  title: "Services associés à la Paie | TOP-COMPTA.FR",
  description:
    "Accompagnement dédié sur mesure pour sécuriser vos relations de travail avec nos consultants RH spécialisés basés en France.",
};

export default function ServicesAssociesALaPaiePage() {
  return <ServicesAssociesPaieView />;
}
