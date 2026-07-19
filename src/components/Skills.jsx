import { motion } from 'framer-motion';
import { skillGroups } from '../data';
import Reveal from './Reveal';

export default function Skills() {
  return (
    <section className="section-pad bg-ink py-16 text-white sm:py-20">
      <div className="container-xl">
        <Reveal>
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-sun">Skills</p>
          <h2 className="mt-3 text-3xl font-extrabold sm:text-5xl">Focused, Practical Tools</h2>
        </Reveal>
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
          {skillGroups.map((group, index) => (
            <Reveal key={group.title} delay={index * 0.06}>
              <div className="h-full rounded-3xl border border-white/10 bg-white/[0.04] p-5">
                <h3 className="mb-5 text-lg font-bold text-sun">{group.title}</h3>
                <div className="flex flex-wrap gap-3">
                  {group.skills.map((skill) => (
                    <motion.span
                      key={skill}
                      whileHover={{ scale: 1.08 }}
                      className="rounded-full border border-sun bg-black px-4 py-2 text-sm font-semibold text-white"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
