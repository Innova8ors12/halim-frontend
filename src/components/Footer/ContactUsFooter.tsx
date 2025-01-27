import { FC } from 'react';
import { Button } from '../ui/button';

export const ContactUsFooter: FC = () => {
  return (
    <section className="w-full bg-primary">
      <div className="container flex flex-col lg:flex-row items-start lg:items-center justify-center gap-4 px-4 py-6">
        <div className="w-full text-white text-xl font-semibold text-center lg:text-left">
          <p>Interested in seeing how we can help with your next project?</p>
          <p className="mt-1">Contact Us to discuss your needs</p>
        </div>
        <Button className="mx-auto lg:mx-0">Contact Us</Button>
      </div>
    </section>
  );
};
