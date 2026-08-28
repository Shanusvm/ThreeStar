'use client';

import { motion } from 'framer-motion';
import Reveal, { staggerContainer, staggerItem } from './Reveal';

const steps = [
  {
    step: '01',
    title: 'Get in touch',
    body: 'Call Daniel or send the quote form with a few details and photos if you have them.',
  },
  {
    step: '02',
    title: 'Free on-site quote',
    body: 'We visit, measure up and give you a clear, itemised price — no obligation.',
  },
  {
    step: '03',
    title: 'Book your date',
    body: 'Lock in a start date that suits you. You will know exactly who is arriving and when.',
  },
  {
    step: '04',
    title: 'Job done right',
    body: 'Quality workmanship, site left clean, and we stand behind everything we build.',
  },
];

export default function Process() {
  return (
    <section id="process" className="section relative overflow-hidden bg-navy">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-gold/10 blur-3xl"
      />
      <div className="container relative">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow-light">How it works</p>
          <h2 className="heading mt-4 text-white">Simple from first call to final clean-up</h2>
        </Reveal>

        <motion.ol
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4"
        >
          {steps.map(({ step, title, body }) => (
            <motion.li key={step} variants={staggerItem} className="relative">
              <span className="font-script text-5xl text-gold">{step}</span>
              <h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/60">{body}</p>
              <span
                aria-hidden="true"
                className="mt-6 block h-px w-16 bg-gradient-to-r from-gold to-transparent"
              />
            </motion.li>
          ))}
        </motion.ol>
      </div>
    </section>
  );
}
