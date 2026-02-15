import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { hashPassword } from '@/lib/auth';

export async function POST(request: Request) {
  const body = await request.json();
  const passwordHash = await hashPassword(body.password);
  const user = await prisma.user.create({ data: { name: body.name, email: body.email, passwordHash, role: body.role || 'ADMIN' } });
  return NextResponse.json({ id: user.id });
}
