import { NextRequest, NextResponse } from "next/server";
import { siteConfig, headerContactInfo, topBannerContent } from "@/content/site";
import { detailedFormulas } from "@/content/offers";

function getSystemPrompt(): string {
  // Extract only essential formulas to keep the prompt light and fast
  const keyFormulaKeys = [
    "formule-essentiel",
    "formule-confort",
    "formule-independant",
    "formule-sci",
    "formule-sos-compta",
    "creation-societe",
    "service-en-social",
  ];

  const formulaLines = keyFormulaKeys
    .map((key) => detailedFormulas[key])
    .filter(Boolean)
    .map(
      (f) =>
        `- ${f.name}${f.recommended ? " (Recommandé)" : ""} : ${f.price}${f.pricePeriod || f.period || ""} — ${f.description}`
    )
    .join("\n");

  return `Tu es l'assistant virtuel expert de ${siteConfig.fullName} (${siteConfig.description}).

Rôle :
1. Répondre avec clarté, bienveillance et concision aux questions comptables, juridiques et administratives des visiteurs (TPE, PME, indépendants, créateurs d'entreprise, SCI).
2. Conseiller sur le statut juridique adapté (SASU, SARL, SCI, BNC, Freelance) et la gestion comptable correspondante.
3. Présenter nos formules de manière transparente et sans jargon.
4. Inviter poliment à demander un devis gratuit sans engagement (/#contact) ou à contacter un conseiller par téléphone ou WhatsApp.

Coordonnées & Informations clés :
- Téléphone : ${siteConfig.phone} (${headerContactInfo.schedule})
- WhatsApp direct : ${siteConfig.whatsappPhoneText} (${siteConfig.whatsappUrl})
- Email : ${siteConfig.email}
- Espace Client GED : ${siteConfig.clientPortalUrl}
- Réputation : ${headerContactInfo.trustpilotScore}
- Réforme Facturation Électronique : ${topBannerContent.message}
- Contrat : 100% sans engagement (résiliation libre sans pénalité).

Nos Formules principales :
${formulaLines}

Consignes :
- Réponds en français (ou dans la langue de l'utilisateur).
- Réponses concises, structurées et aérées (listes à puces courtes, pas de longs pavés).
- Propose naturellement de faire une demande de devis en ligne ou d'échanger sur WhatsApp.`;
}

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json();

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json(
        { error: "Format de messages invalide." },
        { status: 400 }
      );
    }

    const apiKey = process.env.OPENROUTER_API_KEY;
    const model = process.env.OPENROUTER_MODEL || "openai/gpt-4o-mini";

    // Fallback if API key is not yet configured in environment
    if (!apiKey) {
      const lastUserMsg = messages[messages.length - 1]?.content || "";
      const lower = lastUserMsg.toLowerCase();

      let demoReply =
        "Bonjour ! Je suis l'assistant TOP-COMPTA.FR. Notre cabinet accompagne les indépendants, TPE et PME dès 124 € HT/mois sans engagement.\n\n" +
        "Pour toute question immédiate ou obtenir un devis sur mesure, contactez nos conseillers :\n" +
        "• **WhatsApp direct** : [+33 7 79 33 53 02](https://wa.me/33779335302)\n" +
        "• **Téléphone** : [01 70 60 00 82](tel:0170600082)\n" +
        "• **Demande de devis en ligne** : [Formulaire devis](/#contact)";

      if (lower.includes("tarif") || lower.includes("prix") || lower.includes("combien")) {
        demoReply =
          "Voici nos formules phares sans engagement :\n\n" +
          "• **Formule Essentiel** : 124 € HT/mois (saisie comptable, TVA, GED)\n" +
          "• **Formule Confort** : 164 € HT/mois (recommandée, avec bilan et interlocuteur dédié)\n" +
          "• **Formule Indépendant** : 144 € HT/mois (freelances et BNC)\n" +
          "• **Formule SCI** : dès 49 € HT/mois\n\n" +
          "Souhaitez-vous un devis gratuit adapté à votre volume de factures ? Contactez-nous au [01 70 60 00 82](tel:0170600082) ou sur [WhatsApp](https://wa.me/33779335302) !";
      } else if (lower.includes("créer") || lower.includes("création") || lower.includes("sasu") || lower.includes("sarl")) {
        demoReply =
          "Nous vous accompagnons de A à Z pour la création de votre société (SASU, SARL, EURL, SCI) :\n\n" +
          "1. Choix du statut juridique le plus avantageux fiscalement\n" +
          "2. Rédaction des statuts et publication de l'annonce légale\n" +
          "3. Dépôt au greffe et obtention de votre Kbis\n\n" +
          "Échangez dès maintenant avec un expert sur [WhatsApp](https://wa.me/33779335302) ou appelez le [01 70 60 00 82](tel:0170600082).";
      }

      // Return simulated stream for realistic preview
      const encoder = new TextEncoder();
      const customReadable = new ReadableStream({
        async start(controller) {
          const words = demoReply.split(" ");
          for (let i = 0; i < words.length; i++) {
            const word = (i === 0 ? "" : " ") + words[i];
            const payload = JSON.stringify({
              choices: [{ delta: { content: word } }],
            });
            controller.enqueue(encoder.encode(`data: ${payload}\n\n`));
            await new Promise((res) => setTimeout(res, 20));
          }
          controller.enqueue(encoder.encode("data: [DONE]\n\n"));
          controller.close();
        },
      });

      return new Response(customReadable, {
        headers: {
          "Content-Type": "text/event-stream; charset=utf-8",
          "Cache-Control": "no-cache, no-transform",
          Connection: "keep-alive",
        },
      });
    }

    // Call OpenRouter API with streaming
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.top-compta.fr";
    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "HTTP-Referer": siteUrl,
        "X-Title": "Top Compta Assistant",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: model,
        messages: [
          { role: "system", content: getSystemPrompt() },
          ...messages.slice(-8), // Keep conversation context window compact & fast
        ],
        temperature: 0.6,
        max_tokens: 800,
        stream: true,
      }),
    });

    if (!response.ok) {
      const errText = await response.text();
      console.error("Erreur OpenRouter API:", response.status, errText);
      return NextResponse.json(
        { error: "Le service IA est momentanément indisponible." },
        { status: response.status }
      );
    }

    // Forward the OpenRouter SSE stream to client
    return new Response(response.body, {
      headers: {
        "Content-Type": "text/event-stream; charset=utf-8",
        "Cache-Control": "no-cache, no-transform",
        Connection: "keep-alive",
      },
    });
  } catch (error) {
    console.error("Erreur dans /api/chat:", error);
    return NextResponse.json(
      { error: "Une erreur interne est survenue." },
      { status: 500 }
    );
  }
}
