
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const ActionButtons: React.FC = () => {
  const navigate = useNavigate();

  return (
    <motion.div 
      className="flex flex-col sm:flex-row gap-4 justify-center"
      variants={{
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1 }
      }}
    >
      <Button 
        variant="outline" 
        className="border-[#9b87f5]/30 hover:bg-[#9b87f5]/20 text-white"
        onClick={() => navigate('/dashboard')}
      >
        Go to Dashboard
      </Button>
      <Button 
        className="bg-[#9b87f5] hover:bg-[#7E69AB] text-white"
        onClick={() => navigate('/')}
      >
        Back to Home <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
    </motion.div>
  );
};

export default ActionButtons;
