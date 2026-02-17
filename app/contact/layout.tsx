import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us - Book Your Ride | Nayana Tours',
  description: 'Call 9742965513, WhatsApp, or email Nayana Tours and Travels. Located in Nagasandra, Bangalore.'
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
