
import React from 'react';
import { Settings, User } from 'lucide-react';
import { Button } from '@/components/ui/button';

const SidebarFooter: React.FC = () => {
  return (
    <div className="p-4 border-t border-[#333] space-y-2">
      <Button variant="ghost" className="w-full justify-start text-gray-400 hover:text-white">
        <Settings className="w-4 h-4 mr-3" />
        Settings
      </Button>
      <Button variant="ghost" className="w-full justify-start text-gray-400 hover:text-white">
        <User className="w-4 h-4 mr-3" />
        Profile
      </Button>
    </div>
  );
};

export default SidebarFooter;
