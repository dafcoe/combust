import type { Map } from 'maplibre-gl';
import { Marker } from 'maplibre-gl';
import {
  nextTick,
  ref,
  shallowRef,
} from 'vue';
import { useStationMarkers } from '../useStationMarkers';
import type { FuelType } from '@/modules/fuel';
import type { Station } from '@/modules/station';
import { stationGalpLisbonFixture, stationRepsolMadridFixture } from '@/modules/station/index.testing';
import {
  cleanupScope,
  mockAddTo,
  mockEaseTo,
  mockGetBounds,
  mockGetZoom,
  mockMapInstance,
  mockMarkerInstances,
  mockMarkerRemove,
  mockOff,
  mockOn,
  mockSetLngLat,
  resetMaplibreGlMock,
  withScope,
} from '@/testing';

vi.mock('maplibre-gl', () => import('@/testing/mocks/maplibre-gl.mock'));

describe('useStationMarkers', () => {
  const nearbyGalpStationFixture: Station = {
    ...stationGalpLisbonFixture,
    id: 'PT-99999',
    name: 'Galp Nearby',
    location: {
      ...stationGalpLisbonFixture.location,
      latitude: stationGalpLisbonFixture.location.latitude + 0.0001,
      longitude: stationGalpLisbonFixture.location.longitude + 0.0001,
    },
  };

  function setMockViewport({
    bbox = [-180, -85, 180, 85],
    zoom = 14,
  }: {
    bbox?: [number, number, number, number];
    zoom?: number;
  } = {}): void {
    mockGetZoom.mockReturnValue(zoom);
    mockGetBounds.mockReturnValue({
      getWest: vi.fn(() => bbox[0]),
      getSouth: vi.fn(() => bbox[1]),
      getEast: vi.fn(() => bbox[2]),
      getNorth: vi.fn(() => bbox[3]),
    });
  }

  function triggerMapMove(): void {
    const moveEndCallback = mockOn.mock.calls.find(([event]) => event === 'moveend')?.[1];

    moveEndCallback?.();
  }

  beforeEach(() => {
    vi.clearAllMocks();
    resetMaplibreGlMock();
    setMockViewport();
  });

  afterEach(() => {
    cleanupScope();
  });

  describe('initMarkers', () => {
    it('does not create markers when stations list is empty', () => {
      const map = shallowRef<Map | null>(mockMapInstance as unknown as Map);
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

    it('creates and attaches markers to the map for each station in viewport', () => {
      const map = shallowRef<Map | null>(mockMapInstance as unknown as Map);
      const stations = ref<Station[]>([stationGalpLisbonFixture]);
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
        stationGalpLisbonFixture.location.longitude,
        stationGalpLisbonFixture.location.latitude,
      ]);

      expect(mockAddTo).toHaveBeenCalledTimes(1);
      expect(mockAddTo).toHaveBeenCalledWith(mockMapInstance);
      expect(mockOn).toHaveBeenCalledWith('moveend', expect.any(Function));
    });

    it('does not create markers when map.value is null', () => {
      const map = shallowRef<Map | null>(null);
      const stations = ref<Station[]>([stationGalpLisbonFixture]);
      const selectedFuelType = ref<FuelType | undefined>(undefined);
      const onSelectCallback = vi.fn();
      const { initMarkers } = withScope(() =>
        useStationMarkers(map, stations, selectedFuelType, onSelectCallback),
      );

      initMarkers();

      expect(Marker).not.toHaveBeenCalled();
      expect(mockAddTo).not.toHaveBeenCalled();
    });
  });

  describe('marker selection', () => {
    it('triggers onSelectCallback with selected station when an individual marker is clicked', async () => {
      const map = shallowRef<Map | null>(mockMapInstance as unknown as Map);
      const stations = ref<Station[]>([stationGalpLisbonFixture]);
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
      expect(onSelectCallback).toHaveBeenCalledWith(stationGalpLisbonFixture);
    });

    it('updates marker selection in place without removing or recreating markers', async () => {
      const map = shallowRef<Map | null>(mockMapInstance as unknown as Map);
      const stations = ref<Station[]>([stationGalpLisbonFixture, stationRepsolMadridFixture]);
      const selectedFuelType = ref<FuelType | undefined>(undefined);
      const onSelectCallback = vi.fn();
      const { initMarkers } = withScope(() =>
        useStationMarkers(map, stations, selectedFuelType, onSelectCallback),
      );

      initMarkers();

      expect(mockMarkerInstances.length).toBe(2);
      const galpEl = mockMarkerInstances[0].options?.element as HTMLElement;
      const repsolEl = mockMarkerInstances[1].options?.element as HTMLElement;

      const galpMarker = galpEl.querySelector('.station-marker') as HTMLElement;
      const repsolMarker = repsolEl.querySelector('.station-marker') as HTMLElement;

      expect(galpMarker.classList.contains('station-marker--selected')).toBe(false);
      expect(repsolMarker.classList.contains('station-marker--selected')).toBe(false);

      galpMarker.click();
      await nextTick();

      expect(galpMarker.classList.contains('station-marker--selected')).toBe(true);
      expect(repsolMarker.classList.contains('station-marker--selected')).toBe(false);
      expect(mockMarkerRemove).not.toHaveBeenCalled();

      repsolMarker.click();
      await nextTick();

      expect(galpMarker.classList.contains('station-marker--selected')).toBe(false);
      expect(repsolMarker.classList.contains('station-marker--selected')).toBe(true);
      expect(mockMarkerRemove).not.toHaveBeenCalled();
    });
  });

  describe('clusters and interaction', () => {
    it('creates a cluster marker when stations are close together at low zoom', () => {
      setMockViewport({ zoom: 8 });

      const map = shallowRef<Map | null>(mockMapInstance as unknown as Map);
      const stations = ref<Station[]>([stationGalpLisbonFixture, nearbyGalpStationFixture]);
      const selectedFuelType = ref<FuelType | undefined>(undefined);
      const onSelectCallback = vi.fn();
      const { initMarkers } = withScope(() =>
        useStationMarkers(map, stations, selectedFuelType, onSelectCallback),
      );

      initMarkers();

      expect(Marker).toHaveBeenCalledTimes(1);
      expect(Marker).toHaveBeenCalledWith(expect.objectContaining({ anchor: 'center' }));

      const markerElement = mockMarkerInstances[0].options?.element as HTMLElement;
      const clusterElement = markerElement?.querySelector('[data-testid="cluster-marker"]');

      expect(clusterElement).not.toBeNull();
      expect(clusterElement?.textContent).toBe('2');
    });

    it('zooms in with easeTo on cluster click', async () => {
      setMockViewport({ zoom: 8 });

      const map = shallowRef<Map | null>(mockMapInstance as unknown as Map);
      const stations = ref<Station[]>([stationGalpLisbonFixture, nearbyGalpStationFixture]);
      const selectedFuelType = ref<FuelType | undefined>(undefined);
      const onSelectCallback = vi.fn();
      const { initMarkers } = withScope(() =>
        useStationMarkers(map, stations, selectedFuelType, onSelectCallback),
      );

      initMarkers();

      const markerElement = mockMarkerInstances[0].options?.element as HTMLElement;
      const clusterElement = markerElement?.querySelector('[data-testid="cluster-marker"]') as HTMLElement;

      clusterElement?.click();
      await nextTick();

      expect(mockEaseTo).toHaveBeenCalledTimes(1);
      expect(mockEaseTo).toHaveBeenCalledWith(expect.objectContaining({
        zoom: expect.any(Number),
        center: expect.any(Array),
      }));
    });
  });

  describe('viewport diffing on map move', () => {
    it('adds new markers and destroys off-screen markers when map moves', () => {
      // Lisbon bbox only
      setMockViewport({ bbox: [-9.3, 38.6, -9.0, 38.8], zoom: 14 });

      const map = shallowRef<Map | null>(mockMapInstance as unknown as Map);
      const stations = ref<Station[]>([stationGalpLisbonFixture, stationRepsolMadridFixture]);
      const selectedFuelType = ref<FuelType | undefined>(undefined);
      const onSelectCallback = vi.fn();
      const { initMarkers } = withScope(() =>
        useStationMarkers(map, stations, selectedFuelType, onSelectCallback),
      );

      initMarkers();

      // Only Lisbon is in viewport
      expect(mockMarkerInstances.length).toBe(1);
      expect(mockMarkerRemove).not.toHaveBeenCalled();

      // Pan to Madrid only
      setMockViewport({ bbox: [-3.9, 40.3, -3.5, 40.5], zoom: 14 });
      triggerMapMove();

      // Lisbon marker removed, Madrid marker added
      expect(mockMarkerRemove).toHaveBeenCalledTimes(1);
      expect(mockMarkerInstances.length).toBe(2);
    });

    it('preserves existing markers when they remain in viewport', () => {
      setMockViewport({ bbox: [-180, -85, 180, 85], zoom: 14 });

      const map = shallowRef<Map | null>(mockMapInstance as unknown as Map);
      const stations = ref<Station[]>([stationGalpLisbonFixture, stationRepsolMadridFixture]);
      const selectedFuelType = ref<FuelType | undefined>(undefined);
      const onSelectCallback = vi.fn();
      const { initMarkers } = withScope(() =>
        useStationMarkers(map, stations, selectedFuelType, onSelectCallback),
      );

      initMarkers();

      expect(mockMarkerInstances.length).toBe(2);
      expect(mockMarkerRemove).not.toHaveBeenCalled();

      // Trigger move without changing visible stations
      triggerMapMove();

      expect(mockMarkerRemove).not.toHaveBeenCalled();
      expect(Marker).toHaveBeenCalledTimes(2);
    });
  });

  describe('reactivity to state changes', () => {
    it('updates markers when stations change', async () => {
      const map = shallowRef<Map | null>(mockMapInstance as unknown as Map);
      const stations = ref<Station[]>([stationGalpLisbonFixture]);
      const selectedFuelType = ref<FuelType | undefined>(undefined);
      const onSelectCallback = vi.fn();
      const { initMarkers } = withScope(() =>
        useStationMarkers(map, stations, selectedFuelType, onSelectCallback),
      );

      initMarkers();

      expect(Marker).toHaveBeenCalledTimes(1);

      stations.value = [stationGalpLisbonFixture, stationRepsolMadridFixture];
      await nextTick();

      expect(Marker).toHaveBeenCalledTimes(2);
      expect(mockMarkerInstances.length).toBe(2);
    });

    it('updates station markers in place when selectedFuelType changes', async () => {
      const map = shallowRef<Map | null>(mockMapInstance as unknown as Map);
      const stations = ref<Station[]>([stationGalpLisbonFixture]);
      const selectedFuelType = ref<FuelType | undefined>(undefined);
      const onSelectCallback = vi.fn();
      const { initMarkers } = withScope(() =>
        useStationMarkers(map, stations, selectedFuelType, onSelectCallback),
      );

      initMarkers();

      expect(Marker).toHaveBeenCalledTimes(1);

      selectedFuelType.value = 'gasoline95';
      await nextTick();

      // Station marker updated in place without destroying the map marker
      expect(mockMarkerRemove).not.toHaveBeenCalled();
      expect(Marker).toHaveBeenCalledTimes(1);
    });
  });

  describe('removeMarkers', () => {
    it('removes markers from map, cleans up elements, and unregisters listener', () => {
      const map = shallowRef<Map | null>(mockMapInstance as unknown as Map);
      const stations = ref<Station[]>([stationGalpLisbonFixture]);
      const selectedFuelType = ref<FuelType | undefined>(undefined);
      const onSelectCallback = vi.fn();
      const { initMarkers, removeMarkers } = withScope(() =>
        useStationMarkers(map, stations, selectedFuelType, onSelectCallback),
      );

      initMarkers();
      expect(mockMarkerRemove).not.toHaveBeenCalled();

      removeMarkers();
      expect(mockMarkerRemove).toHaveBeenCalledTimes(1);
      expect(mockOff).toHaveBeenCalledWith('moveend', expect.any(Function));
    });
  });

  describe('reactivity to map instance changes', () => {
    it('attaches listeners and creates markers when map becomes available', async () => {
      const map = shallowRef<Map | null>(null);
      const stations = ref<Station[]>([stationGalpLisbonFixture]);
      const selectedFuelType = ref<FuelType | undefined>(undefined);
      const onSelectCallback = vi.fn();
      const { initMarkers } = withScope(() =>
        useStationMarkers(map, stations, selectedFuelType, onSelectCallback),
      );

      initMarkers();
      expect(Marker).not.toHaveBeenCalled();

      map.value = mockMapInstance as unknown as Map;
      await nextTick();

      expect(Marker).toHaveBeenCalledTimes(1);
      expect(mockOn).toHaveBeenCalledWith('moveend', expect.any(Function));
    });

    it('unregisters listener when map becomes null', async () => {
      const map = shallowRef<Map | null>(mockMapInstance as unknown as Map);
      const stations = ref<Station[]>([stationGalpLisbonFixture]);
      const selectedFuelType = ref<FuelType | undefined>(undefined);
      const onSelectCallback = vi.fn();
      const { initMarkers } = withScope(() =>
        useStationMarkers(map, stations, selectedFuelType, onSelectCallback),
      );

      initMarkers();

      map.value = null;
      await nextTick();

      expect(mockOff).toHaveBeenCalledWith('moveend', expect.any(Function));
    });
  });
});
