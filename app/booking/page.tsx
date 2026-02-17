'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { CalendarCheck2, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import { useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { featuredVehicles } from '@/lib/site-data';

const schema = z.object({
  tripType: z.enum(['local', 'outstation']),
  date: z.string().min(1, 'Trip date is required'),
  pickup: z.string().min(3, 'Pickup location is required'),
  drop: z.string().min(3, 'Drop location is required'),
  vehicle: z.string().min(1, 'Select a vehicle'),
  passengers: z.coerce.number().min(1).max(20)
});

type FormValues = z.infer<typeof schema>;

export default function BookingPage() {
  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { tripType: 'outstation', date: '', pickup: '', drop: '', vehicle: featuredVehicles[0].name, passengers: 2 }
  });

  const values = form.watch();
  const selected = featuredVehicles.find((v) => v.name === values.vehicle) ?? featuredVehicles[0];
  const summary = useMemo(() => {
    if (values.tripType === 'local') {
      const subtotal = selected.local.packageRate + selected.local.driverAllowance;
      const advance = Math.round(subtotal * 0.1);
      return { subtotal, advance, balance: subtotal - advance, label: '8hrs/80km Package' };
    }
    const distance = 300;
    const days = 2;
    const subtotal = distance * selected.outstation.ratePerKm + days * selected.outstation.driverAllowance;
    const advance = Math.round(subtotal * 0.1);
    return { subtotal, advance, balance: subtotal - advance, label: `${distance} km • ${days} days` };
  }, [values.tripType, selected]);

  return (
    <main className="bg-[#F9FAFB]">
      <SiteHeader />
      <section className="mx-auto max-w-7xl px-4 pb-16 pt-28 md:px-8">
        <h1 className="text-4xl font-bold text-[#0A1E2E]">Book Your Ride</h1>
        <p className="mt-2 text-gray-600">Payment gateway integration ready - add Razorpay keys.</p>

        <div className="mt-8 grid gap-8 lg:grid-cols-5">
          <form onSubmit={form.handleSubmit(() => alert('Booking received!'))} className="space-y-6 lg:col-span-3">
            <div className="rounded-2xl border bg-white p-6 shadow-sm">
              <h2 className="mb-4 text-xl font-semibold">Trip Details</h2>
              <div className="grid gap-4 md:grid-cols-2">
                <select className="rounded-lg border px-4 py-3" {...form.register('tripType')}>
                  <option value="outstation">Outstation</option>
                  <option value="local">Local (8hrs/80km)</option>
                </select>
                <input type="date" className="rounded-lg border px-4 py-3" {...form.register('date')} />
                <input placeholder="Pickup location" className="rounded-lg border px-4 py-3" {...form.register('pickup')} />
                <input placeholder="Drop location" className="rounded-lg border px-4 py-3" {...form.register('drop')} />
              </div>
            </div>

            <div className="rounded-2xl border bg-white p-6 shadow-sm">
              <h2 className="mb-4 text-xl font-semibold">Vehicle Selection</h2>
              <div className="grid gap-3 md:grid-cols-2">
                {featuredVehicles.map((vehicle) => (
                  <label key={vehicle.name} className={`cursor-pointer rounded-xl border p-4 ${values.vehicle === vehicle.name ? 'border-[#D4A853] bg-[#D4A853]/5' : ''}`}>
                    <input type="radio" value={vehicle.name} className="mb-2" {...form.register('vehicle')} />
                    <p className="font-semibold">{vehicle.name}</p>
                    <p className="text-sm text-gray-600">{vehicle.seating}</p>
                  </label>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border bg-white p-6 shadow-sm">
              <h2 className="mb-4 text-xl font-semibold">Passenger Details</h2>
              <input type="number" min={1} max={20} className="w-full rounded-lg border px-4 py-3" {...form.register('passengers')} />
            </div>

            <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#D4A853] px-6 py-4 text-lg font-semibold text-white"><CheckCircle2 className="h-5 w-5" />Confirm Booking</button>
          </form>

          <aside className="lg:col-span-2">
            <div className="sticky top-24 rounded-2xl border bg-white p-6 shadow-lg">
              <h3 className="text-2xl font-bold">Price Estimate</h3>
              <p className="mt-2 text-sm text-gray-600">{selected.name} • {summary.label}</p>
              <div className="mt-4 space-y-2 border-t pt-4">
                <div className="flex justify-between"><span>Estimated Total</span><span className="font-semibold">₹{summary.subtotal}</span></div>
                <div className="flex justify-between"><span>Advance (10%)</span><span className="font-semibold text-[#D4A853]">₹{summary.advance}</span></div>
                <div className="flex justify-between"><span>Balance (90%)</span><span className="font-semibold">₹{summary.balance}</span></div>
              </div>
              <p className="mt-4 text-xs text-gray-500">Prices are estimates and subject to final confirmation. Toll/parking extra.</p>
              <div className="mt-6 rounded-xl bg-green-50 p-4 text-sm text-green-700">
                <p className="font-semibold">What happens next?</p>
                <p className="mt-2">Our team contacts you via WhatsApp within 30 minutes to confirm and collect advance.</p>
              </div>
              <Link href="tel:9742965513" className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl border px-4 py-3 font-medium"><CalendarCheck2 className="h-4 w-4" />Call 9742965513</Link>
            </div>
          </aside>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
