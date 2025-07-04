import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { 
  Accessibility, 
  Eye, 
  EyeOff, 
  Type, 
  Keyboard, 
  Volume2,
  VolumeX,
  Settings,
  X
} from 'lucide-react';

interface AccessibilityFeaturesProps {
  className?: string;
}

const AccessibilityFeatures: React.FC<AccessibilityFeaturesProps> = ({ className }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [settings, setSettings] = useState({
    highContrast: false,
    largeText: false,
    reduceMotion: false,
    screenReader: false,
    keyboardNav: true
  });

  useEffect(() => {
    // Apply accessibility settings to document
    const root = document.documentElement;
    
    if (settings.highContrast) {
      root.style.setProperty('--unity-midnight', '#000000');
      root.style.setProperty('--unity-charcoal', '#1a1a1a');
      root.classList.add('high-contrast');
    } else {
      root.style.removeProperty('--unity-midnight');
      root.style.removeProperty('--unity-charcoal');
      root.classList.remove('high-contrast');
    }

    if (settings.largeText) {
      root.classList.add('large-text');
    } else {
      root.classList.remove('large-text');
    }

    if (settings.reduceMotion) {
      root.classList.add('reduce-motion');
    } else {
      root.classList.remove('reduce-motion');
    }

    // Update prefers-reduced-motion for CSS
    if (settings.reduceMotion) {
      root.style.setProperty('--motion-duration', '0s');
    } else {
      root.style.removeProperty('--motion-duration');
    }
  }, [settings]);

  const toggleSetting = (key: keyof typeof settings) => {
    setSettings(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const accessibilityOptions = [
    {
      key: 'highContrast' as keyof typeof settings,
      label: 'High Contrast',
      description: 'Increase visual contrast for better visibility',
      icon: settings.highContrast ? Eye : EyeOff,
      active: settings.highContrast
    },
    {
      key: 'largeText' as keyof typeof settings,
      label: 'Large Text',
      description: 'Increase font size throughout the application',
      icon: Type,
      active: settings.largeText
    },
    {
      key: 'reduceMotion' as keyof typeof settings,
      label: 'Reduce Motion',
      description: 'Minimize animations and transitions',
      icon: settings.reduceMotion ? VolumeX : Volume2,
      active: settings.reduceMotion
    },
    {
      key: 'keyboardNav' as keyof typeof settings,
      label: 'Enhanced Keyboard Navigation',
      description: 'Improved focus indicators and shortcuts',
      icon: Keyboard,
      active: settings.keyboardNav
    }
  ];

  return (
    <>
      {/* Accessibility Toggle Button */}
      <Button
        onClick={() => setIsOpen(true)}
        size="icon"
        variant="ghost"
        className="fixed bottom-4 right-4 z-50 w-12 h-12 rounded-full bg-unity-purple/90 hover:bg-unity-purple text-white backdrop-blur-sm border border-white/20"
        aria-label="Open accessibility settings"
        title="Accessibility Settings"
      >
        <Accessibility className="w-6 h-6" />
      </Button>

      {/* Accessibility Panel */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
              onClick={() => setIsOpen(false)}
            />

            {/* Panel */}
            <motion.div
              initial={{ opacity: 0, x: 300 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 300 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 h-full w-full max-w-md z-50"
            >
              <Card className="h-full glass-card rounded-none rounded-l-xl p-6 overflow-y-auto">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-unity-purple/20 flex items-center justify-center">
                      <Accessibility className="w-5 h-5 text-unity-purple" />
                    </div>
                    <div>
                      <h2 className="text-xl font-display font-bold text-white">
                        Accessibility
                      </h2>
                      <p className="text-sm text-white/70">
                        Illinois Transit for Everyone
                      </p>
                    </div>
                  </div>
                  <Button
                    onClick={() => setIsOpen(false)}
                    size="icon"
                    variant="ghost"
                    className="text-white/70 hover:text-white"
                  >
                    <X className="w-5 h-5" />
                  </Button>
                </div>

                {/* Accessibility Options */}
                <div className="space-y-4">
                  {accessibilityOptions.map((option, index) => (
                    <motion.div
                      key={option.key}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Card className="glass-effect p-4 hover:bg-white/5 transition-all duration-300">
                        <div className="flex items-start justify-between">
                          <div className="flex items-start gap-3 flex-1">
                            <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                              option.active ? 'bg-unity-purple/30 text-unity-purple' : 'bg-white/10 text-white/70'
                            }`}>
                              <option.icon className="w-4 h-4" />
                            </div>
                            <div className="flex-1">
                              <h3 className="text-sm font-semibold text-white mb-1">
                                {option.label}
                              </h3>
                              <p className="text-xs text-white/60 leading-relaxed">
                                {option.description}
                              </p>
                            </div>
                          </div>
                          <Button
                            onClick={() => toggleSetting(option.key)}
                            size="sm"
                            variant={option.active ? "default" : "outline"}
                            className={option.active 
                              ? "bg-unity-purple hover:bg-unity-purple/80 text-white" 
                              : "border-white/20 text-white/70 hover:bg-white/10"
                            }
                          >
                            {option.active ? 'On' : 'Off'}
                          </Button>
                        </div>
                      </Card>
                    </motion.div>
                  ))}
                </div>

                {/* Illinois Accessibility Notice */}
                <motion.div 
                  className="mt-8 p-4 bg-unity-signature/10 border border-unity-signature/30 rounded-lg"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <div className="flex items-center gap-2 text-unity-signature mb-2">
                    <Settings className="w-4 h-4" />
                    <span className="text-sm font-semibold">Illinois ADA Compliance</span>
                  </div>
                  <p className="text-xs text-white/70">
                    Unity Fleet is committed to providing accessible transportation services 
                    throughout Illinois, complying with ADA requirements and ensuring equal 
                    access to clean energy transit for all residents.
                  </p>
                </motion.div>

                {/* Keyboard Shortcuts */}
                <motion.div 
                  className="mt-6 p-4 glass-effect rounded-lg"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7 }}
                >
                  <h3 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
                    <Keyboard className="w-4 h-4" />
                    Keyboard Shortcuts
                  </h3>
                  <div className="space-y-2 text-xs">
                    <div className="flex justify-between text-white/70">
                      <span>Navigation</span>
                      <code className="bg-white/10 px-2 py-1 rounded">Tab / Shift+Tab</code>
                    </div>
                    <div className="flex justify-between text-white/70">
                      <span>Home Page</span>
                      <code className="bg-white/10 px-2 py-1 rounded">Alt+H</code>
                    </div>
                    <div className="flex justify-between text-white/70">
                      <span>Search</span>
                      <code className="bg-white/10 px-2 py-1 rounded">Ctrl+K</code>
                    </div>
                    <div className="flex justify-between text-white/70">
                      <span>Accessibility</span>
                      <code className="bg-white/10 px-2 py-1 rounded">Alt+A</code>
                    </div>
                  </div>
                </motion.div>
              </Card>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default AccessibilityFeatures;