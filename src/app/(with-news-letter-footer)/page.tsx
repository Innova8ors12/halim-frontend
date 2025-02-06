import { AboutUsSection } from '@/components/AboutUsSection/AboutUsSection';
import { HeroSection } from '@/components/HeroSection/HeroSection';
import { IndustriesSection } from '@/components/IndustriesSection/IndustriesSection';
import { ServiceCategorySection } from '@/components/ServiceCategorySection/ServiceCategorySection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <IndustriesSection />
      <ServiceCategorySection />
      <AboutUsSection />
    </>
  );
}
