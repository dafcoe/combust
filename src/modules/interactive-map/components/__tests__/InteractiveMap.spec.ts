import { mount } from '@vue/test-utils';
import { AttributionControl, Map, Marker, NavigationControl } from 'maplibre-gl';
import { nextTick, ref } from 'vue';
import InteractiveMap from '../InteractiveMap.vue';
import { DEFAULT_COORDS, DEFAULT_MAP_ZOOM, MAP_STYLE_DARK, MAP_STYLE_LIGHT } from '@/constants';
import { dummyStationFixture, stationGalpLisboaFixture } from '@/fixtures';
import type { GeolocationCoordinates } from '@/types';

const mockCoords = ref<GeolocationCoordinates>({ latitude: 38.7223, longitude: -9.1393 });
const mockIsDarkTheme = ref<boolean>(false);

vi.mock('@/composables', () => ({
  useGeolocation: () => ({
    coords: mockCoords,
  }),
  useTheme: () => ({
    isDarkTheme: mockIsDarkTheme,
  }),
}));

const mockAddControl = vi.fn();
const mockSetStyle = vi.fn();
const mockMapRemove = vi.fn();
const mockOn = vi.fn();
const mockResize = vi.fn();

const mockMapInstance = {
  addControl: mockAddControl,
  setStyle: mockSetStyle,
  remove: mockMapRemove,
  on: mockOn,
  resize: mockResize,
};

const mockSetLngLat = vi.fn().mockReturnThis();
const mockAddTo = vi.fn().mockReturnThis();
const mockMarkerRemove = vi.fn();

const mockMarkerInstance = {
  setLngLat: mockSetLngLat,
  addTo: mockAddTo,
  remove: mockMarkerRemove,
};

vi.mock('maplibre-gl', () => {
  return {
    Map: vi.fn(function () { return mockMapInstance; }),
    Marker: vi.fn(function () { return mockMarkerInstance; }),
    NavigationControl: vi.fn(function () { return {}; }),
    AttributionControl: vi.fn(function () { return {}; }),
  };
});

describe('InteractiveMap', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    mockCoords.value = DEFAULT_COORDS;
    mockIsDarkTheme.value = false;
  });

  it('should initialize maplibre-gl Map with the default values', () => {
    mount(InteractiveMap);

    expect(Map).toHaveBeenCalledTimes(1);
    expect(Map).toHaveBeenCalledWith(
      expect.objectContaining({
        style: MAP_STYLE_LIGHT,
        center: [DEFAULT_COORDS.longitude, DEFAULT_COORDS.latitude],
        zoom: DEFAULT_MAP_ZOOM,
      }),
    );
  });

  it('should initialize maplibre-gl Map with dark style when isDarkTheme is true', () => {
    mockIsDarkTheme.value = true;
    mount(InteractiveMap);

    expect(Map).toHaveBeenCalledWith(
      expect.objectContaining({ style: MAP_STYLE_DARK }),
    );
  });

  it('should initialize and attach the user location marker at user coordinates', () => {
    mount(InteractiveMap, {
      props: {
        stations: [],
      },
    });

    expect(Marker).toHaveBeenCalledTimes(1);
    expect(mockSetLngLat).toHaveBeenCalledWith([-9.1393, 38.7223]);
    expect(mockAddTo).toHaveBeenCalled();
  });

  it('should initialize and attach station markers with bottom anchor', () => {
    mount(InteractiveMap);

    expect(Marker).toHaveBeenCalledWith(
      expect.objectContaining({ anchor: 'bottom' }),
    );
    expect(mockSetLngLat).toHaveBeenCalledWith([
      dummyStationFixture.location.longitude,
      dummyStationFixture.location.latitude,
    ]);
  });

  it('should update station markers when stations prop changes', async () => {
    const wrapper = mount(InteractiveMap, {
      props: {
        stations: [],
      },
    });

    expect(Marker).toHaveBeenCalledTimes(1);

    await wrapper.setProps({
      stations: [stationGalpLisboaFixture],
    });

    expect(Marker).toHaveBeenCalledTimes(2);
    expect(mockSetLngLat).toHaveBeenCalledWith([
      stationGalpLisboaFixture.location.longitude,
      stationGalpLisboaFixture.location.latitude,
    ]);
  });

  it('should emit selectStation when a station marker is clicked', async () => {
    const wrapper = mount(InteractiveMap, {
      props: {
        stations: [stationGalpLisboaFixture],
      },
    });

    const lastMarkerCall = vi.mocked(Marker).mock.calls.at(-1);
    const markerElement = lastMarkerCall?.[0]?.element as HTMLElement;
    const markerButton = markerElement.querySelector('[data-testid="station-marker"]') as HTMLElement;

    markerButton?.click();
    await nextTick();

    expect(wrapper.emitted('selectStation')).toBeTruthy();
    expect(wrapper.emitted('selectStation')?.[0]).toEqual([stationGalpLisboaFixture]);
  });

  it('should update marker position when geolocation coordinates change', async () => {
    mount(InteractiveMap);

    mockCoords.value = { latitude: 40.4168, longitude: -3.7038 };
    await nextTick();

    expect(mockSetLngLat).toHaveBeenCalledWith([-3.7038, 40.4168]);
  });

  it('should update map style dynamically when isDarkTheme changes', async () => {
    mount(InteractiveMap);

    mockIsDarkTheme.value = true;
    await nextTick();

    expect(mockSetStyle).toHaveBeenCalledWith(MAP_STYLE_DARK);
  });

  it('should add attribution and navigation controls to the map', () => {
    mount(InteractiveMap);

    expect(AttributionControl).toHaveBeenCalledWith({ compact: true });
    expect(NavigationControl).toHaveBeenCalledWith({ showCompass: true, showZoom: true });
    expect(mockAddControl).toHaveBeenCalledWith(expect.any(Object), 'bottom-left');
    expect(mockAddControl).toHaveBeenCalledWith(expect.any(Object), 'bottom-right');
  });

  it('should register map event listeners and trigger resize on load', () => {
    mount(InteractiveMap);

    expect(mockOn).toHaveBeenCalledWith('load', expect.any(Function));
    expect(mockOn).toHaveBeenCalledWith('error', expect.any(Function));

    const loadCallback = mockOn.mock.calls.find(([event]) => event === 'load')?.[1];
    loadCallback?.();

    expect(mockResize).toHaveBeenCalledTimes(1);
  });

  it('should clean up map and markers on unmount', () => {
    const wrapper = mount(InteractiveMap);

    wrapper.unmount();

    // 1 user location marker + 1 dummy station marker
    expect(mockMarkerRemove).toHaveBeenCalledTimes(2);
    expect(mockMapRemove).toHaveBeenCalledTimes(1);
  });
});
