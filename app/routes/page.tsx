'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useMemo, useState } from 'react';
import { Clock3, MapPinned, Search } from 'lucide-react';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { WhatsappFloat } from '@/components/whatsapp-float';
import { routes } from '@/lib/site-data';

export default function RoutesPage() {
  const [query, setQuery] = useState('');
  const filtered = useMemo(() => routes.filter((route) => route.name.toLowerCase().includes(query.toLowerCase())), [query]);

  return (
    <main className="bg-[#F9FAFB]">
      <SiteHeader />
      <section className="bg-[#0A1E2E] px-4 pb-16 pt-24 text-center text-white md:px-8">
        <h1 className="text-5xl font-bold">Explore South India with Us</h1>
        <p className="mt-2 text-white/80">Carefully curated routes to the best destinations</p>
        <div className="mx-auto mt-6 flex max-w-xl items-center rounded-xl bg-white px-4 py-3 text-gray-700">
          <Search className="h-5 w-5" />
          <input value={query} onChange={(e) => setQuery(e.target.value)} className="w-full px-3 outline-none" placeholder="Search destinations (e.g., Mysore, Coorg, Ooty)" />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 md:px-8">
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {filtered.map((route) => (
            <article key={route.name} className="overflow-hidden rounded-2xl border bg-white shadow-md transition hover:-translate-y-1 hover:shadow-xl">
              <div className="relative aspect-[16/9]">
                <Image src={route.image} alt={route.name} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <h3 className="absolute bottom-3 left-4 text-xl font-bold text-white">{route.name}</h3>
              </div>
              <div className="p-6">
                <p className="flex items-center gap-3 text-sm text-gray-600"><MapPinned className="h-4 w-4" />{route.distance} <Clock3 className="ml-2 h-4 w-4" /> {route.duration}</p>
                <p className="mt-4 text-gray-700">Premium door-to-door service with verified drivers and clean vehicles for family, leisure, and corporate travel.</p>
                <div className="mt-6 flex gap-3">
                  <Link href="/routes" className="rounded-lg border border-[#D4A853] px-4 py-2 font-medium text-[#D4A853]">View Details</Link>
                  <Link href="/booking" className="rounded-lg bg-[#D4A853] px-4 py-2 font-medium text-white">Book This Route</Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
      <SiteFooter />
      <WhatsappFloat />
    </main>
  );
}
