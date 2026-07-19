import { Github, Instagram, Linkedin } from 'lucide-react';
import { socials } from '../data';

export default function Footer() {
  return (
    <footer className="section-pad border-t border-white/10 bg-ink text-white">
      <div className="container-xl flex flex-col gap-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-logo text-xl font-bold">Rutvik Devidas</p>
          <p className="mt-1 text-sm text-white/60">Frontend Developer</p>
          <p className="mt-4 text-sm text-white/50">© 2026 All Rights Reserved</p>
        </div>
        <div className="flex gap-3">
          {[
            { icon: Github, href: socials.github, label: 'GitHub' },
            { icon: Linkedin, href: socials.linkedin, label: 'LinkedIn' },
            { icon: Instagram, href: socials.instagram, label: 'Instagram' },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className="focus-ring rounded-full border border-white/15 p-3 text-white/80 transition hover:border-sun hover:text-sun"
            >
              <Icon size={20} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
