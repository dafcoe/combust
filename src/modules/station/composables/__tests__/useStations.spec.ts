import { isReadonly, nextTick } from 'vue';
import { useStations } from '../useStations.ts';
import { DEFAULT_APP_SETTINGS } from '@/modules/app-settings';
import { mockAppSettings, resetAppSettingsMock } from '@/modules/app-settings/index.testing.ts';
import {
  lisbonGeolocationCoordinatesFixture,
  madridGeolocationCoordinatesFixture,
  mockCoords,
  resetGeolocationMock,
} from '@/modules/geolocation/index.testing.ts';
import type { IfcStation } from '@/modules/iberian-fuel';
import {
  ifcStationBpLisbonFixture,
  ifcStationGalpLisbonFixture,
  ifcStationMoeveMadridFixture,
  ifcStationRepsolMadridFixture,
  ifcStationsFixture,
} from '@/modules/iberian-fuel/index.testing.ts';
import { cleanupScope, withScope } from '@/testing';

const {
  mockIfcStations,
  mockIsLoading,
  mockError,
  mockLastFetchedAt,
  mockFetchStations,
} = await vi.hoisted(async () => {
  const { ref } = await import('vue');

  return {
    mockIfcStations: ref<IfcStation[]>([]),
    mockIsLoading: ref<boolean>(false),
    mockError: ref<string | null>(null),
    mockLastFetchedAt: ref<Date | null>(null),
    mockFetchStations: vi.fn(),
  };
});

vi.mock('@/modules/iberian-fuel', async (importOriginal) => {
  const actual = await importOriginal<typeof import('@/modules/iberian-fuel')>();

  return {
    ...actual,
    useIberianFuel: () => ({
      stations: mockIfcStations,
      isLoading: mockIsLoading,
      error: mockError,
      lastFetchedAt: mockLastFetchedAt,
      fetchStations: mockFetchStations,
    }),
  };
});

vi.mock('@/modules/geolocation', async (importOriginal) => {
  const actual = await importOriginal<typeof import('@/modules/geolocation')>();
  const { mockUseGeolocation } = await import('@/modules/geolocation/index.testing.ts');

  return {
    ...actual,
    useGeolocation: mockUseGeolocation,
  };
});

vi.mock('@/modules/app-settings', async (importOriginal) => {
  const actual = await importOriginal<typeof import('@/modules/app-settings')>();
  const { mockUseAppSettings } = await import('@/modules/app-settings/index.testing.ts');

  return {
    ...actual,
    useAppSettings: mockUseAppSettings,
  };
});

describe('useStations', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    resetAppSettingsMock();
    resetGeolocationMock();
    mockIfcStations.value = [...ifcStationsFixture];
    mockIsLoading.value = false;
    mockError.value = null;
    mockLastFetchedAt.value = null;
    mockCoords.value = { ...lisbonGeolocationCoordinatesFixture };
    mockAppSettings.value = {
      ...DEFAULT_APP_SETTINGS,
      fuelType: 'diesel',
      radiusKm: 10,
      sortBy: 'distance',
    };

    const { setOriginCoords } = withScope(() => useStations());
    setOriginCoords(null);
  });

  afterEach(() => {
    cleanupScope();
  });

  describe('initial state and exposures', () => {
    it('initializes originCoords as null and readonly', () => {
      const { originCoords } = withScope(() => useStations());

      expect(originCoords.value).toBeNull();
      expect(isReadonly(originCoords)).toBe(true);
    });

    it('exposes state and actions from useIberianFuel', () => {
      mockIsLoading.value = true;
      mockError.value = 'Failed to load';
      const testDate = new Date('2026-10-18T00:00:00Z');
      mockLastFetchedAt.value = testDate;

      const {
        error,
        isLoading,
        lastFetchedAt,
        loadStations,
      } = withScope(() => useStations());

      expect(isLoading.value).toBe(true);
      expect(error.value).toBe('Failed to load');
      expect(lastFetchedAt.value).toBe(testDate);

      loadStations();
      expect(mockFetchStations).toHaveBeenCalledTimes(1);
    });
  });

  describe('originCoords management', () => {
    it('updates originCoords when setOriginCoords is called with coordinates', () => {
      const { originCoords, setOriginCoords } = withScope(() => useStations());

      setOriginCoords(madridGeolocationCoordinatesFixture);

      expect(originCoords.value).toEqual(madridGeolocationCoordinatesFixture);
    });

    it('clears originCoords when setOriginCoords is called with null', () => {
      const { originCoords, setOriginCoords } = withScope(() => useStations());

      setOriginCoords(madridGeolocationCoordinatesFixture);
      expect(originCoords.value).not.toBeNull();

      setOriginCoords(null);
      expect(originCoords.value).toBeNull();
    });

    it('clones coordinates when setting originCoords to prevent external mutations', () => {
      const { originCoords, setOriginCoords } = withScope(() => useStations());
      const coords = { latitude: 38.7, longitude: -9.1 };

      setOriginCoords(coords);
      coords.latitude = 40.0;

      expect(originCoords.value?.latitude).toBe(38.7);
    });
  });

  describe('stations filtering and sorting reactivity', () => {
    it('filters stations by selected fuel type and radius relative to default geolocation', () => {
      const { stations } = withScope(() => useStations());

      // In Lisbon with radius 10 km:
      // Galp Lisbon has diesel and is ~0.5 km away -> included
      // Repsol Madrid has diesel but is ~502 km away -> excluded
      // BP Lisbon has no diesel price -> excluded
      // Moeve Madrid has no diesel price -> excluded
      expect(stations.value).toHaveLength(1);
      expect(stations.value[0].id).toBe(ifcStationGalpLisbonFixture.id);
      expect(stations.value[0].distanceKm).toBeLessThan(1);
    });

    it('updates stations when fuelType changes in appSettings', async () => {
      const { stations } = withScope(() => useStations());

      expect(stations.value).toHaveLength(1);
      expect(stations.value[0].id).toBe(ifcStationGalpLisbonFixture.id);

      // Change fuelType to an unstocked fuel for all Lisbon stations
      mockAppSettings.value = {
        ...mockAppSettings.value,
        fuelType: 'lpg',
      };
      await nextTick();

      // Galp Lisbon also has LPG
      expect(stations.value).toHaveLength(1);
      expect(stations.value[0].prices.lpg).toBe(0.949);

      // Change to fuelType not present on any station in radius
      mockIfcStations.value = [ifcStationBpLisbonFixture, ifcStationMoeveMadridFixture];
      await nextTick();

      expect(stations.value).toEqual([]);
    });

    it('updates stations when radiusKm changes in appSettings', async () => {
      const { stations } = withScope(() => useStations());

      // Radius 10 km from Lisbon excludes Madrid
      expect(stations.value).toHaveLength(1);
      expect(stations.value.map((s) => s.id)).toEqual([ifcStationGalpLisbonFixture.id]);

      // Increase radius to 600 km to include Repsol Madrid
      mockAppSettings.value = {
        ...mockAppSettings.value,
        radiusKm: 600,
      };
      await nextTick();

      expect(stations.value).toHaveLength(2);
      expect(stations.value.map((s) => s.id)).toContain(ifcStationRepsolMadridFixture.id);
    });

    it('updates stations sort order when sortBy changes in appSettings', async () => {
      // Set radius to 600 km so both Galp Lisbon (diesel 1.619, ~0.5 km)
      // and Repsol Madrid (diesel 1.589, ~502 km) are included
      mockAppSettings.value = {
        ...mockAppSettings.value,
        radiusKm: 600,
        sortBy: 'distance',
      };
      await nextTick();

      const { stations } = withScope(() => useStations());

      // Sorted by distance: Galp (~0.5 km) first, Repsol (~502 km) second
      expect(stations.value.map((s) => s.id)).toEqual([
        ifcStationGalpLisbonFixture.id,
        ifcStationRepsolMadridFixture.id,
      ]);

      // Switch to sortBy 'price': Repsol (1.589) is cheaper than Galp (1.619)
      mockAppSettings.value = {
        ...mockAppSettings.value,
        sortBy: 'price',
      };
      await nextTick();

      expect(stations.value.map((s) => s.id)).toEqual([
        ifcStationRepsolMadridFixture.id,
        ifcStationGalpLisbonFixture.id,
      ]);
    });

    it('updates stations when custom originCoords is set', async () => {
      const { stations, setOriginCoords } = withScope(() => useStations());

      // Default origin is Lisbon: Galp is included, Repsol is excluded
      expect(stations.value.map((s) => s.id)).toEqual([ifcStationGalpLisbonFixture.id]);

      // Change origin to Madrid: Repsol is included (~0.4 km), Galp is excluded (~502 km)
      setOriginCoords(madridGeolocationCoordinatesFixture);
      await nextTick();

      expect(stations.value.map((s) => s.id)).toEqual([ifcStationRepsolMadridFixture.id]);
      expect(stations.value[0].distanceKm).toBeLessThan(1);
    });

    it('falls back to geolocationCoords when originCoords is cleared to null', async () => {
      const { stations, setOriginCoords } = withScope(() => useStations());

      setOriginCoords(madridGeolocationCoordinatesFixture);
      await nextTick();
      expect(stations.value.map((s) => s.id)).toEqual([ifcStationRepsolMadridFixture.id]);

      // Clear originCoords -> falls back to Lisbon geolocation
      setOriginCoords(null);
      await nextTick();
      expect(stations.value.map((s) => s.id)).toEqual([ifcStationGalpLisbonFixture.id]);
    });

    it('updates stations when geolocationCoords changes while originCoords is null', async () => {
      const { stations } = withScope(() => useStations());

      expect(stations.value.map((s) => s.id)).toEqual([ifcStationGalpLisbonFixture.id]);

      // Move geolocation to Madrid
      mockCoords.value = { ...madridGeolocationCoordinatesFixture };
      await nextTick();

      expect(stations.value.map((s) => s.id)).toEqual([ifcStationRepsolMadridFixture.id]);
    });

    it('does not use geolocationCoords when custom originCoords is active', async () => {
      const { stations, setOriginCoords } = withScope(() => useStations());

      // Pin origin to Madrid
      setOriginCoords(madridGeolocationCoordinatesFixture);
      await nextTick();
      expect(stations.value.map((s) => s.id)).toEqual([ifcStationRepsolMadridFixture.id]);

      // Geolocation changes to Lisbon, but custom origin (Madrid) takes precedence
      mockCoords.value = { ...lisbonGeolocationCoordinatesFixture };
      await nextTick();

      expect(stations.value.map((s) => s.id)).toEqual([ifcStationRepsolMadridFixture.id]);
    });

    it('updates stations when ifcStations receives new data', async () => {
      const { stations } = withScope(() => useStations());

      expect(stations.value).toHaveLength(1);

      mockIfcStations.value = [];
      await nextTick();

      expect(stations.value).toEqual([]);
    });
  });
});
