"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle,
  Mail,
  Star,
  ChevronDown,
  Lock,
  Phone,
  Sparkles,
  ShieldCheck,
  Zap,
  Layers,
} from "lucide-react";
import {
  offresHeroContent,
  monthlyOffers,
  whyChooseForfaits,
  servicesALaCarteContent,
  offresFaqList,
  PricingTier,
} from "@/content/offers";
import { PayPalModal } from "@/components/ui/paypal-modal";
import { siteConfig } from "@/content/site";
import { cn } from "@/lib/utils";

export function OffresPageClient() {
  const [selectedDuration, setSelectedDuration] = useState<number>(1);
  const [selectedOffer, setSelectedOffer] = useState<{
    name: string;
    amount: number;
    pricingTiers?: PricingTier[];
  } | null>(null);

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
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-secondary/10 text-secondary text-xs font-bold uppercase tracking-wider mb-4">
            Formules Comptables &amp; Tarifs Dégressifs
          </div>
          <h1 className="font-space-grotesk text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-on-surface mb-4 leading-tight">
            {offresHeroContent.title} <br className="hidden sm:inline" />
            <span className="text-secondary">
              {offresHeroContent.titleHighlight}
            </span>
          </h1>
          <p className="text-base sm:text-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
            {offresHeroContent.subtitle}
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm">
            <Link
              href="/offres/comparatif"
              className="inline-flex items-center gap-1.5 font-bold text-secondary hover:underline"
            >
              <Layers className="w-4 h-4" />
              <span>Consulter le tableau comparatif complet</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
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
        {/* 3. Section: Formules au forfait & Tarifs dégressifs */}
        <section className="py-14 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            {/* Section Head & Degressive Toggle Selector */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
              <div>
                <h2 className="font-space-grotesk text-2xl sm:text-3xl lg:text-4xl font-bold text-on-surface tracking-tight">
                  Formules au forfait &amp; Tarifs dégressifs
                </h2>
                <p className="text-sm sm:text-base text-on-surface-variant mt-1">
                  Choisissez votre engagement (1, 3, 6 ou 12 mois) et profitez de tarifs dégressifs sans engagement.
                </p>
              </div>

              <a
                href="#services-juridiques"
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-secondary hover:text-on-secondary-container transition-colors py-2 px-4 rounded-xl border border-secondary/30 hover:bg-secondary/5 self-start md:self-auto"
              >
                <span>Voir les formalités &amp; à la carte</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Checkable / Toggle Duration Choices (1, 3, 6, 12 mois) */}
            <div className="mb-10 flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-surface-container-low border border-outline-variant/30">
              <div className="flex items-center gap-2 text-xs sm:text-sm text-on-surface font-semibold">
                <Sparkles className="w-4 h-4 text-secondary" />
                <span>Choisissez votre période pour visualiser les tarifs dégressifs :</span>
              </div>

              <div className="inline-flex flex-wrap p-1 rounded-xl bg-surface-container border border-outline-variant/30 gap-1">
                {[
                  { duration: 1, label: "1 mois", badge: null },
                  { duration: 3, label: "3 mois", badge: "-17€ à -27€" },
                  { duration: 6, label: "6 mois", badge: "-59€ à -108€" },
                  { duration: 12, label: "1 an", badge: "Jusqu'à -430€" },
                ].map((opt) => {
                  const isSelected = selectedDuration === opt.duration;
                  return (
                    <button
                      key={opt.duration}
                      type="button"
                      onClick={() => setSelectedDuration(opt.duration)}
                      className={cn(
                        "px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-1.5",
                        isSelected
                          ? "bg-secondary text-on-secondary shadow-sm"
                          : "text-on-surface hover:text-secondary hover:bg-surface-container-high"
                      )}
                    >
                      <span>{opt.label}</span>
                      {opt.badge && (
                        <span
                          className={cn(
                            "text-[10px] px-1 py-0.2 rounded-full font-bold",
                            isSelected
                              ? "bg-on-secondary text-secondary"
                              : "bg-emerald-100 text-emerald-800"
                          )}
                        >
                          {opt.badge}
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 6 Monthly Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
              {monthlyOffers.map((plan) => {
                const isFeatured = plan.recommended;

                // Pick tier matching duration or first
                const activeTier = plan.pricingTiers?.find(
                  (t) => t.durationMonths === selectedDuration
                ) || plan.pricingTiers?.[0];

                const displayPrice = activeTier ? activeTier.priceTotal : plan.price;
                const isNumericPrice = typeof displayPrice === "number";

                return (
                  <div
                    key={plan.id}
                    className={cn(
                      "relative flex flex-col rounded-2xl bg-surface-container-lowest p-7 transition-all duration-300 border hover:-translate-y-1 hover:shadow-xl justify-between",
                      isFeatured
                        ? "border-secondary shadow-md ring-2 ring-secondary/20 md:scale-[1.02] z-10"
                        : "border-outline-variant/30 shadow-xs"
                    )}
                  >
                    {isFeatured && (
                      <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-full bg-[#FFC439] text-[#111111] px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.12em] shadow-sm flex items-center gap-1">
                        <Star className="w-3.5 h-3.5 fill-current" />
                        <span>Recommandé</span>
                      </div>
                    )}

                    <div className="flex flex-col items-center text-center">
                      <div className="flex min-h-[64px] flex-col items-center text-center">
                        <span className="text-[11px] font-bold text-secondary uppercase tracking-wider block mb-1">
                          {plan.tag}
                        </span>
                        <h3 className="text-xl font-bold tracking-tight text-on-surface text-center">
                          {plan.name}
                        </h3>
                        <div className="mt-2.5 h-0.5 w-8 rounded-full bg-secondary/70 mx-auto"></div>
                      </div>

                      <div className="mt-2 min-h-[56px] text-center">
                        <p className="text-sm leading-6 text-on-surface-variant text-center">
                          {plan.description}
                        </p>
                      </div>

                      <div className="my-4 h-px w-full bg-outline-variant/20"></div>

                      {/* Price Display Centered */}
                      <div className="min-h-[60px] flex flex-col items-center justify-center text-center">
                        <div className="flex items-baseline justify-center gap-1.5">
                          {isNumericPrice ? (
                            <>
                              <span className="font-space-grotesk text-4xl font-extrabold tracking-tight text-on-surface">
                                {displayPrice} €
                              </span>
                              <span className="text-xs font-semibold text-on-surface-variant">
                                {activeTier ? `HT (${activeTier.label})` : plan.pricePeriod}
                              </span>
                            </>
                          ) : (
                            <span className="font-space-grotesk text-3xl font-extrabold tracking-tight text-on-surface">
                              {plan.price}
                            </span>
                          )}
                        </div>

                        {activeTier && activeTier.durationMonths > 1 && (
                          <div className="flex items-center justify-center gap-2 mt-1">
                            <span className="text-xs text-on-surface-variant font-medium">
                              Soit {activeTier.monthlyEquivalent.toFixed(2)} €/mois HT
                            </span>
                            {activeTier.savings && (
                              <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                                {activeTier.savings}
                              </span>
                            )}
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="mt-6 pt-4 border-t border-outline-variant/20 flex flex-col gap-2">
                      {plan.isExternal ? (
                        <a
                          href={plan.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block w-full"
                        >
                          <button
                            type="button"
                            className="w-full h-11 rounded-xl text-sm font-semibold transition-all duration-200 cursor-pointer flex items-center justify-center gap-2 bg-surface-container text-on-surface hover:bg-surface-container-high"
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
                              "w-full h-11 rounded-xl text-sm font-semibold transition-all duration-200 cursor-pointer flex items-center justify-center gap-2",
                              isFeatured
                                ? "bg-secondary text-on-secondary hover:bg-on-secondary-container shadow-md"
                                : "bg-surface-container text-on-surface hover:bg-surface-container-high"
                            )}
                          >
                            <span>{plan.ctaText}</span>
                            <ArrowRight className="w-4 h-4" />
                          </button>
                        </Link>
                      )}

                      {/* Instant PayPal Subscription Button (No manual input) */}
                      {isNumericPrice && (
                        <button
                          type="button"
                          onClick={() =>
                            setSelectedOffer({
                              name: plan.name,
                              amount: displayPrice as number,
                              pricingTiers: plan.pricingTiers,
                            })
                          }
                          className={cn(
                            "w-full py-2 px-3 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 shadow-xs transition-all cursor-pointer",
                            isFeatured
                              ? "bg-[#FFC439] text-[#111111] hover:bg-[#F4B41A]"
                              : "bg-[#003087] text-white hover:bg-[#00215c]"
                          )}
                        >
                          <Lock className="w-3.5 h-3.5" />
                          <span>Payer {displayPrice} € via PayPal</span>
                        </button>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 4. Section: Accès au tableau comparatif complet */}
        <section className="py-12 sm:py-14 bg-surface-container-low border-y border-outline-variant/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="rounded-3xl bg-primary-container text-on-primary p-6 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl border border-white/10">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-secondary text-on-secondary flex items-center justify-center shrink-0 shadow-sm">
                  <Layers className="w-6 h-6" />
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="font-space-grotesk text-xl sm:text-2xl font-bold text-on-primary">
                    Besoin d&apos;un comparatif point par point ?
                  </h3>
                  <p className="text-xs sm:text-sm text-inverse-on-surface/90 max-w-xl leading-relaxed">
                    Comparez toutes nos formules dans notre grille comparative complète : fonctionnalités, saisie comptable, bilans, déclarations fiscales et tarifs dégressifs.
                  </p>
                </div>
              </div>
              <Link
                href="/offres/comparatif"
                className="shrink-0 px-6 py-3.5 rounded-xl bg-secondary text-on-secondary hover:bg-on-secondary-container transition-all text-xs sm:text-sm font-bold flex items-center justify-center gap-2 shadow-md hover:shadow-lg w-full md:w-auto"
              >
                <span>Voir le tableau comparatif</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* 5. Section: Pourquoi nos forfaits ? */}
        <section className="py-14 sm:py-16 bg-surface">
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

        {/* 6. Section: Services à la carte (id="services-juridiques") */}
        <section id="services-juridiques" className="py-14 sm:py-16 bg-surface-container-low border-t border-outline-variant/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex flex-col gap-2 mb-10">
              <h2 className="font-space-grotesk text-2xl sm:text-3xl lg:text-4xl font-bold text-on-surface tracking-tight">
                {servicesALaCarteContent.title}
              </h2>
              <p className="text-sm sm:text-base text-on-surface-variant">
                {servicesALaCarteContent.subtitle}
              </p>
            </div>

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
                          <span className="text-[11px] font-bold text-secondary uppercase tracking-wider block mb-1">
                            {service.tag}
                          </span>
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

                      <div className="min-h-[50px] flex items-baseline gap-1.5">
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
                          className="inline-flex items-center justify-center cursor-pointer select-none duration-200 bg-transparent text-secondary border border-secondary hover:bg-secondary hover:text-on-secondary px-6 text-sm h-11 w-full rounded-xl font-semibold transition-all gap-2"
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

        {/* 7. Reassurance & Phone strip */}
        <section className="py-10 bg-secondary/10 border-y border-secondary/20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-secondary text-on-secondary flex items-center justify-center shrink-0 mx-auto sm:mx-0 shadow-sm">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <strong className="text-base sm:text-lg font-bold text-on-surface block font-space-grotesk">
                  Garantie &amp; Assistance incluses sur toutes nos offres
                </strong>
                <p className="text-xs sm:text-sm text-on-surface-variant mt-0.5">
                  Assistance à distance complète en cas de contrôle fiscal ou URSSAF. Vous n'êtes jamais seul face à l'Administration.
                </p>
              </div>
            </div>

            <a
              href={siteConfig.phoneHref}
              className="px-5 py-3 rounded-xl bg-secondary text-on-secondary font-bold text-sm hover:bg-on-secondary-container transition-colors shrink-0 flex items-center gap-2 shadow-sm"
            >
              <Phone className="w-4 h-4" />
              <span>01 70 60 00 82</span>
            </a>
          </div>
        </section>

        {/* 8. Section: Questions fréquentes */}
        <section className="py-14 sm:py-16 bg-surface">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
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

      {/* PayPal Modal */}
      {selectedOffer && (
        <PayPalModal
          isOpen={true}
          offerName={selectedOffer.name}
          amount={selectedOffer.amount}
          pricingTiers={selectedOffer.pricingTiers}
          initialDurationMonths={selectedDuration}
          onClose={() => setSelectedOffer(null)}
        />
      )}
    </div>
  );
}
