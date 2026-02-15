'use client';

import { useEffect, useMemo, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select } from '@/components/ui/select';

type Vehicle = { id: string; name: string; pricingPerKm: number; availability: boolean };

export default function BookPage() {
  const [step, setStep] = useState(1);
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [form, setForm] = useState({
    pickup: 'Bangalore', dropLocation: 'Mysore', distanceKm: 150, tripDate: '', passengers: 4,
    vehicleId: '', customerName: '', customerPhone: '', customerEmail: ''
  });

  useEffect(() => { fetch('/api/vehicles').then((r) => r.json()).then(setVehicles); }, []);
  const selected = useMemo(() => vehicles.find((v) => v.id === form.vehicleId), [vehicles, form.vehicleId]);
  const total = (selected?.pricingPerKm || 0) * Number(form.distanceKm) + 400;

  async function confirmBooking() {
    const res = await fetch('/api/bookings', {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...form, fareTotal: total })
    });
    if (res.ok) setStep(6);
  }

  return (
    <main className="mx-auto max-w-3xl space-y-6 px-4 py-8">
      <h1 className="text-3xl font-bold">Book Your Cab</h1>
      <p className="text-sm text-slate-600">Step {Math.min(step, 5)} of 5</p>

      {step === 1 && <div className="card space-y-3 p-4"><Input placeholder="Pickup" value={form.pickup} onChange={(e) => setForm({ ...form, pickup: e.target.value })} /><Input placeholder="Drop" value={form.dropLocation} onChange={(e) => setForm({ ...form, dropLocation: e.target.value })} /><Input type="number" placeholder="Distance Km" value={form.distanceKm} onChange={(e) => setForm({ ...form, distanceKm: Number(e.target.value) })} /><Input type="datetime-local" value={form.tripDate} onChange={(e) => setForm({ ...form, tripDate: e.target.value })} /><Button onClick={() => setStep(2)}>Next</Button></div>}

      {step === 2 && <div className="card space-y-3 p-4"><Select value={form.vehicleId} onChange={(e) => setForm({ ...form, vehicleId: e.target.value })}><option value="">Select vehicle</option>{vehicles.filter(v=>v.availability).map(v => <option key={v.id} value={v.id}>{v.name} - ₹{v.pricingPerKm}/km</option>)}</Select><Input type="number" value={form.passengers} onChange={(e) => setForm({ ...form, passengers: Number(e.target.value) })} /><Button onClick={() => setStep(3)}>Next</Button></div>}

      {step === 3 && <div className="card space-y-3 p-4"><Input placeholder="Name" value={form.customerName} onChange={(e) => setForm({ ...form, customerName: e.target.value })} /><Input placeholder="Phone" value={form.customerPhone} onChange={(e) => setForm({ ...form, customerPhone: e.target.value })} /><Input placeholder="Email" value={form.customerEmail} onChange={(e) => setForm({ ...form, customerEmail: e.target.value })} /><Button onClick={() => setStep(4)}>Next</Button></div>}

      {step === 4 && <div className="card p-4"><p>Fare Breakdown: {form.distanceKm} km × ₹{selected?.pricingPerKm || 0} + driver bata ₹400</p><p className="mt-2 text-xl font-bold">Total ₹{total}</p><Button className="mt-4" onClick={() => setStep(5)}>Proceed to Payment</Button></div>}

      {step === 5 && <div className="card p-4"><p>Razorpay Integration Placeholder</p><Button className="mt-4" onClick={confirmBooking}>Pay & Confirm</Button></div>}

      {step === 6 && <div className="card p-4"><h2 className="text-xl font-bold text-green-700">Booking Confirmed!</h2><p>You will receive SMS/Email shortly.</p></div>}
    </main>
  );
}
