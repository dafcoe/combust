import type { FuelPrices } from '@/modules/fuel';
import type { GeolocationCoordinates } from '@/modules/geolocation';

export type StationAddress = {
  street: string;
  postalCode: string;
  town: string;
  municipality: string;
  district: string;
  country: string;
};

export type Station = {
  id: string;
  name: string;
  brand: string;
  brandLogoUrl: string;
  location: GeolocationCoordinates;
  address: StationAddress;
  prices: FuelPrices;
  openingHours?: string;
  distanceKm?: number;
  isOpen?: boolean;
};
