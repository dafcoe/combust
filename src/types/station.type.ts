import type { FuelPrices } from './fuel.type.ts';
import type { GeolocationCoordinates } from './geolocation.type.ts';
import { IFC_COUNTRY_NAME, type IfcFuel } from './iberian-fuel-client.type.ts';

export type StationAddress = {
  street: string;
  postalCode: string;
  town: string;
  municipality: string;
  district: string;
  country: IFC_COUNTRY_NAME | string;
};

export type Station = {
  id: string;
  name: string;
  brand: string;
  location: GeolocationCoordinates;
  address: StationAddress;
  prices: FuelPrices;
  openingHours?: string;
  distanceKm?: number;
  isOpen?: boolean;
  rawFuels?: IfcFuel[];
};
