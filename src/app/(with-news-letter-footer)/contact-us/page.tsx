import { PhoneCallIcon } from 'lucide-react';
import { ContactUsForm } from '@/components/forms/ContactUsForm';
import { MailIcon } from '@/components/icons/mail';
import { MapPinIcon } from '@/components/icons/map-pin';

export default function ContactUs() {
  return (
    <>
      <div className="container mx-auto py-16">
        <h1 className="font-copperplate-gothic-bold text-7xl font-bold">Contact Us</h1>
        <section className="grid grid-cols-1 md:grid-cols-2 mt-12">
          <div className="p-20 bg-primary-light rounded-tr-vl md:-mr-8">
            <p className="font-roboto text-gray-500">Contact Information</p>
            <h2 className="font-copperplate-gothic-bold text-4xl text-black mt-4">Get in Touch</h2>
            <p className="font-roboto text-gray-500 mt-4">
              Ready to take the next step? Contact us to discuss how Halim & Company can help you
              achieve your industrial engineering goals.
            </p>
            <div className="flex items-center gap-4 mt-8">
              <PhoneCallIcon size={20} fill="#000" />
              <span className="text-black font-poppins leading-5">123-456-7890</span>
            </div>
            <div className="flex items-center gap-4 mt-8">
              <MailIcon />
              <span className="text-black font-poppins leading-5">
                <a href="mailto:demo@gmail.com">demo@gmail.com</a>
              </span>
            </div>
            <div className="flex gap-4 mt-8">
              <MapPinIcon />
              <span className="text-black font-poppins leading-5">
                132 Dartmouth Street Boston, Massachusetts 02156 United States
              </span>
            </div>
          </div>
          <div className="p-14 lg:px-10 xl:px-14 bg-primary rounded-tr-vl mt-16 md:-ml-8">
            <h2 className="font-copperplate-gothic-bold text-4xl text-white text-center">
              Request for a Call
            </h2>
            <ContactUsForm />
          </div>
        </section>
      </div>
    </>
  );
}
