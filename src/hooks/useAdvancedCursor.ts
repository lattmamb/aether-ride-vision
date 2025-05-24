
import { useState, useEffect, useRef } from 'react';

interface CursorPosition {
  x: number;
  y: number;
}

interface CursorVelocity {
  x: number;
  y: number;
}

export const useAdvancedCursor = () => {
  const [position, setPosition] = useState<CursorPosition>({ x: 0, y: 0 });
  const [smoothPosition, setSmoothPosition] = useState<CursorPosition>({ x: 0, y: 0 });
  const [velocity, setVelocity] = useState<CursorVelocity>({ x: 0, y: 0 });
  const [isMoving, setIsMoving] = useState(false);
  
  const animationRef = useRef<number>();
  const lastPosition = useRef<CursorPosition>({ x: 0, y: 0 });
  const lastTime = useRef<number>(Date.now());

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const now = Date.now();
      const dt = now - lastTime.current;
      
      if (dt > 0) {
        const newVelocity = {
          x: (e.clientX - lastPosition.current.x) / dt,
          y: (e.clientY - lastPosition.current.y) / dt
        };
        
        setVelocity(newVelocity);
        setIsMoving(Math.abs(newVelocity.x) + Math.abs(newVelocity.y) > 0.1);
      }
      
      setPosition({ x: e.clientX, y: e.clientY });
      lastPosition.current = { x: e.clientX, y: e.clientY };
      lastTime.current = now;
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const animate = () => {
      setSmoothPosition(prev => ({
        x: prev.x + (position.x - prev.x) * 0.15,
        y: prev.y + (position.y - prev.y) * 0.15
      }));
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [position]);

  return { position, smoothPosition, velocity, isMoving };
};
