
# Test Cases for Search and Rescue Operations App

This document outlines test cases for the main components of the S&R Ops application. These tests are written for a **Jest** + **React Testing Library** environment.

---

## 1. Testing Setup

Before running these tests, you'll need to set up your testing environment.

### Dependencies

Install the necessary development dependencies:

```bash
npm install --save-dev jest jest-environment-jsdom @testing-library/react @testing-library/jest-dom @testing-library/user-event babel-jest @babel/preset-env @babel/preset-react @babel/preset-typescript
```

### Jest Configuration (`jest.config.js`)

You will need to create a `jest.config.js` file in your project root to handle ES Modules, `importmap` paths, and static assets.

```javascript
module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'], // Optional: for extending jest-dom
  moduleNameMapper: {
    // Mock React 19 imports from esm.sh
    '^react$': 'react',
    '^react-dom/client$': 'react-dom/client',

    // Handle component paths
    '^\\./components/(.*)$': '<rootDir>/components/$1',
    '^\\./constants$': '<rootDir>/constants.tsx',
    '^\\./types$': '<rootDir>/types.ts',
  },
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
  },
};
```

### Babel Configuration (`.babelrc`)

```json
{
  "presets": [
    "@babel/preset-env",
    ["@babel/preset-react", { "runtime": "automatic" }],
    "@babel/preset-typescript"
  ]
}
```

---

## 2. Component Test Cases

Here are the test files for the key components.

### `App.test.tsx`

Tests the main app component for routing and rendering logic.

```typescript
import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('App Component', () => {
  test('renders Dashboard view by default', () => {
    render(<App />);
    
    // Check if the header title for the dashboard is present
    expect(screen.getByRole('heading', { name: /dashboard/i })).toBeInTheDocument();
    
    // Check for a piece of content unique to the Dashboard
    expect(screen.getByRole('heading', { name: /active missions/i })).toBeInTheDocument();
  });

  test('navigates to a different view when a sidebar link is clicked', async () => {
    const user = userEvent.setup();
    render(<App />);

    // Find and click the "Fleet Management" link in the navigation
    const fleetLink = screen.getByRole('link', { name: /fleet management/i });
    await user.click(fleetLink);

    // After clicking, the header title should update
    expect(screen.getByRole('heading', { name: /fleet management/i })).toBeInTheDocument();

    // The Dashboard content should be gone
    expect(screen.queryByRole('heading', { name: /active missions/i })).not.toBeInTheDocument();

    // Content from Fleet Management should be present (e.g., a drone card)
    expect(screen.getByText(/Alpha-1/i)).toBeInTheDocument();
  });
});
```

### `Dashboard.test.tsx`

Tests the main dashboard for correct data display.

```typescript
import React from 'react';
import { render, screen } from '@testing-library/react';
import Dashboard from './components/pages/Dashboard';
import { MOCK_MISSIONS, MOCK_DRONES, MOCK_ALERTS } from './constants';

describe('Dashboard Component', () => {
  beforeEach(() => {
    render(<Dashboard />);
  });

  test('displays the correct number of active missions', () => {
    const activeMissionsCount = MOCK_MISSIONS.filter(m => m.status === 'Active').length;
    const stat = screen.getByText(/active missions/i).closest('div');
    expect(stat).toHaveTextContent(activeMissionsCount.toString());
  });

  test('displays the correct number of drones in flight', () => {
    const activeDronesCount = MOCK_DRONES.filter(d => d.status === 'In Mission').length;
    const stat = screen.getByText(/drones in flight/i).closest('div');
    expect(stat).toHaveTextContent(activeDronesCount.toString());
  });

  test('renders a list of active missions', () => {
    const activeMission = MOCK_MISSIONS.find(m => m.status === 'Active');
    expect(screen.getByText(activeMission.name)).toBeInTheDocument();
  });

  test('renders a list of recent alerts', () => {
    const firstAlert = MOCK_ALERTS[0];
    // Check that the alert type is displayed
    expect(screen.getByText(firstAlert.type)).toBeInTheDocument();
    // Check that the image for the alert is rendered
    const alertImage = screen.getByAltText('alert');
    expect(alertImage).toHaveAttribute('src', firstAlert.imageUrl);
  });
});
```

### `AlertLog.test.tsx`

Tests user interaction within the alert log.

```typescript
import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import AlertLog from './components/pages/AlertLog';
import { MOCK_ALERTS } from './constants';

describe('AlertLog Component', () => {
  test('renders all alerts from mock data', () => {
    render(<AlertLog />);
    const rows = screen.getAllByRole('row');
    // Number of rows should be mock data length + 1 (for the header row)
    expect(rows).toHaveLength(MOCK_ALERTS.length + 1);
  });

  test('allows user to confirm an unconfirmed alert', async () => {
    const user = userEvent.setup();
    render(<AlertLog />);
    
    // Find the first row with action buttons
    const unconfirmedAlertRow = screen.getByText(MOCK_ALERTS[0].type).closest('tr');
    
    // Get the "Confirm" button within that row
    const confirmButton = screen.getByRole('button', { name: /confirm/i });
    await user.click(confirmButton);
    
    // The "Confirm" and "Reject" buttons should disappear
    expect(screen.queryByRole('button', { name: /confirm/i })).not.toBeInTheDocument();
    expect(screen.queryByRole('button', { name: /reject/i })).not.toBeInTheDocument();
    
    // The status text "Confirmed" should appear in its place
    expect(unconfirmedAlertRow).toHaveTextContent('Confirmed');
  });

    test('allows user to reject an unconfirmed alert', async () => {
    const user = userEvent.setup();
    render(<AlertLog />);
    
    const unconfirmedAlertRow = screen.getByText(MOCK_ALERTS[0].type).closest('tr');
    
    const rejectButton = screen.getByRole('button', { name: /reject/i });
    await user.click(rejectButton);
    
    expect(screen.queryByRole('button', { name: /confirm/i })).not.toBeInTheDocument();
    
    // The status text "Rejected" should appear
    expect(unconfirmedAlertRow).toHaveTextContent('Rejected');
  });
});
```

### `Sidebar.test.tsx`

Tests the navigation sidebar.

```typescript
import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Sidebar from './components/Sidebar';
import { NAV_ITEMS } from './constants';

describe('Sidebar Component', () => {
  test('renders all navigation items', () => {
    render(<Sidebar activeView="Dashboard" setActiveView={() => {}} />);
    NAV_ITEMS.forEach(item => {
      expect(screen.getByText(item.name)).toBeInTheDocument();
    });
  });

  test('calls setActiveView with the correct view when an item is clicked', async () => {
    const user = userEvent.setup();
    const setActiveViewMock = jest.fn();
    render(<Sidebar activeView="Dashboard" setActiveView={setActiveViewMock} />);

    const settingsLink = screen.getByRole('link', { name: /settings/i });
    await user.click(settingsLink);

    expect(setActiveViewMock).toHaveBeenCalledTimes(1);
    expect(setActiveViewMock).toHaveBeenCalledWith('Settings');
  });

  test('applies active styles to the currently active view', () => {
    render(<Sidebar activeView="Analytics" setActiveView={() => {}} />);
    const activeLink = screen.getByText('Telemetry & Analytics');
    
    // Check for the active classes
    expect(activeLink).toHaveClass('bg-highlight text-primary');
  });
});

```
