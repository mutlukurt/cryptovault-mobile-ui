import React from 'react';
import { TrendingUpIcon } from 'lucide-react';
interface PriceChartProps {
  isDark: boolean;
}
export const PriceChart: React.FC<PriceChartProps> = ({
  isDark
}) => {
  const cardClass = isDark ? 'bg-gray-800/50 border-gray-700/30 backdrop-blur-lg' : 'bg-white border-gray-200 shadow-sm';
  const textClass = isDark ? 'text-white' : 'text-gray-900';
  const secondaryTextClass = isDark ? 'text-gray-300' : 'text-gray-600';
  // This is a placeholder for a real chart component
  // In a real implementation, we'd use recharts or another charting library
  return <div className={`p-4 rounded-2xl border ${cardClass}`}>
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center">
          <div className="w-8 h-8 rounded-full bg-orange-500/20 flex items-center justify-center mr-2">
            <span className="text-orange-500 font-bold text-xs">₿</span>
          </div>
          <div>
            <h4 className={`font-medium ${textClass}`}>Bitcoin</h4>
            <span className={`text-xs ${secondaryTextClass}`}>BTC</span>
          </div>
        </div>
        <div className="text-right">
          <div className={`font-medium ${textClass}`}>$31,850.15</div>
          <div className="flex items-center justify-end text-green-500 text-xs">
            <TrendingUpIcon size={12} className="mr-1" />
            +2.4%
          </div>
        </div>
      </div>
      {/* Chart Placeholder - In real app, use a proper chart library */}
      <div className="relative h-24 mt-2">
        <div className="absolute inset-0 overflow-hidden">
          <svg viewBox="0 0 100 30" className="w-full h-full">
            <defs>
              <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor={isDark ? '#8b5cf6' : '#a78bfa'} stopOpacity="0.3" />
                <stop offset="100%" stopColor={isDark ? '#8b5cf6' : '#a78bfa'} stopOpacity="0" />
              </linearGradient>
            </defs>
            <path d="M0,30 L0,20 C5,18 10,25 15,20 C20,15 25,10 30,15 C35,20 40,25 45,20 C50,15 55,10 60,15 C65,20 70,25 75,20 C80,15 85,10 90,15 C95,20 100,25 100,20 L100,30 Z" fill="url(#chartGradient)" />
            <path d="M0,20 C5,18 10,25 15,20 C20,15 25,10 30,15 C35,20 40,25 45,20 C50,15 55,10 60,15 C65,20 70,25 75,20 C80,15 85,10 90,15 C95,20 100,25 100,20" fill="none" stroke={isDark ? '#8b5cf6' : '#7c3aed'} strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </div>
      </div>
      <div className="flex justify-between mt-2 text-xs text-gray-500">
        <span>1H</span>
        <span>1D</span>
        <span>1W</span>
        <span>1M</span>
        <span className="px-2 py-1 bg-purple-500/10 text-purple-500 rounded-md font-medium">
          3M
        </span>
        <span>1Y</span>
        <span>All</span>
      </div>
    </div>;
};