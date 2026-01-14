import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import unityLogo from '@/assets/unity-logo.webp';

interface LoadingScreenProps {
  isLoading: boolean;
  onComplete?: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ isLoading, onComplete }) => {
  return (
    <AnimatePresence onExitComplete={onComplete}>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
          style={{
            background: `
              radial-gradient(ellipse 60% 40% at 50% 30%, rgba(0, 224, 255, 0.08) 0%, transparent 60%),
              radial-gradient(ellipse 50% 30% at 70% 80%, rgba(180, 190, 200, 0.05) 0%, transparent 50%),
              linear-gradient(180deg, hsl(220 18% 3%) 0%, hsl(220 15% 4%) 100%)
            `
          }}
        >
          {/* Flowing metallic curves - inspired by logo */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Primary flowing curve */}
            <motion.div
              animate={{
                x: [0, 50, 0],
                y: [0, -30, 0],
                rotate: [0, 5, 0],
              }}
              transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute top-1/3 left-1/4 w-[600px] h-[200px]"
              style={{
                background: 'linear-gradient(90deg, transparent, rgba(180, 190, 200, 0.08), rgba(0, 224, 255, 0.1), rgba(180, 190, 200, 0.08), transparent)',
                borderRadius: '100%',
                filter: 'blur(40px)',
                transform: 'rotate(-15deg)',
              }}
            />
            
            {/* Secondary flowing curve */}
            <motion.div
              animate={{
                x: [0, -30, 0],
                y: [0, 20, 0],
                rotate: [0, -3, 0],
              }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute bottom-1/3 right-1/4 w-[500px] h-[150px]"
              style={{
                background: 'linear-gradient(90deg, transparent, rgba(0, 224, 255, 0.1), rgba(180, 190, 200, 0.08), transparent)',
                borderRadius: '100%',
                filter: 'blur(30px)',
                transform: 'rotate(10deg)',
              }}
            />

            {/* Ambient glow */}
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full"
              style={{
                background: 'radial-gradient(circle, rgba(0, 224, 255, 0.12) 0%, transparent 70%)',
                filter: 'blur(60px)',
              }}
            />
          </div>

          {/* Logo and loading content */}
          <div className="relative z-10 flex flex-col items-center gap-8">
            {/* Unity Logo with metallic shimmer ring */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="relative"
            >
              {/* Rotating metallic ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
                className="absolute -inset-6"
              >
                <div 
                  className="w-full h-full rounded-full"
                  style={{
                    background: 'conic-gradient(from 0deg, transparent, rgba(180, 190, 200, 0.4), rgba(0, 224, 255, 0.5), rgba(180, 190, 200, 0.4), transparent)',
                    filter: 'blur(8px)',
                  }}
                />
              </motion.div>

              {/* Logo container with glass effect */}
              <motion.div 
                className="relative w-24 h-24 rounded-2xl glass-metallic flex items-center justify-center overflow-hidden"
                animate={{
                  boxShadow: [
                    '0 0 30px rgba(0, 224, 255, 0.2)',
                    '0 0 50px rgba(0, 224, 255, 0.3)',
                    '0 0 30px rgba(0, 224, 255, 0.2)',
                  ],
                }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              >
                <img 
                  src={unityLogo} 
                  alt="Unity Fleet" 
                  className="w-20 h-20 object-contain drop-shadow-lg"
                />
              </motion.div>
            </motion.div>

            {/* Brand name with silver gradient */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-center"
            >
              <h1 className="text-4xl font-bold font-space gradient-text-silver">
                Unity Fleet
              </h1>
              <p className="text-silver-400/60 text-sm mt-2 font-inter tracking-wider uppercase">
                Sustainable Mobility
              </p>
            </motion.div>

            {/* Loading indicator - flowing dots */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.5 }}
              className="flex items-center gap-3"
            >
              {[0, 1, 2, 3, 4].map((i) => (
                <motion.div
                  key={i}
                  animate={{
                    y: [0, -8, 0],
                    opacity: [0.4, 1, 0.4],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 1.2,
                    repeat: Infinity,
                    delay: i * 0.15,
                    ease: 'easeInOut',
                  }}
                  className="w-2 h-2 rounded-full"
                  style={{
                    background: i === 2 
                      ? 'linear-gradient(135deg, #00E0FF 0%, #35F2DB 100%)'
                      : 'linear-gradient(135deg, hsl(210 16% 88%) 0%, hsl(210 12% 60%) 100%)',
                  }}
                />
              ))}
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
