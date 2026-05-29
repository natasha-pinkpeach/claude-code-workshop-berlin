# Landing page template

The user is editing this template to build a landing page for their small business.

## Where things live (this matters)

This project is structured to keep **content separate from layout**, so most edits happen in one file.

- **`content.ts`** — all editable text (business name, hero, services, how-it-works, benefits, testimonials, FAQ, contact). **Edit here first for any text change.**
- **`components/`** — one file per page section. Edit these when changing how a section *looks* or *behaves*, not what it says.
  - `Nav.tsx` — sticky header with logo + nav links + CTA button
  - `Hero.tsx` — eyebrow, headline, sub-headline, primary + secondary CTAs
  - `Services.tsx` — 3-card services grid
  - `HowItWorks.tsx` — numbered step-by-step
  - `Benefits.tsx` — "Why us" bullet list
  - `Testimonials.tsx` — customer pull quotes
  - `FAQ.tsx` — questions + answers
  - `Contact.tsx` — email, phone, hours, address
- **`app/page.tsx`** — the page composition (which sections appear, in what order)
- **`app/layout.tsx`** — site-wide HTML wrapper (reads page title from `content.ts`)
- **`tailwind.config.ts`** — colors and fonts
- **`app/globals.css`** — base styles

## Rules for making changes

- **Text/content edit?** → edit `content.ts`, never the components.
- **New section?** → create a new component in `components/`, import it into `app/page.tsx`, add corresponding data to `content.ts`.
- **Visual / layout change to an existing section?** → edit the matching `components/[Section].tsx`.
- **Color or font change?** → edit `tailwind.config.ts`. Avoid hardcoded hex values in components.
- **Remove a section?** → remove its `<Component />` line from `app/page.tsx`. Optionally also remove its export from `content.ts`. **Don't delete the component file** unless explicitly asked.
- **Reorder sections?** → reorder the `<Component />` lines in `app/page.tsx`.

## After each change

Remind the user to check the preview tab — Next.js auto-reloads, so they'll see the change immediately. Suggest a `git commit` after meaningful changes.

## Things to avoid

- Don't add new packages without asking.
- Don't restructure the file layout — non-technical users need stable mental models.
- Don't write inline styles. Use Tailwind utility classes.
- Don't hardcode colors directly in components — use the named Tailwind colors from `tailwind.config.ts` (`accent`, `ink`, `paper`, `muted`).
