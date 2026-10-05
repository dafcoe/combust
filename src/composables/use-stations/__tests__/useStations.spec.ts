import {
  resetStationsState,
  useStations,
} from '../useStations.ts';
import {
  stationsFixture,
  stationBpLisboaFixture,
  stationGalpLisboaFixture,
  stationRepsolMadridFixture,
} from './useStations.fixture.ts';
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
    const { visibleStations } = useStations();

    // Assert — Galp is at exact user location (0 km), BP is ~0.93 km away
    const galp = visibleStations.value.find((s) => s.id === stationGalpLisboaFixture.id);
    const bp = visibleStations.value.find((s) => s.id === stationBpLisboaFixture.id);

    expect(galp?.distanceKm).toBe(0);
    expect(bp?.distanceKm).toBeGreaterThan(0.9);
    expect(bp?.distanceKm).toBeLessThan(1.0);
  });

  it('should update distances and filter accordingly when custom origin location is set', () => {
    // Assemble
    const { visibleStations, setOriginLocation, originLocation } = useStations();
    const madridCoords = { latitude: 40.4200, longitude: -3.7050 };
    mockFuelType.value = 'gasoline98';
    mockRadiusKm.value = 50;

    // Act — set origin to Madrid
    setOriginLocation(madridCoords);

    // Assert — Repsol Madrid is now at 0 km and within the 50 km radius
    expect(originLocation.value).toEqual(madridCoords);
    expect(visibleStations.value.length).toBe(1);
    const repsol = visibleStations.value[0];
    expect(repsol.id).toBe(stationRepsolMadridFixture.id);
    expect(repsol.distanceKm).toBe(0);
  });

  it('should filter stations by radius', () => {
    // Assemble — Lisboa coords, radius 10 km
    mockRadiusKm.value = 10;
    const { visibleStations } = useStations();

    // Assert — Repsol Madrid (>490 km) should be excluded
    const repsol = visibleStations.value.find((s) => s.id === stationRepsolMadridFixture.id);
    expect(repsol).toBeUndefined();
    expect(visibleStations.value.length).toBe(2);
  });

  it('should filter stations by fuel type availability', () => {
    // Assemble — search for gasoline98 within a large radius
    mockRadiusKm.value = 600;
    mockFuelType.value = 'gasoline98';
    const { visibleStations } = useStations();

    // Assert — only Repsol Madrid has gasoline98
    expect(visibleStations.value.length).toBe(1);
    expect(visibleStations.value[0].id).toBe(stationRepsolMadridFixture.id);
  });

  it('should sort visible stations by price (ascending)', () => {
    // Assemble — both Galp (1.759) and BP (1.829) have gasoline95 and are within 10 km
    mockFuelType.value = 'gasoline95';
    mockSortBy.value = 'price';
    const { visibleStations } = useStations();

    // Assert — Galp should be first because it is cheaper
    expect(visibleStations.value.length).toBe(2);
    expect(visibleStations.value[0].id).toBe(stationGalpLisboaFixture.id);
    expect(visibleStations.value[1].id).toBe(stationBpLisboaFixture.id);
  });

  it('should sort visible stations by distance (ascending)', () => {
    // Assemble — user at Galp Lisboa (0 km), BP is ~0.93 km away
    mockFuelType.value = 'gasoline95';
    mockSortBy.value = 'distance';
    const { visibleStations } = useStations();

    // Assert — Galp (0 km) before BP (~0.93 km)
    expect(visibleStations.value.length).toBe(2);
    expect(visibleStations.value[0].id).toBe(stationGalpLisboaFixture.id);
    expect(visibleStations.value[1].id).toBe(stationBpLisboaFixture.id);
  });

  it('should reactively update visible stations when settings change', () => {
    // Assemble
    mockRadiusKm.value = 10;
    mockFuelType.value = 'gasoline95';
    const { visibleStations } = useStations();

    expect(visibleStations.value.length).toBe(2);

    // Act — change fuel type to LGP (none in Lisbon within 10 km)
    mockFuelType.value = 'lgp';

    // Assert
    expect(visibleStations.value.length).toBe(0);

    // Act — expand radius to 600 km (Madrid has LGP)
    mockRadiusKm.value = 600;

    // Assert
    expect(visibleStations.value.length).toBe(1);
    expect(visibleStations.value[0].id).toBe(stationRepsolMadridFixture.id);
  });

  it('should reset custom origin when resetStationsState is called', () => {
    // Assemble
    const { setOriginLocation, originLocation } = useStations();
    setOriginLocation({ latitude: 40.0, longitude: -3.0 });
    expect(originLocation.value).toEqual({ latitude: 40.0, longitude: -3.0 });

    // Act
    resetStationsState();

    // Assert — falls back to mockCoords
    expect(originLocation.value).toEqual(mockCoords.value);
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
