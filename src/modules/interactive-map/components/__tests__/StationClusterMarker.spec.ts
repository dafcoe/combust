import { mount } from '@vue/test-utils';
import StationClusterMarker from '../StationClusterMarker.vue';

describe('StationClusterMarker', () => {
  describe('rendering', () => {
    it('renders the point count correctly', () => {
      const wrapper = mount(StationClusterMarker, {
        props: { id: 1, count: 5 },
      });

      expect(wrapper.text()).toBe('5');
    });

    it('formats point count when greater than or equal to 1000', () => {
      const wrapper = mount(StationClusterMarker, {
        props: { id: 1, count: 1500 },
      });

      expect(wrapper.text()).toBe('1.5k');
    });

    it('has accessible role and tabindex attributes', () => {
      const wrapper = mount(StationClusterMarker, {
        props: { id: 1, count: 8 },
      });

      expect(wrapper.attributes('role')).toBe('button');
      expect(wrapper.attributes('tabindex')).toBe('0');
      expect(wrapper.attributes('aria-label')).toBe('Cluster with 8 fuel stations');
    });
  });

  describe('size classes', () => {
    it('applies small size class when pointCount is less than 10', () => {
      const wrapper = mount(StationClusterMarker, {
        props: { id: 1, count: 9 },
      });

      expect(wrapper.classes()).toContain('cluster-marker--sm');
    });

    it('applies medium size class when pointCount is between 10 and 49', () => {
      const wrapper = mount(StationClusterMarker, {
        props: { id: 1, count: 25 },
      });

      expect(wrapper.classes()).toContain('cluster-marker--md');
    });

    it('applies large size class when pointCount is 50 or greater', () => {
      const wrapper = mount(StationClusterMarker, {
        props: { id: 1, count: 50 },
      });

      expect(wrapper.classes()).toContain('cluster-marker--lg');
    });
  });

  describe('interaction', () => {
    it('emits click and select events with clusterId on click', async () => {
      const wrapper = mount(StationClusterMarker, {
        props: { id: 42, count: 10 },
      });

      await wrapper.trigger('click');

      expect(wrapper.emitted('click')).toHaveLength(1);
      expect(wrapper.emitted('click')).toHaveLength(1);
      expect(wrapper.emitted('select')?.[0]).toEqual([42]);
      expect(wrapper.emitted('select')?.[0]).toEqual([42]);
    });

    it('emits click and select events with clusterId on Enter keydown', async () => {
      const wrapper = mount(StationClusterMarker, {
        props: { id: 42, count: 10 },
      });

      await wrapper.trigger('keydown.enter');

      expect(wrapper.emitted('click')).toHaveLength(1);
      expect(wrapper.emitted('click')?.[0]).toEqual([42]);
      expect(wrapper.emitted('select')?.[0]).toEqual([42]);
      expect(wrapper.emitted('select')?.[0]).toEqual([42]);
    });

    it('emits click and select events with clusterId on Space keydown', async () => {
      const wrapper = mount(StationClusterMarker, {
        props: { id: 42, count: 10 },
      });

      await wrapper.trigger('keydown.space');

      expect(wrapper.emitted('click')).toHaveLength(1);
      expect(wrapper.emitted('click')?.[0]).toEqual([42]);
      expect(wrapper.emitted('select')?.[0]).toEqual([42]);
      expect(wrapper.emitted('select')?.[0]).toEqual([42]);
    });
  });
});
