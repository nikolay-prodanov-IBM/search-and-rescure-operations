
import React from 'react';
import { MOCK_DRONES } from '../../constants';
import { Drone, DroneStatus } from '../../types';
import Card from '../ui/Card';

/**
 * Helper function to get Tailwind CSS classes for the status badge.
 * @param status - The status of the drone.
 * @returns A string of Tailwind CSS classes for background and text color.
 */
const getStatusClasses = (status: DroneStatus) => {
  switch (status) {
    case DroneStatus.IDLE:
      return 'bg-success/20 text-success';
    case DroneStatus.IN_MISSION:
      return 'bg-highlight/20 text-highlight';
    case DroneStatus.CHARGING:
      return 'bg-yellow-400/20 text-yellow-400';
    case DroneStatus.MAINTENANCE:
      return 'bg-warning/20 text-warning';
    case DroneStatus.OFFLINE:
      return 'bg-danger/20 text-danger';
    default:
      return 'bg-tertiary text-accent';
  }
};

/**
 * A sub-component that displays detailed information for a single drone.
 */
const DroneCard: React.FC<{ drone: Drone }> = ({ drone }) => (
  <Card className="hover:border-highlight border-2 border-transparent transition-all duration-300">
    <div className="flex flex-col sm:flex-row justify-between sm:items-center">
      <div>
        <h3 className="text-lg font-bold text-light">{drone.name} <span className="text-sm text-accent font-normal">({drone.id})</span></h3>
        <p className="text-sm text-accent">{drone.model}</p>
      </div>
      <span className={`mt-2 sm:mt-0 text-xs font-semibold px-3 py-1 rounded-full ${getStatusClasses(drone.status)}`}>
        {drone.status}
      </span>
    </div>
    <div className="mt-4 pt-4 border-t border-tertiary grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
      <div>
        <p className="text-accent">Battery</p>
        <p className="text-light font-semibold">{drone.battery}%</p>
      </div>
      <div>
        <p className="text-accent">Flight Time</p>
        <p className="text-light font-semibold">{drone.flightTime} min</p>
      </div>
      <div>
        <p className="text-accent">Motor Temp</p>
        <p className="text-light font-semibold">{drone.motorTemp}°C</p>
      </div>
      <div>
        <p className="text-accent">Bat. Cycles</p>
        <p className="text-light font-semibold">{drone.batteryCycles}</p>
      </div>
    </div>
    <div className="mt-4 flex space-x-2">
      <button className="flex-1 text-sm bg-tertiary hover:bg-highlight hover:text-primary transition-colors font-semibold py-2 px-4 rounded-lg">Health Check</button>
      <button className="flex-1 text-sm bg-tertiary hover:bg-highlight hover:text-primary transition-colors font-semibold py-2 px-4 rounded-lg">Manual Control</button>
    </div>
  </Card>
);

/**
 * The Fleet Management page, which displays a list of all drones in the system.
 */
const FleetManagement: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        {MOCK_DRONES.map(drone => (
          <DroneCard key={drone.id} drone={drone} />
        ))}
      </div>
    </div>
  );
};

export default FleetManagement;