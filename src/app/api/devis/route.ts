import { NextRequest, NextResponse } from "next/server";
import { quoteFormSchema } from "@/lib/schema";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // Validate with Zod
    const validationResult = quoteFormSchema.safeParse(body);
    if (!validationResult.success) {
      return NextResponse.json(
        {
          success: false,
          errors: validationResult.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    const data = validationResult.data;

    // Check honeypot for bot protection
    if (data.honeypot && data.honeypot.length > 0) {
      // Silently discard spam submission
      return NextResponse.json({
        success: true,
        message: "Demande reçue.",
      });
    }

    // Forward to GED_WEBHOOK_URL if configured
    const webhookUrl = process.env.GED_WEBHOOK_URL;
    if (webhookUrl) {
      try {
        await fetch(webhookUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "User-Agent": "TopCompta-LeadGen/1.0",
          },
          body: JSON.stringify({
            timestamp: new Date().toISOString(),
            source: "top-compta.fr",
            lead: {
              fullName: data.fullName,
              workEmail: data.workEmail,
              phoneNumber: data.phoneNumber,
              companyName: data.companyName || "Non spécifié",
              legalStatus: data.legalStatus || "Non spécifié",
              mainNeed: data.mainNeed || "Non spécifié",
              employeesCount: data.employeesCount || "0",
              invoiceVolume: data.invoiceVolume || "Non spécifié",
              contactMode: data.contactMode,
              description: data.description,
            },
          }),
        });
      } catch (err) {
        console.error("Erreur lors de l'envoi au webhook GED:", err);
        // Continue and do not fail user experience
      }
    }

    return NextResponse.json({
      success: true,
      message:
        "Merci pour votre demande. Un conseiller TOP-COMPTA.FR va prendre contact avec vous sous 24h afin de calibrer votre devis personnalisé.",
    });
  } catch (error) {
    console.error("Erreur API devis:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Une erreur est survenue lors de l'envoi de votre demande.",
      },
      { status: 500 }
    );
  }
}
