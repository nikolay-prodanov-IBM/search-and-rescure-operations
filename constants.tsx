
import React from 'react';
import { Drone, Alert, Mission, TelemetryDataPoint, DroneStatus, AlertType } from './types';
import { HomeIcon, MapPinIcon, RocketLaunchIcon, BellAlertIcon, CommandLineIcon, ChartBarIcon, Cog6ToothIcon, UsersIcon, QuestionMarkCircleIcon, InformationCircleIcon } from './components/ui/Icons';

/**
 * Defines the navigation structure of the application.
 * Each object represents a link in the sidebar.
 */
export const NAV_ITEMS = [
  { name: 'Dashboard', icon: <HomeIcon />, view: 'Dashboard' },
  { name: 'Live Mission', icon: <MapPinIcon />, view: 'LiveMissionView' },
  { name: 'Fleet Management', icon: <RocketLaunchIcon />, view: 'FleetManagement' },
  { name: 'Mission Planner', icon: <CommandLineIcon />, view: 'MissionPlanner' },
  { name: 'Alert & Detection Log', icon: <BellAlertIcon />, view: 'AlertLog' },
  { name: 'Telemetry & Analytics', icon: <ChartBarIcon />, view: 'Analytics' },
  { name: 'Settings', icon: <Cog6ToothIcon />, view: 'Settings' },
  { name: 'User Management', icon: <UsersIcon />, view: 'UserManagement' },
  { name: 'Help & Documentation', icon: <QuestionMarkCircleIcon />, view: 'Help' },
  { name: 'About', icon: <InformationCircleIcon />, view: 'About' },
];

/**
 * Mock data for the drone fleet. Used for demonstration purposes.
 */
export const MOCK_DRONES: Drone[] = [
  { id: 'GW-001', name: 'Alpha-1', model: 'GuardianWing Pro', status: DroneStatus.IN_MISSION, battery: 78, speed: 25, altitude: 120, gps: { lat: 34.0522, lng: -118.2437 }, signalStrength: 95, flightTime: 45, batteryCycles: 150, motorTemp: 45 },
  { id: 'GW-002', name: 'Bravo-2', model: 'GuardianWing Pro', status: DroneStatus.IDLE, battery: 100, speed: 0, altitude: 0, gps: { lat: 34.0522, lng: -118.2437 }, signalStrength: 100, flightTime: 0, batteryCycles: 88, motorTemp: 25 },
  { id: 'GW-003', name: 'Charlie-3', model: 'GuardianWing Mini', status: DroneStatus.CHARGING, battery: 45, speed: 0, altitude: 0, gps: { lat: 34.0522, lng: -118.2437 }, signalStrength: 0, flightTime: 0, batteryCycles: 210, motorTemp: 22 },
  { id: 'GW-004', name: 'Delta-4', model: 'GuardianWing Pro', status: DroneStatus.MAINTENANCE, battery: 60, speed: 0, altitude: 0, gps: { lat: 34.0522, lng: -118.2437 }, signalStrength: 0, flightTime: 0, batteryCycles: 301, motorTemp: 28 },
  { id: 'GW-005', name: 'Echo-5', model: 'GuardianWing Long-Range', status: DroneStatus.IDLE, battery: 100, speed: 0, altitude: 0, gps: { lat: 34.0522, lng: -118.2437 }, signalStrength: 100, flightTime: 0, batteryCycles: 45, motorTemp: 24 },
  { id: 'GW-006', name: 'Foxtrot-6', model: 'GuardianWing Pro', status: DroneStatus.OFFLINE, battery: 0, speed: 0, altitude: 0, gps: { lat: 0, lng: 0 }, signalStrength: 0, flightTime: 0, batteryCycles: 120, motorTemp: 20 },
];

/**
 * Mock data for AI-detected alerts.
 */
export const MOCK_ALERTS: Alert[] = [
  { id: 'A001', timestamp: '2024-07-30T14:25:10Z', type: AlertType.HUMAN, location: { lat: 34.055, lng: -118.245 }, imageUrl: 'https://picsum.photos/seed/human1/200/150', confirmed: null, droneId: 'GW-001' },
  { id: 'A002', timestamp: '2024-07-30T14:22:30Z', type: AlertType.FIRE, location: { lat: 34.056, lng: -118.242 }, imageUrl: 'https://picsum.photos/seed/fire1/200/150', confirmed: true, droneId: 'GW-001' },
  { id: 'A003', timestamp: '2024-07-30T14:19:05Z', type: AlertType.ANIMAL, location: { lat: 34.053, lng: -118.248 }, imageUrl: 'https://picsum.photos/seed/animal1/200/150', confirmed: false, droneId: 'GW-001' },
  { id: 'A004', timestamp: '2024-07-29T10:05:00Z', type: AlertType.INFRASTRUCTURE, location: { lat: 34.05, lng: -118.25 }, imageUrl: 'https://picsum.photos/seed/infra1/200/150', confirmed: true, droneId: 'GW-002' },
];

/**
 * Mock data for missions.
 */
export const MOCK_MISSIONS: Mission[] = [
    { id: 'M01', name: 'Hillside Search', status: 'Active', startTime: '2024-07-30T14:00:00Z', drones: ['GW-001'], searchArea: 'Sector A' },
    { id: 'M02', name: 'Forest Perimeter Scan', status: 'Completed', startTime: '2024-07-29T08:00:00Z', drones: ['GW-002', 'GW-005'], searchArea: 'Sectors B, C' },
    { id: 'M03', name: 'Night Watch', status: 'Planned', startTime: '2024-07-30T22:00:00Z', drones: ['GW-002'], searchArea: 'Sector D' },
];

/**
 * Mock telemetry data for charts and graphs.
 */
export const MOCK_TELEMETRY: TelemetryDataPoint[] = [
  { time: '14:00', altitude: 80, battery: 98, temperature: 40 },
  { time: '14:05', altitude: 100, battery: 95, temperature: 42 },
  { time: '14:10', altitude: 120, battery: 91, temperature: 44 },
  { time: '14:15', altitude: 115, battery: 88, temperature: 45 },
  { time: '14:20', altitude: 125, battery: 84, temperature: 45 },
  { time: '14:25', altitude: 120, battery: 78, temperature: 46 },
  { time: '14:30', altitude: 130, battery: 75, temperature: 45 },
];