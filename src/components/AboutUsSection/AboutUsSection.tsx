import { FC } from 'react';
import Image from 'next/image';
import { ChevronRightIcon } from 'lucide-react';
import AboutUsImage from '@/../public/assets/images/about-us.png';
import { SectionHeading } from '../SectionHeading/SectionHeading';
import { Button } from '../ui/button';

interface AboutUsSectionProps {
  isHomePage?: boolean;
}

export const AboutUsSection: FC<AboutUsSectionProps> = ({ isHomePage }) => {
  return (
    <section className={`bg-${isHomePage ? 'gray-300' : 'white'} w-full py-20`}>
      <div className="container flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="w-full md:w-1/2">
          <SectionHeading
            heading="About Us"
            subHeading="About Halim & Company"
            highlightedSpanProps={isHomePage ? { className: '!bg-white' } : {}}
          />
          {isHomePage ? (
            <p className="font-roboto text-gray-500 font-medium mt-6 max-w-md md:max-w-lg leading-5">
              At Halim & Company, we specialize in providing top-tier industrial engineering
              consulting services. With a focus on optimizing operations, increasing efficiency, and
              fostering innovation, our team of experts is dedicated to helping businesses thrive.
              Learn more about our mission, vision, and the values that drive us.
            </p>
          ) : (
            <p className="font-roboto text-gray-500 font-medium mt-6 max-w-md md:max-w-lg leading-5">
              Interested in creating impactful workflows with strengthen processes and lead to
              healthier and more engaged workforces, skilled in both Industrial Design, System
              Analysis, and software design. Proven talent at identifying and eliminating
              inefficiencies.
            </p>
          )}
          {isHomePage ? (
            <Button variant={'outline'} size={'lg'} className="mt-12 px-8">
              Learn More <ChevronRightIcon size={24} strokeWidth={4} />
            </Button>
          ) : (
            <p className="mt-12 font-roboto font-semibold text-2xl">Halim Muhammad, Founder</p>
          )}
        </div>
        <div className="w-full md:w-1/2 pr-10 sm:pr-12 md:pr-10 lg:pr-16 pt-10 sm:pt-12 md:pt-10 lg:pt-16 rounded-lg overflow-hidden bg-right-top bg-no-repeat relative">
          <div className="absolute bg-primary w-1/3 h-4/5 top-0 right-0 rounded-tr-vl"></div>
          <Image
            src={AboutUsImage}
            alt="About Us"
            className="relative w-full z-10 bg-white rounded-tr-vl"
          />
        </div>
      </div>
    </section>
  );
};
