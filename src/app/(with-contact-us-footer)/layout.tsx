import { ContactUsFooter } from '@/components/Footer/ContactUsFooter';

export default function LayoutWithContactUsFooter({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      {children}
      <ContactUsFooter />
    </main>
  );
}
