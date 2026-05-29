import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { Experience } from "../components/Experience";
import { Projects } from "../components/Projects";
import { Skills } from "../components/Skills";
import { Testimonials } from "../components/Testimonials";
import { Contact } from "../components/Contact";

export default function Home() {
  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-paper/90 backdrop-blur-sm border-b border-ink/10">
        <div className="mx-auto max-w-5xl px-8 md:px-16 h-14 flex items-center justify-between">
          <span className="font-sans text-xs font-medium uppercase tracking-[0.2em]">
            Natalia Poshivailo
          </span>
          <nav className="hidden md:flex gap-8">
            {["About", "Experience", "Projects", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="font-sans text-xs font-medium uppercase tracking-[0.15em] text-ink/45 hover:text-ink transition-colors"
              >
                {item}
              </a>
            ))}
          </nav>
        </div>
      </header>
      <main className="mx-auto max-w-5xl px-8 md:px-16">
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Skills />
        <Testimonials />
        <Contact />
        <footer className="py-8 border-t border-ink/10 flex justify-between items-center font-sans text-xs font-medium uppercase tracking-[0.15em] text-ink/25">
          <span>No One Left Behind · Berlin · 2026</span>
          <span>Made with Claude</span>
        </footer>
      </main>
    </>
  );
}
