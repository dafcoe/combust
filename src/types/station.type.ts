import type { FuelPrices } from './fuel.type.ts';
import { IFC_COUNTRY_NAME } from './iberian-fuel-client.type.ts';
import type { GeolocationCoordinates } from '@/modules/geolocation';

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
};
