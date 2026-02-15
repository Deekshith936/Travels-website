import { SelectHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

export function Select(props: SelectHTMLAttributes<HTMLSelectElement>) {
  return <select className={cn('w-full rounded-lg border bg-white px-3 py-2 outline-none ring-primary focus:ring-2')} {...props} />;
}
