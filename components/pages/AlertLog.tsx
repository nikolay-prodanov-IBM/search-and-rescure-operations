
import React, { useState } from 'react';
import { MOCK_ALERTS } from '../../constants';
import { Alert, AlertType } from '../../types';
import Card from '../ui/Card';

/**
 * Helper function to get Tailwind CSS classes for the alert category badge.
 * @param type - The type of the alert.
 * @returns A string of Tailwind CSS classes.
 */
const getAlertColorClasses = (type: AlertType) => {
  switch (type) {
    case AlertType.HUMAN:
      return 'bg-danger/20 text-danger';
    case AlertType.FIRE:
      return 'bg-warning/20 text-warning';
    case AlertType.ANIMAL:
      return 'bg-blue-400/20 text-blue-400';
    case AlertType.HAZARD:
    case AlertType.INFRASTRUCTURE:
      return 'bg-purple-400/20 text-purple-400';
    default:
      return 'bg-tertiary text-accent';
  }
};

/**
 * A sub-component representing a single row in the alerts table.
 */
const AlertRow: React.FC<{ alert: Alert, onConfirm: (id: string, status: boolean) => void }> = ({ alert, onConfirm }) => (
  <tr className="bg-secondary hover:bg-tertiary/50">
    <td className="px-6 py-4 whitespace-nowrap text-sm text-light">
        <div className="flex items-center">
            <div className="flex-shrink-0 h-10 w-10">
                <img className="h-10 w-10 rounded-lg object-cover" src={alert.imageUrl} alt="Detection" />
            </div>
            <div className="ml-4">
                <div className="font-medium">{alert.type}</div>
                <div className="text-xs text-accent">{alert.droneId}</div>
            </div>
        </div>
    </td>
    <td className="px-6 py-4 whitespace-nowrap text-sm text-accent">{new Date(alert.timestamp).toLocaleString()}</td>
    <td className="px-6 py-4 whitespace-nowrap text-sm text-accent">{`${alert.location.lat.toFixed(4)}, ${alert.location.lng.toFixed(4)}`}</td>
    <td className="px-6 py-4 whitespace-nowrap text-sm">
      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getAlertColorClasses(alert.type)}`}>
        {alert.type}
      </span>
    </td>
    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
      {/* Conditionally render action buttons or the confirmed status */}
      {alert.confirmed === null ? (
        <div className="flex space-x-2 justify-end">
          <button onClick={() => onConfirm(alert.id, true)} className="text-success hover:text-green-400 transition-colors">Confirm</button>
          <button onClick={() => onConfirm(alert.id, false)} className="text-danger hover:text-red-400 transition-colors">Reject</button>
        </div>
      ) : (
        <span className={alert.confirmed ? 'text-success' : 'text-danger'}>
          {alert.confirmed ? 'Confirmed' : 'Rejected'}
        </span>
      )}
    </td>
  </tr>
);

/**
 * The Alert Log page, displaying a table of all AI-detected alerts.
 */
const AlertLog: React.FC = () => {
  // State to manage the list of alerts, initialized with mock data.
  // This allows the UI to be interactive (confirming/rejecting).
  const [alerts, setAlerts] = useState<Alert[]>(MOCK_ALERTS);

  /**
   * Handles the confirmation or rejection of an alert.
   * @param id - The ID of the alert to update.
   * @param status - `true` for confirmed, `false` for rejected.
   */
  const handleConfirm = (id: string, status: boolean) => {
    setAlerts(prevAlerts => 
      prevAlerts.map(alert => 
        alert.id === id ? { ...alert, confirmed: status } : alert
      )
    );
  };

  return (
    <Card title="Alert & Detection Log">
        <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-tertiary">
                <thead className="bg-secondary">
                <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-accent uppercase tracking-wider">Detection</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-accent uppercase tracking-wider">Timestamp</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-accent uppercase tracking-wider">Location</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-accent uppercase tracking-wider">Category</th>
                    <th scope="col" className="relative px-6 py-3">
                    <span className="sr-only">Actions</span>
                    </th>
                </tr>
                </thead>
                <tbody className="divide-y divide-tertiary">
                {alerts.map(alert => (
                    <AlertRow key={alert.id} alert={alert} onConfirm={handleConfirm} />
                ))}
                </tbody>
            </table>
        </div>
    </Card>
  );
};

export default AlertLog;