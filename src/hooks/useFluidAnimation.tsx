
import { useEffect, useRef } from 'react';
import { useAdaptiveLayout } from '@/contexts/AdaptiveLayoutContext';

interface FluidAnimationOptions {
  duration?: number;
  easing?: string;
  delay?: number;
  performanceLevel?: 'low' | 'medium' | 'high';
}

export const useFluidAnimation = (options: FluidAnimationOptions = {}) => {
  const { reducedMotion, deviceType } = useAdaptiveLayout();
  const elementRef = useRef<HTMLElement>(null);
  
  const {
    duration = 300,
    easing = 'cubic-bezier(0.4, 0, 0.2, 1)',
    delay = 0,
    performanceLevel = 'medium'
  } = options;

  useEffect(() => {
    if (!elementRef.current || reducedMotion) return;

    const element = elementRef.current;
    
    // Adjust animation based on device performance
    const adjustedDuration = deviceType === 'mobile' ? duration * 0.8 : duration;
    const performanceMultiplier = performanceLevel === 'low' ? 0.5 : performanceLevel === 'high' ? 1.2 : 1;
    
    element.style.transition = `all ${adjustedDuration * performanceMultiplier}ms ${easing}`;
    element.style.transitionDelay = `${delay}ms`;
    
    return () => {
      element.style.transition = '';
      element.style.transitionDelay = '';
    };
  }, [duration, easing, delay, performanceLevel, reducedMotion, deviceType]);

  const animateTo = (properties: Record<string, string>) => {
    if (!elementRef.current || reducedMotion) return;
    
    Object.entries(properties).forEach(([property, value]) => {
      elementRef.current!.style.setProperty(property, value);
    });
  };

  return { elementRef, animateTo };
};
