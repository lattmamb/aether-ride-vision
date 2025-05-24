"use client";
import { useEffect, useRef, useState } from "react";
import { useWindowSize } from "@uidotdev/usehooks";

type ParticlesProps = {
  id?: string;
  className?: string;
  background?: string;
  particleSize?: number;
  minSize?: number;
  maxSize?: number;
  speed?: number;
  particleDensity?: number;
  particleColor?: string;
  disableCanvasMouseDetection?: boolean;
};

export const SparklesCore = ({
  id = "tsparticles",
  className,
  background = "transparent",
  particleSize = 2,
  minSize,
  maxSize,
  speed = 1,
  particleDensity = 100,
  particleColor = "#ffffff",
  disableCanvasMouseDetection = false,
}: ParticlesProps) => {
  const [init, setInit] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const size = useWindowSize();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const contextRef = useRef<CanvasRenderingContext2D | null>(null);
  const particlesRef = useRef<{ x: number; y: number; size: number; vx: number; vy: number }[]>([]);
  const animationRef = useRef<number | null>(null);
  const mouseRef = useRef<{ x: number; y: number; vx: number; vy: number } | null>(null);

  useEffect(() => {
    const initializeCanvas = async () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      contextRef.current = ctx;
      
      // Set canvas size to parent container
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width || 640;
      canvas.height = rect.height || 160;

      console.log('Canvas initialized:', canvas.width, canvas.height);

      // Create particles
      particlesRef.current = Array.from({ length: particleDensity }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: minSize && maxSize 
          ? Math.random() * (maxSize - minSize) + minSize 
          : particleSize,
        vx: (Math.random() - 0.5) * speed,
        vy: (Math.random() - 0.5) * speed
      }));

      console.log('Particles created:', particlesRef.current.length);

      if (!disableCanvasMouseDetection) {
        mouseRef.current = { x: 0, y: 0, vx: 0, vy: 0 };
        const handleMouseMove = (e: MouseEvent) => {
          if (!mouseRef.current || !canvas) return;
          
          const rect = canvas.getBoundingClientRect();
          const prevX = mouseRef.current.x;
          const prevY = mouseRef.current.y;
          
          mouseRef.current.x = e.clientX - rect.left;
          mouseRef.current.y = e.clientY - rect.top;
          
          mouseRef.current.vx = mouseRef.current.x - prevX;
          mouseRef.current.vy = mouseRef.current.y - prevY;
        };

        window.addEventListener('mousemove', handleMouseMove);
        
        return () => {
          window.removeEventListener('mousemove', handleMouseMove);
        };
      }

      setIsLoaded(true);
    };

    if (!init) {
      initializeCanvas();
      setInit(true);
    }
  }, [init, particleDensity, particleSize, minSize, maxSize, speed, disableCanvasMouseDetection]);

  useEffect(() => {
    if (!isLoaded) return;
    
    const animate = () => {
      const canvas = canvasRef.current;
      const ctx = contextRef.current;
      if (!canvas || !ctx) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Set background if provided
      if (background && background !== "transparent") {
        ctx.fillStyle = background;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }

      ctx.fillStyle = particleColor;
      
      // Draw and update each particle
      particlesRef.current.forEach((particle) => {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
        
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;
        
        // Bounce on edges
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;
        
        // Keep particles in bounds
        particle.x = Math.max(0, Math.min(canvas.width, particle.x));
        particle.y = Math.max(0, Math.min(canvas.height, particle.y));
        
        // Interact with mouse if enabled
        if (mouseRef.current && !disableCanvasMouseDetection) {
          const dx = mouseRef.current.x - particle.x;
          const dy = mouseRef.current.y - particle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 100) {
            particle.vx += (dx / distance) * 0.1;
            particle.vy += (dy / distance) * 0.1;
          }
        }
        
        // Apply friction
        particle.vx *= 0.99;
        particle.vy *= 0.99;
      });
      
      animationRef.current = requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isLoaded, background, particleColor, disableCanvasMouseDetection]);

  // Handle resize
  useEffect(() => {
    const handleResize = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width || 640;
      canvas.height = rect.height || 160;
    };
    
    const resizeObserver = new ResizeObserver(handleResize);
    if (canvasRef.current) {
      resizeObserver.observe(canvasRef.current);
    }
    
    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      id={id}
      className={className}
      style={{ 
        width: "100%", 
        height: "100%",
        display: "block"
      }}
    />
  );
};
