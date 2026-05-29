import { hero } from "../content";

export function Hero() {
  return (
    <section className="bg-blush min-h-screen flex flex-col justify-end px-8 md:px-16 pb-20 pt-32 -mx-8 md:-mx-16">
      <p className="font-sans text-xs font-medium uppercase tracking-[0.3em] text-accent mb-6">
        {hero.name} · {hero.role} · {hero.location}
      </p>
      <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl font-light leading-[0.95] tracking-tight mb-12 max-w-5xl text-ink">
        {hero.title}
      </h1>
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-10">
        <p className="font-sans text-lg md:text-xl text-ink/60 leading-relaxed max-w-lg font-light">
          {hero.headline}
        </p>
        <div className="flex flex-wrap gap-4 shrink-0">
          <a
            href={hero.ctaPrimary.href}
            className="inline-block px-8 py-4 bg-ink text-paper font-sans text-xs font-medium uppercase tracking-[0.2em] hover:opacity-75 transition"
          >
            {hero.ctaPrimary.label}
          </a>
          <a
            href={hero.ctaSecondary.href}
            className="inline-block px-8 py-4 border border-ink/30 font-sans text-xs font-medium uppercase tracking-[0.2em] hover:bg-ink/5 transition"
          >
            {hero.ctaSecondary.label}
          </a>
        </div>
      </div>
    </section>
  );
}
