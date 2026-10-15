import { computed, ref } from 'vue';
import { mapIfcStationsToStations } from '../mappers/station.mapper';
import type { Station } from '../station.type';
import type { FuelType } from '@/modules/fuel';
import { haversineDistanceKm, useGeolocation } from '@/modules/geolocation';
import type { GeolocationCoordinates } from '@/modules/geolocation';
import { useIberianFuel } from '@/modules/iberian-fuel';
import { type SortMode, useUserSettings } from '@/modules/user-settings';

const originCoords = ref<GeolocationCoordinates | null>(null);

const { coords: geolocationCoords } = useGeolocation();
const { stations: ifcStations, isLoading, error, lastFetchedAt, fetchStations } = useIberianFuel();
const { fuelType, radiusKm, sortBy } = useUserSettings();

const computedOriginCoords = computed<GeolocationCoordinates>(() => originCoords.value ?? geolocationCoords.value);

const stations = computed<Station[]>(() => {
  const mappedStations = mapIfcStationsToStations(ifcStations.value);
  const stationsWithDistance = hydrateStationsDistance(mappedStations);
  const filtered = filterStations(stationsWithDistance, fuelType.value, radiusKm.value);
  return sortStations(filtered, fuelType.value, sortBy.value);
});

function hydrateStationsDistance(stationsWithoutDistance: Station[]): Station[] {
  return stationsWithoutDistance.map((station) => ({
    ...station,
    distanceKm: haversineDistanceKm(computedOriginCoords.value, station.location),
  }));
}

function filterStations(
  stationsToFilter: Station[],
  selectedFuelType: FuelType,
  maxRadiusKm: number,
): Station[] {
  return stationsToFilter.filter((station) => {
    const hasPrice = station.prices[selectedFuelType] !== null;
    const isWithinRadius = station.distanceKm !== undefined && station.distanceKm <= maxRadiusKm;

    return hasPrice && isWithinRadius;
  });
}

function sortStations(
  stationsToSort: Station[],
  selectedFuelType: FuelType,
  sortMode: SortMode,
): Station[] {
  return [...stationsToSort].sort((stationA: Station, stationB: Station) => {
    if (sortMode === 'distance') {
      const distanceA = stationA.distanceKm ?? Infinity;
      const distanceB = stationB.distanceKm ?? Infinity;

      return distanceA - distanceB;
    }

    const priceA = stationA.prices[selectedFuelType] ?? Infinity;
    const priceB = stationB.prices[selectedFuelType] ?? Infinity;

    return priceA - priceB;
  });
}

function setOriginCoords(newOrigin: GeolocationCoordinates | null): void {
  originCoords.value = newOrigin ? { ...newOrigin } : null;
}

export function resetStationsState(): void {
  originCoords.value = null;
}

export function useStations() {
  return {
    stations,
    isLoading,
    error,
    lastFetchedAt,
    fetchStations,
    setOriginLocation: setOriginCoords,
  };
}
