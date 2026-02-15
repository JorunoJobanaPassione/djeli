# Djeli - Progression

## Statut : 4/10 - Landing page prête pour validation

**Dernière MAJ** : 15 février 2026

| Élément | Status |
|---------|--------|
| Landing page | Live sur Vercel |
| SEO (robots, sitemap, favicon) | ✓ Fait |
| Validation email/tel | ✓ Fait |
| Waitlist form | Fonctionnel (mode dev) |
| Supabase | À configurer |
| Pub Facebook | À lancer |

**URL** : https://djeli.vercel.app
**GitHub** : https://github.com/JorunoJobanaPassione/djeli

---

## AUTO-CRITIQUE (15/02/2026)

### Ce qui a été bien fait

| Élément | Détail |
|---------|--------|
| **Stack moderne** | Next.js 16.1.6, React 19.2.3, Tailwind v4 - tout à jour |
| **TypeScript strict** | Mode strict activé, aucun `any`, code propre |
| **SEO basique** | Metadata complète, Schema.org (SoftwareApplication + FAQPage) |
| **Architecture sécurisée** | Server actions pour Supabase, Service Role Key côté serveur |
| **Design cohérent** | Palette emerald/gray, responsive, mobile-first |
| **OG images dynamiques** | 1200x630, edge runtime, branding Djeli |
| **Code minimal** | Pas de sur-ingénierie, un seul composant client |
| **Validation nom** | Vérifié que "Djeli" n'est pas pris |

### Ce qui aurait dû être fait

| Manquement | Impact | Priorité |
|------------|--------|----------|
| **robots.txt manquant** | Google peut mal indexer le site | P0 |
| **sitemap.xml manquant** | Crawling inefficace, SEO pénalisé | P0 |
| **Favicon manquant** | UX/branding incomplet, onglet browser vide | P0 |
| **Validation email/tel** | Données invalides possibles en DB | P1 |
| **Pas de rate limiting** | Spam possible sur waitlist | P1 |
| **Pas de déduplication** | Doublons d'emails possibles | P1 |
| **tsconfig obsolète** | target ES2017 au lieu de ES2020+ | P2 |
| **next.config vide** | Pas de headers SEO, pas de compression config | P2 |

### Erreurs de réflexion

| Erreur | Correction |
|--------|------------|
| Lancé le dev sans robots.txt/sitemap | SEO doit être prêt AVANT le lancement |
| Variables env non configurées | Aurait dû setup Supabase en même temps que Vercel |
| Pas de favicon dès le départ | Détail basique oublié |
| Schema SQL sans contrainte unique | Risque doublons waitlist |

---

## AMÉLIORATIONS IDENTIFIÉES

### Code (P0-P1)

| Fichier | Problème | Solution |
|---------|----------|----------|
| `app/actions.ts` | Pas de validation email | Ajouter regex validation |
| `app/actions.ts` | Pas de rate limiting | Ajouter check IP ou Supabase RLS |
| `lib/supabase.ts` | Non-null assertion (!) | Ajouter check + fallback |
| `supabase-schema.sql` | Pas de contrainte unique | `UNIQUE(email)` ou upsert |
| `supabase-schema.sql` | Pas d'index | `CREATE INDEX ON waitlist(email)` |
| `tsconfig.json` | target ES2017 | Changer en ES2020 |

### SEO (P0)

| Manquant | Action |
|----------|--------|
| robots.txt | Créer `app/robots.ts` avec Allow: / |
| sitemap.xml | Créer `app/sitemap.ts` avec URL landing |
| Favicon | Ajouter `app/icon.png` ou `public/favicon.ico` |
| Canonical | Déjà fait ✓ |
| Structured data | Déjà fait ✓ |

### Marketing/Conversion

| Élément | Amélioration |
|---------|--------------|
| CTA unique | OK - "Rejoindre la liste d'attente" clair |
| Social proof | Ajouter témoignages si possible (post-validation) |
| Urgence | Ajouter compteur "X personnes inscrites" |
| Trust | Ajouter "Pas de spam" + "Gratuit 14 jours" plus visible |
| Analytics | Ajouter tracking (Vercel Analytics ou Plausible) |

### Sécurité

| Risque | Mitigation |
|--------|------------|
| Spam waitlist | Rate limiting par IP (middleware ou Supabase) |
| Injection SQL | OK - Supabase client sécurisé |
| XSS | OK - React escape par défaut |
| Env vars exposées | OK - Service key côté serveur uniquement |

---

## FAIT

### Landing Page (15/02/2026)
- [x] Hero section FNE-focused
- [x] Pain points section
- [x] Benefits (4 cards)
- [x] Social proof (stats marché)
- [x] Formulaire waitlist (email + WhatsApp)
- [x] FAQ 5 questions (avec Schema.org)
- [x] OG image dynamique 1200x630
- [x] Schema.org SoftwareApplication + FAQPage
- [x] SEO metadata optimisé
- [x] Correction accents français (Côte d'Ivoire, Électronique, etc.)

### Recherche (15/02/2026)
- [x] Analyse concurrence (EBP, Dexy, Sage, Zoho)
- [x] Recherche SEO keywords
- [x] Étude FNE (obligatoire depuis mai 2025)
- [x] Analyse APIs paiement (CinetPay, Flutterwave)
- [x] Vérification nom disponible

---

## À FAIRE

### Immédiat (Avant pub Facebook)

**SEO Critique** ✓ FAIT
- [x] Créer `app/robots.ts` (Allow: /)
- [x] Créer `app/sitemap.ts` (URL landing)
- [x] Ajouter favicon (`app/icon.tsx` 32x32 + `app/apple-icon.tsx` 180x180)

**Code Quality** ✓ FAIT
- [x] Ajouter validation email (regex) dans actions.ts
- [x] Ajouter validation téléphone (+225) dans actions.ts
- [x] Utiliser upsert pour éviter doublons
- [x] Mettre à jour tsconfig.json (target ES2022)
- [x] Ajouter contrainte UNIQUE + indexes dans schema SQL

**Backend** (Manuel)
- [ ] Créer projet Supabase
- [ ] Exécuter `supabase-schema.sql`
- [ ] Ajouter variables env sur Vercel
- [ ] Redéployer

### Cette semaine
- [ ] Configurer Supabase complet
- [ ] Tester formulaire waitlist en prod
- [ ] Ajouter Vercel Analytics
- [ ] Lancer pub Facebook CI (50€)
- [ ] Objectif : 50+ signups en 5 jours

### Si validation OK (>50 signups)

**MVP Core**
- [ ] Auth (email + tel via Supabase Auth)
- [ ] CRUD clients
- [ ] CRUD factures
- [ ] Génération PDF (react-pdf)
- [ ] Partage WhatsApp
- [ ] Dashboard CA/impayés

**MVP Paiements**
- [ ] Intégration CinetPay
- [ ] Webhooks paiement
- [ ] Confirmation par SMS/email

### Plus tard
- [ ] Intégration FNE (API DGI ou partenariat Dexy)
- [ ] App mobile (React Native/Expo)
- [ ] Multi-utilisateurs
- [ ] Rappels automatiques impayés
- [ ] Mode hors-ligne (PWA)

---

## Business Model

| Tier | Prix | FCFA | Cible |
|------|------|------|-------|
| Starter | 15€/mois | 10,000 | Microentreprises |
| Pro | 35€/mois | 23,000 | PME actives |
| Business | 60€/mois | 40,000 | PME établies |

**Pas de tier gratuit** - Trial 14 jours

---

## SEO Keywords cibles

| Keyword | Priorité | Intégré |
|---------|----------|---------|
| facturation électronique Côte d'Ivoire | P0 | ✓ metadata |
| FNE Côte d'Ivoire | P0 | ✓ metadata + content |
| logiciel facturation PME Afrique | P1 | ✓ metadata |
| facturation Côte d'Ivoire | P1 | ✓ metadata |
| conformité FNE logiciel | P1 | ✓ FAQ Schema |

---

## Stack

| Composant | Choix | Version |
|-----------|-------|---------|
| Frontend | Next.js + React | 16.1.6 + 19.2.3 |
| Styling | Tailwind CSS | v4 |
| Auth/DB | Supabase | 2.95.3 |
| Paiements | CinetPay | À intégrer |
| Déploiement | Vercel | - |
| Linting | ESLint | v9 |
| TypeScript | Strict mode | v5 |

---

## Métriques objectifs

| Métrique | Actuel | 1 semaine | 1 mois | 3 mois |
|----------|--------|-----------|--------|--------|
| Signups waitlist | 0 | 50+ | 100+ | - |
| Utilisateurs actifs | - | - | 50 | 300 |
| Factures créées | - | - | 500 | 5,000 |
| MRR | 0€ | 0€ | 500€ | 3,000€ |

---

## Fichiers du projet

| Fichier | Rôle | Status |
|---------|------|--------|
| `app/page.tsx` | Landing page | ✓ |
| `app/layout.tsx` | Metadata + Schema.org | ✓ |
| `app/actions.ts` | Server action waitlist | ✓ Validation ajoutée |
| `app/opengraph-image.tsx` | OG image dynamique | ✓ |
| `app/twitter-image.tsx` | Twitter image | ✓ |
| `app/robots.ts` | SEO robots | ✓ |
| `app/sitemap.ts` | SEO sitemap | ✓ |
| `app/icon.tsx` | Favicon 32x32 | ✓ |
| `app/apple-icon.tsx` | Apple icon 180x180 | ✓ |
| `lib/supabase.ts` | Client Supabase | ✓ |
| `supabase-schema.sql` | Schema DB | ✓ UNIQUE + indexes |

---

## Règles apprises (à ajouter au CLAUDE.md global)

```markdown
## Landing pages de validation

- Toujours créer robots.txt et sitemap.xml AVANT de lancer les pubs
- Toujours ajouter un favicon dès le départ
- Configurer Supabase/DB en même temps que le déploiement Vercel
- Ajouter contrainte UNIQUE sur les champs email/phone des waitlists
- Valider les inputs côté serveur (server actions) pas seulement côté client
```
