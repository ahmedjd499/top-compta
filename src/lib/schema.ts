import { z } from "zod";

export const quoteFormSchema = z.object({
  fullName: z.string().min(2, "Veuillez renseigner votre nom et prénom."),
  workEmail: z.string().email("Veuillez renseigner une adresse email valide."),
  phoneNumber: z.string().min(8, "Veuillez renseigner un numéro de téléphone valide."),
  companyName: z.string().optional(),
  legalStatus: z.string().optional(),
  mainNeed: z.string().optional(),
  employeesCount: z.string().optional(),
  invoiceVolume: z.string().optional(),
  contactMode: z.enum(["phone", "email", "whatsapp"]),
  description: z.string().min(5, "Veuillez préciser votre besoin."),
  rgpdConsent: z.boolean().refine((val) => val === true, {
    message: "Vous devez accepter l'utilisation de vos données pour être recontacté.",
  }),
  honeypot: z.string().optional(),
});

export type QuoteFormData = z.infer<typeof quoteFormSchema>;
