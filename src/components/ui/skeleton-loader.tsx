import React from 'react';
import { cn } from '@/lib/utils';

interface SkeletonProps {
  className?: string;
}

export const Skeleton: React.FC<SkeletonProps> = ({ className }) => {
  return (
    <div
      className={cn(
        'relative overflow-hidden rounded-lg bg-muted/30',
        'before:absolute before:inset-0 before:-translate-x-full',
        'before:animate-[shimmer_2s_infinite]',
        'before:bg-gradient-to-r before:from-transparent before:via-white/5 before:to-transparent',
        className
      )}
    />
  );
};

export const SkeletonCard: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={cn('glass-premium rounded-2xl p-6 space-y-4', className)}>
      <div className="flex items-center gap-4">
        <Skeleton className="w-12 h-12 rounded-xl" />
        <div className="flex-1 space-y-2">
          <Skeleton className="h-4 w-3/4" />
          <Skeleton className="h-3 w-1/2" />
        </div>
      </div>
      <Skeleton className="h-32 w-full rounded-xl" />
      <div className="space-y-2">
        <Skeleton className="h-3 w-full" />
        <Skeleton className="h-3 w-5/6" />
        <Skeleton className="h-3 w-4/6" />
      </div>
    </div>
  );
};

export const SkeletonVehicleCard: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={cn('glass-premium rounded-2xl overflow-hidden', className)}>
      <Skeleton className="h-48 w-full rounded-none" />
      <div className="p-6 space-y-4">
        <div className="flex justify-between items-start">
          <div className="space-y-2">
            <Skeleton className="h-5 w-32" />
            <Skeleton className="h-4 w-24" />
          </div>
          <Skeleton className="h-8 w-20 rounded-full" />
        </div>
        <div className="flex gap-4">
          <Skeleton className="h-12 w-1/3 rounded-lg" />
          <Skeleton className="h-12 w-1/3 rounded-lg" />
          <Skeleton className="h-12 w-1/3 rounded-lg" />
        </div>
        <Skeleton className="h-12 w-full rounded-xl" />
      </div>
    </div>
  );
};

export const SkeletonTable: React.FC<{ rows?: number; className?: string }> = ({ 
  rows = 5, 
  className 
}) => {
  return (
    <div className={cn('glass-premium rounded-2xl overflow-hidden', className)}>
      {/* Header */}
      <div className="flex gap-4 p-4 border-b border-border/50">
        {[1, 2, 3, 4].map((i) => (
          <Skeleton key={i} className="h-4 flex-1" />
        ))}
      </div>
      {/* Rows */}
      {Array.from({ length: rows }).map((_, i) => (
        <div key={i} className="flex gap-4 p-4 border-b border-border/30 last:border-0">
          {[1, 2, 3, 4].map((j) => (
            <Skeleton key={j} className="h-4 flex-1" />
          ))}
        </div>
      ))}
    </div>
  );
};

export const SkeletonStats: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={cn('grid grid-cols-1 md:grid-cols-4 gap-6', className)}>
      {[1, 2, 3, 4].map((i) => (
        <div key={i} className="glass-premium rounded-2xl p-6 space-y-4">
          <div className="flex justify-between">
            <Skeleton className="w-12 h-12 rounded-xl" />
            <Skeleton className="w-16 h-6 rounded-full" />
          </div>
          <Skeleton className="h-8 w-24" />
          <Skeleton className="h-4 w-32" />
        </div>
      ))}
    </div>
  );
};

export const SkeletonHero: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={cn('space-y-8 py-20', className)}>
      <div className="flex flex-col items-center gap-4">
        <Skeleton className="h-8 w-32 rounded-full" />
        <Skeleton className="h-16 w-3/4 max-w-2xl" />
        <Skeleton className="h-6 w-2/3 max-w-xl" />
      </div>
      <div className="flex justify-center gap-4">
        <Skeleton className="h-12 w-36 rounded-xl" />
        <Skeleton className="h-12 w-36 rounded-xl" />
      </div>
    </div>
  );
};

export default Skeleton;
