'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useMemo, useState } from 'react';
import { Calendar, Users } from 'lucide-react';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { WhatsappFloat } from '@/components/whatsapp-float';
import { featuredVehicles } from '@/lib/site-data';

export default function FleetPage() {
  const [category, setCategory] = useState<'All' | 'Standard Fleet' | 'Luxury Fleet'>('Standard Fleet');
  const [search, setSearch] = useState('');

  const vehicles = useMemo(() => featuredVehicles.filter((v) => (category === 'All' ? true : v.category === category) && v.name.toLowerCase().includes(search.toLowerCase())), [category, search]);

  return (
    <main className="bg-[#F9FAFB]">
      <SiteHeader />
      <section className="bg-[#0A1E2E] px-4 pb-16 pt-24 text-center text-white md:px-8">
        <h1 className="text-5xl font-bold">Our Premium Fleet</h1>
        <p className="mt-3 text-white/80">Choose from our wide range of well-maintained vehicles</p>
      </section>

      <section className="mx-auto -mt-8 max-w-7xl px-4 md:px-8">
        <div className="sticky top-24 z-20 rounded-2xl border bg-white p-4 shadow-md">
          <div className="flex flex-wrap gap-3">
            {['Standard Fleet', 'Luxury Fleet', 'All'].map((tab) => <button key={tab} onClick={() => setCategory(tab as never)} className={`rounded-lg px-5 py-2 font-semibold ${category === tab ? 'bg-[#D4A853] text-white' : 'border bg-white text-gray-700'}`}>{tab}</button>)}
            <input value={search} onChange={(e) => setSearch(e.target.value)} className="ml-auto rounded-lg border px-4 py-2" placeholder="Search vehicles..." />
          </div>
        </div>

        <div className="grid gap-8 py-12 md:grid-cols-2 xl:grid-cols-3">
          {vehicles.map((vehicle) => (
            <article key={vehicle.name} className="overflow-hidden rounded-2xl border bg-white shadow-md transition hover:-translate-y-1 hover:shadow-2xl">
              <div className="relative aspect-[4/3]">
                <Image src={vehicle.image} alt={vehicle.name} fill className="object-cover" />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold text-[#0A1E2E]">{vehicle.name}</h2>
                <div className="mt-3 flex flex-wrap gap-2">
                  <span className="inline-flex items-center gap-1 rounded-full bg-[#D4A853]/10 px-3 py-1 text-sm text-[#D4A853]"><Users className="h-4 w-4" />{vehicle.seating}</span>
                  <span className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-700">{vehicle.category}</span>
                </div>
              </div>
              <div className="border-t bg-gray-50 p-6">
                <p className="font-semibold">Outstation Pricing</p>
                <div className="mt-3 grid grid-cols-2 gap-3 text-sm">
                  <div><p className="text-gray-600">Rate/km</p><p className="text-lg font-semibold">₹{vehicle.outstation.ratePerKm}</p></div>
                  <div><p className="text-gray-600">Allowance</p><p className="text-lg font-semibold">₹{vehicle.outstation.driverAllowance}/day</p></div>
                </div>
                <p className="mt-4 text-xs italic text-gray-500">Toll, parking, and state permit charges are extra.</p>
                <Link href="/booking" className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#D4A853] px-4 py-3 font-semibold text-white"><Calendar className="h-4 w-4" />Book This Vehicle</Link>
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
