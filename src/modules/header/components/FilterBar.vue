<script setup lang="ts">
import {
  Map,
  Search,
  SlidersHorizontal,
} from '@lucide/vue';
</script>

<template>
  <div
    class="filter-bar"
    role="search"
  >
    <div class="filter-bar__search">
      <Search
        class="filter-bar__search-icon"
        :size="18"
        aria-hidden="true"
      />

      <span class="filter-bar__placeholder">
        Search stations or cities...
      </span>
    </div>

    <div class="filter-bar__actions">
      <button
        type="button"
        class="filter-bar__btn"
        aria-label="Map view options"
      >
        <Map
          :size="18"
          aria-hidden="true"
        />
      </button>

      <button
        type="button"
        class="filter-bar__btn"
        aria-label="Filter fuel stations"
      >
        <SlidersHorizontal
          :size="18"
          aria-hidden="true"
        />
      </button>
    </div>
  </div>
</template>

<style scoped lang="scss">
@reference '../../../styles/tailwind.css';

.filter-bar {
  @apply flex items-center justify-between gap-4;
  @apply py-1 px-2;
  @apply rounded-xl select-none;
  background-color: var(--color-bg-subtle);
  border: 1px solid var(--color-border-subtle);

  &__search {
    @apply flex items-center gap-2;
  }

  &__search-icon {
    @apply shrink-0;
    color: var(--color-text-muted);
  }

  &__placeholder {
    @apply text-sm truncate font-normal;
    color: var(--color-text-muted);
  }

  &__actions {
    @apply flex items-center gap-2;
  }

  &__btn {
    @apply inline-flex items-center justify-center;
    @apply p-1.5;
    @apply rounded-lg;
    @apply cursor-pointer;
    @apply transition-colors duration-150 ease-out;
    @apply hover:bg-black/5 dark:hover:bg-white/10;
    @apply focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500;
    @apply active:scale-95;
  }
}
</style>
