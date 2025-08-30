import React from 'react';
import { ArrowUpRightIcon, ArrowDownLeftIcon, CheckCircleIcon, ClockIcon } from 'lucide-react';
interface Transaction {
  id: string;
  type: 'sent' | 'received';
  amount: number;
  symbol: string;
  value: number;
  time: string;
  status: 'pending' | 'completed' | 'failed';
}
interface TransactionItemProps {
  transaction: Transaction;
  isDark: boolean;
}
export const TransactionItem: React.FC<TransactionItemProps> = ({
  transaction,
  isDark
}) => {
  const {
    type,
    amount,
    symbol,
    value,
    time,
    status
  } = transaction;
  const isSent = type === 'sent';
  const cardClass = isDark ? 'bg-gray-800/50 border-gray-700/30 backdrop-blur-lg' : 'bg-white border-gray-200 shadow-sm';
  const textClass = isDark ? 'text-white' : 'text-gray-900';
  const secondaryTextClass = isDark ? 'text-gray-300' : 'text-gray-600';
  return <div className={`p-4 rounded-xl border flex items-center justify-between ${cardClass}`}>
      <div className="flex items-center">
        <div className={`w-10 h-10 rounded-full ${isSent ? 'bg-red-500/10' : 'bg-green-500/10'} flex items-center justify-center mr-3`}>
          {isSent ? <ArrowUpRightIcon size={18} className="text-red-500" /> : <ArrowDownLeftIcon size={18} className="text-green-500" />}
        </div>
        <div>
          <h4 className={`font-medium ${textClass}`}>
            {isSent ? 'Sent' : 'Received'} {symbol}
          </h4>
          <div className="flex items-center">
            <span className={`text-sm ${secondaryTextClass} mr-2`}>{time}</span>
            {status === 'completed' ? <CheckCircleIcon size={12} className="text-green-500" /> : <ClockIcon size={12} className="text-yellow-500" />}
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
};