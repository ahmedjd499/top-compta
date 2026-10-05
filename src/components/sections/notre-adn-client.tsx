"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion, type Variants } from "motion/react";
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
} from "lucide-react";
import { adnContent } from "@/content/adn";
import { cn } from "@/lib/utils";

export function NotreAdnClient() {
  const shouldReduceMotion = useReducedMotion();
  const [hoveredPrinciple, setHoveredPrinciple] = useState<string | null>(null);
  const [hoveredStrength, setHoveredStrength] = useState<string | null>(null);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  const getPrincipleIcon = (id: string, isHovered: boolean) => {
    const iconClass = `w-6 h-6 transition-transform duration-300 ${
      isHovered ? "text-white scale-110" : "text-secondary"
    }`;
    switch (id) {
      case "egalite":
        return <Scale className={iconClass} />;
      case "mission":
        return <Target className={iconClass} />;
      case "competence":
        return <Award className={iconClass} />;
      case "liberte":
        return <Unlock className={iconClass} />;
      case "delais":
        return <Clock className={iconClass} />;
      case "esprit":
        return <Rocket className={iconClass} />;
      default:
        return <Award className={iconClass} />;
    }
  };

  const getStrengthIcon = (id: string, isHovered: boolean) => {
    const iconClass = `w-6 h-6 transition-transform duration-300 ${
      isHovered ? "text-white scale-110" : "text-secondary"
    }`;
    switch (id) {
      case "qualite-prix":
        return <Coins className={iconClass} />;
      case "adhesion":
        return <UserCheck className={iconClass} />;
      case "livraison":
        return <Zap className={iconClass} />;
      case "proximite":
        return <Headphones className={iconClass} />;
      case "reporting":
        return <LineChart className={iconClass} />;
      case "ged":
        return <FolderLock className={iconClass} />;
      case "liberte-sans-engagement":
        return <ShieldAlert className={iconClass} />;
      case "forfait-garanti":
        return <BadgeCheck className={iconClass} />;
      default:
        return <BadgeCheck className={iconClass} />;
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
      <section className="w-full pt-16 pb-12 sm:pt-24 sm:pb-16 px-4 sm:px-6 relative bg-gradient-to-b from-blue-50/70 via-amber-50/30 to-background border-b border-bleu/15 overflow-hidden">
        {/* Decorative ambient auras - bleu and jaune */}
        <div className="absolute top-10 left-1/4 -translate-x-1/2 w-96 h-96 bg-bleu/12 rounded-full blur-3xl pointer-events-none -z-10" />
        <div className="absolute top-1/4 right-1/4 translate-x-1/2 w-96 h-96 bg-jaune-vif/15 rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
          {/* Badge */}
          <motion.span
            initial={shouldReduceMotion ? undefined : { opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xs font-bold uppercase tracking-wider text-bleu mb-3"
          >
            {adnContent.hero.badge}
          </motion.span>

          {/* Heading */}
          <motion.h1
            initial={shouldReduceMotion ? undefined : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-space-grotesk text-3xl sm:text-4xl lg:text-5xl font-extrabold text-bleu-petrole tracking-tight leading-tight mb-8"
          >
            {adnContent.hero.title}
          </motion.h1>

          {/* Paragraphs */}
          <motion.div
            initial={shouldReduceMotion ? undefined : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-col gap-4 text-base sm:text-lg text-on-surface-variant max-w-3xl leading-relaxed"
          >
            {adnContent.hero.paragraphs.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </motion.div>

          {/* Quote Card */}
          <motion.div
            initial={shouldReduceMotion ? undefined : { opacity: 0, scale: 0.96, y: 25 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            whileHover={shouldReduceMotion ? undefined : { y: -4, transition: { duration: 0.25 } }}
            className="mt-12 sm:mt-16 w-full max-w-3xl bg-white rounded-3xl p-8 sm:p-12 shadow-xl border-2 border-bleu/20 text-center relative overflow-hidden group"
          >
            {/* Top decorative gradient border in brand bleu & jaune */}
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-bleu via-jaune-vif to-bleu" />

            {/* Glowing quote icon */}
            <div className="w-14 h-14 rounded-2xl bg-blue-50 mx-auto mb-6 flex items-center justify-center text-bleu shadow-inner group-hover:scale-110 group-hover:bg-jaune-vif group-hover:text-[#0b1c30] transition-all duration-300 border border-bleu/20">
              <Quote className="w-7 h-7 rotate-180" />
            </div>

            <blockquote className="font-space-grotesk italic text-base sm:text-xl text-bleu-petrole font-semibold leading-relaxed mb-6">
              « {adnContent.hero.quote.text} »
            </blockquote>

            <div className="inline-block text-xs sm:text-sm font-extrabold text-bleu uppercase tracking-wider bg-blue-50 px-3 py-1 rounded-full border border-bleu/25">
              {adnContent.hero.quote.author}
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. ENGAGEMENT / OUTSOURCING SECTION (Dark wave background transition) */}
      <section className="w-full relative my-8 sm:my-14">
        {/* Top Wave Divider */}
        <div className="w-full overflow-hidden leading-none rotate-180 -mb-1">
          <svg
            className="relative block w-full h-12 sm:h-20 text-[#0b1c30] fill-current"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" />
          </svg>
        </div>

        {/* Dark body with cards */}
        <div className="w-full bg-[#0b1c30] py-10 sm:py-20 px-4 sm:px-6 relative overflow-hidden">
          {/* Subtle ambient light reflections - bleu and jaune */}
          <div className="absolute top-0 right-10 w-96 h-96 bg-bleu/25 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-10 w-96 h-96 bg-jaune-vif/15 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-4xl mx-auto flex flex-col gap-8 relative z-10">
            {/* Outsourcing Card */}
            <motion.div
              initial={shouldReduceMotion ? undefined : { opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="bg-[#0f243e] rounded-3xl p-6 sm:p-10 lg:p-12 shadow-2xl border-2 border-bleu/40 flex flex-col items-center text-center relative"
            >
              <span className="text-xs font-bold uppercase tracking-wider text-jaune-vif mb-3">
                {adnContent.engagement.badge}
              </span>

              <h2 className="font-space-grotesk text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mb-2">
                {adnContent.engagement.title}
              </h2>

              <p className="text-sm sm:text-base font-bold text-jaune-vif mb-4">
                {adnContent.engagement.subtitle}
              </p>

              <p className="text-sm sm:text-base text-blue-100/90 max-w-2xl mb-8 sm:mb-10 leading-relaxed">
                {adnContent.engagement.intro}
              </p>

              {/* 4 Pillars Grid with smooth hover states */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 w-full text-left">
                {adnContent.engagement.pillars.map((pillar, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={shouldReduceMotion ? undefined : { y: -3, scale: 1.01 }}
                    transition={{ duration: 0.2 }}
                    className="flex items-start gap-3.5 p-5 rounded-2xl bg-[#081729] border border-bleu/30 hover:border-jaune-vif hover:shadow-lg transition-all duration-200"
                  >
                    <div className="p-2.5 rounded-xl bg-bleu/30 shadow-2xs mt-0.5 shrink-0 text-bleu-clair border border-bleu-clair/30">
                      {getPillarIcon(pillar.icon)}
                    </div>
                    <div className="flex flex-col">
                      <span className="font-space-grotesk font-bold text-sm sm:text-base text-white leading-tight">
                        {pillar.title}
                      </span>
                      {pillar.description && (
                        <span className="text-xs sm:text-sm text-blue-100/80 mt-1.5 leading-snug">
                          {pillar.description}
                        </span>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Motto Highlight Banner */}
            <motion.div
              initial={shouldReduceMotion ? undefined : { opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              whileHover={shouldReduceMotion ? undefined : { scale: 1.01 }}
              className="bg-gradient-to-r from-bleu via-[#1a386b] to-bleu rounded-3xl p-6 sm:p-8 shadow-2xl border-2 border-jaune-vif text-center flex flex-col items-center gap-2"
            >
              <h3 className="font-space-grotesk text-lg sm:text-xl font-extrabold text-white">
                {adnContent.engagement.highlight}
              </h3>
              <p className="text-base sm:text-lg text-jaune-vif font-black">
                {adnContent.engagement.motto}
              </p>
            </motion.div>
          </div>
        </div>

        {/* Bottom Wave Divider */}
        <div className="w-full overflow-hidden leading-none -mt-1">
          <svg
            className="relative block w-full h-12 sm:h-20 text-[#0b1c30] fill-current"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" />
          </svg>
        </div>
      </section>

      {/* 3. MANAGEMENT & NETWORK SECTION (Two Columns) */}
      <section className="w-full py-12 sm:py-20 px-4 sm:px-6 bg-gradient-to-b from-background via-blue-50/40 to-amber-50/20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          {/* Left Column: Boostez la gestion */}
          <motion.div
            initial={shouldReduceMotion ? undefined : { opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col justify-center"
          >
            <h2 className="font-space-grotesk text-2xl sm:text-3xl lg:text-4xl font-extrabold text-bleu-petrole tracking-tight mb-2">
              {adnContent.managementAndNetwork.boost.title}
            </h2>
            <p className="text-sm sm:text-base font-bold text-jaune-moutarde mb-8">
              {adnContent.managementAndNetwork.boost.subtitle}
            </p>

            <ul className="flex flex-col gap-3.5">
              {adnContent.managementAndNetwork.boost.items.map((item, idx) => (
                <motion.li
                  key={idx}
                  whileHover={shouldReduceMotion ? undefined : { x: 4 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-white/80 transition-colors"
                >
                  <CheckCircle2 className="w-5 h-5 text-bleu shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-on-surface font-medium leading-snug">
                    {item}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Right Column: Un réseau d'experts à vos côtés */}
          <motion.div
            initial={shouldReduceMotion ? undefined : { opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border-2 border-bleu/30 shadow-lg flex flex-col justify-between"
          >
            <div>
              <h3 className="font-space-grotesk text-xl sm:text-2xl font-bold text-bleu-petrole mb-6">
                {adnContent.managementAndNetwork.network.title}
              </h3>

              <ul className="flex flex-col gap-3.5 mb-6">
                {adnContent.managementAndNetwork.network.items.map((item, idx) => (
                  <motion.li
                    key={idx}
                    whileHover={shouldReduceMotion ? undefined : { x: 3 }}
                    transition={{ duration: 0.2 }}
                    className="flex items-start gap-3 text-xs sm:text-sm text-on-surface"
                  >
                    <span className="w-2.5 h-2.5 rounded-full bg-jaune-vif shrink-0 mt-1 border border-jaune-citron" />
                    <span className="leading-relaxed">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            <div className="border-t border-bleu/20 pt-5 mt-2">
              <p className="text-xs sm:text-sm text-on-surface-variant italic leading-relaxed">
                {adnContent.managementAndNetwork.network.closing}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 4. PRINCIPLES / VALEURS FONDAMENTALES (3x2 Grid) */}
      <section className="w-full py-12 sm:py-20 px-4 sm:px-6 bg-background">
        <div className="max-w-6xl mx-auto flex flex-col items-center">
          <motion.span
            initial={shouldReduceMotion ? undefined : { opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-bold uppercase tracking-wider text-bleu mb-3"
          >
            {adnContent.principles.badge}
          </motion.span>

          <motion.h2
            initial={shouldReduceMotion ? undefined : { opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-space-grotesk text-3xl sm:text-4xl lg:text-5xl font-extrabold text-bleu-petrole tracking-tight text-center mb-3"
          >
            {adnContent.principles.title}
          </motion.h2>

          <motion.p
            initial={shouldReduceMotion ? undefined : { opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm sm:text-base text-on-surface-variant text-center max-w-2xl mb-12 sm:mb-16"
          >
            {adnContent.principles.subtitle}
          </motion.p>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full"
          >
            {adnContent.principles.items.map((item, idx) => {
              const isHovered = hoveredPrinciple === item.id;
              const isEven = idx % 2 === 1;
              return (
                <motion.div
                  key={item.id}
                  variants={itemVariants}
                  onMouseEnter={() => setHoveredPrinciple(item.id)}
                  onMouseLeave={() => setHoveredPrinciple(null)}
                  whileHover={shouldReduceMotion ? undefined : { y: -6, transition: { duration: 0.25 } }}
                  className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-bleu/15 shadow-sm hover:shadow-xl hover:border-bleu transition-all duration-300 flex flex-col items-center text-center relative group overflow-hidden"
                >
                  {/* Alternating top indicator bar */}
                  <div
                    className={cn(
                      "absolute top-0 left-0 right-0 h-1.5 transition-all duration-300",
                      isEven ? "bg-jaune-vif" : "bg-bleu"
                    )}
                  />

                  {/* Watermark Index */}
                  <span className={cn(
                    "absolute top-4 right-5 text-2xl font-black font-space-grotesk select-none",
                    isEven ? "text-jaune-moutarde/25" : "text-bleu/15"
                  )}>
                    0{idx + 1}
                  </span>

                  {/* Animated Icon Circle */}
                  <div
                    className={cn(
                      "w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-all duration-300 shadow-2xs border",
                      isEven
                        ? isHovered
                          ? "bg-jaune-vif text-[#0b1c30] border-jaune-citron shadow-md scale-110"
                          : "bg-amber-50 text-jaune-moutarde border-jaune-moutarde/30"
                        : isHovered
                        ? "bg-bleu text-white border-bleu shadow-md scale-110"
                        : "bg-blue-50 text-bleu border-bleu/20"
                    )}
                  >
                    {getPrincipleIcon(item.id, isHovered)}
                  </div>

                  <h3 className={cn(
                    "font-space-grotesk font-bold text-lg text-on-surface mb-3 leading-snug transition-colors",
                    isEven ? "group-hover:text-jaune-moutarde" : "group-hover:text-bleu"
                  )}>
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* 5. STRENGTHS / NOS ATOUTS MAJEURS (4x2 Grid) */}
      <section className="w-full py-12 sm:py-20 px-4 sm:px-6 bg-background">
        <div className="max-w-6xl mx-auto flex flex-col items-center">
          <motion.span
            initial={shouldReduceMotion ? undefined : { opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-bold uppercase tracking-wider text-bleu mb-3"
          >
            {adnContent.strengths.badge}
          </motion.span>

          <motion.h2
            initial={shouldReduceMotion ? undefined : { opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-space-grotesk text-3xl sm:text-4xl lg:text-5xl font-extrabold text-bleu-petrole tracking-tight text-center mb-3"
          >
            {adnContent.strengths.title}
          </motion.h2>

          <motion.p
            initial={shouldReduceMotion ? undefined : { opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm sm:text-base text-on-surface-variant text-center max-w-2xl mb-12 sm:mb-16"
          >
            {adnContent.strengths.subtitle}
          </motion.p>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full"
          >
            {adnContent.strengths.items.map((item, idx) => {
              const isHovered = hoveredStrength === item.id;
              const isEven = idx % 2 === 1;
              return (
                <motion.div
                  key={item.id}
                  variants={itemVariants}
                  onMouseEnter={() => setHoveredStrength(item.id)}
                  onMouseLeave={() => setHoveredStrength(null)}
                  whileHover={shouldReduceMotion ? undefined : { y: -5, transition: { duration: 0.25 } }}
                  className="bg-white rounded-3xl p-6 border-2 border-bleu/15 shadow-sm hover:shadow-xl hover:border-bleu transition-all duration-300 flex flex-col items-center text-center group relative overflow-hidden"
                >
                  {/* Top indicator bar */}
                  <div
                    className={cn(
                      "absolute top-0 left-0 right-0 h-1 transition-all duration-300",
                      isEven ? "bg-jaune-vif" : "bg-bleu"
                    )}
                  />

                  {/* Watermark Index */}
                  <span className="absolute top-3 right-4 text-xs font-extrabold text-bleu/30">
                    0{idx + 1}
                  </span>

                  {/* Animated Icon Circle */}
                  <div
                    className={cn(
                      "w-12 h-12 rounded-2xl flex items-center justify-center mb-4 transition-all duration-300 shadow-2xs border",
                      isEven
                        ? isHovered
                          ? "bg-jaune-vif text-[#0b1c30] border-jaune-citron shadow-md scale-110"
                          : "bg-amber-50 text-jaune-moutarde border-jaune-moutarde/30"
                        : isHovered
                        ? "bg-bleu text-white border-bleu shadow-md scale-110"
                        : "bg-blue-50 text-bleu border-bleu/20"
                    )}
                  >
                    {getStrengthIcon(item.id, isHovered)}
                  </div>

                  <h3 className={cn(
                    "font-space-grotesk font-bold text-base text-on-surface mb-2 leading-snug transition-colors",
                    isEven ? "group-hover:text-jaune-moutarde" : "group-hover:text-bleu"
                  )}>
                    {item.title}
                  </h3>

                  <p className="text-xs text-on-surface-variant leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* 6. CALL TO ACTION SECTION */}
      <section className="w-full py-16 sm:py-24 px-4 sm:px-6 relative overflow-hidden">
        <motion.div
          initial={shouldReduceMotion ? undefined : { opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl mx-auto text-center flex flex-col items-center gap-6 bg-gradient-to-br from-bleu via-[#1a386b] to-bleu-petrole text-white rounded-3xl p-8 sm:p-14 border-2 border-jaune-vif/50 shadow-2xl relative overflow-hidden"
        >
          {/* Ambient glow in CTA */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(231,184,33,0.15),transparent_70%)] pointer-events-none" />

          <h2 className="font-space-grotesk text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight relative z-10">
            {adnContent.cta.title}
          </h2>

          <p className="text-sm sm:text-base text-blue-100 max-w-xl leading-relaxed relative z-10">
            {adnContent.cta.subtitle}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mt-2 relative z-10">
            <motion.div
              whileHover={shouldReduceMotion ? undefined : { scale: 1.04, y: -2 }}
              whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
            >
              <Link
                href={adnContent.cta.primaryButtonHref}
                className="px-8 py-4 rounded-xl bg-jaune-vif text-[#0b1c30] hover:bg-jaune-citron font-extrabold text-sm shadow-xl border border-jaune-citron transition-all flex items-center gap-2"
              >
                <span>{adnContent.cta.primaryButtonText}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

            <motion.div
              whileHover={shouldReduceMotion ? undefined : { scale: 1.04, y: -2 }}
              whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
            >
              <Link
                href={adnContent.cta.secondaryButtonHref}
                className="px-8 py-4 rounded-xl border-2 border-white/40 hover:bg-white hover:text-bleu text-white font-bold text-sm transition-all backdrop-blur-md"
              >
                {adnContent.cta.secondaryButtonText}
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
