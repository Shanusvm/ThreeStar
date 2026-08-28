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
          <h2 className="heading mt-4 text-navy">
            Devoted to quality <span className="text-gold-dark">&amp;</span> prompt service
          </h2>
          <span aria-hidden="true" className="hairline mx-auto mt-6 block max-w-[7rem]" />
          <p className="mx-auto mt-6 max-w-lg text-[0.95rem] leading-relaxed text-navy/60 sm:text-base">
            Three Star is run hands-on by Daniel — the person who quotes your job is the person who
            does it.
          </p>
        </Reveal>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="mt-12 grid gap-5 sm:mt-16 sm:gap-6 md:grid-cols-3"
        >
          {values.map(({ icon: Icon, title, body }) => (
            <motion.div
              key={title}
              variants={staggerItem}
              whileHover={{ y: -6 }}
              transition={{ type: 'spring', stiffness: 260, damping: 22 }}
              className="card group p-7 sm:p-8"
            >
              {/* gold wash that fades in behind the icon on hover */}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gold/0 blur-2xl transition-colors duration-500 group-hover:bg-gold/20"
              />

              <span className="relative inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-gold-sand to-gold-light/40 text-gold-dark transition-all duration-500 group-hover:from-gold-light group-hover:to-gold group-hover:text-navy">
                <Icon className="h-7 w-7" />
              </span>

              <h3 className="relative mt-6 text-lg font-semibold tracking-tight text-navy">
                {title}
              </h3>
              <p className="relative mt-3 text-[0.88rem] leading-relaxed text-navy/60 sm:text-sm">
                {body}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
