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

const dynamicClassList = computed(() => {
  if (props.isSelected) {
    return {
      marker: 'scale-105 z-30',
      card: 'bg-white dark:bg-slate-900 border-blue-500 shadow-blue-500/20 ring-2 ring-blue-500/50',
      cardPin: 'bg-white dark:bg-slate-900 border-blue-500',
    };
  }

  return {
    marker: 'hover:scale-105 hover:z-20',
    card: 'bg-white/95 dark:bg-slate-900/95 border-slate-200/90 dark:border-slate-700/90 hover:border-slate-300 dark:hover:border-slate-600',
    cardPin: 'bg-white/95 dark:bg-slate-900/95 border-slate-200/90 dark:border-slate-700/90',
  };
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
    class="station-marker group relative inline-flex flex-col items-center cursor-pointer select-none outline-none focus-visible:ring-2 focus-visible:ring-red-500 rounded-xl transition-transform duration-200"
    :class="dynamicClassList.marker"
    role="button"
    tabindex="0"
    :aria-label="ariaLabel"
    @click="handleSelect"
    data-testid="station-marker"
    @keydown.enter="handleSelect"
    @keydown.space.prevent="handleSelect"
  >
    <!-- Marker Card Bubble -->
    <div
      class="station-marker__card relative z-1 flex flex-col items-center overflow-hidden border rounded-xl min-w-8 shadow-md backdrop-blur-md transition-colors duration-200"
      :class="dynamicClassList.card"
    >
      <div class="w-6 h-6 shrink-0">
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
        class="w-full p-0.5 text-[11px] font-medium leading-none"
      />
    </div>

    <!-- Map Pin Anchor Pointer (Triangle at bottom) -->
    <div
      class="station-marker__card-pin z-0 w-2.5 h-2.5 -mt-1.5 rotate-45 border-r border-b transition-colors duration-200 shadow-sm"
      :class="dynamicClassList.cardPin"
    />
  </div>
</template>
