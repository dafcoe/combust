import type { MapOptions } from 'maplibre-gl';
import { AttributionControl, Map, NavigationControl } from 'maplibre-gl';
import { nextTick, ref } from 'vue';
import { DEFAULT_MAP_ZOOM, MAP_STYLE_DARK, MAP_STYLE_LIGHT } from '../../interactive-map.constant';
import { useInteractiveMap } from '../useInteractiveMap';
import { DEFAULT_COORDS } from '@/modules/geolocation';
import { cleanupScope, withScope } from '@/utils';

const mockAddControl = vi.fn();
const mockSetStyle = vi.fn();
const mockMapRemove = vi.fn();
const mockOn = vi.fn();
const mockResize = vi.fn();

let capturedMapOptions: MapOptions | undefined;

const mockMapInstance = {
  addControl: mockAddControl,
  setStyle: mockSetStyle,
  remove: mockMapRemove,
  on: mockOn,
  resize: mockResize,
};

vi.mock('maplibre-gl', () => {
  return {
    Map: vi.fn(function (options?: MapOptions) {
      capturedMapOptions = options;
      return mockMapInstance;
    }),
    AttributionControl: vi.fn(function (options?: unknown) {
      return { options };
    }),
    NavigationControl: vi.fn(function (options?: unknown) {
      return { options };
    }),
  };
});

let mockIsDarkTheme: ReturnType<typeof ref<boolean>>;

vi.mock('@/modules/theme', () => ({
  useTheme: () => ({
    isDarkTheme: mockIsDarkTheme,
  }),
}));

describe('useInteractiveMap', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    capturedMapOptions = undefined;
    mockIsDarkTheme = ref<boolean>(false);
  });

  afterEach(() => {
    cleanupScope();
  });

  describe('initMap', () => {
    it('does not create map or add controls when mapContainer is null', () => {
      const mapContainer = ref<HTMLDivElement | null>(null);
      const { map, initMap } = withScope(() => useInteractiveMap(mapContainer));

      initMap();

      expect(Map).not.toHaveBeenCalled();
      expect(map.value).toBeNull();
      expect(mockAddControl).not.toHaveBeenCalled();
      expect(mockOn).not.toHaveBeenCalled();
    });

    it('creates and initializes map with default coordinates, zoom, and light style', () => {
      const containerElement = document.createElement('div');
      const mapContainer = ref<HTMLDivElement | null>(containerElement);
      const { map, initMap } = withScope(() => useInteractiveMap(mapContainer));

      initMap();

      expect(Map).toHaveBeenCalledTimes(1);
      expect(capturedMapOptions).toEqual({
        container: containerElement,
        style: MAP_STYLE_LIGHT,
        center: [DEFAULT_COORDS.longitude, DEFAULT_COORDS.latitude],
        zoom: DEFAULT_MAP_ZOOM,
        attributionControl: false,
      });
      expect(map.value).toBe(mockMapInstance);
    });

    it('creates map with dark style when isDarkTheme is initially true', () => {
      mockIsDarkTheme.value = true;
      const containerElement = document.createElement('div');
      const mapContainer = ref<HTMLDivElement | null>(containerElement);
      const { initMap } = withScope(() => useInteractiveMap(mapContainer));

      initMap();

      expect(capturedMapOptions?.style).toBe(MAP_STYLE_DARK);
    });

    it('adds attribution and navigation controls to the map', () => {
      const containerElement = document.createElement('div');
      const mapContainer = ref<HTMLDivElement | null>(containerElement);
      const { initMap } = withScope(() => useInteractiveMap(mapContainer));

      initMap();

      expect(AttributionControl).toHaveBeenCalledWith({ compact: true });
      expect(NavigationControl).toHaveBeenCalledWith({ showCompass: true, showZoom: true });
      expect(mockAddControl).toHaveBeenCalledWith(expect.any(Object), 'bottom-left');
      expect(mockAddControl).toHaveBeenCalledWith(expect.any(Object), 'bottom-right');
    });

    it('registers map event listeners for load and error events', () => {
      const consoleErrorSpy = vi.spyOn(console, 'error').mockImplementation(() => {});
      const containerElement = document.createElement('div');
      const mapContainer = ref<HTMLDivElement | null>(containerElement);
      const { initMap } = withScope(() => useInteractiveMap(mapContainer));

      initMap();

      expect(mockOn).toHaveBeenCalledWith('load', expect.any(Function));
      expect(mockOn).toHaveBeenCalledWith('error', expect.any(Function));

      const loadCallback = mockOn.mock.calls.find(([event]) => event === 'load')?.[1];
      loadCallback?.();
      expect(mockResize).toHaveBeenCalledTimes(1);

      const errorCallback = mockOn.mock.calls.find(([event]) => event === 'error')?.[1];
      const testError = new Error('Test map error');
      errorCallback?.(testError);
      expect(consoleErrorSpy).toHaveBeenCalledWith('[MapLibre error]', testError);

      consoleErrorSpy.mockRestore();
    });
  });

  describe('reactivity to theme changes', () => {
    it('updates map style when isDarkTheme changes after initialization', async () => {
      const containerElement = document.createElement('div');
      const mapContainer = ref<HTMLDivElement | null>(containerElement);
      const { initMap } = withScope(() => useInteractiveMap(mapContainer));

      initMap();
      expect(mockSetStyle).not.toHaveBeenCalled();

      mockIsDarkTheme.value = true;
      await nextTick();

      expect(mockSetStyle).toHaveBeenCalledTimes(1);
      expect(mockSetStyle).toHaveBeenCalledWith(MAP_STYLE_DARK);

      mockIsDarkTheme.value = false;
      await nextTick();

      expect(mockSetStyle).toHaveBeenCalledTimes(2);
      expect(mockSetStyle).toHaveBeenLastCalledWith(MAP_STYLE_LIGHT);
    });

    it('does not update map style when isDarkTheme changes if map is not initialized', async () => {
      const containerElement = document.createElement('div');
      const mapContainer = ref<HTMLDivElement | null>(containerElement);
      withScope(() => useInteractiveMap(mapContainer));

      mockIsDarkTheme.value = true;
      await nextTick();

      expect(mockSetStyle).not.toHaveBeenCalled();
    });
  });

  describe('removeMap', () => {
    it('removes map and clears map reference', () => {
      const containerElement = document.createElement('div');
      const mapContainer = ref<HTMLDivElement | null>(containerElement);
      const { map, initMap, removeMap } = withScope(() => useInteractiveMap(mapContainer));

      initMap();
      expect(map.value).toBe(mockMapInstance);

      removeMap();

      expect(mockMapRemove).toHaveBeenCalledTimes(1);
      expect(map.value).toBeNull();
    });

    it('does not throw or call remove when map was never initialized', () => {
      const containerElement = document.createElement('div');
      const mapContainer = ref<HTMLDivElement | null>(containerElement);
      const { removeMap } = withScope(() => useInteractiveMap(mapContainer));

      expect(() => removeMap()).not.toThrow();
      expect(mockMapRemove).not.toHaveBeenCalled();
    });

    it('does not update map style when isDarkTheme changes after map removal', async () => {
      const containerElement = document.createElement('div');
      const mapContainer = ref<HTMLDivElement | null>(containerElement);
      const { initMap, removeMap } = withScope(() => useInteractiveMap(mapContainer));

      initMap();
      removeMap();

      mockIsDarkTheme.value = true;
      await nextTick();

      expect(mockSetStyle).not.toHaveBeenCalled();
    });
  });
});
