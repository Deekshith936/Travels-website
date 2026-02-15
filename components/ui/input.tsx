import { InputHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

export function Input(props: InputHTMLAttributes<HTMLInputElement>) {
  return <input className={cn('w-full rounded-lg border px-3 py-2 outline-none ring-primary focus:ring-2')} {...props} />;
}
