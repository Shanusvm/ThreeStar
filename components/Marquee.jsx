import { StarIcon } from './Icons';

const phrases = [
  'Fully Insured & Licensed',
  'Free Quotations',
  'Best Price',
  'Prompt & Reliable',
  'Devoted to Quality',
  'Small Jobs to Full Extensions',
];

function Track({ ariaHidden = false }) {
  return (
    <div
      aria-hidden={ariaHidden || undefined}
      className="flex shrink-0 animate-marquee items-center gap-10 pr-10 motion-reduce:animate-none"
    >
      {phrases.map((phrase) => (
        <span key={phrase} className="flex items-center gap-10 whitespace-nowrap">
          <span className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-white/70">
            {phrase}
          </span>
          <StarIcon className="h-3 w-3 shrink-0 text-gold" />
        </span>
      ))}
    </div>
  );
}

/** Thin scrolling trust strip that separates the hero from the page body. */
export default function Marquee() {
  return (
    <div className="relative flex overflow-hidden border-y border-white/10 bg-navy-dark py-4">
      <Track />
      <Track ariaHidden />
      {/* fade the strip into the edges */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-navy-dark to-transparent sm:w-28"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-navy-dark to-transparent sm:w-28"
      />
    </div>
  );
}
