<script setup lang="ts">
import { computed } from 'vue';
import type { StationClusterMarkerEmits, StationClusterMarkerProps } from '../interactive-map.type';
import { formatStationClusterCount } from '../utils/formatter.util.ts';

const props = defineProps<StationClusterMarkerProps>();
const emit = defineEmits<StationClusterMarkerEmits>();

const sizeClass = computed((): string => {
  if (props.count < 10) return 'cluster-marker--sm';
  if (props.count < 50) return 'cluster-marker--md';

  return 'cluster-marker--lg';
});

function handleSelect(): void {
  emit('select', props.id);
  emit('click', props.id);
}
</script>

<template>
  <div
    class="cluster-marker"
    :class="sizeClass"
    :aria-label="`Cluster with ${count} fuel stations`"
    role="button"
    tabindex="0"
    data-testid="cluster-marker"
    @click="handleSelect"
    @keydown.enter="handleSelect"
    @keydown.space.prevent="handleSelect"
  >
    <span>{{ formatStationClusterCount(count) }}</span>
  </div>
</template>

<style scoped lang="scss">
@reference '../../../styles/tailwind.css';

.cluster-marker {
  @apply flex items-center justify-center;
  @apply rounded-full font-bold select-none cursor-pointer;
  @apply bg-blue-600 text-white shadow-lg;
  @apply ring-4 ring-white/90;
  @apply transition-transform duration-200 outline-none;
  @apply hover:scale-110 active:scale-95;

  @variant dark {
    @apply bg-blue-500;
    @apply ring-gray-800/90;
  }

  &--sm {
    @apply w-9 h-9 text-xs;
  }

  &--md {
    @apply w-11 h-11 text-sm bg-blue-700;

    @variant dark {
      @apply bg-blue-600;
    }
  }

  &--lg {
    @apply w-13 h-13 text-base bg-blue-800;

    @variant dark {
      @apply bg-blue-700;
    }
  }
}
</style>
