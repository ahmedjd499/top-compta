import React from "react";
import Link from "next/link";
import { FileText, Phone } from "lucide-react";
import { finalCtaContent } from "@/content/home";

export function FinalCtaSection() {
  return (
    <section className="w-full py-16 lg:py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-primary-container text-on-primary rounded-3xl p-6 sm:p-10 lg:p-14 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="flex flex-col gap-3 max-w-2xl text-center lg:text-left">
            <h2 className="font-space-grotesk text-2xl sm:text-3xl lg:text-4xl font-bold text-on-primary tracking-tight">
              {finalCtaContent.title}
            </h2>
            <p className="text-sm sm:text-base text-inverse-on-surface/90">
              {finalCtaContent.description}
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 shrink-0">
            <Link
              href={finalCtaContent.quoteButtonHref}
              className="px-6 sm:px-7 py-3.5 sm:py-4 rounded-xl bg-tertiary-fixed text-on-tertiary-fixed hover:brightness-110 text-xs sm:text-sm font-bold shadow-lg transition-all flex items-center gap-2 active:scale-[0.97]"
            >
              <FileText className="w-4 h-4" />
              <span>{finalCtaContent.quoteButtonText}</span>
            </Link>

            <a
              href={finalCtaContent.callButtonHref}
              className="px-6 sm:px-7 py-3.5 sm:py-4 rounded-xl bg-surface-variant/20 hover:bg-surface-variant/30 text-on-primary text-xs sm:text-sm font-bold transition-all flex items-center gap-2 backdrop-blur-sm border border-white/10 active:scale-[0.97]"
            >
              <Phone className="w-4 h-4 text-secondary-fixed" />
              <span>{finalCtaContent.callButtonText}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
