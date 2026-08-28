'use client';

import { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import HeroSlider from './HeroSlider';
import { ArrowIcon, PhoneIcon, StarIcon } from './Icons';
import { site } from '@/lib/site';

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] } },
};

const stats = [
  { value: '12+', label: 'Services' },
  { value: '100%', label: 'Insured' },
  { value: 'Free', label: 'Quotes' },
];

export default function Hero() {
  const ref = useRef(null);
  const reduceMotion = useReducedMotion();

  // gentle parallax on the photo as the hero scrolls away
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', reduceMotion ? '0%' : '12%']);

  return (
    <section ref={ref} className="grain relative overflow-hidden bg-navy">
      {/* ambient light */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-40 h-[30rem] w-[30rem] rounded-full bg-gold/12 blur-[100px] sm:-right-40 sm:h-[38rem] sm:w-[38rem]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-56 -left-40 h-[26rem] w-[26rem] rounded-full bg-gold/[0.06] blur-[100px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent"
      />

      <div className="container relative grid items-center gap-9 pb-16 pt-8 sm:gap-14 sm:pb-20 sm:pt-16 lg:grid-cols-[1.05fr_1fr] lg:gap-16 lg:pb-28 lg:pt-24">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="relative z-10 order-2 lg:order-1"
        >
          <motion.div
            variants={item}
            className="glass inline-flex items-center gap-2.5 rounded-full py-2 pl-3 pr-4"
          >
            <span className="flex items-center gap-0.5 text-gold">
              <StarIcon className="h-3 w-3" />
              <StarIcon className="h-3.5 w-3.5" />
              <StarIcon className="h-3 w-3" />
            </span>
            <span className="text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-white/70 sm:text-[0.65rem]">
              {site.tagline}
            </span>
          </motion.div>

          <motion.h1
            variants={item}
            className="mt-7 text-[2.6rem] font-bold leading-[1.04] tracking-[-0.03em] text-white sm:text-6xl lg:text-[4rem]"
          >
            Premium
            <br className="hidden sm:block" /> Handyman
            <span className="block text-gradient-gold">Solutions</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-5 max-w-md text-base leading-relaxed text-white/65 sm:mt-6 sm:text-lg"
          >
            Your Project, Our Priority.
            <span className="block text-white/45">Fully Insured &amp; Licensed.</span>
          </motion.p>

          <motion.div
            variants={item}
            className="mt-9 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:items-center"
          >
            <a href="#quote" className="btn-gold group w-full sm:w-auto">
              Get a Free Quote
              <ArrowIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a href={site.phoneHref} className="btn-outline w-full sm:w-auto">
              <PhoneIcon className="h-4 w-4" />
              {site.phone}
            </a>
          </motion.div>

          <motion.dl
            variants={item}
            className="glass mt-10 grid grid-cols-3 divide-x divide-white/10 rounded-2xl py-5 sm:mt-14 sm:max-w-lg"
          >
            {stats.map((stat) => (
              <div key={stat.label} className="px-3 text-center sm:px-6 sm:text-left">
                <dt className="text-xl font-bold tracking-tight text-gold sm:text-3xl">
                  {stat.value}
                </dt>
                <dd className="mt-1 text-[0.62rem] uppercase tracking-[0.16em] text-white/45 sm:text-[0.68rem]">
                  {stat.label}
                </dd>
              </div>
            ))}
          </motion.dl>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative order-1 lg:order-2"
        >
          {/* gold hairline frame sitting behind the photo */}
          <div
            aria-hidden="true"
            className="absolute -inset-2 rounded-[2.25rem] border border-gold/20 sm:-inset-3"
          />

          <div className="group relative aspect-[4/3] w-full overflow-hidden rounded-[1.75rem] border border-white/10 shadow-[0_40px_80px_-40px_rgba(0,0,0,0.9)] sm:aspect-[5/5] sm:rounded-[2rem]">
            <HeroSlider parallaxY={imageY} />

            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy via-navy/25 to-transparent"
            />

            {/* glass caption sits inside the frame so mobile layout stays tight */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.75 }}
              className="glass absolute inset-x-3 bottom-3 rounded-2xl p-4 sm:inset-x-5 sm:bottom-5 sm:p-5"
            >
              <p className="text-[0.6rem] font-semibold uppercase tracking-[0.24em] text-gold-light">
                Free Quotation
              </p>
              <p className="mt-2 text-[0.82rem] leading-snug text-white/80 sm:text-sm">
                Small repairs to full extensions — one trusted tradesman, start to finish.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
