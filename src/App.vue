<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue';
import { useAppSettings } from '@/modules/app-settings';
import { useGeolocation } from '@/modules/geolocation';
import { HeaderBar } from '@/modules/header';
import { InteractiveMap } from '@/modules/interactive-map';
import { useStations } from '@/modules/station';

useAppSettings();
const { watchPosition, stopWatching } = useGeolocation();
const { stations, loadStations } = useStations();

onMounted(() => {
  watchPosition();
  loadStations();
});

onUnmounted(() => {
  stopWatching();
});
</script>

<template>
  <main class="w-screen h-screen overflow-hidden">
    <HeaderBar />
    <InteractiveMap :stations="stations" />
  </main>
</template>
