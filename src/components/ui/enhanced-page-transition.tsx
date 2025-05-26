
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface EnhancedPageTransitionProps {
  children: React.ReactNode;
  pathname: string;
}

const EnhancedPageTransition: React.FC<EnhancedPageTransitionProps> = ({
  children,
  pathname
}) => {
  const pageVariants = {
    initial: {
      opacity: 0,
      scale: 0.8,
      rotateY: -15,
      y: 100,
      filter: "blur(10px)",
    },
    animate: {
      opacity: 1,
      scale: 1,
      rotateY: 0,
      y: 0,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 120,
        duration: 0.8,
        staggerChildren: 0.1,
      }
    },
    exit: {
      opacity: 0,
      scale: 1.1,
      rotateY: 15,
      y: -100,
      filter: "blur(10px)",
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 120,
        duration: 0.6,
      }
    }
  };

  const childVariants = {
    initial: {
      opacity: 0,
      y: 50,
      scale: 0.9,
    },
    animate: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100,
      }
    },
    exit: {
      opacity: 0,
      y: -30,
      scale: 1.1,
      transition: {
        duration: 0.3,
      }
    }
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        className="min-h-screen w-full"
        style={{ transformStyle: "preserve-3d" }}
      >
        <motion.div variants={childVariants}>
          {children}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default EnhancedPageTransition;
