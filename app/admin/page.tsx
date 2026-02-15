import { prisma } from '@/lib/prisma';

export default async function AdminDashboard() {
  const [bookings, vehicles] = await Promise.all([
    prisma.booking.count(),
    prisma.vehicle.count({ where: { availability: true } })
  ]);

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      <div className="grid gap-4 md:grid-cols-3">
        <div className="card p-5"><p className="text-sm text-slate-500">Total Bookings</p><p className="text-3xl font-bold">{bookings}</p></div>
        <div className="card p-5"><p className="text-sm text-slate-500">Available Vehicles</p><p className="text-3xl font-bold">{vehicles}</p></div>
        <div className="card p-5"><p className="text-sm text-slate-500">Revenue (Mock)</p><p className="text-3xl font-bold">₹1,24,000</p></div>
      </div>
    </div>
  );
}
