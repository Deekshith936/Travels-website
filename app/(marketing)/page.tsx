import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Building2, CheckCircle2, ExternalLink, HandHeart, MapPin, ShieldCheck, Star, UserCheck, Users } from 'lucide-react';
import { HeroCarousel } from '@/components/hero-carousel';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { WhatsappFloat } from '@/components/whatsapp-float';
import { featuredVehicles, reviews, routes } from '@/lib/site-data';


export const metadata: Metadata = {
  title: 'Nayana Tours and Travels - Premium Cab Service in Bangalore',
  description: "Bangalore's trusted travel partner for 15+ years. Premium cabs, verified drivers, and transparent pricing for South India travel.",
  keywords: ['Bangalore cab service', 'outstation cabs', 'airport taxi', 'corporate travel', 'Innova Crysta'],
  openGraph: {
    title: 'Nayana Tours and Travels - Premium Cab Service',
    description: '15+ years of trusted travel across Bangalore and South India.',
    url: 'https://nayanatoursandtravels.com',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nayana Tours - Premium Cab Service',
    description: '15+ years trusted travel partner'
  }
};

const services = [
  { title: 'Trusted Hygiene & Well-Maintained Vehicles', icon: ShieldCheck, description: 'Regular sanitization and maintenance. Clean, comfortable interiors for a premium experience.' },
  { title: 'Background-Verified Drivers', icon: UserCheck, description: 'Professional, courteous, and experienced drivers with local knowledge of routes.' },
  { title: 'Tested by Corporate Clients', icon: Building2, description: 'Trusted by major companies and event organizers. Reliable for business travel.' },
  { title: 'Complete Travel Care', icon: HandHeart, description: 'We handle all trip logistics. 24/7 customer support for your peace of mind.' },
  { title: 'Event Management Partnerships', icon: Users, description: 'Experience in handling large groups, conferences, and premium events.' }
];

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Nayana Tours and Travels",
  telephone: "+919742965513",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Gruhalakshmi Housing Colony, Nagasandra",
    addressLocality: "Bangalore",
    addressRegion: "Karnataka",
    postalCode: "560073",
    addressCountry: "IN"
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: "15"
  }
};

export default function HomePage() {
  return (
    <main className="bg-[#F9FAFB] text-[#111827]">
      <script type="application/ld+json" suppressHydrationWarning dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <SiteHeader />
      <HeroCarousel />

      <section className="bg-white py-6">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 text-center md:grid-cols-4 md:px-8">
          {['⭐ 5.0 Star Rating on Google', '🚗 15+ Years of Excellence', '👥 1000+ Happy Customers', '✓ Tested by Corporate Clients'].map((badge) => (
            <div key={badge} className="font-medium text-gray-700">{badge}</div>
          ))}
        </div>
      </section>

      <section className="bg-gray-50 py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 md:grid-cols-2 md:px-8">
          <div className="relative h-[360px] overflow-hidden rounded-2xl shadow-2xl">
            <Image src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=1200&q=80" alt="About Nayana" fill className="object-cover" />
          </div>
          <div>
            <h2 className="mb-6 text-4xl font-bold text-[#0A1E2E]">About Nayana Tours and Travels</h2>
            <p className="space-y-4 text-lg leading-relaxed text-gray-700">Founded in 2008, Nayana Tours and Travels has been Bangalore&apos;s premier choice for worry-free travel solutions. With 15+ years of experience, we&apos;ve proudly served over 1,000 satisfied customers across South India and beyond.<br /><br />Our mission is simple: provide stress-free, reliable travel where we take complete responsibility for your journey from start to finish.<br /><br />What makes us different? We don&apos;t just provide vehicles - we provide peace of mind.</p>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <h2 className="text-center text-4xl font-bold text-[#0A1E2E]">Why Choose Nayana Tours and Travels</h2>
          <p className="mt-3 text-center text-gray-600">Your Trusted Travel Partner</p>
          <div className="mt-10 grid gap-6 md:grid-cols-3 xl:grid-cols-5">
            {services.map((service) => (
              <article key={service.title} className="rounded-xl border border-gray-200 bg-white p-6 shadow-md transition hover:scale-[1.02] hover:shadow-lg">
                <div className="inline-flex rounded-full bg-[#D4A853]/10 p-3"><service.icon className="h-6 w-6 text-[#D4A853]" /></div>
                <h3 className="mt-4 text-lg font-semibold text-[#0A1E2E]">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">{service.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0A1E2E] py-16 text-white">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-10 px-4 text-center md:grid-cols-4 md:px-8">
          <div><p className="text-5xl font-bold text-[#D4A853]">15+</p><p className="mt-2 text-white/80">Years of Excellence</p></div>
          <div><p className="text-5xl font-bold text-[#D4A853]">1000+</p><p className="mt-2 text-white/80">Happy Customers</p></div>
          <div><p className="text-5xl font-bold text-[#D4A853]">5.0</p><p className="mt-2 text-white/80">Star Rating</p></div>
          <div><p className="text-5xl font-bold text-[#D4A853]">Multiple</p><p className="mt-2 text-white/80">Vehicles in Fleet</p></div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <h2 className="text-center text-4xl font-bold text-[#0A1E2E]">Our Premium Fleet</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {featuredVehicles.slice(0, 4).map((vehicle) => (
              <article key={vehicle.name} className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-md transition hover:-translate-y-1 hover:shadow-xl">
                <div className="relative aspect-[4/3]">
                  <Image src={vehicle.image} alt={vehicle.name} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#0A1E2E]">{vehicle.name}</h3>
                  <p className="mt-2 inline-flex rounded-full bg-[#D4A853]/10 px-3 py-1 text-sm text-[#D4A853]">{vehicle.seating}</p>
                  <p className="mt-4 text-lg font-semibold text-gray-700">Starting ₹{vehicle.outstation.ratePerKm}/km</p>
                  <Link href="/booking" className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#D4A853] px-4 py-3 font-semibold text-white">Book Now <ArrowRight className="h-4 w-4" /></Link>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-8 text-center"><Link href="/fleet" className="rounded-xl bg-[#D4A853] px-8 py-3 font-semibold text-white">Explore Complete Fleet</Link></div>
        </div>
      </section>

      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <h2 className="text-center text-4xl font-bold text-[#0A1E2E]">Popular Destinations from Bangalore</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {routes.map((route) => (
              <article key={route.name} className="relative h-80 overflow-hidden rounded-2xl">
                <Image src={route.image} alt={route.name} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-6 text-white">
                  <div className="mt-auto flex h-full flex-col justify-end">
                    <h3 className="text-2xl font-bold">{route.name}</h3>
                    <p className="mt-2 flex items-center gap-2 text-sm"><MapPin className="h-4 w-4" />{route.distance} • {route.duration}</p>
                    <p className="mt-2 text-xl font-semibold text-[#D4A853]">{route.price}</p>
                    <div className="mt-4 flex gap-3"><Link href="/booking" className="rounded-lg bg-white px-4 py-2 text-sm font-semibold text-[#D4A853]">Book This Route</Link><Link href="/routes" className="text-sm underline">View Details</Link></div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <h2 className="text-center text-4xl font-bold text-[#0A1E2E]">What Our Customers Say</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {reviews.map((review) => (
              <article key={review.author} className="rounded-2xl border-2 border-gray-200 bg-white p-8 shadow-md">
                <p className="text-2xl text-[#D4A853]">★★★★★</p>
                <p className="mt-4 text-lg italic leading-relaxed text-gray-700">“{review.text}”</p>
                <p className="mt-4 font-semibold text-[#0A1E2E]">{review.author}</p>
                <p className="mt-1 flex items-center gap-2 text-sm text-green-600"><CheckCircle2 className="h-4 w-4" />Verified Google Review</p>
              </article>
            ))}
          </div>
          <div className="mt-8 text-center"><a className="inline-flex items-center gap-2 rounded-xl border-2 border-[#D4A853] px-6 py-3 font-semibold text-[#D4A853]" href="https://www.google.com" target="_blank" rel="noreferrer">Leave a Review on Google <ExternalLink className="h-4 w-4" /></a></div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-[#0A1E2E] to-[#1A3A52] py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 text-center md:px-8">
          <h2 className="text-4xl font-bold">Ready to Start Your Journey?</h2>
          <p className="mt-3 text-xl text-white/80">Book your vehicle now and experience worry-free travel</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/booking" className="rounded-xl bg-[#D4A853] px-12 py-4 text-lg font-semibold">Book a Vehicle</Link>
            <a href="tel:9742965513" className="rounded-xl border border-white px-12 py-4 text-lg font-semibold">Contact Us</a>
          </div>
          <div className="mt-6 flex flex-wrap justify-center gap-6 text-sm text-white/90">
            <a href="tel:9742965513" className="inline-flex items-center gap-2"><Star className="h-4 w-4" />9742965513</a>
            <a href="https://wa.me/919742965513" className="inline-flex items-center gap-2">WhatsApp: 9742965513</a>
            <a href="mailto:nayanatoursandtravelsbangalore@gmail.com">nayanatoursandtravelsbangalore@gmail.com</a>
          </div>
        </div>
      </section>

      <SiteFooter />
      <WhatsappFloat />
    </main>
  );
}
