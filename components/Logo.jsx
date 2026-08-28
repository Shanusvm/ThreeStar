import { ThreeStars } from './Icons';

/**
 * Wordmark: script "Three Star" over spaced-out "HANDYMAN SERVICES".
 * `tone` switches between navy (light backgrounds) and white (navy backgrounds).
 */
export default function Logo({ tone = 'navy', size = 'md', className = '' }) {
  const script = tone === 'light' ? 'text-white' : 'text-navy';
  const sub = tone === 'light' ? 'text-white/70' : 'text-navy/60';

  const sizes = {
    sm: { script: 'text-2xl', sub: 'text-[0.5rem] tracking-[0.3em]' },
    md: { script: 'text-3xl sm:text-[2rem]', sub: 'text-[0.55rem] tracking-[0.32em]' },
    lg: { script: 'text-4xl sm:text-5xl', sub: 'text-[0.65rem] tracking-[0.34em]' },
  };

  return (
    <span className={`inline-flex flex-col leading-none ${className}`}>
      <ThreeStars className="mb-0.5 self-center text-gold" />
      <span className={`font-script ${sizes[size].script} ${script}`}>Three Star</span>
      <span className={`mt-1 font-semibold uppercase ${sizes[size].sub} ${sub}`}>
        Handyman Services
      </span>
    </span>
  );
}
