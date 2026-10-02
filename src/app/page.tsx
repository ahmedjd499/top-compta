import { HeroSection } from "@/components/sections/hero-section";
import { TrustPartnersBar } from "@/components/sections/trust-partners-bar";
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

      {/* 2. Trust Infrastructure & Partners Bar */}
      <TrustPartnersBar />

      {/* 3. Offers & Tarifs (Essentiel, Confort, Indépendant, SCI + PayPal) */}
      <OffersSection />

      {/* 4. Trustpilot (4,6/5 - 52 avis) & Client Reviews */}
      <TrustpilotSection />

      {/* 5. Detailed Testimonial (Mr & Mme Annebique) */}
      <TestimonialSection />

      {/* 6. Problem / Solution: Moins de tâches dispersées */}
      <ProblemSolutionSection />

      {/* 7. 4 Steps Process */}
      <StepsSection />

      {/* 8. FAQ Accordion */}
      <FaqSection />

      {/* 9. Interactive Quote Form (RHF + Zod + Honeypot + GED) */}
      <QuoteFormSection />

      {/* 10. Final Call-to-Action */}
      <FinalCtaSection />
    </div>
  );
}
