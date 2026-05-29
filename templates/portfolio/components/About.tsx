import { about } from "../content";

export function About() {
  return (
    <section id="about" className="py-24 border-b border-ink/10">
      <div className="grid md:grid-cols-[180px_1fr] gap-16 items-start">
        <h2 className="font-sans text-xs font-medium uppercase tracking-[0.3em] text-accent pt-2">
          {about.heading}
        </h2>
        <div className="space-y-6">
          <p className="font-serif text-3xl md:text-4xl font-light leading-relaxed text-ink">
            {about.paragraphs[0]}
          </p>
          {about.paragraphs.slice(1).map((p, i) => (
            <p key={i} className="font-sans text-base text-ink/60 leading-relaxed">
              {p}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
