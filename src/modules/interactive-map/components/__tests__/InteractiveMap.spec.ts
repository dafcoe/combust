import { mount } from '@vue/test-utils';
import { Map, Marker } from 'maplibre-gl';
import { nextTick, ref } from 'vue';
import InteractiveMap from '../InteractiveMap.vue';
import { stationGalpLisboaFixture } from '@/fixtures';

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

vi.mock('@/composables', () => ({
  useGeolocation: () => ({
    coords: ref({ latitude: 38.7223, longitude: -9.1393 }),
  }),
  useTheme: () => ({
    isDarkTheme: ref(false),
  }),
}));

describe('InteractiveMap', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders the map container element', () => {
    const wrapper = mount(InteractiveMap);

    expect(wrapper.find('.interactive-map').exists()).toBe(true);
    expect(wrapper.find('.interactive-map > div').exists()).toBe(true);
  });

  it('initializes map and markers on mount with default stations', () => {
    mount(InteractiveMap);

    expect(Map).toHaveBeenCalledTimes(1);
    expect(Marker).toHaveBeenCalledTimes(2);
  });

  it('updates station markers when stations prop changes', async () => {
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
  });

  it('emits selectStation when a station marker is clicked', async () => {
    const wrapper = mount(InteractiveMap, {
      props: {
        stations: [stationGalpLisboaFixture],
      },
    });

    const lastMarkerCall = vi.mocked(Marker).mock.calls.at(-1);
    const markerElement = lastMarkerCall?.[0]?.element as HTMLElement;
    const markerButton = markerElement?.querySelector('[data-testid="station-marker"]') as HTMLElement;

    markerButton?.click();
    await nextTick();

    expect(wrapper.emitted('selectStation')).toBeTruthy();
    expect(wrapper.emitted('selectStation')?.[0]).toEqual([stationGalpLisboaFixture]);
  });

  it('cleans up map and markers on unmount', () => {
    const wrapper = mount(InteractiveMap);

    wrapper.unmount();

    expect(mockMarkerRemove).toHaveBeenCalledTimes(2);
    expect(mockMapRemove).toHaveBeenCalledTimes(1);
  });
});
