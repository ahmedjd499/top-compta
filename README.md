# TOP-COMPTA.FR - Modern Accounting Outsourcing Web Application

Plateforme web officielle de **TOP-COMPTA.FR**, cabinet d'externalisation administrative, documentaire et comptable pour TPE, PME et indépendants depuis 2011.

Réalisé selon le design system **Sovereign Fiduciary & Fintech** (`DESIGN.md`), les maquettes Stitch et les règles strictes d'excellence **Impeccable**.

---

## 🚀 Stack Technique

- **Framework :** Next.js 16 (App Router) + React 19 + TypeScript
- **Styling :** Tailwind CSS v4 avec `@theme` intégrant l'intégralité des tokens de `DESIGN.md` (aucun bloc CSS personnalisé)
- **Typographie :** Space Grotesk (titres, métriques, prix) + Plus Jakarta Sans (corps de texte, navigation, formulaires)
- **Animations :** `motion/react` (optimisé transform & opacity uniquement, respectueux de `prefers-reduced-motion`)
- **Formulaires & Validation :** React Hook Form + Zod (`/src/lib/schema.ts`)
- **Paiement direct :** `@paypal/react-paypal-js` intégré par formule
- **Icons :** `lucide-react` mappé fidèlement aux glyphes du design Stitch

---

## 📁 Architecture du Projet

```
├── .env.example                       # Variables d'environnement documentées
├── DESIGN.md                          # Charte tokens (couleurs, typographies, élévations)
├── PRODUCT.md                         # Vérité produit durable (Impeccable init)
├── src/
│   ├── app/
│   │   ├── globals.css                # Tokens Tailwind v4 (@theme)
│   │   ├── layout.tsx                 # Layout racine (Space Grotesk, Plus Jakarta Sans, JSON-LD, SEO)
│   │   ├── page.tsx                   # Page d'accueil respectant l'ordre strict des 10 sections
│   │   ├── sitemap.ts                 # Générateur de sitemap SEO
│   │   ├── robots.ts                  # Configuration robots.txt
│   │   ├── api/
│   │   │   └── devis/
│   │   │       └── route.ts           # Endpoint POST /api/devis avec validation Zod, honeypot et webhook GED
│   │   ├── offres/
│   │   │   ├── page.tsx               # Vue d'ensemble des formules & tableau comparatif
│   │   │   ├── formule-essentiel/     # Page dédiée Formule Essentiel (124€ HT/mois)
│   │   │   ├── formule-confort/       # Page dédiée Formule Confort Recommandée (184€ HT/mois)
│   │   │   ├── formule-independant/   # Page dédiée Formule Indépendant (204€ HT/mois)
│   │   │   └── formule-sci/           # Page dédiée Formule SCI (124€ HT/mois)
│   │   ├── notre-adn/
│   │   │   └── page.tsx               # Histoire, piliers et engagement depuis 2011
│   │   ├── externalisation_page/
│   │   │   └── page.tsx               # L'externalisation en 2 mots, outils en ligne et livrables
│   │   └── mentions-legales/
│   │       └── page.tsx               # Mentions légales, hébergement, RGPD et CGV
│   ├── components/
│   │   ├── layout/
│   │   │   ├── header.tsx             # Bandeau légal urgence + contact + navbar executive + drawer mobile
│   │   │   ├── footer.tsx             # Pied de page 4 colonnes executive + mentions
│   │   │   └── mobile-nav-bar.tsx     # Barre d'actions fixe tactile inférieure (mobile)
│   │   ├── sections/
│   │   │   ├── hero-section.tsx       # Hero facturation électronique + 2 cartes jalons (2026/2027)
│   │   │   ├── trust-partners-bar.tsx # Écosystème certifié (MyCompanyFiles, Habile Solutions, PayPal, ISO-27001)
│   │   │   ├── offers-section.tsx     # 4 cartes tarifaires forfaitaires avec trigger PayPal
│   │   │   ├── trustpilot-section.tsx # Avis Trustpilot (4,6/5, 52 avis affichés)
│   │   │   ├── testimonial-section.tsx# Témoignage détaillé Mr et Mme Annebique
│   │   │   ├── problem-solution-section.tsx # "Moins de tâches dispersées. Plus de visibilité" (4 cartes)
│   │   │   ├── steps-section.tsx      # Processus en 4 étapes avec ligne de progression animée
│   │   │   ├── faq-section.tsx        # FAQ accordéon interactive
│   │   │   ├── quote-form-section.tsx # Formulaire interactif de demande de devis
│   │   │   ├── final-cta-section.tsx  # Appel à l'action final
│   │   │   └── formula-detail-view.tsx# Composant réutilisable pour pages individuelles de formules
│   │   └── ui/
│   │       ├── logo.tsx               # Logo vectoriel moderne haute précision (Space Grotesk + badge)
│   │       ├── count-up.tsx           # Compteur animé pour notes et tarifs
│   │       ├── magnetic-button.tsx    # Bouton avec effet magnétique et press scale 0.97
│   │       └── paypal-modal.tsx       # Dialogue de souscription sécurisé PayPal SDK
│   ├── content/
│   │   ├── types.ts                   # Typage strict de tous les contenus
│   │   ├── site.ts                    # Métadonnées, navigation, coordonnées
│   │   ├── home.ts                    # Textes rigoureusement extraits pour la page d'accueil
│   │   ├── offers.ts                  # Détails et comparatifs des formules
│   │   ├── adn.ts                     # Contenus de /notre-adn
│   │   ├── externalisation.ts         # Contenus de /externalisation_page
│   │   └── legal.ts                   # Contenus légaux et CGV
│   └── lib/
│       ├── schema.ts                  # Schéma Zod pour le formulaire de devis
│       └── utils.ts                   # Helper cn (tailwind-merge + clsx)
```

---

## ⚙️ Configuration & Variables d'Environnement

Créez un fichier `.env.local` à la racine à partir de `.env.example` :

```bash
# URL de base du site
NEXT_PUBLIC_SITE_URL=https://www.top-compta.fr

# Identifiant Client PayPal (SDK)
# 'test' / 'sb' pour l'environnement sandbox, ou votre Client ID de production
NEXT_PUBLIC_PAYPAL_CLIENT_ID=test

# Webhook GED / CRM (Optionnel)
# Si défini, l'API /api/devis transmettra les leads validés vers ce endpoint
GED_WEBHOOK_URL=https://hooks.example.com/top-compta/leads
```

### Intégration du Webhook GED
Lors de la soumission du formulaire de devis :
1. Les données sont validées côté serveur avec **Zod**.
2. Le champ anti-spam **honeypot** invisible vérifie qu'aucun robot n'a rempli le formulaire.
3. Si `GED_WEBHOOK_URL` est présent, une requête HTTP `POST` au format JSON est envoyée :
   ```json
   {
     "timestamp": "2026-10-02T15:30:00.000Z",
     "source": "top-compta.fr",
     "lead": {
       "fullName": "Jean Dupont",
       "workEmail": "jean@monentreprise.fr",
       "phoneNumber": "06 12 34 56 78",
       "companyName": "Acme SAS",
       "legalStatus": "sas",
       "mainNeed": "externalisation",
       "employeesCount": "3",
       "invoiceVolume": "45 pièces",
       "contactMode": "phone",
       "description": "Externalisation renforcée au quotidien."
     }
   }
   ```

---

## 🏃 Lancement et Déploiement

### Développement local
```bash
npm run dev
```
Accessible sur [http://localhost:3000](http://localhost:3000).

### Build de production & Vérification TypeScript
```bash
npm run build
```

### Exécution du détecteur Impeccable
```bash
npx impeccable detect src/
```

---

## 🎨 Conformité Design System & Restitution Stitch

| Élément | Spécification Stitch | Implémentation |
|---|---|---|
| **Palette** | Sovereign Navy `#0F172A`, Cobalt `#3755C3`, Amber `#D97706`, Surface `#F8F9FF` | Intégrée dans Tailwind v4 `@theme` (`globals.css`) |
| **Typographie** | Space Grotesk (Titres/Prix) & Plus Jakarta Sans (Corps/Labels) | Chargée via Google Fonts avec preconnect |
| **Logo** | Version modernisée SVG vectorielle avec badge géométrique dégradé et typographie bicolore | Composant `Logo` (`src/components/ui/logo.tsx`) |
| **Ordre Page d'Accueil** | 10 sections strictement ordonnées du bandeau légal jusqu'au footer | Respecté à 100% dans `src/app/page.tsx` |
| **Mobile UX** | Drawer latéral fluide, barre d'actions inférieure fixe (`pb-safe`) et CTA d'appel direct | Composants `Header`, `MobileNavBar` |
| **Avis Trustpilot** | 4,6 / 5 sur 52 avis + 4 témoignages clients | Composant `TrustpilotSection` avec `CountUp` |
| **Témoignage Client** | Mr et Mme ANNEBIQUE (SARL VEROLIV / SCI OVERIMO) | Composant `TestimonialSection` |
| **Accessibilité** | Navigation clavier, focus rings, contrastes validés WCAG AA | Conformité assurée sans déviation |
