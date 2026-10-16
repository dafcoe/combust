import {
  computed,
  readonly,
  ref,
} from 'vue';
import { mapIfcStationsToStations } from '../mappers/station.mapper.ts';
import type { Station } from '../station.type';
import {
  filterStations,
  hydrateStationsDistance,
  sortStations,
} from '../utils/station.util.ts';
import { useAppSettings } from '@/modules/app-settings';
import { useGeolocation, type GeolocationCoordinates } from '@/modules/geolocation';
import { useIberianFuel } from '@/modules/iberian-fuel';

const originCoords = ref<GeolocationCoordinates | null>(null);

const {
  stations: ifcStations,
  isLoading,
  error,
  lastFetchedAt,
  fetchStations,
} = useIberianFuel();

const { appSettings } = useAppSettings();
const { coords: geolocationCoords } = useGeolocation();

const computedOriginCoords = computed<GeolocationCoordinates>(() => originCoords.value ?? geolocationCoords.value);

const stations = computed<Station[]>(() => {
  const { fuelType, sortBy, radiusKm } = appSettings.value;
  const mappedStations = mapIfcStationsToStations(ifcStations.value);
  const stationsWithDistance = hydrateStationsDistance(mappedStations, computedOriginCoords.value);
  const filteredStations = filterStations(stationsWithDistance, fuelType, radiusKm);

  return sortStations(filteredStations, fuelType, sortBy);
});

export function useStations() {
  function setOriginCoords(newOrigin: GeolocationCoordinates | null): void {
    originCoords.value = newOrigin ? { ...newOrigin } : null;
  }

  return {
    originCoords: readonly(originCoords),
    setOriginCoords,
    stations,
    isLoading,
    error,
    lastFetchedAt,
    loadStations: fetchStations,
  };
}
