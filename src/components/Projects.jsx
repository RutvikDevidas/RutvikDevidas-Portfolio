import { Github } from 'lucide-react';
import { motion } from 'framer-motion';
import { projects } from '../data';
import Reveal from './Reveal';

export default function Projects() {
  return (
    <section className="section-pad bg-[#070707] py-16 text-white sm:py-20">
      <div className="container-xl">
        <Reveal>
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-sun">Projects</p>
          <h2 className="mt-3 text-3xl font-extrabold sm:text-5xl">Selected Work</h2>
        </Reveal>
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <Reveal key={project.name} delay={index * 0.05}>
              <motion.article
                whileHover={{ y: -10 }}
                className="group flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.06] shadow-sm transition hover:border-sun hover:shadow-soft"
              >
                <img src={project.image} alt="" className="h-52 w-full object-cover" loading="lazy" />
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-xl font-extrabold">{project.name}</h3>
                  <p className="mt-3 flex-1 leading-7 text-white/62">{project.description}</p>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="focus-ring mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-sun px-5 py-3 font-semibold text-ink transition hover:bg-yellow-300"
                  >
                    <Github size={18} />
                    GitHub
                  </a>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
