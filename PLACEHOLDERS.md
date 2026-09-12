# Placeholders to replace before deploying

Everything listed here is invented. None of it is true about your business.
Shipping it as-is means publishing false claims about clients and results.

Most of it lives in one file: `src/data/site.ts`.

## 1. Studio identity - `src/data/site.ts`

| Field | Current value | Notes |
|---|---|---|
| `name` | Arcflow | **Chosen.** Check the domain and handles are actually free before launch. |
| `legalName` | Arcflow B.V. | Footer copyright line. Confirm the real legal entity and suffix. |
| `email` | studio@arcflow.co | Domain not registered yet, so this address does not exist. |
| `phone` / `phoneHref` | +31 20 712 3480 | Not a real number. |
| `address` | Keizersgracht 241, Amsterdam | Not a real address. Footer also hardcodes "AMSTERDAM". |
| `tagline` | Websites, custom software... | Rewrite in your own words. |

Also update:
- `astro.config.mjs` - the `site` field is `https://example.com`. Set your real domain or the sitemap and canonical URLs will be wrong.
- `public/favicon.svg` - generic mark, replace with your logo.

## 2. Client work - `src/data/site.ts`, `projects` array

**All four companies are invented, along with every number attached to them.**

- HARTVIG LOGISTICS - "9 mo", "312 staff trained", "4.7 hrs saved per shift"
- VELDKAMP INSTRUMENTS - "84 engineers", "0 paper job sheets", "11 min saved per job"
- BREKKE FINANCE - "0 core changes", "3.1k clients", "2 wk to first slice"
- SUNDBY FOODS - "3 plants", "11 mo to cutover", "6.2% less batch waste"

Replace with real clients, or delete the array and remove the Work page and
the home page work section until you have case studies. An invented client
list is the fastest way to lose a prospect who checks.

If you use real clients, get written permission before naming them.

## 3. Studio statistics - `src/data/site.ts`, `stats` array

| Value | Claim |
|---|---|
| 61 | Systems shipped |
| 14 | People in the studio |
| 2016 | Founded |
| 7 yr | Longest running client |

All invented.

## 4. Photography

Every image is a hotlinked Unsplash URL. They are placeholders and can change
or disappear without warning.

| Where | What it shows |
|---|---|
| `src/data/site.ts` projects | Four project images |
| `src/pages/index.astro` process | Dark abstract background |
| `src/pages/studio.astro` | Team around a desk (not your team) |

Before launch: download and self-host in `public/`, or replace with photos of
your actual team and work. The studio page image shows people who do not work
for you.

## 5. Contact form has no backend

`src/components/ContactForm.astro` posts to `#`. Submitting shows a note
saying it is not connected. Wire it up to one of:

- Formspree - change `action` to your form URL
- Netlify Forms - add `netlify` and `name` attributes to the `<form>`
- Web3Forms - add a hidden `access_key` input
- Your own endpoint

Then delete the guard script at the bottom of that file.

## 6. Copy to review

- Home hero: "WE BUILD / THE SYSTEMS / YOU RUN ON."
- Studio page: four paragraphs written in a voice you may not want.
- Contact page: the "WHAT HAPPENS NEXT" list promises a two working day reply.
  Make sure you can honour that.
- Every page promises "an engineer replies within two working days".

---

## About the effects on this site

This build carries three deliberate interaction effects. They are documented
here so you can find them if you ever want them gone.

**Spotlight text reveal** (`.spot` / `.spot-line` in `src/styles/global.css`)
Volt colour appears only inside a radius around the pointer, painted into the
glyphs with `background-clip: text`. Body copy is split into one span per
rendered line by JS in `src/layouts/Base.astro`, because without the split a
circle sitting in the blank space beside a short line still lights glyphs on
the line below. The splitter re-runs on resize and after webfonts load.

*Note:* the splitter rewrites `textContent`, which destroys inline markup.
Only add `.tint` to paragraphs that are plain text.

**Trailing cursor dot** (`.cursor-dot`)
A small volt dot follows the pointer. The native cursor is deliberately kept
visible underneath. Fine pointers only, disabled under reduced motion.

**Service row streak** (`.svc::before`)
A slanted volt band crosses each service row once on hover, then it is gone.

All three are disabled under `prefers-reduced-motion`.

---

## Quick checklist

- [x] Studio name (Arcflow) - verify domain and handles are free
- [ ] Email, phone, address in `src/data/site.ts`
- [ ] `site` domain in `astro.config.mjs`
- [ ] Favicon
- [ ] Real clients in `projects`, or remove the Work page
- [ ] Real numbers in `stats`, or remove the stat bands
- [ ] Self-hosted or real photography
- [ ] Contact form connected to a backend
- [ ] All copy read once, out loud
