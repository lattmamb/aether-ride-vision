
import React, { useEffect, useRef, useState, TouchEvent, WheelEvent } from 'react';
import { motion } from 'framer-motion';
import { SubscriptionPlan } from '@/types';
import { Calendar, Star, Shield, CheckCircle } from 'lucide-react';
import NeumorphicButton from '@/components/neumorphic/NeumorphicButton';

interface PlanScrollSectionProps {
  plan: SubscriptionPlan;
  backgroundImage: string;
  index: number;
  isSelected: boolean;
  onSelect: () => void;
}

const PlanScrollSection: React.FC<PlanScrollSectionProps> = ({
  plan,
  backgroundImage,
  index,
  isSelected,
  onSelect
}) => {
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [showContent, setShowContent] = useState<boolean>(false);
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [touchStartY, setTouchStartY] = useState<number>(0);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (isExpanded && e.deltaY < 0) {
        setIsExpanded(false);
        e.preventDefault();
      } else if (!isExpanded) {
        e.preventDefault();
        const scrollDelta = e.deltaY * 0.001;
        const newProgress = Math.min(Math.max(scrollProgress + scrollDelta, 0), 1);
        setScrollProgress(newProgress);

        if (newProgress >= 1) {
          setIsExpanded(true);
          setShowContent(true);
        } else if (newProgress < 0.7) {
          setShowContent(false);
        }
      }
    };

    const handleTouchStart = (e: TouchEvent) => {
      setTouchStartY(e.touches[0].clientY);
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!touchStartY) return;
      const touchY = e.touches[0].clientY;
      const deltaY = touchStartY - touchY;

      if (isExpanded && deltaY < -20) {
        setIsExpanded(false);
        e.preventDefault();
      } else if (!isExpanded) {
        e.preventDefault();
        const scrollDelta = deltaY * 0.005;
        const newProgress = Math.min(Math.max(scrollProgress + scrollDelta, 0), 1);
        setScrollProgress(newProgress);

        if (newProgress >= 1) {
          setIsExpanded(true);
          setShowContent(true);
        } else if (newProgress < 0.7) {
          setShowContent(false);
        }
        setTouchStartY(touchY);
      }
    };

    const section = sectionRef.current;
    if (section) {
      section.addEventListener('wheel', handleWheel as any, { passive: false });
      section.addEventListener('touchstart', handleTouchStart as any, { passive: false });
      section.addEventListener('touchmove', handleTouchMove as any, { passive: false });
    }

    return () => {
      if (section) {
        section.removeEventListener('wheel', handleWheel as any);
        section.removeEventListener('touchstart', handleTouchStart as any);
        section.removeEventListener('touchmove', handleTouchMove as any);
      }
    };
  }, [scrollProgress, isExpanded, touchStartY]);

  const sectionWidth = 350 + scrollProgress * 700;
  const sectionHeight = 250 + scrollProgress * 350;

  const getPlanIcon = () => {
    switch (plan.id) {
      case 'flex-month': return <Calendar className="h-6 w-6 text-tesla-purple" />;
      case 'standard': return <Star className="h-6 w-6 text-tesla-purple" />;
      case 'premium': return <Shield className="h-6 w-6 text-tesla-purple" />;
      default: return <Calendar className="h-6 w-6 text-tesla-purple" />;
    }
  };

  return (
    <div ref={sectionRef} className="min-h-screen flex items-center justify-center py-20">
      <div className="relative w-full max-w-6xl mx-auto px-4">
        <motion.div
          className="relative rounded-2xl overflow-hidden"
          style={{
            width: `${Math.min(sectionWidth, window.innerWidth * 0.9)}px`,
            height: `${sectionHeight}px`,
            margin: '0 auto',
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          animate={{
            boxShadow: isExpanded 
              ? plan.recommended 
                ? '0 25px 50px rgba(255, 215, 0, 0.4)' 
                : '0 25px 50px rgba(155, 135, 245, 0.3)'
              : '0 10px 30px rgba(0, 0, 0, 0.3)'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
          
          {plan.recommended && (
            <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold px-3 py-1 rounded-full">
              RECOMMENDED
            </div>
          )}
          
          <div className="relative z-10 p-8 h-full flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-white/10 backdrop-blur-sm">
                  {getPlanIcon()}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">{plan.name}</h3>
                  <p className="text-white/80">{plan.duration}</p>
                </div>
              </div>
              
              <div className="text-right">
                <div className="text-3xl font-bold text-white">
                  ${plan.price}
                  <span className="text-lg text-white/70">{plan.priceUnit}</span>
                </div>
              </div>
            </div>

            {!isExpanded && (
              <div className="text-center">
                <p className="text-white/70 text-sm">Scroll to explore features</p>
                <div className="w-full bg-white/20 rounded-full h-1 mt-2">
                  <div 
                    className="bg-tesla-purple h-1 rounded-full transition-all"
                    style={{ width: `${scrollProgress * 100}%` }}
                  />
                </div>
              </div>
            )}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: showContent ? 1 : 0 }}
              transition={{ duration: 0.5 }}
              className="overflow-y-auto max-h-80"
            >
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-white mb-4">Plan Features</h4>
                <div className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <motion.div
                      key={featureIndex}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: featureIndex * 0.1 }}
                      className="flex items-center gap-3 p-3 bg-white/10 rounded-lg backdrop-blur-sm"
                    >
                      <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                      <span className="text-white">{feature}</span>
                    </motion.div>
                  ))}
                </div>
                
                <div className="mt-6 space-y-3">
                  <NeumorphicButton 
                    variant={isSelected ? "primary" : "secondary"} 
                    size="large" 
                    className="w-full"
                    onClick={onSelect}
                  >
                    {isSelected ? "Selected Plan" : "Choose This Plan"}
                  </NeumorphicButton>
                  
                  <div className="text-center">
                    <p className="text-white/60 text-sm">No long-term commitment • Cancel anytime</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div className="text-center p-3 bg-white/10 rounded-lg backdrop-blur-sm">
                    <div className="text-lg font-bold text-tesla-purple">24/7</div>
                    <div className="text-white/70 text-sm">Support</div>
                  </div>
                  <div className="text-center p-3 bg-white/10 rounded-lg backdrop-blur-sm">
                    <div className="text-lg font-bold text-tesla-purple">Free</div>
                    <div className="text-white/70 text-sm">Delivery</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

interface SubscriptionScrollExpansionProps {
  plans: SubscriptionPlan[];
  selectedPlan: string;
  onPlanSelect: (planId: string) => void;
}

const SubscriptionScrollExpansion: React.FC<SubscriptionScrollExpansionProps> = ({
  plans,
  selectedPlan,
  onPlanSelect
}) => {
  const backgroundImages = [
    'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2071&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1544829099-b9a0c5303bea?q=80&w=2071&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1566473965997-3de9c817e938?q=80&w=2070&auto=format&fit=crop'
  ];

  return (
    <div className="bg-tesla-dark">
      <div className="text-center py-20">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
          Choose Your Plan
        </h2>
        <p className="text-xl text-white/70 max-w-3xl mx-auto">
          Flexible subscription options designed for every lifestyle. Scroll through each plan to discover the perfect fit.
        </p>
      </div>
      
      {plans.map((plan, index) => (
        <PlanScrollSection
          key={plan.id}
          plan={plan}
          backgroundImage={backgroundImages[index % backgroundImages.length]}
          index={index}
          isSelected={selectedPlan === plan.id}
          onSelect={() => onPlanSelect(plan.id)}
        />
      ))}
    </div>
  );
};

export default SubscriptionScrollExpansion;
