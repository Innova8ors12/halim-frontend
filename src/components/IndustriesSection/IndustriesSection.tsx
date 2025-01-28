import { FC } from 'react';
import { ChevronRightIcon } from 'lucide-react';
import { SectionHeading } from '../SectionHeading/SectionHeading';
import { Button } from '../ui/button';

export const IndustriesSection: FC = () => {
  return (
    <section className="w-full bg-primary-light py-20">
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-8 items-end">
        <div className="w-full">
          <SectionHeading
            heading="Empowering Industries with Tailored Engineering Solutions"
            subHeading="Industries We Serve"
            highlightedSpanProps={{ className: '!bg-white' }}
          />
        </div>
        <p className="font-roboto text-gray-500 font-medium leading-5">
          Explore the various industries we serve. Our consulting expertise spans multiple sectors,
          including manufacturing, healthcare, logistics, and more. Discover how we can address the
          specific challenges and opportunities in your industry.
        </p>
      </div>
      <div className="container grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 mt-12">
        <div className="flex flex-col items-center justify-start gap-4 bg-white p-6 border-b xl:border-b-0 sm:border-r border-gray-400 rounded-tr-vl sm:rounded-tr-none">
          <h3 className="font-bold text-2xl text-primary">Manufacturing</h3>
          <div className="w-16 h-1 bg-secondary"></div>
          <p className="font-poppins text-black text-center">
            We assist manufacturing businesses in optimizing their operations, implementing lean
            practices, and improving process efficiency.
          </p>
          <h4 className="font-bold text-lg text-primary">Key Services</h4>
          <ul className="list-disc font-poppins text-center text-black flex flex-col items-center gap-1 list-inside">
            <li>5S Implementation</li>
            <li>Lean Manufacturing</li>
            <li>Data Analysis</li>
            <li>Six Sigma</li>
          </ul>
        </div>
        <div className="flex flex-col items-center justify-start gap-4 bg-white p-6 border-b xl:border-b-0 xl:border-r border-gray-400 sm:rounded-tr-vl xl:rounded-tr-none">
          <h3 className="font-bold text-2xl text-primary">Logistics</h3>
          <div className="w-16 h-1 bg-secondary"></div>
          <p className="font-poppins text-black text-center">
            We help logistics companies improve their supply chain management, reduce operational
            costs, and enhance overall performance.
          </p>
          <h4 className="font-bold text-lg text-primary">Key Services</h4>
          <ul className="list-disc font-poppins text-center text-black flex flex-col items-center gap-1 list-inside">
            <li>Data Collection</li>
            <li>Lean Manufacturing</li>
            <li>Data Analysis</li>
          </ul>
        </div>
        <div className="flex flex-col items-center justify-start gap-4 bg-white p-6 sm:border-r border-gray-400">
          <h3 className="font-bold text-2xl text-primary">Construction</h3>
          <div className="w-16 h-1 bg-secondary"></div>
          <p className="font-poppins text-black text-center">
            Our consulting services support construction projects through precise CAD designs and
            detailed blueprints, enhancing project planning and execution.
          </p>
          <h4 className="font-bold text-lg text-primary">Key Services</h4>
          <ul className="list-disc font-poppins text-center text-black flex flex-col items-center gap-1 list-inside">
            <li>CAD Work (including detailed blueprints and layouts)</li>
            <li>Data Analysis</li>
            <li>Process Optimization</li>
          </ul>
        </div>
        <div className="flex flex-col items-center justify-start gap-4 bg-primary p-6 xl:rounded-tr-vl">
          <h3 className="font-bold text-2xl text-secondary">Transportation</h3>
          <div className="w-16 h-1 bg-secondary"></div>
          <p className="font-poppins text-white text-center">
            Our consulting services support construction projects through precise CAD designs and
            detailed blueprints, enhancing project planning and execution.
          </p>
          <h4 className="font-bold text-lg text-secondary">Key Services</h4>
          <ul className="list-disc font-poppins text-center text-white flex flex-col items-center gap-1 list-inside">
            <li>CAD Work (including detailed blueprints and layouts)</li>
            <li>Data Analysis</li>
            <li>Process Optimization</li>
          </ul>
        </div>
      </div>
      <div className="container flex justify-center mt-12">
        <Button variant={'secondary'} size={'lg'}>
          Contact <ChevronRightIcon size={20} />
        </Button>
      </div>
    </section>
  );
};
