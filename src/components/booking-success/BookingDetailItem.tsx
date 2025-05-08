
import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface BookingDetailItemProps {
  icon: LucideIcon;
  title: string;
  detail: string;
}

const BookingDetailItem: React.FC<BookingDetailItemProps> = ({ icon: Icon, title, detail }) => {
  return (
    <motion.div 
      className="flex items-start gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
      whileHover={{ x: 5 }}
    >
      <Icon className="h-5 w-5 text-[#9b87f5] flex-shrink-0 mt-1" />
      <div>
        <h4 className="font-medium text-white">{title}</h4>
        <p className="text-white/70">{detail}</p>
      </div>
    </motion.div>
  );
};

export default BookingDetailItem;
