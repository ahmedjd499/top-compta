import type { Metadata } from "next";
import Link from "next/link";
import {
  Quote,
  CheckCircle2,
  Scale,
  Target,
  Award,
  Unlock,
  Clock,
  Rocket,
  Coins,
  UserCheck,
  Zap,
  Headphones,
  LineChart,
  FolderLock,
  ShieldAlert,
  BadgeCheck,
  ArrowRight,
  ShieldCheck,
  BarChart3,
  Users,
  Briefcase,
} from "lucide-react";
import { adnContent } from "@/content/adn";

export const metadata: Metadata = {
  title: "Notre ADN : Une vision moderne de la comptabilité | TOP-COMPTA",
  description:
    "Découvrez notre philosophie, nos valeurs fondamentales, notre mission d'externalisation et nos atouts majeurs au service des TPE et indépendants.",
};

export default function NotreAdnPage() {
  const getPrincipleIcon = (id: string) => {
    switch (id) {
      case "egalite":
        return <Scale className="w-6 h-6 text-secondary" />;
      case "mission":
        return <Target className="w-6 h-6 text-secondary" />;
      case "competence":
        return <Award className="w-6 h-6 text-secondary" />;
      case "liberte":
        return <Unlock className="w-6 h-6 text-secondary" />;
      case "delais":
        return <Clock className="w-6 h-6 text-secondary" />;
      case "esprit":
        return <Rocket className="w-6 h-6 text-secondary" />;
      default:
        return <Award className="w-6 h-6 text-secondary" />;
    }
  };

  const getStrengthIcon = (id: string) => {
    switch (id) {
      case "qualite-prix":
        return <Coins className="w-6 h-6 text-secondary" />;
      case "adhesion":
        return <UserCheck className="w-6 h-6 text-secondary" />;
      case "livraison":
        return <Zap className="w-6 h-6 text-secondary" />;
      case "proximite":
        return <Headphones className="w-6 h-6 text-secondary" />;
      case "reporting":
        return <LineChart className="w-6 h-6 text-secondary" />;
      case "ged":
        return <FolderLock className="w-6 h-6 text-secondary" />;
      case "liberte-sans-engagement":
        return <ShieldAlert className="w-6 h-6 text-secondary" />;
      case "forfait-garanti":
        return <BadgeCheck className="w-6 h-6 text-secondary" />;
      default:
        return <BadgeCheck className="w-6 h-6 text-secondary" />;
    }
  };

  const getPillarIcon = (icon: string) => {
    switch (icon) {
      case "bar-chart":
        return <BarChart3 className="w-5 h-5 text-secondary shrink-0" />;
      case "shield-check":
        return <ShieldCheck className="w-5 h-5 text-secondary shrink-0" />;
      case "users":
        return <Users className="w-5 h-5 text-secondary shrink-0" />;
      case "headphones":
        return <Headphones className="w-5 h-5 text-secondary shrink-0" />;
      default:
        return <CheckCircle2 className="w-5 h-5 text-secondary shrink-0" />;
    }
  };

  return (
    <div className="w-full bg-background flex flex-col items-center overflow-x-hidden">
      {/* 1. HERO SECTION */}
      <section className="w-full pt-16 pb-12 sm:pt-20 sm:pb-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
          <span className="px-4 py-1.5 rounded-full bg-surface-container text-secondary text-xs font-bold uppercase tracking-wider mb-5">
            {adnContent.hero.badge}
          </span>

          <h1 className="font-space-grotesk text-3xl sm:text-4xl lg:text-5xl font-extrabold text-on-surface tracking-tight leading-tight mb-8">
            {adnContent.hero.title}
          </h1>

          <div className="flex flex-col gap-4 text-base sm:text-lg text-on-surface-variant max-w-3xl leading-relaxed">
            {adnContent.hero.paragraphs.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>

          {/* Quote Card */}
          <div className="mt-12 sm:mt-16 w-full max-w-3xl bg-surface-container-lowest rounded-3xl p-8 sm:p-10 shadow-lg border border-outline-variant/30 text-center relative">
            <div className="w-12 h-12 rounded-2xl bg-surface-container mx-auto mb-5 flex items-center justify-center text-secondary">
              <Quote className="w-6 h-6 rotate-180" />
            </div>

            <p className="font-space-grotesk italic text-base sm:text-xl text-on-surface font-medium leading-relaxed mb-4">
              « {adnContent.hero.quote.text} »
            </p>

            <span className="text-xs sm:text-sm font-bold text-secondary uppercase tracking-wider">
              {adnContent.hero.quote.author}
            </span>
          </div>
        </div>
      </section>

      {/* 2. ENGAGEMENT / OUTSOURCING SECTION (Dark wave background transition) */}
      <section className="w-full relative my-8 sm:my-12">
        {/* Top Wave Divider */}
        <div className="w-full overflow-hidden leading-none rotate-180">
          <svg
            className="relative block w-full h-10 sm:h-16 text-primary-sovereign fill-current"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" />
          </svg>
        </div>

        {/* Dark body with cards */}
        <div className="w-full bg-primary-sovereign py-10 sm:py-16 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto flex flex-col gap-8">
            {/* Outsourcing Card */}
            <div className="bg-surface-container-lowest rounded-3xl p-6 sm:p-10 shadow-xl border border-outline-variant/20 flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-2xl bg-surface-container flex items-center justify-center text-secondary mb-4">
                <Briefcase className="w-6 h-6" />
              </div>

              <h2 className="font-space-grotesk text-2xl sm:text-3xl font-bold text-on-surface mb-2">
                {adnContent.engagement.title}
              </h2>

              <p className="text-sm sm:text-base font-semibold text-secondary mb-4">
                {adnContent.engagement.subtitle}
              </p>

              <p className="text-sm sm:text-base text-on-surface-variant max-w-2xl mb-8 leading-relaxed">
                {adnContent.engagement.intro}
              </p>

              {/* 4 Pillars Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 w-full text-left">
                {adnContent.engagement.pillars.map((pillar, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3.5 p-4 rounded-2xl bg-surface-container-low/70 border border-outline-variant/30"
                  >
                    <div className="p-2 rounded-xl bg-surface-container-lowest shadow-2xs mt-0.5">
                      {getPillarIcon(pillar.icon)}
                    </div>
                    <div className="flex flex-col">
                      <span className="font-space-grotesk font-bold text-sm sm:text-base text-on-surface">
                        {pillar.title}
                      </span>
                      {pillar.description && (
                        <span className="text-xs sm:text-sm text-on-surface-variant mt-1 leading-snug">
                          {pillar.description}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Motto Highlight Banner */}
            <div className="bg-surface-container-lowest rounded-3xl p-6 sm:p-8 shadow-xl border border-outline-variant/20 text-center flex flex-col items-center gap-2">
              <h3 className="font-space-grotesk text-lg sm:text-xl font-bold text-on-surface">
                {adnContent.engagement.highlight}
              </h3>
              <p className="text-sm sm:text-base text-secondary font-medium">
                {adnContent.engagement.motto}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Wave Divider */}
        <div className="w-full overflow-hidden leading-none">
          <svg
            className="relative block w-full h-10 sm:h-16 text-primary-sovereign fill-current"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" />
          </svg>
        </div>
      </section>

      {/* 3. MANAGEMENT & NETWORK SECTION (Two Columns) */}
      <section className="w-full py-12 sm:py-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
          {/* Left Column: Boostez la gestion */}
          <div className="flex flex-col justify-center">
            <h2 className="font-space-grotesk text-2xl sm:text-3xl lg:text-4xl font-extrabold text-on-surface tracking-tight mb-2">
              {adnContent.managementAndNetwork.boost.title}
            </h2>
            <p className="text-sm sm:text-base font-semibold text-secondary mb-8">
              {adnContent.managementAndNetwork.boost.subtitle}
            </p>

            <ul className="flex flex-col gap-4">
              {adnContent.managementAndNetwork.boost.items.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-on-surface font-medium leading-snug">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column: Un réseau d'experts à vos côtés */}
          <div className="bg-surface-container-low/70 rounded-3xl p-6 sm:p-8 lg:p-10 border border-outline-variant/40 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 rounded-xl bg-surface-container text-secondary">
                  <Users className="w-5 h-5" />
                </div>
                <h3 className="font-space-grotesk text-xl sm:text-2xl font-bold text-on-surface">
                  {adnContent.managementAndNetwork.network.title}
                </h3>
              </div>

              <ul className="flex flex-col gap-3.5 mb-6">
                {adnContent.managementAndNetwork.network.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-on-surface">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0 mt-2" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-t border-outline-variant/40 pt-4 mt-2">
              <p className="text-xs sm:text-sm text-on-surface-variant italic leading-relaxed">
                {adnContent.managementAndNetwork.network.closing}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. PRINCIPLES / VALEURS FONDAMENTALES (3x2 Grid) */}
      <section className="w-full py-12 sm:py-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto flex flex-col items-center">
          <span className="px-4 py-1.5 rounded-full bg-surface-container text-secondary text-xs font-bold uppercase tracking-wider mb-4">
            {adnContent.principles.badge}
          </span>

          <h2 className="font-space-grotesk text-3xl sm:text-4xl font-extrabold text-on-surface tracking-tight text-center mb-3">
            {adnContent.principles.title}
          </h2>

          <p className="text-sm sm:text-base text-on-surface-variant text-center max-w-2xl mb-12">
            {adnContent.principles.subtitle}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full">
            {adnContent.principles.items.map((item) => (
              <div
                key={item.id}
                className="bg-surface-container-lowest rounded-3xl p-6 sm:p-8 border border-outline-variant/30 shadow-xs hover:shadow-md transition-shadow flex flex-col items-center text-center group"
              >
                <div className="w-14 h-14 rounded-2xl bg-surface-container flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  {getPrincipleIcon(item.id)}
                </div>

                <h3 className="font-space-grotesk font-bold text-lg text-on-surface mb-3 leading-snug">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. STRENGTHS / NOS ATOUTS MAJEURS (4x2 Grid) */}
      <section className="w-full py-12 sm:py-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto flex flex-col items-center">
          <span className="px-4 py-1.5 rounded-full bg-surface-container text-secondary text-xs font-bold uppercase tracking-wider mb-4">
            {adnContent.strengths.badge}
          </span>

          <h2 className="font-space-grotesk text-3xl sm:text-4xl font-extrabold text-on-surface tracking-tight text-center mb-3">
            {adnContent.strengths.title}
          </h2>

          <p className="text-sm sm:text-base text-on-surface-variant text-center max-w-2xl mb-12">
            {adnContent.strengths.subtitle}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
            {adnContent.strengths.items.map((item) => (
              <div
                key={item.id}
                className="bg-surface-container-lowest rounded-3xl p-6 border border-outline-variant/30 shadow-xs hover:shadow-md transition-shadow flex flex-col items-center text-center group"
              >
                <div className="w-12 h-12 rounded-2xl bg-surface-container flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  {getStrengthIcon(item.id)}
                </div>

                <h3 className="font-space-grotesk font-bold text-base text-on-surface mb-2 leading-snug">
                  {item.title}
                </h3>

                <p className="text-xs text-on-surface-variant leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CALL TO ACTION SECTION */}
      <section className="w-full py-16 sm:py-24 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center gap-6">
          <h2 className="font-space-grotesk text-3xl sm:text-4xl lg:text-5xl font-extrabold text-on-surface tracking-tight">
            {adnContent.cta.title}
          </h2>

          <p className="text-sm sm:text-base text-on-surface-variant max-w-xl leading-relaxed">
            {adnContent.cta.subtitle}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mt-2">
            <Link
              href={adnContent.cta.primaryButtonHref}
              className="px-7 py-3.5 rounded-xl bg-primary text-on-primary hover:opacity-90 font-bold text-sm shadow-md transition-all flex items-center gap-2"
            >
              <span>{adnContent.cta.primaryButtonText}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href={adnContent.cta.secondaryButtonHref}
              className="px-7 py-3.5 rounded-xl border border-outline text-on-surface hover:bg-surface-container font-bold text-sm transition-all"
            >
              {adnContent.cta.secondaryButtonText}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
