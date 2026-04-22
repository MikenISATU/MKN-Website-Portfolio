'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion } from 'motion/react';

type NavItem = {
  label: string;
  href: string;
};

type NavbarProps = {
  items?: NavItem[];
  ctaHref?: string;
};

const defaultItems: NavItem[] = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

export function Navbar({ items = defaultItems, ctaHref = '#contact' }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <motion.header
      initial={{ y: -72, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 120, damping: 20 }}
      className="sticky top-0 z-50 border-b border-white/10 bg-neutral-950/80 backdrop-blur-2xl"
    >
      <div className="section-shell flex items-center justify-between gap-6 py-4">
        <a href="#top" className="text-sm font-semibold tracking-[0.3em] text-white">
          MKN
        </a>

        <nav className="hidden flex-1 items-center justify-start gap-6 lg:flex">
          {items.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-neutral-300 transition hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden shrink-0 lg:block">
          <a
            href={ctaHref}
            className="rounded-full border border-brand-300/30 bg-brand-400/10 px-4 py-2 text-sm text-brand-200 transition hover:bg-brand-400/20"
          >
            Let's Talk
          </a>
        </div>

        <button
          type="button"
          aria-expanded={isOpen}
          aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
          onClick={() => setIsOpen((open) => !open)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:bg-white/10 lg:hidden"
        >
          {isOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {isOpen ? (
        <div className="border-t border-white/10 bg-neutral-950/95 lg:hidden">
          <nav className="section-shell flex flex-col gap-2 py-4">
            {items.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className="rounded-2xl px-4 py-3 text-sm text-neutral-200 transition hover:bg-white/5 hover:text-white"
              >
                {item.label}
              </a>
            ))}
            <a
              href={ctaHref}
              onClick={closeMenu}
              className="mt-2 rounded-2xl border border-brand-300/30 bg-brand-400/10 px-4 py-3 text-sm text-brand-200 transition hover:bg-brand-400/20"
            >
              Let's Talk
            </a>
          </nav>
        </div>
      ) : null}
    </motion.header>
  );
}
