import { motion } from 'framer-motion';
import { techStack } from '../data';
import Reveal from './Reveal';

export default function TechStack() {
  return (
    <section className="section-pad bg-[#070707] py-16 text-white sm:py-20">
      <div className="container-xl">
        <Reveal>
          <div className="mb-10 max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-sun">Toolkit</p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-normal sm:text-5xl">My Tech Stack</h2>
          </div>
        </Reveal>
        <motion.div
          className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{ visible: { transition: { staggerChildren: 0.045 } } }}
        >
          {techStack.map(({ name, icon: Icon }) => (
            <motion.div
              key={name}
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              whileHover={{ y: -8, scale: 1.06 }}
              className="group grid min-h-32 place-items-center rounded-3xl border border-white/10 bg-white/[0.06] p-4 text-center shadow-sm transition hover:border-sun hover:shadow-soft"
            >
              <Icon className="text-3xl text-white transition group-hover:text-sun" aria-hidden="true" />
              <p className="mt-3 text-sm font-semibold text-white/76">{name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
