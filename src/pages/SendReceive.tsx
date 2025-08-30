import React, { useState } from 'react';
import { ArrowLeftIcon, ScanIcon, InfoIcon, CopyIcon, CheckIcon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
export const SendReceive: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'send' | 'receive'>('send');
  const [copied, setCopied] = useState(false);
  const {
    theme
  } = useTheme();
  const isDark = theme === 'dark';
  const bgClass = isDark ? 'bg-gray-900' : 'bg-gray-50';
  const textClass = isDark ? 'text-white' : 'text-gray-900';
  const secondaryTextClass = isDark ? 'text-gray-300' : 'text-gray-600';
  const cardClass = isDark ? 'bg-gray-800/50 border-gray-700/30 backdrop-blur-lg' : 'bg-white border-gray-200 shadow-sm';
  const inputClass = isDark ? 'bg-gray-800 border-gray-700 text-white' : 'bg-white border-gray-200 text-gray-900';
  const handleCopy = () => {
    // Mock copy functionality
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return <div className={`min-h-screen ${bgClass} ${textClass} pb-20`}>
      {/* Header */}
      <div className="flex items-center p-6">
        <ArrowLeftIcon size={24} className="mr-4" />
        <h1 className={`text-xl font-bold ${textClass}`}>Send & Receive</h1>
      </div>
      {/* Tab Navigation */}
      <div className={`mx-6 p-1 rounded-xl ${isDark ? 'bg-gray-800' : 'bg-gray-200'} flex mb-6`}>
        <button onClick={() => setActiveTab('send')} className={`flex-1 py-3 rounded-lg text-center transition-all ${activeTab === 'send' ? 'bg-gradient-to-r from-purple-600 to-blue-500 text-white shadow-lg' : secondaryTextClass}`}>
          Send
        </button>
        <button onClick={() => setActiveTab('receive')} className={`flex-1 py-3 rounded-lg text-center transition-all ${activeTab === 'receive' ? 'bg-gradient-to-r from-purple-600 to-blue-500 text-white shadow-lg' : secondaryTextClass}`}>
          Receive
        </button>
      </div>
      {activeTab === 'send' ? <div className="px-6">
          <div className={`p-5 rounded-2xl border mb-6 ${cardClass}`}>
            <label className={`block mb-2 text-sm ${secondaryTextClass}`}>
              Asset
            </label>
            <select className={`w-full p-4 rounded-xl border ${inputClass} mb-4`}>
              <option>Bitcoin (BTC)</option>
              <option>Ethereum (ETH)</option>
              <option>Solana (SOL)</option>
            </select>
            <label className={`block mb-2 text-sm ${secondaryTextClass}`}>
              Recipient Address
            </label>
            <div className="relative mb-4">
              <input type="text" placeholder="Enter or paste address" className={`w-full p-4 pr-12 rounded-xl border ${inputClass}`} />
              <button className="absolute right-4 top-1/2 transform -translate-y-1/2">
                <ScanIcon size={20} className="text-purple-500" />
              </button>
            </div>
            <label className={`block mb-2 text-sm ${secondaryTextClass}`}>
              Amount
            </label>
            <div className="relative mb-1">
              <input type="text" placeholder="0.00" className={`w-full p-4 rounded-xl border ${inputClass}`} />
              <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                BTC
              </span>
            </div>
            <div className="text-right text-sm text-gray-400 mb-4">≈ $0.00</div>
            <div className="flex items-center justify-between text-sm mb-4">
              <span className={secondaryTextClass}>Network Fee</span>
              <span className={textClass}>0.0005 BTC</span>
            </div>
            <div className="flex items-center justify-between text-sm mb-6">
              <span className={secondaryTextClass}>Total Amount</span>
              <span className={textClass}>0.0000 BTC</span>
            </div>
            <button className="w-full py-4 bg-gradient-to-r from-purple-600 to-blue-500 rounded-xl text-white font-medium opacity-50" disabled>
              Continue
            </button>
          </div>
          <div className="flex items-center justify-center text-sm">
            <InfoIcon size={14} className="text-gray-400 mr-2" />
            <span className="text-gray-400">
              Transaction may take 10-30 minutes to complete
            </span>
          </div>
        </div> : <div className="px-6">
          <div className={`p-5 rounded-2xl border mb-6 ${cardClass} flex flex-col items-center`}>
            <select className={`w-full p-4 rounded-xl border ${inputClass} mb-6`}>
              <option>Bitcoin (BTC)</option>
              <option>Ethereum (ETH)</option>
              <option>Solana (SOL)</option>
            </select>
            <div className={`w-56 h-56 ${isDark ? 'bg-white' : 'bg-gray-900'} p-2 rounded-2xl mb-6`}>
              {/* This is a placeholder for a QR code - in a real app, use a QR code library */}
              <div className="w-full h-full bg-white flex items-center justify-center">
                <svg viewBox="0 0 100 100" width="100%" height="100%">
                  <rect x="10" y="10" width="30" height="30" fill="black" />
                  <rect x="60" y="10" width="30" height="30" fill="black" />
                  <rect x="10" y="60" width="30" height="30" fill="black" />
                  <rect x="25" y="25" width="50" height="50" fill="black" />
                  <rect x="30" y="30" width="40" height="40" fill="white" />
                  <rect x="40" y="40" width="20" height="20" fill="black" />
                </svg>
              </div>
            </div>
            <div className="w-full mb-6">
              <label className={`block mb-2 text-sm text-center ${secondaryTextClass}`}>
                Your Bitcoin Address
              </label>
              <div className="relative">
                <input type="text" value="bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh" readOnly className={`w-full p-4 pr-12 rounded-xl border text-center ${inputClass}`} />
                <button onClick={handleCopy} className="absolute right-4 top-1/2 transform -translate-y-1/2">
                  {copied ? <CheckIcon size={20} className="text-green-500" /> : <CopyIcon size={20} className="text-purple-500" />}
                </button>
              </div>
            </div>
            <button className="w-full py-4 bg-gradient-to-r from-purple-600 to-blue-500 rounded-xl text-white font-medium">
              Share Address
            </button>
          </div>
          <div className="flex items-center justify-center text-sm">
            <InfoIcon size={14} className="text-gray-400 mr-2" />
            <span className="text-gray-400">
              Only send Bitcoin (BTC) to this address
            </span>
          </div>
        </div>}
    </div>;
};