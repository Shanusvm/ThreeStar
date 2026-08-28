'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion';
import Logo from './Logo';
import { ArrowIcon, CloseIcon, MailIcon, MenuIcon, PhoneIcon } from './Icons';
import { nav, site } from '@/lib/site';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 26, restDelta: 0.001 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll while the full-screen menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  // Escape closes the menu.
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'border-b border-navy/8 bg-white/75 shadow-[0_8px_30px_-18px_rgba(11,31,58,0.45)] backdrop-blur-xl'
            : 'border-b border-transparent bg-white'
        }`}
      >
        <div className="container flex items-center justify-between py-3 sm:py-4">
          <a href="#main" className="shrink-0" aria-label={site.name}>
            <Logo size="sm" className="sm:hidden" />
            <Logo size="md" className="hidden sm:inline-flex" />
          </a>

          <nav className="hidden items-center gap-9 lg:flex" aria-label="Primary">
            {nav.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="group relative text-sm font-medium text-navy/75 transition-colors hover:text-navy"
              >
                {link.label}
                <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-gradient-to-r from-gold to-gold-light transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2.5">
            <a
              href={site.phoneHref}
              className="hidden items-center gap-2 text-sm font-semibold text-navy transition-colors hover:text-gold-dark md:inline-flex lg:hidden xl:inline-flex"
            >
              <PhoneIcon className="h-4 w-4 text-gold-dark" />
              {site.phone}
            </a>
            <a href="#quote" className="btn-gold hidden px-6 py-3 sm:inline-flex">
              Request a Quote
            </a>
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              aria-expanded={open}
              className="rounded-full border border-navy/12 p-3 text-navy transition-colors hover:border-gold hover:text-gold-dark active:scale-95 lg:hidden"
            >
              <MenuIcon className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* reading progress hairline */}
        <motion.div
          aria-hidden="true"
          style={{ scaleX: progress }}
          className="absolute inset-x-0 bottom-0 h-[2px] origin-left bg-gradient-to-r from-gold via-gold-light to-gold"
        />
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            key="fullscreen-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grain fixed inset-0 z-[60] flex flex-col bg-navy lg:hidden"
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-gold/10 blur-[90px]"
            />

            <div className="container flex items-center justify-between py-3 sm:py-4">
              <Logo tone="light" size="sm" />
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="rounded-full border border-white/15 p-3 text-white transition-colors hover:border-gold hover:text-gold active:scale-95"
              >
                <CloseIcon className="h-5 w-5" />
              </button>
            </div>

            <nav
              className="container relative flex flex-1 flex-col justify-center"
              aria-label="Mobile"
            >
              {nav.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 + i * 0.07, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="group flex items-center justify-between border-b border-white/10 py-5"
                >
                  <span className="text-2xl font-semibold tracking-tight text-white transition-colors group-hover:text-gold-light">
                    {link.label}
                  </span>
                  <ArrowIcon className="h-5 w-5 text-gold transition-transform duration-300 group-hover:translate-x-1" />
                </motion.a>
              ))}
            </nav>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.5 }}
              className="container relative space-y-4 pb-10"
            >
              <a href="#quote" onClick={() => setOpen(false)} className="btn-gold w-full">
                Request a Quote
              </a>
              <div className="flex flex-col gap-3 text-sm text-white/60">
                <a
                  href={site.phoneHref}
                  className="inline-flex items-center gap-3 transition-colors hover:text-gold-light"
                >
                  <PhoneIcon className="h-4 w-4 text-gold" />
                  {site.phone}
                </a>
                <a
                  href={`mailto:${site.email}`}
                  className="inline-flex items-center gap-3 break-all transition-colors hover:text-gold-light"
                >
                  <MailIcon className="h-4 w-4 shrink-0 text-gold" />
                  {site.email}
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
