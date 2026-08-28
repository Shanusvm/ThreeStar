'use client';

import { motion } from 'framer-motion';
import Reveal, { staggerContainer } from './Reveal';
import ServiceCard from './ServiceCard';
import { services } from '@/lib/services';

export default function Services() {
  return (
    <section id="services" className="section relative bg-gold-sand">
      {/* soft top vignette so the section lifts off the one above it */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white to-transparent"
      />

      <div className="container relative">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">What we do</p>
          <h2 className="heading mt-4 text-navy">We specialise in</h2>
          <span aria-hidden="true" className="hairline mx-auto mt-6 block max-w-[7rem]" />
          <p className="mx-auto mt-6 max-w-lg text-[0.95rem] leading-relaxed text-navy/60 sm:text-base">
            Twelve trades under one roof — inside, outside, big or small. If it needs fixing,
            building or refreshing, ask us.
          </p>
        </Reveal>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="mt-12 grid gap-5 sm:mt-16 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 xl:grid-cols-4"
        >
          {services.map((service, index) => (
            <ServiceCard key={service.slug} service={service} index={index} />
          ))}
        </motion.div>

        <Reveal delay={0.15} className="mt-12 text-center sm:mt-14">
          <p className="text-sm text-navy/60">
            Don&apos;t see what you need? We take on most home maintenance work.
          </p>
          <a href="#quote" className="btn-navy mt-6 w-full sm:w-auto">
            Ask about your job
          </a>
        </Reveal>
      </div>
    </section>
  );
}
