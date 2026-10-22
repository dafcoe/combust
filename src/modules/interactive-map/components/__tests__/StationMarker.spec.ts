import { mount } from '@vue/test-utils';
import StationMarker from '../StationMarker.vue';
import { stationGalpLisbonFixture } from '@/modules/station/index.testing';

describe('StationMarker', () => {
  describe('rendering', () => {
    it('renders the brand logo with correct attributes', () => {
      const wrapper = mount(StationMarker, {
        props: { station: stationGalpLisbonFixture },
      });

      const img = wrapper.find('img');
      expect(img.attributes('src')).toBe(stationGalpLisbonFixture.brandLogoUrl);
      expect(img.attributes('alt')).toBe(stationGalpLisbonFixture.brand);
    });

    it('renders only badges for fuels with valid prices', () => {
      const station = {
        ...stationGalpLisbonFixture,
        prices: { diesel: 1.619, gasoline95: null, gasoline98: null, lpg: null },
      };
      const wrapper = mount(StationMarker, { props: { station } });

      expect(wrapper.findAllComponents({ name: 'FuelPriceBadge' })).toHaveLength(1);
    });
  });

  describe('selection', () => {
    it('applies selected class when isSelected is true', () => {
      const wrapper = mount(StationMarker, {
        props: { station: stationGalpLisbonFixture, isSelected: true },
      });

      expect(wrapper.classes()).toContain('station-marker--selected');
    });
  });

  describe('aria-label', () => {
    it('generates multi-fuel aria label by default', () => {
      const wrapper = mount(StationMarker, {
        props: { station: stationGalpLisbonFixture },
      });

      expect(wrapper.attributes('aria-label')).toBe(
        `${stationGalpLisbonFixture.brand} station with 4 fuel prices`,
      );
    });

    it('generates single-fuel aria label with price', () => {
      const wrapper = mount(StationMarker, {
        props: { station: stationGalpLisbonFixture, selectedFuelType: 'diesel' },
      });

      expect(wrapper.attributes('aria-label')).toContain('Diesel');
      expect(wrapper.attributes('aria-label')).toContain('1.619');
    });

    it('generates fallback aria label when selected fuel price is null', () => {
      const station = { ...stationGalpLisbonFixture, prices: { ...stationGalpLisbonFixture.prices, diesel: null } };
      const wrapper = mount(StationMarker, {
        props: { station, selectedFuelType: 'diesel' },
      });

      expect(wrapper.attributes('aria-label')).toContain('Not available');
    });
  });

  describe('interactions', () => {
    it('emits select and click events when clicked', async () => {
      const wrapper = mount(StationMarker, {
        props: { station: stationGalpLisbonFixture },
      });

      await wrapper.trigger('click');

      expect(wrapper.emitted('select')?.[0]).toEqual([stationGalpLisbonFixture]);
      expect(wrapper.emitted('click')?.[0]).toEqual([stationGalpLisbonFixture]);
    });

    it('emits events on keyboard Enter and Space', async () => {
      const wrapper = mount(StationMarker, {
        props: { station: stationGalpLisbonFixture },
      });

      await wrapper.trigger('keydown.enter');
      await wrapper.trigger('keydown.space');

      expect(wrapper.emitted('select')).toHaveLength(2);
      expect(wrapper.emitted('click')).toHaveLength(2);
    });
  });
});