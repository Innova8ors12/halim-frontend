import { FC } from 'react';
import Link from 'next/link';
import { Mail, Phone } from 'lucide-react';
import { FacebookIcon } from '../icons/facebook';
import { InstagramIcon } from '../icons/instagram';
import { TwitterIcon } from '../icons/twitter';
import { YouTubeIcon } from '../icons/youtube';

export const SocialBar: FC = () => {
  return (
    <div className="w-full bg-black text-white font-roboto text-sm hidden md:block">
      <div className="container py-2 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Phone size="16" />
            <Link href="tel:+1234567890">(+123) 456-7890</Link>
          </div>
          <div className="flex items-center gap-2">
            <Mail size="16" />
            <Link href="mailto:loremipsum@gmail.com">loremipsum@gmail.com</Link>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Link href="https://twitter.com">
            <TwitterIcon />
          </Link>
          <Link href="https://facebook.com">
            <FacebookIcon />
          </Link>
          <Link href="https://instagram.com">
            <InstagramIcon />
          </Link>
          <Link href="https://youtube.com">
            <YouTubeIcon />
          </Link>
        </div>
      </div>
    </div>
  );
};
