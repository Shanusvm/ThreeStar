'use client';

import { motion } from 'framer-motion';
import Reveal, { staggerContainer } from './Reveal';
import ServiceCard from './ServiceCard';
import { services } from '@/lib/services';

export default function Services() {
  return (
    <section id="services" className="section bg-gold-sand">
      <div className="container">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">What we do</p>
          <h2 className="heading mt-4 text-navy">We specialise in</h2>
          <p className="mt-5 text-base leading-relaxed text-navy/65">
            Twelve trades under one roof — inside, outside, big or small. If it needs fixing,
            building or refreshing, ask us.
          </p>
        </Reveal>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </motion.div>

        <Reveal delay={0.15} className="mt-14 text-center">
          <p className="text-sm text-navy/60">
            Don&apos;t see what you need? We take on most home maintenance work.
          </p>
          <a href="#quote" className="btn-navy mt-6">
            Ask about your job
          </a>
        </Reveal>
      </div>
    </section>
  );
}
