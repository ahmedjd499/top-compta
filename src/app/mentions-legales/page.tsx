import type { Metadata } from "next";
import { legalContent } from "@/content/legal";

export const metadata: Metadata = {
  title: "Mentions Légales & CGV",
  description:
    "Mentions légales, éditeur, hébergement, protection des données personnelles RGPD et conditions générales de vente de TOP-COMPTA.FR.",
};

export default function MentionsLegalesPage() {
  return (
    <div className="w-full py-12 lg:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 flex flex-col gap-10">
        <div>
          <h1 className="font-space-grotesk text-3xl sm:text-4xl font-bold text-on-surface tracking-tight">
            {legalContent.title}
          </h1>
          <p className="text-xs sm:text-sm text-on-surface-variant mt-2">
            {legalContent.lastUpdated}
          </p>
        </div>

        <div className="flex flex-col gap-8">
          {legalContent.sections.map((section) => (
            <div
              key={section.title}
              id={section.id}
              className="bg-surface-container-lowest rounded-2xl p-6 sm:p-8 shadow-xs border border-outline-variant/30 flex flex-col gap-3 scroll-mt-28"
            >
              <h2 className="font-space-grotesk text-xl font-bold text-on-surface">
                {section.title}
              </h2>
              <div className="space-y-2 text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                {section.content.map((paragraph, pIdx) => (
                  <p key={pIdx}>{paragraph}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
