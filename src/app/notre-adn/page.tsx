import type { Metadata } from "next";
import Link from "next/link";
import { HeartHandshake, TrendingUp, Scale, Users, FileText, ArrowRight } from "lucide-react";
import { adnContent } from "@/content/adn";

export const metadata: Metadata = {
  title: "Notre ADN | Valeurs & Engagement depuis 2011",
  description:
    "Découvrez l'ADN de TOP-COMPTA : rigueur fiduciaire, conseils avec passion, excellence financière et accompagnement humain sur le long terme.",
};

export default function NotreAdnPage() {
  const getPillarIcon = (iconName: string) => {
    switch (iconName) {
      case "heart_handshake":
        return <HeartHandshake className="w-6 h-6 text-secondary" />;
      case "trending_up":
        return <TrendingUp className="w-6 h-6 text-secondary" />;
      case "scale":
        return <Scale className="w-6 h-6 text-secondary" />;
      default:
        return <Users className="w-6 h-6 text-secondary" />;
    }
  };

  return (
    <div className="w-full py-12 lg:py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 flex flex-col gap-14">
        {/* Hero */}
        <div className="text-center max-w-3xl mx-auto flex flex-col items-center gap-4">
          <span className="px-3.5 py-1.5 rounded-full bg-surface-container-high text-secondary text-xs font-bold uppercase tracking-wider">
            {adnContent.badge}
          </span>
          <h1 className="font-space-grotesk text-3xl sm:text-4xl lg:text-5xl font-bold text-on-surface tracking-tight">
            {adnContent.title}
          </h1>
          <p className="text-base sm:text-lg text-on-surface-variant leading-relaxed">
            {adnContent.subtitle}
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {adnContent.pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="bg-surface-container-lowest rounded-2xl p-6 sm:p-8 shadow-xs border border-outline-variant/30 flex flex-col gap-4"
            >
              <div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center">
                {getPillarIcon(pillar.icon)}
              </div>
              <h2 className="font-space-grotesk text-xl font-bold text-on-surface">
                {pillar.title}
              </h2>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

        {/* Featured Quote */}
        <div className="bg-primary-container text-on-primary rounded-3xl p-8 sm:p-12 shadow-xl text-center flex flex-col items-center gap-4">
          <span className="text-5xl font-space-grotesk text-tertiary-fixed leading-none">
            &ldquo;
          </span>
          <p className="font-space-grotesk text-lg sm:text-xl md:text-2xl text-inverse-on-surface max-w-2xl leading-relaxed italic">
            {adnContent.quote.text}
          </p>
          <span className="text-xs uppercase tracking-widest text-tertiary-fixed font-bold pt-2">
            {adnContent.quote.author}
          </span>
        </div>

        {/* Timeline Milestones */}
        <div className="bg-surface-container-low rounded-3xl p-6 sm:p-10 border border-outline-variant/30 flex flex-col gap-6">
          <h2 className="font-space-grotesk text-2xl font-bold text-on-surface">
            Notre parcours
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {adnContent.milestones.map((m) => (
              <div
                key={m.year}
                className="bg-surface-container-lowest rounded-2xl p-5 shadow-xs flex flex-col gap-2"
              >
                <span className="font-space-grotesk text-2xl font-bold text-secondary">
                  {m.year}
                </span>
                <h3 className="font-bold text-sm text-on-surface">{m.title}</h3>
                <p className="text-xs text-on-surface-variant leading-relaxed">
                  {m.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center pt-4">
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-secondary text-on-secondary font-bold text-sm shadow-md hover:bg-on-secondary-container transition-all"
          >
            <FileText className="w-4 h-4" />
            <span>Prendre contact avec notre équipe</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
