import Hero from '@/components/Hero';
import Marquee from '@/components/Marquee';
import ValueProps from '@/components/ValueProps';
import Services from '@/components/Services';
import Process from '@/components/Process';
import QuoteSection from '@/components/QuoteSection';

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <ValueProps />
      <Services />
      <Process />
      <QuoteSection />
    </>
  );
}
