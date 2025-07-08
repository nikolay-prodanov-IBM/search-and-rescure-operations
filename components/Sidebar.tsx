
import React from 'react';
import { NAV_ITEMS } from '../constants';
import { RocketLaunchIcon } from './ui/Icons';

/**
 * Props for the Sidebar component.
 * @param activeView - The key of the currently active view.
 * @param setActiveView - Function to update the active view.
 */
interface SidebarProps {
  activeView: string;
  setActiveView: (view: string) => void;
}

/**
 * The main navigation sidebar for the application.
 */
const Sidebar: React.FC<SidebarProps> = ({ activeView, setActiveView }) => {
  return (
    <div className="w-64 bg-secondary flex flex-col">
      {/* Sidebar Header/Logo */}
      <div className="flex items-center justify-center h-20 border-b border-tertiary">
        <RocketLaunchIcon className="h-8 w-8 text-highlight" />
        <h1 className="text-xl font-bold ml-2">S&R Ops</h1>
      </div>
      
      {/* Navigation Links */}
      <nav className="flex-1 px-4 py-6 space-y-2">
        {/* Map over the NAV_ITEMS constant to generate links dynamically */}
        {NAV_ITEMS.map((item) => (
          <a
            key={item.name}
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setActiveView(item.view);
            }}
            // Apply conditional styling for the active link
            className={`flex items-center px-4 py-2.5 text-sm font-medium rounded-lg transition-colors duration-200 ${
              activeView === item.view
                ? 'bg-highlight text-primary' // Active state
                : 'text-accent hover:bg-tertiary hover:text-light' // Default state
            }`}
          >
            {/* Clone the icon element to pass a specific className */}
            {React.cloneElement(item.icon, { className: 'h-5 w-5 mr-3' })}
            {item.name}
          </a>
        ))}
      </nav>
      
      {/* Sidebar Footer */}
      <div className="px-4 py-4 border-t border-tertiary">
        <p className="text-xs text-accent text-center">Version 1.0.0</p>
      </div>
    </div>
  );
};

export default Sidebar;