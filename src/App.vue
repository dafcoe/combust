<script setup lang="ts">
import { onMounted } from 'vue';
import { useAppSettings } from '@/modules/app-settings';
import { HeaderBar } from '@/modules/header';
import { InteractiveMap } from '@/modules/interactive-map';
import { useStations } from '@/modules/station';

useAppSettings();
const { stations, loadStations } = useStations();

onMounted(() => {
  loadStations();
});
</script>

<template>
  <main class="w-screen h-screen overflow-hidden">
    <HeaderBar />
    <InteractiveMap :stations="stations" />
  </main>
</template>
