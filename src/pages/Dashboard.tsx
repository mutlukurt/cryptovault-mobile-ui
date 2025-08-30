import React, { useState } from 'react';
import { EyeIcon, EyeOffIcon, TrendingUpIcon, TrendingDownIcon, PlusIcon, WalletIcon, BellIcon } from 'lucide-react';
import { PriceChart } from '../components/PriceChart';
import { CryptoAsset } from '../components/CryptoAsset';
import { TransactionItem } from '../components/TransactionItem';
import { useTheme } from '../context/ThemeContext';
export const Dashboard: React.FC = () => {
  const [hideBalance, setHideBalance] = useState(false);
  const {
    theme
  } = useTheme();
  // Mock data
  const totalBalance = 24563.42;
  const percentChange = 3.7;
  const isPositive = percentChange > 0;
  const mockAssets = [{
    id: 'btc',
    name: 'Bitcoin',
    symbol: 'BTC',
    amount: 0.45,
    value: 14325.12,
    change: 2.4
  }, {
    id: 'eth',
    name: 'Ethereum',
    symbol: 'ETH',
    amount: 3.21,
    value: 6721.83,
    change: -1.2
  }, {
    id: 'sol',
    name: 'Solana',
    symbol: 'SOL',
    amount: 42.5,
    value: 3516.47,
    change: 8.7
  }];
  const mockTransactions = [{
    id: '1',
    type: 'received',
    amount: 0.05,
    symbol: 'BTC',
    value: 1750.23,
    time: '2 hours ago',
    status: 'completed'
  }, {
    id: '2',
    type: 'sent',
    amount: 0.8,
    symbol: 'ETH',
    value: 1432.67,
    time: '5 hours ago',
    status: 'completed'
  }, {
    id: '3',
    type: 'received',
    amount: 12.4,
    symbol: 'SOL',
    value: 1024.12,
    time: 'Yesterday',
    status: 'completed'
  }];
  const isDark = theme === 'dark';
  const bgClass = isDark ? 'bg-gray-900' : 'bg-gray-50';
  const textClass = isDark ? 'text-white' : 'text-gray-900';
  const secondaryTextClass = isDark ? 'text-gray-300' : 'text-gray-600';
  const cardClass = isDark ? 'bg-gray-800/50 border-gray-700/30 backdrop-blur-lg' : 'bg-white border-gray-200 shadow-sm';
  return <div className={`min-h-screen ${bgClass} ${textClass} pb-20`}>
      {/* Header */}
      <div className="flex justify-between items-center p-6">
        <div className="flex items-center">
          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 flex items-center justify-center">
            <WalletIcon size={20} className="text-white" />
          </div>
          <h1 className={`ml-3 text-xl font-bold ${textClass}`}>CryptoVault</h1>
        </div>
        <button className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-800/50 border border-gray-700/30">
          <BellIcon size={20} className="text-gray-300" />
        </button>
      </div>
      {/* Balance Card */}
      <div className={`mx-6 p-6 rounded-2xl border ${cardClass}`}>
        <div className="flex justify-between items-center mb-2">
          <span className={`text-sm ${secondaryTextClass}`}>Total Balance</span>
          <button onClick={() => setHideBalance(!hideBalance)}>
            {hideBalance ? <EyeOffIcon size={20} className="text-gray-400" /> : <EyeIcon size={20} className="text-gray-400" />}
          </button>
        </div>
        <div className="flex items-end gap-3 mb-4">
          <h2 className="text-3xl font-bold">
            {hideBalance ? '••••••' : `$${totalBalance.toLocaleString()}`}
          </h2>
          <div className={`flex items-center px-2 py-1 rounded-lg ${isPositive ? 'bg-green-500/10 text-green-500' : 'bg-red-500/10 text-red-500'}`}>
            {isPositive ? <TrendingUpIcon size={14} className="mr-1" /> : <TrendingDownIcon size={14} className="mr-1" />}
            <span className="text-xs font-medium">
              {isPositive ? '+' : ''}
              {percentChange}%
            </span>
          </div>
        </div>
        <div className="flex gap-3">
          <button className="flex-1 py-3 bg-gradient-to-r from-purple-600 to-blue-500 rounded-xl text-white font-medium">
            Send
          </button>
          <button className="flex-1 py-3 border border-gray-700 rounded-xl font-medium">
            Receive
          </button>
        </div>
      </div>
      {/* Chart */}
      <div className="mt-6 px-6">
        <PriceChart isDark={isDark} />
      </div>
      {/* Assets */}
      <div className="mt-6 px-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className={`font-bold text-lg ${textClass}`}>My Assets</h3>
          <button className="text-sm text-purple-400">See All</button>
        </div>
        <div className="space-y-3">
          {mockAssets.map(asset => <CryptoAsset key={asset.id} asset={asset} isDark={isDark} />)}
        </div>
        <button className={`mt-4 w-full py-3 border border-dashed rounded-xl flex items-center justify-center ${isDark ? 'border-gray-700 text-gray-400' : 'border-gray-300 text-gray-500'}`}>
          <PlusIcon size={18} className="mr-2" />
          Add New Asset
        </button>
      </div>
      {/* Recent Transactions */}
      <div className="mt-8 px-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className={`font-bold text-lg ${textClass}`}>
            Recent Transactions
          </h3>
          <button className="text-sm text-purple-400">See All</button>
        </div>
        <div className="space-y-3">
          {mockTransactions.map(tx => <TransactionItem key={tx.id} transaction={tx} isDark={isDark} />)}
        </div>
      </div>
    </div>;
};