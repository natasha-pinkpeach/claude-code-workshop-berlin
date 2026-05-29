# Landing page template

A polished small-business landing page. Built with Next.js + Tailwind.

## Architecture

Content and layout are kept separate. Most edits happen in one file: `content.ts`.

```
content.ts              ← all editable text lives here
components/             ← one file per page section
  Nav.tsx
  Hero.tsx
  Services.tsx
  HowItWorks.tsx
  Benefits.tsx
  Testimonials.tsx
  FAQ.tsx
  Contact.tsx
app/
  page.tsx              ← composes the sections in order
  layout.tsx            ← HTML wrapper, page title from content.ts
  globals.css           ← base styles
tailwind.config.ts      ← colors and fonts
```

## Run locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000 (or click the auto-forwarded port in Codespaces).

## What to ask Claude

Common edits — Claude will edit `content.ts`:

- *"Change the business name to 'Schiller Architects'."*
- *"Replace the three services with: residential design, commercial, restoration."*
- *"Add a fifth FAQ about international clients."*
- *"Remove the How it works section."*
- *"Update the address to Charlottenburg."*

Layout / design tweaks — Claude will edit `components/` or `tailwind.config.ts`:

- *"Make the hero darker with white text."*
- *"Switch the accent color to a deep forest green."*
- *"Show services as a vertical list instead of a grid."*
- *"Use a serif font for all headings."*

## Deploy to Vercel

```bash
vercel login
vercel --prod
```

Follow the prompts — accept the defaults. You'll get a URL like `your-business.vercel.app`.
