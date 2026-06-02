# 🚀 PROMPT DE HANDOFF — CASED Website → Claude Code

## 🎯 MISSION

Tu reçois un site web HTML/CSS complet de **8 pages** conçu par Claude Design pour le **CASED** (Cabinet Africain de Stratégie & d'Expertise pour le Développement), cabinet de conseil stratégique basé à Ouagadougou, Burkina Faso.

**Ton rôle :** Transformer ces fichiers HTML statiques en un site web **Next.js / React** production-ready, déployable, avec backend pour les formulaires.

---

## 📂 FICHIERS FOURNIS (INPUT)

### Pages HTML (8 fichiers)
| Fichier | Page | Priorité |
|---------|------|----------|
| `CASED Homepage.html` | Accueil (landing page complète) | P1 |
| `CASED Expertise.html` | Domaines d'Expertise (4 piliers) | P1 |
| `CASED Approche.html` | Notre Approche (méthodologie) | P1 |
| `CASED A Propos.html` | À Propos (vision, mission, AES) | P1 |
| `CASED Consultation.html` | Contact / Formulaire de consultation | P1 |
| `CASED SIIERES.html` | Salon SIIERES 2026 (événement) | P1 |
| `CASED Mentions Legales.html` | Mentions légales + CGV + RGPD | P2 |
| `CASED 404.html` | Page d'erreur 404 | P2 |

### Assets (dossier `/assets`)
- `logo_cased.png` — Logo principal CASED (hexagone + wordmark)
- `logo_aes.webp` — Logo Confédération AES (à utiliser dans section AES et SIIERES)

---

## 🎨 DESIGN SYSTEM — TOKENS CSS

```css
/* À convertir en variables Tailwind ou CSS Modules */
:root {
  /* Couleurs principales */
  --navy:      #1A2B4B;   /* Bleu institutionnel — headers, nav, surfaces sombres */
  --navy-deep: #0C1828;   /* Bleu très sombre — hero, footer, SIIERES */
  --accent:    #009A44;   /* Vert drapeau Burkina — CTAs, highlights, accents */
  --accent-dk: #007A35;   /* Vert foncé — hover states */
  --green:     #2D5A27;   /* Vert forêt — secondaire, checkmarks, badges */
  --red:       #C8102E;   /* Rouge Burkina — SIIERES uniquement */

  /* Neutres */
  --white:     #FFFFFF;
  --surface:   #F8F9FA;   /* Fond général des pages */
  --surface2:  #EFF1F5;   /* Fond cartes, sections alternées */
  --border:    #DDE1EC;   /* Bordures légères */
  --text:      #191C1D;   /* Texte principal */
  --muted:     #44474E;   /* Texte secondaire */
  --dim:       #8B8FA8;   /* Texte tertiaire, placeholders */

  /* Espacements */
  --maxw:  1280px;        /* Largeur max contenu */
  --px:    clamp(20px, 5vw, 80px);  /* Padding horizontal responsive */
  --sy:    clamp(64px, 9vw, 112px); /* Padding vertical sections */
  --gap:   24px;          /* Gap standard grille */

  /* Rayons */
  --r:     4px;           /* Boutons, inputs */
  --r-md:  8px;           /* Icônes, badges */
  --r-lg:  12px;          /* Cartes */
  --r-xl:  20px;          /* Grandes cartes, hero cards */
}
```

**Tailwind config recommandé :**
```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        navy: { DEFAULT: '#1A2B4B', deep: '#0C1828' },
        accent: { DEFAULT: '#009A44', dark: '#007A35' },
        green: '#2D5A27',
        cased: {
          surface: '#F8F9FA',
          surface2: '#EFF1F5',
          border: '#DDE1EC',
          muted: '#44474E',
          dim: '#8B8FA8',
        }
      },
      fontFamily: { sans: ['Inter', 'system-ui', 'sans-serif'] },
      maxWidth: { content: '1280px' },
    }
  }
}
```

---

## 🔤 TYPOGRAPHIE

Police unique : **Inter** (Google Fonts)
Weights utilisés : 300, 400, 500, 600, 700, 800, 900

```
Display : clamp(36px, 5vw, 58px) / weight 800-900 / letter-spacing -0.035em
H1 page : clamp(32px, 4.5vw, 52px) / weight 800
H2 section : clamp(26px, 3.2vw, 36px) / weight 700
H3 : 22-24px / weight 700
Body : 16-17px / weight 400 / line-height 1.65-1.72
Body-lg : 18px / line-height 1.72
Label caps : 11px / weight 700 / letter-spacing 0.14em / UPPERCASE
```

---

## 🧩 COMPOSANTS À EXTRAIRE

### Composants partagés (tous les pages)
```
components/
├── Nav.jsx          — Navigation sticky glassmorphism + mobile drawer
├── Footer.jsx       — Footer 4 colonnes + FASOPOT credit
├── MobileMenu.jsx   — Drawer mobile avec tous les liens
└── RevealWrapper.jsx — Scroll reveal animation wrapper
```

### Composants UI réutilisables
```
components/ui/
├── Button.jsx       — variants: primary, outline, ghost, red, white
├── Badge.jsx        — variants: green, navy, accent, gold, event
├── SectionHeader.jsx — label + h2 + accentbar
├── BentoCard.jsx    — cartes grille avec hover effects
├── StepCard.jsx     — cartes étapes numérotées
└── InfoCard.jsx     — cartes infos avec icône Material
```

### Composants page-spécifiques
```
components/features/
├── HeroHome.jsx       — Hero homepage (dark navy + dot pattern + stat cards)
├── ExpertiseBento.jsx — Grille 4 piliers (12-col CSS grid)
├── SentiersSection.jsx — 3 sentiers sur fond navy
├── MethodoSection.jsx — 2-col : principes + cycle 5 étapes
├── AESSection.jsx     — Ancrage AES + PND RELANCE + logo AES
├── SIIERESHero.jsx    — Hero SIIERES avec countdown
├── SIIERESOles.jsx    — 6 pôles thématiques
├── SIIERESProgram.jsx — Programme 4 jours
├── PackagesSection.jsx — 4 tiers partenariat SIIERES
└── ContactForm.jsx     — Formulaire consultation avec validation
```

---

## 🗺️ ARCHITECTURE NEXT.JS RECOMMANDÉE

```
app/
├── layout.tsx              — Root layout (Inter font, meta globals)
├── page.tsx                — Accueil → CASED Homepage.html
├── expertise/page.tsx      — → CASED Expertise.html
├── approche/page.tsx       — → CASED Approche.html
├── a-propos/page.tsx       — → CASED A Propos.html
├── consultation/page.tsx   — → CASED Consultation.html
├── siieres-2026/page.tsx   — → CASED SIIERES.html
├── mentions-legales/page.tsx — → CASED Mentions Legales.html
└── not-found.tsx           — → CASED 404.html

api/
├── contact/route.ts        — Formulaire consultation → email
└── siieres/route.ts        — Formulaire SIIERES → email
```

---

## 📋 NAVIGATION — STRUCTURE CANONIQUE

```
Nav desktop (sticky, 76px, glassmorphism) :
[Logo CASED 64px]  Expertise | Approche | À Propos | Contact | ● SIIERES 2026  [CTA: Consultation]

Nav mobile (hamburger → drawer right) :
- Accueil
- Expertise
- Notre Approche
- À Propos
- Contact
- ● SIIERES 2026 (vert, avec dot pulsant)
- [Bouton: Consultation]

Active states : underline 2px vert (#009A44) sous le lien actif
SIIERES link : couleur verte + petit dot animé (animation pulse)
```

---

## 📝 FORMULAIRE — BACKEND REQUIS

### Formulaire Consultation (`/consultation`)
**Champs :**
- Nom Complet * (text)
- Organisation / Ministère * (text)
- Email Professionnel * (email)
- Téléphone * (tel, format +226 XX XX XX XX)
- Secteur d'Intervention (select)
- Description du Projet * (textarea)
- Checkbox RGPD * (required)

**Backend :**
- Envoyer un email à `contact@cased-bf.com`
- Utiliser **Resend** ou **Nodemailer** + SMTP
- Répondre avec accusé de réception automatique à l'expéditeur
- Valider côté serveur tous les champs requis
- Réponse success/error en JSON

### Formulaire SIIERES (`/siieres-2026`)
**Email de destination :** `siieres2026@cased-bf.com`
**Mêmes champs + intérêt partenariat (select Platinium/Gold/Silver/Bronze)**

---

## ⚡ FONCTIONNALITÉS DYNAMIQUES

### 1. Countdown SIIERES
```js
// Cible : 23 juillet 2026 00:00 UTC
const targetDate = new Date('2026-07-23T00:00:00Z');
// Afficher : Jours | Heures | Min | Sec
// Mettre à jour toutes les secondes avec setInterval
// Si dépassé : afficher "L'événement est en cours !"
```

### 2. Stat counter animé (SIIERES)
```js
// Sur entrée en viewport, animer 0 → 402,2
// Duration: 1800ms, easing: ease-out cubic
// Afficher : "402,2 Mds $"
```

### 3. Scroll reveal
```js
// IntersectionObserver sur tous les éléments .reveal
// threshold: 0.08, rootMargin: '0px 0px -40px 0px'
// Ajouter classe 'visible' → opacity 0→1, translateY 24px→0
// Durée: 0.55s, delays: 0.1/0.2/0.3s
// Respecter prefers-reduced-motion
```

### 4. Nav scroll behavior
```js
// Ajouter classe 'scrolled' quand scrollY > 20px
// Scrolled: box-shadow appear, background opacity 88→95%
```

### 5. Active nav on scroll (homepage)
```js
// IntersectionObserver sur sections avec id
// Mettre à jour classe active du nav-link correspondant
// threshold: 0.4
```

---

## 🔍 SEO — À IMPLÉMENTER

### Metadata par page (Next.js Metadata API)
```ts
// app/page.tsx
export const metadata: Metadata = {
  title: 'CASED — Cabinet Africain de Stratégie & d\'Expertise pour le Développement',
  description: 'CASED — Ingénierie de la souveraineté économique du Burkina Faso et de l\'AES. Think Tank + cabinet de conseil stratégique fondé en 2026.',
  openGraph: {
    title: 'CASED — Cabinet Africain de Stratégie',
    description: '...',
    url: 'https://cased-bf.com',
    siteName: 'CASED',
    locale: 'fr_BF',
    type: 'website',
  },
  twitter: { card: 'summary_large_image' },
  alternates: { canonical: 'https://cased-bf.com' },
}

// Page SIIERES
export const metadata: Metadata = {
  title: 'SIIERES 2026 — Salon International | CASED',
  description: 'SIIERES 2026 — 23-26 juillet 2026, Ouagadougou. Première plateforme stratégique d\'Afrique de l\'Ouest. Organisé par CASED.',
}
```

### robots.txt
```
User-agent: *
Allow: /
Disallow: /api/
Sitemap: https://cased-bf.com/sitemap.xml
```

### sitemap.xml (générer avec Next.js)
Pages : `/`, `/expertise`, `/approche`, `/a-propos`, `/consultation`, `/siieres-2026`, `/mentions-legales`

---

## 📱 RESPONSIVE — BREAKPOINTS

```css
/* Breakpoints utilisés dans le design */
@media (max-width: 1024px) { /* Tablet landscape */ }
@media (max-width: 768px)  { /* Tablet portrait / mobile large */ }
@media (max-width: 480px)  { /* Mobile small */ }

/* Layouts qui changent :
- Hero 2-col → 1-col (< 1024px)
- Bento grid 12-col → 1-col (< 768px)
- Sentiers 3-col → 1-col (< 768px)
- Packages 4-col → 2-col → 1-col
- Footer 4-col → 2-col → 1-col
- Nav desktop → hamburger (< 768px)
*/
```

---

## ♿ ACCESSIBILITÉ — CHECKLIST

- [ ] `lang="fr"` sur `<html>` ✅ (déjà fait)
- [ ] `prefers-reduced-motion` : désactiver toutes les animations ✅
- [ ] `focus-visible` outline 2px vert sur tous interactifs ✅
- [ ] `aria-label` sur hamburger button, social links
- [ ] `alt` text sur toutes les images
- [ ] Contraste WCAG AA : navy sur blanc, blanc sur vert ✅
- [ ] `role="navigation"` + `aria-label` sur nav
- [ ] `skip to content` link en haut de page
- [ ] Formulaires : `for`/`id` liés, messages d'erreur `aria-describedby`

---

## 🖼️ IMAGES — PLACEHOLDERS À REMPLACER

Les images suivantes sont des **placeholders visuels** dans le design et doivent être remplacées par de vraies photos :

| Section | Description image attendue | Format |
|---------|---------------------------|--------|
| Expertise — Mines | Photo mine / exploitation minière Burkina | 280×200px |
| Expertise — Environnement | Paysage sahélien / reforestation | 280×200px |
| Expertise — Énergie | Panneaux solaires Sahel | 280×200px |
| Expertise — Validité | Bureau institutionnel / documents | 280×200px |
| À Propos — Hero | Photo équipe ou Ouagadougou | 600×400px |
| SIIERES — Hero | Photo salon / conférence Ouaga | Full-width |

**Recommandation :** Utiliser `next/image` avec `placeholder="blur"` et dimensions fixes.

---

## 🔗 INFORMATIONS CABINET — À NE PAS MODIFIER

```
Nom légal : CASED (Cabinet Africain de Stratégie & d'Expertise pour le Développement)
RCCM : BJ-COO-01-2024-B13-00042
IFU : 3202415487901
Adresse : BP 30162 Ouaga Pissy, Ouagadougou, Burkina Faso
Email cabinet : contact@cased-bf.com
Email SIIERES : siieres2026@cased-bf.com
Tél 1 : +226 25 43 11 44
Tél 2 : +226 70 20 50 57
Tél 3 : +226 54 84 32 32
Site web : cased-bf.com

Design & Digital : FASOPOT DIGITAL — +212 777 346 787
```

---

## 📦 STACK TECHNIQUE RECOMMANDÉE

```
Framework   : Next.js 14+ (App Router)
Styling     : Tailwind CSS 3.4+
Animations  : Framer Motion (scroll reveals, countdown, counters)
Formulaires : React Hook Form + Zod (validation)
Emails      : Resend (transactional emails)
Images      : next/image
Fonts       : next/font/google (Inter)
Deploy      : Vercel
```

**Packages à installer :**
```bash
npm install framer-motion react-hook-form zod resend
npm install -D @types/node
```

---

## ⚠️ POINTS D'ATTENTION CRITIQUES

1. **Le formulaire DOIT envoyer les emails** — C'est le seul point de conversion. Tester en staging avant mise en prod.

2. **Le countdown SIIERES** doit fonctionner en temps réel — utiliser `useEffect` + `setInterval` + nettoyage.

3. **La nav est sticky** — `position: sticky; top: 0` avec `z-index: 200`. Sur mobile, le drawer doit bloquer le scroll du body (`overflow: hidden`).

4. **Toutes les pages partagent le même composant Nav et Footer** — Ne pas les dupliquer.

5. **La palette vert (#009A44) est le rouge à ne PAS changer** — C'est la couleur du drapeau Burkina Faso, décision identitaire forte.

6. **Pas de portfolio** — Le cabinet est nouveau (2026). Ne pas inventer de réalisations ou de chiffres de performance.

7. **Le logo `logo_cased.png`** est en format portrait (hexagone + texte). L'afficher à `height: 64px; width: auto` dans la nav — ne jamais forcer une largeur fixe.

8. **SIIERES est un événement réel** — Date : 23-26 juillet 2026. Ne pas modifier les dates ou le contenu sans validation client.

---

## ✅ CHECKLIST DE LIVRAISON CLAUDE CODE

### Avant mise en prod
- [ ] Toutes les routes Next.js fonctionnelles
- [ ] Formulaire consultation envoi email testé
- [ ] Formulaire SIIERES envoi email testé
- [ ] Countdown SIIERES live et précis
- [ ] Animations scroll-reveal fonctionnelles
- [ ] Nav active state correct sur chaque page
- [ ] Mobile menu testé sur iPhone SE (375px) et Galaxy S22 (390px)
- [ ] Toutes les images remplacées (ou placeholders valides)
- [ ] Meta SEO sur toutes les pages
- [ ] sitemap.xml généré
- [ ] robots.txt créé
- [ ] 404 personnalisée active (`not-found.tsx`)
- [ ] Mentions Légales accessible depuis tous les footers
- [ ] Logo FASOPOT DIGITAL dans tous les footers
- [ ] Déploiement Vercel avec domaine `cased-bf.com`
- [ ] HTTPS actif
- [ ] Performance Lighthouse ≥ 85 (mobile)

---

## 💬 MESSAGE POUR CLAUDE CODE

```
Bonjour,

Je te transmets le design complet du site CASED prêt pour implémentation.
Les fichiers HTML sont dans le dossier attaché — ils représentent le design
final validé. Ta mission est de les convertir en Next.js 14 avec App Router.

Points clés :
- Respecte EXACTEMENT les couleurs, espacements et typographie du design
- Le formulaire de contact DOIT envoyer des emails (contact@cased-bf.com)
- Le countdown SIIERES est une feature critique (date : 23 juillet 2026)
- La navigation doit être identique sur toutes les pages
- Priorise la performance mobile (cible Lighthouse ≥ 85)
- Le logo doit s'afficher à height: 64px width: auto dans la nav
- Crédit footer obligatoire : "Design by FASOPOT DIGITAL — +212 777 346 787"

Commence par créer la structure Next.js, puis le layout partagé
(Nav + Footer), puis les pages dans l'ordre : Homepage → Expertise →
Approche → À Propos → Consultation → SIIERES → Mentions Légales → 404.

Design by Claude Design (Claude.ai) — Implémentation by Claude Code.
```

---

*Document préparé par Claude Design — Juin 2026*
*Cabinet CASED — cased-bf.com*
*Design & Digital : FASOPOT DIGITAL — +212 777 346 787*
