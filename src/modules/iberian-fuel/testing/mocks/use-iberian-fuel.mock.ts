import { ref } from 'vue';
import type { IfcStation } from '../../iberian-fuel.type.ts';
import { ifcStationsFixture } from '../fixtures/ifc-stations.fixture.ts';

export const mockIfcStations = ref<IfcStation[]>([...ifcStationsFixture]);
export const mockIsLoading = ref<boolean>(false);
export const mockError = ref<string | null>(null);
export const mockLastFetchedAt = ref<Date | null>(null);

export const mockFetchStations = vi.fn(async () => {});

export function resetIberianFuelMock(): void {
  mockIfcStations.value = [...ifcStationsFixture];
  mockIsLoading.value = false;
  mockError.value = null;
  mockLastFetchedAt.value = null;
  mockFetchStations.mockClear();
}

export const mockUseIberianFuel = vi.fn(() => ({
  stations: mockIfcStations,
  isLoading: mockIsLoading,
  error: mockError,
  lastFetchedAt: mockLastFetchedAt,
  fetchStations: mockFetchStations,
}));
