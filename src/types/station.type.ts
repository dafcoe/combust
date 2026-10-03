import type { FuelPrices } from './fuel.type.ts';
import { IFC_COUNTRY_NAME, type IfcFuel } from './iberian-fuel-client.type.ts';

export interface StationAddressCoordinates {
  latitude: number;
  longitude: number;
}

export interface StationAddress {
  street: string;
  postalCode: string;
  town: string;
  municipality: string;
  district: string;
  country: IFC_COUNTRY_NAME | string;
}

export interface Station {
  id: string;
  name: string;
  brand: string;
  location: StationAddressCoordinates;
  address: StationAddress;
  prices: FuelPrices;
  openingHours?: string;
  distanceKm?: number;
  isOpen?: boolean;
  rawFuels?: IfcFuel[];
}
