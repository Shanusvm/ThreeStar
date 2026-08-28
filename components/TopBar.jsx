import { site } from '@/lib/site';
import { MailIcon, PhoneIcon } from './Icons';

export default function TopBar() {
  return (
    <div className="bg-navy-dark text-white">
      <div className="container flex h-10 items-center justify-between gap-4 text-[0.7rem] sm:text-xs">
        <div className="flex items-center gap-3 sm:gap-5">
          <span className="font-semibold uppercase tracking-[0.2em] text-gold-light">
            {site.owner}
          </span>
          <a
            href={site.phoneHref}
            className="inline-flex items-center gap-1.5 transition-colors hover:text-gold-light"
          >
            <PhoneIcon className="h-3.5 w-3.5" />
            {site.phone}
          </a>
          <a
            href={`mailto:${site.email}`}
            className="hidden items-center gap-1.5 transition-colors hover:text-gold-light sm:inline-flex"
          >
            <MailIcon className="h-3.5 w-3.5" />
            {site.email}
          </a>
        </div>
        <span className="hidden text-white/60 lg:inline">ABN: {site.abn}</span>
      </div>
    </div>
  );
}
