'use client';

import { motion } from 'framer-motion';
import SmartImage from './SmartImage';
import { staggerItem } from './Reveal';
import { ArrowIcon } from './Icons';

export default function ServiceCard({ service }) {
  return (
    <motion.article
      variants={staggerItem}
      whileHover={{ y: -8 }}
      transition={{ type: 'spring', stiffness: 240, damping: 20 }}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-navy/8 bg-white shadow-soft transition-shadow duration-300 hover:shadow-card"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <SmartImage
          src={service.image}
          alt={service.title}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          fallbackLabel={service.title}
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-navy/0 transition-colors duration-500 group-hover:bg-navy/25"
        />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-base font-semibold leading-snug text-navy">{service.title}</h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-navy/60">{service.description}</p>
        <a
          href="#quote"
          className="mt-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-gold-dark transition-colors hover:text-navy"
        >
          Enquire
          <ArrowIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </a>
      </div>
    </motion.article>
  );
}
