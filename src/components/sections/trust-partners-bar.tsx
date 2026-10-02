"use client";

import React from "react";
import { motion, useReducedMotion } from "motion/react";
import { FolderLock, Network, CreditCard, ShieldCheck } from "lucide-react";
import { partnersContent } from "@/content/home";

export function TrustPartnersBar() {
  const shouldReduceMotion = useReducedMotion();

  const getIcon = (name: string) => {
    switch (name) {
      case "folder_shared":
        return <FolderLock className="w-5 h-5 text-secondary" />;
      case "hub":
        return <Network className="w-5 h-5 text-secondary" />;
      case "payments":
        return <CreditCard className="w-5 h-5 text-[#003087]" />;
      default:
        return <ShieldCheck className="w-5 h-5 text-secondary" />;
    }
  };

  return (
    <section className="w-full py-6 sm:py-8 bg-surface-container-low border-y border-outline-variant/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <span className="text-xs uppercase tracking-wider text-on-surface-variant font-bold text-center md:text-left">
          {partnersContent.headline}
        </span>

        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 lg:gap-12">
          {partnersContent.items.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={shouldReduceMotion ? undefined : { opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.35,
                delay: index * 0.08,
                ease: "easeOut",
              }}
              whileHover={
                shouldReduceMotion
                  ? undefined
                  : {
                      y: -2,
                      scale: 1.04,
                      transition: { type: "spring", stiffness: 400, damping: 20 },
                    }
              }
              className="flex items-center gap-2 cursor-default select-none"
            >
              {getIcon(partner.iconName)}
              <span className="font-space-grotesk text-sm font-bold text-on-surface">
                {partner.name}
              </span>
              <span className="text-xs bg-surface-container px-2 py-0.5 rounded font-medium text-on-surface-variant border border-outline-variant/30">
                {partner.tag}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

