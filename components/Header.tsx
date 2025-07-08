
import React from 'react';
import { BellAlertIcon } from './ui/Icons';

/**
 * Props for the Header component.
 * @param title - The title of the current page to display.
 */
interface HeaderProps {
  title: string;
}

/**
 * The main header component displayed at the top of the content area.
 */
const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <header className="flex-shrink-0 bg-secondary h-20 flex items-center justify-between px-6 lg:px-8 border-b border-tertiary">
      {/* Page Title */}
      <h1 className="text-2xl font-bold text-light">{title}</h1>
      
      {/* Right-side actions and user info */}
      <div className="flex items-center space-x-4">
        {/* Notification Bell */}
        <button className="relative p-2 rounded-full hover:bg-tertiary text-accent hover:text-light focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-secondary focus:ring-highlight">
          <BellAlertIcon className="h-6 w-6" />
          {/* Red dot indicator for new notifications */}
          <span className="absolute top-2 right-2 block h-2 w-2 rounded-full bg-danger ring-2 ring-secondary"></span>
        </button>
        
        {/* User Profile Section */}
        <div className="flex items-center space-x-3">
          <img
            className="h-10 w-10 rounded-full object-cover"
            src="https://picsum.photos/seed/user/100/100"
            alt="User profile"
          />
          <div>
            <p className="text-sm font-medium text-light">Operator</p>
            <p className="text-xs text-accent">Admin</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;