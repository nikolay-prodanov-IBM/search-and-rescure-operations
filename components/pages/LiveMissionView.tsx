
import React from 'react';
import Card from '../ui/Card';
import { MOCK_DRONES } from '../../constants';
import { Drone, DroneStatus } from '../../types';
import { MapPinIcon } from '../ui/Icons';

/**
 * Helper function to get the background color class based on drone status.
 * @param status - The status of the drone.
 * @returns A string of Tailwind CSS classes.
 */
const getStatusColor = (status: DroneStatus) => {
  switch (status) {
    case DroneStatus.IN_MISSION: return 'bg-highlight';
    case DroneStatus.IDLE: return 'bg-success';
    case DroneStatus.MAINTENANCE: return 'bg-warning';
    default: return 'bg-danger';
  }
};

/**
 * A sub-component to display key telemetry data for a single drone.
 */
const TelemetryPanel: React.FC<{ drone: Drone }> = ({ drone }) => (
  <div className="space-y-4">
    <div className="flex justify-between items-baseline">
      <h3 className="text-xl font-bold text-light">{drone.name}</h3>
      <span className={`text-xs font-semibold px-2 py-1 rounded-full ${getStatusColor(drone.status)} text-primary`}>{drone.status}</span>
    </div>
    <div className="grid grid-cols-2 gap-4 text-sm">
      <div className="bg-tertiary/50 p-3 rounded-lg">
        <p className="text-accent">Battery</p>
        <p className="text-light text-lg font-semibold">{drone.battery}%</p>
      </div>
      <div className="bg-tertiary/50 p-3 rounded-lg">
        <p className="text-accent">Speed</p>
        <p className="text-light text-lg font-semibold">{drone.speed} km/h</p>
      </div>
      <div className="bg-tertiary/50 p-3 rounded-lg">
        <p className="text-accent">Altitude</p>
        <p className="text-light text-lg font-semibold">{drone.altitude} m</p>
      </div>
      <div className="bg-tertiary/50 p-3 rounded-lg">
        <p className="text-accent">Signal</p>
        <p className="text-light text-lg font-semibold">{drone.signalStrength}%</p>
      </div>
    </div>
     <div className="bg-tertiary/50 p-3 rounded-lg">
        <p className="text-accent">GPS Coordinates</p>
        <p className="text-light text-base font-semibold">{drone.gps.lat.toFixed(4)}, {drone.gps.lng.toFixed(4)}</p>
      </div>
  </div>
);

/**
 * The Live Mission View page, showing a map, telemetry, and video feed.
 */
const LiveMissionView: React.FC = () => {
  // Find the first active drone to feature, or default to the first drone in the list.
  const activeDrone = MOCK_DRONES.find(d => d.status === DroneStatus.IN_MISSION) || MOCK_DRONES[0];

  return (
    <div className="flex flex-col lg:flex-row gap-6 h-full">
      {/* Main Map View */}
      <div className="flex-1">
        <Card title="Live Map - Hillside Search" className="h-full flex flex-col">
          <div 
            className="flex-1 bg-tertiary/30 rounded-b-lg relative overflow-hidden"
            // Use CSS gradients to create a grid pattern for the mock map.
            style={{ 
              backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)',
              backgroundSize: '20px 20px',
            }}
          >
            {/* Mock Drone Icon on Map */}
            <div className="absolute" style={{ top: '40%', left: '50%'}}>
              <MapPinIcon className="h-8 w-8 text-highlight animate-pulse" />
              <span className="absolute -top-6 -right-8 bg-secondary text-light px-2 py-1 rounded text-xs">{activeDrone.name}</span>
            </div>
            {/* Mock Alert Icon on Map */}
             <div className="absolute" style={{ top: '55%', left: '65%'}}>
              <div className="h-5 w-5 bg-danger rounded-full animate-ping opacity-75"></div>
              <div className="absolute -top-1 -left-1 h-7 w-7 bg-danger rounded-full border-2 border-light flex items-center justify-center text-xs font-bold">!</div>
            </div>
          </div>
        </Card>
      </div>

      {/* Side Panel with Telemetry and Video */}
      <div className="w-full lg:w-96 flex-shrink-0">
        <div className="space-y-6 h-full flex flex-col">
          {/* Telemetry Panel */}
          <Card title="Drone Telemetry" className="flex-shrink-0">
            <TelemetryPanel drone={activeDrone} />
          </Card>

          {/* Video Feed Panel */}
          <Card title="Live Video Feed" className="flex-1 flex flex-col">
            <div className="flex-1 bg-black rounded-b-lg overflow-hidden relative">
              <img src="https://picsum.photos/seed/dronefeed/400/300" alt="Live drone feed" className="w-full h-full object-cover" />
              <div className="absolute bottom-2 left-2 bg-black/50 text-white text-xs px-2 py-1 rounded">
                CAM 1 / VISUAL
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default LiveMissionView;