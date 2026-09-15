# Studio Piras

Nuovo sito istituzionale di **Studio Piras – Dottore Commercialista · Revisore Legale**.

## Tecnologia

Astro 7, TypeScript, Tailwind CSS 4, Astro Content Collections, generazione statica e compatibilità Vercel. Il sito è monolinguale: l’unica lingua pubblica è italiano (`it-IT`). Non esiste infrastruttura i18n.

## Comandi

```bash
npm install
npm run dev
npm run check
npm run build
npm run preview
```

## Struttura

- `src/pages/` — route pubbliche
- `src/pages/aree-di-attivita/[slug].astro` — genera le sei aree principali
- `src/data/site.ts` — dati istituzionali e contenuti strutturati
- `src/content/approfondimenti/` — articoli Markdown/MDX
- `src/content.config.ts` — Content Collection
- `src/components/`, `src/layouts/`, `src/styles/` — presentazione condivisa

## Aggiungere un Approfondimento

Creare un file `.md` o `.mdx` in `src/content/approfondimenti/` con frontmatter `title`, `description`, `area`, eventuale `pubDate` e `draft`. Finché `draft: true`, l’articolo non viene elencato e non genera una route pubblica.

## Immagini

La prima versione funziona senza fotografie. Aggiungere soltanto fotografie reali dello Studio in `public/images/` o tramite gli strumenti immagine di Astro. Non usare stock come riempitivo e non generare fotografie artificiali di Raffaele Piras.

## Deployment

Build command: `npm run build`  
Output directory: `dist`

Collegare Vercel soltanto dopo revisione. Non modificare DNS e non sostituire il sito Carrd esistente finché la nuova versione non è approvata.

## Dati e TODO

Verificati sul sito pubblico: Via Sicilia 65, 09045 Quartu Sant’Elena (CA); +39 070 861888; sede Milano in Via G.B. Pergolesi 2, 20124; P. IVA 02132430923. L’indirizzo `info@studiopiras.it` è coerente con fonti professionali pubbliche ma deve essere confermato dallo Studio prima della messa in produzione definitiva, poiché il sito Carrd lo protegge tramite offuscamento.

Privacy e Cookie sono state riallineate alla tecnologia effettiva: nessun modulo, newsletter, sistema pubblicitario, Google Analytics, Meta Pixel o mappa incorporata.

Questo repository riguarda esclusivamente Studio Piras. RP Consulting non fa parte del progetto.
