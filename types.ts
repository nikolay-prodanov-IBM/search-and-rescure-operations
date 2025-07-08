
/**
 * Represents the possible operational statuses of a drone.
 */
export enum DroneStatus {
  IDLE = 'Idle',
  IN_MISSION = 'In Mission',
  MAINTENANCE = 'Maintenance',
  CHARGING = 'Charging',
  OFFLINE = 'Offline',
}

/**
 * Defines the categories for AI-detected alerts.
 */
export enum AlertType {
  HUMAN = 'Human',
  ANIMAL = 'Animal',
  HAZARD = 'Hazard',
  FIRE = 'Fire',
  NOISE = 'Anomalous Noise',
  INFRASTRUCTURE = 'Infrastructure Damage',
}

/**
 * Interface for a single drone object, containing its properties and health metrics.
 */
export interface Drone {
  id: string;
  name: string;
  model: string;
  status: DroneStatus;
  battery: number;
  speed: number;
  altitude: number;
  gps: { lat: number; lng: number };
  signalStrength: number;
  flightTime: number; // in minutes
  batteryCycles: number;
  motorTemp: number; // in Celsius
}

/**
 * Interface for an AI-generated alert.
 */
export interface Alert {
  id: string;
  timestamp: string;
  type: AlertType;
  location: { lat: number; lng: number };
  imageUrl: string;
  confirmed: boolean | null; // null for unconfirmed, true for confirmed, false for rejected
  droneId: string;
}

/**
 * Interface for a search and rescue mission.
 */
export interface Mission {
  id: string;
  name: string;
  status: 'Active' | 'Planned' | 'Completed';
  startTime: string;
  drones: string[]; // Array of drone IDs assigned to the mission
  searchArea: string;
}

/**
 * Interface for a single point of telemetry data captured over time.
 */
export interface TelemetryDataPoint {
  time: string;
  altitude: number;
  battery: number;
  temperature: number;
}