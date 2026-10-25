import { mount } from '@vue/test-utils';
import ActionBar from '../ActionBar.vue';
import FilterBar from '../FilterBar.vue';
import HeaderBar from '../HeaderBar.vue';
import { AppLogo } from '@/modules/app-logo';

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
    flyToUserLocation: vi.fn().mockResolvedValue(undefined),
  }),
}));

describe('HeaderBar', () => {
  it('renders header container with semantic class', () => {
    const wrapper = mount(HeaderBar);

    const header = wrapper.find('header.header-bar');
    expect(header.exists()).toBe(true);
  });

  it('renders AppLogo, ActionBar, and FilterBar sub-components', () => {
    const wrapper = mount(HeaderBar);

    const appLogo = wrapper.findComponent(AppLogo);
    expect(appLogo.exists()).toBe(true);
    expect(appLogo.classes()).toContain('header-bar__logo');

    const actionBar = wrapper.findComponent(ActionBar);
    expect(actionBar.exists()).toBe(true);
    expect(actionBar.classes()).toContain('header-bar__actions');

    const filterBar = wrapper.findComponent(FilterBar);
    expect(filterBar.exists()).toBe(true);
    expect(filterBar.classes()).toContain('header-bar__filters');
  });
});
