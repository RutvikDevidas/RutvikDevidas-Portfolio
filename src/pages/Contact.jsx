import { Github, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import { PageTransition } from '../App';
import ContactForm from '../components/ContactForm';
import Reveal from '../components/Reveal';
import { socials } from '../data';

const mapUrl = 'https://maps.app.goo.gl/bnun4WBkE4ZPBhhDA';
const mapEmbedUrl = 'https://www.google.com/maps?q=15.0078626,74.1647939&z=16&output=embed';

const details = [
  { icon: Mail, label: 'Email', value: 'official.rutvikdevidas@gmail.com', href: 'mailto:official.rutvikdevidas@gmail.com' },
  { icon: Phone, label: 'Phone', value: '+91 95884 10965', href: 'tel:+919588410965' },
  { icon: MapPin, label: 'Location', value: 'Goa, India', href: mapUrl },
  { icon: Instagram, label: 'Instagram', value: 'its._.rutvik', href: socials.instagram },
  { icon: Github, label: 'GitHub', value: 'RutvikDevidas', href: socials.github },
  { icon: Linkedin, label: 'LinkedIn', value: 'rutvikdevidas', href: socials.linkedin },
];

export default function Contact() {
  return (
    <PageTransition>
      <section className="section-pad bg-mesh py-16 text-white sm:py-24">
        <div className="container-xl">
          <Reveal>
            <div className="mb-10 max-w-2xl">
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-sun">Contact</p>
              <h1 className="mt-4 text-4xl font-extrabold tracking-normal sm:text-6xl">Let's Build Something</h1>
            </div>
          </Reveal>

          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
            <Reveal>
              <ContactForm />
            </Reveal>

            <Reveal direction="left">
              <aside className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-6 text-white shadow-soft sm:p-8">
                <h2 className="text-2xl font-extrabold">Contact Information</h2>
                <div className="mt-7 grid gap-4">
                  {details.map(({ icon: Icon, label, value, href }) => (
                    <a
                      key={label}
                      href={href}
                      target={href.startsWith('http') ? '_blank' : undefined}
                      rel={href.startsWith('http') ? 'noreferrer' : undefined}
                      className="focus-ring flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4 transition hover:border-sun"
                    >
                      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-sun text-ink">
                        <Icon size={20} />
                      </span>
                      <span>
                        <span className="block text-sm text-white/55">{label}</span>
                        <span className="break-all font-semibold">{value}</span>
                      </span>
                    </a>
                  ))}
                </div>

                <div className="mt-7 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.05]">
                  <div className="relative aspect-[16/9]">
                    <iframe
                      title="Rutvik Devidas location map"
                      src={mapEmbedUrl}
                      className="h-full w-full border-0 grayscale invert"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      allowFullScreen
                    />
                    <a
                      href={mapUrl}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Open Rutvik Devidas location on Google Maps"
                      className="focus-ring absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-full bg-sun px-4 py-2 text-sm font-bold text-ink shadow-soft transition hover:bg-yellow-300"
                    >
                      <MapPin size={18} />
                      Open Google Maps
                    </a>
                  </div>
                </div>
              </aside>
            </Reveal>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
