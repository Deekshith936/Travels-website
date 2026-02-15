import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  const passwordHash = await bcrypt.hash('Admin@123', 10);
  await prisma.user.upsert({
    where: { email: 'admin@nayana.com' },
    update: {},
    create: { name: 'Super Admin', email: 'admin@nayana.com', passwordHash, role: 'ADMIN' }
  });

  const vehicles = [
    ['Innova Crysta', 18, 'KA01AB1234'],
    ['Innova Hycross', 24, 'KA01AB2345'],
    ['Tempo Traveller', 28, 'KA01AB3456'],
    ['Force Urbania', 34, 'KA01AB4567']
  ];

  for (const [name, pricingPerKm, registration] of vehicles) {
    await prisma.vehicle.upsert({
      where: { registration },
      update: {},
      create: {
        name: name as string,
        category: 'Premium',
        capacity: 6,
        features: ['AC', 'Music System'],
        pricingPerKm: pricingPerKm as number,
        driverBata: 400,
        nightCharges: 300,
        registration: registration as string,
        insuranceExpiry: new Date('2026-12-31'),
        imageUrls: ['Upload Real Photo']
      }
    });
  }
}

main().finally(() => prisma.$disconnect());
