import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Fleet - Premium Vehicles | Nayana Tours',
  description: 'Choose from our well-maintained standard and luxury fleet with transparent pricing and verified drivers.'
};

export default function FleetLayout({ children }: { children: React.ReactNode }) {
  return children;
}
