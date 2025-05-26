
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface GenieTransitionProps {
  isVisible: boolean;
  onComplete?: () => void;
  children?: React.ReactNode;
}

const GenieTransition: React.FC<GenieTransitionProps> = ({
  isVisible,
  onComplete,
  children
}) => {
  const genieVariants = {
    initial: {
      scale: 0,
      y: "100vh",
      x: "50vw",
      opacity: 0,
      borderRadius: "50%",
      skewY: 45,
      transformOrigin: "bottom center",
    },
    animate: {
      scale: 1,
      y: 0,
      x: 0,
      opacity: 1,
      borderRadius: "0%",
      skewY: 0,
      transformOrigin: "center center",
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100,
        duration: 1.2,
        ease: [0.25, 0.46, 0.45, 0.94],
      }
    },
    exit: {
      scale: 0,
      y: "100vh",
      x: "50vw",
      opacity: 0,
      borderRadius: "50%",
      skewY: -45,
      transformOrigin: "bottom center",
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 120,
        duration: 0.8,
        ease: [0.55, 0.06, 0.68, 0.19],
      }
    }
  };

  const backdropVariants = {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1,
      transition: { duration: 0.3 }
    },
    exit: { 
      opacity: 0,
      transition: { duration: 0.3, delay: 0.5 }
    }
  };

  return (
    <AnimatePresence onExitComplete={onComplete}>
      {isVisible && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 z-[9998] bg-black/80 backdrop-blur-sm"
            variants={backdropVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          />
          
          {/* Genie Container */}
          <motion.div
            className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden"
            variants={genieVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            style={{
              background: "linear-gradient(135deg, rgba(155, 135, 245, 0.1) 0%, rgba(124, 58, 237, 0.1) 100%)",
            }}
            onAnimationComplete={() => {
              if (!isVisible) {
                onComplete?.();
              }
            }}
          >
            {/* Inner Content with Glass Effect */}
            <motion.div 
              className="w-full h-full relative overflow-hidden"
              initial={{ filter: "blur(20px)", scale: 1.1 }}
              animate={{ filter: "blur(0px)", scale: 1 }}
              exit={{ filter: "blur(20px)", scale: 1.1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {/* Animated Grid Background */}
              <div className="absolute inset-0 opacity-10">
                <div className="grid grid-cols-12 grid-rows-12 h-full w-full">
                  {Array.from({ length: 144 }).map((_, i) => (
                    <motion.div
                      key={i}
                      className="border border-white/20"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ 
                        delay: (i * 0.01) + 0.5,
                        duration: 0.3 
                      }}
                    />
                  ))}
                </div>
              </div>
              
              {/* Particle Effects */}
              <div className="absolute inset-0 overflow-hidden">
                {Array.from({ length: 50 }).map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-white rounded-full"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                    }}
                    animate={{
                      y: [0, -20, 0],
                      opacity: [0, 1, 0],
                      scale: [0, 1, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: Math.random() * 2,
                      ease: "easeInOut",
                    }}
                  />
                ))}
              </div>
              
              {/* Content */}
              {children}
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default GenieTransition;
