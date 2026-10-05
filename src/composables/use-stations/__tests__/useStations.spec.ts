import {
  resetStationsState,
  useStations,
} from '../useStations.ts';
import {
  stationBpLisboaFixture,
  stationGalpLisboaFixture,
  stationRepsolMadridFixture,
} from '@/fixtures';
import type { FuelType, GeolocationCoordinates, SortMode, Station } from '@/types';

const {
  mockCoords,
  mockRawStations,
  mockFuelType,
  mockRadiusKm,
  mockSortBy,
  mockIsLoading,
  mockError,
  mockLastFetchedAt,
  mockFetchStations,
} = await vi.hoisted(async () => {
  const { ref: vueRef } = await import('vue');

  return {
    mockCoords: vueRef<GeolocationCoordinates>({ latitude: 38.7223, longitude: -9.1393 }),
    mockRawStations: vueRef<Station[]>([]),
    mockFuelType: vueRef<FuelType>('gasoline95'),
    mockRadiusKm: vueRef<number>(10),
    mockSortBy: vueRef<SortMode>('price'),
    mockIsLoading: vueRef<boolean>(false),
    mockError: vueRef<string | null>(null),
    mockLastFetchedAt: vueRef<Date | null>(null),
    mockFetchStations: vi.fn().mockResolvedValue(undefined),
  };
});

vi.mock('@/composables/use-geolocation/useGeolocation', () => ({
  useGeolocation: () => ({
    coords: mockCoords,
  }),
}));

vi.mock('@/composables/use-iberian-fuel/useIberianFuel', () => ({
  useIberianFuel: () => ({
    stations: mockRawStations,
    isLoading: mockIsLoading,
    error: mockError,
    lastFetchedAt: mockLastFetchedAt,
    fetchStations: mockFetchStations,
  }),
}));

vi.mock('@/composables/use-user-settings/useUserSettings', () => ({
  useUserSettings: () => ({
    fuelType: mockFuelType,
    radiusKm: mockRadiusKm,
    sortBy: mockSortBy,
  }),
}));

export const stationsFixture: Station[] = [
  stationGalpLisboaFixture,
  stationBpLisboaFixture,
  stationRepsolMadridFixture,
];

describe('useStations', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    resetStationsState();
    mockCoords.value = { latitude: 38.7223, longitude: -9.1393 };
    mockRawStations.value = [...stationsFixture];
    mockFuelType.value = 'gasoline95';
    mockRadiusKm.value = 10;
    mockSortBy.value = 'price';
    mockIsLoading.value = false;
    mockError.value = null;
    mockLastFetchedAt.value = null;
  });

  it('should compute distanceKm on visible stations relative to geolocation coordinates', () => {
    // Assemble — radius 600 km so all stations with matching fuel are visible
    mockRadiusKm.value = 600;
    mockFuelType.value = 'diesel';
    const { stations } = useStations();

    // Assert — Galp is at exact user location (0 km), BP is ~0.93 km away
    const galp = stations.value.find((s) => s.id === stationGalpLisboaFixture.id);
    const bp = stations.value.find((s) => s.id === stationBpLisboaFixture.id);

    expect(galp?.distanceKm).toBe(0);
    expect(bp?.distanceKm).toBeGreaterThan(0.9);
    expect(bp?.distanceKm).toBeLessThan(1.0);
  });

  it('should update distances and filter accordingly when custom origin location is set', () => {
    // Assemble
    const { stations, setOriginLocation } = useStations();
    const madridCoords = { latitude: 40.4200, longitude: -3.7050 };
    mockFuelType.value = 'gasoline98';
    mockRadiusKm.value = 50;

    // Act — set origin to Madrid
    setOriginLocation(madridCoords);

    // Assert — Repsol Madrid is now at 0 km and within the 50 km radius
    expect(stations.value.length).toBe(1);
    const repsol = stations.value[0];
    expect(repsol.id).toBe(stationRepsolMadridFixture.id);
    expect(repsol.distanceKm).toBe(0);
  });

  it('should filter stations by radius', () => {
    // Assemble — Lisboa coords, radius 10 km
    mockRadiusKm.value = 10;
    const { stations } = useStations();

    // Assert — Repsol Madrid (>490 km) should be excluded
    const repsol = stations.value.find((s) => s.id === stationRepsolMadridFixture.id);
    expect(repsol).toBeUndefined();
    expect(stations.value.length).toBe(2);
  });

  it('should filter stations by fuel type availability', () => {
    // Assemble — search for gasoline98 within a large radius
    mockRadiusKm.value = 600;
    mockFuelType.value = 'gasoline98';
    const { stations } = useStations();

    // Assert — only Repsol Madrid has gasoline98
    expect(stations.value.length).toBe(1);
    expect(stations.value[0].id).toBe(stationRepsolMadridFixture.id);
  });

  it('should sort visible stations by price (ascending)', () => {
    // Assemble — both Galp (1.759) and BP (1.829) have gasoline95 and are within 10 km
    mockFuelType.value = 'gasoline95';
    mockSortBy.value = 'price';
    const { stations } = useStations();

    // Assert — Galp should be first because it is cheaper
    expect(stations.value.length).toBe(2);
    expect(stations.value[0].id).toBe(stationGalpLisboaFixture.id);
    expect(stations.value[1].id).toBe(stationBpLisboaFixture.id);
  });

  it('should sort visible stations by distance (ascending)', () => {
    // Assemble — user at Galp Lisboa (0 km), BP is ~0.93 km away
    mockFuelType.value = 'gasoline95';
    mockSortBy.value = 'distance';
    const { stations } = useStations();

    // Assert — Galp (0 km) before BP (~0.93 km)
    expect(stations.value.length).toBe(2);
    expect(stations.value[0].id).toBe(stationGalpLisboaFixture.id);
    expect(stations.value[1].id).toBe(stationBpLisboaFixture.id);
  });

  it('should reactively update visible stations when settings change', () => {
    // Assemble
    mockRadiusKm.value = 10;
    mockFuelType.value = 'gasoline95';
    const { stations } = useStations();

    expect(stations.value.length).toBe(2);

    // Act — change fuel type to LPG (none in Lisbon within 10 km)
    mockFuelType.value = 'lpg';

    // Assert
    expect(stations.value.length).toBe(0);

    // Act — expand radius to 600 km (Madrid has LPG)
    mockRadiusKm.value = 600;

    // Assert
    expect(stations.value.length).toBe(1);
    expect(stations.value[0].id).toBe(stationRepsolMadridFixture.id);
  });

  it('should reset custom origin when resetStationsState is called', () => {
    // Assemble — set origin to Madrid and look for gasoline98 within 50 km (only in Madrid)
    const { stations, setOriginLocation } = useStations();
    mockFuelType.value = 'gasoline98';
    mockRadiusKm.value = 50;
    setOriginLocation({ latitude: 40.4200, longitude: -3.7050 });
    expect(stations.value.length).toBe(1);

    // Act — reset custom origin back to default geolocation (Lisbon)
    resetStationsState();

    // Assert — Repsol Madrid is now ~500 km away, so no gasoline98 within 50 km of Lisbon
    expect(stations.value.length).toBe(0);
  });

  it('should forward API state and fetchStations from useIberianFuel', () => {
    // Assemble & Act
    const { isLoading, error, lastFetchedAt, fetchStations } = useStations();

    // Assert
    expect(isLoading.value).toBe(false);
    expect(error.value).toBeNull();
    expect(lastFetchedAt.value).toBeNull();
    fetchStations();
    expect(mockFetchStations).toHaveBeenCalledTimes(1);
  });
});
