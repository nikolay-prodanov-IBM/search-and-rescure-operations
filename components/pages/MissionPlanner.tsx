
import React from 'react';
import Card from '../ui/Card';
import { MOCK_DRONES } from '../../constants';

/**
 * The Mission Planner page, where users can define, configure, and launch new missions.
 */
const MissionPlanner: React.FC = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-6 h-full">
      {/* Map Area for defining search zones */}
      <div className="flex-1">
        <Card title="Define Search Zone" className="h-full flex flex-col">
          <div 
            className="flex-1 bg-tertiary/30 rounded-b-lg relative overflow-hidden flex items-center justify-center"
            style={{ 
              backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)',
              backgroundSize: '20px 20px',
            }}
          >
            <div className="text-center text-accent">
              <p>Map Area</p>
              <p className="text-xs">(Use tools to draw search polygons)</p>
            </div>
            {/* Mock Polygon to represent a defined search area */}
            <svg className="absolute w-full h-full" viewBox="0 0 200 100">
                <polygon points="50,10 150,20 180,80 70,90 40,50" className="fill-highlight/20 stroke-highlight stroke-2" />
            </svg>
          </div>
          {/* Toolbar for map interactions */}
          <div className="p-4 border-t border-tertiary flex space-x-2">
            <button className="bg-tertiary p-2 rounded-lg hover:bg-highlight hover:text-primary transition-colors">Polygon Tool</button>
            <button className="bg-tertiary p-2 rounded-lg hover:bg-highlight hover:text-primary transition-colors">Circle Tool</button>
            <button className="bg-tertiary p-2 rounded-lg hover:bg-highlight hover:text-primary transition-colors">Upload KML</button>
          </div>
        </Card>
      </div>

      {/* Side Panel for mission configuration */}
      <div className="w-full lg:w-96 flex-shrink-0">
        <Card title="New Mission Details">
          <form className="space-y-4">
            <div>
              <label htmlFor="missionName" className="block text-sm font-medium text-accent">Mission Name</label>
              <input type="text" id="missionName" className="mt-1 block w-full bg-primary border-tertiary rounded-md shadow-sm focus:ring-highlight focus:border-highlight text-light" defaultValue="Foothills Recon" />
            </div>
            <div>
              <label htmlFor="assignDrones" className="block text-sm font-medium text-accent">Assign Drones</label>
              <select id="assignDrones" multiple className="mt-1 block w-full bg-primary border-tertiary rounded-md shadow-sm focus:ring-highlight focus:border-highlight text-light h-32">
                {MOCK_DRONES.map(drone => (
                  <option key={drone.id} value={drone.id}>{drone.name} ({drone.model})</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-accent">AI Scan Modes</label>
              <div className="mt-2 space-y-2">
                <div className="flex items-center">
                  <input id="thermal" type="checkbox" className="h-4 w-4 rounded border-tertiary bg-primary text-highlight focus:ring-highlight" defaultChecked/>
                  <label htmlFor="thermal" className="ml-2 block text-sm text-light">Thermal Scan</label>
                </div>
                 <div className="flex items-center">
                  <input id="visual" type="checkbox" className="h-4 w-4 rounded border-tertiary bg-primary text-highlight focus:ring-highlight" defaultChecked/>
                  <label htmlFor="visual" className="ml-2 block text-sm text-light">Visual Human Detection</label>
                </div>
                 <div className="flex items-center">
                  <input id="audio" type="checkbox" className="h-4 w-4 rounded border-tertiary bg-primary text-highlight focus:ring-highlight"/>
                  <label htmlFor="audio" className="ml-2 block text-sm text-light">Anomalous Sound Detection</label>
                </div>
              </div>
            </div>
            <div className="pt-4">
               <button type="submit" className="w-full bg-highlight text-primary font-bold py-2 px-4 rounded-lg hover:bg-sky-300 transition-colors">
                Save & Launch Mission
              </button>
            </div>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default MissionPlanner;