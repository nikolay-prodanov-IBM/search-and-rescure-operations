
import React from 'react';

/**
 * Props for the Card component.
 * @param children - The content to be rendered inside the card.
 * @param className - Optional additional CSS classes for custom styling.
 * @param title - An optional title to be displayed in the card's header.
 */
interface CardProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
}

/**
 * A reusable container component with a consistent style for displaying content blocks.
 */
const Card: React.FC<CardProps> = ({ children, className = '', title }) => {
  return (
    <div className={`bg-secondary rounded-lg shadow-lg ${className}`}>
      {/* Conditionally render the header if a title is provided */}
      {title && (
        <div className="px-4 py-3 sm:px-6 border-b border-tertiary">
          <h3 className="text-lg font-semibold leading-6 text-light">{title}</h3>
        </div>
      )}
      {/* The main content area of the card */}
      <div className="p-4 sm:p-6">
        {children}
      </div>
    </div>
  );
};

export default Card;