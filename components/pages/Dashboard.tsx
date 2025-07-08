import React from 'react';
import Card from '../ui/Card';
import Stat from '../ui/Stat';
import { MOCK_DRONES, MOCK_ALERTS, MOCK_MISSIONS } from '../../constants';
import { DroneStatus, AlertType } from '../../types';
import { RocketLaunchIcon, BellAlertIcon, CheckCircleIcon } from '../ui/Icons';

/**
 * Helper function to get the Tailwind CSS color class based on drone status.
 * @param status - The status of the drone.
 * @returns A string of Tailwind CSS classes.
 */
const getStatusColor = (status: DroneStatus) => {
  switch (status) {
    case DroneStatus.IN_MISSION: return 'text-highlight';
    case DroneStatus.IDLE: return 'text-success';
    case DroneStatus.MAINTENANCE: return 'text-warning';
    case DroneStatus.CHARGING: return 'text-yellow-400';
    default: return 'text-danger';
  }
};

/**
 * Helper function to get the Tailwind CSS border color class for an alert.
 * @param type - The type of the alert.
 * @returns A string of Tailwind CSS classes.
 */
const getAlertColor = (type: AlertType) => {
    switch(type) {
        case AlertType.HUMAN: return 'border-danger';
        case AlertType.FIRE: return 'border-orange-500';
        default: return 'border-tertiary';
    }
}

/**
 * The main Dashboard component, serving as the landing page of the application.
 */
const Dashboard: React.FC = () => {
    // Aggregate data from mocks for display in stats.
    const activeDrones = MOCK_DRONES.filter(d => d.status === DroneStatus.IN_MISSION).length;
    const idleDrones = MOCK_DRONES.filter(d => d.status === DroneStatus.IDLE).length;

  return (
    <div className="space-y-8">
      {/* Top-level stats grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Stat icon={<RocketLaunchIcon />} label="Active Missions" value={MOCK_MISSIONS.filter(m => m.status === 'Active').length} />
        <Stat icon={<RocketLaunchIcon className="rotate-90" />} label="Drones in Flight" value={activeDrones} />
        <Stat icon={<CheckCircleIcon />} label="Drones on Standby" value={idleDrones} />
        <Stat icon={<BellAlertIcon />} label="New Alerts Today" value={MOCK_ALERTS.length} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Mission Overview Section */}
        <Card title="Active Missions" className="lg:col-span-2">
            <div className="space-y-4">
                {MOCK_MISSIONS.filter(m => m.status === 'Active').map(mission => (
                    <div key={mission.id} className="p-4 bg-tertiary/50 rounded-lg flex justify-between items-center">
                        <div>
                            <p className="font-bold text-light">{mission.name}</p>
                            <p className="text-sm text-accent">{mission.searchArea} | Drones: {mission.drones.join(', ')}</p>
                        </div>
                        <button className="px-4 py-2 bg-highlight text-primary rounded-lg text-sm font-semibold hover:bg-sky-300 transition-colors">View Mission</button>
                    </div>
                ))}
                {MOCK_MISSIONS.filter(m => m.status === 'Active').length === 0 && <p className="text-accent">No active missions.</p>}
            </div>
        </Card>
        
        {/* Quick Launch Actions */}
        <Card title="Quick Actions">
            <div className="flex flex-col space-y-3">
                <button className="w-full text-left p-3 bg-tertiary rounded-lg hover:bg-highlight hover:text-primary transition-colors">Launch Standard Grid Search</button>
                <button className="w-full text-left p-3 bg-tertiary rounded-lg hover:bg-highlight hover:text-primary transition-colors">Initiate Perimeter Scan</button>
                <button className="w-full text-left p-3 bg-tertiary rounded-lg hover:bg-highlight hover:text-primary transition-colors">Deploy Thermal Scan</button>
            </div>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Live Drone Status Section */}
        <Card title="Live Drone Status" className="lg:col-span-2">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {MOCK_DRONES.slice(0, 4).map(drone => (
              <div key={drone.id} className="p-4 bg-tertiary/50 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <p className="font-bold text-light">{drone.name} ({drone.id})</p>
                  <p className={`text-sm font-semibold ${getStatusColor(drone.status)}`}>{drone.status}</p>
                </div>
                <div className="text-xs text-accent space-y-1">
                    <p>Battery: {drone.battery}% | Altitude: {drone.altitude}m</p>
                    {/* Battery level progress bar */}
                    <div className="w-full bg-primary rounded-full h-1.5">
                        <div className="bg-highlight h-1.5 rounded-full" style={{width: `${drone.battery}%`}}></div>
                    </div>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Recent Alerts Section */}
        <Card title="Recent Alerts">
          <div className="space-y-3">
            {MOCK_ALERTS.slice(0, 3).map(alert => (
              <div key={alert.id} className={`flex items-center space-x-3 p-2 rounded-lg bg-tertiary/50 border-l-4 ${getAlertColor(alert.type)}`}>
                <img src={alert.imageUrl} alt="alert" className="w-12 h-12 object-cover rounded-md" />
                <div>
                  <p className="font-semibold text-light">{alert.type}</p>
                  <p className="text-xs text-accent">{new Date(alert.timestamp).toLocaleTimeString()}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;