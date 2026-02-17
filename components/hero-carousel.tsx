'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Calendar, Car, ChevronDown } from 'lucide-react';
import { useEffect, useState } from 'react';
import { heroImages } from '@/lib/site-data';

export function HeroCarousel() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setIndex((v) => (v + 1) % heroImages.length), 5000);
    return () => clearInterval(id);
  }, [paused]);

  return (
    <section className="relative min-h-screen overflow-hidden" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <div className="absolute inset-0 transition-opacity duration-1000">
        <Image key={index} src={heroImages[index]} alt="Nayana Tours" fill priority={index === 0} className="object-cover" />
      </div>
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-4 text-center md:px-8">
        <h1 className="font-playfair text-5xl font-bold leading-tight text-white md:text-7xl">Your Journey, Our Passion</h1>
        <p className="mt-4 text-xl text-white/90 md:text-2xl">Reliable Premium Cab & Travel Service<br />15+ Years of Trusted Travel Across South India</p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link href="/booking" className="inline-flex items-center gap-2 rounded-xl bg-[#D4A853] px-10 py-4 text-lg font-semibold text-white transition hover:bg-[#C29843]"><Calendar className="h-5 w-5" />Book Now</Link>
          <Link href="/fleet" className="inline-flex items-center gap-2 rounded-xl border-2 border-[#D4A853] px-10 py-4 text-lg font-semibold text-[#D4A853] transition hover:bg-[#D4A853] hover:text-white"><Car className="h-5 w-5" />Explore Fleet</Link>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 animate-bounce text-white"><ChevronDown /></div>
      <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 gap-2">
        {heroImages.map((_, i) => <button key={i} onClick={() => setIndex(i)} className={`h-2.5 w-2.5 rounded-full ${i === index ? 'bg-white' : 'bg-white/40'}`} />)}
      </div>
    </section>
  );
}
