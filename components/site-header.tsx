'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, Phone, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

const links = [
  { href: '/', label: 'Home' },
  { href: '/fleet', label: 'Fleet & Pricing' },
  { href: '/routes', label: 'Routes' },
  { href: '/corporate', label: 'Corporate' },
  { href: '/contact', label: 'Contact' }
];

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 50);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={cn('sticky top-0 z-50 transition-all duration-300', solid ? 'bg-[#0A1E2E]/95 shadow-md backdrop-blur-lg' : 'bg-transparent')}>
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 md:px-8">
        <Link href="/" className="font-montserrat text-xl font-bold text-white">Nayana Tours & Travels</Link>
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className={cn('font-medium text-white transition hover:text-[#D4A853]', pathname === link.href && 'text-[#D4A853]')}>
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-3 md:flex">
          <Link href="/login" className="rounded-xl border border-white px-4 py-2 text-white">Login</Link>
          <Link href="/booking" className="rounded-xl bg-[#D4A853] px-5 py-2 font-semibold text-white">Book Now</Link>
        </div>
        <button className="text-white md:hidden" onClick={() => setOpen(true)} aria-label="menu"><Menu /></button>
      </div>

      {open && (
        <div className="fixed inset-0 z-[60] bg-black/50 md:hidden" onClick={() => setOpen(false)}>
          <aside className="ml-auto h-full w-72 bg-[#0A1E2E] p-6" onClick={(e) => e.stopPropagation()}>
            <div className="mb-8 flex justify-end"><button onClick={() => setOpen(false)} className="text-white"><X /></button></div>
            <div className="space-y-4">
              {links.map((link) => <Link key={link.href} href={link.href} onClick={() => setOpen(false)} className="block text-lg text-white">{link.label}</Link>)}
            </div>
            <div className="mt-10 space-y-3">
              <Link href="/login" className="block rounded-xl border border-white px-4 py-3 text-center text-white">Login</Link>
              <Link href="/booking" className="block rounded-xl bg-[#D4A853] px-4 py-3 text-center font-semibold text-white">Book Now</Link>
              <a href="tel:9742965513" className="flex items-center justify-center gap-2 text-[#D4A853]"><Phone className="h-4 w-4" /> 9742965513</a>
            </div>
          </aside>
        </div>
      )}
    </header>
  );
}
