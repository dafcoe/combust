import { useInteractiveMap } from '../useInteractiveMap.ts';
import { useInteractiveMapPositioner } from '../useInteractiveMapPositioner.ts';
import { resetAppSettingsMock } from '@/modules/app-settings/index.testing.ts';
import {
  mockCoords,
  mockGetCurrentPosition,
  resetGeolocationMock,
} from '@/modules/geolocation/index.testing.ts';
import {
  cleanupScope,
  mockFlyTo,
  resetMaplibreGlMock,
  withScope,
} from '@/testing';

vi.mock('maplibre-gl', () => import('@/testing/mocks/maplibre-gl.mock'));

vi.mock('@/modules/app-settings', async (importOriginal) => {
  const actual = await importOriginal<typeof import('@/modules/app-settings')>();
  const { mockUseAppSettings } = await import('@/modules/app-settings/index.testing.ts');

  return {
    ...actual,
    useAppSettings: mockUseAppSettings,
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

describe('useInteractiveMapPositioner', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    resetMaplibreGlMock();
    resetGeolocationMock();
    resetAppSettingsMock();
  });

  afterEach(() => {
    withScope(() => {
      const { removeMap } = useInteractiveMap();
      removeMap();
    });
    cleanupScope();
  });

  describe('flyToCoordinates', () => {
    it('centers map on provided coordinates when map is initialized', () => {
      withScope(() => {
        const { initMap } = useInteractiveMap();
        initMap(document.createElement('div'));
      });

      const { flyToCoordinates } = withScope(() => useInteractiveMapPositioner());

      flyToCoordinates({ latitude: 38.7223, longitude: -9.1393 });

      expect(mockFlyTo).toHaveBeenCalledTimes(1);
      expect(mockFlyTo).toHaveBeenCalledWith({
        center: [-9.1393, 38.7223],
        essential: true,
      });
    });

    it('safely does nothing when map is not initialized', () => {
      const { flyToCoordinates } = withScope(() => useInteractiveMapPositioner());

      expect(() => {
        flyToCoordinates({ latitude: 38.7223, longitude: -9.1393 });
      }).not.toThrow();

      expect(mockFlyTo).not.toHaveBeenCalled();
    });
  });

  describe('flyToUserLocation', () => {
    it('requests user position and centers map on retrieved coordinates', async () => {
      withScope(() => {
        const { initMap } = useInteractiveMap();
        initMap(document.createElement('div'));
      });

      mockCoords.value = { latitude: 41.1579, longitude: -8.6291 };

      const { flyToUserLocation } = withScope(() => useInteractiveMapPositioner());

      await flyToUserLocation();

      expect(mockGetCurrentPosition).toHaveBeenCalledTimes(1);
      expect(mockFlyTo).toHaveBeenCalledTimes(1);
      expect(mockFlyTo).toHaveBeenCalledWith({
        center: [-8.6291, 41.1579],
        essential: true,
      });
    });

    it('uses updated coordinates when getCurrentPosition resolves with new values', async () => {
      withScope(() => {
        const { initMap } = useInteractiveMap();
        initMap(document.createElement('div'));
      });

      mockGetCurrentPosition.mockImplementationOnce(async () => {
        mockCoords.value = { latitude: 37.0194, longitude: -7.9322 };
      });

      const { flyToUserLocation } = withScope(() => useInteractiveMapPositioner());

      await flyToUserLocation();

      expect(mockGetCurrentPosition).toHaveBeenCalledTimes(1);
      expect(mockFlyTo).toHaveBeenCalledWith({
        center: [-7.9322, 37.0194],
        essential: true,
      });
    });

    it('safely handles missing map when flyToUserLocation is called', async () => {
      const { flyToUserLocation } = withScope(() => useInteractiveMapPositioner());

      await expect(flyToUserLocation()).resolves.toBeUndefined();
      expect(mockGetCurrentPosition).toHaveBeenCalledTimes(1);
      expect(mockFlyTo).not.toHaveBeenCalled();
    });
  });
});
