'use client';

import { MotionConfig } from 'framer-motion';

/** Honours the visitor's "reduce motion" OS setting across every animation. */
export default function MotionProvider({ children }) {
  return (
    <MotionConfig reducedMotion="user" transition={{ ease: [0.22, 1, 0.36, 1] }}>
      {children}
    </MotionConfig>
  );
}
