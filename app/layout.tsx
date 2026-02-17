import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nayana Tours and Travels | Premium Bangalore Cab Service',
  description: 'Reliable premium cab & travel services from Bangalore across South India. 15+ years experience, 5-star trusted service.',
  openGraph: {
    title: 'Nayana Tours and Travels',
    description: 'Premium cab service for airport, local, and outstation travel from Bangalore.',
    type: 'website'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
