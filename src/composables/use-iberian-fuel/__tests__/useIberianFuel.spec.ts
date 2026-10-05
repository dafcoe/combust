import {
  resetIberianFuelState,
  useIberianFuel,
} from '../useIberianFuel.ts';
import {
  ifcStationsFixture,
  stationGalpLisboaFixture,
  stationRepsolMadridFixture,
} from '@/fixtures';
import { IberianFuelClient, type Station } from '@/types';

vi.mock('@/types', async (importOriginal) => {
  const actual = await importOriginal<typeof import('@/types')>();

  return {
    ...actual,
    IberianFuelClient: vi.fn(),
  };
});

const MockedIberianFuelClient = vi.mocked(IberianFuelClient);

export const stationsFixture: Station[] = [
  stationGalpLisboaFixture,
  stationRepsolMadridFixture,
];

describe('useIberianFuel', () => {
  beforeEach(() => {
    vi.restoreAllMocks();
    resetIberianFuelState();
  });

  it('should initialize with default empty state', () => {
    // Assemble
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
    expect(error.value).toBe('Failed to fetch iberian fuel client stations');
    expect(stations.value).toEqual([]);
    expect(lastFetchedAt.value).toBeNull();
  });

  it('should not trigger a new fetch if already loading', async () => {
    // Assemble
    let resolveFirstFetch: (value: typeof ifcStationsFixture) => void = () => {};
    const firstFetchPromise = new Promise<typeof ifcStationsFixture>((resolve) => {
      resolveFirstFetch = resolve;
    });
    const getStationsMock = vi.fn().mockReturnValue(firstFetchPromise);
    MockedIberianFuelClient.prototype.getStations = getStationsMock;

    const { isLoading, fetchStations } = useIberianFuel();

    // Act
    const initialCall = fetchStations();
    expect(isLoading.value).toBe(true);

    // Second call while first is still pending
    const secondCall = fetchStations();

    // Assert — getStations should only have been called once
    expect(getStationsMock).toHaveBeenCalledTimes(1);

    // Complete the first call
    resolveFirstFetch(ifcStationsFixture);
    await Promise.all([initialCall, secondCall]);
    expect(isLoading.value).toBe(false);
  });
});
