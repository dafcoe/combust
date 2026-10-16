<script setup lang="ts">
import { FUEL_PRICE_BADGE_STYLES } from '../fuel.constant.ts';
import type { FuelPriceBadgeProps } from '../fuel.type.ts';
import { formatFuelPrice } from '../utils/formatter.util.ts';

defineProps<FuelPriceBadgeProps>();
</script>

<template>
  <div
    class="fuel-price-badge p-0.5 w-full text-[11px] font-medium leading-none"
    :class="[
      FUEL_PRICE_BADGE_STYLES[fuelType].badgeBg,
      FUEL_PRICE_BADGE_STYLES[fuelType].badgeBorder,
      FUEL_PRICE_BADGE_STYLES[fuelType].badgeText,
    ]"
  >
    {{ price !== null ? formatFuelPrice(price, false) : '-.---' }}
  </div>
</template>