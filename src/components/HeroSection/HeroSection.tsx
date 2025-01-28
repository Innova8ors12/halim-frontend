import { FC } from 'react';
import { getImageProps } from 'next/image';
import { ChevronRightIcon } from 'lucide-react';
import HeroImage from '@/../public/assets/images/hero.png';
import { Button } from '../ui/button';

function getBackgroundImage(srcSet = '') {
  const imageSet = srcSet
    .split(', ')
    .map((str) => {
      const [url, dpi] = str.split(' ');
      return `url("${url}") ${dpi}`;
    })
    .join(', ');
  return `image-set(${imageSet})`;
}

export const HeroSection: FC = () => {
  const {
    props: { srcSet },
  } = getImageProps({ alt: 'hero image', src: HeroImage });
  const backgroundImage = getBackgroundImage(srcSet);
  const style = { backgroundImage };

  return (
    <section
      className="w-full h-screen bg-center bg-no-repeat bg-cover flex items-center justify-stretch"
      style={style}
    >
      <div className="container py-20">
        <h1 className="font-copperplate-gothic-bold text-5xl md:text-6xl font-bold text-white max-w-2xl">
          Driving Efficiency and Innovation in Industrial Engineering
        </h1>
        <p className="font-copperplate-gothic-light text-lg md:text-xl text-white font-medium mt-8 max-w-md leading-6">
          Expert consulting services to optimize your operations and achieve your goals following IE
          standards.
        </p>
        <Button size={'lg'} className="mt-8">
          Get Started <ChevronRightIcon size={24} strokeWidth={4} />
        </Button>
      </div>
    </section>
  );
};
