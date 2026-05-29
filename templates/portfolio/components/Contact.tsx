import { contact } from "../content";

export function Contact() {
  return (
    <section id="contact" className="py-24 -mx-8 md:-mx-16 px-8 md:px-16 bg-tealdeep text-paper">
      <h2 className="font-sans text-xs font-medium uppercase tracking-[0.3em] text-mandarin mb-12">
        {contact.heading}
      </h2>
      <p className="font-serif text-3xl md:text-5xl font-light leading-relaxed text-paper/85 max-w-3xl mb-14">
        {contact.body}
      </p>
      <div className="flex flex-col md:flex-row md:items-center gap-8">
        <a
          href={`mailto:${contact.email}`}
          className="font-sans text-sm font-medium uppercase tracking-[0.2em] border-b border-paper/30 pb-1 hover:border-mandarin hover:text-mandarin transition-colors"
        >
          {contact.email}
        </a>
        <ul className="flex flex-wrap gap-8">
          {contact.socials.map((s, i) => (
            <li key={i}>
              <a
                href={s.href}
                className="font-sans text-xs font-medium uppercase tracking-[0.2em] text-paper/40 hover:text-mandarin transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                {s.label} →
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
