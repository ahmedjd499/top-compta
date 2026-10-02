import type { Metadata } from "next";
import { NotreAdnClient } from "@/components/sections/notre-adn-client";

export const metadata: Metadata = {
  title: "Notre ADN : Une vision moderne de la comptabilité | TOP-COMPTA",
  description:
    "Découvrez notre philosophie, nos valeurs fondamentales, notre mission d'externalisation et nos atouts majeurs au service des TPE et indépendants.",
};

export default function NotreAdnPage() {
  return <NotreAdnClient />;
}
