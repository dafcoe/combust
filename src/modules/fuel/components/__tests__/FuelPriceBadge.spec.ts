import { mount } from '@vue/test-utils';
import type { FuelType } from '../../fuel.type.ts';
import FuelPriceBadge from '../FuelPriceBadge.vue';

describe('FuelPriceBadge', () => {
  const FUEL_TYPES: FuelType[] = ['gasoline95', 'gasoline98', 'diesel', 'lpg'];

  describe('rendering', () => {
    it('should render the badge when price is a valid number', () => {
      const wrapper = mount(FuelPriceBadge, {
        props: { fuelType: 'gasoline95', price: 1.619 },
      });

      expect(wrapper.find('.fuel-price-badge').exists()).toBe(true);
    });

    it('should render the badge when price is null', () => {
      const wrapper = mount(FuelPriceBadge, {
        props: { fuelType: 'gasoline95', price: null },
      });

      expect(wrapper.find('.fuel-price-badge').exists()).toBe(true);
    });

    it('should render the badge when price is 0', () => {
      const wrapper = mount(FuelPriceBadge, {
        props: { fuelType: 'gasoline95', price: 0 },
      });

      expect(wrapper.find('.fuel-price-badge').exists()).toBe(true);
    });
  });

  describe('displayed text', () => {
    it('should display the formatted price', () => {
      const wrapper = mount(FuelPriceBadge, {
        props: { fuelType: 'diesel', price: 1.619 },
      });

      expect(wrapper.text()).toBe('1.619');
    });

    it('should display the dash placeholder when price is null', () => {
      const wrapper = mount(FuelPriceBadge, {
        props: { fuelType: 'diesel', price: null },
      });

      expect(wrapper.text()).toBe('-.---');
    });

    it('should display a formatted zero when price is 0', () => {
      const wrapper = mount(FuelPriceBadge, {
        props: { fuelType: 'diesel', price: 0 },
      });

      expect(wrapper.text()).toBe('0.000');
    });
  });

  describe('static classes', () => {
    it('should match the base utility classes snapshot', () => {
      const wrapper = mount(FuelPriceBadge, {
        props: { fuelType: 'gasoline95', price: 1.0 },
      });

      expect(wrapper.find('.fuel-price-badge').classes()).toMatchSnapshot();
    });
  });

  describe('fuel type style classes', () => {
    it.each(FUEL_TYPES)(
      'should match the style classes snapshot for %s',
      (fuelType) => {
        const wrapper = mount(FuelPriceBadge, {
          props: { fuelType, price: 1.0 },
        });

        expect(wrapper.find('.fuel-price-badge').classes()).toMatchSnapshot();
      },
    );
  });
});
