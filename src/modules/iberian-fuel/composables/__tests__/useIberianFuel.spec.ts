import {
  isReadonly,
  type Ref,
  toRaw,
} from 'vue';
import type { IfcStation } from '../../iberian-fuel.type.ts';
import { ifcStationsFixture } from '../../testing/fixtures/ifc-stations.fixture.ts';
import { useIberianFuel } from '../useIberianFuel.ts';
import { cleanupScope, withScope } from '@/testing';

const { mockGetStations } = vi.hoisted(() => ({
  mockGetStations: vi.fn(),
}));

vi.mock('@dafcoe/iberian-fuel-client', async (importOriginal) => {
  const actual = await importOriginal<typeof import('@dafcoe/iberian-fuel-client')>();

  return {
    ...actual,
    IberianFuelClient: class {
      getStations = mockGetStations;
    },
  };
});

describe('useIberianFuel', () => {
  function resetState(): void {
    const {
      error,
      isLoading,
      lastFetchedAt,
      stations,
    } = withScope(() => useIberianFuel());

    (toRaw(stations) as Ref<IfcStation[]>).value = [];
    (toRaw(isLoading) as Ref<boolean>).value = false;
    (toRaw(error) as Ref<string | null>).value = null;
    (toRaw(lastFetchedAt) as Ref<Date | null>).value = null;
  }

  beforeEach(() => {
    resetState();
    mockGetStations.mockReset();
  });

  afterEach(() => {
    cleanupScope();
    resetState();
    mockGetStations.mockReset();
  });

  describe('initial state and readonly exposures', () => {
    it('initializes with default state values', () => {
      const {
        error,
        isLoading,
        lastFetchedAt,
        stations,
      } = withScope(() => useIberianFuel());

      expect(stations.value).toEqual([]);
      expect(isLoading.value).toBe(false);
      expect(error.value).toBeNull();
      expect(lastFetchedAt.value).toBeNull();
    });

    it('exposes state refs as readonly', () => {
      const {
        error,
        isLoading,
        lastFetchedAt,
        stations,
      } = withScope(() => useIberianFuel());

      expect(isReadonly(stations)).toBe(true);
      expect(isReadonly(isLoading)).toBe(true);
      expect(isReadonly(error)).toBe(true);
      expect(isReadonly(lastFetchedAt)).toBe(true);
    });
  });

  describe('fetchStations - success', () => {
    it('fetches stations and updates state correctly', async () => {
      mockGetStations.mockResolvedValueOnce(ifcStationsFixture);

      const {
        error,
        fetchStations,
        isLoading,
        lastFetchedAt,
        stations,
      } = withScope(() => useIberianFuel());

      const beforeFetch = new Date();
      await fetchStations();
      const afterFetch = new Date();

      expect(mockGetStations).toHaveBeenCalledTimes(1);
      expect(stations.value).toEqual(ifcStationsFixture);
      expect(isLoading.value).toBe(false);
      expect(error.value).toBeNull();
      expect(lastFetchedAt.value).not.toBeNull();
      expect(lastFetchedAt.value!.getTime()).toBeGreaterThanOrEqual(beforeFetch.getTime());
      expect(lastFetchedAt.value!.getTime()).toBeLessThanOrEqual(afterFetch.getTime());
    });

    it('sets isLoading to true while request is in flight and false after completion', async () => {
      let resolvePromise: (value: IfcStation[]) => void = () => {};
      const pendingPromise = new Promise<IfcStation[]>((resolve) => {
        resolvePromise = resolve;
      });
      mockGetStations.mockReturnValueOnce(pendingPromise);

      const { fetchStations, isLoading } = withScope(() => useIberianFuel());

      expect(isLoading.value).toBe(false);

      const fetchPromise = fetchStations();
      expect(isLoading.value).toBe(true);

      resolvePromise(ifcStationsFixture);
      await fetchPromise;

      expect(isLoading.value).toBe(false);
    });

    it('clears previous error when a new fetch succeeds', async () => {
      mockGetStations.mockRejectedValueOnce(new Error('Previous failure'));

      const { error, fetchStations } = withScope(() => useIberianFuel());

      await fetchStations();
      expect(error.value).toBe('Previous failure');

      mockGetStations.mockResolvedValueOnce(ifcStationsFixture);
      await fetchStations();

      expect(error.value).toBeNull();
    });
  });

  describe('fetchStations - concurrency guard', () => {
    it('does not initiate a second request if one is already in flight', async () => {
      let resolvePromise: (value: IfcStation[]) => void = () => {};
      const pendingPromise = new Promise<IfcStation[]>((resolve) => {
        resolvePromise = resolve;
      });
      mockGetStations.mockReturnValueOnce(pendingPromise);

      const { fetchStations } = withScope(() => useIberianFuel());

      const firstCall = fetchStations();
      const secondCall = fetchStations();

      expect(mockGetStations).toHaveBeenCalledTimes(1);

      resolvePromise(ifcStationsFixture);
      await Promise.all([firstCall, secondCall]);

      expect(mockGetStations).toHaveBeenCalledTimes(1);
    });
  });

  describe('fetchStations - error handling', () => {
    it('captures Error message when fetch fails with an Error instance', async () => {
      mockGetStations.mockRejectedValueOnce(new Error('Connection timeout'));

      const {
        error,
        fetchStations,
        isLoading,
        lastFetchedAt,
        stations,
      } = withScope(() => useIberianFuel());

      await fetchStations();

      expect(error.value).toBe('Connection timeout');
      expect(isLoading.value).toBe(false);
      expect(stations.value).toEqual([]);
      expect(lastFetchedAt.value).toBeNull();
    });

    it('captures fallback message when fetch fails with a non-Error value', async () => {
      mockGetStations.mockRejectedValueOnce('Unexpected string error');

      const {
        error,
        fetchStations,
        isLoading,
        lastFetchedAt,
      } = withScope(() => useIberianFuel());

      await fetchStations();

      expect(error.value).toBe('Failed to fetch iberian fuel client stations');
      expect(isLoading.value).toBe(false);
      expect(lastFetchedAt.value).toBeNull();
    });
  });

  describe('singleton shared state', () => {
    it('shares reactive state across multiple composable calls', async () => {
      mockGetStations.mockResolvedValueOnce(ifcStationsFixture);

      const instance1 = withScope(() => useIberianFuel());
      const instance2 = withScope(() => useIberianFuel());

      expect(instance2.stations.value).toEqual([]);

      await instance1.fetchStations();

      expect(instance2.stations.value).toEqual(ifcStationsFixture);
      expect(instance2.lastFetchedAt.value).toEqual(instance1.lastFetchedAt.value);
    });
  });
});
