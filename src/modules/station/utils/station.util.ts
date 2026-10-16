import type { Station } from '../station.type.ts';
import type { SortMode } from '@/modules/app-settings';
import type { FuelType } from '@/modules/fuel';
import { haversineDistanceKm } from '@/modules/geolocation';
import type { GeolocationCoordinates } from '@/modules/geolocation';

export function hydrateStationsDistance(stations: Station[], originLocation: GeolocationCoordinates): Station[] {
  return stations.map((station) => ({
    ...station,
    distanceKm: haversineDistanceKm(originLocation, station.location),
  }));
}

export function filterStations(
  stations: Station[],
  fuelType: FuelType,
  maxRadiusKm: number,
): Station[] {
  return stations.filter((station) => {
    const hasPrice = station.prices[fuelType] !== null;
    const isWithinRadius = station.distanceKm !== undefined && station.distanceKm <= maxRadiusKm;

    return hasPrice && isWithinRadius;
  });
}

export function sortStations(
  stations: Station[],
  fuelType: FuelType,
  sortMode: SortMode,
): Station[] {
  return [...stations].sort((stationA: Station, stationB: Station) => {
    const distanceA = stationA.distanceKm ?? Infinity;
    const distanceB = stationB.distanceKm ?? Infinity;
    const priceA = stationA.prices[fuelType] ?? Infinity;
    const priceB = stationB.prices[fuelType] ?? Infinity;

    if (sortMode === 'distance') {
      if (distanceA !== distanceB) return distanceA - distanceB;
      return priceA - priceB;
    }

    if (priceA !== priceB) return priceA - priceB;
    return distanceA - distanceB;
  });
}