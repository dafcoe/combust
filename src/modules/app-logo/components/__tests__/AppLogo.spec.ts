import { mount } from '@vue/test-utils';
import AppLogo from '../AppLogo.vue';

describe('AppLogo', () => {
  it('renders root element with semantic classes and accessibility attributes', () => {
    const wrapper = mount(AppLogo);

    const logo = wrapper.find('.app-logo');
    expect(logo.exists()).toBe(true);
    expect(logo.attributes('role')).toBe('img');
    expect(logo.attributes('aria-label')).toBe('Combust');
  });

  it('renders the SVG icon with aria-hidden and SVG elements', () => {
    const wrapper = mount(AppLogo);

    const icon = wrapper.find('svg.app-logo__icon');
    expect(icon.exists()).toBe(true);
    expect(icon.attributes('aria-hidden')).toBe('true');
    expect(icon.attributes('viewBox')).toBe('0 0 24 24');

    const path = icon.find('path');
    expect(path.exists()).toBe(true);
    expect(path.attributes('stroke')).toBe('currentColor');

    const polygon = icon.find('polygon');
    expect(polygon.exists()).toBe(true);
    expect(polygon.attributes('fill')).toBe('currentColor');
  });

  it('renders the brand text "ombust" with aria-hidden', () => {
    const wrapper = mount(AppLogo);

    const text = wrapper.find('.app-logo__text');
    expect(text.exists()).toBe(true);
    expect(text.attributes('aria-hidden')).toBe('true');
    expect(text.text()).toBe('ombust');
  });
});
