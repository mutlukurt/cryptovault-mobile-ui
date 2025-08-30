import React, { useState } from 'react';
import { ArrowLeftIcon, SearchIcon, FilterIcon, ArrowUpRightIcon, ArrowDownLeftIcon, CheckCircleIcon, ClockIcon, XCircleIcon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
export const Transactions: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'sent' | 'received'>('all');
  const {
    theme
  } = useTheme();
  const isDark = theme === 'dark';
  const bgClass = isDark ? 'bg-gray-900' : 'bg-gray-50';
  const textClass = isDark ? 'text-white' : 'text-gray-900';
  const secondaryTextClass = isDark ? 'text-gray-300' : 'text-gray-600';
  const cardClass = isDark ? 'bg-gray-800/50 border-gray-700/30 backdrop-blur-lg' : 'bg-white border-gray-200 shadow-sm';
  const inputClass = isDark ? 'bg-gray-800 border-gray-700 text-white' : 'bg-white border-gray-200 text-gray-900';
  // Mock transaction data
  const transactions = [{
    id: '1',
    type: 'received',
    amount: 0.05,
    symbol: 'BTC',
    value: 1750.23,
    time: '2 hours ago',
    date: 'Today',
    status: 'completed'
  }, {
    id: '2',
    type: 'sent',
    amount: 0.8,
    symbol: 'ETH',
    value: 1432.67,
    time: '5 hours ago',
    date: 'Today',
    status: 'completed'
  }, {
    id: '3',
    type: 'received',
    amount: 12.4,
    symbol: 'SOL',
    value: 1024.12,
    time: 'Yesterday',
    date: 'Yesterday',
    status: 'completed'
  }, {
    id: '4',
    type: 'sent',
    amount: 0.25,
    symbol: 'BTC',
    value: 8750.45,
    time: 'Yesterday',
    date: 'Yesterday',
    status: 'completed'
  }, {
    id: '5',
    type: 'received',
    amount: 1.2,
    symbol: 'ETH',
    value: 2145.78,
    time: '2 days ago',
    date: '2 days ago',
    status: 'completed'
  }, {
    id: '6',
    type: 'sent',
    amount: 0.01,
    symbol: 'BTC',
    value: 350.12,
    time: '3 days ago',
    date: '3 days ago',
    status: 'pending'
  }, {
    id: '7',
    type: 'sent',
    amount: 5.0,
    symbol: 'SOL',
    value: 412.5,
    time: '5 days ago',
    date: '5 days ago',
    status: 'failed'
  }];
  // Filter transactions based on active filter
  const filteredTransactions = transactions.filter(tx => {
    if (activeFilter === 'all') return true;
    return tx.type === activeFilter;
  });
  // Group transactions by date
  const groupedTransactions: Record<string, typeof transactions> = {};
  filteredTransactions.forEach(tx => {
    if (!groupedTransactions[tx.date]) {
      groupedTransactions[tx.date] = [];
    }
    groupedTransactions[tx.date].push(tx);
  });
  return <div className={`min-h-screen ${bgClass} ${textClass} pb-20`}>
      {/* Header */}
      <div className="flex items-center p-6">
        <ArrowLeftIcon size={24} className="mr-4" />
        <h1 className={`text-xl font-bold ${textClass}`}>
          Transaction History
        </h1>
      </div>
      {/* Search and Filter */}
      <div className="px-6 mb-6">
        <div className="relative mb-4">
          <input type="text" placeholder="Search transactions" className={`w-full p-4 pl-12 rounded-xl border ${inputClass}`} />
          <SearchIcon size={20} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>
        <div className="flex gap-2">
          <button onClick={() => setActiveFilter('all')} className={`px-4 py-2 rounded-lg text-sm ${activeFilter === 'all' ? 'bg-gradient-to-r from-purple-600 to-blue-500 text-white' : `${isDark ? 'bg-gray-800 text-gray-300' : 'bg-gray-200 text-gray-600'}`}`}>
            All
          </button>
          <button onClick={() => setActiveFilter('sent')} className={`px-4 py-2 rounded-lg text-sm ${activeFilter === 'sent' ? 'bg-gradient-to-r from-purple-600 to-blue-500 text-white' : `${isDark ? 'bg-gray-800 text-gray-300' : 'bg-gray-200 text-gray-600'}`}`}>
            Sent
          </button>
          <button onClick={() => setActiveFilter('received')} className={`px-4 py-2 rounded-lg text-sm ${activeFilter === 'received' ? 'bg-gradient-to-r from-purple-600 to-blue-500 text-white' : `${isDark ? 'bg-gray-800 text-gray-300' : 'bg-gray-200 text-gray-600'}`}`}>
            Received
          </button>
          <button className={`ml-auto p-2 rounded-lg ${isDark ? 'bg-gray-800' : 'bg-gray-200'}`}>
            <FilterIcon size={20} className={secondaryTextClass} />
          </button>
        </div>
      </div>
      {/* Transactions List */}
      <div className="px-6">
        {Object.keys(groupedTransactions).map(date => <div key={date} className="mb-6">
            <h3 className={`text-sm font-medium mb-3 ${secondaryTextClass}`}>
              {date}
            </h3>
            <div className="space-y-3">
              {groupedTransactions[date].map(tx => {
            const {
              id,
              type,
              amount,
              symbol,
              value,
              time,
              status
            } = tx;
            const isSent = type === 'sent';
            // Determine status icon
            let StatusIcon = CheckCircleIcon;
            let statusColor = 'text-green-500';
            if (status === 'pending') {
              StatusIcon = ClockIcon;
              statusColor = 'text-yellow-500';
            } else if (status === 'failed') {
              StatusIcon = XCircleIcon;
              statusColor = 'text-red-500';
            }
            return <div key={id} className={`p-4 rounded-xl border flex items-center justify-between ${cardClass}`}>
                    <div className="flex items-center">
                      <div className={`w-10 h-10 rounded-full ${isSent ? 'bg-red-500/10' : 'bg-green-500/10'} flex items-center justify-center mr-3`}>
                        {isSent ? <ArrowUpRightIcon size={18} className="text-red-500" /> : <ArrowDownLeftIcon size={18} className="text-green-500" />}
                      </div>
                      <div>
                        <h4 className={`font-medium ${textClass}`}>
                          {isSent ? 'Sent' : 'Received'} {symbol}
                        </h4>
                        <div className="flex items-center">
                          <span className={`text-sm ${secondaryTextClass} mr-2`}>
                            {time}
                          </span>
                          <StatusIcon size={12} className={statusColor} />
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className={`font-medium ${isSent ? 'text-red-500' : 'text-green-500'}`}>
                        {isSent ? '-' : '+'}
                        {amount} {symbol}
                      </div>
                      <div className={`text-sm ${secondaryTextClass}`}>
                        ${value.toLocaleString()}
                      </div>
                    </div>
                  </div>;
          })}
            </div>
          </div>)}
        {Object.keys(groupedTransactions).length === 0 && <div className="flex flex-col items-center justify-center py-12">
            <div className="w-16 h-16 rounded-full bg-gray-800/50 flex items-center justify-center mb-4">
              <SearchIcon size={24} className="text-gray-400" />
            </div>
            <h3 className={`font-medium mb-2 ${textClass}`}>
              No transactions found
            </h3>
            <p className="text-gray-400 text-center">
              Try changing your search or filter settings
            </p>
          </div>}
      </div>
    </div>;
};