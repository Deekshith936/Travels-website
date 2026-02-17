'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { Clock3, Mail, MapPin, MessageCircle, Phone, Send, Tag, User } from 'lucide-react';
import Link from 'next/link';
import { useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { WhatsappFloat } from '@/components/whatsapp-float';

const contactSchema = z.object({
  name: z.string().min(3, 'Please enter your full name'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().regex(/^\d{10}$/, 'Phone number must be 10 digits'),
  subject: z.string().max(120).optional(),
  message: z.string().min(10, 'Please provide more details').max(1000, 'Message must be 1000 characters or less')
});

type ContactForm = z.infer<typeof contactSchema>;

export default function ContactPage() {
  const [submitState, setSubmitState] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const form = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: '', email: '', phone: '', subject: '', message: '' }
  });

  const messageLength = form.watch('message')?.length ?? 0;
  const remaining = useMemo(() => 1000 - messageLength, [messageLength]);

  const onSubmit = async (values: ContactForm) => {
    try {
      setSubmitState('loading');
      const res = await fetch('/api/queries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...values, source: 'contact' })
      });

      if (!res.ok) throw new Error('failed');
      setSubmitState('success');
      form.reset();
    } catch {
      setSubmitState('error');
    }
  };

  return (
    <main className="bg-[#F9FAFB]">
      <SiteHeader />
      <section className="mx-auto max-w-7xl px-4 pb-20 pt-28 md:px-8">
        <div className="grid gap-8 lg:grid-cols-5">
          <div className="space-y-6 lg:col-span-2">
            <div>
              <h1 className="text-4xl font-bold text-[#0A1E2E]">Get in Touch</h1>
              <p className="mt-2 text-gray-600">We&apos;re here to help with your travel needs.</p>
            </div>

            <div className="space-y-4">
              <a href="tel:9742965513" className="block rounded-2xl border bg-white p-5 shadow-sm transition hover:shadow-md">
                <p className="flex items-center gap-3 text-lg font-semibold text-[#0A1E2E]"><Phone className="h-6 w-6 text-[#D4A853]" /> 9742965513</p>
                <p className="mt-1 text-sm text-gray-600">Call us anytime</p>
              </a>
              <a href="https://wa.me/919742965513?text=Hi%2C%20I%20need%20help%20with%20my%20travel%20plan." className="block rounded-2xl border bg-white p-5 shadow-sm transition hover:shadow-md">
                <p className="flex items-center gap-3 text-lg font-semibold text-[#0A1E2E]"><MessageCircle className="h-6 w-6 text-[#25D366]" /> 9742965513</p>
                <p className="mt-1 text-sm text-gray-600">Quick response guaranteed</p>
              </a>
              <a href="mailto:nayanatoursandtravelsbangalore@gmail.com" className="block rounded-2xl border bg-white p-5 shadow-sm transition hover:shadow-md">
                <p className="flex items-center gap-3 text-lg font-semibold text-[#0A1E2E]"><Mail className="h-6 w-6 text-[#D4A853]" /> nayanatoursandtravelsbangalore@gmail.com</p>
                <p className="mt-1 text-sm text-gray-600">We reply within 24 hours</p>
              </a>
              <div className="rounded-2xl border bg-white p-5 shadow-sm">
                <p className="flex items-start gap-3 text-lg font-semibold text-[#0A1E2E]"><MapPin className="mt-1 h-6 w-6 text-[#D4A853]" /> Gruhalakshmi Housing Colony, Nagasandra, Bangalore, Karnataka, 560073</p>
                <a className="mt-2 inline-block text-sm font-medium text-[#D4A853] underline" href="https://maps.google.com/?q=Gruhalakshmi+Housing+Colony+Nagasandra+Bangalore+560073" target="_blank" rel="noreferrer">Get Directions</a>
              </div>
            </div>

            <div className="rounded-2xl border bg-white p-5 shadow-sm">
              <p className="flex items-center gap-2 font-semibold text-[#0A1E2E]"><Clock3 className="h-5 w-5 text-[#D4A853]" /> 24/7 Available</p>
              <iframe title="Nayana Tours office map" className="mt-4 h-[300px] w-full rounded-xl border-0" loading="lazy" src="https://www.google.com/maps?q=Gruhalakshmi+Housing+Colony+Nagasandra+Bangalore+560073&output=embed" />
            </div>
          </div>

          <div className="rounded-2xl border bg-white p-6 shadow-lg lg:col-span-3 md:p-8">
            <h2 className="text-3xl font-bold text-[#0A1E2E]">Send Us a Message</h2>
            <p className="mt-2 text-gray-600">Fill out the form and we&apos;ll get back to you shortly.</p>

            <form onSubmit={form.handleSubmit(onSubmit)} className="mt-6 space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <label className="space-y-2 text-sm font-medium text-gray-700">
                  <span className="flex items-center gap-2"><User className="h-4 w-4 text-[#D4A853]" /> Name *</span>
                  <input className="w-full rounded-lg border px-4 py-3" placeholder="Your full name" {...form.register('name')} />
                  {form.formState.errors.name && <p className="text-xs text-red-600">{form.formState.errors.name.message}</p>}
                </label>
                <label className="space-y-2 text-sm font-medium text-gray-700">
                  <span className="flex items-center gap-2"><Mail className="h-4 w-4 text-[#D4A853]" /> Email *</span>
                  <input className="w-full rounded-lg border px-4 py-3" placeholder="your.email@example.com" {...form.register('email')} />
                  {form.formState.errors.email && <p className="text-xs text-red-600">{form.formState.errors.email.message}</p>}
                </label>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <label className="space-y-2 text-sm font-medium text-gray-700">
                  <span className="flex items-center gap-2"><Phone className="h-4 w-4 text-[#D4A853]" /> Phone *</span>
                  <input className="w-full rounded-lg border px-4 py-3" placeholder="10-digit mobile number" {...form.register('phone')} />
                  {form.formState.errors.phone && <p className="text-xs text-red-600">{form.formState.errors.phone.message}</p>}
                </label>
                <label className="space-y-2 text-sm font-medium text-gray-700">
                  <span className="flex items-center gap-2"><Tag className="h-4 w-4 text-[#D4A853]" /> Subject</span>
                  <input className="w-full rounded-lg border px-4 py-3" placeholder="What can we help you with?" {...form.register('subject')} />
                </label>
              </div>

              <label className="space-y-2 text-sm font-medium text-gray-700">
                <span>Message *</span>
                <textarea rows={6} className="w-full rounded-lg border px-4 py-3" placeholder="Tell us about your travel plans or any questions..." {...form.register('message')} />
                <div className="flex justify-between text-xs"><span className="text-red-600">{form.formState.errors.message?.message}</span><span className={remaining < 80 ? 'text-amber-600' : 'text-gray-500'}>{remaining} characters remaining</span></div>
              </label>

              <button disabled={submitState === 'loading'} className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#D4A853] px-6 py-3 font-semibold text-white transition hover:bg-[#C29843] disabled:opacity-70">
                <Send className="h-4 w-4" /> {submitState === 'loading' ? 'Sending...' : 'Send Message'}
              </button>
            </form>

            {submitState === 'success' && (
              <div className="mt-5 rounded-xl border border-green-200 bg-green-50 p-4 text-green-700">
                <p className="font-semibold">Message Sent!</p>
                <p className="text-sm">Thank you for reaching out. We&apos;ll respond within 24 hours.</p>
                <div className="mt-3 flex gap-3 text-sm"><Link href="/fleet" className="font-semibold underline">Explore Our Fleet</Link><Link href="/booking" className="font-semibold underline">Book a Ride</Link></div>
              </div>
            )}
            {submitState === 'error' && <p className="mt-4 rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-700">Something went wrong. Please try again or call us directly at 9742965513.</p>}
          </div>
        </div>
      </section>
      <SiteFooter />
      <WhatsappFloat />
    </main>
  );
}
