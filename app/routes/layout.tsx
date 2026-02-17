import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Popular Routes from Bangalore | Nayana Tours',
  description: 'Explore Bangalore to Mysore, Coorg, Chikmagalur, Hampi and other curated South India routes.'
};

export default function RoutesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
