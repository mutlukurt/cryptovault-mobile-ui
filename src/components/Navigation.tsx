import React, { Component } from 'react';
import { HomeIcon, SendIcon, HistoryIcon, SettingsIcon } from 'lucide-react';
interface NavigationProps {
  currentScreen: string;
  setCurrentScreen: (screen: string) => void;
}
export const Navigation: React.FC<NavigationProps> = ({
  currentScreen,
  setCurrentScreen
}) => {
  const navItems = [{
    id: 'dashboard',
    icon: HomeIcon,
    label: 'Home'
  }, {
    id: 'send-receive',
    icon: SendIcon,
    label: 'Send/Receive'
  }, {
    id: 'transactions',
    icon: HistoryIcon,
    label: 'History'
  }, {
    id: 'settings',
    icon: SettingsIcon,
    label: 'Settings'
  }];
  return <div className="fixed bottom-0 left-0 right-0 max-w-md mx-auto">
      <div className="bg-gray-900/80 backdrop-blur-lg border-t border-purple-500/20 rounded-t-xl">
        <div className="flex justify-around items-center py-3 px-2">
          {navItems.map(item => {
          const isActive = currentScreen === item.id;
          const IconComponent = item.icon;
          return <button key={item.id} onClick={() => setCurrentScreen(item.id)} className={`flex flex-col items-center justify-center w-16 py-1 rounded-lg transition-all ${isActive ? 'text-purple-400 bg-white/5' : 'text-gray-400 hover:text-purple-300'}`}>
                <IconComponent size={20} className={isActive ? 'animate-pulse' : ''} />
                <span className="text-xs mt-1">{item.label}</span>
              </button>;
        })}
        </div>
      </div>
    </div>;
};