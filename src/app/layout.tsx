import type { Metadata } from 'next';
import { Montserrat, Ovo, Poppins, Roboto } from 'next/font/google';
import localFont from 'next/font/local';
import Providers from '@/providers';

import './globals.css';

import { Footer } from '@/components/Footer/Footer';
import { Header } from '@/components/Header/Header';

const montserrat = Montserrat({
  variable: '--font-montserrat',
  subsets: ['latin'],
  display: 'swap',
});

const roboto = Roboto({
  variable: '--font-roboto',
  subsets: ['latin'],
  display: 'swap',
  weight: '400',
});

const ovo = Ovo({
  variable: '--font-ovo',
  subsets: ['latin'],
  display: 'swap',
  weight: '400',
});

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  display: 'swap',
  weight: '400',
});

const copperPlateGothicBold = localFont({
  src: '../../public/assets/fonts/Copperplate Gothic Bold Regular/Copperplate Gothic Bold Regular.ttf',
  variable: '--font-copperplate-gothic-bold',
  display: 'swap',
});

const copperPlateGothicLight = localFont({
  src: '../../public/assets/fonts/Copperplate Gothic Light Regular/Copperplate Gothic Light Regular.ttf',
  variable: '--font-copperplate-gothic-light',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Halim & Co.',
  description:
    'Halim & Company specialize in providing top-tier industrial engineering consulting services. With a focus on optimizing operations, increasing efficiency, and fostering innovation, our team of experts is dedicated to helping businesses thrive.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${roboto.variable} ${ovo.variable} ${poppins.variable} ${copperPlateGothicBold.variable} ${copperPlateGothicLight.variable} antialiased`}
      >
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
