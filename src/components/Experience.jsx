import { useState } from "react";
import { Experience as jobs } from "../constraints";

function Logo({ src, name }) {
  const [failed, setFailed] = useState(false);
  const initials = name.split(" ").slice(0, 2).map((w) => w[0]).join("");
  if (failed) {
    return (
      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-line bg-panel font-display text-lg font-bold text-accent">
        {initials}
      </div>
    );
  }
  return (
    <img src={src} alt={`${name} logo`} onError={() => setFailed(true)}
         className="h-14 w-14 shrink-0 rounded-xl border border-line bg-white object-contain p-1.5" />
  );
}

export default function Experience() {
  return (
    <section id="experience" className="grid gap-8 border-t border-line py-20 lg:grid-cols-[1fr_2fr]">
      <h2 className="font-display text-3xl font-bold tracking-tight md:text-4xl">Experience</h2>
      <div className="space-y-10">
        {jobs.map((job) => (
          <article key={job.company} className="flex gap-5">
            <Logo src={job.logo} name={job.company} />
            <div>
              <h3 className="font-display text-xl font-bold tracking-tight">{job.role}</h3>
              <p className="mt-1 text-fg/90">{job.company}</p>
              <p className="mt-1 text-sm text-muted">{job.period} · {job.location}</p>
              <ul className="mt-4 max-w-xl list-disc space-y-2 pl-5 leading-relaxed text-fg/75 marker:text-accent">
                {job.points.map((pt) => <li key={pt}>{pt}</li>)}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}