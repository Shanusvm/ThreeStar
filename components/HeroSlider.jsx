'use client';

import { useCallback, useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import SmartImage from './SmartImage';
import { heroSlides } from '@/lib/heroSlides';

const AUTOPLAY_MS = 4800;

/**
 * Hero photo slider: crossfade + slow zoom, swipeable on touch, dot controls.
 * Autoplay pauses while the visitor hovers or after a manual change, and is
 * disabled entirely when the OS asks for reduced motion.
 */
export default function HeroSlider({ parallaxY }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduceMotion = useReducedMotion();

  const go = useCallback((next) => {
    setIndex((current) => (next + heroSlides.length) % heroSlides.length);
  }, []);

  useEffect(() => {
    if (paused || reduceMotion) return undefined;
    const timer = setInterval(() => go(index + 1), AUTOPLAY_MS);
    return () => clearInterval(timer);
  }, [index, paused, reduceMotion, go]);

  const slide = heroSlides[index];

  return (
    <div
      className="absolute inset-0"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      role="group"
      aria-roledescription="carousel"
      aria-label="Recent work"
    >
      {/* photo layer — parallax drift lives here so the controls stay put */}
      <motion.div style={{ y: parallaxY }} className="absolute inset-0 scale-110">
        <AnimatePresence initial={false} mode="popLayout">
          <motion.div
            key={slide.id}
            initial={{ opacity: 0, scale: reduceMotion ? 1 : 1.09 }}
            animate={{
              opacity: 1,
              scale: 1,
              transition: {
                opacity: { duration: 0.9, ease: 'easeOut' },
                scale: { duration: reduceMotion ? 0 : AUTOPLAY_MS / 1000 + 1.2, ease: 'linear' },
              },
            }}
            exit={{ opacity: 0, transition: { duration: 0.7, ease: 'easeIn' } }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.16}
            onDragStart={() => setPaused(true)}
            onDragEnd={(_, info) => {
              if (info.offset.x < -60) go(index + 1);
              else if (info.offset.x > 60) go(index - 1);
              setPaused(false);
            }}
            className="absolute inset-0 cursor-grab active:cursor-grabbing"
          >
            <SmartImage
              src={slide.image}
              alt={slide.alt}
              sizes="(max-width: 1024px) 100vw, 45vw"
              priority={index === 0}
              fallbackLabel={slide.label}
              className="pointer-events-none object-cover"
            />
          </motion.div>
        </AnimatePresence>
      </motion.div>

      {/* current trade, top-left */}
      <div className="pointer-events-none absolute left-3 top-3 z-20 sm:left-5 sm:top-5">
        <AnimatePresence mode="wait">
          <motion.span
            key={slide.id}
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.4 }}
            className="glass inline-block rounded-full px-3.5 py-1.5 text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-white/85"
          >
            {slide.label}
          </motion.span>
        </AnimatePresence>
      </div>

      {/* dot controls, top-right */}
      <div className="absolute right-2 top-2.5 z-20 flex items-center gap-1 sm:right-4 sm:top-4">
        {heroSlides.map((item, i) => (
          <button
            key={item.id}
            type="button"
            onClick={() => {
              go(i);
              setPaused(true);
              setTimeout(() => setPaused(false), AUTOPLAY_MS);
            }}
            aria-label={`Show ${item.label}`}
            aria-current={i === index}
            className="group/dot p-1.5"
          >
            <span
              className={`block h-1.5 rounded-full transition-all duration-500 ${
                i === index ? 'w-6 bg-gold' : 'w-1.5 bg-white/45 group-hover/dot:bg-white/75'
              }`}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
