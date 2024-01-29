import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.scss';
import Header from '@/components/header/header';
import { Providers } from './providers';

const mainFont = Montserrat({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Title Nail',
  description: 'desc',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='ru'>
      <body className={`${mainFont.className}`}>
        <Header />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
