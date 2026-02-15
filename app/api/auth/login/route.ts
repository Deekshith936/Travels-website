import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { createToken, verifyPassword } from '@/lib/auth';

export async function POST(request: Request) {
  const { email, password } = await request.json();
  const user = await prisma.user.findUnique({ where: { email } });
  if (!user || !(await verifyPassword(password, user.passwordHash))) {
    return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
  }

  const token = await createToken({ id: user.id, name: user.name, email: user.email, role: user.role });
  const res = NextResponse.json({ success: true });
  res.cookies.set('session_token', token, { httpOnly: true, secure: process.env.NODE_ENV === 'production', sameSite: 'lax', path: '/' });
  return res;
}
