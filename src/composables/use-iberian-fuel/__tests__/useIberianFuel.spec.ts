import {
  resetIberianFuelState,
  useIberianFuel,
} from '../useIberianFuel.ts';
import {
  ifcStationsFixture,
  ifcStationsWithBpFixture,
  stationGalpLisboaFixture, stationRepsolMadridFixture,
  stationsFixture,
} from './useIberianFuel.fixture.ts';
import { IberianFuelClient } from '@/types';

const { mockFuelType, mockRadiusKm, mockSortBy } = await vi.hoisted(async () => {
  const { ref: vueRef } = await import('vue');

  return {
    mockFuelType: vueRef<string>('gasoline95'),
    mockRadiusKm: vueRef<number>(10),
    mockSortBy: vueRef<string>('price'),
  };
});

vi.mock('@/composables/use-user-settings/useUserSettings', () => ({
  useUserSettings: () => ({
    fuelType: mockFuelType,
    radiusKm: mockRadiusKm,
    sortBy: mockSortBy,
  }),
}));

vi.mock('@/types', async (importOriginal) => {
  const actual = await importOriginal<typeof import('@/types')>();

  return {
    ...actual,
    IberianFuelClient: vi.fn(),
  };
});

const MockedIberianFuelClient = vi.mocked(IberianFuelClient);

describe('useIberianFuel', () => {
  beforeEach(() => {
    vi.restoreAllMocks();
    resetIberianFuelState();
    mockFuelType.value = 'gasoline95';
    mockRadiusKm.value = 10;
    mockSortBy.value = 'price';
  });

  it('should initialize with default empty state', () => {
    // Assemble & Act
    const { stations, isLoading, error, lastFetchedAt } = useIberianFuel();

    // Assert
    expect(stations.value).toEqual([]);
    expect(isLoading.value).toBe(false);
    expect(error.value).toBeNull();
    expect(lastFetchedAt.value).toBeNull();
  });

  it('should fetch and map stations successfully', async () => {
    // Assemble
    MockedIberianFuelClient.prototype.getStations = vi.fn().mockResolvedValue(ifcStationsFixture);
    const { stations, isLoading, error, lastFetchedAt, fetchStations } = useIberianFuel();

    // Act
    const fetchPromise = fetchStations();
    expect(isLoading.value).toBe(true);
    await fetchPromise;

    // Assert
    expect(isLoading.value).toBe(false);
    expect(error.value).toBeNull();
    expect(stations.value).toEqual(stationsFixture);
    expect(lastFetchedAt.value).toBeInstanceOf(Date);
  });

  it('should handle error when fetching stations fails', async () => {
    // Assemble
    MockedIberianFuelClient.prototype.getStations = vi.fn().mockRejectedValue(new Error('Network error'));
    const { stations, isLoading, error, lastFetchedAt, fetchStations } = useIberianFuel();

    // Act
    await fetchStations();

    // Assert
    expect(isLoading.value).toBe(false);
    expect(error.value).toBe('Network error');
    expect(stations.value).toEqual([]);
    expect(lastFetchedAt.value).toBeNull();
  });

  it('should handle non-Error throw gracefully', async () => {
    // Assemble
    MockedIberianFuelClient.prototype.getStations = vi.fn().mockRejectedValue('Unknown failure');
    const { stations, isLoading, error, lastFetchedAt, fetchStations } = useIberianFuel();

    // Act
    await fetchStations();

    // Assert
    expect(isLoading.value).toBe(false);
    expect(error.value).toBe('Failed to fetch fuel iberian fuel client stations');
    expect(stations.value).toEqual([]);
    expect(lastFetchedAt.value).toBeNull();
  });

  it('should compute distances from a given origin for all stations', async () => {
    // Assemble
    MockedIberianFuelClient.prototype.getStations = vi.fn().mockResolvedValue(ifcStationsFixture);
    const { stations, fetchStations, updateStationsDistance } = useIberianFuel();
    const stationGalpLisboaLocation = stationGalpLisboaFixture.location;

    // Act
    await fetchStations();
    updateStationsDistance(stationGalpLisboaLocation);

    // Assert - Galp Lisboa should be 0 km (same coords)
    expect(stations.value[0].distanceKm).toBe(0);

    // Assert - Repsol Madrid should be ~500 km from Lisbon
    expect(stations.value[1].distanceKm).toBeGreaterThan(490);
    expect(stations.value[1].distanceKm).toBeLessThan(510);
  });

  describe('visibleStations', () => {
    it('should exclude stations outside the search radius', async () => {
      // Assemble
      MockedIberianFuelClient.prototype.getStations = vi.fn().mockResolvedValue(ifcStationsFixture);
      const { visibleStations, fetchStations, updateStationsDistance } = useIberianFuel();

      // Act
      await fetchStations();
      updateStationsDistance(stationGalpLisboaFixture.location);
      mockRadiusKm.value = 10;

      // Assert
      expect(visibleStations.value.length).toBe(1);
      expect(visibleStations.value[0]).toEqual(expect.objectContaining(stationGalpLisboaFixture));
    });

    it('should include stations when radius is large enough', async () => {
      // Assemble
      MockedIberianFuelClient.prototype.getStations = vi.fn().mockResolvedValue(ifcStationsFixture);
      const { visibleStations, fetchStations, updateStationsDistance } = useIberianFuel();

      // Act
      await fetchStations();
      updateStationsDistance(stationGalpLisboaFixture.location);
      mockRadiusKm.value = 600;
      mockFuelType.value = 'lgp';

      // Assert
      expect(visibleStations.value.length).toBe(1);
      expect(visibleStations.value[0]).toEqual(expect.objectContaining(stationRepsolMadridFixture));
    });

    it('should exclude stations without a price for the selected fuel type', async () => {
      // Assemble
      MockedIberianFuelClient.prototype.getStations = vi.fn().mockResolvedValue(ifcStationsFixture);
      const { visibleStations, fetchStations, updateStationsDistance } = useIberianFuel();

      // Act
      await fetchStations();
      updateStationsDistance(stationGalpLisboaFixture.location);
      mockRadiusKm.value = 10;
      mockFuelType.value = 'gasoline98';

      // Assert
      expect(visibleStations.value).toEqual([]);
    });

    it('should sort by price (ascending) when sortBy is "price"', async () => {
      // Assemble
      MockedIberianFuelClient.prototype.getStations = vi.fn().mockResolvedValue(ifcStationsWithBpFixture);
      const { visibleStations, fetchStations, updateStationsDistance } = useIberianFuel();

      // Act
      await fetchStations();
      updateStationsDistance({ latitude: 38.7100, longitude: -9.1393 });
      mockFuelType.value = 'gasoline95';
      mockRadiusKm.value = 10;
      mockSortBy.value = 'price';

      // Assert
      expect(visibleStations.value.length).toBe(2);
      expect(visibleStations.value[0].id).toBe('PT-1234');
      expect(visibleStations.value[1].id).toBe('PT-9999');
    });

    it('should sort by distance (ascending) when sortBy is "distance"', async () => {
      // Assemble
      MockedIberianFuelClient.prototype.getStations = vi.fn().mockResolvedValue(ifcStationsWithBpFixture);
      const { visibleStations, fetchStations, updateStationsDistance } = useIberianFuel();

      // Act
      await fetchStations();
      updateStationsDistance(stationGalpLisboaFixture.location);
      mockFuelType.value = 'gasoline95';
      mockRadiusKm.value = 10;
      mockSortBy.value = 'distance';

      // Assert
      expect(visibleStations.value.length).toBe(2);
      expect(visibleStations.value[0].id).toBe('PT-1234');
      expect(visibleStations.value[1].id).toBe('PT-9999');
    });

    it('should return empty when no stations have distances set', async () => {
      // Assemble
      MockedIberianFuelClient.prototype.getStations = vi.fn().mockResolvedValue(ifcStationsFixture);
      const { visibleStations, fetchStations } = useIberianFuel();

      // Act
      await fetchStations();

      // Assert
      expect(visibleStations.value).toEqual([]);
    });

    it('should reactively update when settings change', async () => {
      // Assemble
      MockedIberianFuelClient.prototype.getStations = vi.fn().mockResolvedValue(ifcStationsFixture);
      const { visibleStations, fetchStations, updateStationsDistance } = useIberianFuel();

      // Act
      await fetchStations();
      updateStationsDistance(stationGalpLisboaFixture.location);
      mockRadiusKm.value = 10;
      mockFuelType.value = 'gasoline95';

      // Assert - only Galp Lisboa has gasoline95 within 10 km
      expect(visibleStations.value.length).toBe(1);

      // Act
      mockFuelType.value = 'lgp';

      // Assert - Galp Lisboa has no lgp
      expect(visibleStations.value.length).toBe(0);

      // Act
      mockRadiusKm.value = 600;

      // Assert - Repsol Madrid has lpg
      expect(visibleStations.value.length).toBe(1);
    });
  });
});

