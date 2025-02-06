import Image from 'next/image';
import ManufacturingImage from '@/../public/assets/images/projects/manufacturing.png';
import { SectionHeading } from '../SectionHeading/SectionHeading';

export const ProjectsGallerySection = () => {
  return (
    <section className="w-full bg-[linear-gradient(to_bottom,theme(colors.secondary)_70%,theme(colors.gray-300)_70%)] pt-20 pb:0 lg:pb-32">
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-8 items-end">
        <div className="w-full">
          <SectionHeading
            heading="Empowering Industries with Tailored Engineering Solutions"
            subHeading="Industries We Serve"
            headingProps={{ className: 'text-white' }}
            subHeadingProps={{ className: 'text-white' }}
            highlightedSpanProps={{ className: '!bg-primary' }}
          />
        </div>
        <p className="font-roboto text-white font-medium leading-5">
          Explore the various industries we serve. Our consulting expertise spans multiple sectors,
          including manufacturing, healthcare, logistics, and more. Discover how we can address the
          specific challenges and opportunities in your industry.
        </p>
      </div>
      <div className="container mt-8">
        <div className="lg:relative flex flex-col items-center gap-12">
          <Image
            src={ManufacturingImage}
            alt="Manufacturing"
            className="w-full rounded-bl-lg"
            placeholder="blur"
          />
          <div className="lg:absolute bg-primary max-w-sm p-8 pl-16 top-20 right-12 rounded-tr-vl">
            <h3 className="font-bold text-3xl text-secondary relative before:content-[''] before:absolute before:w-16 before:h-1 before:bg-secondary before:top-4 before:-left-24">
              Manufacturing Efficiency Improvement
            </h3>
            <p className="font-poppins text-white mt-4">
              Implemented 5S and lean manufacturing principles for a manufacturing client, resulting
              in a 20% increase in operational efficiency.
            </p>
            <h4 className="font-bold text-lg text-secondary mt-4">Key Services</h4>
            <ul className="list-disc font-poppins text-white flex flex-col gap-1 list-inside mt-3">
              <li>5S Implementation</li>
              <li>Lean Manufacturing</li>
            </ul>
            <h4 className="font-bold text-lg text-secondary mt-4">Outcome</h4>
            <p className="font-poppins text-white mt-2">Increased productivity and reduced waste</p>
          </div>
        </div>
      </div>
    </section>
  );
};
