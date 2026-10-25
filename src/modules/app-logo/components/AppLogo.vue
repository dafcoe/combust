<script setup lang="ts">
</script>

<template>
  <div
    class="app-logo"
    role="img"
    aria-label="Combust"
  >
    <svg
      class="app-logo__icon"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M 20.19 17.74 A 10 10 0 0 1 2 12 A 10 10 0 0 1 18.69 4.57"
        stroke="currentColor"
        stroke-width="4"
        stroke-linecap="round"
      />
      <polygon
        points="16.2,1.2 24,6.5 17.2,8.4"
        fill="currentColor"
      />
    </svg>

    <span
      class="app-logo__text"
      aria-hidden="true"
    >
      ombust
    </span>
  </div>
</template>

<style scoped lang="scss">
@reference '../../../styles/tailwind.css';

.app-logo {
  @apply flex items-center;
  @apply select-none;

  &__icon {
    @apply shrink-0;
    @apply w-6 h-6;
    @apply text-cyan-500;
  }

  &__text {
    @apply text-xl text-black font-bold tracking-tight leading-none;

    @variant dark {
      @apply text-white;
    }
  }
}
</style>
