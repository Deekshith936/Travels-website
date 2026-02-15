import Link from 'next/link';

const vehicles = [
  { name: 'Innova Crysta', price: '₹18/km', image: 'Upload Real Photo' },
  { name: 'Innova Hycross', price: '₹24/km', image: 'Upload Real Photo' },
  { name: 'Tempo Traveller', price: '₹28/km', image: 'Upload Real Photo' },
  { name: 'Force Urbania', price: '₹34/km', image: 'Upload Real Photo' }
];

const routes = [
  'Bangalore → Mysore',
  'Bangalore → Coorg',
  'Bangalore → Ooty',
  'Bangalore → Goa',
  'Bangalore → Rameshwaram',
  'Bangalore → Hampi'
];

export default function HomePage() {
  return (
    <main>
      <header className="sticky top-0 z-30 border-b bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <p className="font-bold text-primary">Nayana Tours & Travels</p>
          <Link className="rounded-lg bg-secondary px-4 py-2 font-semibold text-white" href="/book">Book Now</Link>
        </div>
      </header>

      <section className="bg-gradient-to-r from-primary to-teal-500 px-4 py-16 text-white">
        <div className="mx-auto max-w-6xl">
          <h1 className="text-4xl font-bold">Bangalore's Trusted Cab Partner Since 2008</h1>
          <p className="mt-4 max-w-3xl">5.0★ rated local & outstation service. 15+ years of excellence for family and corporate travel.</p>
          <div className="mt-6 flex gap-3">
            <Link className="rounded-lg bg-secondary px-4 py-2 font-semibold" href="/book">Instant Quote</Link>
            <a className="rounded-lg border border-white px-4 py-2" href="https://wa.me/919742965513?text=Hi%20Nayana%20Tours%2C%20I%20need%20a%20cab">WhatsApp Us</a>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-6 px-4 py-10 md:grid-cols-4">
        {vehicles.map((v) => (
          <article key={v.name} className="card p-4">
            <div className="mb-3 flex h-36 items-center justify-center rounded-lg border-2 border-dashed text-sm text-slate-500">{v.image}</div>
            <h3 className="font-semibold">{v.name}</h3>
            <p className="text-primary">{v.price}</p>
          </article>
        ))}
      </section>

      <section className="mx-auto max-w-6xl px-4 py-4">
        <h2 className="mb-4 text-2xl font-bold">Popular Routes</h2>
        <div className="grid gap-3 md:grid-cols-2">
          {routes.map((route) => <div key={route} className="card p-4">{route}</div>)}
        </div>
      </section>

      <footer className="mt-10 bg-slate-900 px-4 py-8 text-white">
        <div className="mx-auto max-w-6xl text-sm">
          <p>Gruhalakshmi Housing Colony, Nagasandra, Bengaluru 560073</p>
          <p>Phone: 9742965513 | Email: nayanatoursandtravelsbangalore@gmail.com</p>
        </div>
      </footer>
    </main>
  );
}
