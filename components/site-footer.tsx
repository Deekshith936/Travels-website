import Link from 'next/link';
import { Mail, MapPin, MessageCircle, Phone } from 'lucide-react';

export function SiteFooter() {
  return (
    <footer className="bg-[#0A1E2E] px-4 py-12 text-gray-300 md:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <h3 className="mb-4 text-lg font-semibold text-white">Nayana Tours and Travels</h3>
          <p className="text-sm">Premium cab and travel partner for airport transfers, intercity routes, and corporate movement across Bangalore & South India.</p>
        </div>
        <div>
          <h4 className="mb-4 text-lg font-semibold text-white">Quick Links</h4>
          <div className="space-y-2 text-sm">
            {['/', '/fleet', '/routes', '/corporate', '/contact', '/booking'].map((href) => (
              <Link key={href} href={href} className="block hover:text-[#D4A853]">{href === '/' ? 'Home' : href.replace('/', '').replace('-', ' ')}</Link>
            ))}
          </div>
        </div>
        <div>
          <h4 className="mb-4 text-lg font-semibold text-white">Contact</h4>
          <div className="space-y-2 text-sm">
            <a href="tel:9742965513" className="flex items-center gap-2 hover:text-[#D4A853]"><Phone className="h-4 w-4 text-[#D4A853]" />9742965513</a>
            <a href="https://wa.me/919742965513" className="flex items-center gap-2 hover:text-[#D4A853]"><MessageCircle className="h-4 w-4 text-[#D4A853]" />WhatsApp</a>
            <a href="mailto:nayanatoursandtravelsbangalore@gmail.com" className="flex items-center gap-2 hover:text-[#D4A853]"><Mail className="h-4 w-4 text-[#D4A853]" />Email Us</a>
            <p className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4 text-[#D4A853]" />Gruhalakshmi Housing Colony, Nagasandra, Bengaluru, 560073</p>
          </div>
        </div>
        <div>
          <h4 className="mb-4 text-lg font-semibold text-white">Reviews & Legal</h4>
          <div className="space-y-2 text-sm">
            <a href="https://g.page/r/CQ" target="_blank" className="block hover:text-[#D4A853]" rel="noreferrer">Leave a Review</a>
            <Link href="/terms" className="block hover:text-[#D4A853]">Terms & Conditions</Link>
            <Link href="/privacy" className="block hover:text-[#D4A853]">Privacy Policy</Link>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-8 max-w-7xl border-t border-gray-800 pt-8 text-center text-sm text-gray-500">© 2025 Nayana Tours and Travels. All rights reserved.</div>
    </footer>
  );
}
