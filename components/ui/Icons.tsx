import React from 'react';

// This file contains a library of reusable SVG icon components.
// Centralizing them here makes them easy to manage and use across the application.

// Generic props interface for all icon components to allow custom styling.
interface IconProps {
  className?: string;
}

export const HomeIcon: React.FC<IconProps> = ({ className = "h-6 w-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
  </svg>
);

export const MapPinIcon: React.FC<IconProps> = ({ className = "h-6 w-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
  </svg>
);

export const RocketLaunchIcon: React.FC<IconProps> = ({ className = "h-6 w-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.63 2.25a14.98 14.98 0 0 0-12.12 6.16.03.03 0 0 0 .02.035L4.5 8.25l.75 4.5 4.5.75.035.02a14.98 14.98 0 0 0 5.794 1.83Z" />
  </svg>
);

export const BellAlertIcon: React.FC<IconProps> = ({ className = "h-6 w-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M3.124 7.5A8.969 8.969 0 0 1 5.292 3m13.416 0a8.969 8.969 0 0 1 2.168 4.5" />
  </svg>
);

export const CheckCircleIcon: React.FC<IconProps> = ({ className = "h-6 w-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
  </svg>
);

export const CommandLineIcon: React.FC<IconProps> = ({ className = "h-6 w-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0 0 21 18V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v12a2.25 2.25 0 0 0 2.25 2.25Z" />
  </svg>
);

export const ChartBarIcon: React.FC<IconProps> = ({ className = "h-6 w-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
  </svg>
);

export const Cog6ToothIcon: React.FC<IconProps> = ({ className = "h-6 w-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-1.003 1.11-1.226.554-.223 1.197-.223 1.75 0 .554.223 1.02.684 1.11 1.226l.082.498a1.5 1.5 0 0 0 1.482 1.22h.51a1.5 1.5 0 0 1 1.258 2.067l-.21.492a1.5 1.5 0 0 0 .23 1.622l.39.429c.438.482.438 1.207 0 1.69l-.39.428a1.5 1.5 0 0 0-.23 1.623l.21.492a1.5 1.5 0 0 1-1.258 2.067h-.51a1.5 1.5 0 0 0-1.482 1.22l-.082.498c-.09.542-.56 1.003-1.11 1.226-.554-.223-1.197-.223-1.75 0-.554-.223-1.02-.684-1.11-1.226l-.082-.498a1.5 1.5 0 0 0-1.482-1.22h-.51a1.5 1.5 0 0 1-1.258-2.067l.21-.492a1.5 1.5 0 0 0 .23-1.622l-.39-.429a1.69 1.69 0 0 1 0-1.69l.39-.428a1.5 1.5 0 0 0 .23-1.623l-.21-.492a1.5 1.5 0 0 1 1.258-2.067h.51a1.5 1.5 0 0 0 1.482-1.22l.082-.498Z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
  </svg>
);

export const UsersIcon: React.FC<IconProps> = ({ className = "h-6 w-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-2.253-9.527 9.527 0 0 0-4.121-2.253L15 15.128c-.071.071-.142.142-.213.213a.75.75 0 0 1-1.06-1.06c.071-.07.142-.14.213-.212L15 14.128v-1.872c.213.213.425.425.638.638a9.527 9.527 0 0 1 4.12-2.253 9.337 9.337 0 0 1 4.121 2.253c.18.18.353.36.52.535M9 19.128a9.38 9.38 0 0 1-2.625.372 9.337 9.337 0 0 1-4.121-2.253 9.527 9.527 0 0 1 4.121-2.253L9 15.128c.071.071.142.142.213.213a.75.75 0 0 0 1.06-1.06c-.071-.07-.142-.14-.213-.212L9 14.128v-1.872c-.213.213-.425.425-.638.638a9.527 9.527 0 0 0-4.12 2.253 9.337 9.337 0 0 0-4.121 2.253c-.18.18-.353.36-.52.535M9 4.875c0 1.036.84 1.875 1.875 1.875S12.75 5.91 12.75 4.875 11.91 3 10.875 3 9 3.84 9 4.875Z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 4.875c0 1.036.84 1.875 1.875 1.875s1.875-.84 1.875-1.875S17.91 3 16.875 3 15 3.84 15 4.875Z" />
  </svg>
);

export const QuestionMarkCircleIcon: React.FC<IconProps> = ({ className = "h-6 w-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
  </svg>
);

export const InformationCircleIcon: React.FC<IconProps> = ({ className = "h-6 w-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
  </svg>
);