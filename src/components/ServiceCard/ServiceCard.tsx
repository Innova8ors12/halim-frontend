import { FC, HTMLAttributes } from 'react';
import Image, { StaticImageData } from 'next/image';

interface ServiceCardProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  image: string | StaticImageData;
}

export const ServiceCard: FC<ServiceCardProps> = ({ title, image, ...props }) => {
  return (
    <div
      {...props}
      className={`w-full max-w-xs relative ${props.className ? props.className : ''}`}
    >
      <div
        className="absolute bg-white w-5/6 h-full top-0 right-0 rounded-br-vl"
        style={{
          boxShadow: '-10px 0px 24px 0px #0000000D, 0px 10px 24px 0px #0000000D',
        }}
      ></div>
      <Image src={image} alt={title} className="relative w-full z-10 bg-white rounded-br-vl" />
      <div className="relative w-full bg-transparent z-10 py-4">
        <div className="flex items-center gap-2 pr-2">
          <div className="w-1/5 bg-secondary h-1"></div>
          <p className="font-copperplate-gothic-bold font-bold text-black whitespace-nowrap">
            {title}
          </p>
        </div>
      </div>
    </div>
  );
};

// box-shadow: -10px 0px 24px 0px #0000000D, 0px 10px 24px 0px #0000000D;
