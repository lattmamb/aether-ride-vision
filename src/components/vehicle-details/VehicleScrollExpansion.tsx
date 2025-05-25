
import React, { useEffect, useRef, useState, TouchEvent, WheelEvent } from 'react';
import { motion } from 'framer-motion';
import { Vehicle } from '@/types';
import { Battery, Zap, Shield, Wifi, Camera, Navigation } from 'lucide-react';
import NeumorphicButton from '@/components/neumorphic/NeumorphicButton';

interface ScrollExpandSectionProps {
  title: string;
  subtitle: string;
  backgroundImage: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  index: number;
}

const ScrollExpandSection: React.FC<ScrollExpandSectionProps> = ({
  title,
  subtitle,
  backgroundImage,
  icon,
  children,
  index
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

  const sectionWidth = 300 + scrollProgress * 800;
  const sectionHeight = 200 + scrollProgress * 400;

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
              ? '0 25px 50px rgba(155, 135, 245, 0.3)' 
              : '0 10px 30px rgba(0, 0, 0, 0.3)'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
          
          <div className="relative z-10 p-8 h-full flex flex-col justify-between">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-xl bg-white/10 backdrop-blur-sm">
                {icon}
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">{title}</h3>
                <p className="text-white/80">{subtitle}</p>
              </div>
            </div>

            {!isExpanded && (
              <div className="text-center">
                <p className="text-white/70 text-sm">Scroll to explore</p>
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
              {children}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

interface VehicleScrollExpansionProps {
  vehicle: Vehicle;
}

const VehicleScrollExpansion: React.FC<VehicleScrollExpansionProps> = ({ vehicle }) => {
  const sections = [
    {
      title: "Autopilot Technology",
      subtitle: "Self-driving capabilities",
      backgroundImage: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2071&auto=format&fit=crop",
      icon: <Navigation className="h-6 w-6 text-tesla-purple" />,
      content: (
        <div className="space-y-4">
          <h4 className="text-xl font-bold text-white mb-4">Advanced Autopilot Features</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-white/10 rounded-lg backdrop-blur-sm">
              <h5 className="font-semibold text-white mb-2">Navigate on Autopilot</h5>
              <p className="text-white/80 text-sm">Automatically navigate highway interchanges and exits</p>
            </div>
            <div className="p-4 bg-white/10 rounded-lg backdrop-blur-sm">
              <h5 className="font-semibold text-white mb-2">Auto Lane Change</h5>
              <p className="text-white/80 text-sm">Seamlessly change lanes with turn signal activation</p>
            </div>
            <div className="p-4 bg-white/10 rounded-lg backdrop-blur-sm">
              <h5 className="font-semibold text-white mb-2">Summon</h5>
              <p className="text-white/80 text-sm">Call your Tesla from parking spaces</p>
            </div>
            <div className="p-4 bg-white/10 rounded-lg backdrop-blur-sm">
              <h5 className="font-semibold text-white mb-2">Smart Summon</h5>
              <p className="text-white/80 text-sm">Navigate complex parking lots to find you</p>
            </div>
          </div>
          <div className="flex gap-3 mt-6">
            <NeumorphicButton variant="primary" size="medium">
              Watch Demo
            </NeumorphicButton>
            <NeumorphicButton variant="secondary" size="medium">
              Learn More
            </NeumorphicButton>
          </div>
        </div>
      )
    },
    {
      title: "Performance Specs",
      subtitle: "Engineering excellence",
      backgroundImage: "https://images.unsplash.com/photo-1544829099-b9a0c5303bea?q=80&w=2071&auto=format&fit=crop",
      icon: <Zap className="h-6 w-6 text-tesla-purple" />,
      content: (
        <div className="space-y-4">
          <h4 className="text-xl font-bold text-white mb-4">Performance Metrics</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-white/10 rounded-lg backdrop-blur-sm">
              <div className="text-3xl font-bold text-tesla-purple">{vehicle.performance.acceleration}s</div>
              <div className="text-white/70 text-sm">0-60 MPH</div>
            </div>
            <div className="text-center p-4 bg-white/10 rounded-lg backdrop-blur-sm">
              <div className="text-3xl font-bold text-tesla-purple">{vehicle.performance.topSpeed}</div>
              <div className="text-white/70 text-sm">Top Speed</div>
            </div>
            <div className="text-center p-4 bg-white/10 rounded-lg backdrop-blur-sm">
              <div className="text-3xl font-bold text-tesla-purple">{vehicle.performance.range}</div>
              <div className="text-white/70 text-sm">EPA Range</div>
            </div>
            <div className="text-center p-4 bg-white/10 rounded-lg backdrop-blur-sm">
              <div className="text-3xl font-bold text-tesla-purple">11.5s</div>
              <div className="text-white/70 text-sm">Quarter Mile</div>
            </div>
          </div>
          <div className="mt-6">
            <NeumorphicButton variant="primary" size="large" className="w-full">
              Schedule Test Drive
            </NeumorphicButton>
          </div>
        </div>
      )
    },
    {
      title: "Safety Features",
      subtitle: "5-Star safety rating",
      backgroundImage: "https://images.unsplash.com/photo-1566473965997-3de9c817e938?q=80&w=2070&auto=format&fit=crop",
      icon: <Shield className="h-6 w-6 text-tesla-purple" />,
      content: (
        <div className="space-y-4">
          <h4 className="text-xl font-bold text-white mb-4">Advanced Safety Systems</h4>
          <div className="space-y-3">
            <div className="flex items-center gap-3 p-3 bg-white/10 rounded-lg backdrop-blur-sm">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span className="text-white">Automatic Emergency Braking</span>
            </div>
            <div className="flex items-center gap-3 p-3 bg-white/10 rounded-lg backdrop-blur-sm">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span className="text-white">Blind Spot Monitoring</span>
            </div>
            <div className="flex items-center gap-3 p-3 bg-white/10 rounded-lg backdrop-blur-sm">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span className="text-white">Lane Departure Warning</span>
            </div>
            <div className="flex items-center gap-3 p-3 bg-white/10 rounded-lg backdrop-blur-sm">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span className="text-white">Sentry Mode</span>
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="bg-tesla-dark">
      {sections.map((section, index) => (
        <ScrollExpandSection
          key={index}
          title={section.title}
          subtitle={section.subtitle}
          backgroundImage={section.backgroundImage}
          icon={section.icon}
          index={index}
        >
          {section.content}
        </ScrollExpandSection>
      ))}
    </div>
  );
};

export default VehicleScrollExpansion;
