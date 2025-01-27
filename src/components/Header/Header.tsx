import React, { FC } from 'react';
import { Navbar } from '../Navbar/Navbar';
import { SocialBar } from '../SocialBar/SocialBar';

export const Header: FC = () => {
  return (
    <header className="w-full">
      <SocialBar />

      <main className="w-full bg-white">
        <div className="container flex items-center justify-between gap-4 py-4">
          <p className="font-ovo text-2xl text-primary fit-content text-nowrap">Halim & Co.</p>
          <Navbar />
        </div>
      </main>
    </header>
  );
};
