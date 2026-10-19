import React from 'react';
import { Info } from 'lucide-react';
import { cn } from '@/lib/utils';

interface DemoNoticeProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
}

/** Honest "Demo / not connected" banner. Use wherever an action has no real backend. */
export const DemoNotice: React.FC<DemoNoticeProps> = ({ title = 'Demo / not connected', children, className }) => (
  <div
    role="status"
    className={cn(
      'flex items-start gap-3 rounded-lg border border-accent/40 bg-accent/10 p-4 text-sm text-foreground',
      className,
    )}
  >
    <Info className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
    <div>
      <p className="font-semibold">{title}</p>
      <div className="text-muted-foreground">{children}</div>
    </div>
  </div>
);

export const DemoBadge: React.FC<{ label?: string; className?: string }> = ({ label = 'Demo data', className }) => (
  <span
    className={cn(
      'inline-flex items-center gap-1 rounded-full border border-accent/40 bg-accent/10 px-2.5 py-0.5 text-xs font-medium text-foreground',
      className,
    )}
  >
    <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
    {label}
  </span>
);

export default DemoNotice;
