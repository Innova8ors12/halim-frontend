import React from 'react';
import { ChevronRightIcon } from 'lucide-react';
import ThreeDModeling from '@/../public/assets/images/services/3d-modeling.png';
import LayoutsImage from '@/../public/assets/images/services/layouts.png';
import PDACImage from '@/../public/assets/images/services/pdac.png';
import ProcessFlow from '@/../public/assets/images/services/process-flow.png';
import RootCauseAnalysisImage from '@/../public/assets/images/services/root-cause-analysis.png';
import SetInOrderImage from '@/../public/assets/images/services/set-in-order.png';
import ShineImage from '@/../public/assets/images/services/shine.png';
import SixSigmaImage from '@/../public/assets/images/services/six-sigma.png';
import SortImage from '@/../public/assets/images/services/sort.png';
import StandardizeImage from '@/../public/assets/images/services/standardize.png';
import SustainImage from '@/../public/assets/images/services/sustain.png';
import TechnicalDrawingImage from '@/../public/assets/images/services/technical-drawing.png';
import ValueStreamMappingImage from '@/../public/assets/images/services/value-stream-mapping.png';
import { ServiceCard } from '../ServiceCard/ServiceCard';
import { Button } from '../ui/button';

export const ServiceCategorySection = () => {
  return (
    <section id="services" className="w-full white py-20">
      <div className="container flex flex-col items-center text-center">
        <h1 className={`font-poppins text-gray-500 font-medium`}>
          Service
          <span className={`p-1 pr-0 bg-primary-light h-8`}> Ca</span>
          tegory
        </h1>
        <FiveSImplementation />
        <CADWork />
        <DataAnalysis />
      </div>
    </section>
  );
};

const FiveSImplementation = () => {
  return (
    <>
      <h2
        className={`text-4xl md:text-5xl font-copperplate-gothic-bold font-bold text-black max-w-2xl mt-4`}
      >
        5S Implementation
      </h2>
      <p className="text-center max-w-2xl font-poppins text-gray-500 mt-4">
        Transfer your workspace with our 5S Implementation services. We help you establish a clean,
        organized, and efficient environment by applying 5S methodology. Our approach ensures a
        streamlined process which will reduce waste, increase capacity and productivity and lower
        direct labor cost
      </p>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-7 mt-8 justify-items-center">
        <ServiceCard title="Sort" image={SortImage} />
        <ServiceCard title="Set In Order" image={SetInOrderImage} />
        <ServiceCard title="Shine" image={ShineImage} />
        <ServiceCard title="Standardize" image={StandardizeImage} />
        <ServiceCard title="Sustain" image={SustainImage} />
      </div>
      <Button variant={'outline'} size={'lg'} className="mt-12 px-8">
        Learn More
        <ChevronRightIcon size={24} strokeWidth={2} />
      </Button>
    </>
  );
};

const CADWork = () => {
  return (
    <>
      <h2
        className={`text-4xl md:text-5xl font-copperplate-gothic-bold font-bold text-black max-w-2xl mt-16`}
      >
        CAD Work
      </h2>
      <p className="text-center max-w-2xl font-poppins text-gray-500 mt-4">
        Utilize our CAD (Computer-Aided Design) services to create precise and detailed engineering
        drawings. Whether you need 2D schematics or 3D models, our CAD expertise supports the design
        and development of complex systems and components, enhancing accuracy and facilitating
        effective project management.
      </p>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7 mt-8 justify-items-center">
        <ServiceCard title="Layouts" image={LayoutsImage} />
        <ServiceCard title="Process Flow" image={ProcessFlow} />
        <ServiceCard title="3D Modeling" image={ThreeDModeling} />
        <ServiceCard title="Technical Drawing" image={TechnicalDrawingImage} />
      </div>
      <Button variant={'outline'} size={'lg'} className="mt-12 px-8">
        Learn More
        <ChevronRightIcon size={24} strokeWidth={2} />
      </Button>
    </>
  );
};

const DataAnalysis = () => {
  return (
    <>
      <h2
        className={`text-4xl md:text-5xl font-copperplate-gothic-bold font-bold text-black max-w-2xl mt-16`}
      >
        Data Analysis
      </h2>
      <p className="text-center max-w-2xl font-poppins text-gray-500 mt-4">
        Make informed decisions with our comprehensive data analysis services. We analyze complex
        datasets to uncover trends, patterns, and actionable insights that drive strategic
        improvements and operational excellence. Our analysis supports data-driven decision-making
        to boost efficiency and effectiveness.
      </p>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7 mt-8 justify-items-center">
        <ServiceCard title="Root Cause Analysis" image={RootCauseAnalysisImage} />
        <ServiceCard title="Six Sigma" image={SixSigmaImage} />
        <ServiceCard title="Value Stream Mapping" image={ValueStreamMappingImage} />
        <ServiceCard title="PDAC" image={PDACImage} />
      </div>
      <Button variant={'outline'} size={'lg'} className="mt-12 px-8">
        Learn More
        <ChevronRightIcon size={24} strokeWidth={2} />
      </Button>
    </>
  );
};
