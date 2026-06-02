# Site web CASED Burkina

_Started 2026-06-01 23:39 UTC_

---

## User

Je travaille sur le site web du **CASED** (Cabinet Africain de Stratégie & d'Expertise pour le Développement), un cabinet de conseil stratégique nouvellement créé en 2026 au Burkina Faso.

**Contexte important :**
- Cabinet aligné sur la **Révolution Progressiste Populaire (RPP)** du Capitaine Ibrahim Traoré
- Membre de la **Confédération AES** (Mali-Burkina-Niger) depuis décembre 2025
- Partenaire du **PND RELANCE 2026-2030** (36 190,7 milliards FCFA)
- **Think Tank + Ingénierie publique** au service de la souveraineté économique
- **PAS DE PORTFOLIO** — cabinet nouvellement créé

## Assistant

_[tool: update_todos]_

_[tool: list_files]_

_[tool: read_file]_

Let me dig into everything first — design system, Stitch files, and the existing screens.

_[tool: read_file]_

_[tool: read_file]_

_[tool: read_file]_

_[tool: read_file]_

_[tool: update_todos]_

_[tool: copy_files]_

Now I have everything I need. Let me copy the logo and start building.

_[tool: update_todos]_

_[tool: write_file]_

Building now — the full refined homepage.

## User

/compact

## Assistant

_[tool: done]_

_[tool: fork_verifier_agent]_

_[tool: update_todos]_

_[tool: write_file]_

Building the two sub-pages now — Expertise and Consultation.

_[tool: read_file]_

_[tool: update_todos]_

Voici l'audit complet, puis je corrige immédiatement les problèmes critiques.

---

# 📊 RAPPORT D'AUDIT — DESIGN CASED

## 🎯 RÉSUMÉ EXÉCUTIF

Le design CASED est **solide dans ses fondations** : palette institutionnelle correcte (navy/or/vert), typographie Inter cohérente, bento grid fonctionnel, scroll-reveal sobre. Il est prêt à 65% pour Claude Code. Trois blocages critiques avant implémentation : **pages Priority 1 manquantes** (À Propos, Approche, Consultation dédiée), **navigation incohérente** entre pages, et **formulaire contact incomplet** (téléphone absent, champs obligatoires non marqués, vraies coordonnées à insérer).

---

## ✅ POINTS FORTS

| Élément | Détail |
|---|---|
| Palette | Navy/Or/Vert — institutionnel, sobre, 4 couleurs max ✅ |
| Typographie | Inter, hiérarchie display→h2→h3→body claire ✅ |
| Bento grid | 12-col, layout éditorial, hover translateY(-3px) ✅ |
| Hero | Dark navy + dot pattern or, stat card glassmorphic, 2 CTA ✅ |
| Scroll reveal | fade-up 0.55s, threshold 0.08, unobserve après trigger ✅ |
| Trust band | RCCM/IFU visible dès l'entrée ✅ |
| Footer | 4 colonnes, social links, mentions légales ✅ |
| Mobile menu | Drawer + overlay, body overflow:hidden ✅ |
| Espacements | clamp(64px,9vw,112px) — dans la plage 80-120px ✅ |
| Max-width | 1280px centré ✅ |

---

## ⚠️ PROBLÈMES CRITIQUES — Priorité 1

### P1.1 — Pages Priority 1 manquantes
- **Où :** Architecture du site entière
- **Problème :** Ni *Notre Approche* ni *À Propos* ni *Consultation* (page dédiée) n'existent en fichier séparé. La méthodologie est noyée dans la homepage sans lien de navigation fonctionnel. Un visiteur ministériel cliquant "Approche" tombe sur une ancre interne — pas une page.
- **Recommandation :** Créer `CASED Approche.html`, `CASED A Propos.html`, `CASED Consultation.html` avec leurs propres sections complètes.

### P1.2 — Navigation incohérente entre les deux pages existantes
- **Où :** `<nav>` de Homepage vs Expertise
- **Problème :** Homepage affiche `Expertise | Approche | Confédération AES | Contact` — "Confédération AES" est trop spécifique pour un item de nav principal. Expertise page affiche les mêmes items mais "Approche" et "À Propos" pointent vers des ancres homepage, pas des pages réelles. Aucun lien "Accueil" textuel (seul le logo).
- **Recommandation :** Canoniser la nav : `Expertise | Approche | À Propos | Contact` + CTA "Consultation"

### P1.3 — Formulaire contact incomplet + mauvaises coordonnées
- **Où :** Section Contact, Homepage
- **Problème :** Champ **Téléphone absent** (demandé dans le brief). Champs obligatoires non marqués (`*`). Case confidentialité absente. Téléphone affiché `+226 25 30 00 00` (placeholder). Adresse `Ouagadougou, Burkina Faso` trop vague.
- **Recommandation :**
  - Ajouter champ Téléphone : `+226 __`
  - Marquer champs requis avec `*`
  - Ajouter checkbox confidentialité
  - Vrais numéros : `+226 25 43 11 44 / 70 20 50 57 / 54 84 32 32`
  - Vraie adresse : `BP 30162 Ouaga Pissy, Ouagadougou`

### P1.4 — Section "Avantages Compétitifs" absente de la homepage
- **Où :** Homepage — entre Méthodologie et AES
- **Problème :** Le brief liste 6 avantages différenciateurs (connaissance contextuelle, alignement RPP, expertise multisectorielle, agilité, réseau AES). Aucune section ne les présente. Un ministre qui visite ne voit pas **pourquoi CASED plutôt qu'un autre cabinet**.
- **Recommandation :** Ajouter section "Pourquoi CASED ?" avec 6 cartes avantages après Méthodologie.

---

## 🔧 PROBLÈMES MOYENS — Priorité 2

### P2.1 — Teaser "À Propos" absent de la homepage
- **Où :** Homepage, entre Vision Quote et Expertise
- **Problème :** Le visiteur ne sait pas *qui est* CASED avant de voir les services. Vision, mission et contexte de création 2026 doivent apparaître en homepage.
- **Recommandation :** Ajouter une section 2-col compacte (60px) : "Fondé en 2026 à Ouagadougou — Think Tank + Ingénierie publique" avec 3 stats (Année de création, Nations AES, Domaines d'expertise).

### P2.2 — `prefers-reduced-motion` non respecté
- **Où :** CSS `.reveal` + toutes transitions
- **Problème :** Accessibilité. Les animations ne sont pas désactivées pour les utilisateurs ayant paramétré "réduire les animations".
- **Recommandation :** Ajouter `@media (prefers-reduced-motion: reduce) { .reveal { transition: none; opacity: 1; transform: none; } }`

### P2.3 — Focus states absents
- **Où :** Tous les éléments interactifs
- **Problème :** Navigation au clavier sans indicateur visuel de focus.
- **Recommandation :** `a:focus-visible, button:focus-visible { outline: 2px solid var(--gold); outline-offset: 3px; }`

### P2.4 — Nav item "Confédération AES" trop long / hors scope
- **Où :** `<nav>` Homepage
- **Problème :** "Confédération AES" comme item de menu est inhabituel pour un cabinet de conseil. Le contenu AES doit vivre dans "À Propos" ou en section homepage, pas en top-nav.

### P2.5 — CTA manquants dans sections Sentiers et Méthodologie
- **Où :** Sections `#sentiers` et `#methodologie` homepage
- **Problème :** Ces sections n'ont aucun CTA vers la consultation. Règle : chaque section majeure doit avoir un chemin vers l'action suivante.

---

## 💡 SUGGESTIONS — Priorité 3

| Suggestion | Bénéfice | Effort |
|---|---|---|
| Page 404 personnalisée | Expérience cohérente si URL invalide | Faible |
| Bouton scroll-to-top | UX sur pages longues | Faible |
| Section Publications (vide mais préparée) | Anticipe les études futures | Moyen |
| Teaser "Rejoignez-nous" en footer | Signale l'agilité du cabinet jeune | Faible |
| Carte Google Maps iframe | Crédibilité adresse physique | Moyen |

---

## 📄 PAGES MANQUANTES

| Page | Priorité | Raison | Contenu clé |
|---|---|---|---|
| `CASED Consultation.html` | P1 | Formulaire dédié complet | Brief projet, secteur, téléphone, RCCM/IFU |
| `CASED Approche.html` | P1 | Méthodologie seule page | 3 principes, 5 étapes, différenciateurs |
| `CASED A Propos.html` | P1 | Qui est CASED, vision, contexte AES | Mission, vision, contexte RPP, équipe (à venir) |
| `CASED Mentions Legales.html` | P3 | Obligation légale | RCCM, IFU, CNSS, CGV, confidentialité |
| `CASED 404.html` | P3 | UX | Lien retour accueil, message sobre |

---

## 🎨 RECOMMANDATIONS DÉTAILLÉES

### Couleurs — **Conforme ✅**
Palette actuelle : `#1A2B4B` (navy), `#C5A059` (or), `#2D5A27` (vert), `#F8F9FA` (surface). Aucune correction nécessaire. L'or est bien réservé aux CTA primaires.

### Typographie — **Quasi-conforme ✅**
Inter, hiérarchie correcte. Seul point : quelques `.bcard-body` à `font-size:15px` — à monter à `16px` minimum pour accessibilité WCAG.

### Espacement — **Conforme ✅**
Sections `clamp(64px,9vw,112px)`, cards `40px padding`, gap `24px`. Dans la plage attendue.

### Navigation — **À corriger ⚠️**
```
[Logo CASED]  Expertise | Approche | À Propos | Contact  [Consultation →]
```

### CTA & Boutons — **Partiellement conforme ⚠️**
- Hero ✅ — Bento cards ✅ — Sentiers ❌ — Méthodologie ❌ — AES ❌
- Ajouter CTA "Initier une consultation →" à la fin des sections Sentiers et Méthodologie

### Formulaire — **À corriger ⚠️**
```
Nom complet *     | Organisation *
Email *           | Téléphone * (+226 __)
Secteur [dropdown]
Message *
☐ J'accepte la politique de confidentialité panafricaine
[ENVOYER LA DEMANDE]
```
Coordonnées réelles : Tél `+226 25 43 11 44 / 70 20 50 57`, Adresse `BP 30162 Ouaga Pissy`

---

## 📋 CHECKLIST CORRECTIONS

### Priorité 1 — Critique
- [ ] Créer `CASED Consultation.html` (formulaire complet dédié)
- [ ] Créer `CASED Approche.html` (méthodologie complète)
- [ ] Créer `CASED A Propos.html` (mission/vision/équipe/AES)
- [ ] Corriger navigation : supprimer "Confédération AES", ajouter "À Propos"
- [ ] Corriger formulaire contact : ajouter Téléphone, `*`, checkbox RGPD
- [ ] Corriger coordonnées : vrais numéros + vraie adresse BP 30162
- [ ] Ajouter section "Pourquoi CASED ?" sur homepage

### Priorité 2 — Important
- [ ] Ajouter `prefers-reduced-motion` dans CSS
- [ ] Ajouter `focus-visible` outline gold
- [ ] Ajouter CTA fin section Sentiers + Méthodologie
- [ ] Monter `font-size` bcard-body à 16px

### Priorité 3 — Optionnel
- [ ] `CASED 404.html`
- [ ] `CASED Mentions Legales.html`
- [ ] Bouton scroll-to-top

---

**Je corrige tout maintenant** — nav canonique, homepage améliorée avec "Pourquoi CASED ?" et coordonnées réelles, puis je livre les 3 pages manquantes P1.

_[tool: read_file]_

Fixing the homepage first, then building all 3 missing pages.

_[tool: str_replace_edit]_

Parfait. Je corrige tout maintenant — email, site web, téléphones, adresse, nav, formulaire, + nouvelle section "Pourquoi CASED ?".

_[tool: read_file]_

_[tool: run_script]_

Bonne observation. Le logo est gris + vert discret — l'or terre jure. On passe sur un **vert drapeau Burkina Faso** (#009A44 officiel) comme couleur d'accent, plus patriotique et cohérent avec le logo.

Nouvelle palette :
- **Navy** `#1A2B4B` — autorité, structure (inchangé)
- **Vert accent** `#009A44` — CTAs, énergie, patriotisme (remplace l'or)
- **Vert forêt** `#2D5A27` — croissance, nature, secondaire (inchangé)

_[tool: run_script]_

Verifier OK. Le script a failli — je relance le remplacement couleurs.

_[tool: str_replace_edit]_

Maintenant j'applique tous les autres correctifs — nav, formulaire, coordonnées réelles, section "Pourquoi CASED ?", accessibilité.

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

Now adding the "Pourquoi CASED ?" section and CTAs to Sentiers/Méthodologie.

_[tool: copy_files]_

Excellent logo AES — couleurs parfaites : rouge, vert, or. Je l'intègre dans les assets, puis j'applique les fixes restants un par un.

_[tool: read_file]_

_[tool: read_file]_

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

Now add the CSS for av-cards and integrate the AES logo into the AES section.

_[tool: str_replace_edit]_

Now integrate the AES logo into the AES section, and fix footer links.

_[tool: write_file]_

Excellent — tout est en place. Maintenant les 3 pages manquantes Priority 1, en parallèle.

_[tool: write_file]_

_[tool: write_file]_

_[tool: done]_

D'abord on livre tout ce qui est fait, ensuite on agrandit le logo sur toutes les pages.

_[tool: run_script]_

Agrandissement du logo sur les 5 pages en une passe.

_[tool: done]_

_[tool: update_todos]_

_[tool: fork_verifier_agent]_

Le vérificateur tourne. Voici le récapitulatif complet de ce qui a été livré :

---

## ✅ Site CASED — Livraison complète

### 5 pages produites

| Page | Fichier | Statut |
|---|---|---|
| Accueil | `CASED Homepage.html` | ✅ Complet |
| Domaines d'Expertise | `CASED Expertise.html` | ✅ Complet |
| Notre Approche | `CASED Approche.html` | ✅ Complet |
| À Propos | `CASED A Propos.html` | ✅ Complet |
| Consultation / Contact | `CASED Consultation.html` | ✅ Complet |

### Corrections appliquées depuis l'audit
- **Palette** — Or terre → Vert drapeau Burkina Faso `#009A44` sur toutes les pages
- **Logo AES** intégré dans section ancrage + page À Propos
- **Logo CASED** agrandi 40px → 56px dans la nav
- **Navigation** canonisée : `Expertise | Approche | À Propos | Contact`
- **Formulaire** — Champ Téléphone ajouté, champs `*` requis, case RGPD, vrais numéros
- **Coordonnées réelles** — `contact@cased-bf.com`, `cased-bf.com`, `BP 30162 Ouaga Pissy`, `+226 25 43 11 44 / 70 20 50 57 / 54 84 32 32`
- **Section "Pourquoi CASED ?"** — 6 cartes avantages différenciateurs
- **CTAs** ajoutés en fin de sections Sentiers et Méthodologie
- **Accessibilité** — `prefers-reduced-motion`, `focus-visible` outline vert

### Prêt pour Claude Code
La structure CSS est basée sur des variables CSS (`--accent`, `--navy`, `--green`) — une modification de token se propage sur toutes les pages. Les composants sont sémantiques et commentés.

## User

Verifier agent check completed

## Assistant

_[tool: present_fs_item_for_download]_

Vérification passée ✅ — tout est propre. Le site est prêt pour Claude Code.

_[tool: read_file]_

_[tool: read_file]_

_[tool: update_todos]_

Excellent. Je lis tout, fais l'audit complet, puis je bâtis tout ce qui manque.

_[tool: write_file]_

Let me build the SIIERES page first — the showpiece — then fix all existing pages in one pass.

_[tool: write_file]_

SIIERES fait. Maintenant Mentions Légales + 404, puis update global de toutes les pages.

_[tool: run_script]_

Je vais lire les navs actuels pour faire des remplacements précis.

_[tool: run_script]_

Parfait — je vois les incohérences. Script de harmonisation globale sur les 5 pages.

_[tool: str_replace_edit]_

Nav harmonisé, logo 64px, FASOPOT, badge fixes. Maintenant le teaser SIIERES sur la homepage + page 404.

_[tool: write_file]_

_[tool: done]_

_[tool: update_todos]_

_[tool: fork_verifier_agent]_

_[tool: present_fs_item_for_download]_

Le vérificateur tourne en arrière-plan. En attendant, voici le téléchargement complet.

## Récapitulatif — Site CASED v2 complet

### 8 pages livrées

| Page | Fichier | Statut |
|---|---|---|
| Accueil | `CASED Homepage.html` | ✅ |
| Expertise | `CASED Expertise.html` | ✅ |
| Notre Approche | `CASED Approche.html` | ✅ |
| À Propos | `CASED A Propos.html` | ✅ |
| Consultation / Contact | `CASED Consultation.html` | ✅ |
| **SIIERES 2026** | `CASED SIIERES.html` | ✅ **Nouveau** |
| **Mentions Légales / CGV / RGPD** | `CASED Mentions Legales.html` | ✅ **Nouveau** |
| **404** | `CASED 404.html` | ✅ **Nouveau** |

### Ce sprint — corrections appliquées
- **Nav harmonisée** sur toutes les pages : `Expertise | Approche | À Propos | Contact | SIIERES 2026 ●`
- **Mobile drawer** identique partout avec lien Accueil + SIIERES
- **Logo 64px** sans contrainte max-width
- **badge-accent** couleur corrigée (`#8A6A28` → `#006830`)
- **FASOPOT DIGITAL** crédit dans tous les footers
- **SEO meta description** injectée sur toutes les pages
- **Mentions Légales** liées depuis tous les footers
- **Teaser SIIERES** sur la homepage (section dark navy avant vision quote)
- **Countdown timer** live sur SIIERES (décompte vers 23 juillet 2026)
- **Animations stat counter** sur SIIERES (402,2 Mds $)
- **Particules flottantes** sur la 404

### Prêt pour Claude Code
Tokens CSS : `--navy`, `--accent`, `--green` — tout change en 1 ligne. Structure HTML sémantique, commentée par section.

_[tool: update_todos]_

_[tool: write_file]_

_[tool: present_fs_item_for_download]_

_[tool: update_todos]_

✅ **Vérification passée — zéro erreur.**

Tout est prêt pour FASOPOT DIGITAL et Claude Code. Voici ce que tu leur transmets :

---

**📦 Le zip contient :**
- `CASED Homepage.html` — Landing page complète
- `CASED Expertise.html` — 4 piliers d'expertise
- `CASED Approche.html` — Méthodologie de rupture
- `CASED A Propos.html` — Vision, mission, contexte AES
- `CASED Consultation.html` — Formulaire dédié avec états success/error
- `CASED SIIERES.html` — Événement 23-26 juillet 2026 avec countdown live
- `CASED Mentions Legales.html` — CGV + RGPD + mentions
- `CASED 404.html` — Page d'erreur animée
- `assets/logo_cased.png` + `assets/logo_aes.webp`
- `PROMPT_CLAUDE_CODE_HANDOFF.md` — Le brief technique complet

**📋 Le prompt Claude Code couvre :**
Tokens CSS exacts → Stack Next.js → Architecture des composants → SEO metadata → Formulaires backend → Countdown → Accessibilité → Checklist de livraison → Informations légales à ne pas modifier

Bonne mise en production ! 🇧🇫

