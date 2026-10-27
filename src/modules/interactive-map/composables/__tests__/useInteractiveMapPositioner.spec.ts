import { nextTick } from 'vue';
import { useInteractiveMap } from '../useInteractiveMap.ts';
import { useInteractiveMapPositioner } from '../useInteractiveMapPositioner.ts';
import { resetAppSettingsMock } from '@/modules/app-settings/index.testing.ts';
import {
  mockCoords,
  mockGetCurrentPosition,
  mockPermissionStatus,
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

    it('merges custom fly options when provided', () => {
      withScope(() => {
        const { initMap } = useInteractiveMap();
        initMap(document.createElement('div'));
      });

      const { flyToCoordinates } = withScope(() => useInteractiveMapPositioner());

      flyToCoordinates({ latitude: 38.7223, longitude: -9.1393 }, { animate: false });

      expect(mockFlyTo).toHaveBeenCalledTimes(1);
      expect(mockFlyTo).toHaveBeenCalledWith({
        center: [-9.1393, 38.7223],
        essential: true,
        animate: false,
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

    it('forwards custom fly options when provided', async () => {
      withScope(() => {
        const { initMap } = useInteractiveMap();
        initMap(document.createElement('div'));
      });

      mockCoords.value = { latitude: 41.1579, longitude: -8.6291 };

      const { flyToUserLocation } = withScope(() => useInteractiveMapPositioner());

      await flyToUserLocation({ animate: false });

      expect(mockGetCurrentPosition).toHaveBeenCalledTimes(1);
      expect(mockFlyTo).toHaveBeenCalledWith({
        center: [-8.6291, 41.1579],
        essential: true,
        animate: false,
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

  describe('permission status watcher', () => {
    it('flies to user location without animation when permission is granted', async () => {
      withScope(() => {
        const { initMap } = useInteractiveMap();
        initMap(document.createElement('div'));
      });

      mockCoords.value = { latitude: 38.7223, longitude: -9.1393 };
      withScope(() => useInteractiveMapPositioner());

      mockPermissionStatus.value = 'granted';
      await nextTick();

      expect(mockGetCurrentPosition).toHaveBeenCalledTimes(1);
      expect(mockFlyTo).toHaveBeenCalledWith({
        center: [-9.1393, 38.7223],
        essential: true,
        animate: false,
      });
    });

    it('does not fly when permission status is not granted', async () => {
      withScope(() => {
        const { initMap } = useInteractiveMap();
        initMap(document.createElement('div'));
      });

      withScope(() => useInteractiveMapPositioner());

      mockPermissionStatus.value = 'denied';
      await nextTick();

      expect(mockGetCurrentPosition).not.toHaveBeenCalled();
      expect(mockFlyTo).not.toHaveBeenCalled();
    });
  });
});
