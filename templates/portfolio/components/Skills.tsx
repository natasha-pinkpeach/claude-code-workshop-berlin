import { skills } from "../content";

export function Skills() {
  return (
    <section id="skills" className="py-24 border-t border-ink/10">
      <div className="grid md:grid-cols-[180px_1fr] gap-16">
        <h2 className="font-sans text-xs font-medium uppercase tracking-[0.3em] text-accent pt-1">
          {skills.heading}
        </h2>
        <div className="space-y-10">
          {skills.groups.map((group, i) => (
            <div key={i}>
              <p className="font-sans text-xs font-medium uppercase tracking-[0.25em] text-ink/35 mb-4">
                {group.label}
              </p>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item, j) => (
                  <span
                    key={j}
                    className="font-sans px-5 py-2 text-sm border border-ink/15 text-ink/70 hover:border-accent hover:text-accent transition-colors duration-200 cursor-default"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
