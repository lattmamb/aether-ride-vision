
import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Clock, AlertCircle, XCircle } from 'lucide-react';

interface StatusIndicatorProps {
  status: 'success' | 'pending' | 'warning' | 'error';
  label: string;
  size?: 'sm' | 'md' | 'lg';
}

const StatusIndicator: React.FC<StatusIndicatorProps> = ({ status, label, size = 'md' }) => {
  const getStatusConfig = () => {
    switch (status) {
      case 'success':
        return {
          icon: CheckCircle,
          color: 'text-green-400',
          bg: 'bg-green-400/20',
          pulse: 'bg-green-400'
        };
      case 'pending':
        return {
          icon: Clock,
          color: 'text-yellow-400',
          bg: 'bg-yellow-400/20',
          pulse: 'bg-yellow-400'
        };
      case 'warning':
        return {
          icon: AlertCircle,
          color: 'text-orange-400',
          bg: 'bg-orange-400/20',
          pulse: 'bg-orange-400'
        };
      case 'error':
        return {
          icon: XCircle,
          color: 'text-red-400',
          bg: 'bg-red-400/20',
          pulse: 'bg-red-400'
        };
    }
  };

  const getSizeConfig = () => {
    switch (size) {
      case 'sm':
        return { icon: 'h-4 w-4', container: 'p-2', text: 'text-xs' };
      case 'lg':
        return { icon: 'h-6 w-6', container: 'p-4', text: 'text-base' };
      default:
        return { icon: 'h-5 w-5', container: 'p-3', text: 'text-sm' };
    }
  };

  const statusConfig = getStatusConfig();
  const sizeConfig = getSizeConfig();
  const Icon = statusConfig.icon;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      className={`relative flex items-center gap-3 ${statusConfig.bg} rounded-xl ${sizeConfig.container} backdrop-blur-sm border border-white/10`}
    >
      <div className="relative">
        <Icon className={`${sizeConfig.icon} ${statusConfig.color}`} />
        {status === 'pending' && (
          <motion.div
            className={`absolute -inset-1 rounded-full ${statusConfig.pulse} opacity-20`}
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        )}
      </div>
      <span className={`${sizeConfig.text} text-white/90 font-medium`}>{label}</span>
    </motion.div>
  );
};

export default StatusIndicator;
