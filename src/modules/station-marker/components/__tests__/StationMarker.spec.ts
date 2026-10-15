import { mount } from '@vue/test-utils';
import StationMarker from '../StationMarker.vue';
import { type Station, stationGalpLisboaFixture, stationRepsolMadridFixture } from '@/modules/station';

describe('StationMarker', () => {
  const baseStation: Station = {
    ...stationGalpLisboaFixture,
    distanceKm: 2.34,
  };

  it('renders station brand name and formatted distance', () => {
    const wrapper = mount(StationMarker, {
      props: {
        station: baseStation,
      },
    });

    const brandEl = wrapper.find('[data-testid="station-brand"]');
    const distanceEl = wrapper.find('[data-testid="station-distance"]');

    expect(brandEl.exists()).toBe(true);
    expect(brandEl.text()).toBe('GALP');
    expect(distanceEl.exists()).toBe(true);
    expect(distanceEl.text()).toBe('2.3 km');
  });

  it('falls back to station name if brand is empty', () => {
    const wrapper = mount(StationMarker, {
      props: {
        station: {
          ...baseStation,
          brand: '',
          name: 'Independent Station',
        },
      },
    });

    const brandEl = wrapper.find('[data-testid="station-brand"]');
    expect(brandEl.text()).toBe('Independent Station');
  });

  it('does not render distance when distanceKm is not provided', () => {
    const wrapper = mount(StationMarker, {
      props: {
        station: {
          ...baseStation,
          distanceKm: undefined,
        },
      },
    });

    expect(wrapper.find('[data-testid="station-distance"]').exists()).toBe(false);
  });

  describe('single fuel mode', () => {
    it('renders single fuel badge when selectedFuelType is provided and available', () => {
      const wrapper = mount(StationMarker, {
        props: {
          station: baseStation,
          selectedFuelType: 'gasoline95',
        },
      });

      expect(wrapper.find('[data-testid="single-price-badge"]').exists()).toBe(true);
      expect(wrapper.find('[data-testid="multi-price-grid"]').exists()).toBe(false);

      const badge = wrapper.find('[data-testid="fuel-badge-gasoline95"]');
      expect(badge.exists()).toBe(true);
      expect(badge.text()).toContain('95');
      expect(badge.text()).toContain('1.759 €');
    });

    it('renders N/A badge when selected fuel is not sold by station', () => {
      const wrapper = mount(StationMarker, {
        props: {
          station: baseStation, // baseStation has gasoline98: null
          selectedFuelType: 'gasoline98',
        },
      });

      expect(wrapper.find('[data-testid="single-price-badge"]').exists()).toBe(true);
      const unavailBadge = wrapper.find('[data-testid="fuel-badge-gasoline98-unavailable"]');
      expect(unavailBadge.exists()).toBe(true);
      expect(unavailBadge.text()).toContain('98');
      expect(unavailBadge.text()).toContain('N/A');
    });
  });

  describe('all fuels mode (multi-fuel)', () => {
    it('renders all available fuels when selectedFuelType is null', () => {
      const wrapper = mount(StationMarker, {
        props: {
          station: baseStation,
          selectedFuelType: null,
        },
      });

      expect(wrapper.find('[data-testid="single-price-badge"]').exists()).toBe(false);
      expect(wrapper.find('[data-testid="multi-price-grid"]').exists()).toBe(true);

      // baseStation has diesel (1.619) and gasoline95 (1.759)
      const g95Badge = wrapper.find('[data-testid="fuel-badge-gasoline95"]');
      const dieselBadge = wrapper.find('[data-testid="fuel-badge-diesel"]');
      const g98Badge = wrapper.find('[data-testid="fuel-badge-gasoline98"]');
      const lpgBadge = wrapper.find('[data-testid="fuel-badge-lpg"]');

      expect(g95Badge.exists()).toBe(true);
      expect(g95Badge.text()).toContain('95');
      expect(g95Badge.text()).toContain('1.759 €');

      expect(dieselBadge.exists()).toBe(true);
      expect(dieselBadge.text()).toContain('Diesel');
      expect(dieselBadge.text()).toContain('1.619 €');

      expect(g98Badge.exists()).toBe(false);
      expect(lpgBadge.exists()).toBe(false);
    });

    it('renders Repsol prices correctly (gasoline98 and lpg)', () => {
      const wrapper = mount(StationMarker, {
        props: {
          station: stationRepsolMadridFixture,
        },
      });

      const g98Badge = wrapper.find('[data-testid="fuel-badge-gasoline98"]');
      const lpgBadge = wrapper.find('[data-testid="fuel-badge-lpg"]');

      expect(g98Badge.exists()).toBe(true);
      expect(g98Badge.text()).toContain('98');
      expect(g98Badge.text()).toContain('1.899 €');

      expect(lpgBadge.exists()).toBe(true);
      expect(lpgBadge.text()).toContain('LPG');
      expect(lpgBadge.text()).toContain('0.989 €');
    });

    it('renders fallback when no prices are available', () => {
      const wrapper = mount(StationMarker, {
        props: {
          station: {
            ...baseStation,
            prices: {
              gasoline95: null,
              gasoline98: null,
              diesel: null,
              lpg: null,
            },
          },
        },
      });

      expect(wrapper.find('[data-testid="no-prices-fallback"]').exists()).toBe(true);
      expect(wrapper.find('[data-testid="no-prices-fallback"]').text()).toBe('No prices');
    });
  });

  describe('selection and interaction', () => {
    it('applies selected styles when isSelected is true', () => {
      const wrapper = mount(StationMarker, {
        props: {
          station: baseStation,
          isSelected: true,
        },
      });

      const root = wrapper.find('[data-testid="station-marker"]');
      expect(root.classes()).toContain('scale-105');
      expect(root.classes()).toContain('z-30');
    });

    it('emits select and click events with the station when clicked', async () => {
      const wrapper = mount(StationMarker, {
        props: {
          station: baseStation,
        },
      });

      await wrapper.trigger('click');

      expect(wrapper.emitted('select')).toHaveLength(1);
      expect(wrapper.emitted('select')?.[0]).toEqual([baseStation]);

      expect(wrapper.emitted('click')).toHaveLength(1);
      expect(wrapper.emitted('click')?.[0]).toEqual([baseStation]);
    });

    it('emits select and click events when Enter key is pressed', async () => {
      const wrapper = mount(StationMarker, {
        props: {
          station: baseStation,
        },
      });

      await wrapper.trigger('keydown.enter');

      expect(wrapper.emitted('select')).toHaveLength(1);
      expect(wrapper.emitted('click')).toHaveLength(1);
    });

    it('emits select and click events when Space key is pressed', async () => {
      const wrapper = mount(StationMarker, {
        props: {
          station: baseStation,
        },
      });

      await wrapper.trigger('keydown.space');

      expect(wrapper.emitted('select')).toHaveLength(1);
      expect(wrapper.emitted('click')).toHaveLength(1);
    });
  });

  describe('accessibility', () => {
    it('sets appropriate aria-label in single fuel mode', () => {
      const wrapper = mount(StationMarker, {
        props: {
          station: baseStation,
          selectedFuelType: 'gasoline95',
        },
      });

      const root = wrapper.find('[data-testid="station-marker"]');
      expect(root.attributes('aria-label')).toBe('GALP - 95: 1.759 €');
    });

    it('sets appropriate aria-label in all fuels mode', () => {
      const wrapper = mount(StationMarker, {
        props: {
          station: baseStation,
        },
      });

      const root = wrapper.find('[data-testid="station-marker"]');
      expect(root.attributes('aria-label')).toBe('GALP station with 2 fuel prices');
    });
  });
});
