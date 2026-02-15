import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  const rows = await prisma.vehicle.findMany({ orderBy: { createdAt: 'desc' } });
  return NextResponse.json(rows);
}

export async function POST(request: Request) {
  const body = await request.json();
  const row = await prisma.vehicle.create({
    data: {
      name: body.name,
      category: body.category,
      capacity: Number(body.capacity),
      features: [],
      pricingPerKm: Number(body.pricingPerKm),
      driverBata: 400,
      nightCharges: 300,
      registration: body.registration,
      insuranceExpiry: new Date(new Date().setFullYear(new Date().getFullYear() + 1)),
      imageUrls: ['Upload Real Photo']
    }
  });
  return NextResponse.json(row);
}

export async function DELETE(request: Request) {
  const id = new URL(request.url).searchParams.get('id');
  if (!id) return NextResponse.json({ error: 'id required' }, { status: 400 });
  await prisma.vehicle.delete({ where: { id } });
  return NextResponse.json({ ok: true });
}
