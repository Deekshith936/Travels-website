'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { Building2, CalendarRange, CalendarCheck2, FileText, Headphones, Plane, Presentation, Rocket, Send, UserCheck, Users } from 'lucide-react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { WhatsappFloat } from '@/components/whatsapp-float';

const features = [
  { icon: Building2, title: 'Tested by Major Corporate Clients', desc: 'Proven track record with leading companies across Bangalore for employee movement and client meetings.' },
  { icon: CalendarCheck2, title: 'Event Management Expertise', desc: 'Experienced in handling conferences, conventions, seminars, and weddings at scale.' },
  { icon: Users, title: 'Scalable Fleet', desc: 'From executive sedans to large fleet deployments for multi-location operations.' },
  { icon: FileText, title: 'Transparent Billing', desc: 'Detailed trip reports and GST-compliant invoicing for clear accounting.' },
  { icon: UserCheck, title: 'Professional Chauffeurs', desc: 'Background-verified drivers trained in corporate etiquette and punctuality.' },
  { icon: Headphones, title: '24/7 Support', desc: 'Dedicated support for urgent requests, escalation, and live coordination.' }
];

const services = [
  { icon: Plane, title: 'Airport Transfers', desc: 'Reliable pickup and drop with flight-aware scheduling.' },
  { icon: Users, title: 'Employee Transportation', desc: 'Daily commute and shift-based routing with flexible schedules.' },
  { icon: Building2, title: 'Client Meetings & Site Visits', desc: 'Executive travel support for meetings, visits, and hospitality.' },
  { icon: Presentation, title: 'Corporate Events & Conferences', desc: 'Coordinated attendee transport and venue logistics support.' },
  { icon: Rocket, title: 'Roadshows & Product Launches', desc: 'Multi-city travel support with scalable dispatch plans.' },
  { icon: CalendarRange, title: 'Long-term Vehicle Leasing', desc: 'Monthly and annual vehicle leasing with dedicated drivers.' }
];

const inquirySchema = z.object({
  companyName: z.string().min(2),
  contactName: z.string().min(3),
  designation: z.string().min(2),
  email: z.string().email(),
  phone: z.string().regex(/^\d{10}$/),
  employees: z.string().optional(),
  monthlyVolume: z.string().optional(),
  requirements: z.string().min(10)
});

type InquiryForm = z.infer<typeof inquirySchema>;

export default function CorporatePage() {
  const [state, setState] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const form = useForm<InquiryForm>({
    resolver: zodResolver(inquirySchema),
    defaultValues: { companyName: '', contactName: '', designation: '', email: '', phone: '', employees: '', monthlyVolume: '', requirements: '' }
  });

  const submit = async (values: InquiryForm) => {
    setState('loading');
    try {
      const payload = {
        name: `${values.contactName} (${values.companyName})`,
        email: values.email,
        phone: values.phone,
        subject: `Corporate Inquiry - ${values.designation}`,
        message: `Employees: ${values.employees || 'N/A'}\nMonthly Travel Requirement: ${values.monthlyVolume || 'N/A'}\n\n${values.requirements}`,
        source: 'corporate'
      };

      const res = await fetch('/api/queries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      if (!res.ok) throw new Error('failed');
      setState('success');
      form.reset();
    } catch {
      setState('error');
    }
  };

  return (
    <main className="bg-[#F9FAFB]">
      <SiteHeader />

      <section className="relative overflow-hidden px-4 pb-20 pt-28 text-white md:px-8">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1462899006636-339e08d1844e?auto=format&fit=crop&w=1800&q=80')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-[#0A1E2E]/80" />
        <div className="relative mx-auto max-w-7xl text-center">
          <h1 className="text-4xl font-bold md:text-5xl">Trusted Travel Partner for Corporate Excellence</h1>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-white/85">Professional, reliable, and scalable fleet solutions for your business movement.</p>
          <a href="#corporate-inquiry" className="mt-8 inline-block rounded-xl bg-[#D4A853] px-8 py-3 font-semibold text-white">Request Corporate Quote</a>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 md:px-8">
        <h2 className="text-center text-4xl font-bold text-[#0A1E2E]">Why Choose Us</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {features.map((item) => (
            <article key={item.title} className="rounded-2xl border bg-white p-6 shadow-sm">
              <item.icon className="h-6 w-6 text-[#D4A853]" />
              <h3 className="mt-3 text-xl font-semibold text-[#0A1E2E]">{item.title}</h3>
              <p className="mt-2 text-gray-600">{item.desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <h2 className="text-center text-4xl font-bold text-[#0A1E2E]">Services We Offer</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((item) => (
              <article key={item.title} className="rounded-2xl border p-6 shadow-sm">
                <item.icon className="h-6 w-6 text-[#D4A853]" />
                <h3 className="mt-3 text-lg font-semibold text-[#0A1E2E]">{item.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{item.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="corporate-inquiry" className="mx-auto max-w-5xl px-4 py-16 md:px-8">
        <div className="rounded-2xl border bg-white p-6 shadow-lg md:p-8">
          <h2 className="text-3xl font-bold text-[#0A1E2E]">Request a Custom Corporate Quote</h2>
          <form onSubmit={form.handleSubmit(submit)} className="mt-6 grid gap-4 md:grid-cols-2">
            <input className="rounded-lg border px-4 py-3" placeholder="Company Name *" {...form.register('companyName')} />
            <input className="rounded-lg border px-4 py-3" placeholder="Contact Person Name *" {...form.register('contactName')} />
            <input className="rounded-lg border px-4 py-3" placeholder="Designation *" {...form.register('designation')} />
            <input className="rounded-lg border px-4 py-3" placeholder="Email *" {...form.register('email')} />
            <input className="rounded-lg border px-4 py-3" placeholder="Phone (10 digits) *" {...form.register('phone')} />
            <input className="rounded-lg border px-4 py-3" placeholder="Number of Employees" {...form.register('employees')} />
            <select className="rounded-lg border px-4 py-3 md:col-span-2" {...form.register('monthlyVolume')}>
              <option value="">Monthly Travel Requirement</option>
              <option>1-10 trips</option>
              <option>11-50 trips</option>
              <option>51-100 trips</option>
              <option>100+ trips</option>
            </select>
            <textarea className="rounded-lg border px-4 py-3 md:col-span-2" rows={5} placeholder="Message / requirements *" {...form.register('requirements')} />

            <button disabled={state === 'loading'} className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#D4A853] px-6 py-3 font-semibold text-white md:col-span-2">
              <Send className="h-4 w-4" /> {state === 'loading' ? 'Submitting...' : 'Submit Inquiry'}
            </button>
          </form>
          {state === 'success' && <p className="mt-4 rounded-lg bg-green-50 p-3 text-sm text-green-700">Thanks! Your corporate inquiry has been submitted. Our team will connect shortly.</p>}
          {state === 'error' && <p className="mt-4 rounded-lg bg-red-50 p-3 text-sm text-red-700">Unable to submit now. Please contact us at 9742965513.</p>}
        </div>
      </section>

      <SiteFooter />
      <WhatsappFloat />
    </main>
  );
}
