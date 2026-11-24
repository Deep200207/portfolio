import { ABOUT_ME } from "../constraints";

function About() {
  return (
    <section id="about" className="grid gap-8 border-t border-line py-20 lg:grid-cols-[1fr_2fr]">
      <h2 className="font-display text-3xl font-bold tracking-tight md:text-4xl">About me</h2>
      <div className="max-w-2xl space-y-5 leading-relaxed text-fg/75">
        {ABOUT_ME.map((p, i) => <p key={i}>{p}</p>)}
      </div>
    </section>
  );
}

export default About;