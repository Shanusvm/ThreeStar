'use client';

import { motion } from 'framer-motion';

/** Fade + slide-up on scroll. Used for headings, copy and cards. */
export default function Reveal({
  children,
  as = 'div',
  delay = 0,
  y = 28,
  duration = 0.65,
  className = '',
  once = true,
}) {
  const Tag = motion[as] ?? motion.div;

  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: '-80px' }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Tag>
  );
}

/** Parent that staggers its Reveal-like children. Pair with `staggerItem`. */
export const staggerContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
};

export const staggerItem = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};
