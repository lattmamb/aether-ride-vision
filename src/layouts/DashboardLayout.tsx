import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import DashboardSidebar from '@/components/dashboard/DashboardSidebar';
import DashboardHeader from '@/components/dashboard/DashboardHeader';
import Breadcrumbs from '@/components/navigation/Breadcrumbs';

export default function DashboardLayout() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  return (
    <div className="h-screen bg-background flex overflow-hidden">
      {/* Sidebar */}
      <DashboardSidebar collapsed={sidebarCollapsed} />
      
      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Header */}
        <DashboardHeader 
          sidebarCollapsed={sidebarCollapsed}
          setSidebarCollapsed={setSidebarCollapsed}
        />

        {/* Page Content */}
        <main className="flex-1 overflow-auto bg-background">
          <Breadcrumbs />
          <Outlet />
        </main>
      </div>
    </div>
  );
}