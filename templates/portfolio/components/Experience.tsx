import { experience } from "../content";

export function Experience() {
  return (
    <section id="experience" className="py-24 border-t border-ink/10">
      <div className="grid md:grid-cols-[180px_1fr] gap-16">
        <h2 className="font-sans text-xs font-medium uppercase tracking-[0.3em] text-accent pt-1">
          {experience.heading}
        </h2>
        <ol className="space-y-0 divide-y divide-ink/10">
          {experience.roles.map((role, i) => (
            <li key={i} className="py-10 first:pt-0">
              <div className="flex items-baseline justify-between gap-4 mb-2">
                <h3 className="font-serif text-xl font-light">{role.title}</h3>
                <span className="font-sans text-xs text-ink/35 tracking-wide shrink-0">
                  {role.period}
                </span>
              </div>
              <p className="font-sans text-xs font-medium uppercase tracking-[0.2em] text-accent mb-4">
                {role.company}
              </p>
              <p className="font-sans text-sm text-ink/60 leading-relaxed max-w-xl">
                {role.summary}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
