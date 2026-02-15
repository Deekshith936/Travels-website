import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

function bookingCode() {
  return `NTT-${Date.now().toString().slice(-6)}`;
}

export async function GET() {
  const rows = await prisma.booking.findMany({ include: { customer: true }, orderBy: { createdAt: 'desc' } });
  return NextResponse.json(rows);
}

export async function POST(request: Request) {
  const body = await request.json();
  const customer = await prisma.customer.upsert({
    where: { phone: body.customerPhone },
    update: { name: body.customerName, email: body.customerEmail },
    create: { name: body.customerName, email: body.customerEmail, phone: body.customerPhone }
  });

  const row = await prisma.booking.create({
    data: {
      bookingCode: bookingCode(),
      customerId: customer.id,
      pickup: body.pickup,
      dropLocation: body.dropLocation,
      tripDate: new Date(body.tripDate),
      passengers: Number(body.passengers),
      vehicleId: body.vehicleId,
      distanceKm: Number(body.distanceKm),
      fareBase: Number(body.fareTotal) - 400,
      fareTotal: Number(body.fareTotal)
    }
  });

  return NextResponse.json(row);
}
