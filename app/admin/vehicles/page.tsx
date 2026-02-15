'use client';

import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

type Vehicle = { id: string; name: string; category: string; capacity: number; pricingPerKm: number; registration: string; availability: boolean };

export default function VehiclesPage() {
  const [rows, setRows] = useState<Vehicle[]>([]);
  const [form, setForm] = useState({ name: '', category: '', capacity: 4, pricingPerKm: 18, registration: '' });

  async function load() {
    const res = await fetch('/api/vehicles');
    setRows(await res.json());
  }

  useEffect(() => { void load(); }, []);

  async function createVehicle(e: React.FormEvent) {
    e.preventDefault();
    await fetch('/api/vehicles', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form) });
    setForm({ name: '', category: '', capacity: 4, pricingPerKm: 18, registration: '' });
    await load();
  }

  async function remove(id: string) {
    await fetch(`/api/vehicles?id=${id}`, { method: 'DELETE' });
    await load();
  }

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Vehicle Management</h1>
      <form onSubmit={createVehicle} className="card grid gap-3 p-4 md:grid-cols-5">
        <Input required placeholder="Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
        <Input required placeholder="Category" value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })} />
        <Input type="number" required placeholder="Capacity" value={form.capacity} onChange={(e) => setForm({ ...form, capacity: Number(e.target.value) })} />
        <Input type="number" required placeholder="Price/km" value={form.pricingPerKm} onChange={(e) => setForm({ ...form, pricingPerKm: Number(e.target.value) })} />
        <Input required placeholder="Registration" value={form.registration} onChange={(e) => setForm({ ...form, registration: e.target.value })} />
        <Button type="submit" className="md:col-span-5">Add Vehicle</Button>
      </form>

      <div className="card overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-slate-100"><tr><th className="p-3 text-left">Name</th><th>Category</th><th>Capacity</th><th>Price/km</th><th>Reg.</th><th></th></tr></thead>
          <tbody>
            {rows.map((v) => (
              <tr key={v.id} className="border-t">
                <td className="p-3">{v.name}</td><td>{v.category}</td><td>{v.capacity}</td><td>₹{v.pricingPerKm}</td><td>{v.registration}</td>
                <td><button className="text-red-600" onClick={() => remove(v.id)}>Delete</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
