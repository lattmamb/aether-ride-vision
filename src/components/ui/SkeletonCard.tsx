
import React from 'react';

interface SkeletonCardProps {
  className?: string;
}

const SkeletonCard: React.FC<SkeletonCardProps> = ({ className = '' }) => {
  return (
    <div className={`glass-card p-6 ${className}`}>
      <div className="animate-pulse space-y-4">
        <div className="skeleton h-48 rounded-xl"></div>
        <div className="space-y-2">
          <div className="skeleton h-6 rounded w-3/4"></div>
          <div className="skeleton h-4 rounded w-1/2"></div>
          <div className="skeleton h-4 rounded w-2/3"></div>
        </div>
        <div className="flex gap-2">
          <div className="skeleton h-10 rounded-lg flex-1"></div>
          <div className="skeleton h-10 rounded-lg w-20"></div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonCard;
