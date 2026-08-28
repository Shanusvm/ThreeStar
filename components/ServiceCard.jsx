'use client';

import { motion } from 'framer-motion';
import SmartImage from './SmartImage';
import { staggerItem } from './Reveal';
import { ArrowIcon } from './Icons';

export default function ServiceCard({ service, index }) {
  return (
    <motion.article
      variants={staggerItem}
      whileHover={{ y: -8 }}
      transition={{ type: 'spring', stiffness: 240, damping: 20 }}
      className="card group flex h-full flex-col"
    >
      <div className="relative aspect-[16/11] overflow-hidden sm:aspect-[4/3]">
        <SmartImage
          src={service.image}
          alt={service.title}
          sizes="(max-width: 640px) 92vw, (max-width: 1024px) 46vw, 24vw"
          fallbackLabel={service.title}
          className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.08]"
        />

        {/* permanent scrim keeps the numeral legible on any photo */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-navy/75 via-navy/10 to-navy/20"
        />

        <span className="absolute left-4 top-4 font-script text-2xl leading-none text-gold-light drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
          {String(index + 1).padStart(2, '0')}
        </span>

        <div className="shine" />
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="text-[0.98rem] font-semibold leading-snug tracking-tight text-navy sm:text-base">
          {service.title}
        </h3>
        <p className="mt-2.5 flex-1 text-[0.83rem] leading-relaxed text-navy/60 sm:text-sm">
          {service.description}
        </p>

        <span aria-hidden="true" className="my-4 h-px w-full bg-navy/8" />

        <a
          href="#quote"
          className="inline-flex items-center gap-2 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-gold-dark transition-colors hover:text-navy"
        >
          Enquire
          <ArrowIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </a>
      </div>
    </motion.article>
  );
}
