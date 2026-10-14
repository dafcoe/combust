import type { Map, MarkerOptions } from 'maplibre-gl';
import { Marker } from 'maplibre-gl';
import { nextTick, ref, shallowRef } from 'vue';
import { useStationMarkers } from '../useStationMarkers';
import { stationGalpLisboaFixture, stationRepsolMadridFixture } from '@/fixtures';
import type { FuelType, Station } from '@/types';
import { cleanupScope, withScope } from '@/utils';

const mockSetLngLat = vi.fn().mockReturnThis();
const mockAddTo = vi.fn().mockReturnThis();
const mockMarkerRemove = vi.fn();

const mockMarkerInstances: Array<{
  options?: MarkerOptions;
  setLngLat: typeof mockSetLngLat;
  addTo: typeof mockAddTo;
  remove: typeof mockMarkerRemove;
}> = [];

vi.mock('maplibre-gl', () => {
  return {
    Map: vi.fn(),
    Marker: vi.fn(function (options?: MarkerOptions) {
      const instance = {
        options,
        setLngLat: mockSetLngLat,
        addTo: mockAddTo,
        remove: mockMarkerRemove,
      };
      mockMarkerInstances.push(instance);
      return instance;
    }),
  };
});

describe('useStationMarkers', () => {
  let mockMapInstance: Map;

  beforeEach(() => {
    vi.clearAllMocks();
    mockMarkerInstances.length = 0;
    mockMapInstance = {} as unknown as Map;
  });

  afterEach(() => {
    cleanupScope();
  });

  describe('initMarkers', () => {
    it('does not create markers when stations list is empty', () => {
      const map = shallowRef<Map | null>(mockMapInstance);
      const stations = ref<Station[]>([]);
      const selectedFuelType = ref<FuelType | undefined>(undefined);
      const onSelectCallback = vi.fn();
      const { initMarkers } = withScope(() =>
        useStationMarkers(map, stations, selectedFuelType, onSelectCallback),
      );

      initMarkers();

      expect(Marker).not.toHaveBeenCalled();
      expect(mockAddTo).not.toHaveBeenCalled();
    });

    it('creates and attaches markers to the map for each station', () => {
      const map = shallowRef<Map | null>(mockMapInstance);
      const stations = ref<Station[]>([stationGalpLisboaFixture]);
      const selectedFuelType = ref<FuelType | undefined>('diesel');
      const onSelectCallback = vi.fn();
      const { initMarkers } = withScope(() =>
        useStationMarkers(map, stations, selectedFuelType, onSelectCallback),
      );

      initMarkers();

      expect(Marker).toHaveBeenCalledTimes(1);
      expect(Marker).toHaveBeenCalledWith(expect.objectContaining({ anchor: 'bottom' }));

      expect(mockSetLngLat).toHaveBeenCalledTimes(1);
      expect(mockSetLngLat).toHaveBeenCalledWith([
        stationGalpLisboaFixture.location.longitude,
        stationGalpLisboaFixture.location.latitude,
      ]);

      expect(mockAddTo).toHaveBeenCalledTimes(1);
      expect(mockAddTo).toHaveBeenCalledWith(mockMapInstance);
    });

    it('creates markers but does not add to map when map.value is null', () => {
      const map = shallowRef<Map | null>(null);
      const stations = ref<Station[]>([stationGalpLisboaFixture]);
      const selectedFuelType = ref<FuelType | undefined>(undefined);
      const onSelectCallback = vi.fn();
      const { initMarkers } = withScope(() =>
        useStationMarkers(map, stations, selectedFuelType, onSelectCallback),
      );

      initMarkers();

      expect(Marker).toHaveBeenCalledTimes(1);
      expect(mockAddTo).not.toHaveBeenCalled();
    });
  });

  describe('marker selection', () => {
    it('triggers onSelectCallback with selected station when a marker is clicked', async () => {
      const map = shallowRef<Map | null>(mockMapInstance);
      const stations = ref<Station[]>([stationGalpLisboaFixture]);
      const selectedFuelType = ref<FuelType | undefined>(undefined);
      const onSelectCallback = vi.fn();
      const { initMarkers } = withScope(() =>
        useStationMarkers(map, stations, selectedFuelType, onSelectCallback),
      );

      initMarkers();

      expect(mockMarkerInstances.length).toBe(1);
      const markerElement = mockMarkerInstances[0].options?.element as HTMLElement;
      const button = markerElement?.querySelector('[data-testid="station-marker"]') as HTMLElement;

      button?.click();
      await nextTick();

      expect(onSelectCallback).toHaveBeenCalledTimes(1);
      expect(onSelectCallback).toHaveBeenCalledWith(stationGalpLisboaFixture);
    });
  });

  describe('reactivity to state changes', () => {
    it('updates markers when stations change', async () => {
      const map = shallowRef<Map | null>(mockMapInstance);
      const stations = ref<Station[]>([stationGalpLisboaFixture]);
      const selectedFuelType = ref<FuelType | undefined>(undefined);
      const onSelectCallback = vi.fn();
      const { initMarkers } = withScope(() =>
        useStationMarkers(map, stations, selectedFuelType, onSelectCallback),
      );

      initMarkers();

      expect(Marker).toHaveBeenCalledTimes(1);

      stations.value = [stationGalpLisboaFixture, stationRepsolMadridFixture];
      await nextTick();

      expect(mockMarkerRemove).toHaveBeenCalledTimes(1);
      expect(Marker).toHaveBeenCalledTimes(3);
    });

    it('updates markers when selectedFuelType changes', async () => {
      const map = shallowRef<Map | null>(mockMapInstance);
      const stations = ref<Station[]>([stationGalpLisboaFixture]);
      const selectedFuelType = ref<FuelType | undefined>(undefined);
      const onSelectCallback = vi.fn();
      const { initMarkers } = withScope(() =>
        useStationMarkers(map, stations, selectedFuelType, onSelectCallback),
      );

      initMarkers();

      expect(Marker).toHaveBeenCalledTimes(1);

      selectedFuelType.value = 'gasoline95';
      await nextTick();

      expect(mockMarkerRemove).toHaveBeenCalledTimes(1);
      expect(Marker).toHaveBeenCalledTimes(2);
    });
  });

  describe('removeMarkers', () => {
    it('removes markers from map and cleans up elements when removeMarkers is called', () => {
      const map = shallowRef<Map | null>(mockMapInstance);
      const stations = ref<Station[]>([stationGalpLisboaFixture]);
      const selectedFuelType = ref<FuelType | undefined>(undefined);
      const onSelectCallback = vi.fn();
      const { initMarkers, removeMarkers } = withScope(() =>
        useStationMarkers(map, stations, selectedFuelType, onSelectCallback),
      );

      initMarkers();
      expect(mockMarkerRemove).not.toHaveBeenCalled();

      removeMarkers();
      expect(mockMarkerRemove).toHaveBeenCalledTimes(1);
    });
  });
});
