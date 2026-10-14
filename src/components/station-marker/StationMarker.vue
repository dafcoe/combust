<script setup lang="ts">
import { computed } from 'vue';
import type { StationMarkerEmits, StationMarkerFuelBadgeStyle, StationMarkerProps } from './station-marker.type.ts';
import { FUEL_TYPE_SHORT_LABELS, FUEL_TYPES } from '@/constants';
import type { FuelType } from '@/types';

const props = withDefaults(defineProps<StationMarkerProps>(), {
  selectedFuelType: null,
  isSelected: false,
});

const emit = defineEmits<StationMarkerEmits>();

const FUEL_BADGE_STYLES: Record<FuelType, StationMarkerFuelBadgeStyle> = {
  gasoline95: {
    badgeBg: 'bg-emerald-50 dark:bg-emerald-950/40',
    badgeText: 'text-emerald-700 dark:text-emerald-300',
    badgeBorder: 'border-emerald-300/80 dark:border-emerald-800/80',
    chipBg: 'bg-emerald-600 text-white',
    chipText: 'text-emerald-700 dark:text-emerald-400',
  },
  gasoline98: {
    badgeBg: 'bg-sky-50 dark:bg-sky-950/40',
    badgeText: 'text-sky-700 dark:text-sky-300',
    badgeBorder: 'border-sky-300/80 dark:border-sky-800/80',
    chipBg: 'bg-sky-600 text-white',
    chipText: 'text-sky-700 dark:text-sky-400',
  },
  diesel: {
    badgeBg: 'bg-amber-50 dark:bg-amber-950/40',
    badgeText: 'text-amber-800 dark:text-amber-300',
    badgeBorder: 'border-amber-300/80 dark:border-amber-800/80',
    chipBg: 'bg-amber-600 text-white',
    chipText: 'text-amber-800 dark:text-amber-400',
  },
  lpg: {
    badgeBg: 'bg-purple-50 dark:bg-purple-950/40',
    badgeText: 'text-purple-700 dark:text-purple-300',
    badgeBorder: 'border-purple-300/80 dark:border-purple-800/80',
    chipBg: 'bg-purple-600 text-white',
    chipText: 'text-purple-700 dark:text-purple-400',
  },
};

function formatPrice(price: number | null | undefined): string {
  if (price === null || price === undefined) return '—';

  return `${price.toFixed(3)} €`;
}

function getBadgeStyle(fuel: FuelType): StationMarkerFuelBadgeStyle {
  return FUEL_BADGE_STYLES[fuel];
}

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

const formattedDistance = computed((): string | null => {
  if (props.station.distanceKm === null || props.station.distanceKm === undefined) {
    return null;
  }
  return `${props.station.distanceKm.toFixed(1)} km`;
});

const ariaLabel = computed((): string => {
  const brand = props.station.brand || props.station.name;

  if (!isSingleFuelMode.value || !props.selectedFuelType) {
    return `${brand} station with ${availableFuels.value.length} fuel prices`;
  }

  const priceText = selectedPrice.value !== null ? formatPrice(selectedPrice.value) : 'Not available';

  return `${brand} - ${FUEL_TYPE_SHORT_LABELS[props.selectedFuelType]}: ${priceText}`;
});

function handleSelect(): void {
  emit('select', props.station);
  emit('click', props.station);
}
</script>

<template>
  <div
    class="station-marker group relative inline-flex flex-col items-center cursor-pointer select-none outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-xl transition-transform duration-200"
    :class="[
      isSelected ? 'scale-105 z-30' : 'hover:scale-105 hover:z-20',
    ]"
    role="button"
    tabindex="0"
    :aria-label="ariaLabel"
    data-testid="station-marker"
    @click="handleSelect"
    @keydown.enter="handleSelect"
    @keydown.space.prevent="handleSelect"
  >
    <!-- Marker Card Bubble -->
    <div
      class="relative flex flex-col gap-1 px-2.5 py-1.5 rounded-xl border shadow-md backdrop-blur-md transition-colors duration-200"
      :class="[
        isSelected
          ? 'bg-white dark:bg-slate-900 border-blue-500 shadow-blue-500/20 ring-2 ring-blue-500/50'
          : 'bg-white/95 dark:bg-slate-900/95 border-slate-200/90 dark:border-slate-700/90 hover:border-slate-300 dark:hover:border-slate-600',
      ]"
    >
      <!-- Station Header (Brand & Optional Distance) -->
      <div class="flex items-center justify-between gap-2 border-b border-slate-100 dark:border-slate-800/80 pb-1">
        <span
          class="font-semibold text-xs text-slate-800 dark:text-slate-100 truncate max-w-[130px]"
          data-testid="station-brand"
        >
          {{ station.brand || station.name }}
        </span>
        <span
          v-if="formattedDistance"
          class="text-[10px] text-slate-500 dark:text-slate-400 font-medium whitespace-nowrap"
          data-testid="station-distance"
        >
          {{ formattedDistance }}
        </span>
      </div>


      <!-- Single Fuel Mode -->
      <div
        v-if="isSingleFuelMode && selectedFuelType"
        class="flex items-center gap-1.5"
        data-testid="single-price-badge"
      >
        <div
          v-if="selectedPrice !== null"
          class="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-lg border text-xs font-medium"
          :class="[
            getBadgeStyle(selectedFuelType).badgeBg,
            getBadgeStyle(selectedFuelType).badgeBorder,
            getBadgeStyle(selectedFuelType).badgeText,
          ]"
          :data-testid="`fuel-badge-${selectedFuelType}`"
        >
          <span
            class="px-1 py-0.5 rounded text-[10px] font-bold leading-none"
            :class="getBadgeStyle(selectedFuelType).chipBg"
          >
            {{ FUEL_TYPE_SHORT_LABELS[selectedFuelType] }}
          </span>
          <span class="font-bold text-xs tracking-tight">
            {{ formatPrice(selectedPrice) }}
          </span>
        </div>

        <div
          v-else
          class="inline-flex items-center gap-1 px-2 py-0.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-100/70 dark:bg-slate-800/50 text-slate-400 dark:text-slate-500 text-xs"
          :data-testid="`fuel-badge-${selectedFuelType}-unavailable`"
        >
          <span class="text-[10px] font-bold">{{ FUEL_TYPE_SHORT_LABELS[selectedFuelType] }}</span>
          <span>N/A</span>
        </div>
      </div>

      <!-- All Fuels Mode (Grid / List) -->
      <div
        v-else-if="availableFuels.length > 0"
        class="grid gap-1"
        :class="availableFuels.length > 2 ? 'grid-cols-2' : 'grid-cols-1'"
        data-testid="multi-price-grid"
      >
        <div
          v-for="fuel in availableFuels"
          :key="fuel"
          class="inline-flex items-center justify-between gap-1.5 px-1.5 py-0.5 rounded-md border text-[11px] font-medium"
          :class="[
            getBadgeStyle(fuel).badgeBg,
            getBadgeStyle(fuel).badgeBorder,
            getBadgeStyle(fuel).badgeText,
          ]"
          :data-testid="`fuel-badge-${fuel}`"
        >
          <span
            class="px-1 py-0.5 rounded text-[9px] font-bold leading-none"
            :class="getBadgeStyle(fuel).chipBg"
          >
            {{ FUEL_TYPE_SHORT_LABELS[fuel] }}
          </span>
          <span class="font-bold text-[11px] tracking-tight">
            {{ formatPrice(station.prices[fuel]) }}
          </span>
        </div>
      </div>

      <!-- Fallback when no prices are available -->
      <div
        v-else
        class="text-center text-[10px] text-slate-400 dark:text-slate-500 py-0.5"
        data-testid="no-prices-fallback"
      >
        No prices
      </div>
    </div>

    <!-- Map Pin Anchor Pointer (Triangle at bottom) -->
    <div
      class="w-2.5 h-2.5 -mt-1.5 rotate-45 border-r border-b transition-colors duration-200 shadow-sm"
      :class="[
        isSelected
          ? 'bg-white dark:bg-slate-900 border-blue-500'
          : 'bg-white/95 dark:bg-slate-900/95 border-slate-200/90 dark:border-slate-700/90',
      ]"
      data-testid="marker-pointer"
    />
  </div>
</template>
