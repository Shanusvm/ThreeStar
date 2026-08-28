'use client';

import { motion } from 'framer-motion';
import SmartImage from './SmartImage';
import { ArrowIcon, PhoneIcon, StarIcon } from './Icons';
import { site } from '@/lib/site';

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.11, delayChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy">
      {/* soft gold glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-40 h-[34rem] w-[34rem] rounded-full bg-gold/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-52 -left-32 h-[28rem] w-[28rem] rounded-full bg-gold/5 blur-3xl"
      />

      <div className="container relative grid items-center gap-14 py-20 md:py-28 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.div variants={item} className="mb-6 flex items-center gap-3">
            <span className="flex items-center gap-1 text-gold">
              <StarIcon className="h-4 w-4" />
              <StarIcon className="h-4 w-4" />
              <StarIcon className="h-4 w-4" />
            </span>
            <span className="eyebrow-light">{site.tagline}</span>
          </motion.div>

          <motion.h1
            variants={item}
            className="text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-[3.75rem]"
          >
            Premium Handyman
            <span className="block text-gold">Solutions</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-xl text-lg leading-relaxed text-white/70"
          >
            Your Project, Our Priority. Fully Insured &amp; Licensed.
          </motion.p>

          <motion.div variants={item} className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a href="#quote" className="btn-gold group">
              Get a Free Quote
              <ArrowIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a href={site.phoneHref} className="btn-outline">
              <PhoneIcon className="h-4 w-4" />
              {site.phone}
            </a>
          </motion.div>

          <motion.dl
            variants={item}
            className="mt-14 grid max-w-lg grid-cols-3 gap-6 border-t border-white/10 pt-8"
          >
            {[
              { value: '12+', label: 'Services offered' },
              { value: '100%', label: 'Insured & licensed' },
              { value: 'Free', label: 'On-site quotes' },
            ].map((stat) => (
              <div key={stat.label}>
                <dt className="text-2xl font-bold text-gold sm:text-3xl">{stat.value}</dt>
                <dd className="mt-1 text-xs leading-snug text-white/55">{stat.label}</dd>
              </div>
            ))}
          </motion.dl>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="group relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] border border-white/10 shadow-card sm:aspect-[5/5]">
            <SmartImage
              src="https://images.unsplash.com/photo-1646640381839-02748ae8ddf0?auto=format&fit=crop&w=1100&q=80"
              alt="Tradesman using a cordless drill while working on a home exterior"
              sizes="(max-width: 1024px) 100vw, 45vw"
              priority
              fallbackLabel="Three Star Handyman"
              className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-105"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-navy-dark/70 via-navy/10 to-transparent"
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.65 }}
            className="absolute -bottom-6 left-4 right-4 rounded-2xl bg-white p-5 shadow-card sm:left-auto sm:-right-4 sm:w-64"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-dark">
              Free Quotation
            </p>
            <p className="mt-2 text-sm leading-snug text-navy/75">
              Small repairs to full extensions — one trusted tradesman, start to finish.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
