import { mount } from '@vue/test-utils';
import ActionBar from '../ActionBar.vue';
import { mockIsLocating, resetGeolocationMock } from '@/modules/geolocation/index.testing.ts';

const mockFlyToUserLocation = vi.fn().mockResolvedValue(undefined);

vi.mock('@/modules/geolocation', async (importOriginal) => {
  const actual = await importOriginal<typeof import('@/modules/geolocation')>();
  const { mockUseGeolocation } = await import('@/modules/geolocation/index.testing.ts');

  return {
    ...actual,
    useGeolocation: mockUseGeolocation,
  };
});

vi.mock('@/modules/interactive-map', () => ({
  useInteractiveMapPositioner: () => ({
    flyToCoordinates: vi.fn(),
    flyToUserLocation: mockFlyToUserLocation,
  }),
}));

describe('ActionBar', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    resetGeolocationMock();
  });

  describe('rendering', () => {
    it('renders the action bar container and actions', () => {
      const wrapper = mount(ActionBar);

      expect(wrapper.find('.action-bar').exists()).toBe(true);
      expect(wrapper.find('.action-bar__actions').exists()).toBe(true);
      expect(wrapper.findAll('button.action-bar__btn')).toHaveLength(2);
    });

    it('renders user settings button with accessibility attributes', () => {
      const wrapper = mount(ActionBar);
      const settingsButton = wrapper.find('button[aria-label="User settings"]');

      expect(settingsButton.exists()).toBe(true);
      expect(settingsButton.attributes('type')).toBe('button');
      expect(settingsButton.find('svg').exists()).toBe(true);
    });
  });

  describe('center location button', () => {
    it('renders center location button with default non-locating state', () => {
      mockIsLocating.value = false;
      const wrapper = mount(ActionBar);
      const pinButton = wrapper.find('button[aria-label="Center map on your location"]');

      expect(pinButton.exists()).toBe(true);
      expect(pinButton.attributes('type')).toBe('button');
      expect(pinButton.attributes('aria-busy')).toBe('false');
      expect(pinButton.classes()).not.toContain('action-bar__btn--locating');
    });

    it('reflects locating state when isLocating is true', () => {
      mockIsLocating.value = true;
      const wrapper = mount(ActionBar);
      const pinButton = wrapper.find('button[aria-label="Center map on your location"]');

      expect(pinButton.attributes('aria-busy')).toBe('true');
      expect(pinButton.classes()).toContain('action-bar__btn--locating');
    });

    it('triggers flyToUserLocation when pin button is clicked', async () => {
      const wrapper = mount(ActionBar);
      const pinButton = wrapper.find('button[aria-label="Center map on your location"]');

      await pinButton.trigger('click');

      expect(mockFlyToUserLocation).toHaveBeenCalledTimes(1);
    });
  });
});
