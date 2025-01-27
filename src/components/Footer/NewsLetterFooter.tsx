import { FC } from 'react';
import { Button } from '../ui/button';

export const NewsLetterFooter: FC = () => {
  return (
    <section className="w-full bg-primary">
      <div className="container py-8">
        <div
          className="flex flex-col lg:flex-row items-start lg:items-center justify-center gap-4 lg:gap-12 px-4 py-4 rounded-lg max-w-5xl mx-auto"
          style={{
            background: 'rgba(255, 255, 255, 0.2)',
          }}
        >
          <p className="text-white text-2xl font-bold text-nowrap text-white px-0 lg:px-8">
            Newsletter Sign Up
          </p>
          <div className="relative bg-white rounded-md w-full">
            <input
              type="email"
              placeholder="Enter your email here.."
              className="w-full p-3 lg:p-4 pr-32 lg:pr-36 bg-transparent border-none focus:outline-none placeholder-gray-500 font-medium"
            />
            <Button
              size={'sm'}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 px-4 lg:px-6 lg:h-10"
            >
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
