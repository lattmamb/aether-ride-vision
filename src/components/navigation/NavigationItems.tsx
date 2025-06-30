
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

interface NavigationItem {
  name: string;
  link: string;
}

interface NavigationItemsProps {
  items: NavigationItem[];
  onItemClick?: () => void;
  isMobile?: boolean;
}

const NavigationItems: React.FC<NavigationItemsProps> = ({ items, onItemClick, isMobile = false }) => {
  const [hovered, setHovered] = useState<number | null>(null);
  const location = useLocation();

  const isActiveRoute = (path: string) => {
    return location.pathname === path;
  };

  if (isMobile) {
    return (
      <>
        {items.map((item, idx) => (
          <Link
            key={`mobile-link-${idx}`}
            to={item.link}
            onClick={onItemClick}
            className={`py-2 block transition-colors flex items-center gap-2 ${
              isActiveRoute(item.link) 
                ? 'text-white font-medium border-l-2 border-[#9b87f5] pl-2' 
                : 'text-white/80 hover:text-white'
            }`}
          >
            {item.name}
          </Link>
        ))}
      </>
    );
  }

  return (
    <div
      onMouseLeave={() => setHovered(null)}
      className="absolute inset-0 hidden flex-1 flex-row items-center justify-center space-x-2 text-sm font-medium transition duration-200 lg:flex lg:space-x-2"
    >
      {items.map((item, idx) => (
        <Link
          key={`link-${idx}`}
          to={item.link}
          onMouseEnter={() => setHovered(idx)}
          onClick={onItemClick}
          className={`relative px-4 py-2 transition-colors ${
            isActiveRoute(item.link) 
              ? 'text-white font-medium' 
              : 'text-white/80 hover:text-white'
          }`}
        >
          {hovered === idx && (
            <div className="absolute inset-0 h-full w-full rounded-full bg-[#9b87f5]/20" />
          )}
          <span className="relative z-20">{item.name}</span>
          {isActiveRoute(item.link) && (
            <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-[#9b87f5] rounded-full" />
          )}
        </Link>
      ))}
    </div>
  );
};

export default NavigationItems;
