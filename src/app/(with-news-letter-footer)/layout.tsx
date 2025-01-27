import { NewsLetterFooter } from '@/components/Footer/NewsLetterFooter';

export default function LayoutWithNewsLetterFooter({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      {children}
      <NewsLetterFooter />
    </main>
  );
}
