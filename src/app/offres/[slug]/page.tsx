import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { detailedFormulas } from "@/content/offers";
import { FormulaDetailView } from "@/components/sections/formula-detail-view";
import { ServicesAssociesPaieView } from "@/components/sections/services-associes-paie-view";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return Object.keys(detailedFormulas)
    .filter((slug) => !detailedFormulas[slug].isExternal)
    .map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const formula = detailedFormulas[slug];

  if (!formula || formula.isExternal) {
    return {};
  }

  const priceDisplay =
    typeof formula.price === "number"
      ? `${formula.price}€ HT${formula.pricePeriod || formula.period || ""}`
      : formula.price;

  const title = `${formula.name}${formula.recommended ? " (Recommandée)" : ""} - ${priceDisplay} | TOP-COMPTA.FR`;
  const description = formula.description;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
    },
  };
}

export default async function OfferSlugPage({ params }: PageProps) {
  const { slug } = await params;
  const formula = detailedFormulas[slug];

  if (!formula || formula.isExternal) {
    notFound();
  }

  if (slug === "services-associes-a-la-paie") {
    return <ServicesAssociesPaieView />;
  }

  return <FormulaDetailView formula={formula} />;
}
