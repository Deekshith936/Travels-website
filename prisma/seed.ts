import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

type SeedVehicle = {
  name: string;
  pricingPerKm: number;
  registration: string;
};

async function main() {
  const passwordHash = await bcrypt.hash('Admin@123', 10);
  await prisma.user.upsert({
    where: { email: 'admin@nayana.com' },
    update: {},
    create: { name: 'Super Admin', email: 'admin@nayana.com', passwordHash, role: 'ADMIN' }
  });

  const vehicles: SeedVehicle[] = [
    { name: 'Innova Crysta', pricingPerKm: 18, registration: 'KA01AB1234' },
    { name: 'Innova Hycross', pricingPerKm: 24, registration: 'KA01AB2345' },
    { name: 'Tempo Traveller', pricingPerKm: 28, registration: 'KA01AB3456' },
    { name: 'Force Urbania', pricingPerKm: 34, registration: 'KA01AB4567' }
  ];

  for (const vehicle of vehicles) {
    await prisma.vehicle.upsert({
      where: { registration: vehicle.registration },
      update: {},
      create: {
        name: vehicle.name,
        category: 'Premium',
        capacity: 6,
        features: ['AC', 'Music System'],
        pricingPerKm: vehicle.pricingPerKm,
        driverBata: 400,
        nightCharges: 300,
        registration: vehicle.registration,
        insuranceExpiry: new Date('2026-12-31'),
        imageUrls: ['Upload Real Photo']
      }
    });
  }
}

main().finally(() => prisma.$disconnect());
