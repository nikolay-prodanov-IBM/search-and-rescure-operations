
import React from 'react';
import Card from '../ui/Card';

/**
 * The Settings page, allowing users to configure application-wide preferences.
 */
const Settings: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* AI Model Configuration Section */}
      <Card title="AI Model Configuration">
        <div className="space-y-4">
          <div>
            <label htmlFor="detectionModel" className="block text-sm font-medium text-accent">Primary Detection Model</label>
            <select id="detectionModel" className="mt-1 block w-full bg-primary border-tertiary rounded-md shadow-sm focus:ring-highlight focus:border-highlight text-light">
              <option>Multi-modal (Visual, Thermal, Audio)</option>
              <option>Thermal Only (High Contrast)</option>
              <option>Visual Only (Daylight Optimized)</option>
            </select>
          </div>
          <div>
            <label htmlFor="sensitivity" className="block text-sm font-medium text-accent">Detection Sensitivity</label>
            <input type="range" id="sensitivity" min="1" max="100" defaultValue="75" className="w-full h-2 bg-tertiary rounded-lg appearance-none cursor-pointer accent-highlight" />
          </div>
        </div>
      </Card>
      
      {/* Notification Preferences Section */}
      <Card title="Notification Preferences">
        <div className="space-y-4">
            <p className="text-accent text-sm">Receive notifications for:</p>
            {/* A styled toggle switch for a notification preference */}
            <div className="flex items-center justify-between">
                <span className="text-light">New 'Human' Detections</span>
                <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" value="" className="sr-only peer" defaultChecked/>
                    <div className="w-11 h-6 bg-tertiary peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-highlight"></div>
                </label>
            </div>
            <div className="flex items-center justify-between">
                <span className="text-light">Mission Completion</span>
                 <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" value="" className="sr-only peer" defaultChecked/>
                    <div className="w-11 h-6 bg-tertiary peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-highlight"></div>
                </label>
            </div>
             <div className="flex items-center justify-between">
                <span className="text-light">Low Battery Warnings</span>
                <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" value="" className="sr-only peer" />
                    <div className="w-11 h-6 bg-tertiary peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-highlight"></div>
                </label>
            </div>
        </div>
      </Card>

      {/* Units and Display Settings */}
       <Card title="Units & Display">
        <div className="space-y-4">
          <div>
            <label htmlFor="units" className="block text-sm font-medium text-accent">Measurement Units</label>
            <select id="units" className="mt-1 block w-full bg-primary border-tertiary rounded-md shadow-sm focus:ring-highlight focus:border-highlight text-light">
              <option>Metric (meters, km/h)</option>
              <option>Imperial (feet, mph)</option>
            </select>
          </div>
        </div>
      </Card>
      
      {/* Save Button */}
      <div className="flex justify-end">
        <button className="bg-highlight text-primary font-bold py-2 px-6 rounded-lg hover:bg-sky-300 transition-colors">
            Save Settings
        </button>
      </div>
    </div>
  );
};

export default Settings;