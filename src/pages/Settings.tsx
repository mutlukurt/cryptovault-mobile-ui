import React from 'react';
import { ArrowLeftIcon, ShieldIcon, KeyIcon, BellIcon, MoonIcon, GlobeIcon, HelpCircleIcon, LogOutIcon, ChevronRightIcon, FingerprintIcon, UserIcon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
export const Settings: React.FC = () => {
  const {
    theme,
    toggleTheme
  } = useTheme();
  const isDark = theme === 'dark';
  const bgClass = isDark ? 'bg-gray-900' : 'bg-gray-50';
  const textClass = isDark ? 'text-white' : 'text-gray-900';
  const secondaryTextClass = isDark ? 'text-gray-300' : 'text-gray-600';
  const cardClass = isDark ? 'bg-gray-800/50 border-gray-700/30 backdrop-blur-lg' : 'bg-white border-gray-200 shadow-sm';
  // Setting section items
  const securityItems = [{
    icon: FingerprintIcon,
    title: 'Biometric Authentication',
    hasToggle: true,
    enabled: true
  }, {
    icon: KeyIcon,
    title: 'Backup Seed Phrase',
    description: 'Last backed up: 2 weeks ago'
  }, {
    icon: ShieldIcon,
    title: 'Security Lock',
    description: 'After 1 minute'
  }];
  const preferenceItems = [{
    icon: MoonIcon,
    title: 'Dark Mode',
    hasToggle: true,
    enabled: isDark,
    onToggle: toggleTheme
  }, {
    icon: BellIcon,
    title: 'Notifications',
    description: 'Transaction alerts, Price alerts'
  }, {
    icon: GlobeIcon,
    title: 'Currency',
    description: 'USD'
  }];
  const otherItems = [{
    icon: HelpCircleIcon,
    title: 'Help & Support'
  }, {
    icon: UserIcon,
    title: 'About Us'
  }, {
    icon: LogOutIcon,
    title: 'Log Out',
    danger: true
  }];
  // Render a settings section
  const renderSection = (title: string, items: any[]) => <div className="mb-8">
      <h3 className={`px-6 mb-2 text-sm font-medium ${secondaryTextClass}`}>
        {title}
      </h3>
      <div className={`rounded-xl border mx-6 overflow-hidden ${cardClass}`}>
        {items.map((item, index) => {
        const isLast = index === items.length - 1;
        return <div key={item.title} className={`flex items-center justify-between p-4 ${!isLast ? `border-b ${isDark ? 'border-gray-700' : 'border-gray-200'}` : ''}`}>
              <div className="flex items-center">
                <div className={`w-10 h-10 rounded-full ${isDark ? 'bg-gray-700' : 'bg-gray-100'} flex items-center justify-center mr-3`}>
                  <item.icon size={20} className={item.danger ? 'text-red-500' : 'text-purple-500'} />
                </div>
                <div>
                  <h4 className={`font-medium ${item.danger ? 'text-red-500' : textClass}`}>
                    {item.title}
                  </h4>
                  {item.description && <span className={`text-sm ${secondaryTextClass}`}>
                      {item.description}
                    </span>}
                </div>
              </div>
              {item.hasToggle ? <button onClick={item.onToggle} className={`w-12 h-6 rounded-full flex items-center px-1 transition-colors ${item.enabled ? 'bg-purple-500 justify-end' : `${isDark ? 'bg-gray-700' : 'bg-gray-300'} justify-start`}`}>
                  <div className="w-4 h-4 rounded-full bg-white shadow-sm" />
                </button> : <ChevronRightIcon size={20} className="text-gray-400" />}
            </div>;
      })}
      </div>
    </div>;
  return <div className={`min-h-screen ${bgClass} ${textClass} pb-20`}>
      {/* Header */}
      <div className="flex items-center p-6">
        <ArrowLeftIcon size={24} className="mr-4" />
        <h1 className={`text-xl font-bold ${textClass}`}>Settings</h1>
      </div>
      {/* Profile Section */}
      <div className="flex items-center justify-between px-6 mb-8">
        <div className="flex items-center">
          <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 flex items-center justify-center mr-4">
            <span className="text-xl font-bold text-white">JD</span>
          </div>
          <div>
            <h2 className={`text-xl font-bold ${textClass}`}>John Doe</h2>
            <span className={`text-sm ${secondaryTextClass}`}>
              john.doe@example.com
            </span>
          </div>
        </div>
        <button className="w-10 h-10 rounded-full border border-gray-700/30 flex items-center justify-center">
          <div size={18} className="text-purple-500" />
        </button>
      </div>
      {/* Settings Sections */}
      {renderSection('Security', securityItems)}
      {renderSection('Preferences', preferenceItems)}
      {renderSection('Other', otherItems)}
      {/* App Version */}
      <div className="px-6 text-center">
        <span className="text-sm text-gray-500">CryptoVault v1.0.0</span>
      </div>
    </div>;
};