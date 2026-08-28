import { Inter, Great_Vibes } from 'next/font/google';
import './globals.css';
import MotionProvider from '@/components/MotionProvider';
import TopBar from '@/components/TopBar';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import MobileCallBar from '@/components/MobileCallBar';
import { site } from '@/lib/site';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const greatVibes = Great_Vibes({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
  variable: '--font-script',
});

export const metadata = {
  metadataBase: new URL('https://threestarhandyman.com.au'),
  title: {
    default: 'Three Star Handyman Services | Fully Insured & Licensed',
    template: '%s | Three Star Handyman Services',
  },
  description:
    'Premium handyman solutions by Daniel — guttering, roof restoration, fencing, landscaping, painting, plastering, renovations and more. Fully insured, licensed and always on time. Free quotations.',
  keywords: [
    'handyman',
    'roof restoration',
    'guttering cleaning',
    'fencing',
    'landscaping',
    'painting',
    'plastering',
    'retaining walls',
    'renovations',
  ],
  openGraph: {
    title: 'Three Star Handyman Services',
    description:
      'Premium handyman solutions. Your project, our priority. Fully insured & licensed. Free quotations.',
    type: 'website',
    locale: 'en_AU',
  },
  robots: { index: true, follow: true },
};

export const viewport = {
  themeColor: '#0B1F3A',
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'HomeAndConstructionBusiness',
  name: site.name,
  telephone: site.phone,
  email: site.email,
  description: 'Fully insured and licensed handyman services. Free quotations, reliable service, best price.',
  areaServed: 'Australia',
  priceRange: '$$',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-AU" className={`${inter.variable} ${greatVibes.variable}`}>
      <body className="font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <MotionProvider>
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-gold focus:px-5 focus:py-2 focus:text-sm focus:font-semibold focus:text-navy"
          >
            Skip to content
          </a>
          <TopBar />
          <Navbar />
          <main id="main">{children}</main>
          <Footer />
          {/* keeps the fixed mobile call bar from covering the last line of the footer */}
          <div aria-hidden="true" className="h-16 bg-navy-dark sm:hidden" />
          <MobileCallBar />
        </MotionProvider>
      </body>
    </html>
  );
}
