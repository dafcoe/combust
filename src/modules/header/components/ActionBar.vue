<script setup lang="ts">
import { CircleUser, MapPin } from '@lucide/vue';
import { useGeolocation } from '@/modules/geolocation';
import { useInteractiveMapPositioner } from '@/modules/interactive-map';

const { flyToUserLocation } = useInteractiveMapPositioner();
const { isLocating } = useGeolocation();

async function handleCenterUserLocation(): Promise<void> {
  await flyToUserLocation();
}
</script>

<template>
  <div class="action-bar">
    <div class="action-bar__actions">
      <button
        type="button"
        class="action-bar__btn"
        :class="{ 'action-bar__btn--locating': isLocating }"
        :aria-busy="isLocating"
        aria-label="Center map on your location"
        @click="handleCenterUserLocation"
      >
        <MapPin class="action-bar__btn-icon" />
      </button>

      <button
        type="button"
        class="action-bar__btn"
        aria-label="User settings"
      >
        <CircleUser class="action-bar__btn-icon" />
      </button>
    </div>
  </div>
</template>

<style scoped lang="scss">
@reference '../../../styles/tailwind.css';

.action-bar {
  @apply flex items-center justify-between gap-4;

  &__actions {
    @apply flex items-center gap-1;
  }

  &__btn {
    @apply inline-flex items-center justify-center;
    @apply p-2;
    @apply rounded-full select-none cursor-pointer;
    @apply text-black md:text-gray-700 dark:text-white;
    @apply transition-colors duration-200 ease-out;
    @apply hover:bg-black/5 dark:hover:bg-white/10;
    @apply active:scale-95;
    @apply focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500;

    &--locating {
      @apply animate-pulse;
    }
  }

  &__btn-icon {
    @apply w-5 h-5 md:w-6 md:h-6;
  }
}
</style>
