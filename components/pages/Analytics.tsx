
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar } from 'recharts';
import Card from '../ui/Card';
import { MOCK_TELEMETRY, MOCK_DRONES } from '../../constants';

/**
 * The Analytics page, which visualizes telemetry and fleet data using charts.
 */
const Analytics: React.FC = () => {
  // Prepare data for the battery health bar chart.
  const droneBatteryData = MOCK_DRONES.map(d => ({
    name: d.name,
    batteryCycles: d.batteryCycles,
  }));
  
  return (
    <div className="space-y-8">
      {/* Live Telemetry Chart */}
      <Card title="Live Telemetry - GW-001 (Last 30 Minutes)">
        <div className="h-96 w-full">
            <ResponsiveContainer>
                <LineChart
                    data={MOCK_TELEMETRY}
                    margin={{ top: 5, right: 20, left: -10, bottom: 5 }}
                >
                    <CartesianGrid strokeDasharray="3 3" stroke="#415A77" />
                    <XAxis dataKey="time" stroke="#E0E1DD" />
                    {/* Define two Y-axes for different scales (altitude and battery/temp) */}
                    <YAxis yAxisId="left" stroke="#38BDF8" label={{ value: 'Altitude (m)', angle: -90, position: 'insideLeft', fill: '#38BDF8' }} />
                    <YAxis yAxisId="right" orientation="right" stroke="#22C55E" label={{ value: 'Battery (%)', angle: -90, position: 'insideRight', fill: '#22C55E' }} />
                    <Tooltip contentStyle={{ backgroundColor: '#1B263B', border: '1px solid #415A77' }} />
                    <Legend />
                    <Line yAxisId="left" type="monotone" dataKey="altitude" stroke="#38BDF8" strokeWidth={2} dot={{ r: 4 }} activeDot={{ r: 8 }} name="Altitude" />
                    <Line yAxisId="right" type="monotone" dataKey="battery" stroke="#22C55E" strokeWidth={2} name="Battery" />
                    <Line yAxisId="right" type="monotone" dataKey="temperature" stroke="#F97316" strokeWidth={2} name="Motor Temp (°C)" />
                </LineChart>
            </ResponsiveContainer>
        </div>
      </Card>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Fleet Battery Health Chart */}
        <Card title="Fleet Battery Health (Cycles)">
            <div className="h-80 w-full">
                <ResponsiveContainer>
                    <BarChart data={droneBatteryData} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#415A77" />
                        <XAxis dataKey="name" stroke="#E0E1DD" />
                        <YAxis stroke="#E0E1DD"/>
                        <Tooltip contentStyle={{ backgroundColor: '#1B263B', border: '1px solid #415A77' }} cursor={{fill: 'rgba(119, 141, 169, 0.2)'}}/>
                        <Legend />
                        <Bar dataKey="batteryCycles" fill="#38BDF8" name="Battery Cycles" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </Card>
        
        {/* Data Export Section */}
        <Card title="Export Data">
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-light">Export Mission Logs</h4>
              <p className="text-sm text-accent mb-2">Select a mission to export its full telemetry log.</p>
              <select className="mt-1 block w-full bg-primary border-tertiary rounded-md shadow-sm focus:ring-highlight focus:border-highlight text-light">
                <option>M01 - Hillside Search</option>
                <option>M02 - Forest Perimeter Scan</option>
              </select>
            </div>
            <button className="w-full bg-highlight text-primary font-bold py-2 px-4 rounded-lg hover:bg-sky-300 transition-colors">
              Export as CSV
            </button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Analytics;