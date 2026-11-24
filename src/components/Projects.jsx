import { Project } from "../constraints";

function Projects() {
  return (
    <section id="projects" className="border-t border-line py-20">
      <h2 className="font-display text-3xl font-bold tracking-tight md:text-4xl">Projects</h2>
      <div className="mt-12 space-y-16">
        {Project.map((p) => (
          <article key={p.title} className="grid items-start gap-8 md:grid-cols-[1fr_1.1fr]">
            <img src={p.image} alt={`Screenshot of ${p.title}`}
                 onError={(e) => { e.currentTarget.style.display = "none"; }}
                 className="aspect-video w-full rounded-xl border border-line object-cover" />
            <div>
              <h3 className="font-display text-2xl font-bold tracking-tight">{p.title}</h3>
              <p className="mt-3 max-w-prose leading-relaxed text-fg/75">{p.description}</p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {p.technologies.map((t) => (
                  <li key={t} className="rounded-full border border-line px-3 py-1 text-sm text-muted">{t}</li>
                ))}
              </ul>
              {(p.Link || p.Github) && (
                <div className="mt-6 flex gap-5 text-sm font-medium">
                  {p.Link && (
                    <a href={p.Link} target="_blank" rel="noopener noreferrer"
                       className="text-accent underline underline-offset-4">View live site</a>
                  )}
                  {p.Github && (
                    <a href={p.Github} target="_blank" rel="noopener noreferrer"
                       className="underline underline-offset-4 hover:text-accent">View code</a>
                  )}
                </div>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;