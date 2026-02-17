import type { Metadata } from 'next';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';

export const metadata: Metadata = {
  title: 'Privacy Policy | Nayana Tours and Travels',
  description: 'How Nayana Tours and Travels collects, uses, secures, and retains customer information.'
};

const sections = [
  {
    title: '1. Information We Collect',
    points: ['Personal details (name, phone, email, address)', 'Trip details and preferences', 'Technical data such as IP, browser, cookies']
  },
  {
    title: '2. How We Use Information',
    points: ['Booking operations and trip coordination', 'Customer communication and support', 'Security, fraud prevention, and legal compliance']
  },
  {
    title: '3. Data Sharing',
    points: ['Shared with assigned drivers only for service delivery', 'Shared with payment, email, and WhatsApp providers as needed', 'Never sold to third parties']
  },
  {
    title: '4. Cookies & Tracking',
    points: ['Session cookies for sign-in and booking flow', 'Analytics cookies for website improvements', 'Users can disable cookies in browser settings']
  },
  {
    title: '5. Data Security',
    points: ['Encrypted transport (HTTPS)', 'Role-based access controls', 'Periodic security reviews']
  },
  {
    title: '6. Data Retention',
    points: ['Booking records retained up to 5 years', 'Account data retained until deletion request', 'Anonymized analytics retained up to 2 years']
  },
  {
    title: '7. Your Rights',
    points: ['Access, correction, and deletion request', 'Data portability request', 'Opt out from promotional communication']
  }
];

export default function PrivacyPage() {
  return (
    <main className="bg-[#F9FAFB]">
      <SiteHeader />
      <section className="mx-auto max-w-4xl px-4 pb-20 pt-28 md:px-8">
        <h1 className="text-4xl font-bold text-[#0A1E2E]">Privacy Policy</h1>
        <p className="mt-3 text-gray-600">Your trust matters to us. This policy explains how we handle your data responsibly.</p>

        <div className="mt-8 space-y-8 rounded-2xl border bg-white p-6 shadow-sm md:p-8">
          {sections.map((section) => (
            <article key={section.title}>
              <h2 className="text-xl font-semibold text-[#0A1E2E]">{section.title}</h2>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-gray-700">
                {section.points.map((point) => <li key={point}>{point}</li>)}
              </ul>
            </article>
          ))}

          <div className="rounded-xl bg-gray-50 p-4 text-sm text-gray-700">
            Privacy contact: <a className="font-semibold text-[#D4A853]" href="mailto:nayanatoursandtravelsbangalore@gmail.com">nayanatoursandtravelsbangalore@gmail.com</a>
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
