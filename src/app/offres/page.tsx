import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle,
  Mail,
  Star,
  ChevronDown,
} from "lucide-react";
import {
  offresHeroContent,
  monthlyOffers,
  whyChooseForfaits,
  servicesALaCarteContent,
  offresFaqList,
} from "@/content/offers";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Toutes nos offres et formules | TOP-COMPTA.FR",
  description:
    "Découvrez toutes nos offres de comptabilité, gestion administrative et services associés à la paie.",
};

export default function OffresPage() {
  return (
    <div className="w-full min-h-screen flex flex-col bg-surface">
      {/* 1. Page Hero */}
      <section
        className="relative overflow-hidden pt-16 pb-12 border-b border-outline-variant/20"
        style={{
          background:
            "radial-gradient(circle at 85% 12%, rgba(36, 87, 255, 0.12), transparent 34%), radial-gradient(circle at 68% 76%, rgba(34, 183, 198, 0.10), transparent 32%), linear-gradient(180deg, var(--surface) 0%, var(--surface-container-low) 100%)",
        }}
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="font-space-grotesk text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-on-surface mb-4 leading-tight">
            {offresHeroContent.title} <br className="hidden sm:inline" />
            <span className="text-secondary">
              {offresHeroContent.titleHighlight}
            </span>
          </h1>
          <p className="text-base sm:text-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
            {offresHeroContent.subtitle}
          </p>
        </div>
      </section>

      {/* 2. Trust Strip */}
      <div className="w-full bg-surface-container-lowest border-b border-outline-variant/30 py-5">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 divide-y md:divide-y-0 md:divide-x divide-outline-variant/30 text-center">
            {offresHeroContent.trustItems.map((item, idx) => (
              <div key={idx} className="pt-3 md:pt-0 md:px-4 first:pt-0">
                <strong className="block text-base sm:text-lg font-bold text-on-surface">
                  {item.title}
                </strong>
                <span className="text-xs sm:text-sm text-on-surface-variant mt-0.5 block">
                  {item.subtitle}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <main className="flex-1 w-full">
        {/* 3. Section: Formules mensuelles au forfait */}
        <section className="py-14 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            {/* Section Head */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
              <div>
                <h2 className="font-space-grotesk text-2xl sm:text-3xl lg:text-4xl font-bold text-on-surface tracking-tight">
                  Formules mensuelles au forfait
                </h2>
                <p className="text-sm sm:text-base text-on-surface-variant mt-1">
                  Pour une sérénité absolue.
                </p>
              </div>
              <a
                href="#services-juridiques"
                className="hidden md:inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-secondary hover:text-on-secondary-container transition-colors py-2 px-4 rounded-xl border border-secondary/30 hover:bg-secondary/5 self-start md:self-auto"
              >
                <span>Voir les formalités</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* 6 Monthly Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
              {monthlyOffers.map((plan) => {
                const isFeatured = plan.recommended;
                const isNumericPrice = typeof plan.price === "number";

                return (
                  <div
                    key={plan.id}
                    className={cn(
                      "relative flex flex-col rounded-2xl bg-surface-container-lowest p-7 transition-all duration-300 border hover:-translate-y-1 hover:shadow-lg justify-between",
                      isFeatured
                        ? "border-secondary shadow-md ring-2 ring-secondary/20 md:scale-[1.02] z-10"
                        : "border-outline-variant/30 shadow-xs"
                    )}
                  >
                    {isFeatured && (
                      <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-full bg-secondary px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.12em] text-on-secondary shadow-sm flex items-center gap-1">
                        <Star className="w-3.5 h-3.5 fill-current" />
                        <span>Recommandé</span>
                      </div>
                    )}

                    <div>
                      <div className="flex min-h-[76px] items-start justify-between gap-4">
                        <div>
                          <h3 className="text-xl font-bold tracking-tight text-on-surface">
                            {plan.name}
                          </h3>
                          <div className="mt-3 h-0.5 w-8 rounded-full bg-secondary/70"></div>
                        </div>
                      </div>

                      <div className="mt-2 min-h-[64px]">
                        <p className="text-sm leading-6 text-on-surface-variant">
                          {plan.description}
                        </p>
                      </div>

                      <div className="my-5 h-px bg-outline-variant/20"></div>

                      <div className="min-h-[60px] flex items-baseline gap-1.5">
                        {isNumericPrice ? (
                          <>
                            <span className="font-space-grotesk text-4xl font-extrabold tracking-tight text-on-surface">
                              {plan.price}€
                            </span>
                            {plan.pricePeriod && (
                              <span className="text-sm font-medium text-on-surface-variant">
                                {plan.pricePeriod}
                              </span>
                            )}
                          </>
                        ) : (
                          <span className="font-space-grotesk text-3xl font-extrabold tracking-tight text-on-surface">
                            {plan.price}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="mt-6 pt-4">
                      {plan.isExternal ? (
                        <a
                          href={plan.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block w-full"
                        >
                          <button
                            type="button"
                            className={cn(
                              "w-full h-12 rounded-xl text-base font-semibold transition-all duration-200 cursor-pointer flex items-center justify-center gap-2",
                              isFeatured
                                ? "bg-secondary text-on-secondary hover:bg-on-secondary-container shadow-md"
                                : "bg-transparent text-secondary border border-secondary hover:bg-secondary hover:text-on-secondary"
                            )}
                          >
                            <span>{plan.ctaText}</span>
                            <ArrowRight className="w-4 h-4" />
                          </button>
                        </a>
                      ) : (
                        <Link href={plan.href} className="block w-full">
                          <button
                            type="button"
                            className={cn(
                              "w-full h-12 rounded-xl text-base font-semibold transition-all duration-200 cursor-pointer flex items-center justify-center gap-2",
                              isFeatured
                                ? "bg-secondary text-on-secondary hover:bg-on-secondary-container shadow-md"
                                : "bg-transparent text-secondary border border-secondary hover:bg-secondary hover:text-on-secondary"
                            )}
                          >
                            <span>{plan.ctaText}</span>
                            <ArrowRight className="w-4 h-4" />
                          </button>
                        </Link>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 4. Section: Pourquoi nos forfaits ? */}
        <section className="py-14 sm:py-16 bg-surface-container-low border-y border-outline-variant/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="rounded-3xl bg-[#0b1736] text-white p-6 sm:p-10 lg:p-12 shadow-xl border border-white/10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              <div className="lg:col-span-6 flex flex-col gap-4">
                <h2 className="font-space-grotesk text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white">
                  {whyChooseForfaits.title}
                </h2>
                <p className="text-sm sm:text-base text-[#cbd5ee] leading-relaxed">
                  {whyChooseForfaits.subtitle}
                </p>

                <div className="mt-4 flex flex-wrap gap-3">
                  {whyChooseForfaits.badges.map((badge, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold bg-white/10 border border-white/20 text-white"
                    >
                      <CheckCircle className="w-4 h-4 text-[#ffd700] shrink-0" />
                      <span>{badge}</span>
                    </span>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-6 flex flex-col gap-3.5">
                {whyChooseForfaits.steps.map((step, idx) => (
                  <div
                    key={idx}
                    className="p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 flex items-start gap-4 hover:bg-white/10 transition-colors"
                  >
                    <time className="shrink-0 px-3 py-1.5 rounded-lg bg-secondary text-on-secondary text-xs sm:text-sm font-bold uppercase tracking-wider">
                      {step.time}
                    </time>
                    <div className="flex flex-col">
                      <strong className="text-white text-sm sm:text-base font-bold">
                        {step.title}
                      </strong>
                      <span className="text-xs sm:text-sm text-[#cbd5ee] mt-0.5">
                        {step.description}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 5. Section: Service à la carte (id="services-juridiques") */}
        <section id="services-juridiques" className="py-14 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex flex-col gap-2 mb-10">
              <h2 className="font-space-grotesk text-2xl sm:text-3xl lg:text-4xl font-bold text-on-surface tracking-tight">
                {servicesALaCarteContent.title}
              </h2>
              <p className="text-sm sm:text-base text-on-surface-variant">
                {servicesALaCarteContent.subtitle}
              </p>
            </div>

            {/* 6 Services à la carte Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
              {servicesALaCarteContent.services.map((service) => {
                const isNumericPrice = typeof service.price === "number";

                return (
                  <div
                    key={service.id}
                    className="relative flex flex-col rounded-2xl border border-outline-variant/30 bg-surface-container-lowest p-7 shadow-xs hover:-translate-y-1 hover:shadow-lg transition-all duration-300 justify-between"
                  >
                    <div>
                      <div className="flex min-h-[76px] items-start justify-between gap-4">
                        <div>
                          <h3 className="text-xl font-bold tracking-tight text-on-surface">
                            {service.name}
                          </h3>
                          <div className="mt-3 h-0.5 w-8 rounded-full bg-secondary/70"></div>
                        </div>
                      </div>

                      <div className="mt-2 min-h-[64px]">
                        <p className="text-sm leading-6 text-on-surface-variant">
                          {service.description}
                        </p>
                      </div>

                      <div className="my-5 h-px bg-outline-variant/20"></div>

                      <div className="min-h-[60px] flex items-baseline gap-1.5">
                        {isNumericPrice ? (
                          <>
                            <span className="font-space-grotesk text-4xl font-extrabold tracking-tight text-on-surface">
                              {service.price}€
                            </span>
                            {service.pricePeriod && (
                              <span className="text-sm font-medium text-on-surface-variant">
                                {service.pricePeriod}
                              </span>
                            )}
                          </>
                        ) : (
                          <span className="font-space-grotesk text-3xl font-extrabold tracking-tight text-on-surface">
                            {service.price}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="mt-6 pt-4">
                      <Link href={service.href} className="block w-full">
                        <button
                          type="button"
                          className="inline-flex items-center justify-center cursor-pointer select-none duration-200 bg-transparent text-secondary border border-secondary hover:bg-secondary hover:text-on-secondary px-6 text-base h-12 w-full rounded-xl font-semibold transition-all gap-2"
                        >
                          <span>{service.ctaText}</span>
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 6. Section: Questions fréquentes */}
        <section className="py-14 sm:py-16 bg-surface-container-low border-t border-outline-variant/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              {/* Sticky Sidebar */}
              <div className="lg:col-span-4 lg:sticky lg:top-28">
                <h2 className="font-space-grotesk text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-on-surface mb-3">
                  Questions fréquentes
                </h2>
                <p className="text-sm sm:text-base text-on-surface-variant mb-6">
                  Tout ce qu&#39;il faut savoir avant de choisir votre formule.
                </p>
                <Link
                  href="/#contact"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-secondary text-on-secondary hover:bg-on-secondary-container transition-colors text-sm font-bold shadow-sm"
                >
                  <Mail className="w-4 h-4" />
                  <span>Poser une question</span>
                </Link>
              </div>

              {/* Accordion FAQ Items */}
              <div className="lg:col-span-8 flex flex-col gap-3.5">
                {offresFaqList.map((faq, idx) => (
                  <details
                    key={idx}
                    className="group rounded-2xl bg-surface-container-lowest border border-outline-variant/30 p-5 sm:p-6 transition-all shadow-xs open:shadow-md"
                  >
                    <summary className="flex items-center justify-between gap-4 cursor-pointer font-space-grotesk text-base sm:text-lg font-bold text-on-surface list-none select-none">
                      <span>{faq.question}</span>
                      <span className="w-7 h-7 rounded-full bg-surface-container flex items-center justify-center shrink-0 transition-transform duration-200 group-open:rotate-180 text-secondary">
                        <ChevronDown className="w-4 h-4" />
                      </span>
                    </summary>
                    <div className="mt-3 pt-3 border-t border-outline-variant/20 text-sm sm:text-base text-on-surface-variant leading-relaxed">
                      <p>{faq.answer}</p>
                    </div>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
