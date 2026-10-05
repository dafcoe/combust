import { readonly, ref } from 'vue';
import { mapIfcStationsToStations } from '@/mappers';
import {
  type GeolocationCoordinates,
  IberianFuelClient,
  type Station,
} from '@/types';
import { haversineDistanceKm } from '@/utils';

const ifcClient = new IberianFuelClient();

const stations = ref<Station[]>([]);
const isLoading = ref<boolean>(false);
const error = ref<string | null>(null);
const lastFetchedAt = ref<Date | null>(null);

async function fetchStations(): Promise<void> {
  isLoading.value = true;
  error.value = null;

  try {
    const ifcStations = await ifcClient.getStations();

    stations.value = mapIfcStationsToStations(ifcStations);
    lastFetchedAt.value = new Date();
  } catch (err) {
    error.value = err instanceof Error ? err.message : 'Failed to fetch fuel iberian fuel client stations';
  } finally {
    isLoading.value = false;
  }
}

function updateStationsDistance(originLocation: GeolocationCoordinates): void {
  stations.value = stations.value.map((station) => ({
    ...station,
    distanceKm: haversineDistanceKm(originLocation, station.location),
  }));
}

export function resetIberianFuelState(): void {
  stations.value = [];
  isLoading.value = false;
  error.value = null;
  lastFetchedAt.value = null;
}

export function useIberianFuel() {
  return {
    stations: readonly(stations),
    isLoading: readonly(isLoading),
    error: readonly(error),
    lastFetchedAt: readonly(lastFetchedAt),
    fetchStations,
    updateStationsDistance,
  };
}
