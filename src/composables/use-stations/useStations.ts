import { computed, readonly, ref } from 'vue';
import { useGeolocation } from '@/composables/use-geolocation/useGeolocation';
import { useIberianFuel } from '@/composables/use-iberian-fuel/useIberianFuel';
import { useUserSettings } from '@/composables/use-user-settings/useUserSettings';
import type { FuelType, GeolocationCoordinates, SortMode, Station } from '@/types';
import { haversineDistanceKm } from '@/utils';

const customOrigin = ref<GeolocationCoordinates | null>(null);

const { coords } = useGeolocation();
const { stations, isLoading, error, lastFetchedAt, fetchStations } = useIberianFuel();
const { fuelType, radiusKm, sortBy } = useUserSettings();

const originLocation = computed<GeolocationCoordinates>(() => customOrigin.value ?? coords.value);

const stationsWithDistance = computed<Station[]>(() => {
  return stations.value.map((station) => ({
    ...station,
    distanceKm: haversineDistanceKm(originLocation.value, station.location),
  }));
});

const visibleStations = computed<Station[]>(() => {
  const filtered = filterStations(stationsWithDistance.value, fuelType.value, radiusKm.value);
  return sortStations(filtered, fuelType.value, sortBy.value);
});

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

function setOriginLocation(newOrigin: GeolocationCoordinates | null): void {
  customOrigin.value = newOrigin ? { ...newOrigin } : null;
}

export function resetStationsState(): void {
  customOrigin.value = null;
}

export function useStations() {
  return {
    originLocation: readonly(originLocation),
    visibleStations,
    isLoading,
    error,
    lastFetchedAt,
    fetchStations,
    setOriginLocation,
  };
}
