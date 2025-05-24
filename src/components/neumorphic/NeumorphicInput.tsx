
import React, { useRef, useEffect, useState } from 'react';
import { Search, Send } from 'lucide-react';
import { useAdvancedCursor } from '@/hooks/useAdvancedCursor';

interface NeumorphicInputProps {
  placeholder?: string;
  variant?: 'search' | 'text';
  onSubmit?: (value: string) => void;
  className?: string;
}

const NeumorphicInput: React.FC<NeumorphicInputProps> = ({
  placeholder = "Search...",
  variant = 'search',
  onSubmit,
  className = ''
}) => {
  const { smoothPosition } = useAdvancedCursor();
  const containerRef = useRef<HTMLDivElement>(null);
  const [value, setValue] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const x = ((smoothPosition.x - rect.left) / rect.width) * 100;
      const y = ((smoothPosition.y - rect.top) / rect.height) * 100;
      
      containerRef.current.style.setProperty('--mouse-x', `${x}%`);
      containerRef.current.style.setProperty('--mouse-y', `${y}%`);
    }
  }, [smoothPosition]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (value.trim() && onSubmit) {
      onSubmit(value.trim());
      setValue('');
    }
  };

  return (
    <div
      ref={containerRef}
      className={`
        relative max-w-md mx-auto bg-gray-100 rounded-2xl p-1 transition-all duration-300
        ${isFocused 
          ? 'shadow-[inset_8px_8px_16px_#bebebe,inset_-8px_-8px_16px_#ffffff]' 
          : 'shadow-[inset_6px_6px_12px_#bebebe,inset_-6px_-6px_12px_#ffffff]'
        }
        ${className}
      `}
    >
      {/* Soft inner glow */}
      <div 
        className="absolute inset-0 rounded-2xl opacity-20 pointer-events-none"
        style={{
          background: `
            radial-gradient(
              circle at var(--mouse-x, 50%) var(--mouse-y, 50%),
              rgba(155, 135, 245, 0.3),
              transparent 70%
            )
          `
        }}
      />
      
      <form onSubmit={handleSubmit} className="relative flex items-center gap-3 p-4">
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className="flex-1 bg-transparent border-none outline-none text-gray-700 placeholder-gray-400 text-base"
          placeholder={placeholder}
        />
        
        <button
          type="submit"
          className={`
            p-2 rounded-xl bg-gray-100 transition-all duration-200
            shadow-[4px_4px_8px_#bebebe,-4px_-4px_8px_#ffffff]
            hover:shadow-[2px_2px_4px_#bebebe,-2px_-2px_4px_#ffffff]
            active:shadow-[inset_2px_2px_4px_#bebebe,inset_-2px_-2px_4px_#ffffff]
            ${value.trim() ? 'text-purple-500' : 'text-gray-400'}
          `}
        >
          {variant === 'search' ? <Search className="h-5 w-5" /> : <Send className="h-5 w-5" />}
        </button>
      </form>
    </div>
  );
};

export default NeumorphicInput;
