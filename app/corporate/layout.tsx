import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Corporate Travel Solutions | Nayana Tours and Travels',
  description: 'Corporate travel partner in Bangalore for employee transportation, events, and airport transfers.'
};

export default function CorporateLayout({ children }: { children: React.ReactNode }) {
  return children;
}
