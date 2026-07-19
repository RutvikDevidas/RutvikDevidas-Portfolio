import { GraduationCap } from 'lucide-react';
import { qualifications } from '../data';
import Reveal from './Reveal';

export default function Qualification() {
  return (
    <section className="section-pad bg-[#070707] py-16 text-white">
      <div className="container-xl">
        <Reveal>
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-sun">Qualification</p>
          <h2 className="mt-3 text-3xl font-extrabold sm:text-5xl">Education Timeline</h2>
        </Reveal>

        <div className="relative mt-12 grid gap-7 lg:ml-8">
          <div className="absolute left-5 top-0 hidden h-full w-px bg-white/10 lg:block" />
          {qualifications.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.08}>
              <div className="relative lg:pl-16">
                <div className="absolute left-0 top-7 hidden h-10 w-10 place-items-center rounded-full bg-sun text-ink shadow-soft lg:grid">
                  <GraduationCap size={20} />
                </div>
                <article className="rounded-3xl border border-white/10 bg-white/[0.06] p-6 shadow-soft transition hover:-translate-y-1 hover:border-sun">
                  <h3 className="text-xl font-extrabold">{item.title}</h3>
                  <p className="mt-3 font-semibold text-white/78">{item.board}</p>
                  <p className="mt-1 text-white/60">{item.school}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {item.details.map((detail) => (
                      <span key={detail} className="rounded-full bg-black px-4 py-2 text-sm font-semibold text-white">
                        {detail}
                      </span>
                    ))}
                  </div>
                </article>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
