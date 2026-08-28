'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Reveal from './Reveal';
import { CheckIcon, MailIcon, PhoneIcon, ShieldIcon } from './Icons';
import { serviceNames } from '@/lib/services';
import { site } from '@/lib/site';

const field =
  'w-full rounded-[0.9rem] border border-navy/12 bg-white px-4 py-3.5 text-[0.95rem] sm:text-sm text-navy placeholder:text-navy/35 transition-colors focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30';

const label = 'mb-2 block text-xs font-semibold uppercase tracking-[0.16em] text-navy/55';

export default function QuoteSection() {
  const [sent, setSent] = useState(false);

  /**
   * No backend required: the form composes a pre-filled email to Daniel.
   * Swap this handler for a POST to /api/quote (Resend, Formspree, etc.) when you add one.
   */
  function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    const name = data.get('name');
    const phone = data.get('phone');
    const email = data.get('email');
    const service = data.get('service');
    const message = data.get('message');

    const subject = `Quote request — ${service} — ${name}`;
    const body = [
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Email: ${email}`,
      `Service: ${service}`,
      '',
      'Details:',
      message,
    ].join('\r\n');

    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    form.reset();
    setSent(true);
  }

  return (
    <section id="quote" className="section bg-white">
      <div className="container grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <Reveal>
          <p className="eyebrow">Free quotation</p>
          <h2 className="heading mt-4 text-navy">Tell us about your project</h2>
          <span aria-hidden="true" className="hairline mt-6 block max-w-[7rem]" />
          <p className="mt-6 max-w-md text-[0.95rem] leading-relaxed text-navy/60 sm:text-base">
            Send a few details and Daniel will get back to you — usually the same day — with a time
            to come out and price the job.
          </p>

          <div className="mt-10 space-y-4">
            <a
              href={site.phoneHref}
              className="card group flex items-center gap-4 p-5"
            >
              <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gold-sand text-gold-dark transition-colors group-hover:bg-gold group-hover:text-navy">
                <PhoneIcon className="h-6 w-6" />
              </span>
              <span>
                <span className="block text-xs uppercase tracking-[0.2em] text-navy/45">
                  Call {site.owner}
                </span>
                <span className="mt-1 block text-lg font-semibold text-navy">{site.phone}</span>
              </span>
            </a>

            <a
              href={`mailto:${site.email}`}
              className="card group flex items-center gap-4 p-5"
            >
              <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gold-sand text-gold-dark transition-colors group-hover:bg-gold group-hover:text-navy">
                <MailIcon className="h-6 w-6" />
              </span>
              <span className="min-w-0">
                <span className="block text-xs uppercase tracking-[0.2em] text-navy/45">Email</span>
                <span className="mt-1 block truncate text-base font-semibold text-navy">
                  {site.email}
                </span>
              </span>
            </a>

            <div className="flex items-center gap-3 rounded-2xl bg-navy p-5 text-white">
              <ShieldIcon className="h-6 w-6 shrink-0 text-gold" />
              <p className="text-sm text-white/75">Fully insured &amp; licensed · ABN {site.abn}</p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="relative overflow-hidden rounded-[1.75rem] border border-navy/8 bg-gradient-to-br from-gold-sand to-white p-5 shadow-[0_30px_70px_-40px_rgba(11,31,58,0.5)] sm:p-9">
            <AnimatePresence mode="wait" initial={false}>
              {sent ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.45 }}
                  className="flex min-h-[26rem] flex-col items-center justify-center text-center"
                >
                  <motion.span
                    initial={{ scale: 0.6 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 220, damping: 16 }}
                    className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-gold text-navy"
                  >
                    <CheckIcon className="h-8 w-8" />
                  </motion.span>
                  <h3 className="mt-6 text-xl font-semibold text-navy">Your email is ready</h3>
                  <p className="mt-3 max-w-sm text-sm leading-relaxed text-navy/65">
                    We&apos;ve opened your mail app with the details filled in — just hit send. In a
                    hurry, call Daniel on {site.phone}.
                  </p>
                  <button type="button" onClick={() => setSent(false)} className="btn-navy mt-8">
                    Send another
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.35 }}
                  className="space-y-5"
                >
                  <div className="grid gap-5 sm:grid-cols-2">
                    <label className="block">
                      <span className={label}>Your name</span>
                      <input
                        className={field}
                        name="name"
                        type="text"
                        required
                        autoComplete="name"
                        placeholder="Jane Smith"
                      />
                    </label>
                    <label className="block">
                      <span className={label}>Phone</span>
                      <input
                        className={field}
                        name="phone"
                        type="tel"
                        required
                        autoComplete="tel"
                        placeholder="0400 000 000"
                      />
                    </label>
                  </div>

                  <label className="block">
                    <span className={label}>Email</span>
                    <input
                      className={field}
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      placeholder="you@email.com"
                    />
                  </label>

                  <label className="block">
                    <span className={label}>Service needed</span>
                    <select className={field} name="service" defaultValue={serviceNames[0]} required>
                      {serviceNames.map((name) => (
                        <option key={name} value={name}>
                          {name}
                        </option>
                      ))}
                      <option value="Something else">Something else</option>
                    </select>
                  </label>

                  <label className="block">
                    <span className={label}>Project details</span>
                    <textarea
                      className={`${field} min-h-[7.5rem] resize-y`}
                      name="message"
                      rows={4}
                      required
                      placeholder="Tell us what needs doing, the address, and when suits you."
                    />
                  </label>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="btn-gold w-full"
                  >
                    Send my request
                  </motion.button>

                  <p className="text-center text-xs text-navy/45">
                    No obligation. We only use your details to quote your job.
                  </p>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
