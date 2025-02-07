import { AboutUsSection } from '@/components/AboutUsSection/AboutUsSection';
import { OurServicesSection } from '@/components/OurServicesSection/OurServicesSection';
import { ProjectsGallerySection } from '@/components/ProjectsGallerySection/ProjectsGallerySection';

export default function AboutUs() {
  return (
    <>
      <div className="container mx-auto pt-16">
        <h1 className="font-copperplate-gothic-bold text-7xl font-bold">About Us</h1>
      </div>
      <AboutUsSection />
      <OurServicesSection />
      <ProjectsGallerySection />
    </>
  );
}
