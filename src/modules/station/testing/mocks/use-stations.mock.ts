import { ref } from 'vue';
import type { Station } from '../../station.type.ts';
import { stationsFixture } from '../fixtures/stations.fixture.ts';

export const mockStations = ref<Station[]>([...stationsFixture]);
export const mockIsLoading = ref<boolean>(false);
export const mockError = ref<unknown>(null);
export const mockLastFetchedAt = ref<Date | null>(null);
export const mockOriginCoords = ref(null);

export const mockLoadStations = vi.fn(async () => {});
export const mockSetOriginCoords = vi.fn();

export function resetStationsMock(): void {
  mockStations.value = [...stationsFixture];
  mockIsLoading.value = false;
  mockError.value = null;
  mockLastFetchedAt.value = null;
  mockOriginCoords.value = null;
  mockLoadStations.mockClear();
  mockSetOriginCoords.mockClear();
}

export const mockUseStations = vi.fn(() => ({
  stations: mockStations,
  isLoading: mockIsLoading,
  error: mockError,
  lastFetchedAt: mockLastFetchedAt,
  originCoords: mockOriginCoords,
  setOriginCoords: mockSetOriginCoords,
  loadStations: mockLoadStations,
}));
