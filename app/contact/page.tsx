import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';

export default function ContactPage() {
  return (
    <main className="bg-[#F9FAFB]">
      <SiteHeader />
      <section className="mx-auto max-w-4xl px-4 pb-20 pt-28 text-center md:px-8">
        <h1 className="text-4xl font-bold text-[#0A1E2E]">Contact Nayana Tours and Travels</h1>
        <p className="mt-4 text-lg text-gray-700">Phone/WhatsApp: 9742965513 · Email: nayanatoursandtravelsbangalore@gmail.com</p>
        <p className="mt-2 text-gray-600">Gruhalakshmi Housing Colony, Nagasandra, Bangalore, Karnataka, 560073</p>
      </section>
      <SiteFooter />
    </main>
  );
}
