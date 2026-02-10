
export enum ServiceType {
  ONE_WAY = 'One Way Drop',
  ROUND_TRIP = 'Round Trip',
  LOCAL = 'Local / Airport',
}

export interface Vehicle {
  id: string;
  name: string;
  type: string;
  capacity: number;
  pricePerKm: number;
  image: string;
  features: string[];
}

export interface Route {
  from: string;
  to: string;
  distance: string;
  duration: string;
  price: number;
}

export interface BookingData {
  pickup: string;
  drop: string;
  date: string;
  time: string;
  mobile?: string;
  service: ServiceType;
  vehicle: string;
  flightNumber?: string;
  airportName?: string;
}

export interface User {
  id: string;
  name: string;
  mobile: string;
  joinedAt: string;
  lastLogin: string;
}
