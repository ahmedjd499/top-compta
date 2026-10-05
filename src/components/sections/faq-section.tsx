"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus } from "lucide-react";
import { faqContent } from "@/content/home";
import { cn } from "@/lib/utils";

export function FaqSection() {
  // First item open by default as in Stitch
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full py-16 lg:py-24 bg-surface-container-low border-y border-outline-variant/20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-14">
          <h2 className="font-space-grotesk text-2xl sm:text-3xl lg:text-4xl text-on-surface font-bold tracking-tight mb-4">
            {faqContent.title}
          </h2>
          <p className="text-sm sm:text-base text-on-surface-variant max-w-2xl mx-auto">
            {faqContent.subtitle}
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="flex flex-col gap-4">
          {faqContent.items.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={item.question}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={cn(
                  "bg-surface-container-lowest rounded-2xl shadow-xs border transition-all duration-300 overflow-hidden",
                  isOpen
                    ? "border-bleu/40 ring-2 ring-bleu/10 shadow-sm"
                    : "border-outline-variant/30 hover:border-bleu/30"
                )}
              >
                <button
                  type="button"
                  onClick={() => toggleItem(index)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-space-grotesk text-base sm:text-lg font-bold text-on-surface hover:text-bleu transition-colors cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="leading-snug">{item.question}</span>
                  <motion.div
                    animate={{
                      rotate: isOpen ? 45 : 0,
                      backgroundColor: isOpen
                        ? "var(--color-bleu)"
                        : "var(--color-surface-container)",
                      color: isOpen ? "#ffffff" : "var(--color-bleu)",
                    }}
                    transition={{ type: "spring", stiffness: 400, damping: 24 }}
                    className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <motion.div
                        initial={{ y: -8 }}
                        animate={{ y: 0 }}
                        exit={{ y: -8 }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                        className="px-5 sm:px-6 pb-6 pt-0 text-xs sm:text-sm text-on-surface-variant leading-relaxed border-l-2 border-bleu ml-5 sm:ml-6 my-1"
                      >
                        <div className="pl-3">{item.answer}</div>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
