'use client';

import { motion } from 'framer-motion';
import Reveal, { staggerContainer, staggerItem } from './Reveal';
import { ClockIcon, ShieldIcon, TagIcon } from './Icons';

const values = [
  {
    icon: ShieldIcon,
    title: 'Fully Insured & Licensed',
    body: 'Every job is covered and carried out to Australian standards — paperwork sorted, no risk to you.',
  },
  {
    icon: ClockIcon,
    title: 'Prompt & Reliable Service',
    body: 'We turn up when we say we will, keep you posted, and leave the site clean at the end of the day.',
  },
  {
    icon: TagIcon,
    title: 'Best Price & Free Quotations',
    body: 'Honest, itemised quotes at no cost. Fair pricing with no hidden extras once work begins.',
  },
];

export default function ValueProps() {
  return (
    <section id="why-us" className="section bg-white">
      <div className="container">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">Why choose us</p>
          <h2 className="heading mt-4 text-navy">Devoted to quality &amp; prompt service</h2>
          <p className="mt-5 text-base leading-relaxed text-navy/65">
            Three Star is run hands-on by Daniel — the person who quotes your job is the person who
            does it.
          </p>
        </Reveal>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="mt-16 grid gap-6 md:grid-cols-3"
        >
          {values.map(({ icon: Icon, title, body }) => (
            <motion.div
              key={title}
              variants={staggerItem}
              whileHover={{ y: -6 }}
              transition={{ type: 'spring', stiffness: 260, damping: 22 }}
              className="group rounded-2xl border border-navy/8 bg-white p-8 shadow-soft transition-shadow duration-300 hover:shadow-card"
            >
              <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gold-sand text-gold-dark transition-colors duration-300 group-hover:bg-gold group-hover:text-navy">
                <Icon className="h-7 w-7" />
              </span>
              <h3 className="mt-6 text-lg font-semibold text-navy">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-navy/65">{body}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
