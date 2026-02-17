import Link from 'next/link';
import { CarFront, Home, MapPinned, Search } from 'lucide-react';

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#F9FAFB] px-4 py-16">
      <div className="w-full max-w-2xl rounded-3xl border bg-white p-8 text-center shadow-lg md:p-12">
        <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-full bg-[#D4A853]/15 text-[#D4A853]">
          <CarFront className="h-14 w-14" />
        </div>
        <h1 className="mt-6 text-3xl font-bold text-[#0A1E2E]">Oops! Looks like you took a wrong turn</h1>
        <p className="mt-2 text-gray-600">The page you&apos;re looking for doesn&apos;t exist or has been moved.</p>

        <div className="mx-auto mt-6 flex max-w-lg items-center rounded-xl border px-4 py-3">
          <Search className="h-5 w-5 text-gray-400" />
          <input className="w-full px-3 outline-none" placeholder="Search our website..." />
        </div>

        <div className="mt-6 grid gap-3 text-left text-sm md:grid-cols-2">
          <Link href="/" className="rounded-lg border px-4 py-3 hover:bg-gray-50">🏠 Homepage</Link>
          <Link href="/fleet" className="rounded-lg border px-4 py-3 hover:bg-gray-50">🚗 Fleet & Pricing</Link>
          <Link href="/routes" className="rounded-lg border px-4 py-3 hover:bg-gray-50">🗺️ Popular Routes</Link>
          <Link href="/corporate" className="rounded-lg border px-4 py-3 hover:bg-gray-50">💼 Corporate Solutions</Link>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link href="/" className="inline-flex items-center gap-2 rounded-xl bg-[#D4A853] px-8 py-3 font-semibold text-white"><Home className="h-4 w-4" /> Take Me Home</Link>
          <Link href="/contact" className="inline-flex items-center gap-2 rounded-xl border px-8 py-3 font-semibold text-[#0A1E2E]"><MapPinned className="h-4 w-4" /> Contact Us</Link>
        </div>

        <p className="mt-8 text-xs text-gray-400">Error 404 - Page Not Found</p>
      </div>
    </main>
  );
}
