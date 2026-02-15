'use client';

import { useEffect, useState } from 'react';
import { Select } from '@/components/ui/select';

type Booking = { id: string; bookingCode: string; pickup: string; dropLocation: string; status: string; fareTotal: number; customer: { name: string; phone: string } };

export default function BookingsAdminPage() {
  const [rows, setRows] = useState<Booking[]>([]);

  async function load() {
    const res = await fetch('/api/bookings');
    setRows(await res.json());
  }

  useEffect(() => { void load(); }, []);

  async function updateStatus(id: string, status: string) {
    await fetch(`/api/bookings/${id}`, { method: 'PATCH', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ status }) });
    await load();
  }

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Booking Management</h1>
      <div className="card overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-slate-100"><tr><th className="p-3 text-left">Booking</th><th>Customer</th><th>Route</th><th>Status</th><th>Amount</th></tr></thead>
          <tbody>
            {rows.map((b) => (
              <tr key={b.id} className="border-t">
                <td className="p-3">{b.bookingCode}</td>
                <td>{b.customer.name}<div className="text-xs text-slate-500">{b.customer.phone}</div></td>
                <td>{b.pickup} → {b.dropLocation}</td>
                <td><Select value={b.status} onChange={(e) => updateStatus(b.id, e.target.value)}>{['PENDING','CONFIRMED','DRIVER_ASSIGNED','IN_PROGRESS','COMPLETED','CANCELLED'].map((s)=><option key={s}>{s}</option>)}</Select></td>
                <td>₹{b.fareTotal}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
