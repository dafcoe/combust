import {
  AttributionControl,
  Map,
  type MapOptions,
  NavigationControl,
} from 'maplibre-gl';
import {
  type Ref,
  shallowRef,
  watch,
} from 'vue';
import {
  DEFAULT_MAP_ZOOM,
  MAP_STYLE_DARK_URL,
  MAP_STYLE_LIGHT_URL,
} from '../interactive-map.constant.ts';
import { useAppSettings } from '@/modules/app-settings';
import { useGeolocation } from '@/modules/geolocation';

export function useInteractiveMap(mapContainer: Ref<HTMLDivElement | null>) {
  const map = shallowRef<Map | null>(null);

  const { coords } = useGeolocation();
  const { isThemeDark } = useAppSettings();

  function createMap(): void {
    if (!mapContainer.value) return;

    const mapOptions: MapOptions = {
      container: mapContainer.value,
      style: isThemeDark.value ? MAP_STYLE_DARK_URL : MAP_STYLE_LIGHT_URL,
      center: [coords.value.longitude, coords.value.latitude],
      zoom: DEFAULT_MAP_ZOOM,
      attributionControl: false,
    };

    map.value = new Map(mapOptions);
  }

  function addControlsToMap(): void {
    map.value?.addControl(
      new AttributionControl({ compact: true }),
      'bottom-left',
    );

    map.value?.addControl(
      new NavigationControl({ showCompass: true, showZoom: true }),
      'bottom-right',
    );
  }

  function registerMapEventListeners(): void {
    map.value?.on(
      'load',
      () => { map.value?.resize(); },
    );

    map.value?.on(
      'error',
      (event) => { console.error('[MapLibre error]', event); },
    );
  }

  function initMap(): void {
    createMap();
    addControlsToMap();
    registerMapEventListeners();
  }

  function removeMap(): void {
    if (!map.value) return;

    map.value.remove();
    map.value = null;
  }

  function updateMapTheme(isDark: boolean): void {
    if (!map.value) return;

    map.value.setStyle(isDark ? MAP_STYLE_DARK_URL : MAP_STYLE_LIGHT_URL);
  }

  watch(
    isThemeDark,
    updateMapTheme,
  );

  return {
    map,
    initMap,
    removeMap,
  };
}