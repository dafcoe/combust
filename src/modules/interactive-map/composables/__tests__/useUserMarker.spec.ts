import type { Map } from 'maplibre-gl';
import { Marker } from 'maplibre-gl';
import { nextTick, shallowRef } from 'vue';
import { useUserMarker } from '../useUserMarker';
import {
  lisbonGeolocationCoordinatesFixture,
  madridGeolocationCoordinatesFixture,
  mockCoords,
  resetGeolocationMock,
} from '@/modules/geolocation/index.testing.ts';
import {
  cleanupScope,
  mockAddTo,
  mockMarkerInstances,
  mockMarkerRemove,
  mockSetLngLat,
  resetMaplibreGlMock,
  withScope,
} from '@/testing';

vi.mock('maplibre-gl', () => import('@/testing/mocks/maplibre-gl.mock'));

vi.mock('@/modules/geolocation', async (importOriginal) => {
  const actual = await importOriginal<typeof import('@/modules/geolocation')>();
  const { mockUseGeolocation } = await import('@/modules/geolocation/index.testing.ts');

  return {
    ...actual,
    useGeolocation: mockUseGeolocation,
  };
});

describe('useUserMarker', () => {
  let mockMapInstance: Map;

  beforeEach(() => {
    vi.clearAllMocks();
    resetMaplibreGlMock();
    resetGeolocationMock();
    mockMapInstance = {} as unknown as Map;
  });

  afterEach(() => {
    cleanupScope();
  });

  describe('initMarker', () => {
    it('creates and adds the marker to the map with user coordinates', () => {
      const map = shallowRef<Map | null>(mockMapInstance);
      const { initMarker } = withScope(() => useUserMarker(map));

      initMarker();

      expect(Marker).toHaveBeenCalledTimes(1);
      expect(mockMarkerInstances[0]?.options).toEqual(
        expect.objectContaining({
          anchor: 'center',
          element: expect.any(HTMLDivElement),
        }),
      );

      expect(mockSetLngLat).toHaveBeenCalledTimes(1);
      expect(mockSetLngLat).toHaveBeenCalledWith([
        lisbonGeolocationCoordinatesFixture.longitude,
        lisbonGeolocationCoordinatesFixture.latitude,
      ]);

      expect(mockAddTo).toHaveBeenCalledTimes(1);
      expect(mockAddTo).toHaveBeenCalledWith(mockMapInstance);
    });

    it('renders UserMarker component inside the marker element', () => {
      const map = shallowRef<Map | null>(mockMapInstance);
      const { initMarker } = withScope(() => useUserMarker(map));

      initMarker();

      const element = mockMarkerInstances[0]?.options?.element;
      expect(element).toBeInstanceOf(HTMLDivElement);
      expect(element?.querySelector('.user-marker')).not.toBeNull();
    });

    it('creates marker but does not add to map when map.value is null', () => {
      const map = shallowRef<Map | null>(null);
      const { initMarker } = withScope(() => useUserMarker(map));

      initMarker();

      expect(Marker).toHaveBeenCalledTimes(1);
      expect(mockSetLngLat).toHaveBeenCalledTimes(1);
      expect(mockAddTo).not.toHaveBeenCalled();
    });
  });

  describe('reactivity to coordinates', () => {
    it('updates marker position when coords change after initialization', async () => {
      const map = shallowRef<Map | null>(mockMapInstance);
      const { initMarker } = withScope(() => useUserMarker(map));

      initMarker();
      expect(mockSetLngLat).toHaveBeenCalledTimes(1);

      mockCoords.value = { ...madridGeolocationCoordinatesFixture };
      await nextTick();

      expect(mockSetLngLat).toHaveBeenCalledTimes(2);
      expect(mockSetLngLat).toHaveBeenLastCalledWith([
        madridGeolocationCoordinatesFixture.longitude,
        madridGeolocationCoordinatesFixture.latitude,
      ]);
    });

    it('does not update marker position when coords change if marker is not initialized', async () => {
      const map = shallowRef<Map | null>(mockMapInstance);
      withScope(() => useUserMarker(map));

      mockCoords.value = { ...madridGeolocationCoordinatesFixture };
      await nextTick();

      expect(mockSetLngLat).not.toHaveBeenCalled();
    });
  });

  describe('removeMarker', () => {
    it('removes marker from map and clears the marker instance', () => {
      const map = shallowRef<Map | null>(mockMapInstance);
      const { initMarker, removeMarker } = withScope(() => useUserMarker(map));

      initMarker();
      expect(mockMarkerRemove).not.toHaveBeenCalled();

      removeMarker();
      expect(mockMarkerRemove).toHaveBeenCalledTimes(1);
    });

    it('does not throw or call remove when marker was never initialized', () => {
      const map = shallowRef<Map | null>(mockMapInstance);
      const { removeMarker } = withScope(() => useUserMarker(map));

      expect(() => removeMarker()).not.toThrow();
      expect(mockMarkerRemove).not.toHaveBeenCalled();
    });

    it('does not update marker position when coords change after marker removal', async () => {
      const map = shallowRef<Map | null>(mockMapInstance);
      const { initMarker, removeMarker } = withScope(() => useUserMarker(map));

      initMarker();
      expect(mockSetLngLat).toHaveBeenCalledTimes(1);

      removeMarker();

      mockCoords.value = { ...madridGeolocationCoordinatesFixture };
      await nextTick();

      expect(mockSetLngLat).toHaveBeenCalledTimes(1);
    });
  });
});
