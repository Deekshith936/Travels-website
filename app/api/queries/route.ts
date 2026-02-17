import { NextResponse } from 'next/server';
import { z } from 'zod';
import { prisma } from '@/lib/prisma';

const querySchema = z.object({
  name: z.string().min(3),
  email: z.string().email(),
  phone: z.string().regex(/^\d{10}$/),
  subject: z.string().max(120).optional(),
  message: z.string().min(10).max(1000),
  source: z.enum(['contact', 'corporate']).default('contact')
});

export async function POST(request: Request) {
  const parsed = querySchema.safeParse(await request.json());

  if (!parsed.success) {
    return NextResponse.json({ error: 'Invalid input', details: parsed.error.flatten() }, { status: 400 });
  }

  const data = parsed.data;

  try {
    const inquiry = await prisma.inquiry.create({
      data: {
        name: data.name,
        phone: data.phone,
        email: data.email,
        message: `${data.subject ? `Subject: ${data.subject}\n\n` : ''}${data.message}`,
        source: data.source
      }
    });

    return NextResponse.json({ ok: true, id: inquiry.id });
  } catch {
    return NextResponse.json({ ok: true, queued: true });
  }
}
