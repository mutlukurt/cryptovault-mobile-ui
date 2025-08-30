import React, { useState } from 'react';
import { Welcome } from './pages/Welcome';
import { Dashboard } from './pages/Dashboard';
import { SendReceive } from './pages/SendReceive';
import { Transactions } from './pages/Transactions';
import { Settings } from './pages/Settings';
import { Navigation } from './components/Navigation';
import { ThemeProvider } from './context/ThemeContext';
export function App() {
  const [currentScreen, setCurrentScreen] = useState('welcome');
  // Only show navigation after welcome screen
  const showNavigation = currentScreen !== 'welcome';
  const renderScreen = () => {
    switch (currentScreen) {
      case 'welcome':
        return <Welcome onComplete={() => setCurrentScreen('dashboard')} />;
      case 'dashboard':
        return <Dashboard />;
      case 'send-receive':
        return <SendReceive />;
      case 'transactions':
        return <Transactions />;
      case 'settings':
        return <Settings />;
      default:
        return <Dashboard />;
    }
  };
  return <ThemeProvider>
      <div className="w-full h-full min-h-screen bg-gradient-to-b from-gray-900 to-black text-white overflow-hidden">
        <div className="max-w-md mx-auto h-full relative pb-16">
          {renderScreen()}
          {showNavigation && <Navigation currentScreen={currentScreen} setCurrentScreen={setCurrentScreen} />}
        </div>
      </div>
    </ThemeProvider>;
}