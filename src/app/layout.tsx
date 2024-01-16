import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.css';
import Header from '@/components/header/header';
import { EB_Garamond } from 'next/font/google';

export const addFont = EB_Garamond({
  subsets: ['latin'],
  weight: ['400'],
});

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
      <body className={`${mainFont.className} mx-auto max-w-7xl`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
