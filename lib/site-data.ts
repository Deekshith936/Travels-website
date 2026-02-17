export type Vehicle = {
  name: string;
  category: 'Standard Fleet' | 'Luxury Fleet';
  seating: string;
  image: string;
  outstation: { ratePerKm: number; driverAllowance: number; minKmPerDay: number };
  local: { packageRate: number; extraHour: number; extraKm: number; driverAllowance: number };
};

export const featuredVehicles: Vehicle[] = [
  {
    name: 'Toyota Innova Crysta',
    category: 'Standard Fleet',
    seating: '6-7 Seater',
    image: 'https://images.unsplash.com/photo-1549924231-f129b911e442?auto=format&fit=crop&w=1200&q=80',
    outstation: { ratePerKm: 22, driverAllowance: 500, minKmPerDay: 250 },
    local: { packageRate: 3000, extraHour: 180, extraKm: 18, driverAllowance: 300 }
  },
  {
    name: 'Toyota Innova Hycross',
    category: 'Standard Fleet',
    seating: '6-7 Seater',
    image: 'https://images.unsplash.com/photo-1606016159991-dfe4f2746ad5?auto=format&fit=crop&w=1200&q=80',
    outstation: { ratePerKm: 26, driverAllowance: 600, minKmPerDay: 250 },
    local: { packageRate: 3500, extraHour: 200, extraKm: 20, driverAllowance: 400 }
  },
  {
    name: 'Tempo Traveller',
    category: 'Standard Fleet',
    seating: '12-14 Seater',
    image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1200&q=80',
    outstation: { ratePerKm: 28, driverAllowance: 700, minKmPerDay: 250 },
    local: { packageRate: 4500, extraHour: 250, extraKm: 25, driverAllowance: 500 }
  },
  {
    name: 'Force Urbania',
    category: 'Standard Fleet',
    seating: '14-16 Seater',
    image: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&w=1200&q=80',
    outstation: { ratePerKm: 35, driverAllowance: 800, minKmPerDay: 250 },
    local: { packageRate: 5500, extraHour: 300, extraKm: 30, driverAllowance: 600 }
  },
  {
    name: 'Mercedes-Benz S-Class',
    category: 'Luxury Fleet',
    seating: '4 Seater',
    image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1200&q=80',
    outstation: { ratePerKm: 60, driverAllowance: 1000, minKmPerDay: 250 },
    local: { packageRate: 10000, extraHour: 600, extraKm: 50, driverAllowance: 800 }
  },
  {
    name: 'BMW X1',
    category: 'Luxury Fleet',
    seating: '5 Seater',
    image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1200&q=80',
    outstation: { ratePerKm: 42, driverAllowance: 900, minKmPerDay: 250 },
    local: { packageRate: 7500, extraHour: 450, extraKm: 38, driverAllowance: 700 }
  }
];

export const heroImages = [
  'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1920&q=80',
  'https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?auto=format&fit=crop&w=1920&q=80',
  'https://images.unsplash.com/photo-1511994477422-b69e44bd4ea9?auto=format&fit=crop&w=1920&q=80',
  'https://images.unsplash.com/photo-1598530146297-a1f4825c1e0f?auto=format&fit=crop&w=1920&q=80',
  'https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=1920&q=80',
  'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1920&q=80',
  'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1920&q=80'
];

export const routes = [
  { name: 'Bangalore → Mysore', distance: '145 km', duration: '3-4 hrs', price: '₹4,500 onwards', image: 'https://images.unsplash.com/photo-1598530146297-a1f4825c1e0f?auto=format&fit=crop&w=1200&q=80' },
  { name: 'Bangalore → Coorg', distance: '265 km', duration: '5-6 hrs', price: '₹8,500 onwards', image: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=1200&q=80' },
  { name: 'Bangalore → Chikmagalur', distance: '240 km', duration: '5 hrs', price: '₹7,500 onwards', image: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=1200&q=80' },
  { name: 'Bangalore → Ooty', distance: '270 km', duration: '6 hrs', price: '₹8,900 onwards', image: 'https://images.unsplash.com/photo-1593691509543-c55fb32e7355?auto=format&fit=crop&w=1200&q=80' },
  { name: 'Bangalore → Goa', distance: '560 km', duration: '10 hrs', price: '₹16,000 onwards', image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1200&q=80' },
  { name: 'Bangalore → Hampi', distance: '340 km', duration: '6-7 hrs', price: '₹10,500 onwards', image: 'https://images.unsplash.com/photo-1590251759828-f23d4ad19de3?auto=format&fit=crop&w=1200&q=80' }
];

export const reviews = [
  { author: 'Vijai Velu', text: 'Known Pratap for a decade now and his service and quality are impeccable. Hygiene of the vehicle is top notch and highly recommended.' },
  { author: 'Dinesh S', text: 'Nayana Tours and Travels is our go to travel agency for outstation trips. Always punctual, organized and attentive to detail.' },
  { author: 'Shashank U', text: 'Wonderful experience. Driver was professional, punctual and knowledgeable. Highly reliable and efficient.' },
  { author: 'Anusha R', text: 'Clean vehicles, safe driving, and smooth coordination from booking to drop-off. Highly dependable for family trips.' }
];
