import { mount } from '@vue/test-utils';
import { ref } from 'vue';
import InteractiveMap from '../InteractiveMap.vue';
import { stationGalpLisbonFixture } from '@/modules/station/index.testing';

const mockInitMap = vi.fn();
const mockRemoveMap = vi.fn();
const mockInitUserMarker = vi.fn();
const mockRemoveUserMarker = vi.fn();
const mockInitStationMarkers = vi.fn();
const mockRemoveStationMarkers = vi.fn();
let capturedSelectCallback: ((station: unknown) => void) | undefined;

vi.mock('../../composables/useInteractiveMap', () => ({
  useInteractiveMap: vi.fn(() => ({
    map: ref(null),
    initMap: mockInitMap,
    removeMap: mockRemoveMap,
  })),
}));

vi.mock('../../composables/useUserMarker', () => ({
  useUserMarker: vi.fn(() => ({
    initMarker: mockInitUserMarker,
    removeMarker: mockRemoveUserMarker,
  })),
}));

vi.mock('../../composables/useStationMarkers', () => ({
  useStationMarkers: vi.fn((_map, _stations, _fuelType, onSelect) => {
    capturedSelectCallback = onSelect;
    return {
      initMarkers: mockInitStationMarkers,
      removeMarkers: mockRemoveStationMarkers,
    };
  }),
}));

describe('InteractiveMap', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    capturedSelectCallback = undefined;
  });

  describe('lifecycle orchestration', () => {
    it('initializes map and markers on mount and cleans them up on unmount in reverse order', () => {
      const wrapper = mount(InteractiveMap);

      expect(mockInitMap).toHaveBeenCalledTimes(1);
      expect(mockInitUserMarker).toHaveBeenCalledTimes(1);
      expect(mockInitStationMarkers).toHaveBeenCalledTimes(1);

      wrapper.unmount();

      expect(mockRemoveStationMarkers).toHaveBeenCalledTimes(1);
      expect(mockRemoveUserMarker).toHaveBeenCalledTimes(1);
      expect(mockRemoveMap).toHaveBeenCalledTimes(1);
    });
  });

  describe('events', () => {
    it('emits selectStation when station markers trigger selection callback', () => {
      const wrapper = mount(InteractiveMap);

      expect(capturedSelectCallback).toBeDefined();
      expect(wrapper.emitted('selectStation')).toBeUndefined();

      capturedSelectCallback!(stationGalpLisbonFixture);

      expect(wrapper.emitted('selectStation')).toHaveLength(1);
      expect(wrapper.emitted('selectStation')?.[0]).toEqual([stationGalpLisbonFixture]);
    });
  });
});