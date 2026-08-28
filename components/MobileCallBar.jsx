'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { PhoneIcon } from './Icons';
import { site } from '@/lib/site';

/** Thumb-reach call/quote bar that slides in once the visitor scrolls past the hero. */
export default function MobileCallBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 520);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 90, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 90, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-navy-dark/95 p-3 backdrop-blur sm:hidden"
        >
          <div className="flex gap-3">
            <a href={site.phoneHref} className="btn-gold flex-1 px-4 py-3 text-xs">
              <PhoneIcon className="h-4 w-4" />
              Call {site.owner}
            </a>
            <a href="#quote" className="btn-outline flex-1 px-4 py-3 text-xs">
              Free Quote
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
