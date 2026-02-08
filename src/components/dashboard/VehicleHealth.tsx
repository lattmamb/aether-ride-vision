import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Battery, AlertTriangle, CheckCircle, Clock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { ScheduleMaintenanceModal } from '@/components/dashboard/modals';

export default function VehicleHealth() {
  const navigate = useNavigate();
  const [showMaintenanceModal, setShowMaintenanceModal] = useState(false);
  
  const healthAlerts = [
    {
      id: 'TES-001',
      model: 'Model S',
      issue: 'Battery calibration needed',
      severity: 'medium',
      batteryLevel: 87,
      location: 'Downtown Station'
    },
    {
      id: 'TES-042',
      model: 'Model 3',
      issue: 'Scheduled maintenance due',
      severity: 'low',
      batteryLevel: 94,
      location: 'Airport Location'
    },
    {
      id: 'TES-018',
      model: 'Model Y',
      issue: 'Tire pressure low',
      severity: 'high',
      batteryLevel: 56,
      location: 'Mall Station'
    }
  ];

  return (
    <div className="dashboard-card p-6">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">Vehicle Health Monitoring</h3>
        <Button 
          variant="ghost" 
          size="sm"
          onClick={() => navigate('/dashboard/maintenance')}
        >
          View All
        </Button>
      </div>

      <div className="space-y-4">
        {healthAlerts.map((alert, index) => (
          <div key={index} className="glass-panel p-4 rounded-lg">
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-2">
                <Badge variant="outline" className="text-xs">{alert.id}</Badge>
                <span className="text-sm font-medium">{alert.model}</span>
              </div>
              <Badge className={`text-xs ${
                alert.severity === 'high' ? 'status-error' :
                alert.severity === 'medium' ? 'status-warning' :
                'status-info'
              }`}>
                {alert.severity}
              </Badge>
            </div>

            <p className="text-sm mb-3">{alert.issue}</p>

            <div className="flex items-center justify-between text-xs text-muted-foreground">
              <div className="flex items-center gap-1">
                <Battery className="h-3 w-3" />
                <span>{alert.batteryLevel}%</span>
              </div>
              <span>{alert.location}</span>
            </div>

            <div className="mt-3 w-full bg-muted rounded-full h-2">
              <div 
                className={`h-2 rounded-full transition-all duration-300 ${
                  alert.batteryLevel > 80 ? 'bg-green-500' :
                  alert.batteryLevel > 50 ? 'bg-yellow-500' : 'bg-destructive'
                }`}
                style={{ width: `${alert.batteryLevel}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      <Button 
        variant="outline" 
        className="w-full mt-4"
        onClick={() => setShowMaintenanceModal(true)}
      >
        <AlertTriangle className="h-4 w-4 mr-2" />
        Schedule Maintenance
      </Button>

      <ScheduleMaintenanceModal 
        open={showMaintenanceModal} 
        onOpenChange={setShowMaintenanceModal} 
      />
    </div>
  );
}
