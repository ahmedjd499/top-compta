"use client";

import React from "react";
import Link from "next/link";
import {
  Server,
  Building2,
  UserCheck,
  FileText,
  Download,
  Mail,
  Phone,
  ArrowRight,
  Scale,
} from "lucide-react";
import { mentionsLegalesContent } from "@/content/legal";

export function MentionsLegalesClient() {
  return (
    <div className="w-full min-h-screen flex flex-col bg-surface overflow-hidden">
      {/* 1. Page Header */}
      <section
        className="relative overflow-hidden pt-16 pb-12 border-b border-outline-variant/20"
        style={{
          background:
            "radial-gradient(circle at 85% 15%, rgba(55, 85, 195, 0.12), transparent 40%), radial-gradient(circle at 15% 85%, rgba(34, 183, 198, 0.10), transparent 40%), linear-gradient(180deg, var(--color-surface) 0%, var(--color-surface-container-low) 100%)",
        }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-secondary/10 text-secondary text-xs font-bold uppercase tracking-wider mb-4 border border-secondary/20 shadow-xs">
            <Scale className="w-3.5 h-3.5" />
            <span>Informations Légales</span>
          </div>

          <h1 className="font-space-grotesk text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-on-surface">
            {mentionsLegalesContent.title}
          </h1>
        </div>
      </section>

      {/* 2. Main Sections */}
      <section className="py-12 sm:py-16 max-w-4xl mx-auto px-4 sm:px-6 w-full space-y-8">
        {/* Section: Hébergement */}
        <div className="bg-surface-container-lowest rounded-2xl p-6 sm:p-8 border border-outline-variant/30 shadow-xs">
          <div className="flex items-center gap-3 mb-4 text-secondary">
            <Server className="w-5 h-5 shrink-0" />
            <h2 className="font-space-grotesk text-base sm:text-lg font-bold text-on-surface">
              {mentionsLegalesContent.hosting.label}
            </h2>
          </div>

          <div className="pl-0 sm:pl-8 space-y-1 text-sm text-on-surface-variant">
            <p className="font-bold text-on-surface text-base">
              {mentionsLegalesContent.hosting.company}
            </p>
            {mentionsLegalesContent.hosting.addressLines.map((line, idx) => (
              <p key={idx}>{line}</p>
            ))}
            <p className="pt-2">
              <span className="font-medium text-on-surface">Téléphone : </span>
              <a
                href={mentionsLegalesContent.hosting.phoneHref}
                className="text-secondary font-semibold hover:underline"
              >
                {mentionsLegalesContent.hosting.phone}
              </a>
            </p>
          </div>
        </div>

        {/* Section: Société exploitant et commercialisant */}
        <div className="bg-surface-container-lowest rounded-2xl p-6 sm:p-8 border border-outline-variant/30 shadow-xs">
          <div className="flex items-center gap-3 mb-6 text-secondary">
            <Building2 className="w-5 h-5 shrink-0" />
            <h2 className="font-space-grotesk text-base sm:text-lg font-bold text-on-surface">
              {mentionsLegalesContent.operatingCompany.label}
            </h2>
          </div>

          <div className="pl-0 sm:pl-8 space-y-6 text-sm">
            {/* Société, Adresse, Contact */}
            <div className="space-y-1 text-on-surface-variant">
              <p className="font-bold text-lg text-on-surface">
                {mentionsLegalesContent.operatingCompany.name}
              </p>
              {mentionsLegalesContent.operatingCompany.addressLines.map((line, idx) => (
                <p key={idx}>{line}</p>
              ))}
              <div className="pt-2 flex flex-wrap items-center gap-x-6 gap-y-1">
                <p>
                  <span className="font-medium text-on-surface">Téléphone : </span>
                  <a
                    href={mentionsLegalesContent.operatingCompany.phoneHref}
                    className="text-secondary font-semibold hover:underline"
                  >
                    {mentionsLegalesContent.operatingCompany.phone}
                  </a>
                </p>
                <p>
                  <a
                    href={mentionsLegalesContent.operatingCompany.emailHref}
                    className="text-secondary font-semibold hover:underline"
                  >
                    {mentionsLegalesContent.operatingCompany.email}
                  </a>
                </p>
              </div>
            </div>

            {/* Représentant légal & Directeur juridique */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-outline-variant/20">
              <div className="bg-surface-container-low p-4 rounded-xl border border-outline-variant/20">
                <span className="text-xs font-bold text-on-surface-variant block mb-1">
                  {mentionsLegalesContent.operatingCompany.legalRepresentativeLabel}
                </span>
                <span className="font-bold text-on-surface">
                  {mentionsLegalesContent.operatingCompany.legalRepresentative}
                </span>
              </div>

              <div className="bg-surface-container-low p-4 rounded-xl border border-outline-variant/20">
                <span className="text-xs font-bold text-on-surface-variant block mb-1">
                  {mentionsLegalesContent.operatingCompany.legalDirectorLabel}
                </span>
                <span className="font-bold text-on-surface">
                  {mentionsLegalesContent.operatingCompany.legalDirector}
                </span>
              </div>
            </div>

            {/* Immatriculation RCS & Type de société */}
            <div className="space-y-2 pt-2 border-t border-outline-variant/20 text-on-surface-variant">
              <p>
                <span className="font-semibold text-on-surface">
                  {mentionsLegalesContent.operatingCompany.rcsLabel}{" "}
                </span>
                <span className="font-mono font-bold text-on-surface">
                  {mentionsLegalesContent.operatingCompany.rcsNumber}
                </span>
              </p>
              <p className="text-xs sm:text-sm font-medium">
                {mentionsLegalesContent.operatingCompany.companyType}
              </p>
            </div>

            {/* Matricule Fiscal & Téléchargement brevet */}
            <div className="p-4 rounded-xl bg-surface-container-low border border-outline-variant/20 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <span className="text-xs font-bold text-on-surface-variant block">
                  {mentionsLegalesContent.operatingCompany.taxIdLabel}
                </span>
                <span className="font-mono font-bold text-base text-secondary">
                  {mentionsLegalesContent.operatingCompany.taxId}
                </span>
              </div>

              <a
                href={mentionsLegalesContent.operatingCompany.taxDownloadHref}
                download
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-secondary text-white text-xs font-bold hover:bg-on-secondary-container transition-colors w-fit"
              >
                <Download className="w-3.5 h-3.5" />
                <span>{mentionsLegalesContent.operatingCompany.taxDownloadText}</span>
              </a>
            </div>

            {/* CNSS */}
            <div className="pt-2 border-t border-outline-variant/20 text-on-surface-variant">
              <p>
                <span className="font-semibold text-on-surface">
                  {mentionsLegalesContent.operatingCompany.cnssLabel}{" "}
                </span>
                <span className="font-mono font-bold text-on-surface">
                  {mentionsLegalesContent.operatingCompany.cnssNumber}
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Section: Commissaire aux Comptes désigné */}
        <div className="bg-surface-container-lowest rounded-2xl p-6 sm:p-8 border border-outline-variant/30 shadow-xs">
          <div className="flex items-center gap-3 mb-4 text-secondary">
            <UserCheck className="w-5 h-5 shrink-0" />
            <h2 className="font-space-grotesk text-base sm:text-lg font-bold text-on-surface">
              {mentionsLegalesContent.auditor.label}
            </h2>
          </div>

          <div className="pl-0 sm:pl-8 space-y-4 text-sm">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <p className="font-bold text-base text-on-surface">
                {mentionsLegalesContent.auditor.name}
              </p>
              <a
                href={mentionsLegalesContent.auditor.publicationDownloadHref}
                download
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-surface-container hover:bg-secondary hover:text-white text-secondary text-xs font-bold border border-secondary/20 transition-colors w-fit"
              >
                <Download className="w-3.5 h-3.5" />
                <span>{mentionsLegalesContent.auditor.publicationDownloadText}</span>
              </a>
            </div>

            <div className="space-y-1 text-on-surface-variant pt-2 border-t border-outline-variant/20">
              {mentionsLegalesContent.auditor.addressLines.map((line, idx) => (
                <p key={idx}>{line}</p>
              ))}
              <p className="pt-1">
                <a
                  href={mentionsLegalesContent.auditor.phoneHref}
                  className="text-secondary font-semibold hover:underline"
                >
                  {mentionsLegalesContent.auditor.phone}
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Section: Contact / Questions */}
        <div className="bg-surface-container-low rounded-2xl p-7 sm:p-9 border border-outline-variant/20 text-center">
          <h2 className="font-space-grotesk text-base sm:text-lg font-bold text-on-surface mb-4">
            {mentionsLegalesContent.contact.title}
          </h2>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={mentionsLegalesContent.contact.emailHref}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-surface-container-lowest text-secondary font-bold text-sm border border-outline-variant/30 hover:border-secondary transition-all"
            >
              <Mail className="w-4 h-4 text-secondary" />
              <span>{mentionsLegalesContent.contact.email}</span>
            </a>

            <Link
              href={mentionsLegalesContent.contact.contactButtonHref}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-secondary text-white font-bold text-sm shadow-md hover:bg-on-secondary-container transition-all"
            >
              <span>{mentionsLegalesContent.contact.contactButtonText}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
