import type { Metadata } from 'next';
import { Montserrat, Ovo, Roboto } from 'next/font/google';
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
      <body className={`${montserrat.variable} ${roboto.variable} ${ovo.variable} antialiased`}>
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
