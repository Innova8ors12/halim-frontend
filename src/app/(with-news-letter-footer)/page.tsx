import { AboutUsSection } from '@/components/AboutUsSection/AboutUsSection';
import { HeroSection } from '@/components/HeroSection/HeroSection';
import { IndustriesSection } from '@/components/IndustriesSection/IndustriesSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <IndustriesSection />
      <AboutUsSection />
    </>
  );
}
