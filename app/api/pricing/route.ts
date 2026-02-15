import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(request: Request) {
  const { vehicleId, distanceKm } = await request.json();
  const vehicle = await prisma.vehicle.findUnique({ where: { id: vehicleId } });
  if (!vehicle) return NextResponse.json({ error: 'Vehicle not found' }, { status: 404 });

  const base = vehicle.pricingPerKm * Number(distanceKm);
  const total = base + vehicle.driverBata;

  return NextResponse.json({ distanceKm, perKm: vehicle.pricingPerKm, driverBata: vehicle.driverBata, total });
}
