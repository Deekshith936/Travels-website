import Link from 'next/link';
import { getSession } from '@/lib/auth';
import { redirect } from 'next/navigation';

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const session = await getSession();
  if (!session) redirect('/admin/login');

  return (
    <div className="grid min-h-screen md:grid-cols-[240px_1fr]">
      <aside className="bg-slate-900 p-5 text-white">
        <p className="text-xl font-bold">Nayana Admin</p>
        <p className="mt-1 text-xs text-slate-300">{session.name} ({session.role})</p>
        <nav className="mt-6 space-y-3 text-sm">
          <Link className="block" href="/admin">Dashboard</Link>
          <Link className="block" href="/admin/vehicles">Vehicles</Link>
          <Link className="block" href="/admin/bookings">Bookings</Link>
        </nav>
      </aside>
      <main className="p-6">{children}</main>
    </div>
  );
}
