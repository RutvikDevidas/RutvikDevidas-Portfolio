import { PageTransition } from '../App';
import Projects from '../components/Projects';
import Qualification from '../components/Qualification';
import Reveal from '../components/Reveal';
import Skills from '../components/Skills';

export default function About() {
  return (
    <PageTransition>
      <section className="section-pad bg-mesh py-16 text-white sm:py-24">
        <div className="container-xl grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <Reveal>
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-sun">About Me</p>
              <h1 className="mt-4 text-4xl font-extrabold tracking-normal sm:text-6xl">About Me</h1>
            </div>
          </Reveal>
          <Reveal direction="left">
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-6 leading-8 text-white/70 shadow-soft backdrop-blur sm:p-8">
              <p className="text-xl font-semibold text-white">
                I'm Rutvik Devidas, a passionate Frontend Developer and UI Designer from Goa.
              </p>
              <p className="mt-5">
                I enjoy designing clean, responsive and user-friendly websites using modern
                technologies like React, Tailwind CSS and Firebase.
              </p>
              <p className="mt-4">
                I'm always learning new technologies and building projects that solve real-world
                problems.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
      <Qualification />
      <Skills />
      <Projects />
    </PageTransition>
  );
}
