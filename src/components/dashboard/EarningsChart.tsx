
import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';
import { DollarSign, TrendingUp, Calendar } from 'lucide-react';

const EarningsChart: React.FC = () => {
  const earningsData = [
    { date: '2024-01', uber: 1200, doordash: 800, lyft: 600, rental: 2000 },
    { date: '2024-02', uber: 1400, doordash: 900, lyft: 700, rental: 2200 },
    { date: '2024-03', uber: 1600, doordash: 1100, lyft: 800, rental: 2100 },
    { date: '2024-04', uber: 1800, doordash: 1200, lyft: 900, rental: 2300 },
    { date: '2024-05', uber: 2000, doordash: 1300, lyft: 1000, rental: 2500 },
    { date: '2024-06', uber: 2200, doordash: 1400, lyft: 1100, rental: 2400 }
  ];

  const totalEarnings = earningsData.reduce((sum, month) => 
    sum + month.uber + month.doordash + month.lyft + month.rental, 0
  );

  const avgMonthlyEarnings = totalEarnings / earningsData.length;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass-card gradient-border-flow p-6 rounded-xl"
    >
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full gradient-bg-primary flex items-center justify-center">
            <DollarSign className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="text-xl font-bold">Earnings Overview</h3>
            <p className="text-white/70">Last 6 months performance</p>
          </div>
        </div>
        <div className="text-right">
          <div className="text-2xl font-bold gradient-accent-text">
            ${avgMonthlyEarnings.toFixed(0)}
          </div>
          <div className="text-sm text-white/70">Avg/Month</div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <Card className="glass-card p-4">
          <div className="flex items-center gap-2 mb-2">
            <TrendingUp className="w-4 h-4 text-green-400" />
            <span className="text-sm text-white/70">Total Earnings</span>
          </div>
          <div className="text-xl font-bold gradient-accent-text">
            ${totalEarnings.toLocaleString()}
          </div>
        </Card>
        
        <Card className="glass-card p-4">
          <div className="flex items-center gap-2 mb-2">
            <Calendar className="w-4 h-4 text-blue-400" />
            <span className="text-sm text-white/70">This Month</span>
          </div>
          <div className="text-xl font-bold gradient-accent-text">
            ${earningsData[earningsData.length - 1] ? 
              (earningsData[earningsData.length - 1].uber + 
               earningsData[earningsData.length - 1].doordash + 
               earningsData[earningsData.length - 1].lyft + 
               earningsData[earningsData.length - 1].rental).toLocaleString() : 0}
          </div>
        </Card>
        
        <Card className="glass-card p-4">
          <div className="flex items-center gap-2 mb-2">
            <DollarSign className="w-4 h-4 text-purple-400" />
            <span className="text-sm text-white/70">Growth Rate</span>
          </div>
          <div className="text-xl font-bold text-green-400">
            +12.5%
          </div>
        </Card>
      </div>

      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={earningsData}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
            <XAxis 
              dataKey="date" 
              stroke="rgba(255,255,255,0.7)"
              fontSize={12}
            />
            <YAxis 
              stroke="rgba(255,255,255,0.7)"
              fontSize={12}
            />
            <Tooltip 
              contentStyle={{
                backgroundColor: 'rgba(0,0,0,0.8)',
                border: '1px solid rgba(255,255,255,0.2)',
                borderRadius: '8px',
                color: 'white'
              }}
            />
            <Bar dataKey="rental" stackId="a" fill="#8884d8" name="Rental" />
            <Bar dataKey="uber" stackId="a" fill="#82ca9d" name="Uber" />
            <Bar dataKey="doordash" stackId="a" fill="#ffc658" name="DoorDash" />
            <Bar dataKey="lyft" stackId="a" fill="#ff7c7c" name="Lyft" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="text-center">
          <div className="w-4 h-4 bg-[#8884d8] rounded mx-auto mb-1"></div>
          <div className="text-xs text-white/70">Rental</div>
          <div className="font-medium">45%</div>
        </div>
        <div className="text-center">
          <div className="w-4 h-4 bg-[#82ca9d] rounded mx-auto mb-1"></div>
          <div className="text-xs text-white/70">Uber</div>
          <div className="font-medium">30%</div>
        </div>
        <div className="text-center">
          <div className="w-4 h-4 bg-[#ffc658] rounded mx-auto mb-1"></div>
          <div className="text-xs text-white/70">DoorDash</div>
          <div className="font-medium">15%</div>
        </div>
        <div className="text-center">
          <div className="w-4 h-4 bg-[#ff7c7c] rounded mx-auto mb-1"></div>
          <div className="text-xs text-white/70">Lyft</div>
          <div className="font-medium">10%</div>
        </div>
      </div>
    </motion.div>
  );
};

export default EarningsChart;
