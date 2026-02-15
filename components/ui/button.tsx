import { ButtonHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

export function Button({ className, ...props }: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={cn('rounded-lg bg-primary px-4 py-2 font-medium text-white hover:opacity-90 disabled:opacity-60', className)}
      {...props}
    />
  );
}
