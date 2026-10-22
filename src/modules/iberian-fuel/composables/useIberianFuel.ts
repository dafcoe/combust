import { IberianFuelClient } from '@dafcoe/iberian-fuel-client';
import { readonly, ref } from 'vue';
import type { IfcStation } from '../iberian-fuel.type.ts';

const ifcClient = new IberianFuelClient();

const stations = ref<IfcStation[]>([]);
const isLoading = ref<boolean>(false);
const error = ref<string | null>(null);
const lastFetchedAt = ref<Date | null>(null);

export function useIberianFuel() {
  async function fetchStations(): Promise<void> {
    if (isLoading.value) return;

    isLoading.value = true;
    error.value = null;

    try {
      stations.value = await ifcClient.getStations();
      lastFetchedAt.value = new Date();
    } catch (err) {
      error.value = err instanceof Error ? err.message : 'Failed to fetch iberian fuel client stations';
    } finally {
      isLoading.value = false;
    }
  }

  return {
    stations: readonly(stations),
    isLoading: readonly(isLoading),
    error: readonly(error),
    lastFetchedAt: readonly(lastFetchedAt),
    fetchStations,
  };
}
