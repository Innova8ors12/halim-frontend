import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import Providers from '@/providers';

import './globals.css';

const montserrat = Montserrat({
  variable: '--font-montserrat',
  subsets: ['latin'],
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
      <body className={`${montserrat.variable} antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
