
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Find the root DOM element where the React app will be mounted.
const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

// Create a React root for the application.
const root = ReactDOM.createRoot(rootElement);

// Render the main App component into the root element.
// React.StrictMode is used to highlight potential problems in the app.
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);