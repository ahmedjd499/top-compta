import { HeroSection } from "@/components/sections/hero-section";
import { OffersSection } from "@/components/sections/offers-section";
import { TrustpilotSection } from "@/components/sections/trustpilot-section";
import { TestimonialSection } from "@/components/sections/testimonial-section";
import { ProblemSolutionSection } from "@/components/sections/problem-solution-section";
import { StepsSection } from "@/components/sections/steps-section";
import { FaqSection } from "@/components/sections/faq-section";
import { QuoteFormSection } from "@/components/sections/quote-form-section";
import { FinalCtaSection } from "@/components/sections/final-cta-section";

export default function HomePage() {
  return (
    <div className="flex flex-col w-full">
      {/* 1. Hero E-Invoicing & Legal Dates */}
      <HeroSection />

      {/* 2. Offers & Tarifs (Essentiel, Confort, Indépendant, SCI + PayPal) */}
      <OffersSection />

      {/* 3. Trustpilot (4,6/5 - 52 avis) & Client Reviews */}
      <TrustpilotSection />

      {/* 4. Detailed Testimonial (Mr & Mme Annebique) */}
      <TestimonialSection />

      {/* 5. Problem / Solution: Moins de tâches dispersées */}
      <ProblemSolutionSection />

      {/* 6. 4 Steps Process */}
      <StepsSection />

      {/* 7. FAQ Accordion */}
      <FaqSection />

      {/* 8. Interactive Quote Form (RHF + Zod + Honeypot + GED) */}
      <QuoteFormSection />

      {/* 9. Final Call-to-Action */}
      <FinalCtaSection />
    </div>
  );
}
