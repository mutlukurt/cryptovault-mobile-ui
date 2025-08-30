import React from 'react';
import { TrendingUpIcon, TrendingDownIcon } from 'lucide-react';
interface Asset {
  id: string;
  name: string;
  symbol: string;
  amount: number;
  value: number;
  change: number;
}
interface CryptoAssetProps {
  asset: Asset;
  isDark: boolean;
}
export const CryptoAsset: React.FC<CryptoAssetProps> = ({
  asset,
  isDark
}) => {
  const {
    name,
    symbol,
    amount,
    value,
    change
  } = asset;
  const isPositive = change > 0;
  const cardClass = isDark ? 'bg-gray-800/50 border-gray-700/30 backdrop-blur-lg' : 'bg-white border-gray-200 shadow-sm';
  const textClass = isDark ? 'text-white' : 'text-gray-900';
  const secondaryTextClass = isDark ? 'text-gray-300' : 'text-gray-600';
  // Determine icon background color based on cryptocurrency
  const getBgColor = (symbol: string) => {
    switch (symbol.toLowerCase()) {
      case 'btc':
        return 'bg-orange-500/20';
      case 'eth':
        return 'bg-blue-500/20';
      case 'sol':
        return 'bg-purple-500/20';
      default:
        return 'bg-gray-500/20';
    }
  };
  // Determine icon text color based on cryptocurrency
  const getTextColor = (symbol: string) => {
    switch (symbol.toLowerCase()) {
      case 'btc':
        return 'text-orange-500';
      case 'eth':
        return 'text-blue-500';
      case 'sol':
        return 'text-purple-500';
      default:
        return 'text-gray-500';
    }
  };
  // Get crypto icon symbol
  const getSymbolIcon = (symbol: string) => {
    switch (symbol.toLowerCase()) {
      case 'btc':
        return '₿';
      case 'eth':
        return 'Ξ';
      case 'sol':
        return 'S';
      default:
        return symbol.charAt(0);
    }
  };
  return <div className={`p-4 rounded-xl border flex items-center justify-between ${cardClass}`}>
      <div className="flex items-center">
        <div className={`w-10 h-10 rounded-full ${getBgColor(symbol)} flex items-center justify-center mr-3`}>
          <span className={`${getTextColor(symbol)} font-bold`}>
            {getSymbolIcon(symbol)}
          </span>
        </div>
        <div>
          <h4 className={`font-medium ${textClass}`}>{name}</h4>
          <div className="flex items-center">
            <span className={`text-sm ${secondaryTextClass}`}>
              {amount} {symbol}
            </span>
          </div>
        </div>
      </div>
      <div className="text-right">
        <div className={`font-medium ${textClass}`}>
          ${value.toLocaleString()}
        </div>
        <div className={`flex items-center justify-end text-xs ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
          {isPositive ? <TrendingUpIcon size={12} className="mr-1" /> : <TrendingDownIcon size={12} className="mr-1" />}
          {isPositive ? '+' : ''}
          {change}%
        </div>
      </div>
    </div>;
};