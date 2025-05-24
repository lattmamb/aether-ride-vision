
import React, { useState } from 'react';

interface NeumorphicToggleProps {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  label?: string;
  size?: 'small' | 'medium' | 'large';
}

const NeumorphicToggle: React.FC<NeumorphicToggleProps> = ({
  checked = false,
  onChange,
  label,
  size = 'medium'
}) => {
  const [isChecked, setIsChecked] = useState(checked);

  const handleToggle = () => {
    const newValue = !isChecked;
    setIsChecked(newValue);
    onChange?.(newValue);
  };

  const getSizeStyles = () => {
    switch (size) {
      case 'small':
        return { container: 'w-12 h-6', thumb: 'w-4 h-4' };
      case 'large':
        return { container: 'w-20 h-10', thumb: 'w-8 h-8' };
      default:
        return { container: 'w-16 h-8', thumb: 'w-6 h-6' };
    }
  };

  const sizeStyles = getSizeStyles();

  return (
    <div className="flex items-center gap-3">
      {label && <span className="text-gray-700 font-medium">{label}</span>}
      
      <button
        onClick={handleToggle}
        className={`
          relative ${sizeStyles.container} bg-gray-100 rounded-full p-1 transition-all duration-300
          ${isChecked 
            ? 'shadow-[inset_4px_4px_8px_#bebebe,inset_-4px_-4px_8px_#ffffff]' 
            : 'shadow-[4px_4px_8px_#bebebe,-4px_-4px_8px_#ffffff]'
          }
        `}
      >
        <div
          className={`
            ${sizeStyles.thumb} bg-gradient-to-br rounded-full transition-all duration-300 transform
            ${isChecked 
              ? 'translate-x-full from-purple-400 to-purple-600 shadow-[2px_2px_4px_rgba(155,135,245,0.3),-2px_-2px_4px_rgba(196,181,253,0.3)]' 
              : 'translate-x-0 from-gray-200 to-gray-300 shadow-[2px_2px_4px_#bebebe,-2px_-2px_4px_#ffffff]'
            }
          `}
        />
      </button>
    </div>
  );
};

export default NeumorphicToggle;
