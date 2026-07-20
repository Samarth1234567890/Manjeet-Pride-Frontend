import './globals.css';
import type { Metadata } from 'next';
import { Cormorant_Garamond, Inter } from 'next/font/google';
import { SITE } from '@/lib/content';

const serif = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-serif',
  display: 'swap',
});

const sans = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://manjeetpride.example.com'),
  title: {
    default: `${SITE.name} — ${SITE.tagline}`,
    template: `%s · ${SITE.name}`,
  },
  description: SITE.description ?? undefined,
  keywords: [
    'Manjeet Pride Group',
    'luxury real estate',
    'premium residences',
    'Pune real estate',
    'architectural homes',
    'gated communities',
  ],
  openGraph: {
    type: 'website',
    title: `${SITE.name} — ${SITE.tagline}`,
    description: SITE.description ?? undefined,
    siteName: SITE.name,
    images: [{ url: SITE.ogImage }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE.name} — ${SITE.tagline}`,
    description: SITE.description ?? undefined,
    images: [SITE.ogImage],
  },
  icons: {
    icon: '/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
