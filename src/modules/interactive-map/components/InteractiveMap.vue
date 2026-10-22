<script setup lang="ts">
import {
  onMounted,
  onUnmounted,
  toRef,
  useTemplateRef,
} from 'vue';
import { useInteractiveMap } from '../composables/useInteractiveMap.ts';
import { useStationMarkers } from '../composables/useStationMarkers.ts';
import { useUserMarker } from '../composables/useUserMarker.ts';
import type { InteractiveMapEmits, InteractiveMapProps } from '../interactive-map.type.ts';
import { type Station } from '@/modules/station';

const props = withDefaults(defineProps<InteractiveMapProps>(), {
  stations: () => [],
});

const emits = defineEmits<InteractiveMapEmits>();

const mapContainer = useTemplateRef('map-container');

const { map, initMap, removeMap } = useInteractiveMap(mapContainer);

const {
  initMarker: initUserMarker,
  removeMarker: removeUserMarker,
} = useUserMarker(map);

const {
  initMarkers: initStationMarkers,
  removeMarkers: removeStationMarkers,
} = useStationMarkers(
  map,
  toRef(props, 'stations'),
  toRef(props, 'selectedFuelType'),
  (station: Station) => emits('selectStation', station),
);

function initInteractiveMap(): void {
  initMap();
  initUserMarker();
  initStationMarkers();
}

function removeInteractiveMap(): void {
  removeStationMarkers();
  removeUserMarker();
  removeMap();
}

onMounted(initInteractiveMap);
onUnmounted(removeInteractiveMap);
</script>

<template>
  <div class="interactive-map relative w-full h-full overflow-hidden">
    <div
      ref="map-container"
      class="absolute inset-0 w-full h-full"
    />
  </div>
</template>

<style scoped lang="scss">
:global(.maplibregl-marker:has(.station-marker--selected)) {
  z-index: 10;
}
</style>
