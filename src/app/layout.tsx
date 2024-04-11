import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Link from 'next/link';
import { GoogleAnalytics } from '@next/third-parties/google';

const inter = Inter({ subsets: ['latin'] });

const baseMetaData: Metadata = {
  title: {
    template: '%s | Strength Training Tools',
    default: 'Strength Training Tools',
  },
  twitter: {
    card: 'summary_large_image',
  },
  openGraph: {
    images: ['/og'],
  },
};

if (process.env.VERCEL_ENV === 'production') {
  baseMetaData.metadataBase = new URL('https://strengthlevel.fit');
}

export const metadata = baseMetaData;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="max-w-[960px] mx-auto p-4">
          <nav className="flex gap-4 *:transition *:border-b-2">
            <Link className="hover:text-teal-800 border-b-transparent hover:border-b-teal-800" href="/">
              Calculators
            </Link>
            <Link className="hover:text-teal-800 border-b-transparent hover:border-b-teal-800" href="/one-rm-calculator">
              1RM Calculator
            </Link>
            <Link className="hover:text-teal-800 border-b-transparent hover:border-b-teal-800" href="/one-rm-percentages">
              1RM Percentages
            </Link>
          </nav>
        </header>
        <main className="max-w-[960px] mx-auto">{children}</main>
      </body>
      <GoogleAnalytics gaId="G-5W05BE9Z2Y" />
    </html>
  );
}
