import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Github, Linkedin, Menu, X } from 'lucide-react';
import { socials } from '../data';

const links = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
];

function navClass({ isActive }) {
  return `rounded-full px-4 py-2 text-sm font-semibold transition ${
    isActive
      ? 'bg-sun text-ink'
      : 'text-white/72 hover:bg-white/10 hover:text-white'
  }`;
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 section-pad bg-[#070707]/95 py-4 shadow-[0_16px_40px_rgba(0,0,0,0.35)]">
      <nav className="container-xl glass flex h-16 items-center justify-between rounded-full px-5">
        <NavLink
          to="/"
          className="font-logo text-lg font-bold tracking-normal text-white sm:text-xl"
          onClick={() => setOpen(false)}
          aria-label="Rutvik Devidas home"
        >
          Rutvik Devidas
        </NavLink>

        <div className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <NavLink key={link.path} to={link.path} className={navClass}>
              {link.label}
            </NavLink>
          ))}
          <a
            className="focus-ring rounded-full p-2.5 text-white/80 hover:bg-white/10 hover:text-white"
            href={socials.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
          <a
            className="focus-ring rounded-full p-2.5 text-white/80 hover:bg-white/10 hover:text-white"
            href={socials.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
        </div>

        <button
          className="focus-ring rounded-full p-2 text-white md:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={open}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -14, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -14, scale: 0.98 }}
            className="container-xl glass mt-3 rounded-3xl p-4 md:hidden"
          >
            <div className="grid gap-2">
              {links.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={navClass}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </NavLink>
              ))}
              <div className="mt-2 flex gap-2 border-t border-white/10 pt-3">
                <a
                  className="focus-ring rounded-full p-3 text-white/80 hover:bg-white/10 hover:text-white"
                  href={socials.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                >
                  <Github size={20} />
                </a>
                <a
                  className="focus-ring rounded-full p-3 text-white/80 hover:bg-white/10 hover:text-white"
                  href={socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
