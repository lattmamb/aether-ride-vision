
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, BarChart3 } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

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
      <Button asChild className="bg-unity-purple hover:bg-unity-purple/90 text-white px-8 py-3">
        <Link to="/booking-progress" className="flex items-center gap-2">
          <BarChart3 className="w-5 h-5" />
          Track Progress
        </Link>
      </Button>
      <Button 
        variant="outline" 
        className="border-unity-purple/30 hover:bg-unity-purple/20 text-white px-8 py-3"
        onClick={() => navigate('/dashboard')}
      >
        Go to Dashboard
      </Button>
      <Button 
        className="bg-unity-signature hover:bg-unity-signature/90 text-white px-8 py-3"
        onClick={() => navigate('/')}
      >
        Back to Home <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
    </motion.div>
  );
};

export default ActionButtons;
