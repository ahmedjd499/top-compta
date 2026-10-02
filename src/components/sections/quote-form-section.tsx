"use client";

import React, { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Phone,
  Mail,
  MessageCircle,
  Lock,
  Send,
  CheckCircle2,
  AlertCircle,
  Loader2,
} from "lucide-react";
import { quoteFormSchema, QuoteFormData } from "@/lib/schema";
import { quoteReassurance } from "@/content/home";
import { cn } from "@/lib/utils";

export function QuoteFormSection() {
  const shouldReduceMotion = useReducedMotion();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const {
    register,
    handleSubmit,
    reset,
    watch,
    setValue,
    formState: { errors },
  } = useForm<QuoteFormData>({
    resolver: zodResolver(quoteFormSchema) as any,
    defaultValues: {
      fullName: "",
      workEmail: "",
      phoneNumber: "",
      companyName: "",
      legalStatus: "",
      mainNeed: "",
      employeesCount: "",
      invoiceVolume: "",
      contactMode: "phone",
      description:
        "Je souhaite recevoir des informations sur : Externalisation renforcée au quotidien.",
      rgpdConsent: true,
      honeypot: "",
    },
  });

  const selectedContactMode = watch("contactMode");

  const onSubmit = async (data: QuoteFormData) => {
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const response = await fetch("/api/devis", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setSubmitStatus({
          type: "success",
          message: result.message,
        });
        reset();
      } else {
        setSubmitStatus({
          type: "error",
          message:
            result.message ||
            "Une erreur est survenue lors de l'envoi de votre demande. Veuillez réessayer ou nous appeler directement.",
        });
      }
    } catch (err) {
      setSubmitStatus({
        type: "error",
        message:
          "Impossible de joindre le serveur. Veuillez vérifier votre connexion ou nous contacter au 01 70 60 00 82.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="w-full py-16 lg:py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Reassurance & Direct Contact Details (Left Column) */}
          <motion.div
            initial={shouldReduceMotion ? undefined : { opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-4 bg-primary-container text-on-primary rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xl flex flex-col justify-between"
          >
            <div className="flex flex-col gap-6">
              <span className="px-3 py-1 rounded-md bg-secondary text-on-secondary text-xs font-bold uppercase tracking-wider w-fit">
                {quoteReassurance.badge}
              </span>

              <h2 className="font-space-grotesk text-2xl sm:text-3xl font-bold text-on-primary tracking-tight leading-tight">
                {quoteReassurance.title}
              </h2>

              <p className="text-sm text-on-primary-container leading-relaxed">
                {quoteReassurance.description}
              </p>

              <div className="flex flex-col gap-5 pt-6 border-t border-surface-variant/20">
                <a
                  href={`tel:${quoteReassurance.phoneRaw}`}
                  className="flex items-start gap-3 text-on-primary hover:text-secondary-fixed transition-colors"
                >
                  <Phone className="w-5 h-5 text-secondary-fixed shrink-0 mt-0.5" />
                  <div>
                    <div className="font-space-grotesk text-base font-bold">
                      {quoteReassurance.phone}
                    </div>
                    <div className="text-xs text-on-primary-container">
                      {quoteReassurance.schedule}
                    </div>
                  </div>
                </a>

                <a
                  href={`mailto:${quoteReassurance.email}`}
                  className="flex items-center gap-3 text-on-primary hover:text-secondary-fixed transition-colors"
                >
                  <Mail className="w-5 h-5 text-secondary-fixed shrink-0" />
                  <div>
                    <div className="font-space-grotesk text-sm sm:text-base font-bold">
                      {quoteReassurance.email}
                    </div>
                    <div className="text-xs text-on-primary-container">
                      {quoteReassurance.responseGuarantee}
                    </div>
                  </div>
                </a>

                <a
                  href={quoteReassurance.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-on-primary hover:text-secondary-fixed transition-colors"
                >
                  <MessageCircle className="w-5 h-5 text-[#25D366] shrink-0" />
                  <div>
                    <div className="font-space-grotesk text-sm sm:text-base font-bold">
                      {quoteReassurance.whatsappLabel}
                    </div>
                    <div className="text-xs text-on-primary-container">
                      Échangez en direct avec un conseiller
                    </div>
                  </div>
                </a>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-surface-variant/20 text-xs text-on-primary-container flex items-center gap-2">
              <Lock className="w-4 h-4 text-tertiary-fixed shrink-0" />
              <span>{quoteReassurance.rgpdNote}</span>
            </div>
          </motion.div>

          {/* Lead Generation Form (Right Column) */}
          <motion.div
            initial={shouldReduceMotion ? undefined : { opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              duration: 0.85,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="lg:col-span-8 bg-surface-container-lowest rounded-3xl p-6 sm:p-8 lg:p-12 shadow-xs border border-outline-variant/30"
          >
            {submitStatus.type === "success" ? (
              <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center flex flex-col items-center gap-4 animate-in fade-in duration-300">
                <CheckCircle2 className="w-12 h-12 text-emerald-600" />
                <h3 className="font-space-grotesk text-xl font-bold text-emerald-950">
                  Votre demande a été transmise avec succès !
                </h3>
                <p className="text-sm text-emerald-800 max-w-lg leading-relaxed">
                  {submitStatus.message}
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitStatus({ type: null, message: "" })}
                  className="mt-2 px-6 py-2.5 rounded-xl bg-emerald-700 text-white text-xs sm:text-sm font-semibold hover:bg-emerald-800 transition-colors cursor-pointer"
                >
                  Faire une autre demande
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6"
                noValidate
              >
                {/* Honeypot field (hidden for users, bots fill it) */}
                <input
                  type="text"
                  {...register("honeypot")}
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                />

                {submitStatus.type === "error" && (
                  <div className="md:col-span-2 p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-sm flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
                    <span>{submitStatus.message}</span>
                  </div>
                )}

                {/* Nom et prénom */}
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="fullName"
                    className="text-xs sm:text-sm font-semibold text-on-surface"
                  >
                    Nom et prénom <span className="text-error">*</span>
                  </label>
                  <input
                    id="fullName"
                    type="text"
                    placeholder="Ex. Jean Dupont"
                    {...register("fullName")}
                    className={cn(
                      "w-full px-4 py-3 rounded-xl bg-surface-container-low text-on-surface text-sm border focus:outline-none transition-all",
                      errors.fullName
                        ? "border-error focus:ring-2 focus:ring-error/20"
                        : "border-outline-variant/30 focus:border-secondary focus:ring-2 focus:ring-secondary/15"
                    )}
                  />
                  {errors.fullName && (
                    <span className="text-xs text-error">
                      {errors.fullName.message}
                    </span>
                  )}
                </div>

                {/* Email professionnel */}
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="workEmail"
                    className="text-xs sm:text-sm font-semibold text-on-surface"
                  >
                    Email professionnel <span className="text-error">*</span>
                  </label>
                  <input
                    id="workEmail"
                    type="email"
                    placeholder="Ex. jean@monentreprise.fr"
                    {...register("workEmail")}
                    className={cn(
                      "w-full px-4 py-3 rounded-xl bg-surface-container-low text-on-surface text-sm border focus:outline-none transition-all",
                      errors.workEmail
                        ? "border-error focus:ring-2 focus:ring-error/20"
                        : "border-outline-variant/30 focus:border-secondary focus:ring-2 focus:ring-secondary/15"
                    )}
                  />
                  {errors.workEmail && (
                    <span className="text-xs text-error">
                      {errors.workEmail.message}
                    </span>
                  )}
                </div>

                {/* Téléphone */}
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="phoneNumber"
                    className="text-xs sm:text-sm font-semibold text-on-surface"
                  >
                    Téléphone <span className="text-error">*</span>
                  </label>
                  <input
                    id="phoneNumber"
                    type="tel"
                    placeholder="Ex. 06 12 34 56 78"
                    {...register("phoneNumber")}
                    className={cn(
                      "w-full px-4 py-3 rounded-xl bg-surface-container-low text-on-surface text-sm border focus:outline-none transition-all",
                      errors.phoneNumber
                        ? "border-error focus:ring-2 focus:ring-error/20"
                        : "border-outline-variant/30 focus:border-secondary focus:ring-2 focus:ring-secondary/15"
                    )}
                  />
                  {errors.phoneNumber && (
                    <span className="text-xs text-error">
                      {errors.phoneNumber.message}
                    </span>
                  )}
                </div>

                {/* Nom de l'entreprise */}
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="companyName"
                    className="text-xs sm:text-sm font-semibold text-on-surface"
                  >
                    Nom de l'entreprise
                  </label>
                  <input
                    id="companyName"
                    type="text"
                    placeholder="Ex. Acme SAS"
                    {...register("companyName")}
                    className="w-full px-4 py-3 rounded-xl bg-surface-container-low text-on-surface text-sm border border-outline-variant/30 focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/15 transition-all"
                  />
                </div>

                {/* Statut ou forme juridique */}
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="legalStatus"
                    className="text-xs sm:text-sm font-semibold text-on-surface"
                  >
                    Statut ou forme juridique
                  </label>
                  <select
                    id="legalStatus"
                    {...register("legalStatus")}
                    className="w-full px-4 py-3 rounded-xl bg-surface-container-low text-on-surface text-sm border border-outline-variant/30 focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/15 transition-all cursor-pointer"
                  >
                    <option value="">Sélectionner</option>
                    <option value="ei">Entreprise individuelle</option>
                    <option value="micro">Micro-entreprise</option>
                    <option value="sas">SAS / SASU</option>
                    <option value="sarl">SARL / EURL</option>
                    <option value="sci">SCI</option>
                    <option value="association">Association</option>
                    <option value="autre">Autre</option>
                  </select>
                </div>

                {/* Besoin principal */}
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="mainNeed"
                    className="text-xs sm:text-sm font-semibold text-on-surface"
                  >
                    Besoin principal
                  </label>
                  <select
                    id="mainNeed"
                    {...register("mainNeed")}
                    className="w-full px-4 py-3 rounded-xl bg-surface-container-low text-on-surface text-sm border border-outline-variant/30 focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/15 transition-all cursor-pointer"
                  >
                    <option value="">Sélectionner</option>
                    <option value="externalisation">Externalisation administrative</option>
                    <option value="saisie">Saisie et traitement courant</option>
                    <option value="ged">Gestion documentaire / GED</option>
                    <option value="social">Service social</option>
                    <option value="formalites">Formalités d'entreprise</option>
                    <option value="gestion-commerciale">Gestion commerciale en ligne</option>
                    <option value="facturation-electronique">Préparation à la facturation électronique</option>
                    <option value="retard">Dossier en retard</option>
                  </select>
                </div>

                {/* Nombre de salariés */}
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="employeesCount"
                    className="text-xs sm:text-sm font-semibold text-on-surface"
                  >
                    Nombre de salariés
                  </label>
                  <input
                    id="employeesCount"
                    type="text"
                    placeholder="Ex. 0, 2, 10"
                    {...register("employeesCount")}
                    className="w-full px-4 py-3 rounded-xl bg-surface-container-low text-on-surface text-sm border border-outline-variant/30 focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/15 transition-all"
                  />
                </div>

                {/* Volume de pièces par mois */}
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="invoiceVolume"
                    className="text-xs sm:text-sm font-semibold text-on-surface"
                  >
                    Volume de pièces par mois
                  </label>
                  <input
                    id="invoiceVolume"
                    type="text"
                    placeholder="Ex. 30 pièces"
                    {...register("invoiceVolume")}
                    className="w-full px-4 py-3 rounded-xl bg-surface-container-low text-on-surface text-sm border border-outline-variant/30 focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/15 transition-all"
                  />
                </div>

                {/* Mode de contact souhaité */}
                <div className="md:col-span-2 flex flex-col gap-2">
                  <span className="text-xs sm:text-sm font-semibold text-on-surface">
                    Mode de contact souhaité
                  </span>
                  <div className="grid grid-cols-3 gap-1.5 p-1.5 bg-surface-container-low rounded-2xl border border-outline-variant/30">
                    {[
                      { value: "phone", label: "Téléphone", icon: Phone },
                      { value: "email", label: "Email", icon: Mail },
                      { value: "whatsapp", label: "WhatsApp", icon: MessageCircle },
                    ].map((mode) => {
                      const Icon = mode.icon;
                      const isSelected = selectedContactMode === mode.value;

                      return (
                        <button
                          key={mode.value}
                          type="button"
                          onClick={() =>
                            setValue("contactMode", mode.value as any)
                          }
                          className={cn(
                            "relative flex items-center justify-center gap-2 p-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-colors cursor-pointer z-10",
                            isSelected
                              ? "text-on-secondary"
                              : "text-on-surface hover:text-secondary"
                          )}
                        >
                          {isSelected && (
                            <motion.div
                              layoutId="activeContactPill"
                              className="absolute inset-0 bg-secondary rounded-xl shadow-sm -z-10"
                              transition={{
                                type: "spring",
                                stiffness: 400,
                                damping: 30,
                              }}
                            />
                          )}
                          <Icon className="w-4 h-4" />
                          <span>{mode.label}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Votre besoin (Textarea) */}
                <div className="md:col-span-2 flex flex-col gap-1.5">
                  <label
                    htmlFor="description"
                    className="text-xs sm:text-sm font-semibold text-on-surface"
                  >
                    Votre besoin
                  </label>
                  <textarea
                    id="description"
                    rows={4}
                    {...register("description")}
                    className={cn(
                      "w-full px-4 py-3 rounded-xl bg-surface-container-low text-on-surface text-sm border focus:outline-none transition-all",
                      errors.description
                        ? "border-error focus:ring-2 focus:ring-error/20"
                        : "border-outline-variant/30 focus:border-secondary focus:ring-2 focus:ring-secondary/15"
                    )}
                  />
                  {errors.description && (
                    <span className="text-xs text-error">
                      {errors.description.message}
                    </span>
                  )}
                </div>

                {/* Checkbox RGPD */}
                <div className="md:col-span-2 flex items-start gap-3 pt-1">
                  <input
                    id="rgpdConsent"
                    type="checkbox"
                    {...register("rgpdConsent")}
                    className="mt-1 h-4 w-4 rounded text-secondary focus:ring-secondary cursor-pointer"
                  />
                  <label
                    htmlFor="rgpdConsent"
                    className="text-xs text-on-surface-variant cursor-pointer leading-tight"
                  >
                    J&apos;accepte que TOP-COMPTA.FR utilise ces informations
                    uniquement pour traiter ma demande et me recontacter.
                  </label>
                </div>
                {errors.rgpdConsent && (
                  <div className="md:col-span-2 -mt-3">
                    <span className="text-xs text-error">
                      {errors.rgpdConsent.message}
                    </span>
                  </div>
                )}

                {/* Submit Button */}
                <div className="md:col-span-2 pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-secondary text-on-secondary hover:bg-on-secondary-container transition-all text-sm font-bold shadow-md flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70 active:scale-[0.97]"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        <span>Envoi en cours...</span>
                      </>
                    ) : (
                      <>
                        <span>Envoyer ma demande</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
