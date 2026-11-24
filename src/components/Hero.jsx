import { motion } from "motion/react";
import { HERO_CONTENT } from "../constraints";
import profile from "../assets/profile.jpg";

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Hero() {
  return (
    <section id="top" className="grid items-center gap-14 py-16 lg:grid-cols-[1.3fr_1fr] lg:py-28">
      <motion.div
        initial="hidden"
        animate="show"
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}
      >
        <motion.p variants={item} className="mb-4 text-muted">Full-stack developer · New Delhi</motion.p>
        <motion.h1 variants={item}
          className="font-display text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl">
          I build web apps from database to interface.
        </motion.h1>
        <motion.p variants={item} className="mt-6 max-w-xl text-lg leading-relaxed text-fg/75">
          {HERO_CONTENT}
        </motion.p>
        <motion.div variants={item} className="mt-8 flex flex-wrap gap-3">
          <a href="#projects"
             className="rounded-full bg-accent px-6 py-3 font-medium text-ink transition-transform hover:-translate-y-0.5">
            View projects
          </a>
          <a href="/final_Resume (1).pdf" target="_blank" rel="noopener noreferrer"
             className="rounded-full border border-line px-6 py-3 font-medium transition-colors hover:border-accent hover:text-accent">
            Download resume
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.7 }}
        className="relative mx-auto w-full max-w-sm"
      >
        <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-2xl border border-accent/40" aria-hidden="true" />
        <img src={profile} alt="Portrait of Deepak"
             className="relative aspect-[4/5] w-full rounded-2xl border border-line object-cover" />
      </motion.div>
    </section>
  );
}