import type { Metadata } from 'next';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';

export const metadata: Metadata = {
  title: 'Terms & Conditions | Nayana Tours and Travels',
  description: 'Booking policy, cancellation rules, payment terms, and service conditions for Nayana Tours and Travels.'
};

const sections = [
  {
    title: '1. Booking Policy',
    body: [
      'All bookings should be made at least 24 hours in advance for outstation trips. Local trips can be requested with 4 hours notice subject to availability.',
      'A 10% advance is mandatory for confirmation. Bookings are considered confirmed only after the advance is received.'
    ]
  },
  {
    title: '2. Cancellation Policy',
    body: [
      '24+ hours before trip: Full refund of advance payment.',
      'Within 24 hours: 50% refund of advance payment.',
      'Same-day cancellation/no-show: No refund.',
      'No refund for buses and large vehicles (12+ seater) once booked.'
    ]
  },
  {
    title: '3. Payment Terms',
    body: [
      '10% advance at booking and remaining 90% before trip completion.',
      'Accepted modes: Cash, UPI, bank transfer. Payment gateway integration ready (Razorpay keys pending).',
      'GST invoices can be shared on request.'
    ]
  },
  {
    title: '4. Pricing & Additional Charges',
    body: [
      'Base fare includes vehicle rent, fuel, and driver salary.',
      'Toll, parking, state permit, and airport entry charges are extra on actuals.'
    ]
  },
  {
    title: '5. Vehicle & Driver',
    body: [
      'All vehicles are maintained, cleaned, and safety checked regularly.',
      'Drivers are verified, licensed, and route experienced.',
      'In case of emergency/breakdown, equivalent or upgraded replacement may be provided.'
    ]
  },
  {
    title: '6. Customer Responsibilities',
    body: [
      'Provide accurate pickup/drop details and be punctual (15-minute grace).',
      'No smoking, alcohol consumption, or illegal activity inside the vehicle.'
    ]
  },
  {
    title: '7. Liability & Insurance',
    body: [
      'Company is not responsible for delays caused by traffic, weather, strikes, or road closures.',
      'Liability is limited to booking value to the extent allowed by law.'
    ]
  },
  {
    title: '8. Overtime & Extra Kilometers',
    body: [
      'Local packages beyond 8hrs/80km are billed as per vehicle rate card.',
      'Outstation trips follow minimum km/day and additional km charges.'
    ]
  },
  {
    title: '9. Dispute Resolution',
    body: ['Disputes are subject to Bangalore jurisdiction. Complaints should be raised within 48 hours of trip completion.']
  }
];

export default function TermsPage() {
  return (
    <main className="bg-[#F9FAFB]">
      <SiteHeader />
      <section className="mx-auto max-w-4xl px-4 pb-20 pt-28 md:px-8">
        <h1 className="text-4xl font-bold text-[#0A1E2E]">Terms & Conditions</h1>
        <p className="mt-2 text-sm text-gray-500">Last updated: 17 Feb 2026</p>

        <div className="mt-8 space-y-8 rounded-2xl border bg-white p-6 shadow-sm md:p-8">
          {sections.map((section) => (
            <article key={section.title} className="space-y-3">
              <h2 className="text-xl font-semibold text-[#0A1E2E]">{section.title}</h2>
              {section.body.map((line) => (
                <p key={line} className="leading-relaxed text-gray-700">{line}</p>
              ))}
            </article>
          ))}

          <div className="rounded-xl bg-gray-50 p-4 text-sm text-gray-700">
            For terms-related queries: <a className="font-semibold text-[#D4A853]" href="mailto:nayanatoursandtravelsbangalore@gmail.com">nayanatoursandtravelsbangalore@gmail.com</a> · 9742965513
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
