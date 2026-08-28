'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Logo from './Logo';
import { CloseIcon, MenuIcon } from './Icons';
import { nav, site } from '@/lib/site';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll while the mobile drawer is open.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? 'border-navy/10 bg-white/90 shadow-soft backdrop-blur-md'
          : 'border-transparent bg-white'
      }`}
    >
      <div className="container flex items-center justify-between py-3">
        <a href="#main" className="shrink-0" aria-label={site.name}>
          <Logo size="sm" className="sm:hidden" />
          <Logo size="md" className="hidden sm:inline-flex" />
        </a>

        <nav className="hidden items-center gap-9 lg:flex" aria-label="Primary">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="group relative text-sm font-medium text-navy/80 transition-colors hover:text-navy"
            >
              {item.label}
              <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-gold transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a href="#quote" className="btn-gold hidden sm:inline-flex">
            Request a Quote
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            className="rounded-full border border-navy/15 p-2.5 text-navy transition-colors hover:border-gold hover:text-gold-dark lg:hidden"
          >
            {open ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            key="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-navy/10 bg-white lg:hidden"
            aria-label="Mobile"
          >
            <div className="container flex flex-col gap-1 py-5">
              {nav.map((item, i) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + i * 0.06, duration: 0.35 }}
                  className="rounded-xl px-3 py-3 text-base font-medium text-navy/85 transition-colors hover:bg-gold-sand hover:text-navy"
                >
                  {item.label}
                </motion.a>
              ))}
              <a
                href="#quote"
                onClick={() => setOpen(false)}
                className="btn-gold mt-3 w-full"
              >
                Request a Quote
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
