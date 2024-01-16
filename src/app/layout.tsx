import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.css';
import Header from '@/components/header/header';
import { Sorts_Mill_Goudy } from 'next/font/google';

export const sorts_Mill_Goudy = Sorts_Mill_Goudy({
  subsets: ['latin'],
  weight: ['400'],
});

const montserrat = Montserrat({ subsets: ['latin'] });

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
      <body className={`${montserrat.className} mx-auto max-w-7xl p-4`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
