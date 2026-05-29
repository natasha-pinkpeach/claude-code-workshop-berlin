import { testimonials } from "../content";

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 -mx-8 md:-mx-16 px-8 md:px-16 bg-accent text-paper">
      <h2 className="font-sans text-xs font-medium uppercase tracking-[0.3em] text-mandarin mb-16">
        {testimonials.heading}
      </h2>
      <div className="grid md:grid-cols-2 gap-16">
        {testimonials.quotes.map((q, i) => (
          <figure key={i}>
            <blockquote className="font-serif text-2xl md:text-3xl font-light leading-relaxed text-paper/90 mb-8">
              &ldquo;{q.text}&rdquo;
            </blockquote>
            <figcaption className="font-sans text-xs font-medium uppercase tracking-[0.25em] text-paper/50">
              {q.author} · {q.role}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
