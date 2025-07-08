
import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './components/pages/Dashboard';
import LiveMissionView from './components/pages/LiveMissionView';
import FleetManagement from './components/pages/FleetManagement';
import MissionPlanner from './components/pages/MissionPlanner';
import AlertLog from './components/pages/AlertLog';
import Analytics from './components/pages/Analytics';
import Settings from './components/pages/Settings';
import UserManagement from './components/pages/UserManagement';
import Help from './components/pages/Help';
import About from './components/pages/About';
import { NAV_ITEMS } from './constants';

/**
 * The root component of the application.
 * It manages the main layout and the currently active view (page).
 */
const App: React.FC = () => {
  // State to track the current view, defaults to 'Dashboard'.
  const [activeView, setActiveView] = useState('Dashboard');

  // A simple router-like function to render the component based on the activeView state.
  const renderContent = () => {
    switch (activeView) {
      case 'Dashboard':
        return <Dashboard />;
      case 'LiveMissionView':
        return <LiveMissionView />;
      case 'FleetManagement':
        return <FleetManagement />;
      case 'MissionPlanner':
        return <MissionPlanner />;
      case 'AlertLog':
        return <AlertLog />;
      case 'Analytics':
        return <Analytics />;
      case 'Settings':
        return <Settings />;
      case 'UserManagement':
        return <UserManagement />;
      case 'Help':
        return <Help />;
      case 'About':
        return <About />;
      default:
        return <Dashboard />;
    }
  };

  // Find the current navigation item to get the page title.
  const activeNavItem = NAV_ITEMS.find(item => item.view === activeView);
  const pageTitle = activeNavItem ? activeNavItem.name : 'Dashboard';

  return (
    // Main layout container using Flexbox.
    <div className="flex h-screen bg-primary text-light">
      {/* Sidebar for navigation */}
      <Sidebar activeView={activeView} setActiveView={setActiveView} />
      
      {/* Main content area */}
      <main className="flex-1 flex flex-col overflow-hidden">
        <Header title={pageTitle} />
        {/* The content body, which is scrollable */}
        <div className="flex-1 p-6 lg:p-8 overflow-y-auto">
          {renderContent()}
        </div>
      </main>
    </div>
  );
};

export default App;