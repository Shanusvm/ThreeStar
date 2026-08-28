import Logo from './Logo';
import { MailIcon, PhoneIcon } from './Icons';
import { nav, site } from '@/lib/site';
import { services } from '@/lib/services';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy-dark text-white">
      <div className="container grid gap-12 py-16 md:grid-cols-3 md:py-20">
        <div>
          <Logo tone="light" size="md" />
          <p className="mt-6 max-w-xs text-sm leading-relaxed text-white/55">
            {site.tagline}. Fully insured and licensed handyman services, run hands-on by{' '}
            {site.owner}.
          </p>
          <a href="#quote" className="btn-gold mt-8">
            Get a Free Quote
          </a>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.24em] text-gold-light">
            Services
          </h3>
          <ul className="mt-6 grid grid-cols-1 gap-y-2.5 text-sm text-white/60 sm:grid-cols-2">
            {services.map((service) => (
              <li key={service.slug}>
                <a href="#services" className="transition-colors hover:text-gold-light">
                  {service.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.24em] text-gold-light">
            Contact
          </h3>
          <ul className="mt-6 space-y-4 text-sm text-white/70">
            <li>
              <a
                href={site.phoneHref}
                className="inline-flex items-center gap-3 transition-colors hover:text-gold-light"
              >
                <PhoneIcon className="h-5 w-5 text-gold" />
                {site.phone}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${site.email}`}
                className="inline-flex items-center gap-3 break-all transition-colors hover:text-gold-light"
              >
                <MailIcon className="h-5 w-5 shrink-0 text-gold" />
                {site.email}
              </a>
            </li>
            <li className="text-white/50">{site.hours}</li>
            <li className="text-white/50">ABN: {site.abn}</li>
          </ul>

          <nav className="mt-8 flex flex-wrap gap-x-6 gap-y-2" aria-label="Footer">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-white/55 transition-colors hover:text-gold-light"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container flex flex-col items-center justify-between gap-3 py-6 text-xs text-white/40 sm:flex-row">
          <p>
            © {year} {site.name}. All rights reserved.
          </p>
          <p>Fully Insured &amp; Licenced · Free Quotation · Best Price</p>
        </div>
      </div>
    </footer>
  );
}
