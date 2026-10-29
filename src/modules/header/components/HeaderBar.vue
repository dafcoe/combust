<script setup lang="ts">
import ActionBar from './ActionBar.vue';
import RefinementBar from './RefinementBar.vue';
import { AppLogo } from '@/modules/app-logo';
</script>

<template>
  <header class="header-bar">
    <AppLogo class="header-bar__logo" />

    <ActionBar class="header-bar__action-bar" />

    <RefinementBar class="header-bar__refinement-bar" />
  </header>
</template>

<style scoped lang="scss">
@reference '../../../styles/tailwind.css';

.header-bar {
  @apply mobility-panel;
  @apply fixed top-[max(0,env(safe-area-inset-top))] inset-x-0 md:inset-x-auto md:top-4 md:left-1/2 z-20;
  @apply flex justify-between items-center gap-1 md:gap-6 flex-wrap md:flex-nowrap;
  @apply pt-1 pb-2 px-2 md:py-2 md:px-4;
  @apply rounded-b-xl md:rounded-xl;
  @apply md:w-full md:max-w-4/5;
  @apply md:-translate-x-1/2;

  &__logo {
    @apply order-1;
  }

  &__action-bar {
    @apply order-2 md:order-3;
  }

  &__refinement-bar {
    @apply order-3 md:order-2;
    @apply w-full md:max-w-3/5;
  }
}
</style>
