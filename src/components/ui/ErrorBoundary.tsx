import React, { Component, ErrorInfo, ReactNode } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { AlertTriangle, RefreshCw, Home, Car } from 'lucide-react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
  errorInfo?: ErrorInfo;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Unity Fleet Error Boundary caught an error:', error, errorInfo);
    this.setState({ errorInfo });
  }

  handleReset = () => {
    this.setState({ hasError: false, error: undefined, errorInfo: undefined });
  };

  handleReload = () => {
    window.location.reload();
  };

  handleHome = () => {
    window.location.href = '/';
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="min-h-screen bg-unity-midnight flex items-center justify-center p-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl w-full"
          >
            <Card className="glass-card p-8 text-center">
              {/* Unity Fleet Error Icon */}
              <motion.div 
                className="flex justify-center mb-6"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-red-500/20 rounded-full blur-xl animate-pulse" />
                  <AlertTriangle className="w-16 h-16 text-red-400 relative z-10" />
                </div>
              </motion.div>

              {/* Error Title */}
              <motion.h1 
                className="text-3xl font-display font-bold text-white mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                System Error
              </motion.h1>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <p className="text-lg text-white/70 mb-2">
                  Unity Fleet encountered an unexpected error
                </p>
                <p className="text-sm text-white/50 mb-6">
                  Our Illinois transit network systems are working to resolve this issue
                </p>
              </motion.div>

              {/* Error Details (Development Only) */}
              {process.env.NODE_ENV === 'development' && this.state.error && (
                <motion.div 
                  className="mb-6 p-4 bg-red-900/20 border border-red-500/30 rounded-lg text-left"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  transition={{ delay: 0.8 }}
                >
                  <h3 className="text-sm font-semibold text-red-400 mb-2">Error Details:</h3>
                  <code className="text-xs text-red-300 block whitespace-pre-wrap font-mono">
                    {this.state.error.message}
                  </code>
                </motion.div>
              )}

              {/* Action Buttons */}
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 justify-center"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0 }}
              >
                <Button 
                  onClick={this.handleReset}
                  className="gradient-bg-primary hover:scale-105 transition-all duration-300 font-display font-semibold"
                >
                  <RefreshCw className="w-4 h-4 mr-2" />
                  Try Again
                </Button>
                
                <Button 
                  onClick={this.handleReload}
                  variant="outline"
                  className="border-white/20 text-white hover:bg-white/10"
                >
                  <RefreshCw className="w-4 h-4 mr-2" />
                  Reload Page
                </Button>
                
                <Button 
                  onClick={this.handleHome}
                  variant="ghost"
                  className="text-white/70 hover:text-white hover:bg-white/5"
                >
                  <Home className="w-4 h-4 mr-2" />
                  Go Home
                </Button>
              </motion.div>

              {/* Illinois Support Notice */}
              <motion.div 
                className="mt-8 p-4 glass-effect rounded-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
              >
                <div className="flex items-center justify-center gap-2 text-unity-teal mb-2">
                  <Car className="w-4 h-4" />
                  <span className="text-sm font-semibold">Illinois Transit Support</span>
                </div>
                <p className="text-xs text-white/60">
                  If this issue persists, our Chicago-based support team is available 24/7 
                  to ensure your transit experience remains smooth across Illinois.
                </p>
              </motion.div>
            </Card>
          </motion.div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;