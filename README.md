# Three Star Handyman Services — Website

Single-page marketing site for Three Star Handyman Services (Daniel).
Built with **Next.js 14 (App Router)**, **Tailwind CSS** and **Framer Motion**.

## Run it

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
npm start          # serve the production build
```

## Design system

Strictly three colours, defined in `tailwind.config.js`:

| Token | Hex | Used for |
| --- | --- | --- |
| `navy` | `#0B1F3A` (`navy-dark` `#061529`, `navy-light` `#14315A`) | Dark sections, headings, body text |
| `gold` | `#C9A063` (`gold-light` `#E3C88F`, `gold-dark` `#A8834A`, `gold-sand` `#F7F2E8`) | Buttons, icons, accents, tinted sections |
| white | `#FFFFFF` | Page/card backgrounds, text on navy |

Buttons are gold with **navy** text (not white) so contrast stays accessible.
Fonts load through `next/font`: **Great Vibes** for the "Three Star" wordmark, **Inter** for everything else.

## Structure

```
app/
  layout.js          fonts, metadata, JSON-LD, header/footer shell
  page.js            section order
  globals.css        Tailwind layers + .btn / .section / .heading component classes
components/
  TopBar.jsx         navy contact strip (Daniel · phone · email · ABN)
  Navbar.jsx         sticky header, scroll state, animated mobile drawer
  Hero.jsx           split hero, staggered text, image + floating card
  ValueProps.jsx     insured / prompt / best price  (#why-us)
  Services.jsx       12-card grid                    (#services)
  ServiceCard.jsx    image zoom + lift on hover
  Process.jsx        4 steps                         (#process)
  QuoteSection.jsx   contact details + quote form    (#quote)
  Footer.jsx         sitemap, contact, ABN
  MobileCallBar.jsx  sticky call/quote bar on phones
  Reveal.jsx         scroll fade-up + stagger variants
  SmartImage.jsx     next/image with a branded fallback tile
  Logo.jsx, Icons.jsx
lib/
  site.js            business details in one place
  services.js        the 12 services + photos
```

## Editing content

- **Phone, email, ABN, hours, nav links** → `lib/site.js`
- **Services (title, blurb, photo)** → `lib/services.js`

## Photos

Card and hero photos are Unsplash placeholders (all URLs verified to load). Replace them with
Daniel's real job photos for the live site:

1. Drop files into `public/images/` (e.g. `public/images/fencing.jpg`).
2. Point `image` in `lib/services.js` at `/images/fencing.jpg`.

If a remote image ever fails, `SmartImage` renders an on-brand navy/gold tile instead of a broken image.

## Quote form

`QuoteSection.jsx` has no backend — it opens the visitor's mail app with a pre-filled email to
`nigedaniel8@gmail.com`. To capture submissions server-side instead, replace `handleSubmit` with a
`fetch('/api/quote', …)` call (Resend, Formspree, or a Next.js route handler).

## Accessibility & motion

- Skip-to-content link, labelled form fields, `aria-expanded` on the menu button.
- `MotionProvider` sets `reducedMotion="user"`, so all Framer Motion animations respect the
  visitor's OS "reduce motion" setting.

## Deploy

Works as-is on Vercel: push the repo, import it, no environment variables required.
`next.config.mjs` already allowlists `images.unsplash.com` for `next/image`.
