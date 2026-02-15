import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nayana Tours & Travels | Bangalore Cab Service',
  description: 'Reliable Bangalore-based cab service for outstation, airport, local and corporate travel.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
