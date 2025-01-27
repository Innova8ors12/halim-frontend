'use client';

import React, { FC } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { MenuIcon } from 'lucide-react';
import { Button } from '../ui/button';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '../ui/drawer';

const links = [
  { href: '/', label: 'Home' },
  { href: '/industries', label: 'Industries' },
  { href: '/services', label: 'Services' },
  { href: '/our-projects', label: 'Our Projects' },
  { href: '/about-us', label: 'About Us' },
  { href: '/contact-us', label: 'Contact Us' },
];

export const Navbar: FC = () => {
  const pathname = usePathname();
  return (
    <>
      <nav className="hidden md:flex justify-center items-center gap-4 w-full text-gray-500 font-medium text-sm">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`${pathname === link.href ? 'text-primary font-bold' : 'text-gray-500'}`}
          >
            {link.label}
          </Link>
        ))}
      </nav>
      <Drawer>
        <DrawerTrigger asChild>
          <Button
            variant="outline"
            className="md:hidden h-8 w-8 shrink-0 bg-white p-2 rounded-md border-primary text-primary"
          >
            <MenuIcon />
          </Button>
        </DrawerTrigger>
        <DrawerContent>
          <div className="container pb-4">
            <DrawerHeader>
              <DrawerTitle>
                <p className="font-ovo text-2xl text-primary fit-content text-nowrap">
                  Halim & Co.
                </p>
              </DrawerTitle>
            </DrawerHeader>
            <nav className="flex md:hidden flex-col gap-4 w-full text-gray-500 font-medium text-sm">
              {links.map((link) => (
                <DrawerClose asChild key={link.href}>
                  <Link
                    href={link.href}
                    className={`${pathname === link.href ? 'text-primary font-bold' : 'text-gray-500'}`}
                  >
                    {link.label}
                  </Link>
                </DrawerClose>
              ))}
            </nav>
          </div>
        </DrawerContent>
      </Drawer>
    </>
  );
};
