import { FC } from 'react';
import Link from 'next/link';
import { NAV_LINKS } from '@/constants/navbar';
import { FacebookIcon } from '../icons/facebook';
import { InstagramIcon } from '../icons/instagram';
import { TwitterIcon } from '../icons/twitter';
import { YouTubeIcon } from '../icons/youtube';

export const Footer: FC = () => {
  return (
    <footer className="w-full bg-white">
      <div className="container mx-auto py-16 font-copperplate-gothic-light text-black font-medium text-sm">
        <nav className="flex flex-wrap justify-center items-center gap-6 w-full">
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex justify-center items-center gap-4 w-full mt-8">
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
        <p className="text-center text-gray-500 mt-8 text-xs font-medium">
          &copy; {new Date().getFullYear()} Halim & Co. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
