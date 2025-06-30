
import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Home, Car, DollarSign, MapPin, Users, HelpCircle, MessageSquare, User } from 'lucide-react';

interface DockItem {
  id: string;
  icon: React.ReactNode;
  label: string;
  path: string;
  onClick?: () => void;
}

const UnityLogo = () => (
  <div className="flex items-center gap-2">
    <div className="w-10 h-10 relative flex items-center justify-center">
      <div className="absolute w-10 h-10 rounded-full bg-gradient-to-r from-unity-signature to-unity-teal opacity-70 blur-[8px]"></div>
      <div className="text-unity-signature font-bold text-2xl relative z-10 font-display">U</div>
    </div>
    <span className="text-xl font-bold gradient-luxury-text font-display hidden md:block">
      Unity Fleet
    </span>
  </div>
);

interface DockItemProps {
  item: DockItem;
  isHovered: boolean;
  isActive: boolean;
  onHover: (id: string | null) => void;
}

const DockItemComponent: React.FC<DockItemProps> = ({ item, isHovered, isActive, onHover }) => {
  return (
    <div
      className="relative group"
      onMouseEnter={() => onHover(item.id)}
      onMouseLeave={() => onHover(null)}
    >
      <Link to={item.path} onClick={item.onClick}>
        <div
          className={`
            relative flex items-center justify-center
            w-12 h-12 rounded-xl
            backdrop-blur-[20px] border transition-all duration-300 ease-out cursor-pointer
            ${isActive 
              ? 'bg-unity-signature/20 border-unity-signature/40 shadow-unity-glow scale-110' 
              : 'bg-unity-platinum/5 border-unity-platinum/10'
            }
            ${isHovered && !isActive
              ? 'scale-110 bg-unity-platinum/10 border-unity-platinum/20 -translate-y-1 shadow-lg shadow-unity-signature/20' 
              : !isActive ? 'hover:scale-105 hover:bg-unity-platinum/7 hover:-translate-y-0.5' : ''
            }
          `}
        >
          <div className={`
            transition-all duration-300
            ${isActive ? 'text-unity-signature' : 'text-unity-platinum'}
            ${isHovered ? 'scale-105 drop-shadow-[0_1px_4px_rgba(107,70,193,0.4)]' : ''}
          `}>
            {item.icon}
          </div>
        </div>
      </Link>
      
      {/* Tooltip */}
      <div className={`
        absolute -top-12 left-1/2 transform -translate-x-1/2
        px-3 py-1.5 rounded-lg
        bg-unity-midnight/90 backdrop-blur-lg
        text-unity-platinum text-xs font-medium font-body
        border border-unity-platinum/10
        transition-all duration-200
        pointer-events-none
        whitespace-nowrap
        ${isHovered 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-1'
        }
        shadow-unity-glass
      `}>
        {item.label}
        <div className="absolute top-full left-1/2 transform -translate-x-1/2">
          <div className="w-2 h-2 bg-unity-midnight/90 rotate-45 border-r border-b border-unity-platinum/10"></div>
        </div>
      </div>
    </div>
  );
};

interface UnityDockNavbarProps {
  showReflection?: boolean;
}

const UnityDockNavbar: React.FC<UnityDockNavbarProps> = ({ showReflection = true }) => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const location = useLocation();
  const navigate = useNavigate();

  const dockItems: DockItem[] = [
    { id: 'home', icon: <Home size={20} />, label: 'Home', path: '/' },
    { id: 'vehicles', icon: <Car size={20} />, label: 'Vehicles', path: '/vehicles' },
    { id: 'pricing', icon: <DollarSign size={20} />, label: 'Pricing', path: '/pricing' },
    { id: 'locations', icon: <MapPin size={20} />, label: 'Locations', path: '/locations' },
    { id: 'about', icon: <Users size={20} />, label: 'About', path: '/about' },
    { id: 'how-it-works', icon: <HelpCircle size={20} />, label: 'How It Works', path: '/how-it-works' },
  ];

  const actionItems: DockItem[] = [
    { id: 'chat', icon: <MessageSquare size={20} />, label: 'AI Assistant', path: '/chat' },
    { id: 'dashboard', icon: <User size={20} />, label: 'Dashboard', path: '/dashboard' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50">
      <div className="relative">
        {/* Main Dock Container */}
        <div className={`
          flex items-center gap-6 px-6 py-4
          rounded-2xl
          bg-unity-midnight/60 backdrop-blur-xl border border-unity-platinum/10
          shadow-unity-premium
          transition-all duration-500 ease-out
          ${hoveredItem ? 'scale-105' : ''}
        `}>
          {/* Logo */}
          <Link to="/" className="mr-4">
            <UnityLogo />
          </Link>
          
          {/* Separator */}
          <div className="w-px h-8 bg-unity-platinum/20"></div>
          
          {/* Navigation Items */}
          <div className="flex items-center gap-3">
            {dockItems.map((item) => (
              <DockItemComponent
                key={item.id}
                item={item}
                isHovered={hoveredItem === item.id}
                isActive={isActive(item.path)}
                onHover={setHoveredItem}
              />
            ))}
          </div>
          
          {/* Separator */}
          <div className="w-px h-8 bg-unity-platinum/20"></div>
          
          {/* Action Items */}
          <div className="flex items-center gap-3">
            {actionItems.map((item) => (
              <DockItemComponent
                key={item.id}
                item={item}
                isHovered={hoveredItem === item.id}
                isActive={isActive(item.path)}
                onHover={setHoveredItem}
              />
            ))}
          </div>
          
          {/* Book Now Button */}
          <button
            onClick={() => navigate('/vehicles')}
            className="ml-4 px-4 py-2 rounded-xl bg-gradient-to-r from-unity-signature to-unity-teal text-white font-semibold text-sm hover:shadow-unity-glow transition-all duration-300 font-display"
          >
            Book Now
          </button>
        </div>
        
        {/* Reflection Effect */}
        {showReflection && (
          <div className="absolute top-full left-0 right-0 h-16 overflow-hidden opacity-30">
            <div className={`
              flex items-center gap-6 px-6 py-4
              rounded-2xl
              bg-unity-midnight/30 backdrop-blur-xl border border-unity-platinum/5
              transform scale-y-[-1] mt-2
              transition-all duration-500 ease-out
              ${hoveredItem ? 'scale-105 scale-y-[-1.05]' : ''}
            `}>
              <UnityLogo />
              <div className="w-px h-8 bg-unity-platinum/10"></div>
              <div className="flex items-center gap-3">
                {dockItems.map((item) => (
                  <div
                    key={`reflection-${item.id}`}
                    className={`
                      flex items-center justify-center
                      w-12 h-12 rounded-xl
                      bg-unity-platinum/5 border border-unity-platinum/5
                      transition-all duration-300 ease-out
                      ${hoveredItem === item.id ? 'scale-125 -translate-y-2' : ''}
                      ${isActive(item.path) ? 'bg-unity-signature/10' : ''}
                    `}
                  >
                    <div className="text-unity-platinum/30">
                      {item.icon}
                    </div>
                  </div>
                ))}
              </div>
              <div className="w-px h-8 bg-unity-platinum/10"></div>
              <div className="flex items-center gap-3">
                {actionItems.map((item) => (
                  <div
                    key={`reflection-action-${item.id}`}
                    className={`
                      flex items-center justify-center
                      w-12 h-12 rounded-xl
                      bg-unity-platinum/5 border border-unity-platinum/5
                      transition-all duration-300 ease-out
                      ${hoveredItem === item.id ? 'scale-125 -translate-y-2' : ''}
                      ${isActive(item.path) ? 'bg-unity-signature/10' : ''}
                    `}
                  >
                    <div className="text-unity-platinum/30">
                      {item.icon}
                    </div>
                  </div>
                ))}
              </div>
              <div className="ml-4 px-4 py-2 rounded-xl bg-unity-signature/20 text-unity-platinum/30 font-semibold text-sm font-display">
                Book Now
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UnityDockNavbar;
