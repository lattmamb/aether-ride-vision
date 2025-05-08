
import React from 'react';
import { User } from 'lucide-react';

const UserAvatar: React.FC = () => {
  return (
    <div className="flex items-center justify-center mb-6">
      <div className="relative">
        <div className="w-20 h-20 rounded-full bg-aether-panel-light border border-aether-blue/30 flex items-center justify-center shadow-neon-blue">
          <div className="w-16 h-16 rounded-full bg-aether-blue/10 flex items-center justify-center">
            <User className="w-8 h-8 text-aether-blue" />
          </div>
        </div>
        <div className="absolute inset-0 w-20 h-20 rounded-full border border-aether-blue/50 animate-pulse-glow"></div>
      </div>
    </div>
  );
};

export default UserAvatar;
