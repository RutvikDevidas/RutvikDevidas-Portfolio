import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import { stats } from '../data';
import Reveal from './Reveal';

export default function Hero() {
  return (
    <section className="section-pad relative bg-mesh pb-16 pt-8 text-white sm:pt-14 lg:pb-24">
      <motion.div
        className="absolute left-[8%] top-24 h-16 w-16 rounded-full bg-sun/30 blur-sm"
        animate={{ y: [0, 20, 0], x: [0, 8, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute right-[12%] top-32 h-24 w-24 rounded-full border border-white/10 bg-white/5"
        animate={{ y: [0, -18, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="container-xl grid items-center gap-12 lg:grid-cols-[1.04fr_0.96fr]">
        <Reveal>
          <div className="max-w-3xl">
            <p className="mb-4 text-xl font-semibold text-white/70">Hey,</p>
            <h1 className="text-5xl font-extrabold leading-tight tracking-normal text-white sm:text-6xl lg:text-7xl">
              I'm{' '}
              <span className="text-sun drop-shadow-sm">Rutvik Devidas</span>
            </h1>
            <div className="mt-6 flex flex-wrap gap-3 text-sm font-semibold sm:text-base">
              {['Frontend Developer', 'UI/UX Designer', 'React Developer'].map(
                (role) => (
                  <span
                    key={role}
                    className="rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-white shadow-sm"
                  >
                    {role}
                  </span>
                )
              )}
            </div>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/68">
              A passionate developer who loves building modern websites and
              mobile applications with clean UI and great user experience.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="/rutvikDevidas_cv.pdf"
                download
                className="focus-ring inline-flex items-center justify-center gap-2 rounded-full bg-sun px-6 py-3 font-semibold text-ink shadow-soft transition hover:-translate-y-0.5 hover:bg-yellow-300"
              >
                <Download size={18} />
                Download Resume
              </a>
              <Link
                to="/contact"
                className="focus-ring inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-6 py-3 font-semibold text-white transition hover:-translate-y-0.5 hover:border-sun hover:bg-sun hover:text-ink"
              >
                Contact Me
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </Reveal>

        <Reveal direction="left">
          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute inset-6 rounded-full bg-sun blur-3xl opacity-60" />
            <div className="absolute -left-6 top-8 h-20 w-20 rounded-full bg-white/10 shadow-soft" />
            <div className="absolute -right-4 bottom-16 h-14 w-14 rounded-full bg-sun/90" />
            <motion.div
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="glass relative overflow-hidden rounded-[2rem] p-5 sm:p-6"
            >
              <div className="aspect-square overflow-hidden rounded-full border-8 border-white bg-black shadow-glow">
                <img
                  src="/profile.jpeg"
                  alt="Professional illustration of Rutvik Devidas"
                  className="h-full w-full object-contain"
                  loading="eager"
                />
              </div>
            </motion.div>
          </div>
        </Reveal>
      </div>

      <div className="container-xl mt-14 grid gap-4 sm:grid-cols-3">
        {stats.map(({ label, value, icon: Icon }, index) => (
          <Reveal key={label} delay={index * 0.08}>
            <motion.div
              whileHover={{ y: -8, scale: 1.02 }}
              className="rounded-3xl border border-white/10 bg-white/[0.06] p-6 shadow-soft"
            >
              <Icon className="mb-5 text-sun" size={30} />
              <p className="text-3xl font-extrabold">{value}</p>
              <p className="mt-1 text-sm font-medium text-white/60">{label}</p>
            </motion.div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
