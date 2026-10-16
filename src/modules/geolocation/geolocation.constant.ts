import type { GeolocationCoordinates } from './geolocation.type.ts';

const LISBON_COORDS: GeolocationCoordinates = {
  latitude: 38.7223,
  longitude: -9.1393,
};

export const DEFAULT_COORDS: GeolocationCoordinates = LISBON_COORDS;

export const EARTH_RADIUS_KM = 6_371;
