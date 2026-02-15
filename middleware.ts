import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { jwtVerify } from 'jose';

const secret = new TextEncoder().encode(process.env.JWT_SECRET || 'dev_secret_change_me');

export async function middleware(request: NextRequest) {
  if (!request.nextUrl.pathname.startsWith('/admin') || request.nextUrl.pathname.startsWith('/admin/login')) {
    return NextResponse.next();
  }

  const token = request.cookies.get('session_token')?.value;
  if (!token) return NextResponse.redirect(new URL('/admin/login', request.url));

  try {
    await jwtVerify(token, secret);
    return NextResponse.next();
  } catch {
    return NextResponse.redirect(new URL('/admin/login', request.url));
  }
}

export const config = { matcher: ['/admin/:path*'] };
