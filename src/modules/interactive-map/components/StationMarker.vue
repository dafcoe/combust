<script setup lang="ts">
import { computed } from 'vue';
import type { StationMarkerEmits, StationMarkerProps } from '../interactive-map.type';
import {
  formatFuelPrice,
  FUEL_TYPE_SHORT_LABELS_MAP,
  FUEL_TYPES,
  FuelPriceBadge,
  type FuelType,
} from '@/modules/fuel';

const props = withDefaults(defineProps<StationMarkerProps>(), {
  selectedFuelType: null,
  isSelected: false,
});

const emit = defineEmits<StationMarkerEmits>();

const isSingleFuelMode = computed((): boolean => {
  return props.selectedFuelType !== null && props.selectedFuelType !== undefined;
});

const selectedPrice = computed((): number | null => {
  if (!props.selectedFuelType) return null;

  return props.station.prices[props.selectedFuelType] ?? null;
});

const availableFuels = computed((): FuelType[] => {
  return FUEL_TYPES.filter((fuelType: FuelType) => {
    const price = props.station.prices[fuelType];

    return price !== null && price !== undefined;
  });
});

const ariaLabel = computed((): string => {
  const brand = props.station.brand || props.station.name;

  if (!isSingleFuelMode.value || !props.selectedFuelType) {
    return `${brand} station with ${availableFuels.value.length} fuel prices`;
  }

  const priceText = selectedPrice.value !== null ? formatFuelPrice(selectedPrice.value) : 'Not available';

  return `${brand} - ${FUEL_TYPE_SHORT_LABELS_MAP[props.selectedFuelType]}: ${priceText}`;
});

function handleSelect(): void {
  emit('select', props.station);
  emit('click', props.station);
}
</script>

<template>
  <div
    class="station-marker"
    :class="{ 'station-marker--selected': isSelected }"
    role="button"
    tabindex="0"
    data-testid="station-marker"
    :aria-label="ariaLabel"
    @click="handleSelect"
    @keydown.enter="handleSelect"
    @keydown.space.prevent="handleSelect"
  >
    <div class="station-marker__card">
      <div class="station-marker__card-image-holder">
        <img
          :src="station.brandLogoUrl"
          :alt="station.brand"
          class="w-full h-full object-contain"
        >
      </div>

      <FuelPriceBadge
        v-for="fuel in availableFuels"
        :key="fuel"
        :fuel-type="fuel"
        :price="station.prices[fuel]"
      />
    </div>

    <div class="station-marker__card-pin" />
  </div>
</template>

<style scoped lang="scss">
@reference '../../../styles/tailwind.css';

.station-marker {
  $root: &;

  @apply inline-flex flex-col items-center;
  @apply cursor-pointer select-none outline-none;
  @apply transition-transform duration-200 ease-out;

  &__card {
    @apply z-1;
    @apply flex flex-col items-center;
    @apply rounded-lg border-2 border-white;
    @apply min-w-8 overflow-hidden;
    @apply bg-white;
    @apply backdrop-blur-md;
    @apply transition-colors duration-200 ease-out;

    @variant dark {
      @apply border-gray-700/60;
      @apply bg-gray-700/60;
    }
  }

  &__card-image-holder {
    @apply shrink-0;
    @apply w-7 h-6;
  }

  &__card-pin {
    @apply -mt-1.5;
    @apply border-r-2 border-b-2 border-white;
    @apply w-2.5 h-2.5;
    @apply bg-white;
    @apply backdrop-blur-md;
    @apply rotate-45 shadow-sm;
    @apply transition-colors duration-200 ease-out;

    @variant dark {
      @apply border-gray-700/60;
      @apply bg-gray-700/60;
    }
  }

  &--selected {
    @apply -translate-y-1.5;

    #{$root} {
      &__card {
        @apply border-gray-400;

        @variant dark {
          @apply border-gray-500;
        }
      }

      &__card-pin {
        @apply border-gray-400;
        @apply bg-gray-400;

        @variant dark {
          @apply border-gray-500;
          @apply bg-gray-500;
        }
      }
    }
  }

  &:hover {
    @apply -translate-y-1.5;
  }
}
</style>
