import { projects } from "../content";

export function Projects() {
  return (
    <section id="projects" className="py-24 -mx-8 md:-mx-16 px-8 md:px-16 bg-lilac/10 border-y border-lilac/20">
      <h2 className="font-sans text-xs font-medium uppercase tracking-[0.3em] text-accent mb-16">
        {projects.heading}
      </h2>
      <ul className="grid md:grid-cols-2 gap-6">
        {projects.items.map((p, i) => (
          <li
            key={i}
            className="group bg-paper border border-lilac/25 p-10 hover:border-accent transition-colors duration-300"
          >
            <span className="font-sans text-xs font-medium uppercase tracking-[0.2em] text-lilac">
              {p.year}
            </span>
            <h3 className="font-serif text-2xl md:text-3xl font-light leading-tight mt-4 mb-5 group-hover:text-accent transition-colors duration-300">
              {p.title}
            </h3>
            <p className="font-sans text-sm text-ink/60 leading-relaxed mb-8">{p.summary}</p>
            {p.link && (
              <a
                href={p.link.href}
                className="font-sans text-xs font-medium uppercase tracking-[0.2em] text-accent/60 hover:text-accent transition-colors"
              >
                {p.link.label} →
              </a>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}
