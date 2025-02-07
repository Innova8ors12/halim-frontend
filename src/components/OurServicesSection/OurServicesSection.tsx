import { FC } from 'react';
import { ChevronRightIcon } from 'lucide-react';
import { SectionHeading } from '../SectionHeading/SectionHeading';
import { Button } from '../ui/button';

export const OurServicesSection: FC = () => {
  return (
    <section id="industries" className="w-full bg-white py-20">
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-8 items-end">
        <div className="w-full">
          <SectionHeading heading="What we do for you" subHeading="Our Services" />
        </div>
        <p className="font-roboto text-gray-500 font-medium leading-5">
          Explore the range of consulting services we offer to address your unique industrial
          challenges. From process optimization to project management, our team provides tailored
          solutions to meet your needs.
        </p>
      </div>
      <div className="container grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 mt-12">
        <div className="flex flex-col items-center justify-start gap-4 bg-primary-light p-6 border-b xl:border-b-0 sm:border-r border-gray-400 rounded-tr-vl sm:rounded-tr-none">
          <h3 className="font-bold text-2xl text-primary">5S Implementation</h3>
          <div className="w-16 h-1 bg-secondary"></div>
          <p className="font-roboto text-gray-500 text-center">
            Transform your workspace with our 5S implementation services. We help you establish a
            clean, organized, and efficient environment by applying the 5S methodology—Sort, Set in
            Order, Shine, Standardize, and Sustain. Our approach ensures a streamlined process,
            reduces waste, and improves productivity.
          </p>
          <Button variant={'outline'} className="mt-auto">
            Learn More
            <ChevronRightIcon size={20} />
          </Button>
        </div>
        <div className="flex flex-col items-center justify-start gap-4 bg-primary-light p-6 border-b xl:border-b-0 xl:border-r border-gray-400 sm:rounded-tr-vl xl:rounded-tr-none">
          <h3 className="font-bold text-2xl text-primary">CAD Work</h3>
          <div className="w-16 h-1 bg-secondary"></div>
          <p className="font-roboto text-gray-500 text-center">
            Utilize our CAD (Computer-Aided Design) services to create precise and detailed
            engineering drawings. Whether you need 2D schematics or 3D models, our CAD expertise
            supports the design and development of complex systems and components, enhancing
            accuracy and facilitating effective project management.
          </p>
          <Button variant={'outline'} className="mt-auto">
            Learn More
            <ChevronRightIcon size={20} />
          </Button>
        </div>
        <div className="flex flex-col items-center justify-start gap-4 bg-primary-light p-6 sm:border-r border-gray-400">
          <h3 className="font-bold text-2xl text-primary text-center">
            Data Collection/Lean Manufacturing
          </h3>
          <div className="w-16 h-1 bg-secondary"></div>
          <p className="font-roboto text-gray-500 text-center">
            Optimize your operations through data-driven insights with our data collection and lean
            manufacturing services. We help you gather and analyze critical data to identify
            inefficiencies and apply lean principles to reduce waste, streamline processes, and
            enhance overall performance.
          </p>
          <Button variant={'outline'} className="mt-auto">
            Learn More
            <ChevronRightIcon size={20} />
          </Button>
        </div>
        <div className="flex flex-col items-center justify-start gap-4 bg-primary p-6 xl:rounded-tr-vl">
          <h3 className="font-bold text-2xl text-secondary">Data Analysis</h3>
          <div className="w-16 h-1 bg-secondary"></div>
          <p className="font-roboto text-white text-center">
            Make informed decisions with our comprehensive data analysis services. We analyze
            complex datasets to uncover trends, patterns, and actionable insights that drive
            strategic improvements and operational excellence. Our analysis supports data-driven
            decision-making to boost efficiency and effectiveness.
          </p>
          <Button variant={'secondary'} className="mt-auto">
            Learn More
            <ChevronRightIcon size={20} />
          </Button>
        </div>
      </div>
    </section>
  );
};
