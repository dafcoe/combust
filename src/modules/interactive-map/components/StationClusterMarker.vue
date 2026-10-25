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
  @apply rounded-full ring-2 ring-white/80;
  @apply text-white text-xs font-bold select-none cursor-pointer;
  @apply bg-cyan-600/80;
  @apply w-8 h-8 shadow-sm;
  @apply transition-transform duration-200 outline-none;

  @variant dark {
    @apply bg-cyan-500/80;
    @apply ring-white/60;
  }

  &--md {
    @apply bg-cyan-700/80;
    @apply w-10 h-10;

    @variant dark {
      @apply bg-cyan-600/80;
    }
  }

  &--lg {
    @apply w-12 h-12;
    @apply text-base;
    @apply bg-cyan-800/80;

    @variant dark {
      @apply bg-cyan-700/80;
    }
  }

  &:hover {
    @apply scale-110;
  }

  &:active {
    @apply scale-95;
  }
}
</style>
