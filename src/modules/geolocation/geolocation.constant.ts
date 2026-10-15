import type { GeolocationCoordinates } from '@/modules/geolocation/index.ts';

export const LISBON_COORDS: GeolocationCoordinates = {
  latitude: 38.7223,
  longitude: -9.1393,
};

export const MADRID_COORDS: GeolocationCoordinates = {
  latitude: 40.4168,
  longitude: -3.7038,
};

export const DEFAULT_COORDS: GeolocationCoordinates = LISBON_COORDS;

export const EARTH_RADIUS_KM = 6_371;
