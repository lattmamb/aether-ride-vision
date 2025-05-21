
import React, { useState } from 'react';
import ToggleSwitch from './toggle-switch';

const ToggleSwitchDemo = () => {
  const [features, setFeatures] = useState({
    autopilot: false,
    performance: false,
    fullSelfDriving: false,
  });

  return (
    <div className="glass-card p-6 w-full max-w-md mx-auto">
      <h3 className="text-xl font-bold mb-6 gradient-text">Vehicle Features</h3>
      
      <div className="space-y-4">
        <ToggleSwitch
          label="Enhanced Autopilot"
          checked={features.autopilot}
          onChange={(checked) => setFeatures({...features, autopilot: checked})}
        />
        
        <ToggleSwitch
          label="Performance Upgrade"
          checked={features.performance}
          onChange={(checked) => setFeatures({...features, performance: checked})}
        />
        
        <ToggleSwitch
          label="Full Self-Driving"
          checked={features.fullSelfDriving}
          onChange={(checked) => setFeatures({...features, fullSelfDriving: checked})}
        />
      </div>
      
      <div className="mt-6 text-left text-sm text-white/70">
        <p>Selected features:</p>
        <ul className="list-disc pl-5 mt-2">
          {features.autopilot && <li>Enhanced Autopilot</li>}
          {features.performance && <li>Performance Upgrade</li>}
          {features.fullSelfDriving && <li>Full Self-Driving</li>}
        </ul>
      </div>
    </div>
  );
};

export default ToggleSwitchDemo;
