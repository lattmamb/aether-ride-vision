
"use client";
import { useEffect, useRef, useState } from "react";
import { useWindowSize } from "@uidotdev/usehooks";
import { loadSlim } from "@tsparticles/slim";
import { Engine } from "@tsparticles/engine";

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
  background,
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
      canvas.width = size.width || window.innerWidth;
      canvas.height = size.height || window.innerHeight;

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

      if (!disableCanvasMouseDetection) {
        // Initialize mouse position
        mouseRef.current = { x: 0, y: 0, vx: 0, vy: 0 };

        // Setup mouse move listener
        window.addEventListener('mousemove', handleMouseMove);
      }

      setIsLoaded(true);
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!mouseRef.current) return;
      
      const prevX = mouseRef.current.x;
      const prevY = mouseRef.current.y;
      
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
      
      mouseRef.current.vx = mouseRef.current.x - prevX;
      mouseRef.current.vy = mouseRef.current.y - prevY;
    };

    if (!init) {
      initializeCanvas();
      setInit(true);
    }

    return () => {
      if (!disableCanvasMouseDetection) {
        window.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, [init, particleDensity, particleSize, minSize, maxSize, speed, disableCanvasMouseDetection, size]);

  useEffect(() => {
    if (!isLoaded) return;
    
    const animate = () => {
      const canvas = canvasRef.current;
      const ctx = contextRef.current;
      if (!canvas || !ctx) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Set background if provided
      if (background) {
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
        
        // Interact with mouse if enabled
        if (mouseRef.current && !disableCanvasMouseDetection) {
          const dx = mouseRef.current.x - particle.x;
          const dy = mouseRef.current.y - particle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          // Apply a small force towards the mouse
          if (distance < 100) {
            particle.vx += (dx / distance) * 0.2;
            particle.vy += (dy / distance) * 0.2;
          }
          
          // Apply mouse velocity to particles
          if (Math.abs(mouseRef.current.vx) > 1 || Math.abs(mouseRef.current.vy) > 1) {
            if (distance < 50) {
              particle.vx += mouseRef.current.vx * 0.2;
              particle.vy += mouseRef.current.vy * 0.2;
            }
          }
        }
        
        // Apply some friction to prevent infinite acceleration
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

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      id={id}
      className={className}
      style={{ width: "100%", height: "100%" }}
    />
  );
};
